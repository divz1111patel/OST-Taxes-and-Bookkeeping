import React from 'react';

import Navbar from '../components/navbar/Navbar';
import Header from '../containers/header/Header';
import Serviceall from '../containers/Serviceall/serviceall';
import HowItWorks from '../containers/HowItWorks/howitworks';
import Contact from '../containers/footer/Footer';
import { Testimonials, CTA } from '../containers';

const Home = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <CTA />
    <Serviceall />
    <HowItWorks />
    <Testimonials />
    <Contact />
  </div>
);

export default Home;
