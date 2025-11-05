import React from 'react';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';
import { FaLaptopCode, FaUsers, FaTools, FaDatabase, FaServer, FaProjectDiagram } from 'react-icons/fa';

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
  100% { transform: translateY(0); }
`;

const CarouselWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding: 20px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffa500;
    border-radius: 4px;
  }
`;

const SkillCard = styled.div`
  flex: 0 0 220px;
  background: ${({ type }) => (type === 'digital' ? '#FFE9D1' : '#D9ECFF')};
  color: ${({ type }) => (type === 'digital' ? '#C95C11' : '#0056B3')};
  padding: 16px 20px;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  font-size: 1rem;
  white-space: normal;
  line-height: 1.3;
  min-height: 60px;

  svg {
    font-size: 1.3rem;
    animation: ${float} 3s ease-in-out infinite;
    flex-shrink: 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    transition: 0.3s;
  }
`;

const skillIcons = {
  "Sistemas operativos": <FaLaptopCode />,
  "Ofimática avanzada": <FaLaptopCode />,
  "Presentación y diseño": <FaLaptopCode />,
  "Google Workspace": <FaLaptopCode />,
  "Hardware": <FaTools />,
  "Periféricos": <FaTools />,
  "Gestión documental": <FaDatabase />,
  "Redes": <FaTools />,
  "Seguridad informática": <FaServer />,
  "Desarrollo web": <FaLaptopCode />,
  "Control de versiones": <FaProjectDiagram />,
  "Bases de datos": <FaDatabase />,
  "Virtualización": <FaServer />,
  "Soporte técnico": <FaTools />,
  "Gestión de proyectos": <FaProjectDiagram />,
  "Trabajo в equipo": <FaUsers />,
  "Liderazgo": <FaUsers />,
  "Comunicación": <FaUsers />,
  "Resolución de problemas": <FaUsers />,
};

const Skills = () => {
  const { t } = useTranslation();
  const digital = Object.values(t('skills.digital', { returnObjects: true }));
  const social = Object.values(t('skills.social', { returnObjects: true }));
  const allSkills = [...digital, ...social];

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2 style={{ color: '#ff8c42', fontWeight: '800', marginBottom: '20px' }}>
        {t('skills.title')}
      </h2>

      <CarouselWrapper>
        {allSkills.map((skill, index) => (
          <SkillCard
            key={index}
            type={digital.includes(skill) ? 'digital' : 'social'}
          >
            {skillIcons[skill] || <FaTools />} {skill}
          </SkillCard>
        ))}
      </CarouselWrapper>
    </div>
  );
};

export default Skills;
