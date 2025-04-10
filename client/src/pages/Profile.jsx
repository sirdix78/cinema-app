import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
export const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  console.log(
    "here is the name on the profile page from the context",
    currentUser
  );
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
  }, [currentUser._id]);
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
            <Link to="/all-movies">
              <button>See all movies</button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/all-movies">
              <button>Browse Movies</button>
            </Link>
            <p>Welcome to your movie space!</p>
          </>
        )}
      </section>
      {/* <img
        src={currentUser.profileImage}
        alt="profile picture"
        className="profile-img"
      /> */}
    </div>
  );
};
