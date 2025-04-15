import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { AllMovies } from "./AllMovies";
import YouTubeEmbed from "../components/YouTubeEmbed.jsx";

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
            <h4>Welcome to your profile!</h4>
            <YouTubeEmbed videoId="KOYVtX9KWmI" />
            <Link to="/create-a-movie">
              <button>Create a Movie</button>
            </Link>
            <AllMovies category={category} />
          </>
        ) : (
          <>
            <h4>Welcome to your movie space!</h4>
            <YouTubeEmbed videoId="iV46TJKL8cU" />
            <AllMovies category={category} />
          </>
        )}
      </section>
    </div>
  );
};
