import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { to: '/', label: 'Home', icon: 'fa-home' },
    { to: '/about', label: 'About Us', icon: 'fa-building' },
    { to: '/auto-chains', label: 'Auto Chains', icon: 'fa-link' },
    { to: '/motorcycle-sprockets', label: 'Sprockets', icon: 'fa-gear' },
    { to: '/quality-policy', label: 'Quality', icon: 'fa-certificate' },
    { to: '/contact', label: 'Contact', icon: 'fa-envelope' },
    { to: '/enquiry', label: 'Enquiry', icon: 'fa-paper-plane' }
  ];

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    // Cleanup on unmount
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <header className="premium-header">
        {/* Main Header */}
        <div className="container">
          <div className="main-header">
            <Link to="/" className="logo-link">
              <motion.img
                src={logo}
                alt="Kayson Wheels"
                className="logo"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              />
            </Link>

            {/* Desktop Phone */}
            <div className="phone-box hide-tablet">
              <i className="fa-solid fa-phone"></i>
              <div>
                <div className="phone-label">Call Us Now</div>
                <div className="phone-number">+91 99150 00549</div>
              </div>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="hamburger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        {/* Premium Navigation */}
        <nav className={`premium-nav ${isMenuOpen ? 'menu-open' : ''}`}>
          <div className="container">
            <div className="nav-links">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ position: 'relative', overflow: 'hidden' }}
                >
                  <motion.div
                    whileHover="hover"
                    initial="initial"
                    style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                  >
                    <i className={`fa-solid ${item.icon}`}></i>
                    <span>{item.label}</span>

                    {/* Metallic / Chain Reveal Effect Underline */}
                    <motion.div
                      variants={{
                        initial: { x: '-101%' },
                        hover: { x: '0%' }
                      }}
                      transition={{ type: 'tween', ease: 'circOut', duration: 0.3 }}
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: 0,
                        width: '100%',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
                      }}
                    />
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
