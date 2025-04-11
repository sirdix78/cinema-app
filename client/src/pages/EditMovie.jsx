import { useContext, useState, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const EditMovie = () => {
  const [poster_path, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [release_date, setReleaseDate] = useState("");
  const { handleCreateMovie } = useContext(MovieContext);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    function getOnePizza() {
      axios
        .get(`${import.meta.env.VITE_API_URL}/pizza/one-pizza/${pizzaId}`)
        .then((res) => {
          console.log("here is one pizza", res.data);
          setTitle(res.data.title);
          setToppings(res.data.toppings);
          setSize(res.data.size);
        })
        .catch((err) => console.log(err));
    }
    getOnePizza();
  }, [pizzaId]);

  function handleUpdateMovie(event) {
    event.preventDefault();
    const updatedMovie = {
      poster_path,
      title,
      description,
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
      <h2>Create a Movie</h2>
      <form
        onSubmit={(event) => {
          handleUpdateMovie(event, {
            poster_path,
            title,
            description,
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={release_date}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
        </label>
        <button>Update</button>
      </form>
    </div>
  );
};
