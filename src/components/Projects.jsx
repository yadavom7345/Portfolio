import React from 'react';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';

import omni from '../Images/omni.png'
import portfolio from '../Images/portfolio.png'
import capstone from '../Images/capstone.png'

const Projects = () => {
  const projects = [
    {
      title: "Omni Assistant",
      description: "A real-time AI assistant that can help you with your daily tasks and queries.",
      image: omni,
      techStack: ["React", "API", "JavaScript"],
      codeLink: "https://github.com/yadavom7345/Omni_Assistant",
      demoLink: "https://omni-assistant-734.vercel.app/"
    },
    {
      title: "Portfolio Website",
      description: "A portfolio website for a developer with a sleek design, responsive design, and SEO optimization.",
      image: portfolio,
      techStack: ["React", "CSS Grid", "UI/UX"],
      codeLink: "https://github.com/yadavom7345/Portfolio",
      demoLink: "https://portfolio-git-main-yadavom7345s-projects.vercel.app/"
    },
    {
      title: "Capstone Project",
      description: "A fully responsive and visually appealing website designed to showcase my expertise in HTML and CSS.",
      image: capstone,
      techStack: ["HTML", "CSS", "JS"],
      codeLink: "https://github.com/yadavom7345/S-W_Capstone_Project",
      demoLink: "https://s-w-capstone-project.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="portfolio-container">
        <SectionHeader
          title="My Projects"
        />
        
        <div className="project-cards-container">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 