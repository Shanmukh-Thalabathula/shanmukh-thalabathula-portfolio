// src/Footer.jsx
import './Footer.css';
import { FaYoutube, FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          href="https://www.youtube.com/@Code-Breaker-n5x"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.linkedin.com/in/shanmukh-thalabathula-034b66310/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Shanmukh-Thalabathula"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:thalabathula.shanmukh04@gmail.com"
          className="footer-link"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.instagram.com/mr_shannu_._/?__pwa=1"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
      <p className="footer-text">© 2025 SHANMUKH THALABATHULA. All rights reserved.</p>
    </footer>
  );
}
