import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Login from './Login';
import Info from './Info';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import "./top_nav.scss";

export default function TopNav() {
  const { auth } = useContext(AuthContext);
  return (
    <Navbar expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Getogether</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Nav>
            {!auth &&
              <NavDropdown title="Login" id="basic-nav-dropdown">
                <Login />
              </NavDropdown>
            }
            {!auth && <Nav.Link href="#register">Sign up!</Nav.Link> }
            {auth && <Info />}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};