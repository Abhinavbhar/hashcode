import React from 'react'
import { HeroSection, Navbar,Companies,Courses, Achievement,Categories,FeedBack,CTA,Footer } from './components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App
