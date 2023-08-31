import React from 'react';
import './App.css';
function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'This is the description of Project 1.',
      imageUrl: 'https://example.com/project1.jpg',
      demoUrl: 'https://example.com/project1-demo',
      githubUrl: 'https://github.com/example/project1',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'This is the description of Project 2.',
      imageUrl: 'https://example.com/project2.jpg',
      demoUrl: 'https://example.com/project2-demo',
      githubUrl: 'https://github.com/example/project2',
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;