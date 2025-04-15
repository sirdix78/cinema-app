import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { IoIosLogIn } from "react-icons/io";
import { LuUserRoundPlus } from "react-icons/lu";
import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

function MyNavbar({ setCategory }) {
  const { searchTerm, setSearchTerm } = useContext(MovieContext);
  return (
    <Navbar expand="lg" className="bg-body-tertiary my-nav">
      <Container fluid>
        <Link className="my-link" to="/">
          <span>My Cinema</span>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => setCategory("playing_now")}>
                Playing Now
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setCategory("top_rated")}>
                Top Rated
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setCategory("upcoming")}>
                Upcoming
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => setCategory("")}>
                All Movies
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Link to="/login">
            <IoIosLogIn className="icons" />
          </Link>
          <Link to="/signup">
            <LuUserRoundPlus className="icons" />
          </Link>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="search-input me-2 my-search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button className="search-btn">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
