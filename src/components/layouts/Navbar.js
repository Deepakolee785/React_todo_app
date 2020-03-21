import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import logo from '../../assets/logo.svg';
import menu from '../../assets/menu.svg';

const Navigationbar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color='primary' light expand='md' className='navbar'>
      <Link className='navbar-brand  ml-lg-5' to='/'>
        <img className='logo' src={logo} alt='' /> ToDOS
      </Link>
      <NavbarToggler onClick={toggle}>
        <img className='menu' src={menu} alt='' />
      </NavbarToggler>
      <Collapse isOpen={isOpen} navbar>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink
              exact
              activeClassName='selected'
              className='nav-link'
              to='/'
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              exact
              activeClassName='selected'
              className='nav-link'
              to='/about'
            >
              About
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigationbar;
