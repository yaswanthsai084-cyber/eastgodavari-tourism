import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BackButton from './components/BackButton';
import Home from './pages/Home';
import Destinations from './pages/destination/Destinations';
import DestinationDetail from './pages/destination/DestinationDetail';
import EventsPage from './pages/EventsPage';
import EventDetail from './pages/EventDetail';
import ExperiencesPage from './pages/experience/ExperiencesPage';
import ExperienceDetail from './pages/experience/ExperienceDetail';
import DestinationDetailPage from './pages/destination/DestinationDetailPage';
import PlanTrip from './pages/plan-trip/PlanTrip';
import PhotoGallery from './pages/PhotoGallery';
import About from './pages/About';
import Contact from './pages/plan-trip/Contact';
import WhereToGo from './pages/WhereToGo';
import TrendingPlaces from './pages/TrendingPlaces';
import DestinationServices from './pages/help/DestinationServices';
import NearbyDestinationDetail from './pages/destination/NearbyDestinationDetail';
import TourGuide from './pages/plan-trip/TourGuide';
import PoliceServices from './pages/help/PoliceServices';
import HealthServices from './pages/help/HealthServices';
import ReligionPage from './pages/ReligionPage';
import Spirituality from './pages/spirituality/Spirituality';
import Temples from './pages/spirituality/Temples';
import Churches from './pages/spirituality/Churches';
import Masjids from './pages/spirituality/Masjids';
import TouristOffice from './pages/plan-trip/TouristOffice';
import AllTouristOffices from './pages/plan-trip/AllTouristOffices';
import AllTourGuides from './pages/plan-trip/AllTourGuides';
import HowToReach from './pages/plan-trip/HowToReach';
import EastGodavariMap from './pages/plan-trip/EastGodavariMap';
import LivingFacilities from './pages/plan-trip/LivingFacilities';

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
  
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <ScrollToTopButton />
      <BackButton />
      <main className={location.pathname === '/' ? 'home-page' : location.pathname === '/spirituality' ? 'spirituality-page-main' : ''}>
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
          <Route path="/all-tourist-offices" element={<AllTouristOffices />} />
          <Route path="/services/:destinationId/tourist-office" element={<TouristOffice />} />
          <Route path="/services/:destinationId/tour-guide" element={<TourGuide />} />
          <Route path="/services/:destinationId/police-services" element={<PoliceServices />} />
          <Route path="/services/:destinationId/health-services" element={<HealthServices />} />
        </Routes>
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
