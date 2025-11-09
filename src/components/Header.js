import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styled/Header.css';
import { FaWindows, FaLinux, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt } from 'react-icons/fa';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header-container">
      <div className="header-card">
        <div className="card-body text-center">

          {/* Title / Logo */}
          <h1 className="display-3 fw-bold mb-3">
            {t('')} {/* logo or name placeholder */}
          </h1>

          {/* Systems */}
          <p className="lead mb-1">
            {t('header.intro')}
<FaWindows className="icon" color="#0078D6" />
            <span className="fw-bold text-danger">
              {t('header.systems')}
              <FaLinux className="icon" color="#FCC624" />
            </span>
            .
          </p>

          {/* Skills */}
          <p className="lead mb-1">
            {t('header.skills_intro')}
            <span className="fw-bold text-danger">
              <FaHtml5 className="icon" color="#E34F26" />
              <FaCss3Alt className="icon" color="#1572B6" />
              {t('header.skills_list')}
              <FaReact className="icon" color="#61DAFB" />
              <FaJsSquare className="icon" color="#F7DF1E" />
            </span>
            
            {t('header.version_control')}
            <span className="fw-bold text-danger">
              <FaGitAlt className="icon" color="#F05032" />
              {t('header.git')}
              
            </span>
            .
          </p>

          {/* Expertise */}
          <p className="lead mb-1">
            {t('header.expertise_intro')}
            <span className="fw-bold text-danger">{t('header.expertise_list')}</span>
          </p>

          {/* Focus */}
          <p className="lead mb-0">{t('header.focus')}</p>

        </div>
      </div>
    </header>
  );
};

export default Header;
