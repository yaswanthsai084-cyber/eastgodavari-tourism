import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from './HomeSectionHelpers';
import { gallary_Kalaripayattu, memories_cuisine } from '../data/content';

const StunningWonders = () => {
  const wonders = [
    { heading: "Discover East Godavari's Religious Heritage", description: "Explore ancient temples, serene churches, historic mosques, vibrant rituals of Theyyam and Padayani that showcase the rich religious heritage of this divine land.", image: gallary_Kalaripayattu, link: "/experiences?category=artforms" },
    { heading: "Experience East Godavari's Wellness Retreats", description: "Discover traditional Ayurvedic treatments, yoga retreats, wellness resorts, and therapeutic practices rooted in centuries-old traditions for a holistic rejuvenation.", image: memories_cuisine, link: "/experiences?category=cuisine" }
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="container-xl" style={{ margin: '0 auto' }}>
          <SectionHeader heading="East Godavari's Stunning Wonders" description="Enjoy the magnificent and varied allure of Land of Riches" />
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '2.5rem'
        }}>
          {wonders.map((item, i) => (
            <Link key={i} to={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: 'white',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                  cursor: 'pointer',
                  height: '100%',
                  minHeight: '500px',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid rgba(0, 0, 0, 0.04)',
                  position: 'relative'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.01)';
                  e.currentTarget.style.boxShadow = '0 24px 60px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.06)';
                  const btn = e.currentTarget.querySelector('.wonder-explore-btn');
                  if (btn) {
                    btn.style.background = 'linear-gradient(135deg, #FF9D00 0%, #FF6B35 100%)';
                    btn.style.color = '#ffffff';
                  }
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.04)';
                  const btn = e.currentTarget.querySelector('.wonder-explore-btn');
                  if (btn) {
                    btn.style.background = '#f8f9fc';
                    btn.style.color = '#1a1a2e';
                  }
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '4 / 3',
                    overflow: 'hidden'
                  }}
                >
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

                <div
                  style={{
                    padding: '1.5rem 1.5rem 0',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    background: 'white'
                  }}
                >
                  <h3
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
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: '#6b7280',
                      margin: 0,
                      lineHeight: '1.6',
                      flex: 1
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                <div
                  className="wonder-explore-btn"
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
    </section>
  );
}

export default StunningWonders;
