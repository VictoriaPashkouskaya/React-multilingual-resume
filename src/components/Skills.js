// src/components/Skills.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const SkillsWrapper = styled.div`
  margin-bottom: 20px;
`;

const Skills = () => {
  const { t } = useTranslation();
  return (
    <SkillsWrapper>
      <h2>{t('skills.title')}</h2>
      <ul>
        <li>{t('skills.skill1')}</li>
        <li>{t('skills.skill2')}</li>
        <li>{t('skills.skill3')}</li>
        <li>{t('skills.skill4')}</li>
      </ul>
    </SkillsWrapper>
  );
};

export default Skills;