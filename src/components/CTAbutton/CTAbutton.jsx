import React from 'react';
import './CTAbutton.css';

function CTAbutton({ href, svg }) {
  return (
    <a href={href} className="cta-button">
      {svg && <img src={svg} alt="Call Icon" />}
    </a>
  );
}

export default CTAbutton;
