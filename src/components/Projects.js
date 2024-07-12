// src/components/Projects.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ProjectsWrapper = styled.div`
  margin-bottom: 20px;
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
