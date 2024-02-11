import React from 'react';
import './deduction.css';

const deduction = ({ imageName, title, text }) => (
  <div className="deduction-parent">
    <img src={imageName} />
    <h1>{title}</h1>
    <p>{text}</p>
  </div>
);

export default deduction;
