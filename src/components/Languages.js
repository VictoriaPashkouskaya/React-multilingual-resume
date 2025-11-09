// LanguagesCarousel.js
import React, { useState, useRef, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';
import BasqueFlagImg from '../img/basque.jpg';
import '../styled/LanguagesCarousel.css'; // external CSS styles

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

  // Update card width dynamically when window resizes
  useEffect(() => {
    const updateSizes = () => {
      if (cardRef.current && wrapperRef.current) {
        const totalCardWidth = cardRef.current.offsetWidth + 20;
        setCardWidth(totalCardWidth);
      }
    };
    updateSizes();
    window.addEventListener('resize', updateSizes);
    return () => window.removeEventListener('resize', updateSizes);
  }, []);

  const maxIndex = languages.length;
  const offset = -index * cardWidth;

  // Infinite carousel loop
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
      <h2 className="languages-title">{t('menu.languages')}</h2>
      <div className="carousel-wrapper" {...handlers}>
        <button className="arrow" onClick={prev} aria-label="Previous language">&lt;</button>
        <div className="card-wrapper" ref={wrapperRef}>
          <div className="card-list" style={{ transform: `translateX(${offset}px)` }}>
            {languages.map((lang, i) => (
              <div
                key={i}
                className={`card ${lang.learning ? 'learning' : ''}`}
                ref={i === 0 ? cardRef : null}
              >
                <div className="flag-wrapper">
                  {lang.customFlag ? (
                    <img src={lang.customFlag} alt={lang.name} className="flag-img" />
                  ) : (
                    <ReactCountryFlag
                      countryCode={lang.code}
                      svg
                      style={{ width: '100%', height: '100%' }}
                    />
                  )}
                </div>
                <h3 className="language-name">{lang.name}</h3>
                <p className="language-level">
                  {lang.learning ? lang.learningText : lang.level}
                </p>
              </div>
            ))}
          </div>
        </div>
        <button className="arrow" onClick={next} aria-label="Next language">&gt;</button>
      </div>
    </>
  );
};

export default LanguagesCarousel;

