import React from 'react';
import './EventImageCredit.css';

const EventImageCredit = ({ attribution, className = '' }) => {
  if (!attribution) return null;

  return (
    <a
      className={`event-image-credit ${className}`.trim()}
      href={attribution.source}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Photo by ${attribution.creator}, licensed ${attribution.license}, on Wikimedia Commons`}
    >
      Photo: {attribution.creator} · {attribution.license}
    </a>
  );
};

export default EventImageCredit;
