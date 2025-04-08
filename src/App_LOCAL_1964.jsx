import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './css/style.css';

import Header from './partials/Header';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/RequestDemoPage';
import ResetPassword from './pages/ResetPassword';
import Footer from './partials/Footer';
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component
import Careers from './pages/Careers';
import Insights from './pages/Insights';
import QuanfiaPopupForm from './pages/RequestDemoPage';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add the ScrollToTop component */}
      <div className='flex flex-col min-h-screen overflow-hidden'>
        {/*  Site header */}
        <Header />
        <QuanfiaPopupForm />

        {/*  Page content */}
        <main className='grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/Insights' element={<Insights />} /> */}
            {/* <Route path='/about' element={<About />} /> */}
            <Route path='/careers' element={<Careers />} />
            <Route path='/reset-password' element={<ResetPassword />} />
          </Routes>
        </main>

        {/*  Site footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
