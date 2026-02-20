import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FaLaptopCode, FaUsers, FaCheckCircle } from 'react-icons/fa';

const Wrapper = styled.section`
  margin-top: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin: 0 0 14px;
  color: #e2e8f0;
  font-size: 1.6rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.article`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 10px 24px rgba(2, 6, 23, 0.18);
`;

const ColumnTitle = styled.h3`
  margin: 0 0 10px;
  color: #1e3a8a;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SkillList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const SkillItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  color: #334155;
  line-height: 1.45;
  font-size: 0.95rem;
  margin-bottom: 8px;

  svg {
    margin-top: 3px;
    color: #3b82f6;
    flex-shrink: 0;
  }
`;

const Skills = () => {
  const { t } = useTranslation();
  const digital = Object.values(t('skills.digital', { returnObjects: true }));
  const social = Object.values(t('skills.social', { returnObjects: true }));

  return (
    <Wrapper>
      <Title>{t('skills.title')}</Title>
      <Grid>
        <Column>
          <ColumnTitle>
            <FaLaptopCode /> {t('skills.categoryDigital')}
          </ColumnTitle>
          <SkillList>
            {digital.map((skill, index) => (
              <SkillItem key={index}>
                <FaCheckCircle />
                <span>{skill}</span>
              </SkillItem>
            ))}
          </SkillList>
        </Column>

        <Column>
          <ColumnTitle>
            <FaUsers /> {t('skills.categorySocial')}
          </ColumnTitle>
          <SkillList>
            {social.map((skill, index) => (
              <SkillItem key={index}>
                <FaCheckCircle />
                <span>{skill}</span>
              </SkillItem>
            ))}
          </SkillList>
        </Column>
      </Grid>
    </Wrapper>
  );
};

export default Skills;
