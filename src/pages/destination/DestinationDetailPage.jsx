import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { additionalDestinations } from '../../data/additionalDestinations';
import '../experience/ExperienceDetail.css';
import explorePeddapuramBeach from '../../assets/images/explore-peddapuram-beach.jpg';
import exploreKakinadaBeach from '../../assets/images/explore-kakinada-beach.jpg';
import exploreCoringaBeach from '../../assets/images/explore-coringa-beach.jpg';
import exploreYanamBeach from '../../assets/images/explore-yanam-beach.jpg';
import exploreGautamiRiver from '../../assets/images/explore-gautami-river.jpg';
import exploreKorukondaFort from '../../assets/images/explore-korukonda-fort.jpg';
import exploreRamanayuniTemple from '../../assets/images/explore-ramanayuni-temple.jpg';
import explorePeddapuramFort from '../../assets/images/explore-peddapuram-fort.jpg';
import exploreRajahmundryBridge from '../../assets/images/explore-rajahmundry-bridge.jpg';
import exploreKotipalliTemple from '../../assets/images/explore-kotipalli-temple.jpg';
import exploreKotipalliRiver from '../../assets/images/explore-kotipalli-river.jpg';
import exploreKakinadaHillView from '../../assets/images/explore-kakinada-hill-view.jpg';
import exploreGodavariIsland from '../../assets/images/explore-godavari-island.jpg';
import explorePapiHill from '../../assets/images/explore-papi-hill.jpg';
import exploreYalamanchiliLanka from '../../assets/images/explore-yalamanchili-lanka.jpg';
import exploreGudisaHill from '../../assets/images/explore-gudisa-hill.jpg';
import explorePithampurHills from '../../assets/images/explore-pithampur-hills.jpg';
import exploreMaridimilliHill from '../../assets/images/explore-maredimilli-hill.jpg';
import exploreAmruthandhraWaterfall from '../../assets/images/explore-amruthandhra-waterfall.jpg';
import exploreGodavariWaterfall from '../../assets/images/explore-godavari-waterfall.jpg';
import exploreDharapalliWaterfalls from '../../assets/images/explore-dharapalli-waterfalls.jpg';
import explorePolluruWaterfall from '../../assets/images/explore-polluru-waterfall.jpg';
import exploreRampaWaterfall from '../../assets/images/explore-rampa-waterfall.jpg';
import exploreCoringaWildlife from '../../assets/images/explore-coringa-willdlife.jpg';
import coringaWildlifeSanctuaryImage from '../../assets/images/coringa-wildlife-sanctuary.png';
import exploreRamanayuniWildlife from '../../assets/images/explore-ramanayuni-wildlife.jpg';
import explorePapikondaWildlife from '../../assets/images/explore-papikonda-wildlife.jpg';
import exploreAtreyapuramWildlife from '../../assets/images/explore-atreyapuram-wildlife.jpg';
import exploreKakindaRamalayam from '../../assets/images/explore-kakinda-ramalayam.jpg';
import exploreVinayakaTemple from '../../assets/images/explore-vinayaka-temple.jpg';
import exploreKorukondaTemple from '../../assets/images/explore-korukonda-temple.jpg';
import explorePithampurMarket from '../../assets/images/explore-pithampur-market.jpg';
import exploreKakinadaShopping from '../../assets/images/explore-kakinada-shopping.jpg';
import exploreAmalapuramMarket from '../../assets/images/explore-amalapuram-market.jpg';
import explorePeddapuramMarket from '../../assets/images/explore-peddapuram-market.jpg';
import exploreAnnavaramMart from '../../assets/images/explore-annavaram-mart.jpg';
import exploreHopeIsland from '../../assets/images/explore-hope-island.jpg';
import explorePallamIsland from '../../assets/images/explore-pallam-island.jpg';

// Location coordinates for map
const locationCoords = {
  'Rajahmundry, East Godavari': { lat: 17.0005, lng: 81.8040 },
  'Kakinada, East Godavari': { lat: 16.9333, lng: 82.2167 },
  'Amalapuram, East Godavari': { lat: 16.5333, lng: 81.8167 },
  'Peddapuram, East Godavari': { lat: 17.0800, lng: 82.3000 },
  'Yanam, East Godavari': { lat: 16.7333, lng: 82.2167 },
  'Korumam, East Godavari': { lat: 16.9333, lng: 82.2167 },
  'Kadiyam, East Godavari': { lat: 16.9333, lng: 82.2167 }
};

