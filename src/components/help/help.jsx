import React from 'react';
import './help.css';

const help = ({ imageName, title, text }) => (
  <div className="help-parent">
    <img src={imageName} />
    <h1>{title}</h1>
    <p>{text}</p>
  </div>
);

export default help;
