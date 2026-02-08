import { footer } from 'framer-motion/client';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="footer-content">
        <div className="contact-info">
          <p><strong>{t('footer.visaText')}</strong></p>
        </div>
        <div className="social-links">
          <a href="https://linkedin.com/in/ashish-kumar-singh1986" target="_blank" rel="noopener noreferrer">{t('footer.email')}</a> &nbsp;|&nbsp;
          <a href="https://github.com/guddiya001" target="_blank" rel="noopener noreferrer">{t('footer.github')}</a> &nbsp;|&nbsp;
          <a href="https://linkedin.com/in/ashish-kumar-singh1986" target="_blank" rel="noopener noreferrer">{t('footer.linkedin')}</a>
        </div>
      </div>
      <p>{t('footer.copyright')}</p>
    </footer>
  );
};

export default Footer;
