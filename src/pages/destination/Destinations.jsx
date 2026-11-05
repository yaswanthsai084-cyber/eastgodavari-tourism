import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { additionalDestinations } from '../../data/additionalDestinations';
import explorePeddapuramBeach from '../../assets/images/explore-peddapuram-beach.jpg';
import exploreKakinadaBeach from '../../assets/images/explore-kakinada-beach.jpg';
import exploreCoringaBeach from '../../assets/images/explore-coringa-beach.jpg';
import exploreYanamBeach from '../../assets/images/explore-yanam-beach.jpg';
import exploreGautamiRiver from '../../assets/images/explore-gautami-river.jpg';
import exploreKorukondaFort from '../../assets/images/explore-korukonda-fort.jpg';
import exploreRamanayuniTemple from '../../assets/images/explore-ramanayuni-temple.jpg';
import exploreRajahmundryBridge from '../../assets/images/explore-rajahmundry-bridge.jpg';
import exploreMahakaleshwarTemple from '../../assets/images/explore-kotipalli-temple.jpg';
import exploreKotipalliRiver from '../../assets/images/explore-kotipalli-river.jpg';
import exploreGodavariIsland from '../../assets/images/explore-godavari-island.jpg';
import explorePapiHill from '../../assets/images/explore-papi-hill.jpg';
import exploreYalamanchiliLanka from '../../assets/images/explore-yalamanchili-lanka.jpg';
import exploreGudisaHill from '../../assets/images/explore-gudisa-hill.jpg';
import exploreMaridimilliHill from '../../assets/images/explore-maredimilli-hill.jpg';
import exploreAmruthandhraWaterfall from '../../assets/images/explore-amruthandhra-waterfall.jpg';
import exploreGodavariWaterfall from '../../assets/images/explore-godavari-waterfall.jpg';
import exploreDharapalliWaterfalls from '../../assets/images/explore-dharapalli-waterfalls.jpg';
import explorePolluruWaterfall from '../../assets/images/explore-polluru-waterfall.jpg';
import exploreRampaWaterfall from '../../assets/images/explore-rampa-waterfall.jpg';
import exploreCoringaWildlife from '../../assets/images/explore-coringa-willdlife.jpg';
import coringaWildlifeSanctuaryImage from '../../assets/images/coringa-wildlife-sanctuary.png';
import exploreRamanayuniWildlife from '../../assets/images/explore-ramanayuni-wildlife.jpg';
import explorePapikondaWildlife from '../../assets/images/explore-papikonda-wildlife.jpg';
import exploreAtreyapuramWildlife from '../../assets/images/explore-atreyapuram-wildlife.jpg';
import exploreMavidadaRamalayam from '../../assets/images/explore-kakinda-ramalayam.jpg';
import exploreVinayakaTemple from '../../assets/images/explore-vinayaka-temple.jpg';
import exploreKorukondaTemple from '../../assets/images/explore-korukonda-temple.jpg';
import exploreKakinadaShopping from '../../assets/images/explore-kakinada-shopping.jpg';
import exploreAnnavaramMart from '../../assets/images/explore-annavaram-mart.jpg';
import exploreHopeIsland from '../../assets/images/explore-hope-island.jpg';
import explorePallamIsland from '../../assets/images/explore-pallam-island.jpg';
import exploreCottonBridge from '../../assets/images/heritage-cottonbridge.webp';
import exploreDeviChowk from '../../assets/images/spirituality-devichowk.webp';

