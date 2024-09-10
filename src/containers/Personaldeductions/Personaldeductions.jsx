import React from 'react';
import './personaldeductions.css';
import Deduction from '../../components/deduction/deduction';
import Wqe from '../../assets/Instant_Refund.svg';
import Rew from '../../assets/Advantage_Prepaid.svg';
import Bill from '../../assets/billroll.svg';
import Plus from '../../assets/plus-sign.svg';
import Wallet from '../../assets/wallet.svg';
import Netfile from '../../assets/tax-questions.svg';
import Home from '../../assets/homeoffice.svg';
import Moving from '../../assets/moving.svg';
import Bus from '../../assets/bus.svg';

const deductionsData = [
  {
    imageName: Wqe,
    title: 'RRSP Contributions',
    text: 'Deduct contributions to a Registered Retirement Savings Plan to reduce taxable income and save for retirement.',
  },
  {
    imageName: Rew,
    title: 'Medical Expenses',
    text: 'Claim a credit for qualifying medical expenses exceeding a threshold percentage of your net income.',
  },
  {
    imageName: Bill,
    title: 'Childcare Expenses',
    text: 'Deduct costs for childcare to enable you to work or study, with annual limits per child.',
  },
];

const deductionsData2 = [
  {
    imageName: Plus,
    title: 'Interest on student loans',
    text: 'If you used loans to fund your studies, interest paid can be used to offset income earned to generate higher tax refunds.',
  },
  {
    imageName: Wallet,
    title: 'Charitable Donations',
    text: 'Claim a credit for donations to registered charities, including cash and goods, with required receipts.',
  },
  {
    imageName: Netfile,
    title: 'Union and Professional Dues',
    text: 'Deduct mandatory membership fees to unions or professional associations related to your employment or business.',
  },
];

const deductionsData3 = [
  {
    imageName: Home,
    title: 'Home Office Expenses',
    text: ' If you work from home, you may be able to claim a portion of home office expenses, such as property taxes, utilities and internet.',
  },
  {
    imageName: Moving,
    title: 'Moving Expenses',
    text: 'If you moved to start a new job or business, or to be closer to work, you may be able to claim moving expenses.',
  },
  {
    imageName: Bus,
    title: 'Public Transit Passes',
    text: 'While the federal transit pass credit was eliminated, some provinces may offer their own credits or rebates for public transit use',
  },
];

const Personaldeductions = () => (
  <div className="student-deductions-parent" id="student-deductions">
    <div className="student-deductions-heading">
      <h1>We can help you maximize your personal tax returns.</h1>
      <p>We’re here for one simple reason: to get you back every cent that you’re owed.</p>
    </div>
    <div className="deductions-all">
      {deductionsData.map((item, index) => (
        <div className="deduction-single">
          <Deduction imageName={item.imageName} title={item.title} text={item.text} key={item.imageName + index} />
        </div>
      ))}
    </div>
    <div className="deductions-all-2">
      {deductionsData2.map((item, index) => (
        <div className="deduction-single-2">
          <Deduction imageName={item.imageName} title={item.title} text={item.text} key={item.imageName + index} />
        </div>
      ))}
    </div>
    <div className="deductions-all-3">
      {deductionsData3.map((item, index) => (
        <div className="deduction-single-3">
          <Deduction imageName={item.imageName} title={item.title} text={item.text} key={item.imageName + index} />
        </div>
      ))}
    </div>
  </div>
);

export default Personaldeductions;
