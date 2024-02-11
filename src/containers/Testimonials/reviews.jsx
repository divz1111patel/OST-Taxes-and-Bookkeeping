import React from 'react';
import Review from '../../components/review/review';
import './reviews.css';
import arrow from '../../assets/arrow.svg';
import lastarrow from '../../assets/last-arrow.svg';

const reviewsData = [
  {
    title: 'Emily Rodriguez',
    text: 'Ontario Tax Services is a lifesaver! Super easy taxes, and I will definitely be back next tax season. 👌',
  },
  {
    title: 'John Chen',
    text: 'Shoutout to Ontario Tax Services. Cool tax crew, quick Q&A. Thumbs up!',
  },
  {
    title: 'Sarah Patel',
    text: 'Best! Taxes done super quick. I got almost $900 in refunds when I was expecting just a couple of hunderd.',
  },
  {
    title: 'Michael Carter',
    text: 'Super chill service. Very informative. Got me max refund',
  },
  {
    title: 'Emily Chang',
    text: 'Made adulting easier. Smooth sailing through taxes. Recommended!',
  },
  {
    title: 'Linda Thompson',
    text: 'Ontario Tax Services turned tax season into a breeze. Rockstars who made it all stress-free. 🌟',
  },
  {
    title: 'Ava Lewis',
    text: 'Fast, easy, not lame. My go-to tax peeps now.',
  },
  {
    title: 'Ethan Nguyen',
    text: 'MVPs of tax season. Quick, painless, and headache-free. Cheers!',
  },
];

const Reviews = () => (
  <div className="reviews_container" id="Testimonials">
    <div className="arrows">
      <img src={arrow} />
      <img src={arrow} />
      <img src={arrow} />
      <img src={arrow} />
      <img src={lastarrow} />
    </div>
    <div className="reviews_heading">
      <h1>Being nice shouldn’t be an afterthought.</h1>
      <div className="reviews-text">
        <p>4.8 on Google. 4.6 on Yelp.</p>
        <p>The reviews are in and we’re as obsessed with your taxes as you are.</p>
      </div>
    </div>
    <div className="reviews">
      <div className="review_single_container">
        {reviewsData.map((item, index) => (
          <div className="review_single">
            <Review title={item.title} text={item.text} key={item.title + index} />
          </div>
        ))}
      </div>
      <div className="review_single_container">
        {reviewsData.map((item, index) => (
          <div className="review_single">
            <Review title={item.title} text={item.text} key={item.title + index} />
          </div>
        ))}
      </div>
      <div className="review_single_container">
        {reviewsData.map((item, index) => (
          <div className="review_single">
            <Review title={item.title} text={item.text} key={item.title + index} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Reviews;
