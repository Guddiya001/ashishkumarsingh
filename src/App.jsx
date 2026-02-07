import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CaseStudies from "./pages/CaseStudies";
import DocumentIntelligence from "./pages/DocumentIntelligence";
import KnowledgeAssistant from "./pages/KnowledgeAssistant";
import ConversationalAutomation from "./pages/ConversationalAutomation";

import './styles.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route
              path="/case-studies/document-intelligence"
              element={<DocumentIntelligence />}
            />
            <Route
              path="/case-studies/enterprise-knowledge-assistant"
              element={<KnowledgeAssistant />}
            />
            <Route
              path="/case-studies/conversational-automation"
              element={<ConversationalAutomation />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
