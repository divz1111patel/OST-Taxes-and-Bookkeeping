import React from 'react';
import Logo from '../../assets/maple.png';
import './footer.css';

const Footer = () => (
  <div className="footer-full" id="ContactUs">
    <div className="footer-heading">
      <h1 className="gradient__text">Want to learn more about taxes?</h1>
    </div>

    <div className="footer-btn">
      <a href="SMS:+12892741110">Click here and text us!</a>
    </div>

    <div className="footer-links">
      <div className="footer-links-logo">
        <img src={Logo} alt="ots-logo" />
        {/* <p>800 Niagara Street, <br /> Welland, Ontario, L3C5X4 <br /> All Rights Reserved</p> */}
      </div>
      <div className="footer-links-div" id="links-1">
        <h4>Links</h4>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Tiktok</p>
      </div>
      <div className="footer-links-div" id="links-2">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer-links-div" id="links-3">
        <h4>Get in touch</h4>
        <p>4342 Queen Street, Niagara Falls, ON, <br /> L2E7J7 </p>
        <a href="tel:+12892741110">289-274-1110</a>
        <a href="mailto:support@ontariostudenttaxes.ca">support<br />@ontariostudenttaxes.ca</a>
      </div>
    </div>
    <div className="footer-copyright">
      <p>@2024 OST. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
