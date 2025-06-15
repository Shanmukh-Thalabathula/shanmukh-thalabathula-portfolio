// src/Navbar.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar">
            <div className="navbar-title">T. Shanmukh</div>

            <div className="menu-icon" onClick={toggleMenu}>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            </div>

            <div className={`nav-links ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
                <Link to="/" className={`nav-items ${isActive('/') ? 'active' : ''}`} onClick={closeMenu}>Home</Link>
                <Link to="/projects" className={`nav-items ${isActive('/projects') ? 'active' : ''}`} onClick={closeMenu}>Projects</Link>
                <Link to="/achievements-certificates" className={`nav-items ${isActive('/achievements-certificates') ? 'active' : ''}`} onClick={closeMenu}>Achievements/Certificates</Link>
                <Link to="/about" className={`nav-items ${isActive('/about') ? 'active' : ''}`} onClick={closeMenu}>About Me</Link>
            </div>
        </nav>
    );
}
