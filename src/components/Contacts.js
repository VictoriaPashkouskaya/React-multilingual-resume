import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaEnvelope, FaWhatsapp, FaLinkedin, FaDownload, FaMapMarkerAlt } from 'react-icons/fa';
import profileImage from '../img/IMG20240216124521.jpg';
import '../styled/Contacts.css';

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <div className="contacts-wrapper">
      <div className="contact-card">
        <img className="profile-image" src={profileImage} alt="Profile" />

        <div className="info-wrapper">
          <h2 className="title">{t('profile.name')}</h2>
          <p className="contact-role">{t('profile.role')}</p>
          <p className="contact-location">
            <FaMapMarkerAlt /> {t('profile.location')}
          </p>
          <p className="contact-summary">{t('profile.summary')}</p>

          <div className="contact-icons">
            <a href="mailto:vika.pashkowskaia@ukr.net">
              <FaEnvelope />
              <span>{t('contacts.email')}</span>
            </a>
            <a href="https://wa.me/34624823625" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
              <span>{t('contacts.whatsapp')}</span>
            </a>
            <a href="https://github.com/VictoriaPashkouskaya" target="_blank" rel="noopener noreferrer">
              <FaGithub />
              <span>{t('contacts.github')}</span>
            </a>
            <a href="https://www.linkedin.com/in/victoria-pashkouskaya" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
              <span>{t('contacts.linkedin')}</span>
            </a>
          </div>

          <div className="download-buttons">
            <a href="/resume-en.pdf" download><FaDownload /> EN</a>
            <a href="/resume-es.pdf" download><FaDownload /> ES</a>
            <a href="/resume-ru.pdf" download><FaDownload /> RU</a>
            <a href="/resume-eu.pdf" download><FaDownload /> EU</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
