import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import heroBgV1 from "../images/hero-bg-v1.svg";
import aboutBnrBg from "../images/about-bnr-bg.svg";
import logo from "../images/logo_new.png";

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // Close mobile menu on ESC key press
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
isScrolled
  ? "bg-transparent bg-[#0D0E24] backdrop-blur-sm shadow-lg text-white"
  : "bg-opacity-5 bg-[#79440b] text-white relative"
      }`}
    >
      {/* Background Overlays (Only When Not Scrolled) */}
      {!isScrolled && (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-30"
            style={{ 
              backgroundImage: `linear-gradient(135deg, rgba(255, 170, 0, 0.2) 0%, rgba(0, 0, 0, 0) 60%)`,
              backdropFilter: "blur(5px)" 
            }}
          ></div>
          <div 
            className="absolute -top-10 right-0 w-full h-24 bg-gradient-to-b from-amber-500/20 to-transparent transform rotate-6 opacity-30"
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0 mr-4">
            <Link
              to="/"
              className="block"
              aria-label="Logo"
              onClick={() => {
                const heroSection = document.getElementById("heroHomeSection");
                if (heroSection) {
                  heroSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <img src={logo} alt="logo" width="150" height="30" className="max-w-full h-auto" />
          </Link>
        </div>

         { /* Desktop Navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              {["Insights", "About", "Careers"].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className={`text-base font-normal hover:text-amber-300 px-5 py-2 transition-colors ${
                      isScrolled ? "text-gray-100" : "text-white"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              
                  <li>
                  <button 
                  onClick={() => {
                    document.dispatchEvent(
                      new CustomEvent('requestDemo', { 
                        detail: { action: 'openDemoPopup' } 
                      })
                    );
                  }}
                  className="group relative w-40 cursor-pointer overflow-hidden rounded-full border bg-background p-2 text-center font-medium"
                >
                  <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                    Get a demo
                  </span>
                  <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
                    <span>Get a demo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </div>
                  <div className="absolute left-[20%] top-[40%] h-0 w-0 scale-[0] rounded-lg bg-amber-500 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-amber-500"></div>
                </button>
                
                  </li>
                </ul>
                </nav>

                <div className="md:hidden">
                <button
                  ref={trigger}
                  className={`hamburger ${mobileNavOpen && "active"}`}
                  aria-controls="mobile-nav"
                  aria-expanded={mobileNavOpen}
                  onClick={() => setMobileNavOpen(!mobileNavOpen)}
                >
                  <span className="sr-only">Menu</span>
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect y="4" width="24" height="2" rx="1" />
                  <rect y="11" width="24" height="2" rx="1" />
                  <rect y="18" width="24" height="2" rx="1" />
                  </svg>
                </button>

                <nav
                  id="mobile-nav"
                  ref={mobileNav}
                  className={`absolute top-full left-0 w-full transition-all duration-300 ease-in-out backdrop-blur-md ${
                  mobileNavOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 pointer-events-none"
                  }`}
                >
                  <div className="bg-gradient-to-b from-black to-gray-900 px-4 py-3 border-t border-amber-900/30">
                  <ul className="space-y-2">
                    {["Insights", "About", "Careers"].map((item) => (
                    <li key={item}>
                      <Link 
                      to={`/${item.toLowerCase()}`} 
                      className="block text-white py-2 transition-colors hover:text-amber-300"
                      onClick={() => setMobileNavOpen(false)} // Close mobile menu after clicking
                      >
                      {item}
                      </Link>
                    </li>
                    ))}
                    <li className="pt-1">
                    <button
                      onClick={() => {
                        document.dispatchEvent(
                          new CustomEvent('requestDemo', { 
                            detail: { action: 'openDemoPopup' } 
                          })
                        );
                        setMobileNavOpen(false); // Close mobile menu after clicking
                      }}
                      className="block w-full text-black py-2.5 bg-amber-500 hover:bg-amber-400 rounded text-center font-medium transition-colors"
                    >
                      Get a demo
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;