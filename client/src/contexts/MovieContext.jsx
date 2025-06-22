import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieContext = createContext();

const MovieContextWrapper = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    async function getAllMovies() {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/movies/all-movies`
        );

        console.log("all movies", res);
        setMovies(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    getAllMovies();
  }, []);
  // Load favorites from localStorage on app load
  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    setFavorites(savedFavorites);
  }, []);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favorites));
  }, [favorites]);

  async function handleCreateMovie(event, aMovie) {
    event.preventDefault();

    const myFormData = new FormData();
    const image = event.target.poster_path.files[0];
    //Add all the properties to the form data with the .append( ) method
    myFormData.append("poster_path", image);
    myFormData.append("title", aMovie.title);
    myFormData.append("overview", aMovie.overview);
    myFormData.append("release_date", aMovie.release_date);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/movies/create-a-movie`,
        myFormData
      );
      console.log("movies created", data);
      setMovies([data, ...movies]);
      nav("/");
    } catch (error) {
      console.log(error);
      console.log("cant create a movie");
    }
  }
  function handleDeleteMovie(movieId) {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/movies/delete/${movieId}`)
      .then((res) => {
        console.log("movie removed from DB", res);
        //update the state on the frontend to reflect the backend
        const filteredMovies = movies.filter((movie) => {
          if (movie._id !== movieId) {
            return true;
          }
        });
        setMovies(filteredMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function toggleFavorite(movieId) {
    if (favorites.includes(movieId)) {
      // Remove from favorites
      setFavorites(favorites.filter((id) => id !== movieId));
    } else {
      // Add to favorites
      setFavorites([...favorites, movieId]);
    }
  }
  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        searchTerm,
        setSearchTerm,
        favorites,
        setFavorites,
        toggleFavorite,
        handleCreateMovie,
        handleDeleteMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
export { MovieContext, MovieContextWrapper };
