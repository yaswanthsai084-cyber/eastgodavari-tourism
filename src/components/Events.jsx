import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from './HomeSectionHelpers';
import { events } from '../data/content';

const Events = () => (
  <section className="section">
    <div className="container">
      <div className="container-xl" style={{ margin: '0 auto' }}>
        <SectionHeader heading="Events" description="The land of rich cultures and traditions! Mark the major events for your next visit." />
      </div>
      <div className="events-grid">
        {events.slice(0, 8).map((event, i) => (
          <Link key={i} to={`/events/${event.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <article className="event-card" style={{ cursor: 'pointer' }}>
              <div className="event-image-wrapper">
                <img src={event.image} alt={event.heading} loading="lazy" />
                <div className="event-image-overlay"></div>
                <span className="event-date-badge" style={{ position: 'absolute', top: '14px', right: '14px', zIndex: 2 }}>{event.date}</span>
              </div>
              <div className="event-content">
                <h4>{event.heading}</h4>
                {event.description && <p>{event.description}</p>}
              </div>
              <div className="event-explore-btn">
                <span>Explore</span>
                <span className="arrow" style={{ fontSize: '18px' }}>→</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Events;
