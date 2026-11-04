import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getHospitalityServiceById } from '../data/destinationHospitality';

const HospitalityDetail = () => {
  const { id } = useParams();
  const service = getHospitalityServiceById(id);

  if (!service) {
    return (
      <div className="hospitality-detail-page hospitality-detail-not-found">
        <h1>Hospitality service not found</h1>
        <Link to="/destinations">Back to destinations</Link>
      </div>
    );
  }

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(service.mapQuery)}`;
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(service.mapQuery)}&output=embed`;

  return (
    <div className="hospitality-detail-page">
      <div className="hospitality-detail-container">
        <Link to="/destinations" className="hospitality-detail-back">← Back to destinations</Link>

        <div className="hospitality-detail-card">
          <div className="hospitality-detail-image-wrap">
            <img src={service.image} alt={service.title} className="hospitality-detail-image" />
          </div>
          <div className="hospitality-detail-content">
            <span className="destination-detail-hospitality-type">{service.type}</span>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
            <p className="hospitality-detail-location">📍 {service.location}</p>
            <div className="hospitality-detail-actions">
              <a href={mapUrl} target="_blank" rel="noreferrer" className="hospitality-map-button">Open in Google Maps</a>
              <a href={service.source} target="_blank" rel="noreferrer" className="hospitality-source-button">Official details</a>
            </div>
          </div>
        </div>

        <section className="hospitality-map-section" aria-labelledby="hospitality-map-title">
          <h2 id="hospitality-map-title">Location</h2>
          <iframe
            src={embedUrl}
            title={`${service.title} map location`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </div>
    </div>
  );
};

export default HospitalityDetail;
