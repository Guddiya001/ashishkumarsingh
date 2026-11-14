import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <div><strong>Ashish Kumar Singh</strong><span>Senior Software Engineer · Production AI Engineer</span></div>
        <div className="footer-links">
          <a href="https://github.com/Guddiya001" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/ashish-kumar-singh1986/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="#home">Back to top ↑</a>
        </div>
        <p>© {new Date().getFullYear()} Ashish Kumar Singh. Built with React.</p>
      </div>
    </footer>
  );
}
