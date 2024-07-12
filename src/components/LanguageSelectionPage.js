// src/components/LanguageSelectionPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LanguageSelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Button = styled.button`
  margin: 10px 0;
  padding: 10px 20px;
  border: none;
  background-color: #007acc;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  &:hover {
    background-color: #005ea3;
  }
`;

const LanguageSelectionPage = () => {
  const navigate = useNavigate();

  const selectLanguage = (lang) => {
    localStorage.setItem('language', lang);
    navigate('/resume');
  };

  return (
    <LanguageSelectionWrapper>
      <h1>Welcome! / Добро пожаловать! / ¡Bienvenido! / Ongi etorri!</h1>
      <p>Select your preferred language / Выберите предпочитаемый язык / Seleccione su idioma preferido / Hautatu nahiago duzun hizkuntza:</p>
      <Button onClick={() => selectLanguage('en')}>English</Button>
      <Button onClick={() => selectLanguage('ru')}>Русский</Button>
      <Button onClick={() => selectLanguage('es')}>Español</Button>
      <Button onClick={() => selectLanguage('eu')}>Euskara</Button>
    </LanguageSelectionWrapper>
  );
};

export default LanguageSelectionPage;
