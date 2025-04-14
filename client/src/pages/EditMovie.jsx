import { useContext, useState, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const EditMovie = () => {
  const [poster_path, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [release_date, setReleaseDate] = useState("");
  const { movieId } = useParams();
  const { movies, setMovies } = useContext(MovieContext);
  const nav = useNavigate();

  useEffect(() => {
    function getOneMovie() {
      axios
        .get(`${import.meta.env.VITE_API_URL}/movies/one-movie/${movieId}`)
        .then((res) => {
          console.log("here is one movie", res.data);
          setImage(res.data.poster_path);
          setTitle(res.data.title);
          setOverview(res.data.overview);
          setReleaseDate(res.data.release_date);
        })
        .catch((err) => console.log(err));
    }
    getOneMovie();
  }, [movieId]);

  function handleUpdateMovie(event) {
    event.preventDefault();
    const updatedMovie = {
      poster_path,
      title,
      overview,
      release_date,
    };
    axios
      .patch(
        `${import.meta.env.VITE_API_URL}/movies/update/${movieId}`,
        updatedMovie
      )
      .then((res) => {
        const newMovieArray = movies.map((oneMovie) => {
          if (oneMovie._id === movieId) {
            return res.data;
          } else {
            return oneMovie;
          }
        });

        console.log("new movie array", newMovieArray);
        setMovies(newMovieArray);
        nav("/all-movies");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h2>Edit a Movie</h2>
      <form
        onSubmit={(event) => {
          handleUpdateMovie(event, {
            poster_path,
            title,
            overview,
            release_date,
          });
        }}
      >
        <label>
          Movie Image:
          <input
            type="file"
            name="image"
            value={poster_path}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
          />
        </label>
        <label>
          Release Date:
          <input
            type="date"
            value={release_date}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
        </label>
        <button>Update</button>
      </form>
    </div>
  );
};
