import React from 'react';
import Typical from 'react-typical';
import people from '../../assets/people.png';
import hero from '../../assets/hero1.webp';
// import arrow from '../../assets/arrow.svg';
// import complex from '../../assets/complex.svg';
// import netfile from '../../assets/netfile.svg';
// import support from '../../assets/support.svg';
// import callicon from '../../assets/phone-call-icon.svg';
import checkmark from '../../assets/checkmark.svg';
import './header.css';

const Header = () => (
  <div className="header-mother">
    <div className="header-top">
      <div className="header-top-content">
        <h1 className="gradient__text">File Your Taxes</h1>
        <h1 className="gradient__text">
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              'By Texting', 1500,
              'With Experts', 1500,
              'in 3 days', 1500,
            ]}
          />
        </h1>
        <div className="header-text-parent">
          <div className="header-text">
            <img src={checkmark} alt="arrow" />
            <p>Personal T1 returns</p>
          </div>
          <div className="header-text">
            <img src={checkmark} alt="arrow" />
            <p>Coorporation T2 returns</p>
          </div>
          <div className="header-text">
            <img src={checkmark} alt="arrow" />
            <p>Trust T3 returns</p>
          </div>
          <div className="header-text">
            <img src={checkmark} alt="arrow" />
            <p>Coorporate Bookkeeping</p>
          </div>
          <div className="header-text">
            <img src={checkmark} alt="arrow" />
            <p>AR/AP & Payroll Services</p>
          </div>
        </div>
        <div className="header-buttons">
          {/* <input type="email" placeholder="Start texting with us" /> */}
          <a href="tel:+19052267054"><button type="button"> Call Us</button></a>
          <a id="button-2" href="SMS:+19052267054"><button type="button">Text Us</button></a>
        </div>
        <div className="header-site-visit">
          <img src={people} />
          <p>80 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header-big-pic">
        <img src={hero} />
      </div>
    </div>
  </div>
);

export default Header;
