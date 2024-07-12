import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const LanguageSelectorWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  background-color: #f2f2f2;
  background-color: rgba(255, 255, 255, 0.8); /* Легкий прозрачный белый фон */
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LanguageButton = styled.button`
  background-color: transparent;
  color: #007acc;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #005ea3;
  }

  &:focus {
    outline: none;
    color: #005ea3;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <LanguageSelectorWrapper>
      <LanguageButton onClick={() => changeLanguage('en')}>EN</LanguageButton>
      <LanguageButton onClick={() => changeLanguage('ru')}>RU</LanguageButton>
      <LanguageButton onClick={() => changeLanguage('es')}>ES</LanguageButton>
      <LanguageButton onClick={() => changeLanguage('eu')}>EU</LanguageButton>
    </LanguageSelectorWrapper>
  );
};

export default LanguageSelector;
