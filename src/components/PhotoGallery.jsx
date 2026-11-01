import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from './HomeSectionHelpers';
import { photoGallery } from '../data/content';

const PhotoGallery = () => (
  <section className="section">
    <div className="container">
      <div className="container-xl" style={{ margin: '0 auto' }}>
        <SectionHeader heading="Photo Gallery" description="Photographs that capture the spirit and splendour of Land of Riches." />
      </div>
      <div className="gallery-slider">
        {photoGallery.map((item, i) => (
          <Link key={i} to="/photo-gallery" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="gallery-item" style={{
              display: 'flex',
              flexDirection: 'column',
              background: '#ffffff',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.04)',
              transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
              cursor: 'pointer',
              height: '100%',
              minHeight: '420px',
              border: '1px solid rgba(0, 0, 0, 0.04)',
              position: 'relative'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.01)';
              e.currentTarget.style.boxShadow = '0 24px 60px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.06)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.04)';
            }}
            >
              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4 / 3',
                overflow: 'hidden'
              }}>
                <img
                  src={item.image}
                  alt={item.heading}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)'
                  }}
                  onMouseOver={(e) => { e.target.style.transform = 'scale(1.1)'; }}
                  onMouseOut={(e) => { e.target.style.transform = 'scale(1)'; }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 40%)',
                  opacity: 0,
                  transition: 'opacity 0.5s ease'
                }}></div>
              </div>
              <div className="gallery-item-content" style={{
                padding: '1.5rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                background: '#ffffff'
              }}>
                <h4 style={{ fontFamily: 'Georgia, serif', fontSize: '1.15rem', color: '#1a1a2e' }}>{item.heading}</h4>
                <p style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '0.5rem', lineHeight: '1.6' }}>{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default PhotoGallery;
