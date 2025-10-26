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

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 50%;
  border: 3px solid #1a73e8;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  h2 {
    margin-bottom: 10px;
    color: #222;
    text-align: center;

    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }

  p {
    margin: 6px 0;
    font-size: 1rem;
    color: #555;
    display: flex;
    align-items: center;
    word-break: break-word;

    a {
      margin-left: 6px;
      color: #1a73e8;
      text-decoration: none;
      word-break: break-word;
      &:hover {
        text-decoration: underline;
      }
    }

    svg {
      margin-right: 6px;
      color: #1a73e8;
      flex-shrink: 0;
    }

    @media (max-width: 600px) {
      font-size: 0.95rem;
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
        <p>
          <FaEnvelope />
          <a href="mailto:vika.pashkowskaia@ukr.net">vika.pashkowskaia@ukr.net</a>
        </p>
        <p>
          <FaPhone />
          <a href="tel:+34624823625">+34 624 82 36 25</a>
        </p>
        <p>
          <FaGithub />
          <a href="https://github.com/VictoriaPashkouskaya" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
        <p>
          <FaLinkedin />
          <a href="https://www.linkedin.com/in/victoria-pashkouskaya" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </ContactDetails>
    </ContactsWrapper>
  );
};

export default Contacts;

