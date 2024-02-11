import React from 'react';
import './studentdeductions.css';
import Deduction from '../../components/deduction/deduction';
import Wqe from '../../assets/Instant_Refund.svg';
import Rew from '../../assets/Advantage_Prepaid.svg';
import Bill from '../../assets/billroll.svg';
import Plus from '../../assets/plus-sign.svg';
import Wallet from '../../assets/wallet.svg';
import Netfile from '../../assets/tax-questions.svg';

const deductionsData = [
  {
    imageName: Wqe,
    title: 'Claim your tuition properly',
    text: 'Track down your T2202 form, outlining your tuition fees. It helps calculate your tuition and education amounts properly, and you can’t claim those without it.',
  },
  {
    imageName: Rew,
    title: 'Transfer unused tuition and education credits',
    text: 'If you don’t use your full credit amount this year, you can transfer a portion to a parent or life-partner, or carry it forward to claim in the future.',
  },
  {
    imageName: Bill,
    title: 'Moving expenses',
    text: 'If you moved over 40km to attend school or get a summer job, ask us how to expense transportation, storage, travel and temporary living costs you may be entitled to.',
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
    title: 'Childcare expenses for parents',
    text: 'Claim childcare expenses on your tax return to reduce taxable income, supporting working families with eligible costs for care services.',
  },
  {
    imageName: Netfile,
    title: 'Rent paid for living',
    text: 'If you rent out a room or apartment, the rent can be used to obtain a higher GST/HST and OTB amount.',
  },
];

const studentdeductions = () => (
  <div className="student-deductions-parent" id="student-deductions">
    <div className="student-deductions-heading">
      <h1>We can help you maximize your student tax returns.</h1>
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
  </div>
);

export default studentdeductions;
