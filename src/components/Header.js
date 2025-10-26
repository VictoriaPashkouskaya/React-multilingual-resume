import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledHeader = styled.header`
  .card-body {
    padding: 2rem;

    @media (max-width: 768px) { padding: 1.5rem; }
    @media (max-width: 480px) { padding: 1rem; }
  }

  h1.display-3 {
    font-size: 2rem;
    line-height: 1.2;
    @media (max-width: 768px) { font-size: 1.6rem; }
    @media (max-width: 480px) { font-size: 1.4rem; }
  }

  p.lead {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 0.4rem;
    @media (max-width: 768px) { font-size: 0.95rem; line-height: 1.4; }
    @media (max-width: 480px) { font-size: 0.9rem; line-height: 1.3; }
  }
`;

const Header = () => {
  const { t } = useTranslation();

  return (
    <StyledHeader className="d-flex justify-content-center my-4">
      <div className="card shadow-lg rounded-4 overflow-hidden"
           style={{
             width: '100%',
             maxWidth: '700px',
             background: 'linear-gradient(135deg, #ffecd2, #fcb69f)',
             border: 'none',
           }}>
        <div className="card-body text-center">
          <h1 className="display-3 fw-bold mb-3 text-gradient"
              style={{
                background: 'linear-gradient(90deg, #ff5e3a, #ffb347)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '1px 1px 4px rgba(0,0,0,0.2)'
              }}>
            {t('')} {/* Твой логотип/имя */}
          </h1>

          <p className="lead text-dark mb-1">
            {t('')}
            <span className="fw-bold text-danger">{t('header.systems')}</span>.
          </p>

          <p className="lead text-dark mb-1">
            {t('header.skills_intro')}
            <span className="fw-bold text-danger">{t('header.skills_list')}</span>
            {t('header.version_control')}
            <span className="fw-bold text-danger">{t('header.git')}</span>.
          </p>

          <p className="lead text-dark mb-1">
            {t('header.expertise_intro')}
            <span className="fw-bold text-danger">{t('header.expertise_list')}</span>
          </p>

          <p className="lead text-dark mb-0">
            {t('header.focus')}
          </p>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
