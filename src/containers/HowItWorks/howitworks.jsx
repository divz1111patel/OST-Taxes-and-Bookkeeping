import React from 'react';
import './howitworks.css';
import One from '../../assets/1.png';
import Two from '../../assets/2.png';
import Three from '../../assets/3.png';
import Arrow from '../../assets/curved-arrow.svg';
import Howitwork from '../../components/howitwork/howitwork';
// import Chat from '../../assets/chat-support.svg';
// import Video from '../../assets/video-support.svg';
// import Tax from '../../assets/tax-questions.svg';

const numberData = [
  {
    imageName: One,
    text: 'Text us with your name, email, phone number and SIN number to locate your file on CRA!',
  },
  {
    imageName: Two,
    text: 'We will get all your income slips from CRA and put your relevant deductions to provide you with maximun possible refund.',
  },
  {
    imageName: Three,
    text: 'Once agreed, we will file your taxes and provide you with the exact day the refund will hit your bank account.',
  },

];

const howitworks = () => (
  <div className="how-it-works-full" id="howitworks">
    <h2 className="gradient__text">How We Work</h2>
    <div className="how-it-works-mother">
      { numberData.map((item, index) => (
        <React.Fragment key={index}>
          <div className="how-it-works-parent">
            <Howitwork imageName={item.imageName} text={item.text} />
          </div>
          {index < numberData.length - 1 && (
            <div className="how-it-works-arrow">
              <img src={Arrow} alt="Arrow" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default howitworks;
