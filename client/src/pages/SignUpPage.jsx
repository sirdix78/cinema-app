import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const nav = useNavigate();
  //function to send a post request to create a user in the DB
  function handleSignup(event) {
    event.preventDefault(); //first is to stop the page from reloading
    if (username.length === 0) {
      setErrorMessage("Please write your username");
      return;
    }
    if (password.length === 0) {
      setErrorMessage("Please enter the password");
      return;
    }
    if (email.length === 0) {
      setErrorMessage("Please enter a valid email");
      return;
    }
    if (repeatPassword.length === 0) {
      setErrorMessage("Please repeat password");
      return;
    }
    if (password !== repeatPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    const userToCreateInDB = { username, email, password: password };
    axios
      .post(`${import.meta.env.VITE_API_URL}/auth/signup`, userToCreateInDB)
      .then((res) => {
        console.log("user created in the DB", res);
        nav("/login");
      })
      .catch((err) => {
        console.log(err);
        if (err.response?.data?.message) {
          setErrorMessage(err.response.data.message);
        } else {
          setErrorMessage("Signup failed. Please try again later.");
        }
      });
  }

  return (
    <>
      <Container className="signup-page">
        <h1>My Cinema</h1>
        {/* Error message display -> if email is not with @, if the passwords dont match*/}
        {errorMessage && (
          <div
            className="alert alert-danger mt-3 mx-auto w-50 text-center"
            role="alert"
          >
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSignup}>
          <Row>
            <Col md={6}>
              <label>Username:</label>
              <input
                type="text"
                placeholder="enter a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
              />

              <label>Password:</label>
              <input
                type="password"
                placeholder="enter the password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
              />
            </Col>

            <Col md={6}>
              <label>Email:</label>
              <input
                type="email"
                placeholder="enter an email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
              <label>Repeat Password:</label>
              <input
                type="password"
                placeholder="repeat the password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                className="form-control"
              />
            </Col>
          </Row>
          <label>
            <input type="radio" name="myRadio" value="option1" required /> I
            agree with terms and conditions
          </label>
          <Row className="mt-3">
            <Col>
              <button type="submit" className="sign-btn">
                Sign Up
              </button>
            </Col>
          </Row>
        </form>

        <p className="mt-3">
          Already a member? <Link to="/login">Login</Link>
        </p>
      </Container>
    </>
  );
};

export default SignUpPage;
