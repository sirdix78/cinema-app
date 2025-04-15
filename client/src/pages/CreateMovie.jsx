import { useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { AuthContext } from "../contexts/AuthContext";

export const CreateMovie = () => {
  const [poster_path, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [release_date, setReleaseDate] = useState("");
  const { handleCreateMovie } = useContext(MovieContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <h2 className="create-title">Create a Movie</h2>
      <form
        className="create-movie"
        onSubmit={(event) => {
          handleCreateMovie(event, {
            poster_path,
            title,
            overview,
            release_date,
            admin: currentUser._id,
          });
        }}
      >
        <input
          type="file"
          name="poster_path"
          placeholder="/abc.jpg"
          value={poster_path}
          onChange={(e) => setImage(e.target.value)}
        />
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <input
          type="text"
          value={overview}
          onChange={(e) => setOverview(e.target.value)}
        />

        <label>Release Date:</label>
        <input
          type="date"
          value={release_date}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
        <button className="create-btn" variant="outline-success">
          Create
        </button>
      </form>
    </div>
  );
};
