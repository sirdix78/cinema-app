import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export const AllMovies = () => {
  const { movies, handleDeleteMovie } = useContext(MovieContext);
  const { currentUser } = useContext(AuthContext);
  //to make an image as url (because is only the end of it in db)
  const getImageUrl = (path, size = "w500") =>
    `https://image.tmdb.org/t/p/${size}${path}`;
  return (
    <div className="profile-page">
      <h2>All Movies in our Cinema</h2>
      {movies?.map((oneMovie) => {
        return (
          <div key={oneMovie._id} className="movie-card">
            <img
              src={getImageUrl(oneMovie.poster_path)}
              alt={oneMovie.title}
              style={{ height: "200px" }}
            />
            <h3>Title: {oneMovie.title}</h3>
            <h4>Overview: {oneMovie.overview}</h4>
            <h5>Release date: {oneMovie.release_date}</h5>
            <section>
              <Link to={`/edit/${oneMovie._id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDeleteMovie(oneMovie._id)}>
                Delete
              </button>
            </section>
          </div>
        );
      })}
    </div>
  );
};
