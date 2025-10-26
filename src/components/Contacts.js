import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
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
        <p><FaEnvelope /> {t('contacts.email')}: your.email@example.com</p>
        <p><FaPhone /> {t('contacts.phone')}: +1234567890</p>
        <p><FaGithub /> {t('contacts.github')}: <a href="https://github.com/yourprofile">https://github.com/yourprofile</a></p>
      </ContactDetails>
    </ContactsWrapper>
  );
};

export default Contacts;

