import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const goToSection = (href) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.assign(`/${href}`);
      return;
    }
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">AS</span>
          <span className="brand-copy">
            <strong>Ashish Singh</strong>
            <small>Software · AI Engineering</small>
          </span>
        </Link>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>

        <div className={`nav-content ${menuOpen ? 'is-open' : ''}`}>
          <div className="nav-links">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => goToSection(link.href)}>
                {link.label}
              </a>
            ))}
            <Link to="/case-studies" onClick={() => setMenuOpen(false)}>Case studies</Link>
          </div>
          <div className="nav-actions">
            <button className="icon-button theme-toggle" onClick={toggleTheme} type="button" aria-label="Toggle color theme">
              {isDarkMode ? '☀' : '◐'}
            </button>
            <a className="nav-cta" href="https://www.linkedin.com/in/ashish-kumar-singh1986/" target="_blank" rel="noreferrer">
              Let&apos;s connect <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
