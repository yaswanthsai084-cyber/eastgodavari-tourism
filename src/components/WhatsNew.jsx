import React, { useEffect, useRef, useState } from 'react';
import { ArrowIcon, SectionHeader } from './HomeSectionHelpers';
import { godavari_pushkaram, godavari_river } from '../data/content';
import weedingdestination from '../assets/images/weedingdestination.jpg';

const WhatsNew = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const whatsNewItems = [
    {
      heading: "Godavari River Festival 2026",
      description: "The 12th edition of the Godavari River Festival is set to take place from July 30 to August 2, 2026, in the exhilarating waters of the Godavari River in Eluru.",
      image: godavari_pushkaram,
      video: "/pushkaralu.mp4",
      btnText: "More",
      link: "https://www.east-godavariadventure.org/godavari-river-festival/"
    },
    {
      heading: "East Godavari Travel Mart 2026",
      description: "Register now to participate in East Godavari's biggest international travel trade event and connect with the global tourism community.",
      image: godavari_river,
      btnText: "Register Now",
      link: "https://www.east-godavaritravelmart.org/ktm-2026-registrations-open-for-buyers-media/"
    },
    {
      heading: "Destination Wedding",
      description: "Whether it's sandy beaches, serene hills, or tranquil river islands, East Godavari offers a variety of perfect destination spots to provide the most memorable backdrop for your special day.",
      image: weedingdestination,
      btnText: "Explore",
      link: "#"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % whatsNewItems.length);
    }, 12000);
    return () => clearInterval(timer);
  }, [whatsNewItems.length]);

  const goToSlide = (index) => {
    setCurrent(index);
    clearInterval(timerRef.current);
    const timer = setInterval(() => setCurrent(prev => (prev + 1) % whatsNewItems.length), 12000);
    timerRef.current = timer;
  };

  const item = whatsNewItems[current];

  return (
    <section className="section">
      <div className="container">
        <div className="container-xl" style={{ margin: '0 auto' }}>
          <SectionHeader heading="What's New" description="Here's a quick glance on what's trending in Land of Riches now." />
        </div>
        <div className="whats-new-slider">
          <div className="whats-new-item active">
            <div className="whats-new-image">
              {item.video ? (
                <video
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "0.375rem" }}
                />
              ) : (
                <img src={item.image} alt={item.heading} loading="lazy" width="500" height="750" decoding="async" data-nimg="1" style={{ color: "transparent", width: "100%", height: "100%", borderRadius: "0.375rem", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat" }} />
              )}
              <div className="whats-new-overlay"></div>
            </div>
            <div className="whats-new-text">
              <h4>{item.heading}</h4>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="whats-new-btn">{item.btnText} <ArrowIcon color="#fff" /></a>
            </div>
          </div>
        </div>
        <div className="whats-new-dots">
          {whatsNewItems.map((_, i) => (
            <button key={i} className={`whats-new-dot ${i === current ? 'active' : ''}`} onClick={() => goToSlide(i)} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
