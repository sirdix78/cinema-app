import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

export const AllMovies = ({ category }) => {
  const { movies, handleDeleteMovie } = useContext(MovieContext);
  const { currentUser } = useContext(AuthContext);

  // to make an image as url (because is only the end of it in db)
  const getImageUrl = (path, size = "w500") =>
    `https://image.tmdb.org/t/p/${size}${path}`;

  return (
    <div className="profile-page">
      <h2>All Movies in our Cinema</h2>
      <Row>
        {movies
          .filter((oneMovie) => {
            if (category === "") {
              return oneMovie;
            } else {
              return oneMovie[category];
            }
          })
          .map((oneMovie) => {
            return (
              <Col key={oneMovie._id} sm={12} md={6} lg={3}>
                <Card className="movie-card my-card">
                  <Card.Img
                    variant="top"
                    src={getImageUrl(oneMovie.poster_path)}
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
                        Release Date: {oneMovie.release_date}
                      </strong>
                    </Card.Text>
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
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};
