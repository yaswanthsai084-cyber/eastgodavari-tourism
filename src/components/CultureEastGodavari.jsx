import React from 'react';
import { SectionHeader } from './HomeSectionHelpers';
import performingArtsImage from '../assets/images/culture-performing-arts.png';
import handloomWeavingImage from '../assets/images/culture-handloom-weaving.png';
import festivitiesImage from '../assets/images/culture-festivities.png';
import prabhalaTeerthamImage from '../assets/images/culture-prabhala-teertham.png';
import './CultureEastGodavari.css';

const cultureCards = [
  {
    title: 'Classical Dance & Music',
    description: 'Traditional dance and music bring the region’s rich cultural heritage to life.',
    image: performingArtsImage
  },
  {
    title: 'Handloom Weaving',
    description: 'Discover the skilled craftsmanship behind East Godavari’s handwoven textiles.',
    image: handloomWeavingImage
  },
  {
    title: 'Festivals & Traditions',
    description: 'Colorful celebrations bring communities together and honor local customs.',
    image: festivitiesImage
  },
  {
    title: 'Prabhala Teertham',
    description: 'A vibrant Sankranti-season tradition celebrated with community processions in Konaseema.',
    image: prabhalaTeerthamImage
  }
];

const CultureEastGodavari = () => (
  <section className="section culture-east-godavari-section">
    <div className="container">
      <SectionHeader
        heading="Culture of East Godavari"
        description="Experience the traditions, artistry, and celebrations that make East Godavari unique."
      />
      <div className="culture-east-godavari-grid">
        {cultureCards.map((card) => (
          <article className="culture-east-godavari-card" key={card.title}>
            <div className="culture-east-godavari-card-image">
              <img src={card.image} alt={card.title} loading="lazy" />
            </div>
            <div className="culture-east-godavari-card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default CultureEastGodavari;
