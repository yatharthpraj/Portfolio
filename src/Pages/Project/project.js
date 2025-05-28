import React from 'react';
import './project.css';

const Project = () => {
    const projects = [
        {
            title: "Project 1",
            description: "A brief description of project 1",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXTb14H0pL8piAfDyR1f5Ua-m14lva9t9POQ&s",
            technologies: ["React", "Node.js", "MongoDB"],
            link: "https://github.com/yourusername/project1"
        },
        {
            title: "Project 2",
            description: "A brief description of project 2",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS33Bhfm45XfuyKWsaCCUh2MgWU3RRpKfAIAA&s",
            technologies: ["JavaScript", "CSS", "HTML"],
            link: "https://github.com/yourusername/project2"
        },
        // Add more projects as needed
    ];

    return (
        <div className="projects-container">
            <h1 className="projects-title">My Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-technologies">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;