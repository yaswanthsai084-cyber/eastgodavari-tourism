import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from './HomeSectionHelpers';
import exploreRajahmundryBridge from '../assets/images/explore-rajahmundry-bridge.jpg';
import explorePapiHill from '../assets/images/explore-papi-hill.jpg';
import exploreMaridimilliHill from '../assets/images/explore-maredimilli-hill.jpg';
import './StunningWonders.css';

const wonders = [
  {
    heading: 'Godavari Bridges',
    description: 'See the historic rail and road bridges spanning the Godavari at Rajamahendravaram.',
    image: exploreRajahmundryBridge,
    link: '/destination-page/9'
  },
  {
    heading: 'Papi Hills',
    description: 'Explore forest-covered hills and river islands along the scenic Godavari.',
    image: explorePapiHill,
    link: '/destination-page/20'
  },
  {
    heading: 'Maredumilli Hills',
    description: 'Discover the Eastern Ghats forests, streams, and natural beauty of Maredumilli.',
    image: exploreMaridimilliHill,
    link: '/destination-page/18'
  }
];

const StunningWonders = () => (
  <section className="section stunning-wonders-section">
    <div className="container">
      <div className="container-xl stunning-wonders-heading">
        <SectionHeader
          heading="East Godavari's Stunning Wonders"
          description="Explore the river, hills, and forests that make East Godavari unforgettable."
        />
      </div>
      <div className="stunning-wonders-grid">
        {wonders.map((item) => (
          <Link
            key={item.heading}
            className="destination-card-link home-feature-card-link"
            to={item.link}
          >
            <article className="destination-card">
              <div className="destination-card__image">
                <img src={item.image} alt={item.heading} loading="lazy" />
              </div>
              <div className="destination-card__content">
                <h3>{item.heading}</h3>
                <p>{item.description}</p>
                <span className="destination-card__explore">
                  <span>Explore</span>
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default StunningWonders;
