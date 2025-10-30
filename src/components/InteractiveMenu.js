import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';

import { FaUser, FaTools, FaGraduationCap, FaBriefcase, FaHistory } from 'react-icons/fa';

import Header from './Header';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import MyHistory from './MyHistory';

// Анимации
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 10px rgba(0,255,255,.5); }
  50% { box-shadow: 0 0 20px rgba(0,255,255,.8); }
`;

// Контейнер
const MenuWrapper = styled.div`
  max-width: 900px;
  margin: 1rem auto;
  font-family: 'Montserrat', sans-serif;
`;

// Текстовые кнопки (режим по умолчанию)
const TabButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 1rem;

  button {
    flex: 1 1 48%;
    padding: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;
    border-radius: 10px;
    border: none;
    background: #fff;
    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
    transition: .3s;

    &:hover {
      transform: translateY(-2px);
    }

    &.active {
      animation: ${glow} 1.5s infinite alternate;
    }
  }
`;

// Режим иконок (когда секция открыта)
const IconMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-bottom: 1rem;

  button {
    background: #fff;
    border-radius: 50%;
    border: none;
    width: 48px;
    height: 48px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .25s;

    svg { font-size: 22px; }

    &:hover { transform: scale(1.1); }

    &.active { animation: ${glow} 1.5s infinite alternate; }
  }

  /* Мобильная версия */
  @media (max-width: 600px) {
    flex-wrap: wrap;
    button {
      width: 65px;
      height: 65px;
      border-radius: 18px;
      svg { font-size: 28px; }
    }
  }
`;

// Контейнер контента
const SectionWrapper = styled.div`
  animation: ${fadeIn} .4s ease;
  overflow: hidden;
  transition: .3s;
`;

const InteractiveMenu = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(null);

  const sections = [
    { id: 'header', label: t('menu.aboutMe'), icon: <FaUser />, component: <Header /> },
    { id: 'skills', label: t('menu.skills'), icon: <FaTools />, component: <Skills /> },
    { id: 'education', label: t('menu.education'), icon: <FaGraduationCap />, component: <Education /> },
    { id: 'experience', label: t('menu.experience'), icon: <FaBriefcase />, component: <Experience /> },
    { id: 'history', label: t('menu.history'), icon: <FaHistory />, component: <MyHistory /> },
  ];

  return (
    <MenuWrapper>

      {/* Меню меняется в зависимости от состояния */}
      {active === null ? (
        <TabButtons>
          {sections.map(({ id, label }) => (
            <button key={id} onClick={() => setActive(id)}>
              {label}
            </button>
          ))}
        </TabButtons>
      ) : (
        <IconMenu>
          {sections.map(({ id, icon }) => (
            <button
              key={id}
              className={active === id ? 'active' : ''}
              onClick={() => setActive(active === id ? null : id)}
            >
              {icon}
            </button>
          ))}
        </IconMenu>
      )}

      {/* Контент секций */}
      {sections.map(({ id, component }) => (
        <SectionWrapper
          key={id}
          style={{
            maxHeight: active === id ? '1000px' : '0',
            opacity: active === id ? 1 : 0,
            padding: active === id ? '0.5rem 0' : '0'
          }}
        >
          {active === id && component}
        </SectionWrapper>
      ))}

    </MenuWrapper>
  );
};

export default InteractiveMenu;
