import React from 'react';
import SectionHeader from './SectionHeader';
import ContactItem from './ContactItem';

const Contact = () => {
  const contactItems = [
    {
      type: 'Email',
      value: 'yadavom734@gmail.com',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor" />
        </svg>
      )
    },
    {
      type: 'LinkedIn',
      value: 'https://www.linkedin.com/in/yadavom734',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 3L3 10.53V11.5L9.84 14.16L12.5 21H13.46L21 3Z" fill="currentColor" />
        </svg>
      )
    },
    {
      type: 'GitHub',
      value: 'https://www.linkedin.com/in/yadavom734?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <SectionHeader
        title="Get In Touch"
        subtitle="Let's work together"
      />
      <div className="contact-content">
        <div className="contact-info">
          {contactItems.map((item, index) => (
            <ContactItem 
              key={index}
              type={item.type}
              value={item.value}
              icon={item.icon}
            />
          ))}
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Enter your full name" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email address" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              placeholder="What is this regarding?" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              placeholder="Tell me about your project, question, or job opportunity" 
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="send-icon">
              <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="currentColor" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 