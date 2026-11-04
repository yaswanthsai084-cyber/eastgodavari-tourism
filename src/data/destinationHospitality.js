const hotelImage = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80';
const roomImage = 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80';
const restaurantImage = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80';
const resortImage = 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80';
const foodImage = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80';

const serviceSets = {
  rajahmundry: {
    nearby: 'Rajamahendravaram / Rajahmundry',
    items: [
      { title: 'River Bay Resorts', type: 'Resort & restaurant', image: resortImage, description: 'Riverfront rooms and dining near Gautama Ghat.', source: 'https://www.riverbay.co.in/' },
      { title: 'Hotel Shelton Rajamahendri', type: 'Hotel', image: hotelImage, description: 'A city stay commonly used as a base for the Godavari region.', source: 'https://tourism.ap.gov.in/assets/img/Brochures/Konaseema%20Brochure.pdf' },
      { title: 'Anand Regency', type: 'Hotel & dining', image: roomImage, description: 'A Rajamahendravaram accommodation option with in-house dining.', source: 'https://tourism.ap.gov.in/assets/img/Brochures/Konaseema%20Brochure.pdf' }
    ]
  },
  kakinada: {
    nearby: 'Kakinada',
    items: [
      { title: 'Grand Kakinada by GRT Hotels', type: 'Hotel & restaurant', image: hotelImage, description: 'City hotel with an in-house restaurant near Kakinada Town Railway Station.', source: 'https://www.grthotels.com/grand-kakinada/' },
      { title: 'Svenska Design Hotel', type: 'Hotel & dining', image: roomImage, description: 'A full-service hotel in the heart of Kakinada.', source: 'https://www.svenskahotels.com/KakinadaHotel' },
      { title: 'Subbayya Gari Hotel', type: 'Vegetarian restaurant', image: foodImage, description: 'A well-known Kakinada vegetarian dining option for Andhra cuisine.', source: 'https://en.wikipedia.org/wiki/Subbayya_Gari_Hotel' }
    ]
  },
  amalapuram: {
    nearby: 'Amalapuram / Konaseema',
    items: [
      { title: 'New Cotton Guest House', type: 'Guest house', image: roomImage, description: 'Government guest-house accommodation in Amalapuram.', source: 'https://eastgodavari.ap.gov.in/temples/amalapuram/' },
      { title: 'Panchayatraj Guest House', type: 'Guest house', image: hotelImage, description: 'A listed guest-house option for visitors staying in Amalapuram.', source: 'https://eastgodavari.ap.gov.in/temples/amalapuram/' },
      { title: 'Konaseema local dining', type: 'Restaurant area', image: foodImage, description: 'Amalapuram town is the practical dining base for Konaseema excursions.', source: 'https://konaseema.ap.gov.in/' }
    ]
  },
  annavaram: {
    nearby: 'Annavaram',
    items: [
      { title: 'Satyadeva Residency', type: 'Hotel & restaurant', image: hotelImage, description: 'Rooms and Amaravathi vegetarian restaurant near Annavaram Devasthanam.', source: 'https://satyadevaresidency.com/' },
      { title: 'Annavaram Devasthanam accommodation', type: 'Temple guest houses', image: roomImage, description: 'Official temple accommodation ranging from rooms to AC suites.', source: 'https://annavaramdevasthanam.nic.in/SideMenu/Accommodation' },
      { title: 'Amaravathi Vegetarian Restaurant', type: 'Vegetarian restaurant', image: restaurantImage, description: 'Vegetarian dining listed by Satyadeva Residency near the temple.', source: 'https://satyadevaresidency.com/' }
    ]
  },
  pithapuram: {
    nearby: 'Pithapuram',
    items: [
      { title: 'Hotel Gokulam Grand', type: 'Hotel & restaurant', image: hotelImage, description: 'AC rooms and an in-house multi-cuisine restaurant open to visitors.', source: 'https://www.hotelgokulamgrand.com/' },
      { title: 'Gokulam Grand multi-cuisine restaurant', type: 'Restaurant', image: restaurantImage, description: 'Vegetarian and non-vegetarian meals for breakfast, lunch, and dinner.', source: 'https://www.hotelgokulamgrand.com/' },
      { title: 'Pithapuram town dining', type: 'Restaurant area', image: foodImage, description: 'Local food options around the temple and town centre.', source: 'https://www.hotelgokulamgrand.com/' }
    ]
  },
  forest: {
    nearby: 'Maredumilli / Rampachodavaram',
    items: [
      { title: 'Maredumilli Forest Rest House', type: 'Forest stay', image: roomImage, description: 'A forest-area stay option; confirm availability and access before travel.', source: 'https://eastgodavari.ap.gov.in/tourist-place/maredumilli/' },
      { title: 'Forest-edge eco stays', type: 'Eco stay', image: resortImage, description: 'Local eco-tourism accommodation around Maredumilli and Rampachodavaram.', source: 'https://eastgodavari.ap.gov.in/eco-tourism/' },
      { title: 'Agency-area local dining', type: 'Local food', image: foodImage, description: 'Simple local meals are available in Rampachodavaram; carry supplies for remote trails.', source: 'https://eastgodavari.ap.gov.in/eco-tourism/' }
    ]
  },
  default: {
    nearby: 'nearest regional town',
    items: [
      { title: 'Regional hotel options', type: 'Hotel', image: hotelImage, description: 'Use the nearest town as a base for this destination.', source: 'https://eastgodavari.ap.gov.in/tourism/' },
      { title: 'Regional dining options', type: 'Restaurant', image: restaurantImage, description: 'Find local meals and refreshments in the nearest town.', source: 'https://eastgodavari.ap.gov.in/tourism/' },
      { title: 'Local stay options', type: 'Guest house / lodge', image: roomImage, description: 'Check current availability locally before travelling to remote areas.', source: 'https://eastgodavari.ap.gov.in/tourism/' }
    ]
  }
};

