import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// Анимация пульса для кнопок
const pulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 5px 15px rgba(0,0,0,0.2); }
  50% { transform: scale(1.05); box-shadow: 0 12px 25px rgba(0,0,0,0.35); }
  100% { transform: scale(1); box-shadow: 0 5px 15px rgba(0,0,0,0.2); }
`;

const LanguageSelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b);
`;

const AppTitle = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  color: #fff;
  text-shadow: 3px 3px 15px rgba(0,0,0,0.4);
  margin-bottom: 2rem;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.3rem;
  color: #f0f0f0;
  max-width: 650px;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 3rem;

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

// Кнопка с 3D эффектом и премиум градиентами
const Button = styled.button`
  margin: 10px;
  padding: 16px 36px;
  font-size: 1.15rem;
  font-weight: 800;
  color: white;
  border: none;
  border-radius: 60px;
  cursor: pointer;
  background: linear-gradient(135deg, ${({ colorStart, colorEnd }) => colorStart}, ${({ colorStart, colorEnd }) => colorEnd});
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${pulse} 3s infinite;
  font-family: 'Poppins', sans-serif;
  text-shadow: 1px 1px 5px rgba(0,0,0,0.4);

  &:hover {
    transform: translateY(-6px) scale(1.08);
    box-shadow: 0 18px 35px rgba(0,0,0,0.45);
  }

  &:active {
    transform: translateY(2px) scale(0.98);
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
  }

  @media (max-width: 480px) {
    width: 80%;
    padding: 14px 0;
    font-size: 1rem;
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
      <AppTitle>CV Viktoria</AppTitle>
      <Description>
        Welcome! / Добро пожаловать! / ¡Bienvenido! / Ongi etorri! <br />
        Select your preferred language / Выберите предпочитаемый язык / Seleccione su idioma preferido / Hautatu nahiago duzun hizkuntza:
      </Description>

      <Button colorStart="#FF416C" colorEnd="#FF4B2B" onClick={() => selectLanguage('en')}>English</Button>
      <Button colorStart="#1D4350" colorEnd="#A43931" onClick={() => selectLanguage('ru')}>Русский</Button>
      <Button colorStart="#FFB75E" colorEnd="#ED8F03" onClick={() => selectLanguage('es')}>Español</Button>
      <Button colorStart="#6A82FB" colorEnd="#FC5C7D" onClick={() => selectLanguage('eu')}>Euskara</Button>
    </LanguageSelectionWrapper>
  );
};

export default LanguageSelectionPage;

