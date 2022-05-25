import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/icons/ic_logo.svg';
import { Navbar2StyledMain } from './StyledNavbar2';

const Navbars2 = () => {
  const [navbar, setNavbar] = useState(false)
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })
  
  
  
  return (
    <Navbar2StyledMain>
      <Navbar className={`${navbar?'scroll':'navbar'}`}  expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <NavLink to='/'>
              <img src={logo} alt="logo" className="logo-img" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink className='nav-link activate' to="/">Home</NavLink>
              <NavLink className='nav-link ' to="/shop">Shop</NavLink>
              <NavLink className='nav-link' to="/about">About</NavLink>
              <NavLink className='nav-link' to="/contact">Contact Us</NavLink>
            </Nav>
            <div className={`${!navbar?'authenticate-buttons':'authenticate-buttons  authenticate-buttons-scroll'}`}>
              <button className='btn btn-sm signup-btn px-3'>Sign Up</button>
              <button className='btn btn-sm login-btn px-4'>Login</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Navbar2StyledMain>
  )
}

export default Navbars2