import React from 'react';
import { SectionHeader } from './HomeSectionHelpers';

const VideoGallery = () => (
  <section style={{ padding: '0', maxWidth: '100%', overflow: 'hidden' }}>
    <div style={{ width: '100%', padding: '2rem 1rem 0', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <SectionHeader heading="Video Gallery" description="Take a virtual expedition through our video gallery" />
      </div>
      <div className="home-video-gallery" style={{
        width: '100vw',
        position: 'relative',
        background: '#000',
        marginLeft: 'calc(-50vw + 50%)'
      }}>
        <div className="home-video-gallery-frame" style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          overflow: 'hidden',
          background: '#000'
        }}>
          <iframe
            src="https://www.youtube.com/embed/mGWv6dpM7Xc"
            title="East Godavari Tourism Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              position: 'absolute',
              top: 0,
              left: 0
            }}
          ></iframe>
        </div>
      </div>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem 1.5rem',
        background: '#ffffff'
      }}>
        <h4 style={{
          fontFamily: 'Georgia, serif',
          fontSize: '1.75rem',
          fontWeight: '700',
          color: '#1a1a2e',
          marginBottom: '1rem',
          lineHeight: '1.3'
        }}>East Godavari Tourism Video</h4>
        <p style={{
          fontSize: '1.1rem',
          color: '#6b7280',
          lineHeight: '1.8',
          margin: 0
        }}>Explore the beauty of East Godavari through this stunning visual tour. Discover ancient temples, pristine beaches, lush landscapes, and vibrant culture that make this region a must-visit destination.</p>
      </div>
    </div>
  </section>
);

export default VideoGallery;
