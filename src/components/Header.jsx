import React from 'react';
import { Badge, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header(){
    return (
<Navbar collapseOnSelect expand="lg" className='bg-primary'>
  <Container>
    <Navbar.Brand>
      <Link to={'/'} style={{ fontSize: '24px', color: 'white', textDecoration: 'none' }}>
        <i style={{ color: 'orange' }} className="fa-solid fa-caravan "></i>
        <span style={{ textDecoration: 'none' }} className='fw-bolder'>Food</span>Cart
      </Link>
      <Link to={'/'} style={{ fontSize: '24px', color: 'white', textDecoration: 'none' }} className='ms-4'>Home</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mx-auto">
       
      </Nav>
      <Nav>
        <div style={{ fontSize: '24px' }} className='d-flex align-items-center me-5'>
          <Link to={'/login'} style={{ color: 'white', textDecoration: 'none' }}>
            {/* <i style={{ color: 'red' }} className="fa-solid fa-heart me-2"></i> */}
           Login
          
          </Link>
        </div>
        <div style={{ fontSize: '24px' }} className='d-flex justify-content-between align-items-center me-5'>
          <Link to={'/signup'} style={{ color: 'white', textDecoration: 'none' }}>
            {/* <i style={{ color: 'orange' }} className="fa-solid fa-cart-shopping me-2"></i> */}
           Signup
          
          </Link>
        </div>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


    )
}

export default Header;