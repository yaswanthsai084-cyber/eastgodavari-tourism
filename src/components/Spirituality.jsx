import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from './HomeSectionHelpers';
import exploreMahakaleshwarTemple from '../assets/images/explore-kotipalli-temple.jpg';
import exploreRamanayuniTemple from '../assets/images/explore-ramanayuni-temple.jpg';
import exploreKorukondaTemple from '../assets/images/explore-korukonda-temple.jpg';
import exploreKakindaRamalayam from '../assets/images/explore-kakinda-ramalayam.jpg';
import exploreVinayakaTemple from '../assets/images/explore-vinayaka-temple.jpg';

const Spirituality = () => {
  const spiritualityItems = [
    { title: "Mahakaleshwar Temple", image: exploreMahakaleshwarTemple, description: "Ancient temple by the river banks", link: "/destination-page/31" },
    { title: "Ramanayuni Temple", image: exploreRamanayuniTemple, description: "Sacred shrine with rich heritage", link: "/destination-page/32" },
    { title: "Korukonda Temple", image: exploreKorukondaTemple, description: "Hilltop temple with panoramic views", link: "/destination-page/33" },
    { title: "Mamidada Ramalayam", image: exploreKakindaRamalayam, description: "Divine temple dedicated to Lord Rama", link: "/destination-page/34" },
    { title: "Vinayaka Temple", image: exploreVinayakaTemple, description: "Temple dedicated to Lord Ganesha", link: "/destination-page/35" }
  ];

  return (
    <section className="section" style={{ background: 'linear-gradient(135deg, #fdf6f0 0%, #fff5eb 50%, #fef0e6 100%)', overflow: 'hidden' }}>
      <div className="container">
        <div className="container-xl" style={{ margin: '0 auto' }}>
          <SectionHeader heading="Spirituality" description="Embark on a divine journey through the sacred temples and spiritual heritage of East Godavari." />
        </div>
        <div className="home-feature-cards-grid spirituality-cards-grid">
          {spiritualityItems.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className="home-feature-card-link"
            >
              <div
                className="home-feature-card"
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: 'white',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                  cursor: 'pointer',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid rgba(0, 0, 0, 0.04)',
                  position: 'relative'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.01)';
                  e.currentTarget.style.boxShadow = '0 24px 60px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.06)';
                  const title = e.currentTarget.querySelector('.spirit-title');
                  const btn = e.currentTarget.querySelector('.spirit-explore-btn');
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
                  const title = e.currentTarget.querySelector('.spirit-title');
                  const btn = e.currentTarget.querySelector('.spirit-explore-btn');
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
                    alt={item.title}
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
                    className="spirit-title"
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
                    {item.title}
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
                  className="spirit-explore-btn"
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
};

export default Spirituality;
