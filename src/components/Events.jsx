import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from './HomeSectionHelpers';
import EventImageCredit from './EventImageCredit';
import { events } from '../data/content';

const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const Events = () => {
  const [activeEvent, setActiveEvent] = useState(0);
  const [isPaused, setIsPaused] = useState(() => (
    typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ));
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const datedEvents = events
    .map((event) => {
      const month = event.calendarMonth;
      const day = event.calendarDay;
      const targetYear = event.calendarYear || currentYear + (month !== null && month < currentMonth ? 1 : 0);
      const calendarDate = month === null ? null : new Date(targetYear, month, day || 1);
      return {
        ...event,
        calendarDate,
        displayYear: calendarDate ? calendarDate.getFullYear() : event.calendarYear || null,
        sortMonth: month === null ? 12 : (month - currentMonth + 12) % 12
      };
    })
    .sort((a, b) => {
      return a.sortMonth - b.sortMonth
        || (a.calendarDay || 0) - (b.calendarDay || 0)
        || a.heading.localeCompare(b.heading);
    });

  useEffect(() => {
    if (isPaused || datedEvents.length < 2) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveEvent(index => (index + 1) % datedEvents.length);
    }, 2800);

    return () => window.clearInterval(intervalId);
  }, [isPaused, datedEvents.length]);

  const selectedEvent = datedEvents[activeEvent];

  return (
    <section className="section">
      <div className="container">
        <div className="container-xl" style={{ margin: '0 auto' }}>
          <SectionHeader
            heading={`${currentYear}–${currentYear + 1} Event Calendar`}
            description="Explore the festivals and celebrations taking place throughout the year."
          />
        </div>
        <div className="home-events-timeline" aria-label={`${currentYear} event calendar`}>
          <div className="home-events-dates" role="group" aria-label="Select an event date">
            {datedEvents.map((event, index) => (
              <button
                key={event.id}
                type="button"
                className={`home-event-date${activeEvent === index ? ' active' : ''}`}
                onClick={() => setActiveEvent(index)}
                aria-label={`${event.date}${event.displayYear && !event.date.includes(String(event.displayYear)) ? ` ${event.displayYear}` : ''}: ${event.heading}`}
                aria-pressed={activeEvent === index}
              >
                <span className="home-event-weekday">{event.calendarDay && event.calendarDate
                  ? event.calendarDate.toLocaleDateString(undefined, { weekday: 'short' })
                  : event.allYear ? 'All year' : event.calendarYear || 'Date varies'}
                </span>
                <span className="home-event-date-circle">
                  {event.calendarDay && event.calendarDate ? (
                    <>
                      <span>{event.calendarDay}</span>
                      <span>{monthLabels[event.calendarMonth]}</span>
                    </>
                  ) : event.calendarMonth !== null ? (
                    <>
                      <span>{monthLabels[event.calendarMonth]}</span>
                      <span>{event.calendarYear || 'Varies'}</span>
                    </>
                  ) : (
                    <>
                      <span>{event.allYear ? 'All' : event.calendarYear || 'Date'}</span>
                      <span>{event.allYear || event.calendarYear ? 'Year' : 'varies'}</span>
                    </>
                  )}
                </span>
              </button>
            ))}
          </div>

          {selectedEvent && (
            <article className="home-event-feature">
              <div className="home-event-feature-image">
                <img src={selectedEvent.image} alt={selectedEvent.heading} loading="lazy" />
                <Link
                  to={`/events/${selectedEvent.id}`}
                  className="home-event-feature-image-link"
                  aria-label={`Explore ${selectedEvent.heading}`}
                />
                <EventImageCredit
                  attribution={selectedEvent.imageAttribution}
                  className="event-image-credit--overlay"
                />
              </div>
              <Link to={`/events/${selectedEvent.id}`} className="home-event-feature-content">
                <span className="home-event-feature-date">
                  {selectedEvent.date}{selectedEvent.displayYear && !selectedEvent.date.includes(String(selectedEvent.displayYear))
                    ? ` · ${selectedEvent.displayYear}`
                    : ''}
                </span>
                <h3>{selectedEvent.heading}</h3>
                {selectedEvent.description && <p>{selectedEvent.description}</p>}
                <span className="home-event-feature-link">Explore event <span aria-hidden="true">→</span></span>
              </Link>
            </article>
          )}

          <button
            type="button"
            className="home-events-autoplay"
            onClick={() => setIsPaused(paused => !paused)}
            aria-pressed={isPaused}
          >
            {isPaused ? 'Play events' : 'Pause events'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
