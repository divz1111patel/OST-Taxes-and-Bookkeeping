import React from 'react';
import './coorporateservices.css';
import Help from '../../components/help/help';
import Bookkeeping from '../../assets/bookkeeping.svg';
import Payroll from '../../assets/payroll.svg';
import Tax from '../../assets/tax.svg';
import Consulting from '../../assets/audit.svg';
import Audit from '../../assets/consulting.svg';
import Trust from '../../assets/trust.svg';

const servicesData = [
  {
    imageName: Tax,
    title: 'Coorporate Tax Returns',
    text: 'Preparation and filing of T2 Corporation Income Tax Returns.Filing of GST/HST returns. Identifying and applying eligible credits and deductions.',
  },
  {
    imageName: Bookkeeping,
    title: 'Bookkeeping',
    text: 'Daily recording of financial transactions, including accounts payable/receivable and payroll. Creating income statements, balance sheets, and cash flow statements',
  },
  {
    imageName: Payroll,
    title: 'Payroll Services',
    text: 'Payroll Processing, Local Payroll Tax Compliance, Year-End Reports. Managing employee wages, benefits, and deductions. Preparation of T4 slips and other year-end payroll documents.',
  },
];

const servicesData2 = [
  {
    imageName: Audit,
    title: 'Audit and Assurance',
    text: 'Internal Audits: Reviewing internal controls and processes for accuracy and compliance; External Audits: Conducting independent audits of financial statements; CRA Audit Support!',
  },
  {
    imageName: Consulting,
    title: 'Consulting Services',
    text: 'International Taxation: Advising on cross-border tax issues and compliance; Non-Profit and industry-specific Accounting Industry-Specific Advisory: Tailored advice for specific industries such as real estate, manufacturing, or technology.',
  },
  {
    imageName: Trust,
    title: 'T3 Trust returns ',
    text: 'Income allocation and distribution to beneficiaries, tax planning, compliance with CRA regulations, and financial reporting. Our service ensures accurate management of trust assets and effective tax optimization.',
  },
];

const Coorporateservices = () => (
  <div className="coorporate-services-parent" id="coorporate-services">
    <div className="coorporate-services-heading">
      <h1>Our services cover whatever your coorporation requires.</h1>
      <p>We’re here for one simple reason: to make taxes not suck.</p>
    </div>
    <div className="services-all">
      {servicesData.map((item, index) => (
        <div className="deduction-single">
          <Help imageName={item.imageName} title={item.title} text={item.text} key={item.imageName + index} />
        </div>
      ))}
    </div>
    <div className="services-all-2">
      {servicesData2.map((item, index) => (
        <div className="deduction-single-2">
          <Help imageName={item.imageName} title={item.title} text={item.text} key={item.imageName + index} />
        </div>
      ))}
    </div>
  </div>
);

export default Coorporateservices;
