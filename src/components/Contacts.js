import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ContactsWrapper = styled.div`
  margin-bottom: 20px;
`;

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <ContactsWrapper>
      <h2>{t('contacts.title')}</h2>
      <p>{t('contacts.email')}: your.email@example.com</p>
      <p>{t('contacts.phone')}: +1234567890</p>
      <p>{t('contacts.github')}: <a href="https://github.com/yourprofile">https://github.com/yourprofile</a></p>
    </ContactsWrapper>
  );
};

export default Contacts;