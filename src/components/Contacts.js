import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaEnvelope, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';
import profileImage from '../img/IMG20240216124521.jpg';

const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  gap: 15px;

  @media (max-width: 600px) {
    align-items: center;
    padding: 15px;
    gap: 10px;
  }
`;

const Title = styled.h2`
  color: #222;
  font-weight: 700;
  margin: 0 0 10px 0;

  @media (max-width: 600px) {
    font-size: 1.3rem;
    text-align: center;
  }
`;

const ContactRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #1a73e8;
  flex-shrink: 0;

  @media (max-width: 600px) {
    width: 80px;
    height: 80px;
  }
`;

const ContactIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  svg {
    font-size: 1.6rem;
    color: #1a73e8;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #1a73e8;
  text-decoration: none;

  span {
    margin-left: 6px;

    @media (max-width: 600px) {
      display: none;
    }
  }
`;

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <ContactsWrapper>
      <Title>{t('contacts.title')}</Title>
      <ContactRow>
        <ProfileImage src={profileImage} alt="Profile" />
        <ContactIcons>
          <ContactLink href="mailto:vika.pashkowskaia@ukr.net">
            <FaEnvelope />
            <span>vika.pashkowskaia@ukr.net</span>
          </ContactLink>
          <ContactLink href="https://wa.me/34624823625" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
            <span>+34 624 82 36 25</span>
          </ContactLink>
          <ContactLink href="https://github.com/VictoriaPashkouskaya" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            <span>GitHub</span>
          </ContactLink>
          <ContactLink href="https://www.linkedin.com/in/victoria-pashkouskaya" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            <span>LinkedIn</span>
          </ContactLink>
        </ContactIcons>
      </ContactRow>
    </ContactsWrapper>
  );
};

export default Contacts;
