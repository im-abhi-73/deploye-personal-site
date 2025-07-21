import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';
import StudyContent from './components/StudyContent';
import SendMail from './components/SendMail';
import Certifications from './components/Certifications';

function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage Route */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              {/* <Footer /> */}
            </>
          }
        />

        {/* Separate About Page Route */}
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/study" element={<StudyContent />} />
        <Route path="/mail" element={<SendMail/>} />
        <Route path="/certifications" element={<Certifications/>} />
      </Routes>
    </Router>
  );
}

export default App;
