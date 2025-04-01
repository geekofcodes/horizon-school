import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/index';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import AcademicsPage from './pages/academics';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
