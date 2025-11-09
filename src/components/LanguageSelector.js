import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styled/LanguageSelector.css';

const LogoText = () => {
  const text = 'CV VICTORIA PASHKOUSKAYA';
  return (
    <div style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
      {text.split('').map((char, idx) => (
        <span key={idx} className="letter" style={{ '--index': idx }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [letters, setLetters] = useState([]);

  const languages = [
    { code: 'en', label: t('En') },
    { code: 'ru', label: t('Ru') },
    { code: 'es', label: t('ES') },
    { code: 'eu', label: t('EU') }
  ];

  const handleClick = (lng, e) => {
    i18n.changeLanguage(lng);

    const text = e.target.innerText;
    const newLetters = [];

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
    <div className="selector-wrapper">
      <LogoText />
      <div className="buttons-container">
        {languages.map(lng => (
          <div className="button-wrapper" key={lng.code}>
            <button className="language-button" onClick={(e) => handleClick(lng.code, e)}>
              {lng.label}
            </button>
          </div>
        ))}
      </div>

      {letters.map(l => (
        <span
          key={l.id}
          className="falling-letter"
          style={{
            left: l.startX + 'px',
            top: l.startY + 'px',
            '--x': l.x,
            '--y': l.y,
            '--rot': l.rot
          }}
        >
          {l.char}
        </span>
      ))}
    </div>
  );
};

export default LanguageSelector;
