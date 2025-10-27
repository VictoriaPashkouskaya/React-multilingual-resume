import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ExperienceWrapper = styled.div`
  margin: 20px 0;
  padding: 10px;
`;

const Experience = () => {
  const { t } = useTranslation();
  return (
    <ExperienceWrapper>
      <h2>{t('education.title')}</h2>
      <p>{t('education.description1')}</p>
      <p>{t('education.description2')}</p>
    </ExperienceWrapper>
  );
};

export default Experience;