import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FaGithub, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import profileImage from '../img/IMG20240216124521.jpg';

const ContactsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 50%;
  border: 3px solid #1a73e8;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    margin-bottom: 10px;
    color: #222;
  }

  p {
    margin: 4px 0;
    font-size: 1rem;
    color: #555;
    display: flex;
    align-items: center;

    a {
      margin-left: 6px;
      color: #1a73e8;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }

    svg {
      margin-right: 6px;
      color: #1a73e8;
    }
  }
`;

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <ContactsWrapper>
      <ProfileImage src={profileImage} alt="Profile" />
      <ContactDetails>
        <h2>{t('contacts.title')}</h2>
        <p><FaEnvelope /> {t('contacts.email')}: vika.pashkowskaia@ukr.net</p>
        <p><FaPhone /> {t('contacts.phone')}: +34 624 82 36 25</p>
        <p><FaGithub /> {t('Github')}: <a href="https://github.com/VictoriaPashkouskaya" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        <p><FaLinkedin /> {t('Linkedin')}: <a href="https://www.linkedin.com/in/victoria-pashkouskaya" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </ContactDetails>
    </ContactsWrapper>
  );
};

export default Contacts;

