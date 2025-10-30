import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useSwipeable } from 'react-swipeable';
import ReactCountryFlag from 'react-country-flag';
import BasqueFlagImg from '../img/basque.jpg';
import { useTranslation } from 'react-i18next';

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 4px rgba(0,255,255,0.6); }
  50% { box-shadow: 0 0 12px rgba(0,255,255,0.8); }
`;

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
  overflow: hidden;
`;

const Arrow = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #111;
  margin: 0 10px;
  transition: color 0.3s;
  &:hover { color: #0ff; }
  @media (max-width: 768px) { display: none; }
`;

const CardWrapper = styled.div`
  overflow: hidden;
  flex: 1;
`;

const CardList = styled.div`
  display: flex;
  transition: transform 0.4s ease;
  transform: translateX(${props => props.offset}px);
`;

const Card = styled.div`
  flex: 0 0 auto;
  width: 220px;
  margin: 0 10px;
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem 1.2rem;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover { transform: translateY(-5px) scale(1.05); }
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

const LanguagesCarousel = () => {
  const { t } = useTranslation();
  const cardRef = useRef(null);
  const wrapperRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(240);

  const languages = [
    { name: t('languages.spanish'), level: 'B2', code: 'ES' },
    { name: t('languages.basque'), level: 'A2', learning: true, customFlag: BasqueFlagImg, learningText: t('languages.learningBasque') },
    { name: t('languages.english'), level: 'A2', learning: true, code: 'GB', learningText: t('languages.learningEnglish') },
    { name: t('languages.ukrainian'), level: 'C1', code: 'UA' },
    { name: t('languages.russian'), level: 'C1', code: 'RU' },
  ];

  // Обновляем ширину карточек при изменении размера окна
  useEffect(() => {
    const updateSizes = () => {
      if (cardRef.current && wrapperRef.current) {
        const totalCardWidth = cardRef.current.offsetWidth + 20; // ширина + margin
        setCardWidth(totalCardWidth);
      }
    };
    updateSizes();
    window.addEventListener('resize', updateSizes);
    return () => window.removeEventListener('resize', updateSizes);
  }, []);

  const maxIndex = languages.length;
  const offset = -index * cardWidth;

  // Бесконечный цикл
  const prev = () => setIndex(i => (i - 1 + maxIndex) % maxIndex);
  const next = () => setIndex(i => (i + 1) % maxIndex);

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <>
      <SectionTitle>{t('menu.languages')}</SectionTitle>
      <CarouselWrapper {...handlers}>
        <Arrow onClick={prev} aria-label="Previous language">&lt;</Arrow>
        <CardWrapper ref={wrapperRef}>
          <CardList offset={offset}>
            {languages.map((lang, i) => (
              <Card key={i} learning={lang.learning} ref={i === 0 ? cardRef : null}>
                <FlagWrapper>
                  {lang.customFlag
                    ? <FlagImage src={lang.customFlag} alt={lang.name} />
                    : <ReactCountryFlag countryCode={lang.code} svg style={{ width: '100%', height: '100%' }} />}
                </FlagWrapper>
                <LanguageName>{lang.name}</LanguageName>
                <LanguageLevel>{lang.learning ? lang.learningText : lang.level}</LanguageLevel>
              </Card>
            ))}
          </CardList>
        </CardWrapper>
        <Arrow onClick={next} aria-label="Next language">&gt;</Arrow>
      </CarouselWrapper>
    </>
  );
};

export default LanguagesCarousel;
