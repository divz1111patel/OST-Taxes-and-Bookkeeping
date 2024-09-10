import React from 'react';
import { Link } from 'react-router-dom';
import './service.css';

const Service = ({ imageSrc, heading, explanation, buttonText, linkTo }) => (
  <div className="services-mother">
    <div className="services-content">
      <img src={imageSrc} alt="services" className="services-image" />
      <h2 className="services-heading">{heading}</h2>
      <div className="services-explanation">
        <ul>
          {explanation.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      <Link to={linkTo} className="services-button">
        {buttonText}
      </Link>
    </div>
  </div>
);

export default Service;
