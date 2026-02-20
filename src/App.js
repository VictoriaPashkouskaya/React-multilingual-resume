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
  padding: 34px 18px 80px;
  background:
    radial-gradient(circle at 8% 8%, rgba(236, 72, 153, 0.26), transparent 34%),
    radial-gradient(circle at 92% 12%, rgba(34, 211, 238, 0.22), transparent 28%),
    radial-gradient(circle at 50% 100%, rgba(56, 189, 248, 0.16), transparent 40%),
    linear-gradient(130deg, #0b1020 0%, #121a33 46%, #1d2551 100%);
`;

const AppWrapper = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  padding: 26px;
  border-radius: 28px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(255, 255, 255, 0.24);
  box-shadow:
    0 30px 70px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(18px);
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
