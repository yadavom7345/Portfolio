import React from 'react';
import SectionHeader from './SectionHeader';
import profile from '../assets/profile.png'

const About = () => {
  const tags = ['Frontend', 'UI/UX', 'Web Design', 'React', 'JavaScript'];

  return (
    <section id="about" className="portfolio-container">
      <div className="about-section">
        <div className="about-image-container">
          <div className="about-image-wrapper">
            <img src={profile} alt="My Profile" className="about-image" />
            <div className="about-image-overlay"></div>
            <div className="about-image-shape"></div>
          </div>
          <div className="about-image-decoration">
            <span className="decoration-dot"></span>
            <span className="decoration-dot"></span>
            <span className="decoration-dot"></span>
          </div>
        </div>
        <div className="about-content">
          <SectionHeader
            title="About Me"
            subtitle="My introduction"
          />
          
          <div className="about-text">
            <p>I am a passionate <span className="highlight">Frontend Developer</span> with a strong focus on creating intuitive and responsive user interfaces. I enjoy turning complex problems into simple, beautiful, and intuitive designs.</p>
            
            <p>I'm dedicated to building applications with a focus on <span className="highlight">usability</span> and <span className="highlight">performance</span>. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.</p>
          </div>
          
          <div className="about-tags">
            {tags.map((tag, index) => (
              <span className="about-tag" key={index}>{tag}</span>
            ))}
          </div>
          
          <a href="/resume.pdf" download className="download-resume-btn">
            <span>Download CV</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About; 