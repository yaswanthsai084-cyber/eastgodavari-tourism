import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer" style={{ background: 'linear-gradient(135deg, #090909 0%, #4e1e1e 100%)', padding: '2rem 0 1rem' }}>
    <div className="container">
      <div style={{ 
        textAlign: 'center', 
        padding: '1.5rem 2rem',
        background: 'rgba(122, 31, 31, 0)',
        borderRadius: '0.5rem',
        backdropFilter: 'blur(10px)',
        maxWidth: '1000px',
        margin: '0 auto 1rem'
      }}>
        <h3 style={{ 
          color: '#fff', 
          fontSize: '2rem', 
          marginBottom: '0.5rem',
          fontFamily: "'Playfair Display', Georgia, serif",
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          fontWeight: '600',
          lineHeight: '1.2'
        }}>
          Ready to Experience East Godavari?
        </h3>
        <p style={{ 
          color: '#f0f0f0', 
          fontSize: '1rem',
          marginBottom: '1rem',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
          lineHeight: '1.6'
        }}>
          Plan your perfect East Godavari journey and create memories that will last a lifetime.
        </p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem',
          marginBottom: '1.5rem',
          flexWrap: 'wrap'
        }}>
          <div>
            <div style={{ color: '#ff9d00', fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.25rem' }}>50+</div>
            <div style={{ color: '#fff', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Destinations</div>
          </div>
          <div>
            <div style={{ color: '#ff9d00', fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.25rem' }}>100+</div>
            <div style={{ color: '#fff', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Experiences</div>
          </div>
          <div>
            <div style={{ color: '#ff9d00', fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.25rem' }}>24/7</div>
            <div style={{ color: '#fff', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Support</div>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link 
            to="/plan-trip" 
            style={{ 
              display: 'inline-flex',
              padding: '0.625rem 1.75rem',
              background: 'linear-gradient(135deg, #ff9d00 0%, #ffb347 100%)',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '0.95rem',
              boxShadow: '0 4px 15px rgba(255, 157, 0, 0.4)',
              transition: 'all 0.3s ease',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            Plan Your Trip
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link 
            to="/contact" 
            style={{ 
              display: 'inline-flex',
              padding: '0.625rem 1.75rem',
              background: 'linear-gradient(135deg, #ff9d00 0%, #ffb347 100%)',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '0.95rem',
              boxShadow: '0 4px 15px rgba(255, 157, 0, 0.4)',
              transition: 'all 0.3s ease',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C10.37 21 2 12.63 2 2.08C2 1.48 2.48 1 3.08 1H6.08C6.63 1 7.08 1.37 7.17 1.91L7.57 4.33C7.64 4.75 7.52 5.17 7.25 5.5L5.5 8.5C6.75 11.5 9.5 14.25 12.5 15.5L15.5 13.75C15.83 13.48 16.25 13.36 16.67 13.43L19.09 13.83C19.63 13.92 20 14.37 20 14.92V16.92H22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Contact Us
          </Link>
        </div>
      </div>
      
      <div className="footer-bottom" style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.2)', textAlign: 'center' }}>
        <p style={{ color: '#ccc', marginBottom: '0.5rem' }}>© 2026 Department of Tourism, Government of East Godavari. All rights reserved.</p>
        <p style={{ color: '#999', fontSize: '0.9rem' }}>Website designed and developed by East Godavari Tourism</p>
      </div>
    </div>
  </footer>
);

export default Footer;
