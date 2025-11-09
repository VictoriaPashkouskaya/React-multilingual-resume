import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaUser,
  FaTools,
  FaGraduationCap,
  FaBriefcase,
  FaHistory,
  FaLanguage
} from 'react-icons/fa';

// Import sections
import Header from './Header';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import MyHistory from './MyHistory';
import Languages from './Languages';

// Import CSS styles
import '../styled/InteractiveMenuStyles.css';

// === Interactive Menu Component ===
const InteractiveMenu = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(null);

  // Define menu sections
  const sections = [
    { id: 'header', label: t('menu.aboutMe'), icon: <FaUser />, component: <Header /> },
    { id: 'skills', label: t('menu.skills'), icon: <FaTools />, component: <Skills /> },
    { id: 'education', label: t('menu.education'), icon: <FaGraduationCap />, component: <Education /> },
    { id: 'experience', label: t('menu.experience'), icon: <FaBriefcase />, component: <Experience /> },
    { id: 'history', label: t('menu.history'), icon: <FaHistory />, component: <MyHistory /> },
    { id: 'languages', label: t('menu.languages'), icon: <FaLanguage />, component: <Languages /> },
  ];

  return (
    <div className="menu-wrapper">
      {/* === Menu Buttons === */}
      {active === null ? (
        <div className="tab-buttons">
          {sections.map(({ id, label }) => (
            <button key={id} onClick={() => setActive(id)}>
              {label}
            </button>
          ))}
        </div>
      ) : (
        <div className="icon-menu">
          {sections.map(({ id, icon }) => (
            <button
              key={id}
              className={active === id ? 'active' : ''}
              onClick={() => setActive(active === id ? null : id)}
            >
              {icon}
            </button>
          ))}
        </div>
      )}

      {/* === Section Content === */}
      {sections.map(({ id, component }) => (
        <div
          key={id}
          className={`section-wrapper ${active === id ? 'visible' : ''}`}
        >
          {active === id && component}
        </div>
      ))}
    </div>
  );
};

export default InteractiveMenu;
