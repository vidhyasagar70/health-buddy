import React, { useEffect, useState } from 'react';
import './faq.css';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config')
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);
        const pageConfig = data[0].page_config;
        const faqData = pageConfig.find(item => item.id === "7");
        if (faqData) {
          setFaqs(faqData.props);
        } else {
          console.error('FAQ data not found');
        }
      })
      .catch(error => console.error('Error fetching FAQ data:', error));
  }, []);

  const toggleExpand = (index) => {
    setFaqs(faqs.map((faq, i) => i === index ? { ...faq, isExpanded: !faq.isExpanded } : faq));
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={faq.id} className="faq-item">
          <div className="faq-question" onClick={() => toggleExpand(index)}>
            <h2>{faq.question}</h2>
            <span>{faq.isExpanded ? '-' : '+'}</span>
          </div>
          {faq.isExpanded && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
              <ul>
                {faq.points.map((point, idx) => (
                  <li key={idx}>{point.pnt}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
