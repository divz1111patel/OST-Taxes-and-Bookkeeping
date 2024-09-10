// src/components/FAQ.js
import React from 'react';
import FAQ from '../../components/FAQ/faq';
import './FAQpers.css';

const FAQpers = () => {
  const faqpersData = [
    {
      question: 'What documents do I need to prepare my tax return?',
      answer: 'You need income statements (T4s, T5s), receipts for deductions (medical, childcare), and tax slips (RRSP contributions, charitable donations).',
    },
    {
      question: 'Can I deduct home office expenses?',
      answer: 'Yes, if you are self-employed or working from home due to employer requirements. Specific criteria apply for employees.',
    },
    {
      question: 'What is the deadline for filing my tax return?',
      answer: 'The deadline is typically April 30. Self-employed individuals have until June 15, but taxes owed are still due April 30.',
    },
    {
      question: 'How can I claim medical expenses?',
      answer: 'Claim medical expenses that exceed 3% of your net income or a fixed amount as a non-refundable tax credit.',
    },
    {
      question: 'Can I claim deductions for student loan interest?',
      answer: 'Yes, you can deduct interest paid on student loans from recognized Canadian institutions.',
    },
    {
      question: 'Are charitable donations tax-deductible?',
      answer: 'Yes, donations to registered charities are eligible for a non-refundable tax credit. Receipts are required.',
    },
    {
      question: 'What is the RRSP contribution limit?',
      answer: 'The limit is 18% of your earned income up to a maximum amount set by the CRA, plus any unused room from previous years.',
    },
    {
      question: 'Can I deduct moving expenses?',
      answer: 'Yes, if you moved for work or school, but there are specific criteria and limits to meet.',
    },
    {
      question: 'How do I report rental income?',
      answer: 'Report rental income using Form T776, detailing income and related expenses on your tax return.',
    },
    {
      question: 'What should I do if I make a mistake on my tax return?',
      answer: 'File an adjustment request with the CRA using Form T1-ADJ to correct any errors or omissions.',
    },
  ];

  return (
    <div className="faqpers-container gradient__bg" id="FAQ">
      <div className="gradient__text faqpers-container-left"><h1>Frequently Asked Tax Questions </h1></div>
      <div className="faqpers-container-right">
        {faqpersData.map((item, index) => (
          <FAQ
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQpers;
