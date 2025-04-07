import React from 'react';
import SkillIcon from './SkillIcon';
import SectionHeader from './SectionHeader';

const Skills = () => {
  const skills = [
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'ReactJS', percentage: 88 },
    { name: 'Python', percentage: 75 },
    { name: 'UI/UX', percentage: 80 }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="portfolio-container">
        <SectionHeader 
          title="My Skills"
          subtitle="Technologies I've been working with"
        />
        
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skills-card" key={index}>
              <SkillIcon name={skill.name} percentage={skill.percentage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 