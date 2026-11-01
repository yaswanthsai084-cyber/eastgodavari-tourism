import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowIcon, SectionHeader } from './HomeSectionHelpers';
import { jack_fruit } from '../data/content';

const GatewayToEastGodavari = () => (
  <section className="section">
    <div className="container">
      <div className="gateway-section">
        <div className="gateway-text">
          <SectionHeader heading="Gateway to East Godavari" description="Let Land of Riches inspire your next journey" />
          <div className="gateway-feature">
            <h3>Jackfruit</h3>
            <p>In East Godavari, jackfruit is more than food-it is part of daily life and tradition. Known for its versatility and deep cultural roots, jackfruit (chakka) is East Godavari's official state fruit and a rising global culinary trend</p>
            <Link to="/destinations" className="hero-btn" style={{ color: '#333', borderColor: '#d9d9d9', marginTop: '1rem', display: 'inline-flex', alignItems: 'center' }}>
              More <ArrowIcon color="#333" />
            </Link>
          </div>
        </div>
        <div className="gateway-image">
          <img src={jack_fruit} alt="Jackfruit" />
        </div>
      </div>
    </div>
  </section>
);

export default GatewayToEastGodavari;