const Destinations = () => {
  const [searchParams] = useSearchParams();
  const [categoryFromUrl] = useState(searchParams.get('category'));
  const [activeFilter, setActiveFilter] = useState(categoryFromUrl || 'all');
  const [clickedDestination, setClickedDestination] = useState(null);
  const destinationGridRef = useRef(null);
  const categoryMenuRef = useRef(null);

  // Auto-scroll to category section when category changes or page loads
  useEffect(() => {
    if (categoryFromUrl) {
      setActiveFilter(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  useEffect(() => {
    const activeButton = categoryMenuRef.current?.querySelector('.destination-category-menu-button.active');
    activeButton?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [activeFilter]);

  useEffect(() => {
    const cards = destinationGridRef.current?.querySelectorAll('.destination-menu-card');
    if (!cards) return undefined;

    if (!('IntersectionObserver' in window)) {
      cards.forEach(card => card.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, [activeFilter]);

  const categories = [
    { id: 'all', label: 'All Destinations' },
    { id: 'hills', label: 'Hill Stations' },
    { id: 'beaches', label: 'Beaches & Coastal Attractions' },
    { id: 'river islands', label: 'River Islands' },
    { id: 'wildlife', label: 'Forests & Wildlife' },
    { id: 'heritage', label: 'Historical & Heritage Places' },
    { id: 'waterfalls', label: 'Waterfalls & Nature' },
    { id: 'spirituality', label: 'Temples & Religious Places' },
    { id: 'rivers', label: 'Rivers & Ghats' },
    { id: 'villages', label: 'Villages & Countryside' },
    { id: 'parks', label: 'Parks & Recreation' },
    { id: 'shopping', label: 'Shopping & Malls' }
  ];

  const categoryImages = [
    // Beaches (5)
    { id: 1, category: 'beaches', title: 'Uppada Beach', alt: 'Uppada Beach', src: explorePeddapuramBeach, description: 'A coastal village and beach on the Bay of Bengal, north of Kakinada.', address: 'Uppada, Kakinada, Andhra Pradesh' },
    { id: 2, category: 'beaches', title: 'Kakinada Beach', alt: 'Kakinada Beach', src: exploreKakinadaBeach, description: 'Pristine coastline with beautiful sunrise views and peaceful atmosphere for beach lovers.', address: 'Kakinada Beach Road, Kakinada, East Godavari' },
    { id: 3, category: 'beaches', title: 'Coringa Beach', alt: 'Coringa Beach', src: exploreCoringaBeach, description: 'Untouched beach near the Coringa Wildlife Sanctuary offering pristine natural beauty.', address: 'Coringa, East Godavari, Andhra Pradesh' },
    { id: 4, category: 'beaches', title: 'Yanam Beach', alt: 'Yanam Beach', src: exploreYanamBeach, description: 'Scenic beach in the French colony of Yanam with unique cultural heritage.', address: 'Yanam, Puducherry (Near East Godavari)' },
    { id: 5, category: 'beaches', title: 'Gautami River', alt: 'Gautami River', src: exploreGautamiRiver, description: 'Majestic river confluence offering breathtaking views and peaceful boat rides.', address: 'Gautami River, East Godavari, Andhra Pradesh' },
    
    // Heritage (5)
    { id: 6, category: 'heritage', title: 'Korukonda Fort', alt: 'Korukonda Fort', src: exploreKorukondaFort, description: 'Historic fort with ancient architecture and panoramic views of the surrounding landscape.', address: 'Korukonda, East Godavari, Andhra Pradesh' },
    { id: 7, category: 'heritage', title: 'Ramanayuni Temple', alt: 'Ramanayuni Temple', src: exploreRamanayuniTemple, description: 'Ancient temple with intricate carvings and rich spiritual heritage dating back centuries.', address: 'Ramanayuni, East Godavari, Andhra Pradesh' },
    { id: 9, category: 'heritage', title: 'Godavari Bridges', alt: 'Godavari Bridges at Rajamahendravaram', src: exploreRajahmundryBridge, description: 'A sequence of historic rail and road bridges across the Godavari at Rajamahendravaram.', address: 'Rajamahendravaram, East Godavari, Andhra Pradesh' },
    { id: 10, category: 'heritage', title: 'Mahakaleshwar Temple', alt: 'Mahakaleshwar  Temple', src: exploreMahakaleshwarTemple, description: 'Sacred temple dedicated to Lord Shiva with beautiful architecture and religious significance.', address: 'Kotipalli, East Godavari, Andhra Pradesh' },
    { id: 41, category: 'heritage', title: 'Dowleswaram Cotton Barrage', alt: 'Dowleswaram Cotton Barrage', src: exploreCottonBridge, description: 'Historic Godavari irrigation barrage built under Sir Arthur Cotton in 1850.', address: 'Dowleswaram, East Godavari, Andhra Pradesh' },
    
    // River Islands (5)
    { id: 11, category: 'river islands', title: 'Kotipalli River', alt: 'Kotipalli River', src: exploreKotipalliRiver, description: 'Peaceful river island with lush greenery and tranquil waters perfect for nature lovers.', address: 'Kotipalli, East Godavari, Andhra Pradesh' },
    { id: 12, category: 'river islands', title: 'Hope Island', alt: 'Hope Island', src: exploreHopeIsland, description: 'Pristine island formed by the confluence of two rivers, offering unique ecosystem and serene environment.', address: 'Hope Island, Near Kakinada, East Godavari' },
    { id: 13, category: 'river islands', title: 'Pallam Island', alt: 'Pallam Island', src: explorePallamIsland, description: 'Beautiful river island with rich biodiversity and traditional village life experiences.', address: 'Pallam Island, East Godavari, Andhra Pradesh' },
    { id: 14, category: 'river islands', title: 'Godavari Island', alt: 'Godavari Island', src: '/godavari-cards.webp', description: 'Largest river island in Godavari with fertile lands and traditional farming communities.', address: 'Godavari Island, East Godavari, Andhra Pradesh' },
    { id: 15, category: 'river islands', title: 'Yalamanchili Lanka', alt: 'Yalamanchili Lanka', src: exploreYalamanchiliLanka, description: 'Charming island village showcasing authentic rural life and agricultural traditions.', address: 'Yalamanchili Lanka, East Godavari, Andhra Pradesh' },
    
    // Hills (5)
    { id: 16, category: 'hills', title: 'Gudisa Hill', alt: 'Gudisa Hill', src: exploreGudisaHill, description: 'Scenic hill station with misty peaks and stunning viewpoints for adventure enthusiasts.', address: 'Gudisa Hills, East Godavari, Andhra Pradesh' },
    { id: 18, category: 'hills', title: 'Maredumilli Forests', alt: 'Maredumilli Forests', src: exploreMaridimilliHill, description: 'Eastern Ghats forests and community-led eco-tourism area.', address: 'Maredumilli, East Godavari, Andhra Pradesh' },
    { id: 20, category: 'hills', title: 'Papi Hills', alt: 'Papi Hills', src: explorePapiHill, description: 'Majestic hills with deep gorges and the mighty Godavari flowing through them.', address: 'Papi Hills, Near Bhadrachalam, East Godavari' },
    
    // Waterfalls (5)
    { id: 21, category: 'waterfalls', title: 'Amruthadhara Falls', alt: 'Amruthadhara Falls', src: exploreAmruthandhraWaterfall, description: 'Magnificent waterfall cascading from great heights surrounded by dense forests.', address: 'Amruthadhara Falls, East Godavari, Andhra Pradesh' },
    { id: 22, category: 'waterfalls', title: 'Godavari Waterfall', alt: 'Godavari Waterfall', src: exploreGodavariWaterfall, description: 'Spectacular waterfall on the Godavari River with crystal clear waters and scenic beauty.', address: 'Godavari Waterfall, East Godavari, Andhra Pradesh' },
    { id: 23, category: 'waterfalls', title: 'Dharapalli Falls', alt: 'Dharapalli Falls', src: exploreDharapalliWaterfalls, description: 'Hidden gem waterfall nestled in the hills, perfect for a refreshing getaway.', address: 'Dharapalli, East Godavari, Andhra Pradesh' },
    { id: 24, category: 'waterfalls', title: 'Polluru Waterfall', alt: 'Polluru Waterfall', src: explorePolluruWaterfall, description: 'Picturesque waterfall surrounded by lush greenery and rocky terrain.', address: 'Polluru, East Godavari, Andhra Pradesh' },
    { id: 25, category: 'waterfalls', title: 'Rampa Waterfall', alt: 'Rampa Waterfall', src: exploreRampaWaterfall, description: 'Beautiful cascade in a serene natural setting, ideal for picnics and photography.', address: 'Rampa, East Godavari, Andhra Pradesh' },
    
    // Wildlife (5)
    { id: 27, category: 'wildlife', title: 'Coringa Wildlife Sanctuary', alt: 'Coringa Wildlife Sanctuary', src: coringaWildlifeSanctuaryImage, description: 'Protected mangroves, tidal creeks, wildlife, and bird habitat near Kakinada.', address: 'Coringa Wildlife Sanctuary, Kakinada, Andhra Pradesh' },
    { id: 28, category: 'wildlife', title: 'Ramanayuni Wildlife', alt: 'Ramanayuni Wildlife', src: exploreRamanayuniWildlife, description: 'Dense forest reserve with rich biodiversity and exciting safari experiences.', address: 'Ramanayuni Wildlife Sanctuary, East Godavari' },
    { id: 29, category: 'wildlife', title: 'Atreyapuram Wildlife', alt: 'Atreyapuram Wildlife', src: exploreAtreyapuramWildlife, description: 'Natural habitat for various species with well-maintained trails and viewing points.', address: 'Atreyapuram, East Godavari, Andhra Pradesh' },
    { id: 30, category: 'wildlife', title: 'Papikonda National Park', alt: 'Papikonda National Park', src: explorePapikondaWildlife, description: 'Protected forest and wildlife landscape around Papikondalu and the Godavari.', address: 'Papikonda National Park, Andhra Pradesh' },
    
    // Spirituality (5)
    { id: 31, category: 'spirituality', title: 'Mahakaleshwar  Temple', alt: 'Mahakaleshwar  Temple', src: exploreMahakaleshwarTemple, description: 'Ancient temple with divine atmosphere and traditional South Indian architecture.', address: 'Mahakaleshwar  Temple, East Godavari, Andhra Pradesh' },
    { id: 32, category: 'spirituality', title: 'Ramanayuni Temple', alt: 'Ramanayuni Temple', src: exploreRamanayuniTemple, description: 'Sacred shrine with historical significance and beautiful religious ceremonies.', address: 'Ramanayuni, East Godavari, Andhra Pradesh' },
    { id: 33, category: 'spirituality', title: 'Korukonda Temple', alt: 'Korukonda Temple', src: exploreKorukondaTemple, description: 'Peaceful temple complex with intricate sculptures and spiritual ambiance.', address: 'Korukonda, East Godavari, Andhra Pradesh' },
    { id: 34, category: 'spirituality', title: 'Gollala Mamidada Suryanarayana Temple', alt: 'Gollala Mamidada Suryanarayana Temple', src: exploreMavidadaRamalayam, description: 'Temple complex known for its carved 170-foot gopuram and 16-acre campus.', address: 'Gollala Mamidada, East Godavari, Andhra Pradesh' },
    { id: 35, category: 'spirituality', title: 'Bikkavolu Vinayaka Temple', alt: 'Bikkavolu Vinayaka Temple', src: exploreVinayakaTemple, description: 'Historic Sri Vinayaka shrine with a local tradition dating the idol to 849 CE.', address: 'Bikkavolu, East Godavari, Andhra Pradesh' },
    { id: 42, category: 'spirituality', title: 'Devi Chowk Mandir', alt: 'Devi Chowk Mandir', src: exploreDeviChowk, description: 'Sacred temple dedicated to the goddess, a revered spiritual site in the heart of the region.', address: 'Devi Chowk, East Godavari, Andhra Pradesh' },
    ...additionalDestinations,
    
    // Shopping (5)
    { id: 37, category: 'shopping', title: 'Kakinada Shopping', alt: 'Kakinada Shopping', src: exploreKakinadaShopping, description: 'Modern shopping destination with local boutiques, malls, and traditional markets.', address: 'Kakinada Shopping Complex, Kakinada, East Godavari' },
    { id: 40, category: 'shopping', title: 'Annavaram Mart', alt: 'Annavaram Mart', src: exploreAnnavaramMart, description: 'Popular shopping center near the famous temple with religious items and souvenirs.', address: 'Annavaram Mart, Near Temple, East Godavari' }
  ];

  const filteredCategoryImages = activeFilter === 'all' 
    ? categoryImages 
    : categoryImages.filter(img => img.category === activeFilter);

  return (
    <div className="page-container destinations-menu-page">
      {/* Main Content */}
      <div className="container" style={{ paddingTop: '3rem' }}>
        {/* Category Menu Bar */}
        <nav ref={categoryMenuRef} className="destination-category-menu" aria-label="Destination categories">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`destination-category-menu-button ${activeFilter === category.id ? 'active' : ''}`}
              aria-current={activeFilter === category.id ? 'page' : undefined}
            >
              {category.label}
            </button>
          ))}
        </nav>

        {/* Image Cards Grid */}
        <div ref={destinationGridRef} className="destination-menu-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {filteredCategoryImages.map((image, index) => (
            <Link
              key={image.id}
              to={`/destination-page/${image.id}`}
              className="destination-menu-card-link"
            >
              <div
                className="destination-card-load destination-menu-card"
                style={{
                  animationDelay: `${Math.min(index, 8) * 70}ms`,
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
                onClick={() => setClickedDestination(null)}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.01)';
                  e.currentTarget.style.boxShadow = '0 24px 60px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.06)';
                  const title = e.currentTarget.querySelector('h3');
                  const button = e.currentTarget.querySelector('.explore-btn');
                  if (title) {
                    title.style.background = 'linear-gradient(135deg, #FF9D00 0%, #FF6B35 100%)';
                    title.style.webkitBackgroundClip = 'text';
                    title.style.webkitTextFillColor = 'transparent';
                    title.style.backgroundClip = 'text';
                  }
                  if (button) {
                    button.style.background = 'linear-gradient(135deg, #FF9D00 0%, #FF6B35 100%)';
                    button.style.color = '#ffffff';
                  }
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.04)';
                  const title = e.currentTarget.querySelector('h3');
                  const button = e.currentTarget.querySelector('.explore-btn');
                  if (title) {
                    title.style.background = 'transparent';
                    title.style.webkitTextFillColor = '#1a1a2e';
                  }
                  if (button) {
                    button.style.background = '#f8f9fc';
                    button.style.color = '#1a1a2e';
                  }
                }}
              >
                {/* Image Section */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4 / 3',
                  overflow: 'hidden'
                }}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 40%)',
                    opacity: 0,
                    transition: 'opacity 0.5s ease'
                  }}></div>
                </div>

                {/* Content Section */}
                <div style={{
                  padding: '1.5rem 1.5rem 0',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  background: 'white'
                }}>
                  {/* Title */}
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
                    {image.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.88rem',
                    color: '#6b7280',
                    margin: 0,
                    lineHeight: '1.6',
                    flex: 1
                  }}>
                    {image.description}
                  </p>
                </div>

                {/* Explore Button */}
                <div 
                  className="explore-btn"
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

        {/* No Results Message */}
        {filteredCategoryImages.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              margin: 0
            }}>
              No images found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;
