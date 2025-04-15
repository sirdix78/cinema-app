import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { AllMovies } from "./AllMovies";

export const Profile = ({ category }) => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/auth/profile/${currentUser._id}`)
      .then((res) => {
        console.log(res.data);
        setCurrentUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentUser?._id]);
  return (
    <div className="profile-page">
      <h2>
        {currentUser.username}'s {currentUser.admin ? "Admin" : "User"} Profile
      </h2>
      <section>
        {currentUser.admin ? (
          <>
            <Link to="/create-a-movie">
              <button>Create a Movie</button>
            </Link>
            {/* <Link to="/all-movies">
              <button>See all movies</button>
            </Link> */}
            <AllMovies category={category} />
          </>
        ) : (
          <>
            {/* <Link to="/all-movies">
              <button>Browse Movies</button>
            </Link> */}
            <p>Welcome to your movie space!</p>
            <AllMovies category={category} />
          </>
        )}
      </section>
    </div>
  );
};
