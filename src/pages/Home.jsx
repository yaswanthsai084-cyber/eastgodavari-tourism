import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import WhatsNew from '../components/WhatsNew';
import StunningWonders from '../components/StunningWonders';
import MemoriesForALifetime from '../components/MemoriesForALifetime';
import GatewayToEastGodavari from '../components/GatewayToEastGodavari';
import Events from '../components/Events';
import PopularDestinations from '../components/PopularDestinations';
import Spirituality from '../components/Spirituality';
import PhotoGallery from '../components/PhotoGallery';
import VideoGallery from '../components/VideoGallery';
import { heroSlides } from '../data/content';

const Hero = () => {
  const slide = heroSlides[0];

  return (
    <section className="hero-section">
      <div className="hero-video-wrapper">
        <video
          key={slide.video}
          height="100%" width="100%"
          poster={slide.poster}
          preload="metadata"
          playsInline
          muted
          autoPlay
          loop
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        >
          <source src={slide.video} type="video/mp4" />
        </video>
      </div>
      <div className="hero-content">
        <div className="container" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div className="hero-content-inner">
            <div className="hero-content-body">
              <hr aria-orientation="vertical" className="hero-divider" />
              <h6 className="hero-category" style={{ fontSize: '3.25rem', fontWeight: 'bold' }}>{slide.heading}</h6>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={`scroll-to-top ${visible ? 'visible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <svg className="progress-circle" viewBox="-1 -1 102 102" width="100%" height="100%">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" fill="none" />
      </svg>
    </div>
  );
};

const Home = () => (
  <>
    <Helmet>
      <title>Welcome to East Godavari Tourism - Official Website of Department of Tourism, Government of East Godavari</title>
      <meta name="description" content="East Godavari Tourism official website provides text, photos, video, on travel destinations, hotels, accommodation, culture, heritage, art forms and people of God's own Country" />
      <meta property="og:title" content="Welcome to East Godavari Tourism - Official Website of Department of Tourism, Government of East Godavari" />
    </Helmet>
    <Hero />
    <WhatsNew />
    <StunningWonders />
    <MemoriesForALifetime />
    <GatewayToEastGodavari />

    <Events />
    <PopularDestinations />
    <Spirituality />
    <PhotoGallery />
    <VideoGallery />
    
    
    <ScrollToTop />
  </>
);

export default Home;