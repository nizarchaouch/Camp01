import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./main.css";
import logo from "./logoCamp.png";
import { Link } from "react-router-dom";
import userIcon from "../Icons/user.svg";

function Main() {
  return (
    <Navbar bg="black" expand="lg">
      <Container fluid>
        <Navbar.Brand >  <img src={logo} alt="Logo" className="img-fluid" style={{ maxWidth: "100px" }} /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Link to="/acceuil" className="mx-4 link">ACCEUIL</Link>

            <Link to="/destination" className="mx-4 link">DESTINATION</Link>

            <NavDropdown title="GUIDE" id="navbarScrollingDropdown" className="mx-4" >

              <Link to="/guide" className="dropdown-item link">GUIDE</Link>

              <Link to="/acceuil" className="dropdown-item link">GUIDE</Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
              <Link to="/acceuil" className="dropdown-item">GUIDE</Link>
            </NavDropdown>
            <Link to="/acceuil" className="mx-4 link">CONTACT</Link>
          </Nav>

          <Link>
            <Link to="/Login"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg></Link>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Main;