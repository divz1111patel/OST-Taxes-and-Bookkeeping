import React from 'react';

import { Footer, Testimonials, CTA } from '../containers';
import { Navbar2 } from '../components';
import Personalheader from '../containers/Personalheader/Personalheader';
import Personaldeductions from '../containers/Personaldeductions/Personaldeductions';
import FAQpers from '../containers/FAQpers/FAQpers';

const Personalhome = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar2 />
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
