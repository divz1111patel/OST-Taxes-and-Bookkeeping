import React from 'react';

import { Footer, Testimonials, CTA } from '../containers';
import { Navbar } from '../components';
import Personalheader from '../containers/Personalheader/Personalheader';
import Personaldeductions from '../containers/Personaldeductions/Personaldeductions';
import FAQpers from '../containers/FAQpers/FAQpers';

const Personalhome = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Personalheader />
    </div>
    <CTA />
    <Personaldeductions />
    <FAQpers />
    <Testimonials />
    <Footer />
  </div>
);

export default Personalhome;
