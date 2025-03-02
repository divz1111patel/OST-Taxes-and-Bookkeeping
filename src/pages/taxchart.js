import React from 'react';
import taxchart from '../assets/taxchart.jpg';

const TaxChart = () => (
  <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img src={taxchart} alt="TaxChart" style={{ maxWidth: '100%', maxHeight: '100%' }} />
  </div>
);

export default TaxChart;