// Map categoryImages to destination data
const destinationDetails = {
  1: { title: 'Uppada Beach', description: 'A coastal village and beach on the Bay of Bengal', fullDescription: ['Uppada is a coastal settlement north of Kakinada, known for its Bay of Bengal shoreline and nearby handloom tradition. The beach is an open, changing coastline rather than a developed resort, so visitors should follow local safety advice and avoid swimming in rough surf.'], location: 'Uppada, East Godavari', category: 'beaches', image: explorePeddapuramBeach },
  2: { title: 'Kakinada Beach', description: 'Popular beach destination with scenic views', fullDescription: ['Kakinada Beach is known for its beautiful sunrise views and peaceful atmosphere.'], location: 'Kakinada, East Godavari', category: 'beaches', image: exploreKakinadaBeach },
  3: { title: 'Coringa Beach', description: 'Tranquil beach with mangrove forests', fullDescription: ['Coringa Beach is surrounded by lush mangroves and offers a unique coastal experience.'], location: 'Kakinada, East Godavari', category: 'beaches', image: exploreCoringaBeach },
  4: { title: 'Yanam Beach', description: 'Beautiful beach in Yanam', fullDescription: ['Yanam Beach is a hidden gem with calm waters and scenic beauty.'], location: 'Yanam, East Godavari', category: 'beaches', image: exploreYanamBeach },
  5: { title: 'Gautami River', description: 'Sacred river with spiritual significance', fullDescription: ['The Gautami River flows through the region and is considered sacred by locals.'], location: 'Kakinada, East Godavari', category: 'beaches', image: exploreGautamiRiver },
  6: { title: 'Korukonda Fort', description: 'Historic fort with architectural marvels', fullDescription: ['Korukonda Fort is a 17th-century fort offering panoramic views of the surrounding area.'], location: 'Rajahmundry, East Godavari', category: 'heritage', image: exploreKorukondaFort },
  7: { title: 'Ramanayuni Temple', description: 'Ancient temple with historical significance', fullDescription: ['Ramanayuni Temple is dedicated to Lord Rama and showcases beautiful architecture.'], location: 'Kadiyam, East Godavari', category: 'heritage', image: exploreRamanayuniTemple },
  8: { title: 'Peddapuram Fort', description: 'Historic fort in Peddapuram', fullDescription: ['Peddapuram Fort stands as a testament to the region\'s rich history.'], location: 'Peddapuram, East Godavari', category: 'heritage', image: explorePeddapuramFort },
  9: { title: 'Godavari Bridges, Rajamahendravaram', description: 'A sequence of landmark bridges across the Godavari', fullDescription: ['Several generations of railway and road infrastructure cross the Godavari at Rajamahendravaram (Rajahmundry). Together, the bridges record how engineering changed travel between the Godavari districts and connected the region to wider rail and road networks.'], location: 'Rajahmundry, East Godavari', category: 'heritage', image: exploreRajahmundryBridge },
  10: { title: 'Mahakalehwar temple', description: 'Sacred temple on the river island', fullDescription: ['mahakaleshwar Temple is located on a beautiful river island and attracts devotees.'], location: 'Nuzvid, East Godavari', category: 'heritage', image: exploreKotipalliTemple },
  11: { title: 'Kotipalli River', description: 'Scenic river island experience', fullDescription: ['Kotipalli River offers beautiful river island experiences with boating and nature.'], location: 'Nuzvid, East Godavari', category: 'river islands', image: exploreKotipalliRiver },
  12: { title: 'Hope Island', description: 'A young sand-spit island protecting Kakinada Bay', fullDescription: ['Hope Island lies off the Kakinada coast at the edge of the Godavari delta. District tourism records describe it as a roughly 16-kilometre sand spit formed over the last 200 years from sediment carried by the delta.'], location: 'Kakinada, East Godavari', category: 'river islands', image: exploreHopeIsland },
  13: { title: 'Pallam Island', description: 'Tranquil river island', fullDescription: ['Pallam Island offers peaceful surroundings and beautiful river views.'], location: 'Rajahmundry, East Godavari', category: 'river islands', image: explorePallamIsland },
   14: { title: 'Godavari Island', description: 'Island in the mighty Godavari', fullDescription: ['Godavari Island is formed by the river and offers unique experiences.'], location: 'Rajahmundry, East Godavari', category: 'river islands', image: '/godavari-cards.webp' },
  15: { title: 'Yalamanchili Lanka', description: 'Island destination with scenic beauty', fullDescription: ['Yalamanchili Lanka is known for its natural beauty and peaceful environment.'], location: 'Rajahmundry, East Godavari', category: 'river islands', image: exploreYalamanchiliLanka },
  16: { title: 'Gudisa Hill', description: 'Hill station with panoramic views', fullDescription: ['Gudisa Hill offers breathtaking views of the surrounding landscape.'], location: 'Rajahmundry, East Godavari', category: 'hills', image: exploreGudisaHill },
  17: { title: 'Pithapuram Hills', description: 'Scenic hills with lush greenery', fullDescription: ['Pithapuram Hills are covered with dense forests and offer trekking opportunities.'], location: 'Amalapuram, East Godavari', category: 'hills', image: explorePithampurHills },
  18: { title: 'Maredumilli Forests', description: 'Eastern Ghats forests and community-led eco-tourism', fullDescription: ['Maredumilli lies in the Eastern Ghats, where semi-evergreen forest, streams, and steep terrain form a rich forest landscape. The district describes its eco-tourism area as a community conservation project managed by local Indigenous communities with support from the Andhra Pradesh Forest Department.'], location: 'Maredumilli, East Godavari', category: 'hills', image: exploreMaridimilliHill },
  19: { title: 'Kakinada Hill View', description: 'Hill viewpoint in Kakinada', fullDescription: ['Kakinada Hill View offers panoramic views of the city and surrounding areas.'], location: 'Kakinada, East Godavari', category: 'hills', image: exploreKakinadaHillView },
  20: { title: 'Papikondalu (Papi Hills)', description: 'Forest-covered hills rising along the Godavari', fullDescription: ['Papikondalu is a forested hill range along the Godavari boat route between Rajamahendravaram and Bhadrachalam. The district tourism account describes the river journey through the hills as a major part of the experience, with forest and wildlife landscapes on both banks.'], location: 'Rajahmundry, East Godavari', category: 'hills', image: explorePapiHill },
  21: { title: 'Amruthadhara Falls', description: 'Beautiful waterfall in the forest', fullDescription: ['Amruthadhara Waterfalls is a stunning cascade surrounded by lush greenery.'], location: 'Rajahmundry, East Godavari', category: 'waterfalls', image: exploreAmruthandhraWaterfall },
  22: { title: 'Godavari Waterfall', description: 'Waterfall on the Godavari river', fullDescription: ['Godavari Waterfall is a natural wonder along the river.'], location: 'Rajahmundry, East Godavari', category: 'waterfalls', image: exploreGodavariWaterfall },
  23: { title: 'Dharapalli Falls', description: 'Scenic waterfall destination', fullDescription: ['Dharapalli Falls offers a refreshing experience in a natural setting.'], location: 'Kakinada, East Godavari', category: 'waterfalls', image: exploreDharapalliWaterfalls },
  24: { title: 'Polluru Waterfall', description: 'Hidden waterfall in the hills', fullDescription: ['Polluru Waterfall is a hidden gem in the Eastern Ghats.'], location: 'Amalapuram, East Godavari', category: 'waterfalls', image: explorePolluruWaterfall },
  25: { title: 'Rampa Waterfalls', description: 'Forest waterfalls near Rampachodavaram', fullDescription: ['Rampa Waterfalls are in the semi-evergreen forests of the Rampachodavaram agency area. The district places Neelakanteswara and Rampa waterfalls near the Sri Neelakanteswara Vana Vihara Sthali, about four kilometres from Rampachodavaram village.'], location: 'Rampachodavaram, East Godavari', category: 'waterfalls', image: exploreRampaWaterfall },
  27: { title: 'Coringa Wildlife Sanctuary', description: 'Protected mangroves at the Godavari estuary', fullDescription: ['Coringa is a mangrove sanctuary about 15 kilometres from Kakinada on the Kakinada-Yanam road. Its tidal creeks, mudflats, and mangrove forests provide habitat for fish, crabs, otters, fishing cats, birds, and nesting Olive Ridley turtles.'], location: 'Kakinada, East Godavari', category: 'wildlife', image: coringaWildlifeSanctuaryImage },
  28: { title: 'Ramanayuni Wildlife', description: 'Bird sanctuary with diverse species', fullDescription: ['Ramanayuni Wildlife is a haven for bird watchers and nature enthusiasts.'], location: 'Kadiyam, East Godavari', category: 'wildlife', image: exploreRamanayuniWildlife },
  29: { title: 'Atreyapuram Wildlife', description: 'Forest wildlife area', fullDescription: ['Atreyapuram Wildlife offers opportunities to spot various animal species.'], location: 'Rajahmundry, East Godavari', category: 'wildlife', image: exploreAtreyapuramWildlife },
  30: { title: 'Papikonda National Park', description: 'Protected forest and wildlife landscape along the Godavari', fullDescription: ['Papikonda National Park protects a forested landscape around the Godavari and the Papikondalu hill range. The district tourism material describes forest habitat and wildlife in this area; access and activities are subject to current forest and park regulations.'], location: 'Rajahmundry, East Godavari', category: 'wildlife', image: explorePapikondaWildlife },
  31: { title: 'Mahakalehwar Temple', description: 'Ancient temple on the island', fullDescription: ['Kotipalli Temple is a sacred place located on a beautiful river island.'], location: 'Nuzvid, East Godavari', category: 'spirituality', image: exploreKotipalliTemple },
  32: { title: 'Ramanayuni Temple', description: 'Temple dedicated to Lord Rama', fullDescription: ['Ramanayuni Temple attracts devotees with its spiritual significance.'], location: 'Kadiyam, East Godavari', category: 'spirituality', image: exploreRamanayuniTemple },
  33: { title: 'Korukonda Lakshmi Narasimha Temple', description: 'Historic hilltop Vaishnava shrine near Rajamahendravaram', fullDescription: ['The Korukonda shrine is dedicated to Lord Vishnu as Lakshmi Narasimha and is described by the district as a Vaishnava Divya Kshetram. The temple stands on a hill and is reached by a long flight of about 650 steps.'], location: 'Korukonda, East Godavari', category: 'spirituality', image: exploreKorukondaTemple },
  34: { title: 'Gollala Mamidada Suryanarayana Temple', description: 'Temple complex known for its tall, carved gopuram', fullDescription: ['The Suryanarayana Swamy Temple is in Gollala Mamidada, amid coconut groves and agricultural fields. The district records a 16-acre temple campus and a 170-foot gopuram decorated with carvings depicting stories from Hindu epics; the place is also known as Chinna Bhadrachalam.'], location: 'Gollala Mamidada, East Godavari', category: 'spirituality', image: exploreKakindaRamalayam },
  35: { title: 'Bikkavolu Vinayaka Temple', description: 'Historic shrine to Sri Vinayaka', fullDescription: ['The district describes Bikkavolu’s Sri Vinayaka as a seven-foot self-manifested image. Local tradition holds that the idol was installed in 849 CE and continues to grow; devotees also associate water emerging near the idol’s left foot with the shrine.'], location: 'Bikkavolu, East Godavari', category: 'spirituality', image: exploreVinayakaTemple },
  36: { title: 'Pithampuram Market', description: 'Traditional market in the hills', fullDescription: ['Pithampur Market offers local handicrafts and traditional items.'], location: 'Amalapuram, East Godavari', category: 'shopping', image: explorePithampurMarket },
  37: { title: 'Kakinada SRMT Mall', description: 'Shopping destination in Kakinada', fullDescription: ['Kakinada SRMT MALL offers a variety of local and modern shopping options.'], location: 'Kakinada, East Godavari', category: 'shopping', image: exploreKakinadaShopping },
  38: { title: 'Amalapuram Market', description: 'Traditional market area', fullDescription: ['Amalapuram Market is known for its local products and traditional goods.'], location: 'Amalapuram, East Godavari', category: 'shopping', image: exploreAmalapuramMarket },
  39: { title: 'Peddapuram Market', description: 'Local market with variety', fullDescription: ['Peddapuram Market offers fresh produce and local specialties.'], location: 'Peddapuram, East Godavari', category: 'shopping', image: explorePeddapuramMarket },
  40: { title: 'Annavaram Mart', description: 'Shopping destination near temple', fullDescription: ['Annavaram Mart is located near the famous Annavaram temple.'], location: 'Rajahmundry, East Godavari', category: 'shopping', image: exploreAnnavaramMart },
  41: { title: 'Dowleswaram Cotton Barrage', description: 'Sir Arthur Cotton’s historic Godavari irrigation work', fullDescription: ['The Dowleswaram Barrage is an irrigation structure across the Godavari at Dowleswaram, associated with British engineer Sir Arthur Cotton. The district’s engineering-tourism page dates the original barrage to 1850 and describes it as a major work that helped bring irrigation to the Godavari districts.'], location: 'Dowleswaram, East Godavari', category: 'heritage', image: '/heritage-cottonbridge.webp' },
  42: { title: 'Devi Chowk Mandir', description: 'Sacred temple dedicated to the goddess', fullDescription: ['Devi Chowk Mandir is a revered spiritual site dedicated to the goddess, attracting devotees and visitors seeking divine blessings and peace.'], location: 'Rajahmundry, East Godavari', category: 'spirituality', image: '/spirituality-devichowk.webp' },
  ...Object.fromEntries(additionalDestinations.map((destination) => [destination.id, destination]))
};

