import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Login from './Login';
import Info from './Info';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import {useNavigate} from 'react-router-dom';
import "./top_nav.scss";

export default function TopNav(props) {
  const { auth } = useContext(AuthContext);

  const navigate = useNavigate();

  const navigateToAbout = () => {
    // 👇️ navigate to /contacts
    navigate('/about');
  };

  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/');
  };
  return (
    <Navbar expand="lg" sticky="top">
      <Container>
        <button onClick={navigateHome} class="navbar-brand">Getogether</button>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>About</Nav.Link>
          </Nav>
          <Nav>
            {!auth &&
              <NavDropdown title="Login" id="basic-nav-dropdown">
                <Login />
              </NavDropdown>
            }
            {!auth && <Nav.Link >Sign up!</Nav.Link>}
            {auth && <Info />}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};