import React from 'react';
import Typical from 'react-typical';
import people from '../../assets/people.png';
import hero from '../../assets/hero1.webp';
// import complex from '../../assets/complex.svg';
// import netfile from '../../assets/netfile.svg';
// import support from '../../assets/support.svg';
// import callicon from '../../assets/phone-call-icon.svg';
import './header.css';

const Header = () => (
  <div className="header-mother">
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Fle Your Taxes</h1>
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
        <p>We will help students file their taxes for FREE (if they do not get any refund) by texting with our experts. Average refund last year was $1432 for students and average cost to file was $37.</p>
        <div className="gpt3__header-content__input">
          {/* <input type="email" placeholder="Start texting with us" /> */}
          <a href="tel:+19053484808"><button type="button"> Call Us</button></a>
          <a id="button-2" href="SMS:+19053484808"><button type="button">Text Us</button></a>
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
