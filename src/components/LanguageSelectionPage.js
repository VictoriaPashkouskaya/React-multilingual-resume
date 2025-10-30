import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled, { keyframes } from "styled-components";
import logoImg from "../img/Captura_de_pantalla_2025-10-26_102258-removebg-preview.png"; 

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const glow = keyframes`
  0%, 100% { filter: drop-shadow(0 0 10px #ffd70088); }
  50% { filter: drop-shadow(0 0 30px #ffffffdd); }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: radial-gradient(circle at 30% 20%, #3a1c71, #120b24 90%);
  padding: 20px;
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  animation: ${glow} 4s infinite ease-in-out;
  margin-bottom: 2.5rem;

  @media (max-width: 480px) {
    width: 100px;
  }
`;

const Title = styled.h1`
  font-size: 3.8rem;
  font-weight: 800;
  color: #ffffff;
  text-shadow: 0 0 25px rgba(255, 215, 0, 0.7);
  animation: ${fadeIn} 0.8s ease forwards;

  @media (max-width: 480px) {
    font-size: 2.4rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: #f5e9ff;
  text-align: center;
  max-width: 600px;
  opacity: 0.9;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
  animation: ${fadeIn} 1.2s ease forwards;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  position: relative;
  margin: 12px;
  padding: 16px 48px;
  font-size: 1.25rem;
  font-weight: 700;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  color: #fff;
  font-family: "Poppins", sans-serif;

  background: linear-gradient(
    135deg,
    ${({ c1 }) => c1},
    ${({ c2 }) => c2}
  );

  box-shadow:
    inset 0 1px 4px rgba(255, 255, 255, 0.4),
    0 10px 25px rgba(0,0,0,0.4),
    0 0 18px rgba(255, 215, 0, 0.25);

  transition: all 0.45s ease;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  &:hover {
    transform: translateY(-6px) scale(1.08);
    box-shadow:
      inset 0 1px 5px rgba(255,255,255,0.6),
      0 18px 40px rgba(0,0,0,0.55),
      0 0 28px rgba(255, 215, 0, 0.55);
  }

  &:active {
    transform: scale(0.97);
    box-shadow:
      inset 0 2px 6px rgba(0,0,0,0.4),
      0 6px 18px rgba(0,0,0,0.4);
  }

  @media (max-width: 480px) {
    width: 85%;
    padding: 14px 0;
    font-size: 1.1rem;
  }
`;

const LanguageSelectionPage = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation(); // подключаем i18n

  const selectLanguage = (lang) => {
    i18n.changeLanguage(lang); // меняем язык
    localStorage.setItem("language", lang);
    navigate("/resume"); // переходим на резюме
  };

  return (
    <Wrapper>
      <Logo src={logoImg} alt="Logo" />
      <Title>CV Viktoria</Title>
      <Description>
        Welcome! / Добро пожаловать! / ¡Bienvenido! / Ongi etorri! <br />
        Select your preferred language:
      </Description>

      <Button c1="#FF416C" c2="#FF4B2B" onClick={() => selectLanguage("en")}>
        English
      </Button>
      <Button c1="#1D4350" c2="#A43931" onClick={() => selectLanguage("ru")}>
        Русский
      </Button>
      <Button c1="#FFB75E" c2="#ED8F03" onClick={() => selectLanguage("es")}>
        Español
      </Button>
      <Button c1="#6A82FB" c2="#FC5C7D" onClick={() => selectLanguage("eu")}>
        Euskara
      </Button>
    </Wrapper>
  );
};

export default LanguageSelectionPage;
