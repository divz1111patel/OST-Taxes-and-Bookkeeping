import React from 'react';

import Navbar from '../components/navbar/Navbar';
import Header from '../containers/header/Header';
import Serviceall from '../containers/Serviceall/serviceall';
import HowItWorks from '../containers/HowItWorks/howitworks';
import Testimonials from '../containers/Testimonials/reviews';
import Contact from '../containers/footer/Footer';

const Home = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Serviceall />
    <HowItWorks />
    <Testimonials />
    <Contact />
  </div>
);

export default Home;
