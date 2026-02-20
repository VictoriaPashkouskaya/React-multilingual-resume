import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styled/Header.css';

const Header = () => {
  const { t } = useTranslation();
  const highlights = t('professional.highlights', { returnObjects: true });

  return (
    <header className="header-container">
      <div className="header-card">
        <div className="card-body">
          <h2 className="section-title">{t('professional.title')}</h2>
          <p className="lead">{t('professional.intro')}</p>

          <div className="highlight-list">
            {highlights.map((item, index) => (
              <span key={index} className="highlight-chip">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