const destinationContent = {
  1: { about: 'Uppada is a fishing and weaving settlement on the Bay of Bengal, about 10 kilometres from Kakinada. Its shoreline is known for severe coastal erosion and a geo-tube sea wall.', history: ['The supplied guide traces Uppada Jamdani weaving to skilled weavers who migrated from Bengal under the patronage of the Pithapuram Zamindars in the late 18th century. The technique developed into the region’s distinctive silk weaving tradition.', 'During the 20th century, erosion caused substantial loss of village land. The sea wall is a modern response to the changing coast.'] },
  2: { about: 'Kakinada Beach is an urban waterfront beside a port city on the Bay of Bengal. Hope Island and Kakinada Bay shape the relatively sheltered coastal setting.', history: ['Kakinada was historically known as Cocanada. The supplied guide describes its growth from a fishing settlement into a port under Dutch and British influence, with the port handling regional exports including cotton and teak.', 'The beach today is also a public recreation area, reflecting the city’s more recent urban development.'] },
  3: { about: 'Coringa Beach lies beside the Godavari estuary and mangrove wetlands near Kakinada. It is more closely associated with an estuarine landscape and wildlife than with a conventional swimming beach.', history: ['The supplied guide describes Coringa as an important historic port that was devastated by a major cyclone in 1839. The coast has since been reshaped by mangroves and estuarine processes. Coringa’s protected mangrove habitat and turtle nesting areas are documented by the district administration.'] },
  4: { about: 'Yanam’s waterfront follows the Gautami branch of the Godavari. The town’s riverfront reflects both Telugu regional culture and its distinct French colonial past.', history: ['The guide dates the French East India Company’s establishment in Yanam to the 1720s and describes French administration continuing until 1954. Colonial-era buildings and public spaces remain part of the town’s identity.'] },
  5: { about: 'The Gautami is a major distributary of the Godavari, flowing through the delta toward the Bay of Bengal. Its channels support agriculture, transport, fishing, and settlements across the region.', history: ['The guide recounts the river’s sacred origin through the legend of sage Gautama; this is religious tradition rather than a dated historical record. The river and its distributaries have also shaped settlement and trade, while deposited alluvial soil supports delta agriculture.'] },
  6: { about: 'Korukonda Fort is associated with a steep basalt hill overlooking the Godavari plains. The remaining fortifications and steps are the principal features described in the supplied guide.', history: ['The guide attributes the 14th-century stronghold to Mummadi Nayaka, who established a principality after the decline of the Kakatiya dynasty. It describes the hilltop position as a defensive advantage. The fort is now largely in ruins; its exact chronology should be checked against archaeological records.'] },
  7: { about: 'Ramanayuni is described in the guide as a heritage and temple landscape shaped by the agrarian communities of the Godavari delta.', history: ['The guide connects local religious sites with landholding Zamindars and the agricultural economy of the 18th century. It does not identify a specific dated monument or a complete site chronology, so this account is regional context rather than a verified history of one structure.'] },
  8: { about: 'Peddapuram Fort is associated with the former Peddapuram estate and the Vatsavai ruling family. The guide describes the remains as foundations, wells, and decaying walls.', history: ['The supplied guide dates Vatsavai rule from 1555 and describes the estate as a centre of local power. It links the family’s decline to 18th-century conflicts and the Battle of Padmanabham in 1794. These specific claims should be checked against local archival or archaeological records before being treated as definitive.'] },
  9: { about: 'Several generations of railway and road bridges cross the Godavari at Rajamahendravaram (Rajahmundry), linking the river’s two banks and the surrounding districts.', history: ['The Havelock Bridge was the earliest railway bridge at this crossing; district records date the start of its construction to 11 November 1897. The road-cum-rail bridge opened in 1974, and the Godavari Arch Bridge was built between 1991 and 1997 and entered railway service in 2003. Together, they trace more than a century of changing transport engineering.', 'The Godavari Pushkaram, held every 12 years, is an important pilgrimage event along the river.'], source: 'https://eastgodavari.ap.gov.in/engineering-tourism/' },
  10: { about: 'Kotipalli, also known in religious tradition as Koti Theertham, is a temple town on the Gautami Godavari. The temple and river ghats form a connected pilgrimage landscape.', history: ['The supplied guide associates the site with the Eastern Chalukya and Kakatiya periods and describes temple traditions involving Shiva lingams and sacred bathing. The origin stories belong to religious tradition; the guide does not provide a dated archaeological chronology for the temple.'] },
  11: { about: 'The Kotipalli river islands are part of the Godavari delta, where sediment forms fertile land between shifting channels. The guide describes agriculture, coconut groves, and boat travel as defining features.', history: ['The supplied guide connects the islands’ agricultural history with the nearby Koti Theertham temple and its administration. River channels and seasonal flooding have shaped local settlement and transport over time; a dated history for individual islands is not provided.'] },
  12: { about: 'Hope Island is a sand spit off Kakinada at the mouth of the Godavari delta. It shelters Kakinada Bay and provides a natural barrier between the port and the open sea.', history: ['District tourism records describe Hope Island as a young landform that developed over roughly the last 200 years from sediment carried by the Godavari delta. Its formation helped create the sheltered bay used by Kakinada Port.', 'The island’s history is ongoing: currents and sediment continue to shape its shoreline.'], source: 'https://eastgodavari.ap.gov.in/tourist-place/hope-island/' },
  13: { about: 'Pallam Island is a river island in the Godavari delta, surrounded by distributaries and backwaters. The guide describes fertile fields, palms, and village life shaped by the river.', history: ['The guide relates the island’s agricultural value to historic Zamindari estates and delta farming. It does not give a founding date or a separate written chronology for Pallam itself.'] },
  14: { about: 'The Godavari Islands are the changing sandbanks and cultivated river islands formed among the delta’s channels. Some are temporary, while others support farming and settlement.', history: ['The guide describes these islands as shaped by sediment carried from the Deccan plateau and by the seasonal movement of the river. Their use for cultivation and fishing reflects the longstanding relationship between delta communities and the Godavari; no single history applies to every island.'] },
  15: { about: 'Yalamanchili Lanka is a settled river island in the Konaseema delta. The guide associates it with coconut and banana cultivation, village life, and seasonal harvest customs.', history: ['The guide describes centuries of settlement and agricultural activity on the island, but gives no dated historical records or named events. Sankranti is identified as an important harvest-time celebration in the local community.'] },
  16: { about: 'Gudisa is a highland destination in the Eastern Ghats, known in the supplied guide for open grassland on its summit and broad views of surrounding ranges.', history: ['The guide connects the highlands with Indigenous Konda Reddi communities and describes Gudisa as a place that became known to modern trekkers relatively recently. It does not provide a documented settlement timeline or dated historic structures.'] },
  17: { about: 'Pithapuram’s surrounding hills overlook an old town with a strong religious and administrative history. The supplied guide describes rocky elevations, caves, and small shrines.', history: ['The guide associates the hills with local rulers and ascetic practice, but does not provide dates or archaeological records for the caves and shrines. Pithapuram’s longer history is better documented through its temples and regional records than through the hills themselves.'] },
  18: { about: 'Maredumilli lies in the semi-evergreen forests of the Eastern Ghats, with streams, steep terrain, and high biodiversity. Its eco-tourism area is managed with participation from nearby Indigenous communities and the Andhra Pradesh Forest Department.', history: ['The Abhayaranya Forest Rest House in Maredumilli village was built in 1914. The district describes the current conservation and eco-tourism project as community-managed with Forest Department support. The supplied guide also connects the wider agency forests with the 1922 Rampa Rebellion; the precise local connection should be confirmed with regional records.', 'Local Ramayana stories associated with nearby hills are traditions, not independently dated historical events.'], source: 'https://eastgodavari.ap.gov.in/tourist-place/maredumilli/' },
  19: { about: 'Kakinada Hill View refers to elevated viewpoints on the edge of the coastal city, looking across the port, industrial area, and Bay of Bengal.', history: ['The guide says local elevations were used by British surveyors to observe and map the coast. It provides no specific dated viewpoint or surviving historic structure; the place’s visible story is the city’s transition from a port town to a modern industrial centre.'] },
  20: { about: 'Papikondalu (Papi Hills) is a forested range where the Godavari runs through the Eastern Ghats. River cruises are a well-known way to experience the hills and gorge.', history: ['The supplied guide connects the region with the 1922 Rampa Rebellion and Alluri Sitarama Raju’s resistance to British rule. It also recounts Ramayana associations as local religious lore. These historical and traditional accounts refer to the wider forest region, not to a dated event at one hill.'], source: 'https://eastgodavari.ap.gov.in/eco-tourism/' },
  21: { about: 'Amruthadhara Falls is a multi-tiered waterfall in the Maredumilli forest range, reached by a steep path through forest.', history: ['The supplied guide records a local belief that the water was sacred and sustained forest communities during dry periods. This is a cultural tradition; the guide does not provide a dated history of the waterfall as a built or formally established site.'] },
  22: { about: '“Godavari Waterfalls” refers to seasonal cascades in the rocky Eastern Ghats catchment before the river reaches the delta. The guide describes these as remote natural features rather than a single developed attraction.', history: ['The guide says the cascades were used as landmarks by river traders and surveyors, but gives no named falls or dates. Their flows depend on monsoon rainfall, so the history of this landscape is primarily geological and seasonal.'] },
  23: { about: 'Dharapalli Falls is described in the guide as a forest waterfall near Dharapalli village, reached by a trek through streams and dense vegetation.', history: ['The guide records local folklore that forest spirits bless the water and that it has healing properties. These are beliefs, not verified medical claims. No dated site history is provided.'] },
  24: { about: 'Polluru Waterfall lies in the Mothugudem agency area and is described as a powerful monsoon cascade surrounded by forest.', history: ['The supplied guide says the falls were historically known to nearby communities and forest guards before becoming more widely visited. It gives no construction date or formal site chronology; seasonal water levels shape both access and visitor safety.'] },
  25: { about: 'Rampa Waterfalls lie in the semi-evergreen forest around Rampachodavaram, near Sri Neelakanteswara Vana Vihara Sthali.', history: ['The district tourism account places the waterfalls about four kilometres from Rampachodavaram village. The supplied guide connects the wider agency region with the 1922 Rampa Rebellion. That regional history should not be read as evidence that the waterfall itself was the rebellion’s centre; no dated history of the falls is published.'], source: 'https://eastgodavari.ap.gov.in/tourist-place/images-of-rampa-waterfall/' },
  27: { about: 'Coringa Wildlife Sanctuary protects mangroves, tidal creeks, mudflats, and estuary habitat near Kakinada. The district record describes diverse mangrove plants, birds, and wildlife, including nesting Olive Ridley turtles.', history: ['The Andhra Pradesh Government declared Coringa a wildlife sanctuary on 5 July 1978 to conserve the Godavari estuary’s mangroves. The sanctuary’s history since then has centred on habitat protection, restoration, and community participation. The district account reports more than 120 bird species and an 18-kilometre sand spit.'], source: 'https://eastgodavari.ap.gov.in/tourist-place/coringa-sanctuary/' },
  28: { about: 'The Ramanayuni wildlife area is described in the guide as scrub forest, wetlands, and Godavari sandbanks that support seasonal waterbirds.', history: ['The supplied guide describes the area as historically used for hunting by local Zamindars and now important for migratory birds. It does not cite a formal reserve designation or provide a dated conservation history, so visitors should confirm current access and protection status locally.'] },
  29: { about: 'Atreyapuram’s river edges include sandbars and shallow backwaters that form a local wetland landscape alongside farming settlements.', history: ['The guide links Atreyapuram’s identity with Pootharekulu, the region’s thin rice-paper sweet, and describes the riverbanks as habitat for birds and aquatic life. It does not provide a formal history for a designated wildlife reserve at Atreyapuram.'] },
  30: { about: 'Papikonda National Park protects forest habitat around the Papikondalu hills and the Godavari corridor. Access to protected areas is subject to Forest Department rules.', history: ['The supplied guide dates the park’s upgrade to National Park status to 2008 and describes the wider forest region as part of the landscape of the 1922 Rampa Rebellion. The exact park boundary, area, and wildlife status should be checked against current Forest Department records.'], source: 'https://eastgodavari.ap.gov.in/eco-tourism/' },
  31: { about: 'Kotipalli is a pilgrimage centre on the Gautami Godavari, known in religious tradition as Koti Theertham. Devotees visit the temple and river ghats, especially during Karthika Masam.', history: ['The supplied guide recounts a Brahmanda Purana story in which Indra comes to the river to atone for a curse and installs a Shiva lingam. The temple traditions also associate lingams with Chandra and Kasyapa. These are religious narratives; they should be distinguished from archaeological history.'] },
  32: { about: 'Ramanayuni Temple is described in the guide as a community shrine associated with farming communities and local protector deities.', history: ['The guide emphasizes local patronage, harvest customs, and annual festivals rather than a royal foundation or a dated stone monument. It does not provide a verified founding date or a complete chronological record for the temple.'] },
  33: { about: 'Korukonda Lakshmi Narasimha Temple is a hilltop Vaishnava shrine dedicated to Sri Lakshmi Narasimha. The approach includes a long flight of steps up the hill.', history: ['The district describes the temple as about 800 years old and identifies it as a Vaishnava Divya Kshetram. The supplied guide places it in the 14th century and associates its foundation with Mummadi Nayaka; the exact year and founder are not established by the district source.'], source: 'https://eastgodavari.ap.gov.in/religious-tourism/' },
  34: { about: 'Gollala Mamidada is known for the Suryanarayana Swamy Temple, its carved gopuram, and a large temple campus set among coconut groves and fields.', history: ['The supplied guide dates the temple complex to the late 19th and early 20th centuries and connects its construction with local agrarian patrons. The district records a 16-acre campus and a gopuram about 170 feet high, and notes that the temple is also known as Chinna Bhadrachalam. Ratha Saptami is an important festival.'], source: 'https://eastgodavari.ap.gov.in/religious-tourism/' },
  35: { about: 'Bikkavolu is known for early medieval temples, including the Sri Vinayaka shrine and its large stone image of Ganesha.', history: ['The supplied guide connects the town’s history with the Eastern Chalukya ruler Gunaga Vijayaditya and the older name Birudankavolu. The district records a local belief that the Vinayaka image was installed in 849 CE and is swayambhu; this date is a temple tradition, not an independently established archaeological date.'], source: 'https://eastgodavari.ap.gov.in/religious-tourism/' },
  36: { about: 'Pithapuram Market serves the surrounding town and agricultural area, with local produce, textiles, spices, and traditional goods.', history: ['The supplied guide connects the market’s growth with the Pithapuram Zamindari and describes a weekly Sandhai where nearby farmers trade produce and goods. It does not provide a dated founding record for the market itself.'] },
  37: { about: 'Kakinada is a regional shopping centre with markets for textiles, jewellery, brass goods, and local foods.', history: ['The guide links the city’s commercial streets to its growth as a colonial-era port and export centre. It dates the creation of Kakinada Kaja to the 1890s and attributes it to confectioner Kotaiah; this local food history is part of the city’s commercial heritage.'] },
  38: { about: 'Amalapuram’s markets serve the agricultural communities of the Konaseema delta, with produce and goods connected to coconut, banana, spices, and coastal food.', history: ['The supplied guide describes Amalapuram as a central trading point for the surrounding delta. It does not identify a specific founding date or a dated history for the present market buildings.'] },
  39: { about: 'Peddapuram Market is described in the guide as a centre for hand-woven fabrics, brass agricultural tools, and local produce.', history: ['The guide connects Peddapuram’s textile trade with Vatsavai patronage and the town’s 18th-century handloom industry. Its account describes the market as a continuing place of trade, but provides no dated history for the current market lanes.'] },
  40: { about: 'Annavaram Mart serves pilgrims visiting Sri Satyanarayana Swamy Temple on Ratnagiri Hill, with stalls selling worship items, religious goods, and local products.', history: ['The guide describes the market as part of the temple pilgrimage economy, where local artisans sell to visitors. It highlights Annavaram prasadam, a wheat-and-jaggery sweet, and says its recipe has been maintained for over a century; the mart itself has no separate founding date in the guide.'] },
  41: { about: 'The Dowleswaram Cotton Barrage is an irrigation structure across the Godavari, associated with engineer Sir Arthur Cotton and the development of the delta canal system.', history: ['The district describes the original barrage as built around 1850 under Sir Arthur Cotton. The supplied guide gives a construction period of 1847–1852 and notes the role of local labour. The barrage is distinct from the railway and road bridges at Rajamahendravaram.'], source: 'https://eastgodavari.ap.gov.in/engineering-tourism/' },
  42: { about: 'Devi Chowk Mandir is an urban shrine in Rajahmundry dedicated to the Divine Mother and situated within a busy commercial area.', history: ['The supplied guide describes the temple as a community focus during Dasara/Navaratri, when the surrounding square fills with lights and devotees. It frames the shrine as a modern spiritual anchor; it does not provide a founding date or a complete chronological history.'] }
};

