import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';

// Анимация взрыва букв
const explode = keyframes`
  0% { transform: translate(0,0) rotate(0deg) scale(1); opacity: 1; }
  100% { transform: translate(var(--x), var(--y)) rotate(var(--rot)) scale(0.5); opacity: 0; }
`;

const SelectorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(6px);
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 8px 12px;
  }
`;

const Logo = styled.div`
  font-weight: 900;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  background: linear-gradient(90deg, #4b6cb7, #182848);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-3px); }
    100% { transform: translateY(0px); }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const ButtonWrapper = styled.div`
  position: relative;
  margin-left: 12px;

  @media (max-width: 768px) {
    margin: 4px;
  }
`;

const LanguageButton = styled.button`
  padding: 8px 20px;
  font-size: 0.95rem;
  font-weight: 600;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #2c3e50;
  cursor: pointer;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  transition: transform 0.2s ease, box-shadow 0.25s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);

  &:hover {
    transform: scale(1.06);
    box-shadow: 0 6px 18px rgba(0,0,0,0.18);
  }

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: 768px) {
    padding: 6px 16px;
    font-size: 0.85rem;
  }
`;

const FallingLetter = styled.span`
  position: fixed;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(45deg, #4b6cb7, #182848);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 13px;
  pointer-events: none;
  animation: ${explode} 2.2s forwards;
`;

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [letters, setLetters] = useState([]);

  const handleClick = (lng, e) => {
    i18n.changeLanguage(lng);

    const text = e.target.innerText;
    let newLetters = [];

    for (let i = 0; i < text.length * 5; i++) {
      const char = text[Math.floor(Math.random() * text.length)];
      const rect = e.target.getBoundingClientRect();
      newLetters.push({
        char,
        id: Date.now() + Math.random() * 1000 + i,
        x: (Math.random() - 0.5) * 400 + 'px',
        y: (Math.random() - 0.5) * 400 + 'px',
        rot: (Math.random() - 0.5) * 720 + 'deg',
        startX: rect.left + rect.width / 2,
        startY: rect.top + rect.height / 2
      });
    }

    setLetters(prev => [...prev, ...newLetters]);
    setTimeout(() => setLetters(prev => prev.filter(l => !newLetters.includes(l))), 2400);
  };

  return (
    <SelectorWrapper>
      <Logo>CV Viktoria Pashkouskaya</Logo>
      <ButtonsContainer>
        {['en','ru','es','eu'].map(lng => (
          <ButtonWrapper key={lng}>
            <LanguageButton onClick={(e) => handleClick(lng, e)}>
              {lng.toUpperCase()}
            </LanguageButton>
          </ButtonWrapper>
        ))}
      </ButtonsContainer>

      {letters.map(l => (
        <FallingLetter
          key={l.id}
          style={{
            left: l.startX + 'px',
            top: l.startY + 'px',
            '--x': l.x,
            '--y': l.y,
            '--rot': l.rot
          }}
        >
          {l.char}
        </FallingLetter>
      ))}
    </SelectorWrapper>
  );
};

export default LanguageSelector;
