import React from 'react';

import { Footer, Studentdeductions, Testimonials, CTA } from '../containers';
// import { Navbar } from '../components';
import { Navbar2 } from '../components';
import Studentheader from '../containers/Studentheader/Studentheader';
import FAQstud from '../containers/FAQstud/FAQstud';

const Studenthome = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar2 />
      <Studentheader />
    </div>
    <CTA />
    <Studentdeductions />
    <FAQstud />
    <Testimonials />
    <Footer />
  </div>
);

export default Studenthome;
