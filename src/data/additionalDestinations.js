import exploreYanamBeach from '../assets/images/explore-yanam-beach.jpg';
import antarvediBeachImage from '../assets/images/antarvedi-beach.png';
import godavariSeaMouthImage from '../assets/images/godavari-sea-mouth.png';
import jalataranginiWaterfallsImage from '../assets/images/jalatarangini-waterfalls.png';
import swarnadharaWaterfallsImage from '../assets/images/swarnadhara-waterfalls.png';
import bhupathipalemReservoirImage from '../assets/images/bhupathipalem-reservoir.png';
import yeleruReservoirImage from '../assets/images/yeleru-reservoir.png';
import sokuleruVaguViewpointImage from '../assets/images/sokuleru-vagu-viewpoint.png';
import pinjarakondaImage from '../assets/images/pinjarakonda.png';
import seethapalliImage from '../assets/images/seethapalli.png';
import coringaWildlifeSanctuaryImage from '../assets/images/coringa-wildlife-sanctuary.png';
import rampachodavaramForestImage from '../assets/images/rampachodavaram-forest.png';
import addateegalaForestImage from '../assets/images/addateegala-forest.png';
import kadiamNurseriesImage from '../assets/images/kadiam-nurseries.png';
import exploreCoringaBeach from '../assets/images/explore-coringa-beach.jpg';
import exploreGautamiRiver from '../assets/images/explore-gautami-river.jpg';
import exploreAmruthandhraWaterfall from '../assets/images/explore-amruthandhra-waterfall.jpg';
import exploreGodavariWaterfall from '../assets/images/explore-godavari-waterfall.jpg';
import exploreRampaWaterfall from '../assets/images/explore-rampa-waterfall.jpg';
import exploreMaridimilliHill from '../assets/images/explore-maredimilli-hill.jpg';
import exploreCoringaWildlife from '../assets/images/explore-coringa-willdlife.jpg';
import explorePapikondaWildlife from '../assets/images/explore-papikonda-wildlife.jpg';
import contactKadiyam from '../assets/images/contact-kadiyam.jpg';
import exploreVinayakaTemple from '../assets/images/explore-vinayaka-temple.jpg';
import exploreRamanayuniTemple from '../assets/images/explore-ramanayuni-temple.jpg';
import exploreAmalapuramTemple from '../assets/images/explore-amalapuram-temple.jpg';
import annavaramTempleImage from '../assets/images/annavaram-satyanarayana-temple.png';
import draksharamamTempleImage from '../assets/images/draksharamam-bhimeswara-temple.png';
import antarvediTempleImage from '../assets/images/antarvedi-lakshmi-narasimha-temple.png';
import ainavilliTempleImage from '../assets/images/ainavilli-siddhi-vinayaka-temple.png';
import bikkavoluGolingeswaraTempleImage from '../assets/images/bikkavolu-golingeswara-temple.png';
import pithapuramKukkuteswaraTempleImage from '../assets/images/pithapuram-kukkuteswara-temple.png';
import iskconTempleImage from '../assets/images/iskcon-rajamahendravaram.png';
import adurruBuddhistSiteImage from '../assets/images/adurru-buddhist-site.png';
import sirArthurCottonMuseumImage from '../assets/images/sir-arthur-cotton-museum.png';
import havelockBridgeImage from '../assets/images/havelock-bridge.png';
import peddapuramFortCardImage from '../assets/images/peddapuram-fort-card.png';
import pushkarGhatImage from '../assets/images/pushkar-ghat.png';
import gowthamiGhatImage from '../assets/images/gowthami-ghat.png';
import saraswatiGhatImage from '../assets/images/saraswati-ghat.png';
import pattiseemaImage from '../assets/images/pattiseema.png';
import exploreKorukondaFort from '../assets/images/explore-korukonda-fort.jpg';
import explorePeddapuramFort from '../assets/images/explore-peddapuram-fort.jpg';
import exploreRajahmundryBridge from '../assets/images/explore-rajahmundry-bridge.jpg';
import exploreCottonBridge from '../assets/images/heritage-cottonbridge.webp';
import exploreKotipalliRiver from '../assets/images/explore-kotipalli-river.jpg';
import exploreYalamanchiliLanka from '../assets/images/explore-yalamanchili-lanka.jpg';
import contactAmalapuram from '../assets/images/contact-amalapuram.jpg';
import contactPeddapuram from '../assets/images/contact-peddapuram.jpg';
import eventPushkaralu from '../assets/images/event-godavari-pushkaralu.png';

