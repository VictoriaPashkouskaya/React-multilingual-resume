import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';

// Анимация взрыва и падения букв
const explode = keyframes`
  0% { transform: translate(0,0) rotate(0deg); opacity: 1; }
  100% { transform: translate(var(--x), var(--y)) rotate(var(--rot)); opacity: 0; }
`;

const LanguageSelectorWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 12px 16px;
  margin-bottom: 20px;
  position: relative;
`;

const ButtonWrapper = styled.div`
  position: relative;
  margin-left: 15px;
`;

const LanguageButton = styled.button`
  padding: 12px 28px;
  font-size: 1rem;
  font-weight: 700;
  border: 2px solid #fff;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  border-radius: 6px;
  font-family: 'Poppins', sans-serif;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const FallingLetter = styled.span`
  position: fixed;
  font-weight: 700;
  color: #333;
  font-size: 16px;
  pointer-events: none;
  animation: ${explode} 2s forwards;
`;

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [letters, setLetters] = useState([]);

  const handleClick = (lng, e) => {
    i18n.changeLanguage(lng);

    const text = e.target.innerText;
    let newLetters = [];

    // Создаём много букв (в 2-3 раза больше для эффекта взрыва)
    for (let i = 0; i < text.length * 3; i++) {
      const char = text[Math.floor(Math.random() * text.length)];
      const rect = e.target.getBoundingClientRect();
      newLetters.push({
        char,
        id: Date.now() + Math.random() * 1000 + i,
        x: (Math.random() - 0.5) * 400 + 'px', // ширина взрыва
        y: (Math.random() - 0.5) * 400 + 'px', // высота взрыва
        rot: (Math.random() - 0.5) * 720 + 'deg',
        startX: rect.left + rect.width / 2,
        startY: rect.top + rect.height / 2
      });
    }

    setLetters(prev => [...prev, ...newLetters]);

    // Очистка через 2.2 секунды
    setTimeout(() => setLetters(prev => prev.filter(l => !newLetters.includes(l))), 2200);
  };

  return (
    <LanguageSelectorWrapper>
      {['en','ru','es','eu'].map(lng => (
        <ButtonWrapper key={lng}>
          <LanguageButton onClick={(e) => handleClick(lng, e)}>
            {lng.toUpperCase()}
          </LanguageButton>
        </ButtonWrapper>
      ))}

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
    </LanguageSelectorWrapper>
  );
};

export default LanguageSelector;
