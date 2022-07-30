import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFacebookF, FaWindows } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import './style.css'



export const Header = () => {
  const [backgrounds, setBackgrounds] = useState('false');

  const changeBackground = () =>{
    if(window.scrollY > 80){
      setBackgrounds(true);
    }
    else{
      setBackgrounds(false);
    }
  }
 window.addEventListener('scroll',changeBackground)

  return (
    <Navbar collapseOnSelect expand="lg"  variant="dark" className={backgrounds ? 'navbar':'navbars'}>
      <Container>
      <Navbar.Brand href="#home">E-Learning</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <li className='nav_link'>Home</li>
          <li className='nav_link'>About Us</li>
          <li className='nav_link'>Contact Us</li>
        </Nav>

        <Nav>
          <li className='icons'><FaFacebookF />
          </li>
          <li className='icons'><AiFillInstagram />
          </li>
          <li className='icons'><AiFillLinkedin />
          </li>
          <li className='icons'><AiFillTwitterSquare />
          </li>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
