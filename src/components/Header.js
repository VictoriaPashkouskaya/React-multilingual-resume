// src/components/Header.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  text-align: center;
  margin-bottom: 20px;
  background-color: #f2f2f2;
`;

const Header = () => {
  const { t } = useTranslation();
  return (
    <HeaderWrapper>
      <h1>{t('header.name')}</h1>
      <p>{t('header.position')}</p>
    </HeaderWrapper>
  );
};

export default Header;
