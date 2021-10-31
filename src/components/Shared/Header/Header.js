import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'
import useBookings from '../../../hooks/useBookings';
import icon from '../../../images/icon.png'
const Header = () => {
    const {user,logOut} = useAuth();
    var loggedIn = false;
    if(user.email) {loggedIn = true;}
    return (
<>
  <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="light">
    <Container>
    <Navbar.Brand className="text-white" href="#home"><img src={icon} className="icon" alt=""></img> Fly Away</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link className="nav-item" as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link className="nav-item" as={HashLink} to="/#services">Tours</Nav.Link>
      <Nav.Link className="nav-item" as={Link} to="/contact">Contact</Nav.Link>
      
      
      
      {
        loggedIn && <Nav.Link as={Link} to = {`/orderHistory/${user.email}`} className="nav-item">Booking History</Nav.Link>
      }
      {
        loggedIn && <Nav.Link as={Link} to="/manageOrders" className="nav-item">Manage Bookings</Nav.Link>
      }
      {
        loggedIn && <Nav.Link as={Link} to="/addTour" className="nav-item">Add Tour</Nav.Link>
      }
      
        
      {
         loggedIn && <Nav.Link as={Link} to="/home" className="nav-item right">{user.displayName}</Nav.Link>
      }
       
       {
          loggedIn? 
          <Button className="button" onClick={logOut}>Log Out</Button>
          : <Nav.Link as={Link} to="/login" className="button right">Login</Nav.Link>
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