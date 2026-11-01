import exploreYanamBeach from '../assets/images/explore-yanam-beach.jpg';
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
      ['Vodalarevu Beach', 'Vodalarevu'],
      ['Antarvedi Beach', 'Antarvedi'],
      ['Sagar Sangamam', 'Sakinetipalli'],
      ['Godavari Sea Mouth', 'Antarvedi']
    ]
  },
  {
    category: 'waterfalls',
    categoryLabel: 'waterfalls and nature attractions',
    images: [exploreAmruthandhraWaterfall, exploreGodavariWaterfall, exploreRampaWaterfall],
    places: [
      ['Jalatarangini Waterfalls', 'Rampachodavaram'],
      ['Swarnadhara Waterfalls', 'Rampachodavaram'],
      ['Bhupathipalem Reservoir', 'Rampachodavaram'],
      ['Yeleru Reservoir', 'Yeleswaram'],
      ['Sokuleru Vagu Viewpoint', 'Sokuleru'],
      ['Pinjarakonda', 'Addateegala'],
      ['Seethapalli', 'Seethapalli']
    ]
  },
  {
    category: 'wildlife',
    categoryLabel: 'forests and wildlife attractions',
    images: [exploreMaridimilliHill, exploreCoringaWildlife, explorePapikondaWildlife, contactKadiyam],
    places: [
      ['Rampachodavaram Forest', 'Rampachodavaram'],
      ['Addateegala Forest', 'Addateegala'],
      ['Seethapalli Forest', 'Seethapalli'],
      ['Kadiam Nurseries', 'Kadiam']
    ]
  },
  {
    category: 'spirituality',
    categoryLabel: 'temples and religious places',
    images: [exploreAmalapuramTemple, exploreVinayakaTemple, exploreRamanayuniTemple],
    places: [
      ['Annavaram Satyanarayana Swamy Temple', 'Annavaram'],
      ['Draksharamam Bhimeswara Swamy Temple', 'Draksharamam'],
      ['Antarvedi Lakshmi Narasimha Swamy Temple', 'Antarvedi'],
      ['Ainavilli Siddhi Vinayaka Temple', 'Ainavilli'],
      ['Ryali Jaganmohini Kesava Swamy Temple', 'Ryali'],
      ['Bikkavolu Golingeswara Swamy Temple', 'Bikkavolu'],
      ['Pithapuram Kukkuteswara Swamy Temple', 'Pithapuram'],
      ['Pithapuram Puruhootika Devi Temple', 'Pithapuram'],
      ['Appanapalli Balaji Temple', 'Appanapalli'],
      ['Muramalla Veereswara Swamy Temple', 'Muramalla'],
      ['Thantikonda Venkateswara Swamy Temple', 'Thantikonda'],
      ['Markandeya Swamy Temple', 'Rajamahendravaram'],
      ['ISKCON Temple, Rajamahendravaram', 'Rajamahendravaram']
    ]
  },
  {
    category: 'heritage',
    categoryLabel: 'historical and heritage places',
    images: [exploreRajahmundryBridge, exploreCottonBridge, exploreKorukondaFort],
    places: [
      ['Adurru Buddhist Archaeological Site', 'Adurru'],
      ['Sir Arthur Cotton Museum', 'Dowleswaram'],
      ['Havelock Bridge', 'Rajamahendravaram'],
      ['Peddapuram Fort', 'Peddapuram', 8, explorePeddapuramFort],
      ['Rajamahendravaram Heritage Streets', 'Rajamahendravaram']
    ]
  },
  {
    category: 'rivers',
    categoryLabel: 'rivers, ghats, and scenic locations',
    images: [exploreKotipalliRiver, exploreGautamiRiver, exploreYalamanchiliLanka],
    places: [
      ['Pushkar Ghat', 'Rajamahendravaram'],
      ['Gowthami Ghat', 'Rajamahendravaram'],
      ['Saraswati Ghat', 'Rajamahendravaram'],
      ['Kotilingala Revu', 'Rajamahendravaram'],
      ['Padmavathi Ghat', 'Rajamahendravaram'],
      ['Pattiseema', 'Pattiseema'],
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
