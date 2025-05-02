import React from "react";
import logo from "../images/logo_new.png";

const Footer = () => {
  return (
    <footer className="bg-[#0B0D1F] text-white py-12 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left Section - Logo and tagline */}
          <div className="w-full md:w-1/4">
            {/* Logo */}
            <img src={logo} alt="ChaiCode Logo" className="w-24 sm:w-28" />
            
            <p className="text-sm text-gray-400 mb-4">Home for programmers</p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-6">
              <a href="https://www.youtube.com/@chaiaurcode" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/hiteshchoudharyofficial/?hl=en" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="https://github.com/hiteshchoudhary" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
              <a href="https://x.com/hiteshdotcom" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="https://in.linkedin.com/in/hiteshchoudhary" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://discord.com/invite/WDrH3zuWFb" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </a>
            </div>
            
            <p className="text-xs text-gray-500">© 2025 ChaiCode. All rights reserved.</p>
          </div>
          
          {/* Middle Sections - Products */}
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://courses.chaicode.com/learn" className="text-gray-400 hover:text-white transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="https://courses.chaicode.com/learn/view-all?show=batch&type=17t" className="text-gray-400 hover:text-white transition-colors">
                  Cohort
                </a>
              </li>
              <li>
                <a href="https://courses.chaicode.com/learn/batch/about?bundleId=226894" className="text-gray-400 hover:text-white transition-colors">
                  Coding Hero
                </a>
              </li>
              <li>
                <a href="https://freeapi.app/" className="text-gray-400 hover:text-white transition-colors">
                  FreeAPI
                </a>
              </li>
              <li>
                <a href="https://masterji.co/login" className="text-gray-400 hover:text-white transition-colors">
                  Masterji
                </a>
              </li>
            </ul>
          </div>
          
          {/* Right Section - Resources */}
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://docs.chaicode.com/" className="text-gray-400 hover:text-white transition-colors">
                  Docs
                </a>
              </li>
              <li>
                <a href="https://www.chaicode.com/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://www.chaicode.com/terms-of-services" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/https://www.chaicode.com/pricing-policy" className="text-gray-400 hover:text-white transition-colors">
                  Pricing Policy
                </a>
              </li>
              <li>
                <a href="https://www.chaicode.com/refund-policy" className="text-gray-400 hover:text-white transition-colors">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Large logo at bottom */}
        <div className="mt-16 flex justify-center">
          <div className="text-9xl font-bold text-orange-800">CHAICODE</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;