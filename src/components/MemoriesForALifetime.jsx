import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from './HomeSectionHelpers';
import { memories_village_life, memories_trekking, memories_agri_tourism, memories_cuisine, memories_artforms, memories_monsoon, memories_river_cruise } from '../data/content';

const MemoriesForALifetime = () => {
  const bgVideo = "https://www.youtube.com/watch?v=6RWTmulkXXg&list=RD6RWTmulkXXg&start_radio=1";
  const items = [
    { heading: "Village Life Experience", image: memories_village_life, description: "Experience the authentic rural charm and traditional village life of East Godavari.", shortText: "Authentic rural charm" },
    { heading: "Trekking and Safaris", image: memories_trekking, description: "Embark on thrilling treks and wildlife safaris through scenic landscapes.", shortText: "Adventure awaits!" },
    { heading: "Eco Tourism", image: memories_agri_tourism, description: "Discover farm life and agricultural traditions in the fertile lands.", shortText: "Farm to table" },
    { heading: "Cuisine", image: memories_cuisine, description: "Savor the unique flavours and traditional cuisine of East Godavari.", shortText: "Taste the tradition" },
    { heading: "Artforms", image: memories_artforms, description: "Explore vibrant artforms and cultural expressions unique to the region.", shortText: "Culture & heritage" },
    { heading: "Monsoon", image: memories_monsoon, description: "Experience the magic of monsoon as the landscapes come alive.", shortText: "Nature at its best" },
    { heading: "River Cruise", image: memories_river_cruise, description: "Enjoy serene river cruises along the mighty Godavari River.", shortText: "Peaceful waterways" }
  ];
  return (
    <section className="memories-section">
      <video className="memories-bg-video" src={bgVideo} autoPlay muted loop playsInline />
      <div className="memories-overlay"></div>
      <div className="memories-content">
        <div className="container">
          <SectionHeader heading="Memories for a Lifetime" description="Here is a bouquet of unforgettable experiences East Godavari offers: charming village life, thrilling treks, serene safaris, vibrant farms, unique cuisine, tranquil river cruises and the magic of monsoon. Each moment in East Godavari is a story waiting to be told, a memory etched in time." light />
          <div className="home-feature-cards-grid memories-cards-grid">
            {items.map((item, i) => (
              <Link key={i} to="/experiences" className="home-feature-card-link">
                <div
                  className="memories-card home-feature-card"
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.01)';
                    e.currentTarget.style.boxShadow = '0 24px 60px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.06)';
                    const title = e.currentTarget.querySelector('.mem-title');
                    const btn = e.currentTarget.querySelector('.mem-explore-btn');
                    if (title) {
                      title.style.background = 'linear-gradient(135deg, #FF9D00, #FF6B35)';
                      title.style.webkitBackgroundClip = 'text';
                      title.style.webkitTextFillColor = 'transparent';
                      title.style.backgroundClip = 'text';
                    }
                    if (btn) {
                      btn.style.background = 'linear-gradient(135deg, #FF9D00 0%, #FF6B35 100%)';
                      btn.style.color = '#ffffff';
                    }
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.04)';
                    const title = e.currentTarget.querySelector('.mem-title');
                    const btn = e.currentTarget.querySelector('.mem-explore-btn');
                    if (title) {
                      title.style.background = 'transparent';
                      title.style.webkitTextFillColor = '#1a1a2e';
                    }
                    if (btn) {
                      btn.style.background = '#f8f9fc';
                      btn.style.color = 'black';
                    }
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
                  <div style={{
                    padding: '1.5rem 1.5rem 0',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    background: 'white'
                  }}>
                    <h3
                      className="mem-title"
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        color: '#1a1a2e',
                        marginBottom: '0.5rem',
                        fontFamily: 'Georgia, serif',
                        lineHeight: '1.3',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {item.heading}
                    </h3>
                    <p style={{
                      fontSize: '0.88rem',
                      color: '#6b7280',
                      margin: 0,
                      lineHeight: '1.6',
                      flex: 1
                    }}>
                      {item.description}
                    </p>
                    <p style={{
                      fontSize: '0.82rem',
                      color: '#718096',
                      fontStyle: 'italic',
                      marginTop: '0.75rem',
                      marginBottom: '0.5rem'
                    }}>
                      {item.shortText}
                    </p>
                  </div>
                  <div
                    className="mem-explore-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1rem 2.5rem',
                      background: '#f8f9fc',
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: 'black',
                      height: '50px',
                      border: 'none',
                      transition: 'all 0.3s ease',
                      marginTop: 'auto',
                      borderRadius: '100px',
                      letterSpacing: '0.5px'
                    }}
                  >
                    <span>Explore</span>
                    <span style={{ fontSize: '18px' }}>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoriesForALifetime;
