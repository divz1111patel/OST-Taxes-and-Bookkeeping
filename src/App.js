import React from 'react';

import { Footer, Studentdeductions, Header, Testimonials, HowItWorks, FAQs, CTA } from './containers';
import { Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <CTA />
    <Studentdeductions />
    <HowItWorks />
    <Testimonials />
    <FAQs />
    <Footer />
  </div>
);

export default App;
