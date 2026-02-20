import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ProjectsWrapper = styled.section`
  margin-top: 18px;
  padding: 22px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.72);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.92), rgba(237, 233, 254, 0.88));
  box-shadow: 0 14px 28px rgba(2, 6, 23, 0.22);

  h2 {
    margin: 0 0 12px;
    font-size: 1.55rem;
    color: #312e81;
  }
`;

const ProjectCard = styled.article`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 14px;
  border-left: 4px solid #6366f1;
  padding: 14px;
  margin-bottom: 12px;

  h3 { margin: 0 0 6px; color: #1f2937; }
  p { margin: 0.4rem 0; color: #334155; line-height: 1.5; }

  a {
    color: #3730a3;
    font-weight: 700;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Projects = () => {
  const { t } = useTranslation();
  const items = t('projects.items', { returnObjects: true });

  return (
    <ProjectsWrapper>
      <h2>{t('projects.title')}</h2>
      {items.map((item, index) => (
        <ProjectCard key={index}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          {item.link && (
            <a href={item.link} target="_blank" rel="noreferrer">{item.linkLabel}</a>
          )}
        </ProjectCard>
      ))}
    </ProjectsWrapper>
  );
};

export default Projects;
