import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieContext = createContext();

const MovieContextWrapper = ({ children }) => {
  const [movies, setMovies] = useState([]);
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
        aMovie
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
  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        handleCreateMovie,
        handleDeleteMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
export { MovieContext, MovieContextWrapper };
