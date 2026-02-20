import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import LanguageSelector from './components/LanguageSelector';
import LanguageSelectionPage from './components/LanguageSelectionPage';
import InteractiveMenu from './components/InteractiveMenu';

const ResumeBackground = styled.div`
  min-height: 100vh;
  padding: 32px 18px 72px;
  background:
    radial-gradient(circle at 10% 10%, rgba(98, 0, 238, 0.26), transparent 35%),
    radial-gradient(circle at 85% 15%, rgba(0, 188, 212, 0.22), transparent 30%),
    linear-gradient(135deg, #0f1020 0%, #161b33 50%, #1a2342 100%);
`;

const AppWrapper = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 24px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(16px);
`;

const Resume = () => (
  <ResumeBackground>
    <AppWrapper>
      <LanguageSelector />
      <Contacts />
      <InteractiveMenu />
      <Projects />
    </AppWrapper>
  </ResumeBackground>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LanguageSelectionPage />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  </Router>
);

export default App;
