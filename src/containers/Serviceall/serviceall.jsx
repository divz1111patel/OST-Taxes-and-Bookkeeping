import React from 'react';
import './serviceall.css';
import Services from '../../components/services/service';
import Student from '../../assets/Student.png';
import Personal from '../../assets/Personal.png';
import Coorporate from '../../assets/Coorporate.png';

const serviceData = [
  {
    imageSrc: Student,
    heading: 'Student Taxes',
    explanation: [
      'Multiple T4, T4A, T2202, T5',
      'Moving expenses, Rent, Tuition fees, Student loans interest, Transit passes',
      'Starting at $50 with no hidden fees',
    ],
    buttonText: 'Students: Click Here!',
    linkTo: '/student',
  },
  {
    imageSrc: Personal,
    heading: 'Personal Taxes',
    explanation: [
      'Multiple T4, T4A, T4E, T5, T3, T5007, T4RSP, T4A',
      'Medical expenses, Donations, RRSP, Childcare expenses, Union Dues, DTC Credit',
      'Starting at $65 with no hidden fees',
    ],
    buttonText: 'Individuals: Click Here!',
    linkTo: '/personal',
  },
  {
    imageSrc: Coorporate, // Reuse the same image or use a different one
    heading: 'Coorporate Taxes',
    explanation: [
      'Product and Service Revenue, Subscriptions',
      'Salaries, Leases, Office supplies,  Utilities, Travel/Meal expenses, Advertising, SR&ED, Depreciation, Insurance Premiums, Bad debts',
      'Pricing starting at $300 for nil returns',
    ],
    buttonText: 'Businesses: Click here!',
    linkTo: '/coorporate',
  },
];

const serviceall = () => (
  <div className="homestudent-mother" id="services">
    <h1>Our Services</h1>
    <div className="service-items-container">
      {serviceData.map((service, index) => (
        <div key={index} className="service-item">
          <Services
            imageSrc={service.imageSrc}
            heading={service.heading}
            explanation={service.explanation}
            buttonText={service.buttonText}
            linkTo={service.linkTo}
          />
        </div>
      ))}
    </div>
  </div>
);

export default serviceall;
