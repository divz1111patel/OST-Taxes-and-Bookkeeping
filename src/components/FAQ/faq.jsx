import React, { useState, useEffect } from 'react';
import './faq.css';
import abc from '../../assets/abc.svg';

const FaqComponent = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [textGenerated, setTextGenerated] = useState(false);

  useEffect(() => {
    let timeout;

    if (isExpanded) {
      // Simulate text generation delay (adjust as needed)
      timeout = setTimeout(() => {
        setTextGenerated(true);
      }, 20); // 500 milliseconds delay (adjust as needed)
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isExpanded]);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="faq-component">
      <div className="arrow-container">
        <img
          src={abc}
          alt="Arrow"
          className={`arrow-icon ${isExpanded ? 'rotate-up' : ''}`}
        />
        <div className="question" onClick={handleToggle}>
          {question}
        </div>
      </div>
      <div className={`answer-container ${isExpanded ? 'expanded' : ''}`}>
        {isExpanded && textGenerated && (
          <div className="answer visible">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqComponent;
