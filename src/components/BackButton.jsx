import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BackButton.css';

const routesWithBackLinks = [
  /^\/about$/,
  /^\/(?:photo-gallery|video-gallery|wellness-east-godavari)$/,
  /^\/services\/[^/]+(?:\/(?:tourist-office|tour-guide|police-services|health-services))?$/,
  /^\/(?:all-tour-guides|all-tourist-offices|how-to-reach|east-godavari-map|living-facilities)$/
];

const getFallbackPath = (pathname) => {
  if (/^\/(?:destination|destination-page|nearby-destination)\//.test(pathname)) return '/destinations';
  if (/^\/events\/[^/]+$/.test(pathname)) return '/events';
  if (/^\/experience\/[^/]+\/[^/]+$/.test(pathname)) return '/experiences';
  if (/^\/spirituality\/(?:temples|churches|masjids)$/.test(pathname)) return '/spirituality';
  if (/^\/services\/[^/]+\//.test(pathname)) return `/services/${pathname.split('/')[2]}`;
  if (/^\/services\/[^/]+$/.test(pathname)) return '/destinations';
  if (/^\/(?:all-tour-guides|all-tourist-offices|how-to-reach|east-godavari-map|living-facilities)$/.test(pathname)) return '/plan-trip';
  return '/';
};

const BackButton = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const historyIndex = window.history.state?.idx;
  const isHome = pathname === '/';
  const isDestinationPage = /^\/(?:destinations|destination\/[^/]+|destination-page\/[^/]+|nearby-destination\/[^/]+)$/.test(pathname);
  const isTopBackPage = isDestinationPage
    || pathname === '/experiences'
    || /^\/experience\/[^/]+\/[^/]+$/.test(pathname)
    || pathname === '/plan-trip'
    || pathname === '/contact'
    || /^\/spirituality(?:\/(?:temples|churches|masjids))?$/.test(pathname)
    || pathname === '/trending-places';
  const canNavigateBack = (Number.isInteger(historyIndex) && historyIndex > 0) || (isHome && window.history.length > 1);

  if (isHome || routesWithBackLinks.some((route) => route.test(pathname))) return null;

  const handleBack = () => {
    if (canNavigateBack) {
      navigate(-1);
      return;
    }
    navigate(getFallbackPath(pathname));
  };

  return (
    <button
      type="button"
      className={`global-back-button${isTopBackPage ? ' global-back-button--top' : ''}`}
      onClick={handleBack}
      disabled={isHome && !canNavigateBack}
      aria-label="Go back"
      title="Go back"
    >
      <ArrowLeft size={20} aria-hidden="true" />
    </button>
  );
};

export default BackButton;