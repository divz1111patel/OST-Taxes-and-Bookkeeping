// src/components/FAQ.js
import React from 'react';
import FAQ from '../../components/FAQ/faq';
import './FAQcorp.css';

const FAQcorp = () => {
  const faqcorpData = [
    {
      question: 'What is a corporate tax return?',
      answer: 'A corporate tax return is a document submitted to the tax authorities reporting a corporation’s income, expenses, and taxes owed. In Canada, this is known as the T2 Corporation Income Tax Return.',
    },
    {
      question: 'When is the deadline for filing a corporate tax return?',
      answer: 'The T2 return is due six months after the end of your corporation’s fiscal year. For example, if your fiscal year ends on December 31, the return is due by June 30 of the following year.',
    },
    {
      question: 'What are the penalties for late filing?',
      answer: 'Penalties include a base fee of 5% of the unpaid tax amount, plus 1% for each complete month the return is late, up to 12 months. Interest charges may also apply.',
    },
    {
      question: 'What documents are needed for filing a corporate tax return?',
      answer: 'Essential documents include financial statements, income statements, balance sheets, receipts for deductions, and any relevant supporting documents.',
    },
    {
      question: 'Can corporate tax returns be filed electronically?',
      answer: 'Yes, corporate tax returns can be filed electronically through the CRA\'s E-file system or using certified tax software.',
    },
    {
      question: 'How can a corporation minimize its tax liability?',
      answer: 'Tax minimization strategies include taking advantage of deductions, credits, and tax planning opportunities, such as income splitting or deferring income. Consulting a tax advisor can help identify the best strategies.',
    },
    {
      question: 'What if the corporation cannot pay the taxes owed?',
      answer: 'If unable to pay the full amount, the corporation should contact the CRA to discuss payment arrangements, such as installment plans or a payment extension.',
    },
    {
      question: 'How can a corporation check the status of its tax return?',
      answer: 'The status of a tax return can be checked through the CRA’s My Business Account online portal or by contacting the CRA directly.',
    },
    {
      question: 'What should be done if there’s an error on a filed tax return?',
      answer: 'If an error is discovered, file an amendment to the original return or use the CRA\'s online adjustment request system to correct the mistake.',
    },
    {
      question: 'What is the difference between a T2 return and other corporate filings?',
      answer: 'The T2 return specifically reports the corporation’s income, expenses, and taxes. Other filings may include GST/HST returns, payroll remittances, and additional compliance documents specific to the corporation’s activities.',
    },
  ];

  return (
    <div className="faqcorp-container gradient__bg" id="FAQ">
      <div className="gradient__text faqcorp-container-left"><h1>Frequently Asked Tax Questions </h1></div>
      <div className="faqcorp-container-right">
        {faqcorpData.map((item, index) => (
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

export default FAQcorp;
