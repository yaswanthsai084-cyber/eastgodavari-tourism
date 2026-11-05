import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BackButton from './components/BackButton';
import Home from './pages/Home';

// Keep the initial bundle focused on the home page. Other pages load only when visited.
const Destinations = lazy(() => import('./pages/destination/Destinations'));
const DestinationDetail = lazy(() => import('./pages/destination/DestinationDetail'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const EventDetail = lazy(() => import('./pages/EventDetail'));
const ExperiencesPage = lazy(() => import('./pages/experience/ExperiencesPage'));
const ExperienceDetail = lazy(() => import('./pages/experience/ExperienceDetail'));
const DestinationDetailPage = lazy(() => import('./pages/destination/DestinationDetailPage'));
const PlanTrip = lazy(() => import('./pages/plan-trip/PlanTrip'));
const PhotoGallery = lazy(() => import('./pages/PhotoGallery'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/plan-trip/Contact'));
const WhereToGo = lazy(() => import('./pages/WhereToGo'));
const TrendingPlaces = lazy(() => import('./pages/TrendingPlaces'));
const DestinationServices = lazy(() => import('./pages/help/DestinationServices'));
const NearbyDestinationDetail = lazy(() => import('./pages/destination/NearbyDestinationDetail'));
const TourGuide = lazy(() => import('./pages/plan-trip/TourGuide'));
const PoliceServices = lazy(() => import('./pages/help/PoliceServices'));
const HealthServices = lazy(() => import('./pages/help/HealthServices'));
const ReligionPage = lazy(() => import('./pages/ReligionPage'));
const Spirituality = lazy(() => import('./pages/spirituality/Spirituality'));
const Temples = lazy(() => import('./pages/spirituality/Temples'));
const Churches = lazy(() => import('./pages/spirituality/Churches'));
const Masjids = lazy(() => import('./pages/spirituality/Masjids'));
const TouristOffice = lazy(() => import('./pages/plan-trip/TouristOffice'));
const AllTouristOffices = lazy(() => import('./pages/plan-trip/AllTouristOffices'));
const AllTourGuides = lazy(() => import('./pages/plan-trip/AllTourGuides'));
const HowToReach = lazy(() => import('./pages/plan-trip/HowToReach'));
const EastGodavariMap = lazy(() => import('./pages/plan-trip/EastGodavariMap'));
const LivingFacilities = lazy(() => import('./pages/plan-trip/LivingFacilities'));
const HospitalityDetail = lazy(() => import('./pages/HospitalityDetail'));

const RouteFallback = () => (
  <div className="route-loading" role="status" aria-live="polite">Loading page…</div>
);

// ============ SCROLL TO TOP ============
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// ============ SCROLL TO TOP BUTTON ============
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      style={{ cursor: 'pointer' }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 19V5M12 5L7 10M12 5L17 10" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
};

// ============ APP CONTENT ============
function AppContent() {
  const location = useLocation();
  const hasPageLoadingEffects = /^\/(destinations|destination|nearby-destination|destination-page|experiences|experience|services|spirituality|hospitality)(\/|$)/.test(location.pathname);
  
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <ScrollToTopButton />
      <BackButton />
      <main
        key={hasPageLoadingEffects ? location.pathname : undefined}
        className={[
          location.pathname === '/' ? 'home-page' : '',
          location.pathname === '/spirituality' ? 'spirituality-page-main' : '',
          hasPageLoadingEffects ? 'page-loading-effects' : ''
        ].filter(Boolean).join(' ')}
      >
        <Suspense fallback={<RouteFallback />}>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending-places" element={<TrendingPlaces />} />
          <Route path="/where-to-go" element={<WhereToGo />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
          <Route path="/nearby-destination/:id" element={<NearbyDestinationDetail />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/spirituality" element={<Spirituality />} />
          <Route path="/spirituality/temples" element={<Temples />} />
          <Route path="/spirituality/churches" element={<Churches />} />
          <Route path="/spirituality/masjids" element={<Masjids />} />
          <Route path="/religion-east-godavari" element={<ReligionPage />} />
          <Route path="/wellness-east-godavari" element={<PhotoGallery />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/experience/:category/:experienceId" element={<ExperienceDetail />} />
          <Route path="/destination-page/:id" element={<DestinationDetailPage />} />
          <Route path="/plan-trip" element={<PlanTrip />} />          
          <Route path="/photo-gallery" element={<PhotoGallery />} />
          <Route path="/video-gallery" element={<PhotoGallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:destinationId" element={<DestinationServices />} />
          <Route path="/all-tour-guides" element={<AllTourGuides />} />
          <Route path="/how-to-reach" element={<HowToReach />} />
          <Route path="/east-godavari-map" element={<EastGodavariMap />} />
          <Route path="/living-facilities" element={<LivingFacilities />} />
          <Route path="/hospitality/:id" element={<HospitalityDetail />} />
          <Route path="/all-tourist-offices" element={<AllTouristOffices />} />
          <Route path="/services/:destinationId/tourist-office" element={<TouristOffice />} />
          <Route path="/services/:destinationId/tour-guide" element={<TourGuide />} />
          <Route path="/services/:destinationId/police-services" element={<PoliceServices />} />
          <Route path="/services/:destinationId/health-services" element={<HealthServices />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function AppWrapper() {
  const location = useLocation();
  
  return (
    <div className={location.pathname === '/' ? 'home-page' : ''}>
      <AppContent />
    </div>
  );
}

// ============ APP ============
function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
