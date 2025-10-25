// src/components/Header.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="container my-5">
      <div className="card mx-auto shadow-lg rounded-5 overflow-hidden" 
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
           }}>
        <div className="card-body text-center p-5">
          <h1 className="display-3 fw-bold mb-4 text-gradient" 
              style={{ 
                background: 'linear-gradient(90deg, #ff5e3a, #ffb347)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '2px 2px 6px rgba(0,0,0,0.2)'
              }}>
            {t('Viktoriya Pashkouskaya')}
          </h1>

          <p className="lead text-dark mb-3" style={{ lineHeight: 1.8 }}>
            {t('Técnico en informática con experiencia en ')}
            <span className="fw-bold text-danger">Windows y Linux</span>.
          </p>

          <p className="lead text-dark mb-3" style={{ lineHeight: 1.8 }}>
            {t('Conocimientos en ')}
            <span className="fw-bold text-danger">HTML, CSS, JavaScript, React</span>
            {t(' y sistemas de control de versiones ')}
            <span className="fw-bold text-danger">Git, GitHub</span>.
          </p>

          <p className="lead text-dark mb-3" style={{ lineHeight: 1.8 }}>
            {t('Capacitado en ')}
            <span className="fw-bold text-danger">soporte técnico</span>
            {t(', gestión documental digital, mantenimiento de hardware y periféricos, y creación de presentaciones profesionales con PowerPoint, Canva y Figma.')}
          </p>

          <p className="lead text-dark mb-0" style={{ lineHeight: 1.8 }}>
            {t('Enfocado en la resolución de incidencias, optimización del rendimiento del sistema и atención al usuario.')}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
