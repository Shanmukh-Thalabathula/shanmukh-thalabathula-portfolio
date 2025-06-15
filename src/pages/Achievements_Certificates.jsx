import './Achievements_Certificates.css';
import { useEffect, useRef } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const certificates = [
  {
    title: 'Python Web Development',
    description: 'Completed Python full-stack course under Capgemini ICT Program.',
    image: '/certificates/ICT.jpg',
    link: ''
  },
  {
    title: 'Artificial Intelligence Fundamentals(IBM)',
    description: 'I have successfully completed the IBM AI Fundamentals course.',
    image: '/certificates/ArtificialIntelligenceFundamentals_Badge.jpg',
    link: 'https://www.credly.com/badges/84c15bb8-190b-4126-a5bb-ee715dbdb0ab/print'
  },
  {
    title: 'Generative AI in Action(IBM)',
    description: 'I have successfully completed the IBM Generative AI in Action course.',
    image: '/certificates/GenerativeAIinAction_Badge.jpg',
    link: 'https://www.credly.com/badges/0a4d2d43-ee9a-44ea-875c-ad42c56c116f/print'
  },
  {
    title: 'Python Fundamentals for Beginners',
    description: 'Completed Python Fundaments for Beginners course under Great Learning.',
    image: '/certificates/python_fundamentals.jpg',
    link: ''
  }
];

export default function AchievementsCertificates() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const ratio = entry.intersectionRatio;
          const target = entry.target;
          target.style.setProperty('--visibility-ratio', ratio);
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
    <div className="certificates-container">
      <h1 className="certificates-heading">Achievements & Certificates</h1>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div
            className="certificate-card"
            key={index}
            ref={el => (cardsRef.current[index] = el)}
          >
            <img src={cert.image} alt={cert.title} className="certificate-image" />
            <h2 className="certificate-title">{cert.title}</h2>
            <p className="certificate-description">{cert.description}</p>
            {cert.link && (
              <div className="certificate-links">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Certificate"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
