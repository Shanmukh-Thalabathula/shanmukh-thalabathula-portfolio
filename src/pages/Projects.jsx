// src/components/Projects.jsx
import './Projects.css';
import { useEffect, useRef } from 'react';

const projects = [
  {
    title: 'House Price Prediction',
    description: 'House Price Prediction using random forest model by Django.',
    image: '/projects_images/house_price_prediction.png',
    github: 'https://github.com/Shanmukh-Thalabathula/multi_house_price_prediction.git',
    youtube: ''
  },
  {
    title: 'Anime Streaming App',
    description: 'A full-stack anime streaming platform built with Django.',
    image: '/projects_images/anime_steaming_application.jpeg',
    github: '',
    youtube: 'https://youtu.be/7PzdQd9_3Xg?si=dJ4MGggcMK_zGB4E'
  },
  {
    title: 'Heart Disease Prediction',
    description: 'Heart Disease Prediction using Random Forest model by Django.',
    image: '/projects_images/heart_disease_prediction.png',
    github: 'https://github.com/Shanmukh-Thalabathula/heart_disease_prediction.git',
    youtube: ''
  },
  {
    title: 'Social Media Application',
    description: 'A simple social media application created using Django + Bootstrap + CSS.',
    image: '/projects_images/social_media_application.png',
    github: 'https://github.com/Shanmukh-Thalabathula/social_media.git',
    youtube: ''
  },
  {
    title: "Background Remover",
    description: "Background Remover for images using rembg library and Django framework.",
    image: '/projects_images/background_remover.png',
    github: 'https://github.com/Shanmukh-Thalabathula/background_remover.git',
    youtube: 'https://youtu.be/Ver5or5qVWU?si=R-DU3LCBmClJy7BO'
  },
  {
    title: 'CRUD Operations',
    description: 'CRUD Operations using Django + SQLite + Bootstrap.',
    image: '/projects_images/CRUD_Operations.png',
    github: 'https://github.com/Shanmukh-Thalabathula/CRUDoperationUsingDjango.git',
    youtube: ''
  }
];

export default function Projects() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const ratio = entry.intersectionRatio;
          const easedRatio = Math.pow(ratio, 0.5);
          entry.target.style.setProperty('--visibility-ratio', easedRatio);
        });
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100)
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="projects-container">
      <h1 className="projects-heading">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            ref={el => (cardsRef.current[index] = el)}
          >
            <img src={project.image} alt={`Screenshot of ${project.title}`} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  title="View on GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              )}
              {project.youtube && (
                <a
                  href={project.youtube}
                  title="Watch on YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              )}
            </div>
            {!project.github && !project.youtube && (
              <p className="no-links">No demo or code available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
