import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ProjectsWrapper = styled.section`
  margin-top: 18px;
  padding: 22px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(239, 246, 255, 0.88));
  box-shadow: 0 12px 28px rgba(2, 6, 23, 0.2);

  h2 {
    margin: 0 0 12px;
    font-size: 1.55rem;
    color: #1e3a8a;
  }

  p {
    margin: 0.4rem 0;
    color: #1f2937;
    line-height: 1.5;
  }
`;

const Projects = () => {
  const { t } = useTranslation();
  return (
    <ProjectsWrapper>
      <h2>{t('projects.title')}</h2>
      <p>{t('projects.description1')}</p>
      <p>{t('projects.description2')}</p>
    </ProjectsWrapper>
  );
};

export default Projects;
