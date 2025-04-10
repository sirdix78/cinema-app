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
  const nav = useNavigate();
  //function to send a post request to create a user in the DB
  function handleSignup(event) {
    //first is to stop the page from reloading
    event.preventDefault();
    const userToCreateInDB = { username, email, password: password };
    axios
      .post(`${import.meta.env.VITE_API_URL}/auth/signup`, userToCreateInDB)
      .then((res) => {
        console.log("user created in the DB", res);
        nav("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Container className="signup-page">
        <h1>My Cinema</h1>
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
            <input type="radio" name="myRadio" value="option1" /> I agree with
            terms and conditions
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
