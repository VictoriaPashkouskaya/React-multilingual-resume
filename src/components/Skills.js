import React from 'react';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';
import { 
  FaLaptopCode, FaUsers, FaNetworkWired, FaTools, FaDatabase, FaServer, FaProjectDiagram 
} from 'react-icons/fa';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Анимация "плавания" иконок
const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

const SkillsWrapper = styled.div`
  margin: 50px auto;
  padding: 40px 30px;
  max-width: 800px;
  background: linear-gradient(135deg, #fff7e6, #ffe0b2);
  border-radius: 25px;
  box-shadow: 0 10px 25px rgba(255, 183, 77, 0.4);
`;

const CategoryTitle = styled.h3`
  margin-top: 30px;
  color: #ff8c42;
  font-weight: 700;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  gap: 40px;
  svg {
    animation: ${float} 3s ease-in-out infinite;
    color: #ffa500;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 15px;
  margin-top: 15px;
`;

const SkillCard = styled.div`
  background: ${({ type }) => (type === 'digital' ? '#fff3e0' : '#e6f2ff')};
  padding: 12px 20px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  font-size: 1.15rem;
  color: ${({ type }) => (type === 'digital' ? '#ff8c42' : '#4da6ff')};
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  }
  svg {
    color: ${({ type }) => (type === 'digital' ? '#FFB84D' : '#80c1ff')};
    animation: ${float} 4s ease-in-out infinite;
  }
`;

// Иконки для навыков
const skillIcons = {
  "Sistemas operativos": <FaLaptopCode />,
  "Ofimática avanzada": <FaLaptopCode />,
  "Presentación y diseño": <FaLaptopCode />,
  "Google Workspace": <FaLaptopCode />,
  "Hardware": <FaTools />,
  "Periféricos": <FaTools />,
  "Gestión documental": <FaDatabase />,
  "Redes": <FaNetworkWired />,
  "Seguridad informática": <FaServer />,
  "Desarrollo web": <FaLaptopCode />,
  "Control de versiones": <FaProjectDiagram />,
  "Bases de datos": <FaDatabase />,
  "Virtualización": <FaServer />,
  "Soporte técnico": <FaTools />,
  "Gestión de proyectos": <FaProjectDiagram />,
  "Trabajo en equipo": <FaUsers />,
  "Liderazgo": <FaUsers />,
  "Comunicación": <FaUsers />,
  "Resolución de problemas": <FaUsers />,
};

const Skills = () => {
  const { t } = useTranslation();

  const digital = t('skills.digital', { returnObjects: true });
  const social = t('skills.social', { returnObjects: true });

  return (
    <SkillsWrapper className="animate__animated animate__fadeInUp">
      <h2 className="text-center mb-4" style={{ color: '#ff8c42' }}>
        {t('skills.title')}
      </h2>

      <CategoryTitle>
        <FaLaptopCode /> {t('skills.categoryDigital')}
      </CategoryTitle>
      <SkillsGrid>
        {Object.values(digital).map((skill, index) => (
          <SkillCard key={index} type="digital">
            {skillIcons[skill] || <FaTools />} {skill}
          </SkillCard>
        ))}
      </SkillsGrid>

      <CategoryTitle>
        <FaUsers /> {t('skills.categorySocial')}
      </CategoryTitle>
      <SkillsGrid>
        {Object.values(social).map((skill, index) => (
          <SkillCard key={index} type="social">
            {skillIcons[skill] || <FaUsers />} {skill}
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsWrapper>
  );
};
export default Skills;
