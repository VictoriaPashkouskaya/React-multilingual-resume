import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';
import logoImg from '../img/Captura_de_pantalla_2025-10-26_102258-removebg-preview.png';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Wrapper = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
  background:
    radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.18), transparent 35%),
    radial-gradient(circle at 85% 10%, rgba(99, 102, 241, 0.2), transparent 34%),
    linear-gradient(135deg, #0b1020, #131a33 60%, #1b2a4b);
`;

const Card = styled.section`
  width: min(920px, 100%);
  border-radius: 24px;
  padding: 28px;
  text-align: center;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(14px);
  box-shadow: 0 28px 60px rgba(0, 0, 0, 0.35);
`;

const Logo = styled.img`
  width: 138px;
  height: auto;
  margin-bottom: 1.2rem;
  filter: drop-shadow(0 10px 24px rgba(56, 189, 248, 0.35));
`;

const Title = styled.h1`
  margin: 0;
  color: #fff;
  font-size: clamp(2rem, 6vw, 3.4rem);
  font-weight: 800;
  letter-spacing: 0.02em;
  animation: ${fadeIn} 0.45s ease forwards;
`;

const Subtitle = styled.p`
  margin: 12px auto 6px;
  color: #dbeafe;
  max-width: 720px;
  font-size: clamp(1rem, 2.5vw, 1.18rem);
  line-height: 1.5;
  animation: ${fadeIn} 0.55s ease forwards;
`;

const Helper = styled.p`
  margin: 0 auto 24px;
  color: #bfdbfe;
  font-size: 0.98rem;
  animation: ${fadeIn} 0.65s ease forwards;
`;

const ButtonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(180px, 1fr));
  gap: 12px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const LanguageButton = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 14px;
  padding: 14px 16px;
  font-size: 1.02rem;
  font-weight: 700;
  color: #f8fafc;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.45), rgba(99, 102, 241, 0.35));
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 22px rgba(30, 64, 175, 0.35);
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.58), rgba(99, 102, 241, 0.48));
  }

  &:focus-visible {
    outline: 2px solid #93c5fd;
    outline-offset: 3px;
  }
`;

const LanguageSelectionPage = () => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const languageOptions = [
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Русский' },
    { code: 'es', label: 'Español' },
    { code: 'eu', label: 'Euskara' },
  ];

  const selectLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    navigate('/resume');
  };

  return (
    <Wrapper>
      <Card>
        <Logo src={logoImg} alt="Logo" />
        <Title>CV Viktoria</Title>
        <Subtitle>{t('landing.tagline')}</Subtitle>
        <Helper>{t('selectLanguage')}</Helper>

        <ButtonsGrid>
          {languageOptions.map((option) => (
            <LanguageButton key={option.code} onClick={() => selectLanguage(option.code)}>
              {option.label}
            </LanguageButton>
          ))}
        </ButtonsGrid>
      </Card>
    </Wrapper>
  );
};

export default LanguageSelectionPage;
