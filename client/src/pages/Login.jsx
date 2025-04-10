import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const { authenticateUser } = useContext(AuthContext);
  const nav = useNavigate();
  //function to send a post request to create a user in the DB
  function handleLogin(event) {
    //first is to stop the page from reloading
    event.preventDefault();
    const userToLogin = { email, password };
    axios
      .post(`${import.meta.env.VITE_API_URL}/auth/login`, userToLogin)
      .then((res) => {
        console.log("user was logged in", res.data);
        localStorage.setItem("authToken", res.data.authToken);
        return authenticateUser();
      })
      .then(() => {
        nav("/profile");
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.response.data.errorMessage);
      });
  }

  return (
    <>
      <Container className="login-page">
        <h1>My Cinema</h1>
        <form onSubmit={handleLogin}>
          <label>Email: </label>
          <Row>
            <Col md={12}>
              <input
                type="email"
                placeholder="enter an email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Col>
          </Row>
          <label>Password: </label>
          <Row>
            <Col md={12}>
              <input
                type="password"
                placeholder="enter the password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />{" "}
            </Col>
          </Row>

          <Row>
            <Col>
              <button className="sign-btn">Login</button>
            </Col>
          </Row>
        </form>
        {errorMessage ? <p className="error">{errorMessage}</p> : null}
        <p className="mt-3">
          New Here... <Link to="/signup">Sign Up</Link>
        </p>
      </Container>
    </>
  );
};
