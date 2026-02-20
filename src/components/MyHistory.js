import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 20px 0;
  padding: 16px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);

  ul {
    margin: 0;
    padding-left: 18px;
  }
`;

const MyHistory = () => {
  const { t } = useTranslation();
  const points = t('history.points', { returnObjects: true });

  return (
    <Wrapper>
      <h2>{t('history.title')}</h2>
      <p>{t('history.summary')}</p>
      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default MyHistory;
