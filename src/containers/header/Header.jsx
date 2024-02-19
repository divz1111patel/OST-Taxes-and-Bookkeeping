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
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">File Your Taxes</h1>
        <h1 className="gradient__text">
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              'By Texting', 1500,
              'With Experts', 1500,
              'For Free', 1500,
            ]}
          />
        </h1>
        <div className="header-text-parent">
          <div className="header-text">
            <img src={checkmark} alt="arrow" />
            <p>Students file for FREE if no refund.</p>
          </div>
          <div className="header-text">
            <img src={checkmark} alt="arrow" />
            <p>Average 2022 student refund: $1432!</p>
          </div>
          <div className="header-text">
            <img src={checkmark} alt="arrow" />
            <p>Average 2022 filing cost: $49!</p>
          </div>
        </div>
        <div className="gpt3__header-content__input">
          {/* <input type="email" placeholder="Start texting with us" /> */}
          <a href="tel:+19052267054"><button type="button"> Call Us</button></a>
          <a id="button-2" href="SMS:+19052267054"><button type="button">Text Us</button></a>
        </div>
        <div className="gpt3-header-content-people">
          <img src={people} />
          <p>80 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={hero} />
      </div>
    </div>
  </div>
);

export default Header;
