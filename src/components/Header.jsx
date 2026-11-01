import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import fbIcon from '../assets/images/fb.png';
import emailIcon from '../assets/images/email.png';
import instaIcon from '../assets/images/insta.jfif';
import twitterIcon from '../assets/images/twitter.jpg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/destinations', label: 'Destinations' },
    { to: '/experiences', label: 'Experiences' },
    { to: '/spirituality', label: 'Spirituality' },
    { to: '/plan-trip', label: 'Plan your trip' },
    { to: '/trending-places', label: 'Help' },
    { to: '/contact', label: 'Emergency' },
  ];

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-top">
        <div className="header-container">
          <div className="header-top-left">
            <div className="header-cm">
              <img src="/cm.jpg" alt="CM N. Chandrababu Naidu" className="header-cm-img" />
              <span className="header-cm-text">Sri N. Chandrababu Naidu</span>
              <span className="header-cm-subtitle">Chief Minister of Andhra Pradesh</span>
            </div>
            <div className="header-minister">
              <img src="/minister.jpg" alt="Minister" className="header-minister-img" />
              <span className="header-minister-name">Sri Durgesh Kandhula</span>
              <span className="header-minister-title">Ministry of East Godavari</span>
            </div>
          </div>

          <div className="header-top-center">
            <div className="header-title-block">
              <img src="/aplogo.webp" alt="East Godavari Tourism" className="header-emblem" />
              <h1 className="header-title">East Godavari Tourism</h1>
              <p className="header-subtitle">Department of Tourism, Government of Ap</p>
            </div>
          </div>

          {/* Mobile: CM - Logo + Minister */}
          <div className="header-mobile-row">
            <div className="header-cm-mobile">
              <img src="/cm.jpg" alt="CM N. Chandrababu Naidu" className="header-cm-img" />
              <span className="header-cm-text">Sri N. Chandrababu Naidu</span>
              <span className="header-cm-subtitle">Chief Minister</span>
            </div>
            <div className="header-title-block-mobile">
              <img src="/aplogo.webp" alt="East Godavari Tourism" className="header-emblem" />
              <h1 className="header-title">East Godavari Tourism</h1>
              <span className="header-subtitle-mobile">Department of Tourism,<br/>Government of Andhra Pradesh</span>
            </div>
            <div className="header-minister-mobile">
              <img src="/minister.jpg" alt="Minister" className="header-minister-img" />
              <span className="header-minister-name">Sri Durgesh Kandhula</span>
              <span className="header-minister-title">Ministry of East Godavari</span>
            </div>
          </div>

          <div className="header-top-right">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="header-social-btn" title="Instagram">
              <img src={instaIcon} width="22" height="22" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="header-social-btn" title="Facebook">
              <img src={fbIcon} width="22" height="22" alt="Facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="header-social-btn" title="Twitter">
              <img src={twitterIcon} width="22" height="22" alt="Twitter" />
            </a>
            <a href="mailto:info@eastgodavaritourism.com" target="_blank" rel="noopener noreferrer" className="header-social-btn" title="Email">
              <img src={emailIcon} width="22" height="22" alt="Email" />
            </a>
          </div>

          <button
            className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      <nav className={`header-nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
        <div className="header-container">
          <ul className="header-nav-list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`header-nav-link ${location.pathname === link.to ? 'active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="nav-overlay active" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
    </header>
  );
};

export default Header;