const destinationGroups = [
  {
    category: 'beaches',
    categoryLabel: 'beaches and coastal attractions',
    images: [exploreYanamBeach, exploreCoringaBeach, exploreGautamiRiver],
    places: [
      ['Antarvedi Beach', 'Antarvedi', undefined, antarvediBeachImage],
      ['Godavari Sea Mouth', 'Antarvedi', undefined, godavariSeaMouthImage]
    ]
  },
  {
    category: 'waterfalls',
    categoryLabel: 'waterfalls and nature attractions',
    images: [exploreAmruthandhraWaterfall, exploreGodavariWaterfall, exploreRampaWaterfall],
    places: [
      ['Jalatarangini Waterfalls', 'Rampachodavaram', undefined, jalataranginiWaterfallsImage],
      ['Swarnadhara Waterfalls', 'Rampachodavaram', undefined, swarnadharaWaterfallsImage],
      ['Bhupathipalem Reservoir', 'Rampachodavaram', undefined, bhupathipalemReservoirImage],
      ['Yeleru Reservoir', 'Yeleswaram', undefined, yeleruReservoirImage],
      ['Sokuleru Vagu Viewpoint', 'Sokuleru', undefined, sokuleruVaguViewpointImage],
      ['Pinjarakonda', 'Addateegala', undefined, pinjarakondaImage],
      ['Seethapalli', 'Seethapalli', undefined, seethapalliImage]
    ]
  },
  {
    category: 'wildlife',
    categoryLabel: 'forests and wildlife attractions',
    images: [exploreMaridimilliHill, exploreCoringaWildlife, explorePapikondaWildlife, contactKadiyam],
    places: [
      ['Rampachodavaram Forest', 'Rampachodavaram', undefined, rampachodavaramForestImage],
      ['Addateegala Forest', 'Addateegala', undefined, addateegalaForestImage],
      ['Kadiam Nurseries', 'Kadiam', undefined, kadiamNurseriesImage]
    ]
  },
  {
    category: 'spirituality',
    categoryLabel: 'temples and religious places',
    images: [exploreAmalapuramTemple, exploreVinayakaTemple, exploreRamanayuniTemple],
    places: [
      ['Annavaram Satyanarayana Swamy Temple', 'Annavaram', undefined, annavaramTempleImage],
      ['Draksharamam Bhimeswara Swamy Temple', 'Draksharamam', undefined, draksharamamTempleImage],
      ['Antarvedi Lakshmi Narasimha Swamy Temple', 'Antarvedi', undefined, antarvediTempleImage],
      ['Ainavilli Siddhi Vinayaka Temple', 'Ainavilli', undefined, ainavilliTempleImage],
      ['Bikkavolu Golingeswara Swamy Temple', 'Bikkavolu', undefined, bikkavoluGolingeswaraTempleImage],
      ['Pithapuram Kukkuteswara Swamy Temple', 'Pithapuram', undefined, pithapuramKukkuteswaraTempleImage],
      ['ISKCON Temple, Rajamahendravaram', 'Rajamahendravaram', undefined, iskconTempleImage]
    ]
  },
  {
    category: 'heritage',
    categoryLabel: 'historical and heritage places',
    images: [exploreRajahmundryBridge, exploreCottonBridge, exploreKorukondaFort],
    places: [
      ['Adurru Buddhist Archaeological Site', 'Adurru', undefined, adurruBuddhistSiteImage],
      ['Sir Arthur Cotton Museum', 'Dowleswaram', undefined, sirArthurCottonMuseumImage],
      ['Havelock Bridge', 'Rajamahendravaram', undefined, havelockBridgeImage],
      ['Peddapuram Fort', 'Peddapuram', 8, peddapuramFortCardImage]
    ]
  },
  {
    category: 'rivers',
    categoryLabel: 'rivers, ghats, and scenic locations',
    images: [exploreKotipalliRiver, exploreGautamiRiver, exploreYalamanchiliLanka],
    places: [
      ['Pushkar Ghat', 'Rajamahendravaram', undefined, pushkarGhatImage],
      ['Gowthami Ghat', 'Rajamahendravaram', undefined, gowthamiGhatImage],
      ['Saraswati Ghat', 'Rajamahendravaram', undefined, saraswatiGhatImage],
      ['Pattiseema', 'Pattiseema', undefined, pattiseemaImage],
      ['Seethanagaram Godavari Riverbank', 'Seethanagaram'],
      ['Goshpada Kshetram', 'Kovvur']
    ]
  },
  {
    category: 'villages',
    categoryLabel: 'villages and countryside tourism places',
    images: [contactAmalapuram, contactPeddapuram, contactKadiyam],
    places: [
      ['Kadiam', 'Kadiam'],
      ['Atreyapuram', 'Atreyapuram'],
      ['Dindi', 'Dindi'],
      ['Mummidivaram', 'Mummidivaram'],
      ['Razole', 'Razole'],
      ['Uppalaguptam', 'Uppalaguptam'],
      ['Amalapuram', 'Amalapuram'],
      ['I. Polavaram', 'I. Polavaram'],
      ['Kothapeta', 'Kothapeta'],
      ['Ambajipeta', 'Ambajipeta']
    ]
  },
  {
    category: 'parks',
    categoryLabel: 'parks and recreational attractions',
    images: [exploreKotipalliRiver, contactKadiyam, eventPushkaralu],
    places: [
      ['Godavari Maha Pushkara Vanam', 'Rajamahendravaram'],
      ['P.V. Narasimha Rao Park', 'Rajamahendravaram'],
      ['Gauthami Park', 'Rajamahendravaram'],
      ['River Bay Resort', 'Rajamahendravaram']
    ]
  }
];

let nextDestinationId = 43;

export const additionalDestinations = destinationGroups.flatMap((group) =>
  group.places.map(([title, town, existingId, customImage], index) => {
    const location = `${town}, East Godavari`;
    const description = `Explore ${title} in the ${group.categoryLabel} of the East Godavari region.`;
    const image = customImage || group.images[index % group.images.length];

    return {
      id: existingId || nextDestinationId++,
      category: group.category,
      title,
      alt: title,
      src: image,
      image,
      description,
      fullDescription: [
        `${title} is included among the ${group.categoryLabel} in the East Godavari region. It is located in or near ${town}. Check current local access, conditions, and visitor guidance before travelling.`
      ],
      location,
      address: `${town}, Andhra Pradesh`
    };
  })
);
