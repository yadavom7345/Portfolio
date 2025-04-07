import React from 'react';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';

const Projects = () => {
  const projects = [
    {
      title: "Omni Assistant",
      description: "A real-time AI assistant that can help you with your daily tasks and queries.",
      image: "../src/assets/omni.png",
      techStack: ["React", "API", "JavaScript"],
      codeLink: "#",
      demoLink: "#"
    },
    {
      title: "Portfolio Website",
      description: "A portfolio website for a developer with a sleek design, responsive design, and SEO optimization.",
      image: "../src/assets/portfolio.png",
      techStack: ["React", "CSS Grid", "UI/UX"],
      codeLink: "#",
      demoLink: "#"
    },
    {
      title: "Capstone Project",
      description: "A fully responsive and visually appealing website designed to showcase my expertise in HTML and CSS.",
      image: "../src/assets/capstone.png",
      techStack: ["HTML", "CSS", "JS"],
      codeLink: "#",
      demoLink: "#"
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