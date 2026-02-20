import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Section = styled.section`
  margin: 20px 0;
`;

const Card = styled.article`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 14px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);

  h3 {
    margin: 0 0 6px;
    color: #1e3a8a;
  }

  .meta {
    color: #334155;
    font-weight: 600;
    margin-bottom: 8px;
  }

  ul {
    margin: 0;
    padding-left: 18px;
  }
`;

const Experience = () => {
  const { t } = useTranslation();
  const items = t('experience.items', { returnObjects: true });

  return (
    <Section>
      <h2>{t('experience.title')}</h2>
      {items.map((item, index) => (
        <Card key={index}>
          <h3>{item.role}</h3>
          <div className="meta">{item.company} | {item.period}</div>
          <ul>
            {item.details.map((detail, detailIndex) => (
              <li key={detailIndex}>{detail}</li>
            ))}
          </ul>
        </Card>
      ))}
    </Section>
  );
};

export default Experience;
