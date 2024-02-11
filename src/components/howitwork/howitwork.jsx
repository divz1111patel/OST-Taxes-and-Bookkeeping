import React from 'react';
import './howitwork.css';

const howitwork = ({ imageName, text }) => (
  <div className="how-it-work-parent">
    <img src={imageName} />
    <p>{text}</p>
  </div>
);

export default howitwork;
