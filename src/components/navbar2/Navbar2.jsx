import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/maple.png';
import logofinal from '../../assets/logo-final-3.svg';
import './navbar2.css';

const Navbar2 = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
          <div className="logo-final">
            <img src={logofinal} id="logo-final" alt="logo" />
          </div>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><Link to="/home">Home</Link></p>
          <div className="dropdown">
            <p className="dropdown-toggle"><a href="#services">Services</a></p>
            <div className="dropdown-menu">
              <p><Link to="/student">Student Taxes</Link></p>
              <p><Link to="/personal">Personal Taxes</Link></p>
              <p><Link to="/coorporate">Corporate Taxes</Link></p>
            </div>
          </div>
          <p><a href="#FAQ">FAQ</a></p>
          <p><a href="#testimonials">Testimonials</a></p>
          <p><a href="#contactus">Contact Us</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#F1B9FF" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#F1B9FF" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container">
            <div className="gpt3__navbar-menu_container-links">
              <p><Link to="/home">Home</Link></p>
              <div className="dropdown-mobile">
                <p className="dropdown-toggle-mobile"><a href="#services">Services</a></p>
                <div className="dropdown-menu-mobile">
                  <p><Link to="/student">Student Taxes</Link></p>
                  <p><Link to="/personal">Personal Taxes</Link></p>
                  <p><Link to="/coorporate">Corporate Taxes</Link></p>
                </div>
              </div>
              <p><a href="#FAQ">FAQ</a></p>
              <p><a href="#testimonials">Testimonials</a></p>
              <p><a href="#contactus">Contact Us</a></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar2;
