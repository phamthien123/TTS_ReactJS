import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";

const Header = () => {
  
  return (
    <Navbar bg="info" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Router</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavLink to="/" className='nav-link'>Home</NavLink>
           
            <NavDropdown title="Pages" id="basic-nav-dropdown">
            <NavLink to="/todoList" className='nav-link'>ListTodo</NavLink>
            <NavLink to="/users" className='nav-link'>User</NavLink>
            <NavLink to="/calcultors" className='nav-link'>Calculator</NavLink>
            <NavLink to="/demos" className='nav-link'>Demo DisPlayList</NavLink>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;