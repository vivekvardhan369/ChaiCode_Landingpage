import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './css/style.css';

import Header from './partials/Header';
import Home from './pages/Home';
import Footer from './partials/Footer';
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='flex flex-col min-h-screen overflow-hidden'>
        {/* Default/fallback metadata */}
        <Helmet>
          <title>ChaiCode | Learn Coding</title>
          <meta name="description" content="ChaiCode offers immersive coding courses to transform your career. Join our cohorts and learn from industry experts." />
          <meta name="keywords" content="coding, programming, courses, cohorts, learn to code" />
          <meta name="author" content="ChaiCode" />
          <meta property="og:title" content="ChaiCode | Learn Coding" />

        </Helmet>
        
        <Header />

        <main className='grow'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;