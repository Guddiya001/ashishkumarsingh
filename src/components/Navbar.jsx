import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav>
      <div className="logo">
        <h1>{t('name')}</h1>
        {t('title')}
      </div>

      <ul>
        <li><Link to="/">{t('home')}</Link></li>
        <li><Link to="/case-studies">{t('case_Studies')}</Link></li>
      </ul>
      <div className="nav-controls">
        <select onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language} className="language-select">
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
        </select>
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkMode ? t('lightMode') : t('darkMode')}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
