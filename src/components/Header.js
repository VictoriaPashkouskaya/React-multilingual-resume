import React from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const StyledHeader = styled.header`
  .card-body {
    padding: 3rem !important;

    @media (max-width: 768px) {
      padding: 2rem !important;
    }

    @media (max-width: 480px) {
      padding: 1.5rem !important;
    }
  }

  h1.display-3 {
    font-size: 4rem;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 3rem;
    }

    @media (max-width: 480px) {
      font-size: 2.2rem;
    }
  }

  p.lead {
    font-size: 1.25rem;
    line-height: 1.8;

    @media (max-width: 768px) {
      font-size: 1.1rem;
      line-height: 1.6;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
      line-height: 1.5;
    }
  }
`;

const Header = () => {
  const { t } = useTranslation();

  return (
    <StyledHeader className="container my-5">
      <div
        className="card mx-auto shadow-lg rounded-5 overflow-hidden"
        style={{
          maxWidth: '900px',
          background: 'linear-gradient(135deg, #ffecd2, #fcb69f)',
          border: 'none',
          transform: 'translateY(0)',
          transition: 'transform 0.6s ease, box-shadow 0.6s ease'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-10px)';
          e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.3)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
        }}
      >
        <div className="card-body text-center p-5">
          <h1
            className="display-3 fw-bold mb-4 text-gradient"
            style={{
              background: 'linear-gradient(90deg, #ff5e3a, #ffb347)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 6px rgba(0,0,0,0.2)'
            }}
          >
            {t('header.name')}
          </h1>

          <p className="lead text-dark mb-3">
            {t('header.intro')}
            <span className="fw-bold text-danger">{t('header.systems')}</span>.
          </p>

          <p className="lead text-dark mb-3">
            {t('header.skills_intro')}
            <span className="fw-bold text-danger">{t('header.skills_list')}</span>
            {t('header.version_control')}
            <span className="fw-bold text-danger">{t('header.git')}</span>.
          </p>

          <p className="lead text-dark mb-3">
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

