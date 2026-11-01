import React, { useState, useEffect, useRef } from 'react';
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
      <div className="hero-content">
        <div className="container hero-content-container">
          <div className="hero-content-inner">
            <div className="hero-content-body">
              <hr aria-orientation="vertical" className="hero-divider" />
              <p className="hero-eyebrow">Discover the river kingdom</p>
              <h1 className="hero-category">{slide.heading}</h1>
              <p className="hero-description">{slide.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomeVideoBackdrop = ({ status, onReady, onError }) => (
  <div className={`home-video-backdrop video-${status}`}>
    <video
      className="home-background-video"
      src={heroSlides[0].video}
      preload="metadata"
      playsInline
      muted
      autoPlay
      loop
      onCanPlay={onReady}
      onError={onError}
      aria-hidden="true"
      tabIndex="-1"
    />
    {status === 'loading' && (
      <div className="home-video-status" role="status" aria-live="polite">
        <span className="home-video-spinner" />
        <span>Loading East Godavari</span>
      </div>
    )}
    {status === 'error' && (
      <div className="home-video-error" role="status">
        Video unavailable
      </div>
    )}
  </div>
);
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

const Home = () => {
  const [videoStatus, setVideoStatus] = useState('loading');
  const homeContentRef = useRef(null);

  useEffect(() => {
    const root = homeContentRef.current;
    if (!root) return undefined;

    const sections = root.querySelectorAll('.home-scroll-section');
    if (!('IntersectionObserver' in window)) {
      sections.forEach(section => section.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-experience" ref={homeContentRef}>
      <Helmet>
        <title>Welcome to East Godavari Tourism - Official Website of Department of Tourism, Government of East Godavari</title>
        <meta name="description" content="East Godavari Tourism official website provides text, photos, video, on travel destinations, hotels, accommodation, culture, heritage, art forms and people of God's own Country" />
        <meta property="og:title" content="Welcome to East Godavari Tourism - Official Website of Department of Tourism, Government of East Godavari" />
      </Helmet>
      <HomeVideoBackdrop
        status={videoStatus}
        onReady={() => setVideoStatus('ready')}
        onError={() => setVideoStatus('error')}
      />
      <Hero />
      <div className="home-scroll-section"><WhatsNew /></div>
      <div className="home-scroll-section"><StunningWonders /></div>
      <div className="home-scroll-section"><MemoriesForALifetime /></div>
      <div className="home-scroll-section"><GatewayToEastGodavari /></div>
      <div className="home-scroll-section"><Events /></div>
      <div className="home-scroll-section"><PopularDestinations /></div>
      <div className="home-scroll-section"><Spirituality /></div>
      <div className="home-scroll-section home-photo-gallery-section"><PhotoGallery /></div>
      <div className="home-scroll-section"><VideoGallery /></div>
      <ScrollToTop />
    </div>
  );
};

export default Home;