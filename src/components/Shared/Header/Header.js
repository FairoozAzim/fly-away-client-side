import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'
const Header = () => {
    const {user,logOut,isLoading} = useAuth();
    var loggedIn = false;
    if(user.email) {loggedIn = true;}
    console.log(loggedIn);
    return (
<>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="light">
    <Container>
    <Navbar.Brand className="text-white" href="#home">Fly Away</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link className="nav-item" as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link className="nav-item" as={HashLink} to="/home#about">About Us</Nav.Link>
      <Nav.Link className="nav-item" as={HashLink} to="/#services">Services</Nav.Link>
      <Nav.Link className="nav-item" as={Link} to="/contact">Contact</Nav.Link>
      
      
      
      {
         loggedIn && <Nav.Link as={Link} to="/home" className="nav-item">{user.displayName}</Nav.Link>
      }
      {
        loggedIn && <Nav.Link as={Link} to="/orderHistory" className="nav-item">Booking History</Nav.Link>
      }
      {
        loggedIn && <Nav.Link as={Link} to="/manageOrders" className="nav-item">Manage Bookings</Nav.Link>
      }
      {
        loggedIn && <Nav.Link as={Link} to="/addTour" className="nav-item">Add Tour</Nav.Link>
      }
       
       {
          loggedIn? 
          <Button className="button" onClick={logOut}>Log Out</Button>
          : <Nav.Link as={Link} to="/login" className="button">Login</Nav.Link>
      }
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  <br />
  
</>
    );
};

export default Header;