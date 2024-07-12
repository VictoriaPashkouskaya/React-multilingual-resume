import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Путь к изображению профиля
import profileImage from '../img/IMG20240216124521.jpg';

const ContactsWrapper = styled.div`
  display: flex;
  align-items: center; /* Центрирует фото и контакты по вертикали */
  margin-bottom: 20px;
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 10px;
`;

const ProfileImage = styled.img`
  width: 150px; /* Регулируйте размер изображения по вашему усмотрению */
  height: 150px;
  object-fit: cover; /* Сохранение пропорций и обрезка изображения */
  margin-right: 20px; /* Отступ справа для разделения фото и контактов */
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Выравнивание контактов по левому краю */
`;

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <ContactsWrapper>
      <ProfileImage src={profileImage} alt="Profile" />
      <ContactDetails>
        <h2>{t('contacts.title')}</h2>
        <p>{t('contacts.email')}: your.email@example.com</p>
        <p>{t('contacts.phone')}: +1234567890</p>
        <p>{t('contacts.github')}: <a href="https://github.com/yourprofile">https://github.com/yourprofile</a></p>
      </ContactDetails>
    </ContactsWrapper>
  );
};

export default Contacts;
