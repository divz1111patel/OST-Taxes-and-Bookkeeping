import React, { useEffect, useState } from 'react';
import './review.css';

const Review = ({ title, text }) => {
  const [tiltAngle, setTiltAngle] = useState(0);

  useEffect(() => {
    const tiltOptions = [2, 0, -2, 1, -1];
    const randomIndex = Math.floor(Math.random() * tiltOptions.length);
    const selectedTilt = tiltOptions[randomIndex];
    setTiltAngle(selectedTilt);
  }, []);

  const containerStyle = {
    transform: `rotate(${tiltAngle}deg)`,
  };

  return (
    <div className="review_container" style={containerStyle}>
      <div className="review_name">
        <p>{title}</p>
      </div>
      <div className="review_test">
        <p>⭐⭐⭐⭐⭐</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Review;
