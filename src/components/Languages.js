// src/components/LanguagesCarousel.js
import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useSwipeable } from 'react-swipeable';
import ReactCountryFlag from "react-country-flag";
import BasqueFlagImg from '../img/basque.jpg';

// --- Анимация свечения ---
const glow = keyframes`
  0%, 100% { box-shadow: 0 0 4px rgba(0,255,255,0.6); }
  50% { box-shadow: 0 0 12px rgba(0,255,255,0.8); }
`;

// --- Стили ---
const SectionTitle = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #111;
  font-family: 'Montserrat', sans-serif;
`;

const CarouselWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Arrow = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #111;
  margin: 0 10px;
  opacity: ${props => props.disabled ? 0.3 : 1};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  transition: color 0.3s;

  &:hover {
    color: #0ff;
  }

  @media (max-width: 768px) {
    display: none; // скрываем стрелки на мобиле
  }
`;

const CardWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 660px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const CardList = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${props => props.offset}px);
`;

const Card = styled.div`
  min-width: 200px;
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem 1.2rem;
  margin: 0 10px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.05);
  }

  ${props => props.learning && css`
    animation: ${glow} 1.5s infinite alternate;
  `}
`;

const FlagWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  margin: 0 auto 0.5rem;
  border-radius: 50%;
  overflow: hidden;
`;

const FlagImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LanguageName = styled.h3`
  margin: 0.5rem 0 0.3rem 0;
  font-size: 1.2rem;
  color: #111;
`;

const LanguageLevel = styled.p`
  margin: 0;
  color: #555;
  font-weight: 500;
`;

// --- Компонент ---
const LanguagesCarousel = () => {
  const [index, setIndex] = useState(0);

  const languages = [
    { name: 'Español', level: 'B2', code: 'ES' },
    { name: 'Euskera', level: 'A2', learning: true, customFlag: BasqueFlagImg, learningText: 'Ikasten' },
    { name: 'Inglés', level: 'A2', learning: true, code: 'GB', learningText: 'Learning' },
    { name: 'Ucraniano', level: 'C1', code: 'UA' },
    { name: 'Ruso', level: 'C1', code: 'RU' },
  ];

  const visibleCards = 3;
  const cardWidth = 220; // ширина + margin
  const offset = -index * cardWidth;

  const prev = () => setIndex(i => Math.max(i - 1, 0));
  const next = () => setIndex(i => Math.min(i + 1, languages.length - visibleCards));

  // --- обработчики свайпа ---
  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <>
      <SectionTitle>Idiomas / Languages</SectionTitle>
      <CarouselWrapper {...handlers}>
        <Arrow onClick={prev} disabled={index === 0}>&lt;</Arrow>
        <CardWrapper>
          <CardList offset={offset}>
            {languages.map((lang, i) => (
              <Card key={i} learning={lang.learning}>
                <FlagWrapper>
                  {lang.customFlag ? (
                    <FlagImage src={lang.customFlag} alt={lang.name} />
                  ) : (
                    <ReactCountryFlag 
                      countryCode={lang.code} 
                      svg 
                      style={{ width: '100%', height: '100%' }} 
                    />
                  )}
                </FlagWrapper>
                <LanguageName>{lang.name}</LanguageName>
                <LanguageLevel>
                  {lang.learning ? lang.learningText : lang.level}
                </LanguageLevel>
              </Card>
            ))}
          </CardList>
        </CardWrapper>
        <Arrow onClick={next} disabled={index >= languages.length - visibleCards}>&gt;</Arrow>
      </CarouselWrapper>
    </>
  );
};

export default LanguagesCarousel;