const destinationEvents = {
  5: 'Godavari Pushkaram is a major pilgrimage held once every 12 years. The district records that Rajamahendravaram is a major bathing and worship centre during the observance. Dates and arrangements vary; check official notices before travelling.',
  9: 'Godavari Pushkaram is observed once every 12 years along the river, with Rajamahendravaram among the principal pilgrimage centres. Check official notices for dates, access restrictions, and bathing arrangements.'
};

const DestinationDetailPage = () => {
  const { id } = useParams();
  const dest = destinationDetails[parseInt(id)];

  if (!dest) {
    return (
      <div className="page-container" style={{ paddingTop: '120px', textAlign: 'center' }}>
        <h2>Destination not found</h2>
        <Link to="/destinations">Back to Destinations</Link>
      </div>
    );
  }

  const coords = locationCoords[dest.location] || { lat: 17.0, lng: 81.8 };
  const content = destinationContent[Number(id)];
  const aboutParagraphs = content?.about ? [content.about] : dest.fullDescription;
  const relatedEvent = destinationEvents[Number(id)];

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section - Full screen */}
      <div className="destination-detail-hero">
        <img src={dest.image} alt={dest.title} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 100%)' }}></div>

        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', zIndex: 5 }}>
          <p style={{ fontSize: '14px', marginBottom: '1rem', opacity: 0.9 }}>Home - Destinations - {dest.title}</p>
          <h1 style={{ fontSize: '4rem', fontFamily: 'Georgia, serif', fontWeight: '400', margin: 0, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>{dest.title}</h1>
        </div>

        <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', color: 'white', display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 5 }}>
          <div style={{ width: '2px', height: '40px', background: 'white' }}></div>
          <span style={{ fontSize: '16px' }}>{dest.category}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="destination-detail-overview-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
          {/* Left: Wikipedia-style content + About Location */}
          <div>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', fontWeight: '400', lineHeight: '1.3', marginBottom: '2rem', color: '#333' }}>
              {dest.title}
            </h2>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'Georgia, serif', fontWeight: '400', marginTop: '2rem', marginBottom: '1rem', color: '#333', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF9D00" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              About the Location
            </h3>
            {aboutParagraphs.map((paragraph, index) => (
              <p key={index} style={{ fontSize: '14px', color: '#666', marginBottom: '1rem', lineHeight: '1.6' }}>{paragraph}</p>
            ))}
            <h4 style={{ fontSize: '1.1rem', fontFamily: 'Georgia, serif', fontWeight: '400', margin: '1.5rem 0 0.75rem', color: '#333' }}>History and local context</h4>
            {(content?.history || ['A site-specific chronological history is not available in the travel guide for this destination.']).map((paragraph, index) => (
              <p key={index} style={{ fontSize: '14px', color: '#666', marginBottom: '1rem', lineHeight: '1.6' }}>{paragraph}</p>
            ))}
            <p style={{ fontSize: '13px', color: '#777', margin: '0 0 1.5rem' }}>
              Based on the supplied Godavari &amp; Kakinada Region Travel Guide.
              {content?.source && <> <a href={content.source} target="_blank" rel="noopener noreferrer" style={{ color: '#1a6b7a' }}>District reference</a></>}
            </p>
            {relatedEvent && (
              <>
                <h4 style={{ fontSize: '1.1rem', fontFamily: 'Georgia, serif', fontWeight: '400', margin: '1.5rem 0 0.75rem', color: '#333' }}>Related event</h4>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: 0, lineHeight: '1.6' }}>{relatedEvent}</p>
              </>
            )}
          </div>

          {/* Right: Live Map - Clickable */}
          <div style={{ background: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'Georgia, serif', marginBottom: '1rem', color: '#333', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF9D00" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Location Map
            </h3>
            <a href={`https://www.google.com/maps/dir/current+location/${coords.lat},${coords.lng}`} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '280px', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer' }}>
              <iframe 
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${coords.lat},${coords.lng}&center=${coords.lat},${coords.lng}&zoom=14`} 
                width="100%" 
                height="100%" 
                style={{ border: 'none' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title={`Map of ${dest.title}`} 
              />
            </a>
          </div>
        </div>

        {/* How to Reach Section */}
        <div style={{ marginBottom: '4rem', paddingTop: '1rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', fontWeight: '400', marginBottom: '2rem', color: '#333', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF9D00" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            How to Reach
          </h2>
          <div className="destination-detail-travel-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {/* Air */}
            <div style={{ background: '#f0f8ff', borderRadius: '16px', padding: '1.5rem', border: '1px solid #e0f0fe', transition: 'all 0.3s ease' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.8rem' }}>✈️</span>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', margin: 0, color: '#333' }}>By Air</h3>
              </div>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.5', marginBottom: '1rem' }}>Nearest airport: Rajahmundry Airport (RJY) - well connected to major cities.</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <a href={`https://www.google.com/maps/dir/current+location/${coords.lat},${coords.lng}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', background: '#1a6b7a', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Map
                </a>
                <a href="https://www.makemytrip.com/flights" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', background: '#FF9D00', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  Book
                </a>
              </div>
            </div>

            {/* Bus */}
            <div style={{ background: '#f0faf0', borderRadius: '16px', padding: '1.5rem', border: '1px solid #d0ead0', transition: 'all 0.3s ease' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.8rem' }}>🚌</span>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', margin: 0, color: '#333' }}>By Bus</h3>
              </div>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.5', marginBottom: '1rem' }}>Regular APSRTC/TSRTC buses from major cities. Private buses also available.</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <a href={`https://www.google.com/maps/dir/current+location/${coords.lat},${coords.lng}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', background: '#1a6b7a', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Map
                </a>
                <a href="https://www.apsrtc.ap.gov.in" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', background: '#FF9D00', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  Book
                </a>
              </div>
            </div>

            {/* Train */}
            <div style={{ background: '#fff8f0', borderRadius: '16px', padding: '1.5rem', border: '1px solid #fde8d0', transition: 'all 0.3s ease' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.8rem' }}>🚂</span>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', margin: 0, color: '#333' }}>By Train</h3>
              </div>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.5', marginBottom: '1rem' }}>Well-connected via Rajahmundry & Kakinada railway stations. Express & superfast trains.</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <a href={`https://www.google.com/maps/dir/current+location/${coords.lat},${coords.lng}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', background: '#1a6b7a', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Map
                </a>
                <a href="https://www.irctc.co.in" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', background: '#FF9D00', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  Book
                </a>
              </div>
            </div>

            {/* Local Transport */}
            <div style={{ background: '#f5f0ff', borderRadius: '16px', padding: '1.5rem', border: '1px solid #e0d0fe', transition: 'all 0.3s ease' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.8rem' }}>🚕</span>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', margin: 0, color: '#333' }}>Local Transport</h3>
              </div>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.5', marginBottom: '1rem' }}>Auto-rickshaws, taxis, and local buses available within town for easy commute.</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <a href={`https://www.google.com/maps/dir/current+location/${coords.lat},${coords.lng}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', background: '#1a6b7a', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Map
                </a>
                <a href="https://www.olacabs.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', background: '#FF9D00', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  Book
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* Photo Gallery */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', fontWeight: '400', marginBottom: '0.5rem', color: '#333', textAlign: 'center' }}>📷 Photo Gallery</h2>
          <p style={{ textAlign: 'center', fontSize: '16px', color: '#666', marginBottom: '2rem' }}>Explore the beauty of {dest.title} through our lens</p>
          
          {(() => {
            const galleryImages = [
              'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
              'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
              'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
              'https://images.unsplash.com/photo-1439853949127-fa647821eba0?w=800',
              'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
              'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
              'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800'
            ];
            
            return (
              <div>
                <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', paddingBottom: '1rem', scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="photo-gallery-scroll" id={`gallery-scroll-${dest.title?.replace(/\s/g, '-')}`}>
                  {galleryImages.map((imgUrl, index) => (
                    <div key={index} style={{ flex: '0 0 auto', width: '320px', height: '240px', borderRadius: '12px', overflow: 'hidden', scrollSnapAlign: 'start', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease', cursor: 'pointer', position: 'relative' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
                      <img src={imgUrl} alt={`${dest.title} ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)', color: 'white', fontSize: '12px', textAlign: 'right', paddingRight: '1rem' }}>{index + 1}/{galleryImages.length}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                  {galleryImages.map((_, index) => (
                    <div key={index} style={{ width: '10px', height: '10px', borderRadius: '50%', background: index === 0 ? '#FF9D00' : '#ddd', cursor: 'pointer', transition: 'all 0.3s ease' }} onClick={() => { const scroll = document.getElementById(`gallery-scroll-${dest.title?.replace(/\s/g, '-')}`); if (scroll) { scroll.scrollTo({ left: index * 336, behavior: 'smooth' }); } }} />
                  ))}
                </div>
              </div>
            );
          })()}
        </div>

        {/* Video Gallery */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', fontWeight: '400', marginBottom: '0.5rem', color: '#333', textAlign: 'center' }}>🎥 Video Gallery</h2>
          <p style={{ textAlign: 'center', fontSize: '16px', color: '#666', marginBottom: '2rem' }}>Watch visual stories of {dest.title}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
              <iframe src="https://www.youtube.com/embed/X0Lg9E0Z0kA" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} allowFullScreen title="Travel Video 1" />
            </div>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
              <iframe src="https://www.youtube.com/embed/6AbC6Rwh-Fk" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} allowFullScreen title="Travel Video 2" />
            </div>
          </div>
        </div>

        {/* Nearby Destinations */}
        {(() => {
          const nearbyPlaces = Object.entries(destinationDetails)
            .filter(([key, value]) => value.category === dest.category && value.title !== dest.title)
            .slice(0, 4)
            .map(([key, value]) => ({ id: parseInt(key), ...value }));
          
          return nearbyPlaces.length > 0 ? (
            <div style={{ marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', fontWeight: '400', marginBottom: '0.5rem', color: '#333', textAlign: 'center' }}>📍 Nearby Destinations</h2>
              <p style={{ textAlign: 'center', fontSize: '16px', color: '#666', marginBottom: '2rem' }}>Explore more {dest.category} destinations nearby</p>
              <div className="destination-page-nearby-grid">
                {nearbyPlaces.map((place) => (
                  <Link key={place.id} to={`/destination-page/${place.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '280px', cursor: 'pointer', transition: 'all 0.3s ease' }}
                      onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)'; }}
                      onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                    >
                      <img src={place.image} alt={place.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)', color: 'white' }}>
                        <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.3rem', margin: 0 }}>{place.title}</h3>
                        <p style={{ fontSize: '0.8rem', margin: '0.3rem 0 0', opacity: 0.9 }}>{place.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : null;
        })()}
      </div>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ position: 'fixed', bottom: '2rem', right: '2rem', width: '50px', height: '50px', borderRadius: '50%', background: 'white', border: '2px solid #FF9D00', color: '#FF9D00', fontSize: '1.5rem', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.2)', zIndex: 100 }}>↑</button>
    </div>
  );
};

export default DestinationDetailPage;