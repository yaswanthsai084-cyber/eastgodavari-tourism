import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from './HomeSectionHelpers';
import { photoGallery } from '../data/content';

const PhotoGallery = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(() => (
    typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ));
  const showPrevious = () => setActiveSlide(index => (index - 1 + photoGallery.length) % photoGallery.length);
  const showNext = () => setActiveSlide(index => (index + 1) % photoGallery.length);

  useEffect(() => {
    if (isAutoplayPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveSlide(index => (index + 1) % photoGallery.length);
    }, 2500);

    return () => window.clearInterval(intervalId);
  }, [isAutoplayPaused]);

  return (
    <section className="section photo-gallery-section">
      <div className="container">
        <div className="container-xl" style={{ margin: '0 auto' }}>
          <SectionHeader heading="Photo Gallery" description="Photographs that capture the spirit and splendour of Land of Riches." />
        </div>
        <div className="gallery-slider" aria-roledescription="carousel" aria-label="Photo Gallery">
          <div className="gallery-slides-window">
            <div className="gallery-slides-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
              {photoGallery.map((item, index) => (
                <Link
                  key={item.heading}
                  to="/photo-gallery"
                  className="gallery-slide"
                  aria-label={`${item.heading}: ${item.description}`}
                  aria-hidden={activeSlide !== index}
                  tabIndex={activeSlide === index ? 0 : -1}
                >
                  <img src={item.image} alt={item.heading} loading="lazy" />
                  <div className="gallery-slide-caption">
                    <h3>{item.heading}</h3>
                    <p>{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
            <button type="button" className="gallery-slide-control gallery-slide-previous" onClick={showPrevious} aria-label="Previous photo">
              <span aria-hidden="true">‹</span>
            </button>
            <button type="button" className="gallery-slide-control gallery-slide-next" onClick={showNext} aria-label="Next photo">
              <span aria-hidden="true">›</span>
            </button>
          </div>
          <div className="gallery-slide-indicators" role="group" aria-label="Choose a photo">
            {photoGallery.map((item, index) => (
              <button
                key={item.heading}
                type="button"
                className={`gallery-slide-indicator${activeSlide === index ? ' active' : ''}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show photo ${index + 1}: ${item.heading}`}
                aria-pressed={activeSlide === index}
              />
            ))}
          </div>
          <button
            type="button"
            className="gallery-autoplay-toggle"
            onClick={() => setIsAutoplayPaused(paused => !paused)}
            aria-pressed={isAutoplayPaused}
          >
            {isAutoplayPaused ? 'Play slides' : 'Pause slides'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
