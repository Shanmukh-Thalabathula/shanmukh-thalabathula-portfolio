import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Me</h1>

      <div className="about-content">
        <div className="about-left">
          <img
            src="/profile.jpg"
            alt="Profile photo of Full Stack Developer Shanmukh Thalabathula"
            className="profile-image"
            loading="lazy"
          />
        </div>

        <div className="about-right">
          <p className="about-bio">
            Hello! I’m <span className="highlight">Shanmukh Thalabathula</span>, a dedicated Full Stack Developer
            from India. I recently completed my <strong>Python Web Development</strong> training with Capgemini's ICT
            Academy, where I mastered Django, Flask, Tkinter, and more. My journey also includes working on
            real-world projects like a social media app and weather app. I love combining technical expertise with
            creativity to build interactive, user-friendly websites and applications.
          </p>

          <dl className="about-info">
            <div><dt>First Name:</dt><dd>Shanmukh</dd></div>
            <div><dt>Last Name:</dt><dd>Thalabathula</dd></div>
            <div><dt>Date of Birth:</dt><dd>June 28, 2003</dd></div>
            <div><dt>Nationality:</dt><dd>Indian</dd></div>
            <div><dt>Languages:</dt><dd>English, Telugu, Hindi</dd></div>
            <div><dt>Phone:</dt><dd>+91 63048 46130</dd></div>
            <div><dt>Email:</dt><dd>shanmukhthalabathula@gmail.com</dd></div>
          </dl>

          <div className="about-skills">
            <h2>Skills</h2>
            <ul>
              <li>Python</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>React.js</li>
              <li>Django</li>
              <li>MySQL</li>
            </ul>
          </div>

          <div className="about-links">
            <h2>Connect with Me</h2>
            <a
              href="https://www.instagram.com/shanmukh__thalabathula/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram Profile"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/shanmukh-thalabathula-160b31249/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Shanmukh721"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="/Shanmukh-Resume.pdf"
              download
              className="resume-btn"
              title="Download Resume"
            >
              <i className="fas fa-download"></i> Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
