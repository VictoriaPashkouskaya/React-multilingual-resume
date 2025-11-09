import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import LanguageSelector from './components/LanguageSelector';
import LanguageSelectionPage from './components/LanguageSelectionPage';
import InteractiveMenu from './components/InteractiveMenu';

const AppWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const Resume = () => (
  <AppWrapper>
    <LanguageSelector />
    <Contacts />
    <InteractiveMenu/>
    <Projects />
  </AppWrapper>
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


