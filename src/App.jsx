import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './css/style.css';

import Header from './partials/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './partials/Footer';
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component
import Careers from './pages/Careers';
import Insights from './pages/Insights';
import QuanfiaPopupForm from './pages/RequestDemoPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='flex flex-col min-h-screen overflow-hidden'>
        {/* Default/fallback metadata */}
        <Helmet>
          <title>Quanfia | AI for Financial Services</title>
          <meta name="description" content="Quanfia liberates finance industry professionals from time-consuming manual tasks so they can focus on higher-value work." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.quanfia.com/" />
          <meta property="og:title" content="Quanfia | AI for Financial Services" />
          <meta property="og:description" content="Quanfia liberates finance industry professionals from time-consuming manual tasks." />
          <meta property="og:image" content="/og-image.jpg" />
        </Helmet>
        
        <Header />
        <QuanfiaPopupForm />

        <main className='grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/insights' element={<Insights />} />
            <Route path='/about' element={<About />} />
            <Route path='/careers' element={<Careers />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;