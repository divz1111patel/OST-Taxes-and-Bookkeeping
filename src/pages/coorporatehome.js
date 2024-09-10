import React from 'react';

import { Footer, Testimonials, CTA } from '../containers';
import { Navbar2 } from '../components';
import Coorporateheader from '../containers/Coorporateheader/Coorporateheader';
import Coorporateservices from '../containers/Coorporateservices/Coorporateservices';
import FAQcorp from '../containers/FAQcorp/FAQcorp';

const Coorporatehome = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar2 />
      <Coorporateheader />
    </div>
    <CTA />
    <Coorporateservices />
    <FAQcorp />
    <Testimonials />
    <Footer />
  </div>
);

export default Coorporatehome;
