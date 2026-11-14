import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CaseStudies from './pages/CaseStudies';
import DocumentIntelligence from './pages/DocumentIntelligence';
import KnowledgeAssistant from './pages/KnowledgeAssistant';
import ConversationalAutomation from './pages/ConversationalAutomation';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/document-intelligence" element={<DocumentIntelligence />} />
          <Route path="/case-studies/vastrastudio" element={<DocumentIntelligence />} />
          <Route path="/case-studies/enterprise-knowledge-assistant" element={<KnowledgeAssistant />} />
          <Route path="/case-studies/mcp-file-assistant" element={<KnowledgeAssistant />} />
          <Route path="/case-studies/conversational-automation" element={<ConversationalAutomation />} />
          <Route path="/case-studies/finpay" element={<ConversationalAutomation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
