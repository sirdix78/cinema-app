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
      <h2>Create a Movie</h2>
      <form
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
        <button>Create</button>
      </form>
    </div>
  );
};
