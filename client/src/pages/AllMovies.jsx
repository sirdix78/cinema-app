import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export const AllMovies = ({ category }) => {
  const {
    movies,
    handleDeleteMovie,
    searchTerm,
    // setSearchTerm,
    favorites,
    toggleFavorite,
  } = useContext(MovieContext);
  const { currentUser } = useContext(AuthContext);

  const getHeading = () => {
    switch (category) {
      case "playing_now":
        return "Movies Playing Now";
      case "top_rated":
        return "Top Rated Movies";
      case "upcoming":
        return "Upcoming Movies";
      default:
        return "All Movies in our Cinema";
    }
  };
  console.log(category);
  return (
    <div className="profile-page">
      <h2>{getHeading()}</h2>
      <Row>
        {movies
          .filter((oneMovie) => {
            const matchesCategory = category === "" || oneMovie[category];
            const matchesSearch = oneMovie.title
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
          })
          .map((oneMovie) => {
            return (
              <Col key={oneMovie._id} sm={12} md={6} lg={3}>
                <Card className="movie-card my-card">
                  <Card.Img
                    variant="top"
                    src={oneMovie.poster_path}
                    alt={oneMovie.title}
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title className="my-title">
                      {oneMovie.title}
                    </Card.Title>
                    <Card.Text className="overview">
                      <strong>Overview:</strong> {oneMovie.overview}
                    </Card.Text>
                    <Card.Text>
                      <strong className="release-date">
                        Release Date:{" "}
                        {new Date(oneMovie.release_date)
                          .toLocaleDateString("en-GB")
                          .replace(/\//g, ".")}
                      </strong>
                    </Card.Text>
                    <Button
                      className="favorite-btn"
                      onClick={() => toggleFavorite(oneMovie._id)}
                      variant="link"
                    >
                      {favorites.includes(oneMovie._id) ? (
                        <FaHeart color="red" />
                      ) : (
                        <FaRegHeart color="gray" />
                      )}
                    </Button>
                    {currentUser?.admin && (
                      <section>
                        <Link to={`/edit/${oneMovie._id}`}>
                          <Button className="edit-btn">
                            <CiEdit />
                          </Button>
                        </Link>
                        <Button
                          className="delete-btn"
                          onClick={() => handleDeleteMovie(oneMovie._id)}
                        >
                          <MdDeleteOutline />
                        </Button>
                      </section>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};
