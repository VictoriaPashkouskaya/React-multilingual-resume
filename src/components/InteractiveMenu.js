import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Header from './Header';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import PersonalHistory from './PersonalHistory';
import { useTranslation } from 'react-i18next';

// --- Анимации ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3); }
  50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.5); }
`;

// --- Стили ---
const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 950px;
  margin: 3rem auto;
  font-family: 'Montserrat', sans-serif;
`;

const TabButtons = styled.div`
  display: flex;
  gap: 0;
  border-radius: 24px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  margin-bottom: 1rem;

  button {
    flex: 1;
    background: rgba(255, 255, 255, 0.15);
    color: #333;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 1rem 1.5rem;
    font-weight: 600;
    font-size: 1.05rem;
    cursor: pointer;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
    border-radius: 12px;

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      top: 15%;
      right: 0;
      width: 1px;
      height: 70%;
      background: rgba(255, 255, 255, 0.3);
    }

    &:hover {
      animation: ${glow} 1s infinite alternate;
      transform: translateY(-2px) scale(1.05);
      background: rgba(255, 255, 255, 0.25);
      color: #000;
      box-shadow: 0 8px 25px rgba(0,0,0,0.2), 0 0 15px rgba(255,255,255,0.3);
    }

    &.active {
      background: rgba(255, 255, 255, 0.3);
      border-color: #fff;
      color: #000;
      transform: scale(1.08);
      box-shadow: 0 10px 30px rgba(0,0,0,0.25), 0 0 20px rgba(255,255,255,0.4);
      animation: ${glow} 1s infinite alternate;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 12px;

    button {
      width: 100%;
      padding: 1rem;
      &:not(:last-child)::after {
        display: none;
      }
    }
  }
`;

const SectionWrapper = styled.div`
  overflow: hidden;
  animation: ${fadeIn} 0.5s ease forwards;
  transition: max-height 0.4s ease;
`;

// --- Компонент ---
const InteractiveMenu = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 'header', label: t('About me'), component: <Header /> },
    { id: 'skills', label: t('Skills'), component: <Skills /> },
    { id: 'education', label: t('Education'), component: <Education /> },
    { id: 'experience', label: t('Experience'), component: <Experience /> },
    { id: 'history', label: t('My history'), component: <PersonalHistory /> },
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
            padding: activeSection === id ? '1rem 0' : '0',
          }}
        >
          {activeSection === id && component}
        </SectionWrapper>
      ))}
    </MenuWrapper>
  );
};

export default InteractiveMenu;
