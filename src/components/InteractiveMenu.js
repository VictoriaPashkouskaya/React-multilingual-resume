import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';
import Header from './Header';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import MyHistory from './MyHistory';

// --- Анимации ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 8px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.3); }
  50% { box-shadow: 0 0 15px rgba(0, 255, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.5); }
`;

// --- Стили ---
const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 1rem auto;
  font-family: 'Montserrat', sans-serif;
`;

const TabButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 1rem;

  button {
    flex: 1 1 48%;
    padding: 0.8rem 1rem;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    text-transform: uppercase;
    border-radius: 12px;
    background: #fff;
    color: #000;
    transition: all 0.25s ease;
    position: relative;
    outline: none;
    border: none;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1); /* лёгкая тень по умолчанию */

    &:hover {
      transform: translateY(-2px) scale(1.03);
      box-shadow: 0 0 13px rgba(0, 255, 255, 0.4), 0 0 25px rgba(0, 255, 255, 0.2);
    }

    &.active {
      animation: ${glow} 1.5s infinite alternate;
      box-shadow: 0 0 15px rgba(0, 255, 255, 0.6), 0 0 35px rgba(0, 255, 255, 0.3);
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    button {
      flex: 1 1 100%;
    }
  }
`;

const SectionWrapper = styled.div`
  animation: ${fadeIn} 0.4s ease forwards;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
`;

// --- Компонент ---
const InteractiveMenu = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 'header', label: t('menu.aboutMe'), component: <Header /> },
    { id: 'skills', label: t('menu.skills'), component: <Skills /> },
    { id: 'education', label: t('menu.education'), component: <Education /> },
    { id: 'experience', label: t('menu.experience'), component: <Experience /> },
    { id: 'history', label: t('menu.history'), component: <MyHistory/> },
  ];

  const handleClick = (id) => {
    setActiveSection(prev => (prev === id ? null : id));
  };

  return (
    <MenuWrapper>
      <TabButtons>
        {sections.map(({ id, label }) => (
          <button
            key={id}
            className={activeSection === id ? 'active' : ''}
            onClick={() => handleClick(id)}
          >
            {label}
          </button>
        ))}
      </TabButtons>

      {sections.map(({ id, component }) => (
        <SectionWrapper
          key={id}
          style={{
            maxHeight: activeSection === id ? '1000px' : '0',
            padding: activeSection === id ? '0.5rem 0' : '0',
          }}
        >
          {activeSection === id && component}
        </SectionWrapper>
      ))}
    </MenuWrapper>
  );
};

export default InteractiveMenu;
