// src/components/FAQ.js
import React from 'react';
import FAQ from '../../components/FAQ/faq';
import './faqs.css';

const FAQs = () => {
  const faqData = [
    { question: 'Do I need to file taxes as a student?', answer: 'Students often wonder if they are required to file a tax return, especially if they have part-time jobs, scholarships, or other sources of income.' },
    { question: 'Can I claim educational expenses as deductions or credits?', answer: 'Questions about the tax benefits related to educational expenses, including whether they can claim deductions for tuition and fees or qualify for education-related tax credits.' },
    { question: 'What is the impact of student loans on my taxes?', answer: 'Students may inquire about the tax implications of student loan interest, including whether they can deduct the interest paid on their student loans.' },
    { question: 'Can I claim any credits for working part-time or during the summer?', answer: 'Students with part-time jobs might be curious about available tax credits, such as the Earned Income Tax Credit (EITC), and how part-time income is taxed.' },
    { question: 'Do I need to report income from internships or fellowships?', answer: 'Questions about whether income from internships, fellowships, or research assistant positions is taxable and needs to be reported on their tax return.' },
    { question: 'How does living on campus or off-campus affect my taxes?', answer: 'Students living on or off-campus may have questions about the tax implications of their housing situation, including whether rent and related expenses can be claimed on their tax return.' },

  ];

  return (
    <div className="faq-container" id="FAQs">
      <div className="gradient__text faq-container-left"><h1>Frequently Asked Tax Questions </h1></div>
      <div className="faq-container-right">
        {faqData.map((item, index) => (
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

export default FAQs;
