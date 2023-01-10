import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Login from './Login';
import Info from './Info';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import "./top_nav.scss";
import { useNavigate } from 'react-router-dom';

export default function TopNav(props) {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate(`/`);
  };

  return (
    <Navbar expand="lg" sticky="top">
      <Container>
        <a href="/" className="navbar-brand">Getogether</a>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/past">Past Events</Nav.Link>
          </Nav>
          <Nav>
            {!auth &&
              <NavDropdown title="Login" id="basic-nav-dropdown">
                <Login />
              </NavDropdown>
            }
            {!auth && <Nav.Link href="/register">Sign up!</Nav.Link>}
            {auth && <Info />}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};