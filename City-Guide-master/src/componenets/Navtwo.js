import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import police from '../static/police.webp';
import HB from '../static/hb.png';
import PS from '../static/petrol.webp';

import './Navbar.css'


const Navtwo = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='abc' >
    <Container >
      <Navbar.Brand href="#home" >City-Guide</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <Nav className='po'>
          <Nav.Link href="/pune/police"><img src={police}/></Nav.Link>
          <Nav.Link href="/pune/hospital"><img src={HB}/></Nav.Link>
          <Nav.Link href="/pune/police"><img src={PS}/></Nav.Link>
          <Nav.Link href="#About">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
export default Navtwo;