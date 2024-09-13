import React from 'react';
import Logo from '../../assets/maple.png';
import './footer.css';

const Footer = () => (
  <div className="footer-full" id="contactus">
    <div className="footer-heading">
      <h1 className="gradient__text">Want to learn more about taxes?</h1>
    </div>

    <div className="footer-btn">
      <a href="SMS:+19052267054">Click here and text us!</a>
    </div>

    <div className="footer-links">
      <div className="footer-links-logo">
        <img src={Logo} alt="ots-logo" />
        {/* <p>800 Niagara Street, <br /> Welland, Ontario, L3C5X4 <br /> All Rights Reserved</p> */}
      </div>
      <div className="footer-links-div" id="links-1">
        <h4>Links</h4>
        <a href="https://www.instagram.com/osttaxes/">Instagram</a>
        <a href="https://www.facebook.com/osttaxes">Facebook</a>
        <a href="https://www.tiktok.com/@osttaxes">Tiktok</a>
      </div>
      <div className="footer-links-div" id="links-2">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer-links-div" id="links-3">
        <h4>Get in touch</h4>
        <p>411 East Main Street, Welland, ON, <br /> L3B3X3 </p>
        <a href="tel:+19052267054">905-226-7054</a>
        <a href="mailto:support@ontariostudenttaxes.ca">support@osttaxes.ca</a>
      </div>
    </div>
    <div className="footer-copyright">
      <p>@2024 OST. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