const getLocationKey = (location = '') => {
  const normalized = location.toLowerCase();
  if (normalized.includes('rajah') || normalized.includes('rajamahend') || normalized.includes('dowleswaram') || normalized.includes('korukonda') || normalized.includes('pattiseema') || normalized.includes('kovvur') || normalized.includes('kadiyam')) return 'rajahmundry';
  if (normalized.includes('kakinada') || normalized.includes('uppada') || normalized.includes('coringa') || normalized.includes('yanam') || normalized.includes('draksharamam') || normalized.includes('gollala') || normalized.includes('bikkavolu') || normalized.includes('samarlakota') || normalized.includes('muramalla')) return 'kakinada';
  if (normalized.includes('amalapuram') || normalized.includes('konaseema') || normalized.includes('antarvedi') || normalized.includes('ainavilli') || normalized.includes('dindi') || normalized.includes('mummidivaram') || normalized.includes('atreyapuram') || normalized.includes('razole') || normalized.includes('uppalaguptam') || normalized.includes('polavaram') || normalized.includes('kothapeta') || normalized.includes('ambajipeta') || normalized.includes('adurru')) return 'amalapuram';
  if (normalized.includes('annavaram')) return 'annavaram';
  if (normalized.includes('pithapuram') || normalized.includes('peddapuram')) return 'pithapuram';
  if (normalized.includes('maredumilli') || normalized.includes('rampachodavaram') || normalized.includes('addateegala') || normalized.includes('seethapalli') || normalized.includes('sokuleru')) return 'forest';
  return 'default';
};

export const getDestinationHospitality = (location) => {
  const key = getLocationKey(location);
  const serviceSet = serviceSets[key] || serviceSets.default;
  return {
    nearby: serviceSet.nearby,
    items: serviceSet.items.map((item, index) => ({
      ...item,
      id: `${key}-hospitality-${index}`,
      location: serviceSet.nearby,
      mapQuery: `${item.title}, ${serviceSet.nearby}`
    }))
  };
};

export const getHospitalityServiceById = (id) => {
  for (const key of Object.keys(serviceSets)) {
    const hospitality = getDestinationHospitality(serviceSets[key].nearby);
    const service = hospitality.items.find((item) => item.id === id);
    if (service) return service;
  }
  return null;
};
