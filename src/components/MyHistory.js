import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const MyHistoryWrapper= styled.div`
  margin: 20px 0;
  padding: 10px;
`;

const MyHistory = () => {
  const { t } = useTranslation();
  return (
    <MyHistoryWrapper>
      <h2>{t('myHistory.title')}</h2>
      <p>{t('myHistory.description1')}</p>
      <p>{t('education.description2')}</p>
    </MyHistoryWrapper>
  );
};

export default MyHistory;
