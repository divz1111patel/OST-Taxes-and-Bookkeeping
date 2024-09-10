// src/components/FAQ.js
import React from 'react';
import FAQ from '../../components/FAQ/faq';
import './FAQstud.css';

const FAQstud = () => {
  const faqstudData = [
    {
      question: 'Do I need to file a tax return if I’m a student?',
      answer: 'Yes, you need to file a tax return if you have income or if you want to claim certain credits or benefits. Even if you don’t have income, filing can be beneficial to access potential tax refunds or benefits.',
    },
    {
      question: 'What income do I need to report as a student?',
      answer: 'You need to report all sources of income, including part-time job earnings, scholarships, grants, and any other financial assistance that is considered taxable. Some scholarships and bursaries are tax-free, but you should check the specific rules for each.',
    },
    {
      question: 'Can I claim tuition fees as a deduction?',
      answer: 'Yes, you can claim tuition fees as a tax credit. You’ll need to have a T2202 form (Tuition and Enrolment Certificate) from your educational institution to do this. The credit is non-refundable, meaning it can reduce your tax owing but won’t result in a refund if you don’t owe taxes.',
    },
    {
      question: 'What is the difference between a non-refundable and a refundable tax credit?',
      answer: 'Non-refundable tax credits reduce the amount of tax you owe but can’t result in a refund if they exceed your tax liability. Refundable tax credits can result in a refund even if they exceed your tax owing.',
    },
    {
      question: 'Can I transfer unused tuition credits to a parent or spouse?',
      answer: 'Yes, you can transfer up to $5,000 of unused tuition credits to a parent or spouse, provided you have enough to cover your own tax liability first. This transfer must be done by completing Schedule 11.',
    },
    {
      question: 'Are there any deductions I can claim for textbooks?',
      answer: 'The federal textbook tax credit was eliminated starting in the 2017 tax year. However, some provinces may offer their own textbook credits or other education-related benefits.',
    },
    {
      question: 'How do I claim moving expenses if I moved for school?',
      answer: 'Moving expenses are deductible if you moved at least 40 kilometers closer to your school or job. You’ll need to complete Form T1-M and keep receipts for all moving expenses.',
    },
    {
      question: 'Can I claim student loan interest as a deduction?',
      answer: 'You cannot claim student loan interest as a deduction on your federal tax return. However, the interest on federal or provincial student loans is eligible for a non-refundable tax credit, which can help reduce your tax payable.',
    },
    {
      question: 'How does receiving a scholarship or bursary affect my taxes?',
      answer: 'Scholarships and bursaries are generally tax-free if they are received from a recognized post-secondary institution and used for tuition fees or related educational expenses. Be sure to report them properly if required.',
    },
    {
      question: 'What should I do if I’m unsure about my tax situation?',
      answer: 'If you’re unsure about any aspect of your tax return, consider using tax software, which often has built-in help for students. You can also consult a tax professional or contact the Canada Revenue Agency (CRA) for guidance. The CRA’s website offers resources specifically for students.',
    },
  ];

  return (
    <div className="faqstud-container gradient__bg" id="FAQ">
      <div className="gradient__text faqstud-container-left"><h1>Frequently Asked Tax Questions </h1></div>
      <div className="faqstud-container-right">
        {faqstudData.map((item, index) => (
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

export default FAQstud;
