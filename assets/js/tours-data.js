/**
 * SL MANGO EXOTIC TOURS — MASTER TOURS DATA
 * 
 * 8 Fully-developed, geographically coherent Sri Lankan tour packages.
 * Each proposed tour includes full day-by-day itineraries, detailed activity
 * descriptions, dedicated day galleries, activity photos, inclusions, exclusions,
 * and realistic practical notes.
 */

const TOURS_DATA = [
  {
  "slug": "golden-pearl-of-sri-lanka",
  "title": "The Golden Pearl of Sri Lanka",
  "subtitle": "A 14-Day Grand Discovery",
  "duration": "14 Days",
  "durationNights": "14 Days / 13 Nights",
  "durationDays": 14,
  "category": "Culture • Wildlife • Mountains • Waterfalls • Scenic Train Journeys • Tropical Beaches",
  "categorySlug": "classic",
  "badge": "Grand Discovery",
  "isGoldPackage": true,
  "heroImage": "assets/images/tours/golden-pearl-of-sri-lanka/hero.jpg",
  "destinationsSummary": "Habarana • Sigiriya • Kandy • Nuwara Eliya • Ella • Udawalawe • Galle • Mirissa • Madu River • Negombo",
  "activityBadges": [
    "Culture & Heritage",
    "Wildlife Safari",
    "Highlands & Mountains",
    "Waterfalls & Hiking",
    "Scenic Train Journeys",
    "Tropical Beaches",
    "Community Giving"
  ],
  "pace": "Paced Grand Discovery (Private Chauffeur & National Tourist Guide)",
  "suitableFor": "Couples, independent travellers, families, wildlife enthusiasts, and cultural seekers wanting a complete 14-day Sri Lanka journey",
  "shortDescription": "Discover the true beauty of Sri Lanka in 14 unforgettable days. From ancient temples and traditional village life to misty tea plantations, exciting wildlife safaris, cascading waterfalls and golden beaches, this journey invites you to experience the island’s culture, landscapes, flavours and warm hospitality.",
  "overview": "The Golden Pearl of Sri Lanka — A 14-Day Grand Discovery is our flagship private tour crafted by SL Mango Exotic Tours. Designed for discerning international travellers, this journey seamlessly weaves together ancient royal citadels, rich biological reserves, misty central highlands, dramatic waterfalls, world-famous rail routes, and tranquil western and southern coastlines. Accompanied throughout by a licensed National Tourist Guide and executive air-conditioned transport, you will experience Sri Lanka at an unhurried, graceful cadence. From sunrise over Sigiriya from the crags of Pidurangala to swimming below hill-country cascades, encountering elephant herds in Udawalawe, and unwinding along golden palm shores, every single day offers an authentic, memorable chapter of Ceylon.",
  "highlights": [
    "Ascend Pidurangala Rock at sunrise for breathtaking panoramic views of Sigiriya Lion Rock",
    "Immerse in authentic rural life with an oxcart ride, catamaran crossing, and village culinary demonstration",
    "Pay homage at the sacred Temple of the Tooth in Kandy and attend a traditional cultural dance performance",
    "Marvel at Ambuluwawa Tower, Embekka wood carvings, and centuries of architectural wonder",
    "Journey by scenic train from Nanu Oya to Ella through emerald hills and colonial viaducts",
    "Hike around the cascading tiers and natural pools of Diyaluma and visit roaring Ravana Falls",
    "Embark on an open 4x4 safari across Udawalawe National Park observing herds of wild Asian elephants",
    "Explore UNESCO World Heritage Galle Fort ramparts, Mirissa's Coconut Tree Hill, and traditional stilt fishermen",
    "Cruise the biodiverse mangrove channels of the Madu River and visit sea turtle conservation hatcheries",
    "Unwind beside the turquoise Indian Ocean in coastal Negombo with fresh seafood and sunset walks",
    "Opportunity for an organised, respectful school-supplies donation visit to support local communities"
  ],
  "routeOverview": "Bandaranaike Airport → Habarana (3 Nights) → Kandy (1 Night) → Nuwara Eliya (1 Night) → Ella (1 Night) → Udawalawe (1 Night) → Southern Coast & Mirissa (2 Nights) → Negombo Beach (3 Nights) → Airport Departure",
  "specialFeatures": [
    {
      "title": "Culture & Heritage",
      "desc": "Explore ancient temples, historic architecture, traditional villages and sacred cultural landmarks."
    },
    {
      "title": "Wildlife & Nature",
      "desc": "Discover national parks, wild elephants, tropical forests, impressive waterfalls and scenic natural landscapes."
    },
    {
      "title": "Authentic Local Experiences",
      "desc": "Enjoy village tours, traditional cooking demonstrations, local food and insights into everyday Sri Lankan life."
    },
    {
      "title": "Scenic Hill Country",
      "desc": "Experience lush tea plantations, cool mountain scenery and the famous train journey through Sri Lanka’s highlands."
    },
    {
      "title": "Coastal Adventures",
      "desc": "Discover mangrove waterways, marine conservation, historic coastal towns and beautiful tropical beaches."
    },
    {
      "title": "Community Giving",
      "desc": "Where arrangements allow, support rural schools and communities with useful supplies requested by local contacts."
    }
  ],
  "communityGiving": {
    "title": "A Journey That Gives Back",
    "tagline": "Thoughtful community support woven into your Sri Lankan travel story",
    "description": "Along the way, SL Mango Exotic Tours can help arrange a respectful community-support visit to a rural school or village, where travellers may donate useful educational supplies such as exercise books, pens, pencils, crayons and other school essentials. This optional charitable activity should be coordinated with the school or a trusted local contact to understand what is genuinely needed.",
    "disclaimer": "We encourage guests to contribute items requested by the school, respect local customs and privacy, and seek permission before taking photographs of children or sharing images. Visits depend on school schedules, community consent and prior arrangements; donations are voluntary and are not guaranteed to be part of the standard tour price.",
    "items": [
      "Exercise books and ruled notebooks",
      "Pens, pencils, erasers and sharpeners",
      "Colour pencils, crayons and basic art supplies",
      "Rulers, geometry sets and other requested classroom essentials"
    ]
  },
  "inclusions": [
    "Accommodation at hotels meeting a minimum 3-star standard, subject to availability and final confirmation",
    "Private tour transportation throughout according to the agreed itinerary in an executive air-conditioned vehicle",
    "Personalised airport pickup and departure transfer",
    "National Tourist Guide service throughout the tour, sharing insights into history, culture, traditions, and natural heritage",
    "The sightseeing, local experiences, and meals specifically listed as included in the final confirmed itinerary",
    "Opportunity to request a customised package with 4-star or 5-star hotels or luxury resorts (upgrades available upon request)",
    "Opportunity for a pre-arranged, respectful community-support visit, subject to permission and availability",
    "Habarana authentic village tour with traditional cart ride, lake catamaran crossing, and cookery demonstration with village lunch (Day 2)",
    "Evening wildlife safari in the Habarana area with dedicated 4x4 safari jeep and driver-tracker (Day 2)",
    "Pidurangala Rock guided sunrise hike and Dambulla Royal Cave Temple UNESCO complex visit (Day 3)",
    "Herbal spice garden visit, traditional Sri Lankan cooking demonstration, and specified complimentary lunch with fruits and cocktail (Day 4)",
    "Temple of the Sacred Tooth Relic evening admission, Kandyan cultural dance performance, and Kandy viewpoint visit (Day 4)",
    "Ambuluwawa Tower visit, Gadaladeniya Temple, Embekka Devalaya, Lankathilaka Temple, and Ceylon gem museum (Day 5)",
    "Scenic hill-country journey, waterfall stops, tea plantation and factory visit with Ceylon tea-making experience and tasting (Day 6)",
    "Historic Nuwara Eliya Post Office visit and colonial city tour (Day 6)",
    "Scenic train journey from Nanu Oya to Ella through highland tea estates (Day 7, subject to advance booking and railway availability)",
    "Nine Arch Bridge and Little Adam's Peak scenic hikes in Ella (Day 7)",
    "Morning visit to Ravana Falls and guided Diyaluma Falls waterfall hike with picnic lunch and one complimentary beer (Day 8)",
    "Udawalawe National Park 4x4 wildlife safari observing wild Asian elephants (Day 9)",
    "Scheduled elephant-feeding experience, subject to facility availability and ethical welfare practices (Day 9)",
    "Historic Galle Fort ramparts walk, Mirissa Coconut Tree Hill visit, and traditional stilt fishing viewing (Day 9)",
    "Approximately 1.5-hour Madu River mangrove boat safari and sea turtle conservation centre visit (Day 10)",
    "Coastal seafood lunch featuring local ocean catch, accompanied by one complimentary beer (Day 10)",
    "Negombo fish market visit, historic church exploration, and dedicated beachside relaxation time (Days 11–13)"
  ],
  "exclusions": [
    "Driver gratuity: Recommended €2.50 per person, per day",
    "National Tourist Guide gratuity: Recommended €5.00 per person, per day",
    "Hotel staff tips, at your personal discretion",
    "Optional Sigiriya Lion Rock entrance fee and any other activities or costs not explicitly included",
    "Optional traditional Sri Lankan curry lunch on Day 3: approximately €10 per person",
    "Optional one-hour Ayurvedic relaxation treatment on Day 3",
    "Personal expenses, laundry, telephone calls, and alcoholic beverages not explicitly listed as included",
    "International flight tickets and entry visa fees (ETA for Sri Lanka)",
    "Activities, meals, entrance fees or personal expenses not explicitly listed as included"
  ],
  "days": [
    {
      "day": 1,
      "title": "Welcome to Sri Lanka | Journey to Habarana",
      "subtitle": "Your Sri Lankan adventure begins!",
      "destination": "Habarana",
      "introduction": "Touch down at Bandaranaike International Airport where your private tour representative and chauffeur-guide extend a warm Ceylon welcome. Begin your journey inland towards Habarana, an ideal central hub for exploring Sri Lanka's renowned Cultural Triangle. Along the route, enjoy expansive views of the lush tropical countryside, passing vibrant coconut groves and pineapple plantations. Stop at an authentic roadside stall to refresh yourself with sweet, natural king coconut water before arriving at your hotel to settle in and unwind after your flight.",
      "activities": [
        {
          "title": "Airport Welcome & Executive Private Transfer",
          "description": "Personalised meet-and-greet in the arrivals hall, luggage assistance, and departure in a comfortable, air-conditioned private executive vehicle.",
          "timing": "Upon Arrival",
          "photos": [
            {
              "src": "assets/images/vehicles/private-car.jpg",
              "alt": "SL Mango Exotic Tours private executive vehicle ready for airport transfer",
              "caption": "Personalized private transfer welcoming you in comfort at the start of your 14-day discovery"
            }
          ]
        },
        {
          "title": "Scenic Countryside Drive & King Coconut Tasting",
          "description": "Drive through the fertile rural lowlands with views of coconut groves, paddy fields, and pineapple plantations, stopping to savour a freshly opened Ceylon king coconut (Thambili).",
          "timing": "En Route to Habarana",
          "photos": [
            {
              "src": "assets/images/tours/golden-pearl-of-sri-lanka/sri-lanka-countryside.jpg",
              "alt": "Tropical countryside road in Sri Lanka surrounded by lush green palm trees and morning light",
              "caption": "Scenic countryside drive through tropical coconut plantations and rural farmland towards Habarana"
            },
            {
              "src": "assets/images/tours/golden-pearl-of-sri-lanka/king-coconut.jpg",
              "alt": "Fresh Ceylon king coconuts displaying vibrant orange husks at a roadside stall",
              "caption": "Refreshing, pure king coconut water enjoyed fresh at a countryside plantation fruit stall"
            }
          ]
        },
        {
          "title": "Hotel Check-In & Evening Relaxation",
          "description": "Arrive at your hotel in Habarana, settle into your accommodation, and enjoy well-deserved rest in the peaceful natural surroundings of the Cultural Triangle.",
          "timing": "Late Afternoon & Evening",
          "photos": []
        }
      ],
      "dayGallery": [
        {
          "src": "assets/images/tours/golden-pearl-of-sri-lanka/sri-lanka-countryside.jpg",
          "alt": "Scenic tropical countryside drive in Sri Lanka",
          "caption": "Lush tropical countryside road leading into Sri Lanka's Cultural Triangle"
        },
        {
          "src": "assets/images/tours/golden-pearl-of-sri-lanka/king-coconut.jpg",
          "alt": "Fresh king coconut at a plantation stall",
          "caption": "Traditional Sri Lankan king coconut refreshment along the journey"
        },
        {
          "src": "assets/images/vehicles/private-car.jpg",
          "alt": "Private tour vehicle and chauffeur transfer",
          "caption": "Dedicated air-conditioned tour transportation throughout your holiday"
        }
      ],
      "overnight": "Habarana",
      "travelNotes": "Approx. 3.5 to 4 hours scenic drive from Bandaranaike International Airport (CMB) to Habarana.",
      "optionalActivities": "Evening stroll through hotel gardens or a gentle dip in the swimming pool.",
      "practicalNotes": "Lightweight, breathable clothing is best for the drive. King coconut water is naturally electrolyte-rich and ideal after a long flight."
    },
    {
      "day": 2,
      "title": "Authentic Village Life & Wildlife Safari",
      "subtitle": "Experience the traditions, flavours and wildlife of Sri Lanka.",
      "destination": "Habarana & Rural Countryside",
      "introduction": "Step into the heart of Sri Lankan rural culture with an authentic village experience. Travel through peaceful rural hamlets on a traditional bullock cart before boarding a handcrafted wooden catamaran to glide across a lotus-dappled lake. Watch local agricultural methods firsthand, then join a local village woman for an interactive cookery demonstration with fresh clay pots and garden spices, followed by an authentic village lunch. Return by Landmaster tractor or three-wheeler tuk-tuk, then set off in the late afternoon for an exhilarating open 4x4 wildlife safari across the Habarana area.",
      "activities": [
        {
          "title": "Traditional Village Cart Ride & Catamaran Lake Journey",
          "description": "Embark on a traditional oxcart ride along quiet village tracks flanked by tall trees, followed by a serene journey across a tranquil reservoir on an authentic outrigger catamaran.",
          "timing": "Morning",
          "photos": [
            {
              "src": "assets/images/experiences/village-life.jpg",
              "alt": "Traditional oxcart travelling along a rural village lane in Habarana",
              "caption": "Authentic rural village tour with a traditional oxcart ride through peaceful countryside"
            },
            {
              "src": "assets/images/experiences/oru-boat-journey.jpg",
              "alt": "Handcrafted wooden catamaran boat crossing a lotus-filled village lake",
              "caption": "Gliding peacefully across a calm reservoir on a traditional catamaran boat"
            }
          ]
        },
        {
          "title": "Traditional Cookery Demonstration & Village Lunch",
          "description": "Discover local agricultural traditions and kitchen secrets. A village host demonstrates time-honoured clay-pot cookery with hand-ground spices and fresh coconut milk, concluding with a delicious Sri Lankan lunch.",
          "timing": "Midday",
          "photos": [
            {
              "src": "assets/images/experiences/sri-lankan-cooking.jpg",
              "alt": "Village cooking demonstration using traditional earthenware clay pots and open fire",
              "caption": "Interactive Sri Lankan village cooking demonstration preparing fresh curries in clay pots"
            }
          ]
        },
        {
          "title": "Landmaster Tractor or Tuk-Tuk Village Ride",
          "description": "Return from the village homestead via a fun and authentic Landmaster power-tiller tractor ride or a nimble tuk-tuk, according to your preference.",
          "timing": "Early Afternoon",
          "photos": []
        },
        {
          "title": "Evening Wildlife Safari in the Habarana Area",
          "description": "Board a rugged 4x4 open safari vehicle for an evening wildlife game drive in search of wild Asian elephants, marsh crocodiles, deer, and exotic birdlife roaming their natural habitat.",
          "timing": "Late Afternoon (15:00 – 18:30)",
          "photos": [
            {
              "src": "assets/images/experiences/gentle-giants.jpg",
              "alt": "Wild Asian elephant herd gathering peacefully in the grasslands of Habarana",
              "caption": "Wild elephant herds observed in their natural habitat on an evening safari in Habarana"
            }
          ]
        }
      ],
      "dayGallery": [
        {
          "src": "assets/images/experiences/village-life.jpg",
          "alt": "Traditional village cart ride in Habarana",
          "caption": "Timeless village traditions and peaceful rural roads in Habarana"
        },
        {
          "src": "assets/images/experiences/oru-boat-journey.jpg",
          "alt": "Catamaran boat crossing rural lake",
          "caption": "Serene catamaran navigation across the lotus-covered lake"
        },
        {
          "src": "assets/images/experiences/sri-lankan-cooking.jpg",
          "alt": "Clay pot Sri Lankan cooking demonstration",
          "caption": "Authentic flavours prepared with hand-ground Ceylon spices"
        },
        {
          "src": "assets/images/experiences/gentle-giants.jpg",
          "alt": "Wild Asian elephants on evening safari",
          "caption": "Evening wildlife safari encountering wild Asian elephants in open grasslands"
        }
      ],
      "overnight": "Habarana",
      "travelNotes": "Short transfers within Habarana village limits and to the surrounding safari parks (approx. 20–30 mins).",
      "optionalActivities": "Evening poolside stargazing or quiet birdwatching around your resort grounds.",
      "practicalNotes": "Safari vehicles are open-sided; bring sunglasses, hats, sunscreen, and neutral clothing. While elephants are abundant in the Habarana corridor, wildlife sightings are wild and natural and cannot be guaranteed."
    },
    {
      "day": 3,
      "title": "Pidurangala Sunrise Adventure, Dambulla & Local Life",
      "subtitle": "The adventure is Pidurangala. The view is legendary.",
      "destination": "Sigiriya & Dambulla",
      "introduction": "Rise before the sun for the day's headline adventure: hiking up Pidurangala Rock. Follow a peaceful forest trail with ancient stone steps, culminating in an exhilarating rocky boulder scramble to the expansive granite summit. As golden dawn illuminates the horizon, enjoy an unmatched 360-degree panorama over forest reserves and lakes, with the monumental Sigiriya Lion Rock rising majestically before you. After descending, travellers who wish may opt to explore Sigiriya Rock Fortress. Later, savour an optional traditional feast of over 20 curries, cycle through a leafy village, and marvel at the UNESCO-listed painted caverns of Dambulla Cave Temple.",
      "activities": [
        {
          "title": "Pidurangala Rock Sunrise Hike & Boulder Scramble",
          "description": "Early morning hike along a shaded jungle path and historical stone steps, followed by a short rocky scramble near the crest. Ascent takes 30–45 mins to reach the breathtaking summit overlooking Sigiriya.",
          "timing": "Early Morning (05:00 Start)",
          "photos": [
            {
              "src": "assets/images/gallery/pidurangala-sunrise.jpg",
              "alt": "Sweeping dawn sunrise view of Sigiriya Lion Rock rising from the mist from Pidurangala summit",
              "caption": "Legendary sunrise panorama from the summit of Pidurangala Rock overlooking Sigiriya Lion Rock"
            }
          ]
        },
        {
          "title": "Optional Experience — Sigiriya Lion Rock Fortress",
          "description": "Travellers wishing to explore King Kashyapa's 5th-century royal sky citadel can climb Sigiriya, viewing the water gardens, mirror wall, famous frescoes, and lion paw terrace (optional excursion).",
          "timing": "Morning (Optional)",
          "photos": [
            {
              "src": "assets/images/destinations/sigiriya.jpg",
              "alt": "The monolithic ancient rock citadel of Sigiriya rising 200 metres above surrounding jungle",
              "caption": "Optional visit: Sigiriya Rock Fortress, the world-famous 5th-century UNESCO World Heritage sky palace"
            }
          ]
        },
        {
          "title": "Optional Traditional Curry Feast & Village Bicycle Ride",
          "description": "Enjoy an optional traditional Sri Lankan rice-and-curry lunch featuring more than 20 varieties of freshly prepared vegetable and meat curries (approx. €10 per person). Continue with a relaxed bicycle ride through a shaded local village.",
          "timing": "Midday",
          "photos": [
            {
              "src": "assets/images/tours/golden-pearl-of-sri-lanka/sri-lankan-rice-curry.jpg",
              "alt": "Traditional Sri Lankan rice and curry spread with clay bowls of fragrant curries and sambols",
              "caption": "Optional authentic 20-curry traditional feast showcasing the rich culinary biodiversity of Sri Lanka"
            }
          ]
        },
        {
          "title": "Dambulla Royal Cave Temple UNESCO World Heritage Site",
          "description": "Ascend the sacred sloping rock of Dambulla to explore five magnificent ancient cave sanctuaries adorned with 2,100 square metres of sacred Buddhist murals, golden statues, and meditative rock architecture.",
          "timing": "Afternoon",
          "photos": [
            {
              "src": "assets/images/destinations/dambulla.jpg",
              "alt": "Golden stupa and ancient carved cave entrance at Dambulla Cave Temple monastery",
              "caption": "Dambulla Royal Cave Temple, renowned for ancient painted ceilings, Buddha statues, and decorated caverns"
            }
          ]
        },
        {
          "title": "Dambulla Economic Centre or Optional Ayurvedic Treatment",
          "description": "If timing allows, visit the bustling Dambulla Dedicated Economic Centre wholesale produce hub, or enjoy an optional one-hour restorative Ayurvedic herbal treatment by advance reservation.",
          "timing": "Late Afternoon",
          "photos": []
        }
      ],
      "dayGallery": [
        {
          "src": "assets/images/gallery/pidurangala-sunrise.jpg",
          "alt": "Sunrise at Pidurangala Rock",
          "caption": "Dawn breaking over the Central Province forests from Pidurangala summit"
        },
        {
          "src": "assets/images/destinations/dambulla.jpg",
          "alt": "Dambulla Cave Temple entrance",
          "caption": "Ancient monastic caverns preserved for over two millennia at Dambulla"
        },
        {
          "src": "assets/images/tours/golden-pearl-of-sri-lanka/sri-lankan-rice-curry.jpg",
          "alt": "Sri Lankan rice and curry feast",
          "caption": "A colourful array of traditional curries prepared with indigenous ingredients"
        },
        {
          "src": "assets/images/destinations/sigiriya.jpg",
          "alt": "Sigiriya Rock Fortress panoramic view",
          "caption": "The majestic sheer silhouette of King Kashyapa's royal citadel"
        }
      ],
      "overnight": "Habarana",
      "travelNotes": "Local driving between Habarana, Sigiriya, and Dambulla (approx. 20–30 mins each way).",
      "optionalActivities": "Sigiriya Rock Fortress admission tickets and climb; 20-variety curry lunch (~€10/pax); 1-hour Ayurvedic treatment.",
      "practicalNotes": "Planning note: Pidurangala is the featured experience; the trail has uneven stone steps and the final boulder scramble requires reasonable fitness. Sturdy shoes with good grip and a flashlight are recommended. The summit has exposed rocky edges with limited barrier protection; exercise care especially after rain. Doing both Pidurangala and Sigiriya on the same day is physically demanding; agree final schedule in advance."
    },
    {
      "day": 4,
      "title": "Journey to Kandy | Spices, Culture & Sacred Heritage",
      "subtitle": "Discover the flavours and spiritual traditions of Sri Lanka.",
      "destination": "Matale & Kandy",
      "introduction": "Travel south towards Kandy, Sri Lanka's cultural capital nestled amid lush mountain ridges. Stop en route in Matale to walk through a fragrant herbal spice garden, learning how cinnamon, cardamom, cloves, and vanilla are cultivated and used in Ayurvedic medicine. Enjoy an engaging culinary demonstration featuring traditional coconut pol roti and fresh bread served with aromatic fish and dhal curries, accompanied by a complimentary lunch, fresh fruits, and a cocktail as specified. In the evening, visit the revered Temple of the Sacred Tooth Relic, attend an energetic Kandyan cultural dance and drumming show, and finish at the scenic Kandy viewpoint.",
      "activities": [
        {
          "title": "Scenic Drive to Kandy & Herbal Spice Garden Tour",
          "description": "Travel through tropical hills to Matale, visiting a heritage spice and medicinal herb garden to discover Ceylon spices, healing botanicals, and Ayurvedic wellness traditions.",
          "timing": "Morning",
          "photos": []
        },
        {
          "title": "Pol Roti Cooking Demonstration & Complimentary Lunch",
          "description": "Watch a live cooking demonstration of traditional coconut pol roti and warm bread paired with savoury fish curry and dhal curry. Savor a complimentary lunch, tropical fruits, and a cocktail.",
          "timing": "Midday",
          "photos": []
        },
        {
          "title": "Temple of the Sacred Tooth Relic (Sri Dalada Maligawa)",
          "description": "Visit the golden-roofed sanctuary housing the sacred tooth relic of the Buddha. Experience the reverent atmosphere, drum-accompanied pooja ritual, and intricate Kandyan wood and brass craftsmanship.",
          "timing": "Late Afternoon",
          "photos": [
            {
              "src": "assets/images/destinations/kandy.jpg",
              "alt": "Sri Dalada Maligawa beside Kandy Lake bathed in golden late afternoon sunlight",
              "caption": "The sacred Temple of the Tooth Relic in Kandy, one of the Buddhist world's most revered sanctuaries"
            }
          ]
        },
        {
          "title": "Kandyan Cultural Performance & Arthur's Seat Viewpoint",
          "description": "Witness an authentic cultural show featuring vibrant traditional dances, rhythmic drumming, and fire-walking. Conclude the day with sunset views over Kandy Lake from Arthur's Seat.",
          "timing": "Evening",
          "photos": [
            {
              "src": "assets/images/gallery/kandyan-dance.jpg",
              "alt": "Traditional Kandyan dancers in ornate silver regalia performing ritual dances",
              "caption": "Electrifying Kandyan cultural performance featuring acrobatic dance, fire, and rhythmic drumming"
            },
            {
              "src": "assets/images/tours/golden-pearl-of-sri-lanka/kandy-viewpoint.jpg",
              "alt": "Panoramic sunset perspective over Kandy Lake and city hills from Arthur's Seat viewpoint",
              "caption": "Arthur's Seat viewpoint overlooking tranquil Kandy Lake and surrounding forested hills"
            }
          ]
        }
      ],
      "dayGallery": [
        {
          "src": "assets/images/destinations/kandy.jpg",
          "alt": "Temple of the Tooth in Kandy",
          "caption": "The spiritual sanctuary of Theravada Buddhism along the forested shores of Kandy Lake"
        },
        {
          "src": "assets/images/gallery/kandyan-dance.jpg",
          "alt": "Kandyan cultural dancers",
          "caption": "Centuries-old ritual drumming and dances of the historic Hill Country Kingdom"
        },
        {
          "src": "assets/images/tours/golden-pearl-of-sri-lanka/kandy-viewpoint.jpg",
          "alt": "Kandy panoramic viewpoint",
          "caption": "Sweeping vista of Kandy Lake and the sacred city bathed in dusk light"
        }
      ],
      "overnight": "Kandy",
      "travelNotes": "Approx. 2.5 to 3 hours drive from Habarana to Kandy with planned spice garden stops.",
      "optionalActivities": "Evening stroll around Kandy Lake or shopping for handcrafted brassware and batiks.",
      "practicalNotes": "Temple dress code: Modest white or light-coloured attire covering shoulders and knees is mandatory. Shoes must be removed before entering the sacred temple precincts."
    },
    {
      "day": 5,
      "title": "Hidden Heritage & Panoramic Mountain Views",
      "subtitle": "Discover remarkable architecture and Sri Lanka’s artistic heritage.",
      "destination": "Gampola & Western Kandy Temples",
      "introduction": "Uncover the architectural marvels and hidden medieval heritage of the Kandyan kingdom. Begin with an ascent to the astonishing Ambuluwawa Tower near Gampola, a spiralling white pinnacle rising from a 3,567-foot mountain summit with sweeping 360-degree vistas across evergreen cloud forests and misty mountain ranges. Continue to three historic 14th-century temples: Gadaladeniya, renowned for stone architecture influenced by South Indian dynasties; Embekka Devalaya, celebrated across Asia for its masterwork wooden pillar carvings; and Lankathilaka Viharaya, built atop a natural rock pedestal. Complete the day with a visit to a gem museum to admire world-renowned Ceylon sapphires.",
      "activities": [
        {
          "title": "Ambuluwawa Biodiversity Complex & Spiral Tower",
          "description": "Travel to Gampola to visit Ambuluwawa, Sri Lanka's multi-religious sanctuary perched high on an isolated mountain peak with dramatic spiral tower ascents and panoramic mountain views.",
          "timing": "Morning",
          "photos": [
            {
              "src": "assets/images/tours/golden-pearl-of-sri-lanka/ambuluwawa-tower.jpg",
              "alt": "The spiral white tower of Ambuluwawa rising into the sky surrounded by misty green mountains",
              "caption": "The breathtaking spiral architecture of Ambuluwawa Tower commanding 360-degree mountain panoramas"
            }
          ]
        },
        {
          "title": "Three Historic Temples: Embekka, Gadaladeniya & Lankathilaka",
          "description": "Explore the artistic golden age of the 14th century: Embekka's timber hall with 514 intricate carved motifs, Gadaladeniya's carved stone sanctum, and the monumental hilltop architecture of Lankathilaka.",
          "timing": "Midday & Afternoon",
          "photos": [
            {
              "src": "assets/images/tours/golden-pearl-of-sri-lanka/embekka-wood-carvings.jpg",
              "alt": "Intricately carved wooden pillars at Embekka Devalaya featuring mythical beasts and dancers",
              "caption": "Remarkable 14th-century wooden pillar carvings and decorative timber pillars at Embekka Devalaya"
            },
            {
              "src": "assets/images/tours/golden-pearl-of-sri-lanka/lankathilaka-temple.jpg",
              "alt": "Majestic brick and granite temple of Lankathilaka Viharaya standing atop a rocky outcrop",
              "caption": "Lankathilaka Temple, an architectural gem of the Gampola era admired for its rock-hewn grandeur"
            }
          ]
        },
        {
          "title": "Ceylon Gem Museum & Lapidary Visit",
          "description": "Discover Sri Lanka's legendary gemmological heritage, renowned since antiquity for cornflower blue sapphires, rubies, star stones, and artisanal gem cutting.",
          "timing": "Late Afternoon",
          "photos": []
        }
      ],
      "dayGallery": [
        {
          "src": "assets/images/tours/golden-pearl-of-sri-lanka/ambuluwawa-tower.jpg",
          "alt": "Ambuluwawa Tower and mountains",
          "caption": "Ambuluwawa's spiral summit offering boundless views across central Sri Lanka"
        },
        {
          "src": "assets/images/tours/golden-pearl-of-sri-lanka/embekka-wood-carvings.jpg",
          "alt": "Wood carvings at Embekka Devalaya",
          "caption": "Exquisite medieval timber craftsmanship preserved at Embekka Devalaya"
        },
        {
          "src": "assets/images/tours/golden-pearl-of-sri-lanka/lankathilaka-temple.jpg",
          "alt": "Lankathilaka Viharaya",
          "caption": "The hilltop sanctuary of Lankathilaka overlooking fertile green valleys"
        }
      ],
      "overnight": "Accommodation to be confirmed",
      "travelNotes": "Leisurely exploration around the Gampola and Pilimathalawa valleys (approx. 1.5 to 2 hours driving total).",
      "optionalActivities": "Handicraft shopping in Pilimathalawa (traditional brassware village).",
      "practicalNotes": "The spiral staircase around Ambuluwawa Tower narrows near the peak and may not be suitable for travellers with severe vertigo. Temple etiquette applies at all religious shrines."
    },
    {
      "day": 6,
      "title": "Into the Hill Country | Tea Plantations & Nuwara Eliya",
      "subtitle": "Discover misty mountains and world-famous tea country.",
      "destination": "Ramboda & Nuwara Eliya",
      "introduction": "Ascend into the cool highlands as winding roads climb through emerald hills, deep river gorges, and terraced slopes blanketed by manicured tea bushes. Pause to admire cascading mountain waterfalls such as Ramboda Falls plunging against dark granite. Tour an operating high-grown Ceylon tea plantation and historic factory to discover how the world's finest tea is plucked, withered, rolled, and fired, completing the visit with a private tea tasting. Continue into Nuwara Eliya, Sri Lanka's 'Little England', known for crisp mountain air, colonial-era bungalows, manicured gardens, and the iconic red-brick Nuwara Eliya Post Office.",
      "activities": [
        {
          "title": "Scenic Mountain Journey & Ramboda Waterfall Stop",
          "description": "Ascend winding highland passes with dramatic views across mist-draped peaks, stopping to photograph the roaring tiers of Ramboda Falls plunging 109 metres down the valley.",
          "timing": "Morning",
          "photos": [
            {
              "src": "assets/images/tours/golden-pearl-of-sri-lanka/ramboda-falls.jpg",
              "alt": "Ramboda Falls plunging down steep green mountain cliffs in the Sri Lankan hill country",
              "caption": "Scenic waterfall stops along the dramatic hill-country ascent towards Nuwara Eliya"
            }
          ]
        },
        {
          "title": "Working Tea Plantation & Factory Experience",
          "description": "Walk among the tea bushes and explore a working factory to witness the artisan orthodox tea-making process from freshly plucked green leaf to graded black tea, followed by a tea tasting.",
          "timing": "Midday",
          "photos": [
            {
              "src": "assets/images/destinations/nuwara-eliya.jpg",
              "alt": "Lush manicured green tea terraces spreading across misty highland hills in Nuwara Eliya",
              "caption": "Lush emerald tea estates carpeting the cool misty hillsides of the central highlands"
            },
            {
              "src": "assets/images/gallery/tea-factory.jpg",
              "alt": "Freshly plucked tea leaves withering on wooden racks inside a historic Ceylon tea factory",
              "caption": "Traditional orthodox tea-making experience inside a working highland Ceylon tea factory"
            }
          ]
        },
        {
          "title": "Nuwara Eliya Colonial Tour & Historic Post Office",
          "description": "Discover Nuwara Eliya's heritage, admiring Tudor-style colonial architecture, Victoria Park, Lake Gregory, and the red-brick 1894 Nuwara Eliya Post Office.",
          "timing": "Late Afternoon",
          "photos": []
        }
      ],
      "dayGallery": [
        {
          "src": "assets/images/destinations/nuwara-eliya.jpg",
          "alt": "Nuwara Eliya tea plantations",
          "caption": "Endless rows of high-grown Ceylon tea nurtured in the cool mountain climate"
        },
        {
          "src": "assets/images/gallery/tea-factory.jpg",
          "alt": "Tea factory withering lofts",
          "caption": "Artisan tea-making traditions handed down through generations"
        },
        {
          "src": "assets/images/tours/golden-pearl-of-sri-lanka/ramboda-falls.jpg",
          "alt": "Ramboda Falls waterfall",
          "caption": "Ramboda Falls cascading down verdant slopes along the mountain route"
        }
      ],
      "overnight": "Nuwara Eliya",
      "travelNotes": "Approx. 2.5 to 3 hours winding ascent from Kandy (500m) to Nuwara Eliya (1,868m altitude).",
      "optionalActivities": "Boating on Lake Gregory, golf club tea, or an evening stroll along colonial streets.",
      "practicalNotes": "Highland climate: Evening temperatures frequently dip between 10°C and 16°C. A light jacket or warm sweater is strongly recommended."
    },
    {
      "day": 7,
      "title": "Scenic Train Journey | Nanu Oya to Ella",
      "subtitle": "A spectacular railway adventure through the heart of Sri Lanka.",
      "destination": "Nanu Oya to Ella",
      "introduction": "Board the world-famous highland train at Nanu Oya railway station for one of the planet's most celebrated rail journeys. As the vintage train chugs gracefully along high-altitude ridges, gaze out the open doors and windows at sweeping tea plantations, cascading waterfalls, cloud forests, and charming mountain hamlets. Upon arriving in the scenic mountain town of Ella, visit the iconic Nine Arch Bridge, an engineering marvel constructed entirely of brick, stone, and cement amidst dense jungle. Later, take an unhurried hike up Little Adam's Peak for panoramic views across the sweeping Ella Gap.",
      "activities": [
        {
          "title": "The Legendary Hill Country Train Journey (Nanu Oya to Ella)",
          "description": "Board the blue passenger train for a breathtaking 2.5 to 3 hour railway adventure traversing mountain viaducts, cloud-wrapped ridges, and verdant tea estates.",
          "timing": "Morning / Midday (Subject to timetable)",
          "photos": [
            {
              "src": "assets/images/destinations/scenic-train.jpg",
              "alt": "Iconic blue passenger train travelling across bridges and emerald tea hills in Sri Lanka",
              "caption": "The celebrated scenic train journey travelling along high-altitude mountain railways to Ella"
            }
          ]
        },
        {
          "title": "Demodara Nine Arch Bridge Walk & Photography",
          "description": "Stroll down through lush tea gardens to stand beneath the monumental Nine Arch Bridge, watching the trains cross the colonial stone viaduct surrounded by tropical jungle.",
          "timing": "Afternoon",
          "photos": [
            {
              "src": "assets/images/destinations/ella.jpg",
              "alt": "The iconic Nine Arch Bridge in Ella surrounded by dense greenery and tea bushes",
              "caption": "The iconic Nine Arch Bridge in Ella, a colonial railway masterpiece enveloped by lush greenery"
            }
          ]
        },
        {
          "title": "Little Adam's Peak Scenic Ridge Hike",
          "description": "Take a gentle, rewarding walk along the crest of Little Adam's Peak (Punchi Sri Pada), soaking in 360-degree vistas across Ella Rock and the deep southern valleys.",
          "timing": "Late Afternoon",
          "photos": [
            {
              "src": "assets/images/gallery/little-adams-peak.jpg",
              "alt": "Green mountain path along the ridge of Little Adam's Peak with panoramic valley views",
              "caption": "Little Adam's Peak hike yielding breathtaking panoramic views across the Ella Gap"
            }
          ]
        }
      ],
      "dayGallery": [
        {
          "src": "assets/images/destinations/scenic-train.jpg",
          "alt": "Highland train in Sri Lanka",
          "caption": "Unforgettable rail journey through misty mountain passes and eucalyptus groves"
        },
        {
          "src": "assets/images/destinations/ella.jpg",
          "alt": "Nine Arch Bridge in Ella",
          "caption": "The colonial stone viaduct of Demodara spanning a verdant gorge"
        },
        {
          "src": "assets/images/gallery/little-adams-peak.jpg",
          "alt": "Little Adam's Peak trail",
          "caption": "Sweeping mountain panoramas from the summit ridge of Little Adam's Peak"
        }
      ],
      "overnight": "Accommodation to be confirmed",
      "travelNotes": "Train journey takes approx. 2.5 to 3 hours. Your private chauffeur transports your main luggage by road directly to Ella.",
      "optionalActivities": "Zipline adventure at Flying Ravana or evening café dining in Ella village.",
      "practicalNotes": "Planning note: Train tickets and preferred seating should be arranged in advance, subject to Sri Lanka Railways ticket reservation availability."
    },
    {
      "day": 8,
      "title": "Ravana Falls & The Diyaluma Waterfall Adventure",
      "subtitle": "Experience the natural beauty and adventurous spirit of Sri Lanka.",
      "destination": "Ella, Koslanda & Udawalawe",
      "introduction": "Begin your morning with a visit to Ravana Falls, one of the most famous and mythologically rich cascades in the Ella region. Continue south to Diyaluma Falls, Sri Lanka's second-highest waterfall plunging 220 metres down sheer rock cliffs into a dramatic valley. Enjoy a guided waterfall hike through scenic pine forests and rocky paths to appreciate the dramatic cascade and view the natural rock pools from safe, permitted vantage points. Savor a complimentary planned picnic lunch and one cold beer amidst magnificent mountain scenery, before descending towards the savannah plains of Udawalawe.",
      "activities": [
        {
          "title": "Morning Visit to Roaring Ravana Falls",
          "description": "Drive down the dramatic Ella-Wellawaya gap to admire the multi-tiered cascades of Ravana Falls, surrounded by lush mountain vegetation and boulder formations.",
          "timing": "Morning (08:30)",
          "photos": [
            {
              "src": "assets/images/gallery/ravana-falls.jpg",
              "alt": "Multi-tiered torrents of Ravana Falls tumbling down rocky cliffs near Ella",
              "caption": "Morning visit to Ravana Falls, one of the best-known cascades in the Ella mountain region"
            }
          ]
        },
        {
          "title": "Diyaluma Falls Guided Waterfall Hike & Natural Pool Views",
          "description": "Explore Diyaluma Falls with a local guide, taking in wide panoramic views of the main 220m drop from below, followed by hiking along upper scenic trails to appreciate the cascading natural rock pools where safe and permitted.",
          "timing": "Mid-Morning to Early Afternoon",
          "photos": [
            {
              "src": "assets/images/experiences/diyaluma-falls.jpg",
              "alt": "Wide panoramic photograph of Diyaluma Falls plunging down massive rock amphitheatre",
              "caption": "A wide panoramic photograph of Diyaluma Falls, one of Sri Lanka's tallest and most majestic waterfalls"
            },
            {
              "src": "assets/images/tours/golden-pearl-of-sri-lanka/diyaluma-upper-pools.jpg",
              "alt": "Upper Diyaluma waterfall cascade showing natural rocky pools and mountain hiking terrain",
              "caption": "A different perspective showing Diyaluma's upper natural pools and scenic waterfall hiking landscape"
            }
          ]
        },
        {
          "title": "Planned Waterfall Picnic Lunch & Complimentary Beer",
          "description": "Enjoy a relaxing picnic lunch surrounded by fresh mountain breezes and rushing water, complete with one complimentary beer as specified in the package.",
          "timing": "Midday",
          "photos": []
        },
        {
          "title": "Scenic Descent to Udawalawe Plains",
          "description": "Transition from cool mountainous slopes down into the warm, open dry-zone savannahs and agricultural reservoir lands of Udawalawe.",
          "timing": "Late Afternoon",
          "photos": []
        }
      ],
      "dayGallery": [
        {
          "src": "assets/images/experiences/diyaluma-falls.jpg",
          "alt": "Wide panoramic Diyaluma Falls",
          "caption": "Panoramic view of Diyaluma Falls cascading 220m into the Koslanda gorge"
        },
        {
          "src": "assets/images/tours/golden-pearl-of-sri-lanka/diyaluma-upper-pools.jpg",
          "alt": "Upper Diyaluma natural pools and trail",
          "caption": "Upper Diyaluma natural cascading rock pools and surrounding highland hiking trails"
        },
        {
          "src": "assets/images/gallery/ravana-falls.jpg",
          "alt": "Ravana Falls multi-tiered cascade",
          "caption": "The thundering cascades of Ravana Falls framed by dramatic mountain boulders"
        }
      ],
      "overnight": "Udawalawe area",
      "travelNotes": "Approx. 2.5 hours total driving time from Ella through Koslanda to the Udawalawe plains.",
      "optionalActivities": "Relaxation at safari camp / eco-lodge in Udawalawe.",
      "practicalNotes": "Planning note: Access to waterfall pools and certain hiking areas depends strictly on weather, water levels, and local safety conditions. Slippery rocks require sturdy footwear. Do not swim or enter natural pools when water levels are elevated or when advised against by your guide."
    },
    {
      "day": 9,
      "title": "Udawalawe Safari & Southern Coastal Discovery",
      "subtitle": "Meet Sri Lanka’s wildlife before discovering the southern coast.",
      "destination": "Udawalawe, Galle & Mirissa",
      "introduction": "Start early with an exhilarating wildlife safari in Udawalawe National Park, renowned as one of Asia's finest destinations for observing wild Asian elephants in large numbers. Travel across open grasslands and reservoir banks in an open 4x4 jeep, spotting elephants, water buffalo, sambar deer, crocodiles, and raptors. Continue with a visit to the scheduled elephant-feeding experience, subject to facility availability and ethical welfare standards. Afterwards, journey south to the coastal ramparts of UNESCO-listed Galle Fort, discover Mirissa's Coconut Tree Hill, and marvel at traditional stilt fishermen perched above the breaking ocean surf.",
      "activities": [
        {
          "title": "Udawalawe National Park 4x4 Wildlife Safari",
          "description": "Embark on an open safari across the savannah grasslands and reservoir edges of Udawalawe, encountering wild elephant herds, jackals, crested serpent eagles, and basking crocodiles.",
          "timing": "Early Morning (06:00 – 09:30)",
          "photos": [
            {
              "src": "assets/images/destinations/udawalawe.jpg",
              "alt": "Herds of wild Asian elephants grazing peacefully in open grasslands at Udawalawe National Park",
              "caption": "Wild elephants grazing in open grassland habitats during the Udawalawe National Park safari"
            }
          ]
        },
        {
          "title": "Scheduled Elephant-Feeding Experience (Transit Home)",
          "description": "Witness the scheduled feeding of rehabilitated juvenile elephants from an observation platform, subject to the availability and ethical welfare practices of the facility.",
          "timing": "Mid-Morning",
          "photos": []
        },
        {
          "title": "UNESCO World Heritage Galle Fort Walking Tour",
          "description": "Explore 400 years of living colonial heritage: 17th-century granite sea ramparts, the whitewashed lighthouse, Dutch Reformed churches, boutique lanes, and oceanfront viewpoints.",
          "timing": "Early Afternoon",
          "photos": [
            {
              "src": "assets/images/destinations/galle.jpg",
              "alt": "Galle Fort white colonial lighthouse and ancient granite ramparts meeting the Indian Ocean",
              "caption": "Historic Galle Fort, a UNESCO World Heritage Site with colonial ramparts and ocean viewpoints"
            },
            {
              "src": "assets/images/gallery/galle-street.jpg",
              "alt": "Charming colonial street with Dutch architecture and bougainvillea inside Galle Fort",
              "caption": "Atmospheric colonial streets and historic architecture preserved within Galle Fort"
            }
          ]
        },
        {
          "title": "Mirissa Coconut Tree Hill & Traditional Stilt Fishing",
          "description": "Visit Coconut Tree Hill in Mirissa, a famous reddish-clay promontory dotted with curved coconut palms overlooking turquoise seas, and observe the ancient tradition of coastal stilt fishing.",
          "timing": "Late Afternoon",
          "photos": [
            {
              "src": "assets/images/destinations/mirissa.jpg",
              "alt": "Tall curved coconut palms on the red bluff of Coconut Tree Hill overlooking the sea in Mirissa",
              "caption": "Mirissa's picturesque Coconut Tree Hill offering sweeping views across the Indian Ocean"
            },
            {
              "src": "assets/images/tours/golden-pearl-of-sri-lanka/stilt-fishermen.jpg",
              "alt": "Traditional Sri Lankan fishermen balanced on wooden stilts fishing in the breaking coastal surf",
              "caption": "Artisanal fishermen practicing the traditional art of stilt fishing along the southern coastline"
            }
          ]
        }
      ],
      "dayGallery": [
        {
          "src": "assets/images/destinations/udawalawe.jpg",
          "alt": "Wild elephants in Udawalawe",
          "caption": "Gentle giants socialising freely around the water holes of Udawalawe"
        },
        {
          "src": "assets/images/destinations/galle.jpg",
          "alt": "Galle Fort Lighthouse",
          "caption": "The colonial sentinel of Galle Fort standing watch over the southern ocean"
        },
        {
          "src": "assets/images/destinations/mirissa.jpg",
          "alt": "Coconut Tree Hill in Mirissa",
          "caption": "Iconic coastal headland fringed by swaying tropical palms in Mirissa"
        },
        {
          "src": "assets/images/tours/golden-pearl-of-sri-lanka/stilt-fishermen.jpg",
          "alt": "Traditional stilt fishing",
          "caption": "Generations of coastal heritage preserved on the southern reefs"
        }
      ],
      "overnight": "Accommodation to be confirmed",
      "travelNotes": "Approx. 2 hours drive from Udawalawe to Galle Fort; 45 minutes along coastal roads between Galle and Mirissa.",
      "optionalActivities": "Sunset cocktails on Mirissa beach or boutique shopping in Galle Fort.",
      "practicalNotes": "Planning note: Check travel times and activity durations for Udawalawe, Galle and Mirissa. Your guide coordinates schedules to ensure comfortable pacing."
    },
    {
      "day": 10,
      "title": "Madu River Safari, Turtle Conservation & Coastal Flavours",
      "subtitle": "Explore coastal waterways and discover Sri Lanka’s marine heritage.",
      "destination": "Balapitiya & Kosgoda",
      "introduction": "Explore the rich coastal wetlands and marine sanctuaries of Sri Lanka's south-west coast. Board a motorboat for an approximately 1.5-hour safari along the tranquil Madu River (Madu Ganga), a Ramsar wetland sanctuary encompassing 64 islands, intricate mangrove tunnels, and traditional cinnamon-peeling hamlets. Next, visit a sea turtle conservation centre to learn about the five species of endangered sea turtles that nest on Sri Lankan beaches and the vital conservation work protecting them. Conclude the day with a delectable coastal seafood lunch accompanied by one complimentary beer as specified in the package.",
      "activities": [
        {
          "title": "Madu River Mangrove Boat Safari (1.5 Hours)",
          "description": "Navigate through arching natural mangrove tunnels, discover rich estuarine biodiversity, observe cormorants and water monitors, and witness traditional cinnamon cultivation.",
          "timing": "Morning",
          "photos": [
            {
              "src": "assets/images/gallery/madu-ganga-river.jpg",
              "alt": "Wooden motorboat gliding beneath dense green mangrove tunnels on the Madu River",
              "caption": "A boat travelling through the lush Madu River mangroves, exploring coastal waterway ecosystems"
            }
          ]
        },
        {
          "title": "Sea Turtle Conservation Centre & Hatchery",
          "description": "Visit a community-led sea turtle conservation facility dedicated to rescuing injured turtles, protecting nesting sites, and releasing newborn hatchlings safely back to the ocean.",
          "timing": "Midday",
          "photos": [
            {
              "src": "assets/images/gallery/turtle-conservation.jpg",
              "alt": "Rescued green sea turtle swimming in a protected marine rehabilitation pool",
              "caption": "Sea turtle conservation centre learning about endangered marine turtles and preservation efforts"
            }
          ]
        },
        {
          "title": "Coastal Seafood Lunch with Complimentary Beer",
          "description": "Indulge in a fresh seafood lunch featuring local coastal flavours, fresh ocean catch, and Ceylon lagoon crab, accompanied by one complimentary cold beer.",
          "timing": "Afternoon",
          "photos": [
            {
              "src": "assets/images/tours/golden-pearl-of-sri-lanka/coastal-seafood.jpg",
              "alt": "Freshly cooked Sri Lankan coastal seafood dish with fragrant local spices",
              "caption": "Authentic coastal seafood lunch featuring fresh catch from Sri Lanka's southern shores"
            }
          ]
        }
      ],
      "dayGallery": [
        {
          "src": "assets/images/gallery/madu-ganga-river.jpg",
          "alt": "Madu River mangrove safari",
          "caption": "Gliding beneath natural mangrove arches on the biodiverse Madu Ganga"
        },
        {
          "src": "assets/images/gallery/turtle-conservation.jpg",
          "alt": "Sea turtle in rehabilitation pool",
          "caption": "Protecting endangered marine turtles nesting on warm southern shores"
        },
        {
          "src": "assets/images/tours/golden-pearl-of-sri-lanka/coastal-seafood.jpg",
          "alt": "Sri Lankan coastal seafood lunch",
          "caption": "Delicious coastal seafood feast prepared with rich coconut and roasted curry spices"
        }
      ],
      "overnight": "Accommodation to be confirmed",
      "travelNotes": "Scenic coastal highway driving connecting Balapitiya, Kosgoda, and beachside hotel areas.",
      "optionalActivities": "Natural fish therapy foot bath on the Madu River or swimming in the ocean.",
      "practicalNotes": "Bring sunscreen, sunglasses, and a hat for the open-top boat ride. Support ethical marine conservation practices by following visitor guidelines."
    },
    {
      "day": 11,
      "title": "Negombo’s Local Culture & Beachside Relaxation",
      "subtitle": "Discover coastal traditions before settling into your tropical beach escape.",
      "destination": "Negombo",
      "introduction": "Travel north along the western coastline towards Negombo, an atmospheric coastal town renowned for its centuries-old fishing heritage, vibrant lagoon, sandy beaches, and Dutch and Portuguese colonial influences. Visit the bustling Negombo fish market (Lellama) to observe the lively trade and traditional outrigger catamarans bringing in fresh catches of tuna, seer fish, and prawns. Explore a historic local church such as St. Mary's Church, reflecting Negombo's deep religious heritage. Afterward, check into your beach accommodation and embrace the laid-back atmosphere of Sri Lanka's western coastline.",
      "activities": [
        {
          "title": "Journey North to Coastal Negombo",
          "description": "Comfortable drive along the coastal corridor towards the bustling fishing town of Negombo, checking in to your seaside accommodation.",
          "timing": "Morning",
          "photos": []
        },
        {
          "title": "Negombo Traditional Fish Market & Fishing Heritage",
          "description": "Visit the lively oceanfront fish market, discovering traditional fishing methods, rows of sun-dried fish, and fishermen unloading their catches from handcrafted outrigger catamarans.",
          "timing": "Midday",
          "photos": [
            {
              "src": "assets/images/gallery/negombo-lagoon.jpg",
              "alt": "Handcrafted wooden outrigger catamarans resting on the sandy shores of Negombo lagoon",
              "caption": "Traditional wooden outrigger catamarans resting along Negombo's historic shoreline"
            },
            {
              "src": "assets/images/tours/golden-pearl-of-sri-lanka/negombo-fish-market.jpg",
              "alt": "Active bustling fish stalls at Negombo fish market with fishermen and sea catch",
              "caption": "Negombo fish market showcasing the town's vibrant artisanal fishing heritage"
            }
          ]
        },
        {
          "title": "Visit to Historic St. Mary's Church in Negombo",
          "description": "Step inside one of Negombo's most renowned cultural landmarks, admiring grand neoclassical architecture, religious frescoes, and ceiling paintings.",
          "timing": "Afternoon",
          "photos": [
            {
              "src": "assets/images/tours/golden-pearl-of-sri-lanka/st-marys-church-negombo.jpg",
              "alt": "Grand neoclassical facade and towers of historic St. Mary's Church in Negombo",
              "caption": "Historic St. Mary's Church in Negombo, showcasing the town's rich religious and architectural heritage"
            }
          ]
        },
        {
          "title": "Beachside Hotel Check-In & Coastal Relaxation",
          "description": "Settle into your beachfront hotel room and spend the late afternoon listening to the gentle ocean waves and watching the sunset.",
          "timing": "Late Afternoon",
          "photos": [
            {
              "src": "assets/images/tours/golden-pearl-of-sri-lanka/negombo-beach.jpg",
              "alt": "Golden sunset over the ocean waves and sandy shoreline of Negombo beach",
              "caption": "Golden-hour sands and refreshing ocean breezes on Negombo beach"
            }
          ]
        }
      ],
      "dayGallery": [
        {
          "src": "assets/images/gallery/negombo-lagoon.jpg",
          "alt": "Negombo fishing catamarans",
          "caption": "Artisanal fishing catamarans resting along the tranquil Negombo lagoon"
        },
        {
          "src": "assets/images/tours/golden-pearl-of-sri-lanka/negombo-fish-market.jpg",
          "alt": "Negombo fish market",
          "caption": "Lively fish trade and drying fish on the sandy shores of Negombo"
        },
        {
          "src": "assets/images/tours/golden-pearl-of-sri-lanka/st-marys-church-negombo.jpg",
          "alt": "St. Mary's Church Negombo",
          "caption": "Colonial-era architecture and religious artistry at historic St. Mary's Church"
        },
        {
          "src": "assets/images/tours/golden-pearl-of-sri-lanka/negombo-beach.jpg",
          "alt": "Negombo beach at sunset",
          "caption": "Relaxing coastal atmosphere welcoming you to western Sri Lanka"
        }
      ],
      "overnight": "Negombo",
      "travelNotes": "Approx. 2 hours highway drive from southern coastal areas to Negombo via expressway.",
      "optionalActivities": "Evening beachfront dinner with fresh grilled lobster or a sunset stroll along Porutota Road.",
      "practicalNotes": "Planning note: Confirm the exact historic church to be visited with your guide to coordinate around active church service times."
    },
    {
      "day": 12,
      "title": "Tropical Beach Escape",
      "subtitle": "Slow down and enjoy the beauty of Sri Lanka’s coastline.",
      "destination": "Negombo Beach",
      "introduction": "Dedicate this full day entirely to restorative leisure at your beachside accommodation in Negombo. After twelve days of exhilarating discovery across ancient citadels, tea estates, safaris, and waterfalls, slow down your pace. Unwind beside the Indian Ocean, stroll along the expansive golden sandy beach, read under swaying palm trees, or take a refreshing swim in the hotel pool. If you feel adventurous, independently explore the bustling streets of Negombo, browse souvenir boutiques, or sample tropical street snacks at your leisure.",
      "activities": [
        {
          "title": "Unhurried Beachside Leisure & Ocean Walks",
          "description": "Wake to the soothing sound of breaking waves. Enjoy an unhurried breakfast and spend the morning lounging beside the ocean or taking long barefoot walks on the warm sand.",
          "timing": "Morning",
          "photos": [
            {
              "src": "assets/images/tours/golden-pearl-of-sri-lanka/negombo-beach.jpg",
              "alt": "Pristine sandy beach with coconut palms swaying in the ocean breeze in Sri Lanka",
              "caption": "A beautiful Sri Lankan tropical beach providing the perfect setting for rest and unhurried beach walks"
            }
          ]
        },
        {
          "title": "Hotel Relaxation or Optional Negombo Exploration",
          "description": "Relax poolside with chilled coconut water, indulge in an optional spa therapy, or take an independent tuk-tuk to explore Negombo town's local shops and cafes.",
          "timing": "Afternoon",
          "photos": [
            {
              "src": "assets/images/gallery/mirissa-sunset.jpg",
              "alt": "Tranquil ocean view with gentle waves and palm trees bathed in soft afternoon light",
              "caption": "Peaceful ocean view and serene beachside relaxation at your coastal resort"
            }
          ]
        }
      ],
      "dayGallery": [
        {
          "src": "assets/images/tours/golden-pearl-of-sri-lanka/negombo-beach.jpg",
          "alt": "Tropical beach in Sri Lanka",
          "caption": "Warm golden sands and tropical sea breezes on Sri Lanka's western coast"
        },
        {
          "src": "assets/images/gallery/mirissa-sunset.jpg",
          "alt": "Peaceful ocean relaxation",
          "caption": "A slower rhythm to soak in the tropical atmosphere at your own pace"
        }
      ],
      "overnight": "Negombo",
      "travelNotes": "Zero long-distance travel. Your private vehicle and guide remain on standby for local errands.",
      "optionalActivities": "Ayurvedic body massage, water sports, or an independent seaside café dinner.",
      "practicalNotes": "Keep hydrated in the coastal tropical sun. Sunscreen, hats, and sunglasses are recommended."
    },
    {
      "day": 13,
      "title": "A Final Day in Paradise",
      "subtitle": "Enjoy your last full day of Sri Lankan hospitality.",
      "destination": "Negombo Beach",
      "introduction": "Embrace your final full day on this magical teardrop island. Savor a peaceful morning watching the ocean horizon, relish tropical fruits and authentic Ceylon tea, and spend your hours exactly as you wish. Reflect on two weeks of rich memories—from climbing ancient rock summits and tasting estate tea to spotting wild elephants and standing beneath thundering waterfalls. Enjoy a memorable farewell sunset as the sky turns fiery crimson over the Indian Ocean, followed by a delightful seaside dinner.",
      "activities": [
        {
          "title": "Serene Morning by the Ocean",
          "description": "Enjoy an unhurried breakfast overlooking the Indian Ocean. Take a final morning swim in the sea or pool, and enjoy personal leisure time in your resort.",
          "timing": "Morning",
          "photos": [
            {
              "src": "assets/images/destinations/mirissa.jpg",
              "alt": "Lush tropical coastal scenery with tall palms and breaking blue ocean surf",
              "caption": "Tropical coastal scenery and peaceful beachside setting for your final full day in paradise"
            }
          ]
        },
        {
          "title": "Personal Leisure & Farewell Memories",
          "description": "Free time for last-minute souvenir shopping, packing, enjoying local coastal food, or relaxing with your loved ones beside the waves.",
          "timing": "Afternoon",
          "photos": []
        },
        {
          "title": "Golden-Hour Coastal Sunset & Final Evening",
          "description": "Celebrate your last evening in Sri Lanka with a breathtaking coastal sunset over the horizon, followed by a celebratory farewell dinner enjoying warm island hospitality.",
          "timing": "Evening",
          "photos": [
            {
              "src": "assets/images/gallery/mirissa-sunset.jpg",
              "alt": "Radiant golden hour sunset casting warm amber glow across the tropical beach and palm silhouettes",
              "caption": "A beautiful Sri Lankan coastal sunset illuminating the golden sands during your final evening in paradise"
            }
          ]
        }
      ],
      "dayGallery": [
        {
          "src": "assets/images/gallery/mirissa-sunset.jpg",
          "alt": "Sri Lankan coastal sunset",
          "caption": "Golden-hour farewell sunset casting warm amber light across the ocean"
        },
        {
          "src": "assets/images/destinations/mirissa.jpg",
          "alt": "Tropical coastal scenery",
          "caption": "Gentle ocean breezes to celebrate the closing chapter of your 14-day grand discovery"
        }
      ],
      "overnight": "Negombo",
      "travelNotes": "No scheduled highway driving. Vehicle available for local dining or boutique transfers.",
      "optionalActivities": "Celebratory candlelit seafood dinner on the beach.",
      "practicalNotes": "Organize your baggage and ensure your passports, flight tickets, and departure details are readily accessible for tomorrow's transfer."
    },
    {
      "day": 14,
      "title": "Farewell to Sri Lanka",
      "subtitle": "Take home unforgettable memories.",
      "destination": "Bandaranaike International Airport (CMB)",
      "introduction": "Enjoy your final morning in Sri Lanka with breakfast and a lingering look across the Indian Ocean before checking out of your hotel. Your private chauffeur-guide will provide a smooth, scheduled transfer to Bandaranaike International Airport (CMB) in good time for your flight home. As your journey comes to an end, take home lifelong memories of ancient heritage, vibrant culture, remarkable wildlife, misty mountain landscapes, authentic cuisine, and the warm hospitality of Sri Lanka.",
      "activities": [
        {
          "title": "Hotel Check-Out & Fond Farewell",
          "description": "Complete hotel checkout and bid farewell to the friendly hotel team after two weeks of unforgettable island discovery.",
          "timing": "Morning (Tailored to flight departure)",
          "photos": [
            {
              "src": "assets/images/experiences/ceylon-landscape-closing.jpg",
              "alt": "Breathtaking panoramic Sri Lankan landscape bathed in golden morning light communicating a memorable farewell",
              "caption": "A breathtaking Sri Lankan landscape communicating an unforgettable farewell and lifelong memories of Ceylon"
            }
          ]
        },
        {
          "title": "Scheduled Private Airport Transfer & Departure",
          "description": "Your private executive vehicle transfers you punctually to Bandaranaike International Airport (CMB). Your chauffeur-guide assists with luggage drop-off before your onward flight.",
          "timing": "3 Hours Prior to Flight",
          "photos": [
            {
              "src": "assets/images/tours/golden-pearl-of-sri-lanka/airport-departure.jpg",
              "alt": "Bandaranaike International Airport departure terminal in Sri Lanka",
              "caption": "Smooth, punctual departure transfer to Bandaranaike International Airport (CMB) for your journey home"
            },
            {
              "src": "assets/images/vehicles/private-car.jpg",
              "alt": "Executive tour vehicle ready for airport transfer",
              "caption": "Comfortable private executive transfer concluding your 14-day discovery with SL Mango Exotic Tours"
            }
          ]
        }
      ],
      "dayGallery": [
        {
          "src": "assets/images/experiences/ceylon-landscape-closing.jpg",
          "alt": "Memorable Sri Lankan landscape farewell",
          "caption": "Lifelong memories of ancient heritage, emerald tea hills, and wild beauty"
        },
        {
          "src": "assets/images/tours/golden-pearl-of-sri-lanka/airport-departure.jpg",
          "alt": "Airport departure terminal",
          "caption": "Punctual, stress-free transfer to Bandaranaike International Airport"
        },
        {
          "src": "assets/images/vehicles/private-car.jpg",
          "alt": "Private tour vehicle",
          "caption": "Dedicated private chauffeur-guide care from your arrival to your farewell"
        }
      ],
      "overnight": "Departure (Homebound Flight)",
      "travelNotes": "Approx. 20–25 minutes drive from Negombo beach hotels to Bandaranaike International Airport (CMB).",
      "optionalActivities": "Duty-free shopping at the airport terminal (Ceylon tea, handicrafts, spices).",
      "practicalNotes": "Standard international flight check-in opens 3 hours prior to departure. Have your passport and travel documents ready."
    }
  ],
  "destinationGallery": [
    {
      "id": "gp-gal-01",
      "title": "Sigiriya Lion Rock Citadel",
      "category": "culture",
      "categoryLabel": "Culture & Heritage",
      "image": "assets/images/destinations/sigiriya.jpg",
      "thumb": "assets/images/destinations/sigiriya.jpg",
      "alt": "Ancient 5th-century palace fortress of Sigiriya rising above the jungle canopy",
      "caption": "King Kashyapa's royal citadel rising 200m above the forested plains of the Cultural Triangle."
    },
    {
      "id": "gp-gal-02",
      "title": "Temple of the Sacred Tooth Relic",
      "category": "culture",
      "categoryLabel": "Culture & Heritage",
      "image": "assets/images/destinations/kandy.jpg",
      "thumb": "assets/images/destinations/kandy.jpg",
      "alt": "Sri Dalada Maligawa beside Kandy Lake",
      "caption": "The spiritual sanctuary of Theravada Buddhism nestled along the forested lake shore in Kandy."
    },
    {
      "id": "gp-gal-03",
      "title": "Dambulla Royal Cave Temple",
      "category": "culture",
      "categoryLabel": "Culture & Heritage",
      "image": "assets/images/destinations/dambulla.jpg",
      "thumb": "assets/images/destinations/dambulla.jpg",
      "alt": "Golden stupa and ancient cave entrance beneath an overhanging granite mountain",
      "caption": "Two millennia of Buddhist devotion preserved in five vast painted cavern sanctuaries."
    },
    {
      "id": "gp-gal-04",
      "title": "Embekka Devalaya Wood Carvings",
      "category": "culture",
      "categoryLabel": "Culture & Heritage",
      "image": "assets/images/tours/golden-pearl-of-sri-lanka/embekka-wood-carvings.jpg",
      "thumb": "assets/images/tours/golden-pearl-of-sri-lanka/embekka-wood-carvings.jpg",
      "alt": "Intricately carved wooden pillars at Embekka Devalaya",
      "caption": "Exquisite 14th-century wood carvings of dancers and mythical beasts at Embekka Devalaya."
    },
    {
      "id": "gp-gal-05",
      "title": "Ambuluwawa Biodiversity Pinnacle",
      "category": "culture",
      "categoryLabel": "Culture & Heritage",
      "image": "assets/images/tours/golden-pearl-of-sri-lanka/ambuluwawa-tower.jpg",
      "thumb": "assets/images/tours/golden-pearl-of-sri-lanka/ambuluwawa-tower.jpg",
      "alt": "Spiral white tower of Ambuluwawa on mountain summit",
      "caption": "Distinctive architectural spiral tower at Gampola offering 360-degree mountain panoramas."
    },
    {
      "id": "gp-gal-06",
      "title": "Galle Fort Ramparts & Lighthouse",
      "category": "culture",
      "categoryLabel": "Culture & Heritage",
      "image": "assets/images/destinations/galle.jpg",
      "thumb": "assets/images/destinations/galle.jpg",
      "alt": "White lighthouse at Galle Fort on granite sea ramparts",
      "caption": "17th-century Dutch colonial fortifications and lighthouse meeting the turquoise Indian Ocean."
    },
    {
      "id": "gp-gal-07",
      "title": "Wild Elephants in Udawalawe",
      "category": "wildlife",
      "categoryLabel": "Wildlife Safari",
      "image": "assets/images/destinations/udawalawe.jpg",
      "thumb": "assets/images/destinations/udawalawe.jpg",
      "alt": "Wild Asian elephant family grazing peaceably in open savannah grasses",
      "caption": "Wild Asian elephants roaming free across the savannah grasslands of Udawalawe National Park."
    },
    {
      "id": "gp-gal-08",
      "title": "Habarana Elephant Corridor",
      "category": "wildlife",
      "categoryLabel": "Wildlife Safari",
      "image": "assets/images/experiences/gentle-giants.jpg",
      "thumb": "assets/images/experiences/gentle-giants.jpg",
      "alt": "Elephant herd grazing in open grasslands",
      "caption": "Elephant herds gathering in the lush wetland margins during your evening safari."
    },
    {
      "id": "gp-gal-09",
      "title": "Sea Turtle Conservation Sanctuary",
      "category": "wildlife",
      "categoryLabel": "Wildlife Safari",
      "image": "assets/images/gallery/turtle-conservation.jpg",
      "thumb": "assets/images/gallery/turtle-conservation.jpg",
      "alt": "Green sea turtle swimming peacefully in a protective rehabilitation pool",
      "caption": "Community-led preservation protecting endangered sea turtles along the southern coastline."
    },
    {
      "id": "gp-gal-10",
      "title": "4x4 Safari Jeep Expedition",
      "category": "wildlife",
      "categoryLabel": "Wildlife Safari",
      "image": "assets/images/gallery/yala-safari-jeep.jpg",
      "thumb": "assets/images/gallery/yala-safari-jeep.jpg",
      "alt": "Open 4x4 safari jeep exploring wildlife trails",
      "caption": "Dedicated 4x4 safari expedition with experienced naturalists and wildlife trackers."
    },
    {
      "id": "gp-gal-11",
      "title": "Highland Tea Terraces in Nuwara Eliya",
      "category": "highlands",
      "categoryLabel": "Hill Country",
      "image": "assets/images/destinations/nuwara-eliya.jpg",
      "thumb": "assets/images/destinations/nuwara-eliya.jpg",
      "alt": "Endless rows of manicured green tea bushes clothing highland slopes",
      "caption": "High-grown Ceylon tea estates where the world's most aromatic tea leaves are nurtured."
    },
    {
      "id": "gp-gal-12",
      "title": "Artisan Tea Factory Withering Lofts",
      "category": "highlands",
      "categoryLabel": "Hill Country",
      "image": "assets/images/gallery/tea-factory.jpg",
      "thumb": "assets/images/gallery/tea-factory.jpg",
      "alt": "Fresh green tea leaves withering on wooden factory racks",
      "caption": "The traditional orthodox tea crafting process that gives Ceylon tea its world-renowned flavor."
    },
    {
      "id": "gp-gal-13",
      "title": "Little Adam's Peak Mountain Ridge",
      "category": "highlands",
      "categoryLabel": "Hill Country",
      "image": "assets/images/gallery/little-adams-peak.jpg",
      "thumb": "assets/images/gallery/little-adams-peak.jpg",
      "alt": "Winding path along the green ridge crest of Little Adam's Peak",
      "caption": "Rewarding morning hike yielding 360-degree vistas across southern mountain ravines in Ella."
    },
    {
      "id": "gp-gal-14",
      "title": "Arthur's Seat Kandy Lake Panorama",
      "category": "highlands",
      "categoryLabel": "Hill Country",
      "image": "assets/images/tours/golden-pearl-of-sri-lanka/kandy-viewpoint.jpg",
      "thumb": "assets/images/tours/golden-pearl-of-sri-lanka/kandy-viewpoint.jpg",
      "alt": "Panoramic view of Kandy city hills and lake from Arthur's Seat",
      "caption": "Panoramic highland viewpoint overlooking the sacred city and forested hills of Kandy."
    },
    {
      "id": "gp-gal-15",
      "title": "Diyaluma Falls Panoramic Cascade",
      "category": "waterfalls",
      "categoryLabel": "Waterfalls",
      "image": "assets/images/experiences/diyaluma-falls.jpg",
      "thumb": "assets/images/experiences/diyaluma-falls.jpg",
      "alt": "Wide panoramic view of Diyaluma Falls cascading down sheer rock",
      "caption": "Sri Lanka's second-highest waterfall plunging 220 metres into the Koslanda gorge."
    },
    {
      "id": "gp-gal-16",
      "title": "Upper Diyaluma Natural Pools & Trail",
      "category": "waterfalls",
      "categoryLabel": "Waterfalls",
      "image": "assets/images/tours/golden-pearl-of-sri-lanka/diyaluma-upper-pools.jpg",
      "thumb": "assets/images/tours/golden-pearl-of-sri-lanka/diyaluma-upper-pools.jpg",
      "alt": "Natural rock pools and cascading upper tiers of Diyaluma Falls",
      "caption": "Upper Diyaluma natural cascading rock pools and surrounding mountain hiking trails."
    },
    {
      "id": "gp-gal-17",
      "title": "Roaring Cascades of Ravana Falls",
      "category": "waterfalls",
      "categoryLabel": "Waterfalls",
      "image": "assets/images/gallery/ravana-falls.jpg",
      "thumb": "assets/images/gallery/ravana-falls.jpg",
      "alt": "Multi-tiered waterfall tumbling down dark rocky cliffs",
      "caption": "One of Sri Lanka's widest falls, steeped in the ancient legends of the Ramayana in Ella."
    },
    {
      "id": "gp-gal-18",
      "title": "Ramboda Falls Highland Cascade",
      "category": "waterfalls",
      "categoryLabel": "Waterfalls",
      "image": "assets/images/tours/golden-pearl-of-sri-lanka/ramboda-falls.jpg",
      "thumb": "assets/images/tours/golden-pearl-of-sri-lanka/ramboda-falls.jpg",
      "alt": "Ramboda Falls plunging 109m down the mountainside",
      "caption": "Spectacular 109m cascade plunging down misty green cliffs along the road to Nuwara Eliya."
    },
    {
      "id": "gp-gal-19",
      "title": "Highland Scenic Blue Train",
      "category": "train",
      "categoryLabel": "Train Journey",
      "image": "assets/images/destinations/scenic-train.jpg",
      "thumb": "assets/images/destinations/scenic-train.jpg",
      "alt": "Bright blue passenger train winding through terraced emerald tea hills",
      "caption": "The world-famous rail route climbing through misty cloud forests and cascading waterfalls."
    },
    {
      "id": "gp-gal-20",
      "title": "Demodara Nine Arch Bridge",
      "category": "train",
      "categoryLabel": "Train Journey",
      "image": "assets/images/destinations/ella.jpg",
      "thumb": "assets/images/destinations/ella.jpg",
      "alt": "Historic Demodara Nine Arch Bridge spanning a lush tea valley",
      "caption": "Colonial stone viaduct hidden deep within the verdant hill-country forests of Ella."
    },
    {
      "id": "gp-gal-21",
      "title": "Coconut Tree Hill in Mirissa",
      "category": "beaches",
      "categoryLabel": "Beaches",
      "image": "assets/images/destinations/mirissa.jpg",
      "thumb": "assets/images/destinations/mirissa.jpg",
      "alt": "Tall curved coconut palms atop a red earth bluff overlooking the sea",
      "caption": "Iconic coastal promontory overlooking the breaking surf of Mirissa Bay."
    },
    {
      "id": "gp-gal-22",
      "title": "Traditional Southern Stilt Fishermen",
      "category": "beaches",
      "categoryLabel": "Beaches",
      "image": "assets/images/tours/golden-pearl-of-sri-lanka/stilt-fishermen.jpg",
      "thumb": "assets/images/tours/golden-pearl-of-sri-lanka/stilt-fishermen.jpg",
      "alt": "Fishermen perched on wooden crossbars practicing stilt fishing",
      "caption": "Ancient artisanal stilt fishing tradition practiced along the warm southern reefs."
    },
    {
      "id": "gp-gal-23",
      "title": "Negombo Golden Sandy Beach",
      "category": "beaches",
      "categoryLabel": "Beaches",
      "image": "assets/images/tours/golden-pearl-of-sri-lanka/negombo-beach.jpg",
      "thumb": "assets/images/tours/golden-pearl-of-sri-lanka/negombo-beach.jpg",
      "alt": "Sunset on Negombo beach with golden sands and palm trees",
      "caption": "Golden-hour sands and refreshing ocean breezes on Negombo's western shoreline."
    },
    {
      "id": "gp-gal-24",
      "title": "Twilight on Mirissa Beach",
      "category": "beaches",
      "categoryLabel": "Beaches",
      "image": "assets/images/gallery/mirissa-sunset.jpg",
      "thumb": "assets/images/gallery/mirissa-sunset.jpg",
      "alt": "Golden evening glow over gentle surf and palm trees",
      "caption": "The tranquil close of another sun-drenched day along the warm tropical coastline."
    },
    {
      "id": "gp-gal-25",
      "title": "Sunrise from Pidurangala Rock",
      "category": "experiences",
      "categoryLabel": "Local Experiences",
      "image": "assets/images/gallery/pidurangala-sunrise.jpg",
      "thumb": "assets/images/gallery/pidurangala-sunrise.jpg",
      "alt": "Panoramic view of Sigiriya Rock rising from the sea of mist at sunrise",
      "caption": "Dawn light washing over the central forests from the ancient monastic summit."
    },
    {
      "id": "gp-gal-26",
      "title": "Traditional Village Oxcart Ride",
      "category": "experiences",
      "categoryLabel": "Local Experiences",
      "image": "assets/images/experiences/village-life.jpg",
      "thumb": "assets/images/experiences/village-life.jpg",
      "alt": "Traditional oxcart ride in Habarana village",
      "caption": "Authentic glimpse into rural Sri Lankan lifestyles and timeless farming practices."
    },
    {
      "id": "gp-gal-27",
      "title": "Clay-Pot Cooking Demonstration",
      "category": "experiences",
      "categoryLabel": "Local Experiences",
      "image": "assets/images/experiences/sri-lankan-cooking.jpg",
      "thumb": "assets/images/experiences/sri-lankan-cooking.jpg",
      "alt": "Cooking demo in traditional clay pots",
      "caption": "Learning traditional spices, coconut scraping, and open-hearth culinary arts."
    },
    {
      "id": "gp-gal-28",
      "title": "Kandyan Cultural Performance",
      "category": "experiences",
      "categoryLabel": "Local Experiences",
      "image": "assets/images/gallery/kandyan-dance.jpg",
      "thumb": "assets/images/gallery/kandyan-dance.jpg",
      "alt": "Traditional Kandyan dancers in ornate regalia",
      "caption": "Centuries-old rhythmic drumming and acrobatic ritual dances of the Hill Country."
    },
    {
      "id": "gp-gal-29",
      "title": "Madu River Mangrove Boat Safari",
      "category": "experiences",
      "categoryLabel": "Local Experiences",
      "image": "assets/images/gallery/madu-ganga-river.jpg",
      "thumb": "assets/images/gallery/madu-ganga-river.jpg",
      "alt": "Motorboat beneath mangrove tunnels on Madu Ganga",
      "caption": "Exploring 64 islands, cinnamon peeling homesteads, and coastal mangrove tunnels."
    },
    {
      "id": "gp-gal-30",
      "title": "Coastal Seafood Feast",
      "category": "experiences",
      "categoryLabel": "Local Experiences",
      "image": "assets/images/tours/golden-pearl-of-sri-lanka/coastal-seafood.jpg",
      "thumb": "assets/images/tours/golden-pearl-of-sri-lanka/coastal-seafood.jpg",
      "alt": "Sri Lankan coastal seafood dish",
      "caption": "Delectable seafood lunch featuring fresh ocean catch, lagoon crabs, and coastal spices."
    }
  ]
},
  {
    slug: "classic-sri-lanka",
    title: "Classic Sri Lanka",
    duration: "7 Days / 6 Nights",
    durationDays: 7,
    category: "Classic & Highlights",
    categorySlug: "classic",
    badge: "Most Popular",
    heroImage: "assets/images/tours/classic-sri-lanka/hero.jpg",
    destinationsSummary: "Negombo • Sigiriya • Dambulla • Kandy • Nuwara Eliya • Galle",
    pace: "Balanced & Comprehensive",
    suitableFor: "First-time visitors, couples, families, and culture enthusiasts",
    shortDescription: "The essential Sri Lankan odyssey connecting ancient royal sky fortresses, sacred Buddhist sanctuaries, misty tea highlands, and UNESCO-listed colonial coastal ramparts.",
    overview: "Classic Sri Lanka is an artfully balanced seven-day exploration created for travellers wishing to experience the diverse facets of the island in comfort. From the 5th-century rock citadel of Sigiriya to the cool emerald hills of Nuwara Eliya and the 400-year-old living fortress of Galle, this route provides a seamless sequence of geological wonders, spiritual traditions, high-grown Ceylon tea heritage, and golden southern coastlines. Travel with your dedicated executive vehicle and private licensed chauffeur-guide, ensuring relaxed pacing and authentic roadside encounters.",
    highlights: [
      "Ascend the UNESCO World Heritage 5th-century Sigiriya Lion Rock citadel",
      "Wander through five ancient painted cave sanctuaries at Dambulla",
      "Witness the evening offering ceremony at the Temple of the Sacred Tooth Relic in Kandy",
      "Taste fresh orthodox Ceylon tea at a working mountain factory in Nuwara Eliya",
      "Experience the iconic blue highland train journey across mountain viaducts",
      "Stroll the cobblestone lanes and sunset ramparts of 17th-century Galle Fort"
    ],
    routeOverview: "Bandaranaike Airport / Negombo → Sigiriya & Dambulla (2 Nights) → Kandy (1 Night) → Nuwara Eliya (1 Night) → Galle Fort (2 Nights) → Airport Departure",
    days: [
      {
        day: 1,
        title: "Arrival in Sri Lanka — Coastal Negombo Lagoon",
        destination: "Negombo",
        introduction: "Touch down at Bandaranaike International Airport where your private chauffeur-guide welcomes you with cool towels and chilled king coconut water. Transfer a short distance to the serene coastal town of Negombo to unwind beside the Indian Ocean after your international flight.",
        activities: [
          {
            title: "Private Airport Meet & Welcome",
            description: "Personalised airport reception at the arrivals hall, assistance with currency exchange or local SIM cards, and a comfortable 20-minute transfer in your executive air-conditioned vehicle to your coastal hotel.",
            timing: "Upon Arrival",
            photos: [
              {
                src: "assets/images/vehicles/private-car.jpg",
                alt: "Executive private tour vehicle ready for airport transfer",
                caption: "Private executive vehicle for your Sri Lankan journey"
              }
            ]
          },
          {
            title: "Negombo Lagoon & Catamaran Sunset Walk",
            description: "In the late afternoon, take an unhurried stroll along the palm-fringed shoreline and the quiet canals of Negombo Lagoon, observing traditional outrigger wooden catamarans returning from the day's ocean voyage.",
            timing: "Late Afternoon",
            photos: [
              {
                src: "assets/images/gallery/negombo-lagoon.jpg",
                alt: "Traditional fishing boats moored in Negombo lagoon",
                caption: "Artisanal wooden catamarans resting on the Negombo shoreline"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/gallery/negombo-lagoon.jpg",
            alt: "Negombo lagoon at golden hour",
            caption: "Golden hour reflection over the historic fishing canals"
          },
          {
            src: "assets/images/destinations/mirissa.jpg",
            alt: "Tropical coconut palms along the coast",
            caption: "Gentle ocean breezes to begin your island discovery"
          }
        ],
        overnight: "Negombo (Coastal Boutique Hotel)",
        travelNotes: "Approx. 15–20 minutes drive from Colombo International Airport (CMB) to Negombo beach strip.",
        optionalActivities: "Evening Ayurvedic relaxation massage at the hotel spa to recover from jet lag.",
        practicalNotes: "Casual lightweight clothing. If arriving early, enjoy the swimming pool and beachfront dining."
      },
      {
        day: 2,
        title: "Journey to the Cultural Triangle — Dambulla Cave Monasteries",
        destination: "Dambulla & Sigiriya",
        introduction: "Depart the western coast and travel inland across Sri Lanka's verdant rural heartland into the Cultural Triangle. Ascend the sloping black rock of Dambulla to step inside five breathtaking cave shrines adorned with millennia of sacred art before settling into your jungle resort in Sigiriya.",
        activities: [
          {
            title: "Scenic Countryside Drive with Tropical Fruit Stops",
            description: "Drive northeast through lush coconut groves, rural paddy fields, and roadside markets. Stop at an authentic fruit stall to taste fresh Thambili (king coconut), seasonal Ceylon mangoes, and sweet red bananas.",
            timing: "Morning",
            photos: [
              {
                src: "assets/images/destinations/sigiriya.jpg",
                alt: "Rural landscape approaching the Cultural Triangle",
                caption: "Approaching the forested plains of the Central Province"
              }
            ]
          },
          {
            title: "Exploration of the Royal Dambulla Cave Temple",
            description: "Ascend the rock terrace to discover the five cavern sanctuaries of Dambulla, carved beneath a gigantic rock overhang. Marvel at 153 Buddha statues, intricate ceiling murals detailing Buddhist history, and panoramic views of the distant Sigiriya rock.",
            timing: "Afternoon",
            photos: [
              {
                src: "assets/images/destinations/dambulla.jpg",
                alt: "Golden Dagoba and entrance to Dambulla Cave Temple",
                caption: "Sacred cave sanctuaries housing two millennia of Buddhist art"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/dambulla.jpg",
            alt: "Dambulla rock temple stupa",
            caption: "The majestic golden stupa at the base of Dambulla rock"
          },
          {
            src: "assets/images/gallery/pidurangala-sunrise.jpg",
            alt: "Forest landscape around Sigiriya",
            caption: "Forest canopy stretching across the Matale plains"
          }
        ],
        overnight: "Sigiriya (Forest Eco-Resort)",
        travelNotes: "Approx. 3.5 to 4 hours comfortable drive (145 km) via Kurunegala with flexible rest stops.",
        optionalActivities: "Evening tranquil birdwatching walk along the natural waterways of your hotel grounds.",
        practicalNotes: "Dambulla requires covered knees and shoulders. Shoes must be removed at the upper temple terrace (clean walking socks are recommended for the sunny granite stones)."
      },
      {
        day: 3,
        title: "The Sky Citadel of Sigiriya & Authentic Village Life",
        destination: "Sigiriya",
        introduction: "Rise early in the crisp morning air to scale the dramatic 5th-century rock fortress of Sigiriya before the day warms. In the afternoon, experience traditional rural Sri Lankan hospitality, travelling by catamaran across a lily-covered village lake.",
        activities: [
          {
            title: "Early Morning Ascent of Sigiriya Lion Rock",
            description: "Climb through the symmetrical landscaped water gardens, past the ancient Sigiriya Maidens frescoes and Mirror Wall, and pass through the gigantic carved Lion's Paws to reach the 1.6-hectare palace summit for sweeping 360-degree jungle views.",
            timing: "Early Morning (07:00 – 10:00)",
            photos: [
              {
                src: "assets/images/destinations/sigiriya.jpg",
                alt: "Sigiriya Lion Rock Fortress rising 200m above the jungle",
                caption: "The ancient royal sky palace of King Kashyapa"
              }
            ]
          },
          {
            title: "Hiriwadunna Rural Village & Lake Catamaran Cruise",
            description: "Cross a tranquil village lake fringed with water lilies in a traditional hand-paddled catamaran boat, followed by a warm demonstration of rural clay-pot cooking and authentic wood-fired rice and curry served on fresh banana leaves.",
            timing: "Afternoon",
            photos: [
              {
                src: "assets/images/gallery/pidurangala-sunrise.jpg",
                alt: "Village countryside view of Sigiriya",
                caption: "Rural lake crossing with distant views of Sigiriya"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/sigiriya.jpg",
            alt: "Sigiriya summit ruins and water gardens",
            caption: "Terraced water gardens and ancient palace foundations"
          },
          {
            src: "assets/images/gallery/pidurangala-sunrise.jpg",
            alt: "Sunrise vista of Sigiriya from Pidurangala",
            caption: "Early dawn light illuminating the historic rock plateau"
          }
        ],
        overnight: "Sigiriya (Forest Eco-Resort)",
        travelNotes: "Local village transfers within a 15-minute radius in your private vehicle.",
        optionalActivities: "Late afternoon climb of Pidurangala Rock for an iconic sunset vista facing Sigiriya.",
        practicalNotes: "Wear comfortable walking shoes with good grip for the approx. 1,200 steps at Sigiriya. Bring water, hat, and sunscreen."
      },
      {
        day: 4,
        title: "Spices of Matale & The Sacred Lake Kingdom of Kandy",
        destination: "Matale & Kandy",
        introduction: "Journey south into the foothills of the central highlands. Walk through an aromatic spice garden in Matale to understand how Ceylon cinnamon, cardamom, and clove are cultivated, before arriving in the hill capital of Kandy for an evening at the sacred Temple of the Tooth.",
        activities: [
          {
            title: "Matale Spice Sanctuary Walk",
            description: "Enjoy a guided botanical walk through a hillside organic spice garden. Learn the medicinal and culinary secrets of true Ceylon cinnamon, wild black pepper, nutmeg, and vanilla vines, concluding with refreshing herbal tea.",
            timing: "Morning",
            photos: [
              {
                src: "assets/images/gallery/peradeniya-gardens.jpg",
                alt: "Lush tropical foliage in the spice hills of Matale",
                caption: "Exploring native spices and aromatic plants in Matale"
              }
            ]
          },
          {
            title: "Temple of the Sacred Tooth Relic (Sri Dalada Maligawa)",
            description: "At twilight, enter the venerated golden-roofed temple complex during the ceremonial evening Thevava. Hear the reverberation of ceremonial temple drums and traditional conch shells as white-clad devotees present offerings of lotus blossoms before the inner relic chamber.",
            timing: "Evening (18:30 – 20:00)",
            photos: [
              {
                src: "assets/images/destinations/kandy.jpg",
                alt: "Temple of the Tooth beside Kandy Lake illuminated at dusk",
                caption: "The venerated Sri Dalada Maligawa during evening ceremonies"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/kandy.jpg",
            alt: "Kandy Lake and temple skyline",
            caption: "Lakeside walk under shady rain trees in Kandy"
          },
          {
            src: "assets/images/gallery/kandyan-dance.jpg",
            alt: "Traditional Kandyan dancers in ceremonial costumes",
            caption: "Ceremonial drummers preserving ancient ritual rhythms"
          }
        ],
        overnight: "Kandy (Hillside Heritage Hotel)",
        travelNotes: "Approx. 2.5 hours drive (90 km) from Sigiriya to Kandy via the Matale mountain pass.",
        optionalActivities: "Attend a traditional Kandyan cultural dance performance featuring fire-walking prior to temple visit.",
        practicalNotes: "Temple attire: Pure white or light modest clothing covering shoulders and below the knees. Shoes must be deposited at the entrance counter."
      },
      {
        day: 5,
        title: "Tea Country Highlands — Waterfalls, Estates & Colonial Nuwara Eliya",
        destination: "Nuwara Eliya",
        introduction: "Ascend winding mountain passes into the cool mist-wrapped highlands of Nuwara Eliya at 1,868 metres elevation. Tour a historic working tea estate, observe the orthodox tea-making process, and enjoy an English high tea in colonial surroundings.",
        activities: [
          {
            title: "Highland Ascent & Ramboda Falls Scenic Lookout",
            description: "Climb past cascading mountain rivers, stopping at Ramboda Falls where torrents of fresh mountain water plunge into a verdant granite canyon. Breathe in the noticeably cooler, crisper mountain air.",
            timing: "Morning",
            photos: [
              {
                src: "assets/images/destinations/nuwara-eliya.jpg",
                alt: "Emerald tea terraces carpeting the slopes of Nuwara Eliya",
                caption: "Winding highland road flanked by manicured tea terraces"
              }
            ]
          },
          {
            title: "Working Tea Estate & Factory Masterclass",
            description: "Walk alongside experienced estate staff among the Camellia sinensis bushes to learn the delicate art of 'two leaves and a bud' hand-plucking. Tour the vintage processing factory to witness rolling, fermenting, and drying, followed by a professional cupping and tasting session.",
            timing: "Afternoon",
            photos: [
              {
                src: "assets/images/gallery/tea-factory.jpg",
                alt: "Tea withering process in a historic highland factory",
                caption: "Orthodox Ceylon tea processing and tasting masterclass"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/nuwara-eliya.jpg",
            alt: "Rolling tea hills of Nuwara Eliya",
            caption: "High-grown Ceylon tea plantations under mountain mist"
          },
          {
            src: "assets/images/destinations/scenic-train.jpg",
            alt: "Scenic mountain railway in tea hills",
            caption: "Vintage railway tracks looping through the tea valleys"
          }
        ],
        overnight: "Nuwara Eliya (Colonial Heritage Manor)",
        travelNotes: "Approx. 2.5 hours scenic mountain drive (75 km) climbing from 500m to over 1,800m elevation.",
        optionalActivities: "Sunset stroll around colonial Lake Gregory or Victorian Victoria Park.",
        practicalNotes: "Nuwara Eliya temperatures drop to 12°C–16°C in the evenings; carry a warm jumper, jacket, or pashmina."
      },
      {
        day: 6,
        title: "Descent to the Coast — UNESCO Galle Fort Sunset Ramparts",
        destination: "Galle Fort",
        introduction: "Descend from the misty central mountains through rubber and cinnamon plantations toward the warm, sparkling southern coastline. Arrive at the 17th-century fortified town of Galle to wander peaceful cobblestone alleys and watch the sunset from ancient granite sea bastions.",
        activities: [
          {
            title: "Scenic Southern Foothills Drive",
            description: "Drive south through picturesque mountain foothills and coastal towns, stopping along the way to observe traditional rubber tapping and roadside coconut stalls as the Indian Ocean comes into view.",
            timing: "Morning to Early Afternoon",
            photos: [
              {
                src: "assets/images/destinations/galle.jpg",
                alt: "Galle Fort ramparts meeting the ocean",
                caption: "Approaching the southern maritime bastion of Galle"
              }
            ]
          },
          {
            title: "Galle Fort Architectural & Ramparts Walking Tour",
            description: "Step through the Dutch Gate into 400 years of living history. Walk along the intact perimeter ramparts to Flag Rock and the iconic white lighthouse, followed by quiet exploration of restored colonial villas, jewellers, and artisan cafés along Pedlar and Church Streets.",
            timing: "Late Afternoon (16:30 – 18:30)",
            photos: [
              {
                src: "assets/images/gallery/galle-street.jpg",
                alt: "Historic Church Street with colonial Dutch buildings in Galle",
                caption: "Peaceful cobblestone pedestrian lanes inside Galle Fort"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/galle.jpg",
            alt: "Galle Fort lighthouse against the ocean at sunset",
            caption: "The iconic Galle Lighthouse standing sentinel on the sea wall"
          },
          {
            src: "assets/images/gallery/galle-street.jpg",
            alt: "Restored Dutch colonial merchant houses in Galle",
            caption: "Boutique galleries and flowering bougainvillea within the fortress"
          }
        ],
        overnight: "Galle Fort (Historic Boutique Residence)",
        travelNotes: "Approx. 4 hours drive (200 km) via southern expressways with scenic countryside vistas.",
        optionalActivities: "Candlelit seafood dinner on a historic colonial verandah overlooking the moonlit ocean.",
        practicalNotes: "Comfortable flat walking shoes are best for the historic cobblestones and grass-topped ramparts."
      },
      {
        day: 7,
        title: "Southern Coastline Farewell & Departure",
        destination: "Galle to Colombo Airport",
        introduction: "Enjoy an unhurried tropical breakfast on your hotel verandah with fresh papayas, curd and kithul treacle. Depending on your flight schedule, explore a coastal sea turtle hatchery before taking the Southern Expressway directly to the airport for your onward journey.",
        activities: [
          {
            title: "Morning at Leisure in Galle Fort",
            description: "Spend your final morning picking up artisanal Ceylon cinnamon, pure sapphires, or handmade textiles, or enjoying a slow cup of single-origin coffee on Church Street.",
            timing: "Morning",
            photos: [
              {
                src: "assets/images/destinations/galle.jpg",
                alt: "Quiet morning sun on the ramparts of Galle Fort",
                caption: "A peaceful final morning by the Indian Ocean"
              }
            ]
          },
          {
            title: "Kosgoda Sea Turtle Conservation Visit & Airport Transfer",
            description: "En route to the airport, visit a community-managed sea turtle conservation sanctuary in Kosgoda to observe newly hatched green turtles being prepared for safe night-time release. Continue via the smooth Southern Expressway directly to Colombo International Airport.",
            timing: "Afternoon",
            photos: [
              {
                src: "assets/images/gallery/turtle-conservation.jpg",
                alt: "Endangered sea turtle at a coastal rescue sanctuary",
                caption: "Community marine turtle conservation along the southern shore"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/gallery/turtle-conservation.jpg",
            alt: "Baby sea turtles in protective nursery pools",
            caption: "Gentle marine conservation on the sandy southwest coast"
          },
          {
            src: "assets/images/destinations/mirissa.jpg",
            alt: "Palm fringed southern shoreline",
            caption: "Warm golden sands bidding farewell to the island"
          }
        ],
        overnight: "Departure (No overnight stay included)",
        travelNotes: "Approx. 2 hours direct transit (150 km) from Galle to Bandaranaike International Airport (CMB) via the Southern Expressway.",
        optionalActivities: "Extend your stay with additional beach days in Mirissa, Bentota, or Tangalle upon request.",
        practicalNotes: "International departures require check-in 3 hours prior to departure; we schedule departure from Galle accordingly."
      }
    ],
    inclusions: [
      "Dedicated private executive air-conditioned vehicle throughout the journey",
      "Services of a professional English-speaking licensed chauffeur-guide",
      "All vehicle fuel, highway expressway tolls, and vehicle parking fees",
      "Complimentary chilled bottled water in the vehicle daily",
      "Airport arrival meet & greet with fresh king coconut welcome",
      "Coordinated tickets for the scenic highland train journey (subject to availability)",
      "24/7 dedicated local concierge support throughout your stay in Sri Lanka"
    ],
    exclusions: [
      "International flights to and from Sri Lanka",
      "Entry visa fees (ETA can be arranged online prior to travel)",
      "Hotel accommodations (can be packaged upon request with preferred 4★ or 5★ partners)",
      "Entrance fees to monuments, national parks, and cultural sites (approx. $110 USD total per person)",
      "Personal travel insurance (strongly recommended)",
      "Meals and beverages not specified in the finalized itinerary",
      "Discretionary driver and guide gratuities"
    ],
    importantNotes: "This itinerary is fully customizable. Distances and travel timings are realistic estimates based on normal road conditions. Sacred site dress codes apply in Dambulla and Kandy."
  },
  {
    slug: "tea-hills-ella",
    title: "Tea Hills & Ella",
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    category: "Highlands & Scenic Rail",
    categorySlug: "highlands",
    badge: "Iconic Scenery",
    heroImage: "assets/images/tours/tea-hills-ella/hero.jpg",
    destinationsSummary: "Kandy • Nuwara Eliya • Scenic Mountain Train • Ella",
    pace: "Scenic & Refreshing",
    suitableFor: "Couples, photographers, nature lovers, and hiking enthusiasts",
    shortDescription: "A mountain journey through the mist-shrouded central highlands, combining colonial heritage, high-grown Ceylon tea estates, and the Nine Arch Bridge.",
    overview: "Tea Hills & Ella is crafted for travellers who want to immerse themselves in Sri Lanka's cool-climate interior. Ascend from the royal city of Kandy into the dramatic mountain landscapes of Nuwara Eliya, board the world-famous blue train over viaducts and through cloud-forest tunnels, and hike along the green ridge lines of Ella. Experience misty sunrises, fragrant tea factories, and thunderous waterfalls in one of Asia's most spectacular mountain settings.",
    highlights: [
      "Board the vintage blue highland train over mountain passes and viaducts",
      "Walk the tracks to the colonial Nine Arch Bridge surrounded by tea hills in Ella",
      "Hike along the ridge of Little Adam's Peak for panoramic views across Ella Gap",
      "Visit Pedro Tea Estate for an orthodox Ceylon high tea tasting experience",
      "Admire cascading mountain torrents at Ramboda and Ravana Falls",
      "Stroll the serene shores of Kandy Lake and Peradeniya Botanical Gardens"
    ],
    routeOverview: "Colombo / Kandy Pickup → Kandy (1 Night) → Nuwara Eliya (1 Night) → Ella (2 Nights) → Southern Coast or Airport Departure",
    days: [
      {
        day: 1,
        title: "Kandy — The Royal Lake & Sacred Heritage",
        destination: "Kandy",
        introduction: "Arrive in the royal hill capital of Kandy, situated peacefully around an ornamental lake in the central mountains. Explore the sprawling 147-acre Royal Botanic Gardens at Peradeniya before attending the sacred evening ceremony at the Temple of the Sacred Tooth Relic.",
        activities: [
          {
            title: "Peradeniya Royal Botanic Gardens Walk",
            description: "Wander through centuries of botanical splendour, discovering the celebrated orchid house with over 300 varieties, towering avenues of royal palm trees, and the gigantic spreading Javanese fig tree on the Great Lawn.",
            timing: "Afternoon (14:00 – 16:30)",
            photos: [
              {
                src: "assets/images/gallery/peradeniya-gardens.jpg",
                alt: "Royal palm tree avenue at Peradeniya gardens in Kandy",
                caption: "Stately botanical avenues in the historic Peradeniya gardens"
              }
            ]
          },
          {
            title: "Temple of the Tooth Evening Thevava Ceremony",
            description: "Witness the evening offering ritual at Sri Dalada Maligawa. As traditional drumming pulses through the carved wooden chambers, join respectful pilgrims presenting fresh jasmine and lotus flowers before the golden casket.",
            timing: "Evening (18:30 – 19:45)",
            photos: [
              {
                src: "assets/images/destinations/kandy.jpg",
                alt: "Temple of the Tooth illuminated at dusk beside Kandy Lake",
                caption: "The venerated Sri Dalada Maligawa during evening rituals"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/kandy.jpg",
            alt: "Kandy lake reflection at sunset",
            caption: "Reflections across Kandy Lake in the historic capital"
          },
          {
            src: "assets/images/gallery/kandyan-dance.jpg",
            alt: "Kandyan cultural drummer",
            caption: "Rhythmic cultural drumming of the hill kingdom"
          }
        ],
        overnight: "Kandy (Hillside Boutique Hotel)",
        travelNotes: "Approx. 3 hours drive from Colombo or Bandaranaike International Airport.",
        optionalActivities: "Sunset panoramic drink overlooking Kandy valley from Bahirawakanda hilltop.",
        practicalNotes: "Temple attire: covered shoulders and knees. Shoes removed at entrance."
      },
      {
        day: 2,
        title: "Into the Tea Hills — Nuwara Eliya's Emerald Terraces",
        destination: "Nuwara Eliya",
        introduction: "Leave Kandy behind and wind up through the dramatic Mahaweli river valley into the cool high plateaus. Stop at roaring waterfalls and historic tea estates where colonial planters first established Ceylon's world-famous tea gardens.",
        activities: [
          {
            title: "Highland Ascent via Ramboda Falls",
            description: "Climb through steep mountain valleys where terraced vegetable gardens and tea bushes cling to dizzying precipices. Pause at the twin cascades of Ramboda Falls for photography and mountain coffee.",
            timing: "Morning",
            photos: [
              {
                src: "assets/images/destinations/nuwara-eliya.jpg",
                alt: "Lush green tea plantations around Nuwara Eliya",
                caption: "Climbing through emerald hills into high-grown tea country"
              }
            ]
          },
          {
            title: "Pedro Estate Orthodox Tea Tour & Tasting",
            description: "Explore the historic Pedro Estate factory, built in 1885. Follow the journey of the hand-picked leaves through sorting, fermentation, and grading, culminating in a guided tasting on the tea lounge verandah overlooking the hills.",
            timing: "Afternoon",
            photos: [
              {
                src: "assets/images/gallery/tea-factory.jpg",
                alt: "Tea leaves withering on racks in Nuwara Eliya factory",
                caption: "Artisanal Ceylon tea production at Pedro Estate"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/nuwara-eliya.jpg",
            alt: "Tea terraces of Nuwara Eliya",
            caption: "Manicured tea bushes blanketing the highland ridges"
          },
          {
            src: "assets/images/gallery/tea-factory.jpg",
            alt: "Freshly plucked tea leaves ready for processing",
            caption: "Traditional two-leaves-and-a-bud orthodox crafting"
          }
        ],
        overnight: "Nuwara Eliya (Historic Colonial Cottage)",
        travelNotes: "Approx. 2.5 hours scenic winding mountain drive (75 km).",
        optionalActivities: "High tea service on the manicured front lawn of the Grand Hotel.",
        practicalNotes: "Highland temperatures can fall to 10°C at night; dress warmly."
      },
      {
        day: 3,
        title: "The Iconic Blue Train & Arrival in Misty Ella",
        destination: "Nuwara Eliya to Ella",
        introduction: "Board the legendary blue train at Nanu Oya station for what is widely hailed as one of the world's most breathtaking railway journeys. Relax by an open window as your train glides through mountain forests, tea gardens, and across dizzying valleys into Ella.",
        activities: [
          {
            title: "Nanu Oya to Ella Scenic Train Experience",
            description: "Embark on the 3.5-hour train journey. Your driver delivers your heavy luggage directly to your hotel in Ella, leaving you completely unencumbered to enjoy the fresh mountain air, trackside vendors selling spicy vadai, and panoramic views.",
            timing: "Morning / Midday (Schedule dependent)",
            photos: [
              {
                src: "assets/images/destinations/scenic-train.jpg",
                alt: "Blue train crossing viaduct through tea plantations",
                caption: "The world-famous scenic train journey winding through cloud forests"
              }
            ]
          },
          {
            title: "Welcome to Ella & Café Stroll",
            description: "Check in to your cliffside accommodation overlooking Ella Gap. Spend a relaxed late afternoon exploring Ella's laid-back village strip with its independent mountain cafés, juice bars, and artisan shops.",
            timing: "Late Afternoon",
            photos: [
              {
                src: "assets/images/destinations/ella.jpg",
                alt: "Ella Gap mountain vista",
                caption: "Sweeping views across the southern plains from Ella Gap"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/scenic-train.jpg",
            alt: "Train passing through tea country",
            caption: "Waving locals and tea pickers along the railway route"
          },
          {
            src: "assets/images/destinations/ella.jpg",
            alt: "Ella mountain landscape",
            caption: "Misty afternoon light settling across the Ella ranges"
          }
        ],
        overnight: "Ella (Valley View Boutique Resort)",
        travelNotes: "Train journey: approx. 3.5 hours. Private car meets you on the platform at Ella station.",
        optionalActivities: "Traditional Ceylon wood-fired pizza and craft cocktails in central Ella.",
        practicalNotes: "Train tickets are coordinated in advance; reserved seating is subject to railway availability."
      },
      {
        day: 4,
        title: "Nine Arch Bridge, Little Adam's Peak & Ravana Falls",
        destination: "Ella",
        introduction: "Spend a full day discovering Ella's most celebrated landmarks. Walk through dense tea foliage to stand beside the soaring Nine Arch Bridge, hike along the grassy crest of Little Adam's Peak, and feel the spray of thunderous Ravana Falls.",
        activities: [
          {
            title: "Nine Arch Bridge Viaduct Exploration",
            description: "Follow a shady forest path to the Demodara Nine Arch Bridge. Time your visit to watch the vintage passenger train rumble across the curving 24-metre-high stone arches, framed against emerald tea hills and towering bamboo stands.",
            timing: "Morning (08:30 – 10:30)",
            photos: [
              {
                src: "assets/images/destinations/ella.jpg",
                alt: "Demodara Nine Arch Bridge in Ella surrounded by tea trees",
                caption: "The magnificent colonial Nine Arch Bridge emerging from the jungle"
              }
            ]
          },
          {
            title: "Little Adam's Peak Hike & Ravana Falls",
            description: "Ascend the gentle stepped trail of Little Adam's Peak (Punchi Sri Pada) for a 360-degree vista of Ella Rock and the vast plains below. On the return drive, stop at the base of Ravana Falls to admire the cascades.",
            timing: "Afternoon (14:30 – 17:00)",
            photos: [
              {
                src: "assets/images/gallery/little-adams-peak.jpg",
                alt: "Grassy ridge of Little Adam's Peak in Ella",
                caption: "Panoramic vistas along the ridge line of Little Adam's Peak"
              },
              {
                src: "assets/images/gallery/ravana-falls.jpg",
                alt: "Cascading water at Ravana Falls near Ella",
                caption: "The majestic multi-tiered drop of Ravana Falls"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/ella.jpg",
            alt: "Nine Arch Bridge landscape view",
            caption: "Timeless stone arches spanning the Demodara gorge"
          },
          {
            src: "assets/images/gallery/ravana-falls.jpg",
            alt: "Ravana Falls rocky gorge",
            caption: "Cascading mountain waters flowing towards the southern lowlands"
          }
        ],
        overnight: "Ella (Valley View Boutique Resort)",
        travelNotes: "Short local excursions within 15–20 minutes in your private vehicle.",
        optionalActivities: "Flying Ravana mega-zipline over the tea plantations for adventure seekers.",
        practicalNotes: "Wear light hiking shoes and bring water. The Little Adam's Peak trail is well paved with gentle steps."
      },
      {
        day: 5,
        title: "Descent from the Mountains — Onward Coastal Transit",
        destination: "Ella to Southern Coast or Airport",
        introduction: "Enjoy your final highland breakfast with fresh passion fruit, mountain honey, and Ceylon tea watching the morning mist dissolve over Ella Gap. Your private chauffeur safely navigates the scenic descent towards the southern beaches or Colombo.",
        activities: [
          {
            title: "Ella Gap Farewell & Mountain Honey Tasting",
            description: "Capture final photographs from your private balcony or lookout point. On your descent toward the lowlands, pause at a rural roadside stall to taste genuine wild Kithul treacle and highland forest honey.",
            timing: "Morning",
            photos: [
              {
                src: "assets/images/destinations/ella.jpg",
                alt: "Morning sun over Ella Gap",
                caption: "Final morning mountain vistas across the Uva province"
              }
            ]
          },
          {
            title: "Seamless Transfer to Southern Coast or Airport",
            description: "Relax in your executive vehicle as you travel down to the sunny southern coast (Mirissa/Galle) or connect via the Southern Expressway directly to Colombo International Airport.",
            timing: "Afternoon",
            photos: [
              {
                src: "assets/images/vehicles/private-car.jpg",
                alt: "Comfortable private vehicle on expressway",
                caption: "Relaxed executive transfer to your next destination"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/ella.jpg",
            alt: "Ella mountain panorama",
            caption: "Mountain valleys bidding you farewell"
          },
          {
            src: "assets/images/destinations/mirissa.jpg",
            alt: "Southern coastal sands",
            caption: "Smooth onward connection to the southern shores"
          }
        ],
        overnight: "Departure or Onward Beach Extension",
        travelNotes: "Approx. 2.5–3 hours drive to southern beaches (Mirissa, Tangalle) or 4.5 hours to CMB Airport.",
        optionalActivities: "Add a 3-hour afternoon wildlife safari in Udawalawe National Park en route to the coast.",
        practicalNotes: "Expressway rest stops available for refreshments and clean amenities."
      }
    ],
    inclusions: [
      "Dedicated executive air-conditioned vehicle for all road segments",
      "Professional licensed English-speaking chauffeur-guide",
      "Coordinated reserved tickets for the Nanu Oya to Ella scenic train (subject to availability)",
      "Luggage transfer service from your Nuwara Eliya hotel directly to your Ella resort during the train ride",
      "All vehicle fuel, mountain tolls, and driver allowances",
      "Complimentary chilled mineral water daily in vehicle"
    ],
    exclusions: [
      "International flights and Sri Lanka entry ETA visa",
      "Hotel accommodations (available upon request)",
      "Entrance fees (approx. $30 USD per person for gardens, tea factory, and falls)",
      "Personal hiking gear and travel insurance",
      "Meals and beverages not specified",
      "Driver and guide gratuities"
    ],
    importantNotes: "Mountain rail tickets open for reservation 30 days prior. In the event of government rail cancellations or maintenance, private scenic road transfers with panoramic stops are seamlessly provided."
  },
  {
    slug: "southern-shores",
    title: "Southern Shores",
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    category: "Coastal & Marine",
    categorySlug: "coastal",
    badge: "Coastal Bliss",
    heroImage: "assets/images/tours/southern-shores/hero.jpg",
    destinationsSummary: "Bentota • Galle Fort • Unawatuna • Mirissa • Tangalle",
    pace: "Relaxed & Oceanfront",
    suitableFor: "Couples, beach seekers, marine enthusiasts, and slow travellers",
    shortDescription: "Sun-drenched golden beaches, coastal mangrove safaris, whale watching, sea turtle conservation, and the living colonial ramparts of UNESCO Galle Fort.",
    overview: "Southern Shores is an immersive oceanfront journey tracing the golden southern coastline of Sri Lanka. Beginning along the calm river estuaries of Bentota and Balapitiya, the journey weaves through the cobblestone streets of Galle Fort, along the crescent bays of Unawatuna, and onto the palm-fringed headlands of Mirissa and Tangalle. Experience fresh grilled lobster on the sand, spot migrating blue whales and spinner dolphins, and observe gentle marine turtles in protected nurseries.",
    highlights: [
      "Explore the living UNESCO World Heritage ramparts and lighthouse of Galle Fort",
      "Cruise through mangrove tunnels and visit cinnamon islands on the Madu Ganga",
      "Take an ethical early morning whale and dolphin watching boat trip in Mirissa",
      "Watch the sunset from the famous palm grove of Coconut Tree Hill",
      "Support sea turtle conservation and observe hatchling nurseries in Kosgoda",
      "Relax on the golden sandy beaches of Bentota, Unawatuna, and Mirissa"
    ],
    routeOverview: "Colombo Airport → Bentota (1 Night) → Galle Fort & Unawatuna (2 Nights) → Mirissa & Tangalle (2 Nights) → Airport Departure",
    days: [
      {
        day: 1,
        title: "Coastal Arrival — Bentota River & Golden Sands",
        destination: "Bentota",
        introduction: "Arrive at Colombo Airport and transfer south along the coastal expressway to the lush coastal sanctuary of Bentota, where the tranquil river meets the Indian Ocean.",
        activities: [
          {
            title: "Private Coastal Transfer & Check-In",
            description: "Direct executive highway transfer to Bentota. Settle into your beachfront hotel with views of swaying coconut palms and the sound of breaking waves.",
            timing: "Afternoon",
            photos: [
              {
                src: "assets/images/vehicles/private-car.jpg",
                alt: "Private car on coastal route",
                caption: "Smooth expressway transfer to the southern coast"
              }
            ]
          },
          {
            title: "Bentota Beach Twilight Walk",
            description: "Take your first bare-foot walk along the wide golden sand spit of Bentota Beach as the sun casts a deep amber glow across the Indian Ocean.",
            timing: "Evening",
            photos: [
              {
                src: "assets/images/gallery/mirissa-sunset.jpg",
                alt: "Warm sunset over southern beach",
                caption: "Twilight over the warm sands of the southern coast"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/gallery/mirissa-sunset.jpg",
            alt: "Sunset over ocean waves",
            caption: "Golden hour along the calm waters of Bentota"
          },
          {
            src: "assets/images/destinations/galle.jpg",
            alt: "Coastal palm trees",
            caption: "Tropical coastal scenery welcoming your arrival"
          }
        ],
        overnight: "Bentota (Beachfront Boutique Resort)",
        travelNotes: "Approx. 1.5 hours drive (105 km) via the Southern Expressway from CMB Airport.",
        optionalActivities: "Water sports on the calm waters of the Bentota river lagoon.",
        practicalNotes: "Beachwear, sun protection, and lightweight linen clothing are ideal."
      },
      {
        day: 2,
        title: "Madu Ganga Mangrove River Safari & Galle Fort Entry",
        destination: "Balapitiya & Galle",
        introduction: "Board a private motorboat to navigate the lush mangrove channels and 64 islands of the Madu Ganga estuary. In the afternoon, journey to the 17th-century walled fortress of Galle Fort.",
        activities: [
          {
            title: "Madu Ganga River Boat Expedition",
            description: "Cruise beneath overhanging mangrove canopy tunnels, stopping at Cinnamon Island to see local craftsmen peel raw Ceylon cinnamon bark. Learn about traditional fish kraal traps and coastal wetland ecology.",
            timing: "Morning (09:00 – 11:30)",
            photos: [
              {
                src: "assets/images/gallery/madu-ganga-river.jpg",
                alt: "Motorboat through mangrove tunnel on Madu Ganga river",
                caption: "Navigating lush mangrove channels on the Madu Ganga safari"
              }
            ]
          },
          {
            title: "Kosgoda Sea Turtle Conservation Project",
            description: "Visit a non-profit turtle hatchery dedicated to safeguarding nests from predators and poachers. Learn about the five species of sea turtles that nest along Sri Lanka's beaches and observe recovering turtles in rehabilitation tanks.",
            timing: "Midday",
            photos: [
              {
                src: "assets/images/gallery/turtle-conservation.jpg",
                alt: "Rescued sea turtle in protective rehabilitation tank",
                caption: "Community marine turtle preservation in Kosgoda"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/gallery/madu-ganga-river.jpg",
            alt: "Madu Ganga river waterways",
            caption: "Serene waterways and island sanctuaries on the Madu Ganga"
          },
          {
            src: "assets/images/destinations/galle.jpg",
            alt: "Galle Fort bastions and ocean",
            caption: "Ancient granite walls standing strong against the waves"
          }
        ],
        overnight: "Galle Fort (Restored Heritage Residence)",
        travelNotes: "Approx. 1 hour scenic coastal drive from Bentota to Galle.",
        optionalActivities: "Fish spa therapy experience on the river during the Madu Ganga boat cruise.",
        practicalNotes: "Hat, sunglasses, and eco-friendly sunscreen recommended for the river safari."
      },
      {
        day: 3,
        title: "Living History in Galle Fort & Golden Unawatuna Bay",
        destination: "Galle & Unawatuna",
        introduction: "Spend a leisurely day immersing yourself in the rich architectural heritage of Galle Fort before escaping to the calm turquoise waters and beach cafés of neighbouring Unawatuna bay.",
        activities: [
          {
            title: "Galle Fort Walking Heritage Trail",
            description: "Explore the Dutch Reformed Church, Old Dutch Hospital, and historic maritime ramparts with your guide. Discover boutique jewellery studios specialising in Ceylon blue sapphires and artisanal spice shops.",
            timing: "Morning",
            photos: [
              {
                src: "assets/images/gallery/galle-street.jpg",
                alt: "Historic street inside Galle Fort",
                caption: "Living history along the shady pedestrian streets of Galle Fort"
              }
            ]
          },
          {
            title: "Unawatuna Bay & Japanese Peace Pagoda",
            description: "Visit the serene Japanese Peace Pagoda perched atop the Rumassala headland with panoramic views of Galle harbour, followed by an afternoon swim in the calm, protected waters of Unawatuna crescent beach.",
            timing: "Afternoon",
            photos: [
              {
                src: "assets/images/destinations/galle.jpg",
                alt: "Galle Fort lighthouse at sunset",
                caption: "The iconic white lighthouse of Galle overlooking the reef"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/galle.jpg",
            alt: "Sunset over Galle Fort ramparts",
            caption: "Evening colours illuminating the ancient stone sea wall"
          },
          {
            src: "assets/images/gallery/galle-street.jpg",
            alt: "Charming café verandah in Galle Fort",
            caption: "Quaint colonial courtyards and bougainvillea blossoms"
          }
        ],
        overnight: "Galle Fort (Restored Heritage Residence)",
        travelNotes: "Unawatuna is a short 15-minute coastal drive from Galle Fort.",
        optionalActivities: "Sunset cocktail on the rampart terrace at Flag Rock watching cliff divers.",
        practicalNotes: "Galle Fort is entirely pedestrian friendly; comfortable sandals are ideal."
      },
      {
        day: 4,
        title: "To Mirissa — Coconut Tree Hill & Coastal Relaxation",
        destination: "Mirissa",
        introduction: "Travel further along the southern coastline to Mirissa, an idyllic beach haven framed by swaying palm trees and clear blue waters. Climb to Coconut Tree Hill for the quintessential Sri Lankan coastal photograph.",
        activities: [
          {
            title: "Stilt Fishermen of Koggala Cultural Lookout",
            description: "Pause along the reef-fringed coast of Koggala to observe the traditional stilt fishermen balancing gracefully on vertical wooden poles fixed into the ocean bed, an ancient artisanal fishing method unique to this coast.",
            timing: "Morning",
            photos: [
              {
                src: "assets/images/destinations/mirissa.jpg",
                alt: "Coastline near Koggala and Mirissa",
                caption: "The scenic coral-fringed southern coastline near Mirissa"
              }
            ]
          },
          {
            title: "Sunset at Coconut Tree Hill",
            description: "Ascend the red-dirt bluff of Coconut Tree Hill, where tall curved palm trees lean out over the turquoise Indian Ocean, creating an iconic vantage point to watch the evening sunset.",
            timing: "Late Afternoon (17:00 – 18:30)",
            photos: [
              {
                src: "assets/images/destinations/mirissa.jpg",
                alt: "Coconut Tree Hill in Mirissa overlooking the sea",
                caption: "Coconut Tree Hill looking across the turquoise waves of Mirissa"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/mirissa.jpg",
            alt: "Palms against ocean in Mirissa",
            caption: "Iconic palm silhouettes over the southern swell"
          },
          {
            src: "assets/images/gallery/mirissa-sunset.jpg",
            alt: "Sunset on Mirissa sand",
            caption: "Beachfront dining under lantern-lit palm trees"
          }
        ],
        overnight: "Mirissa (Oceanfront Boutique Hotel)",
        travelNotes: "Approx. 45 minutes scenic coastal drive (35 km) from Galle to Mirissa.",
        optionalActivities: "Fresh grilled seafood feast on the beach with your feet in the sand.",
        practicalNotes: "Short walk to Coconut Tree Hill involves a gentle uphill sandy path."
      },
      {
        day: 5,
        title: "Whale Watching Marine Safari & Secluded Tangalle Bays",
        destination: "Mirissa & Tangalle",
        introduction: "Set sail at daybreak on an ethical ocean cruise in search of the largest animal ever known to have lived on Earth — the majestic blue whale. In the afternoon, escape to the wild, windswept beaches of Tangalle.",
        activities: [
          {
            title: "Mirissa Marine Whale Watching Excursion",
            description: "Board a certified vessel with safety gear and marine naturalists. Venture past the continental shelf where migrating blue whales, sperm whales, and super-pods of spinner dolphins feed in the nutrient-rich deep ocean trenches.",
            timing: "Early Morning (06:30 – 10:30)",
            photos: [
              {
                src: "assets/images/gallery/mirissa-sunset.jpg",
                alt: "Ocean waters off Mirissa coastline",
                caption: "Navigating deep marine channels frequented by migrating blue whales"
              }
            ]
          },
          {
            title: "Afternoon at Secret Beach & Tangalle Coves",
            description: "Return to shore for a relaxing midday rest, then explore the secluded coves of Secret Beach or the wild expanses of Mawella and Tangalle, where lush palm forests meet dramatic ocean breaks.",
            timing: "Afternoon",
            photos: [
              {
                src: "assets/images/destinations/mirissa.jpg",
                alt: "Secluded tropical cove on southern coast",
                caption: "Quiet coves and peaceful beaches along the deep south"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/mirissa.jpg",
            alt: "Mirissa bay palm trees",
            caption: "Tropical headlands framing the southern bay"
          },
          {
            src: "assets/images/gallery/mirissa-sunset.jpg",
            alt: "Mirissa sunset beach",
            caption: "Sunset reflecting over the evening surf in Mirissa"
          }
        ],
        overnight: "Mirissa (Oceanfront Boutique Hotel)",
        travelNotes: "Local boat departure from Mirissa Fisheries Harbour; short transfers in private car.",
        optionalActivities: "Ayurvedic herbal body treatment at an oceanfront wellness spa.",
        practicalNotes: "Whale watching operates primarily from November to April when sea conditions are calm. Motion sickness medication recommended for sensitive travellers."
      },
      {
        day: 6,
        title: "Farewell Southern Coastline — Expressway Transfer to Airport",
        destination: "Mirissa to Colombo Airport",
        introduction: "Enjoy your final sunrise over the Indian Ocean with tropical fruits and fresh Ceylon tea. Your private driver ensures a smooth, timely transfer via the Southern Expressway directly to the airport for your flight home.",
        activities: [
          {
            title: "Leisurely Breakfast & Souvenir Collection",
            description: "Savour a final peaceful morning by the pool or ocean. Pick up authentic Ceylon spices, hand-woven cotton sarongs, or artisanal coconut wood crafts before departing.",
            timing: "Morning",
            photos: [
              {
                src: "assets/images/vehicles/private-car.jpg",
                alt: "Executive vehicle prepared for departure transfer",
                caption: "Executive private vehicle ready for airport transfer"
              }
            ]
          },
          {
            title: "Direct Southern Expressway Airport Transfer",
            description: "Travel smoothly along the Southern Expressway directly to Bandaranaike International Airport, arriving comfortably 3 hours ahead of your flight.",
            timing: "Schedule Dependent",
            photos: [
              {
                src: "assets/images/destinations/galle.jpg",
                alt: "Final coastal views of Sri Lanka",
                caption: "Departing with unforgettable memories of the southern coast"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/gallery/mirissa-sunset.jpg",
            alt: "Golden morning light on Mirissa coast",
            caption: "Golden morning light over the southern sea"
          },
          {
            src: "assets/images/destinations/mirissa.jpg",
            alt: "Swaying palms along the southern shore",
            caption: "Warm island farewell from the southern coastline"
          }
        ],
        overnight: "Departure (No hotel stay included)",
        travelNotes: "Approx. 2.5 hours smooth drive (175 km) from Mirissa to CMB Airport via Southern Expressway.",
        optionalActivities: "En route stop in Colombo city for high tea or boutique shopping if flight departs late evening.",
        practicalNotes: "Expressway service areas offer clean restrooms, food courts, and coffee stops."
      }
    ],
    inclusions: [
      "Dedicated executive air-conditioned vehicle throughout the 6-day itinerary",
      "Licensed English-speaking private chauffeur-guide",
      "Private chartered motorboat tour on the Madu Ganga river safari",
      "All vehicle expressway tolls, fuel, and parking fees",
      "Airport arrival and departure transfers",
      "Chilled bottled drinking water provided daily"
    ],
    exclusions: [
      "International flights and ETA visa fees",
      "Accommodation bookings (available on request with boutique partner hotels)",
      "Whale watching boat tickets (approx. $50 USD per person)",
      "Site entry fees (approx. $25 USD per person)",
      "Personal meals, drinks, and incidentals",
      "Chauffeur-guide gratuity"
    ],
    importantNotes: "Whale watching prime season is November to April. During the southwest monsoon (May to October), whale excursions may shift to the east coast (Trincomalee) or be replaced with coastal lagoon safaris."
  },
  {
    slug: "wildlife-safari",
    title: "Wildlife Safari",
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    category: "Wildlife & Eco",
    categorySlug: "wildlife",
    badge: "Big Five Safari",
    heroImage: "assets/images/tours/wildlife-safari/hero.jpg",
    destinationsSummary: "Minneriya • Udawalawe • Yala National Park • Bundala",
    pace: "Active & Nature-Focused",
    suitableFor: "Wildlife photographers, animal lovers, conservationists, and adventurous families",
    shortDescription: "An expedition across Sri Lanka's premier national parks to witness wild Asian elephants, elusive leopards, sloth bears, and migratory bird spectacles.",
    overview: "Sri Lanka is recognized as one of the world's most biodiverse wildlife destinations, packed into a compact island territory. This dedicated wildlife safari connects the dry-zone forests, savannah grasslands, and coastal lagoons of the island. Encounter wild elephant herds roaming free around the ancient reservoirs of Minneriya and Udawalawe, track the solitary Sri Lankan leopard (Panthera pardus kotiya) across the rugged bush of Yala Block 1, and spot thousands of migratory water birds along the salt pans of Bundala.",
    highlights: [
      "Track the world's highest density of leopards on multiple game drives in Yala Block 1",
      "Witness massive wild elephant herds feeding and bathing in Udawalawe National Park",
      "Visit the respected Elephant Transit Home to watch orphaned calves during feeding hour",
      "Observe crocodiles, spotted deer, wild boar, and elusive sloth bears in their natural habitat",
      "Explore the UNESCO Biosphere Reserve of Bundala, home to hundreds of bird species",
      "Ride in customized open-top 4x4 safari jeeps accompanied by expert park trackers"
    ],
    routeOverview: "Colombo Airport → Cultural Triangle / Minneriya (1 Night) → Udawalawe (2 Nights) → Yala National Park (2 Nights) → Airport / Coast",
    days: [
      {
        day: 1,
        title: "Inland to the Wild — Elephant Gathering at Minneriya",
        destination: "Minneriya & Habarana",
        introduction: "Depart Colombo and travel inland into the dry-zone forests of the North Central Province. Board your first open-top 4x4 safari jeep in the afternoon to witness wild elephants congregating around the ancient Minneriya tank.",
        activities: [
          {
            title: "Scenic Transfer to Habarana Wildlife Hub",
            description: "Private drive through changing landscapes from the western coastal plain to the open forests of the dry zone, checking in to your jungle lodge surrounded by birdsong.",
            timing: "Morning",
            photos: [
              {
                src: "assets/images/vehicles/private-car.jpg",
                alt: "Private car on inland forest route",
                caption: "Journeying inland towards the great wildlife reservoirs"
              }
            ]
          },
          {
            title: "Minneriya / Kaudulla Afternoon Elephant Safari",
            description: "Climb aboard a rugged 4x4 jeep to enter Minneriya or Kaudulla National Park. Drive out onto the exposed lake beds where dozens of wild Asian elephant families gather in the late afternoon to feed on fresh grasses, bathe, and play.",
            timing: "Afternoon (14:30 – 18:00)",
            photos: [
              {
                src: "assets/images/destinations/udawalawe.jpg",
                alt: "Wild elephant herd grazing by the reservoir",
                caption: "Wild elephant herds gathering near the freshwater reservoir"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/udawalawe.jpg",
            alt: "Wild elephants interacting on open plains",
            caption: "Family groups and playful calves in their natural habitat"
          },
          {
            src: "assets/images/gallery/yala-safari-jeep.jpg",
            alt: "4x4 safari jeep on wilderness trail",
            caption: "Open-top 4x4 exploration of the dry-zone wilderness"
          }
        ],
        overnight: "Habarana (Jungle Safari Lodge)",
        travelNotes: "Approx. 3.5 to 4 hours drive (155 km) from Colombo to Habarana.",
        optionalActivities: "Night walk around the eco-lodge grounds with a naturalist to spot nocturnal lorises and amphibians.",
        practicalNotes: "Wear earthy, neutral tones (khaki, olive, brown). Avoid bright neon colours on safaris."
      },
      {
        day: 2,
        title: "South to Udawalawe — The Savannah of Sri Lanka",
        destination: "Udawalawe",
        introduction: "Travel south along the eastern foothills of the central highlands toward Udawalawe National Park, renowned for wide-open savannah landscapes and guaranteed elephant sightings.",
        activities: [
          {
            title: "Highland Foothills Scenic Drive",
            description: "Enjoy a scenic drive flanking the Knuckles mountain range, stopping at rural roadside fruit stalls and tea shops before descending into the warm southern lowlands.",
            timing: "Morning",
            photos: [
              {
                src: "assets/images/destinations/udawalawe.jpg",
                alt: "Open savannah terrain approaching Udawalawe",
                caption: "The open grassland plains of the southern wildlife corridor"
              }
            ]
          },
          {
            title: "Afternoon Udawalawe Reservoir Safari",
            description: "Embark on an afternoon 4x4 safari across the open grasslands of Udawalawe. Spot water buffalo wallowing in mud holes, monitor lizards, crested serpent eagles, and abundant elephant herds.",
            timing: "Afternoon (15:00 – 18:00)",
            photos: [
              {
                src: "assets/images/gallery/yala-safari-jeep.jpg",
                alt: "Safari jeep tracking wildlife in Udawalawe",
                caption: "Tracking wildlife along the perimeter of the Udawalawe reservoir"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/udawalawe.jpg",
            alt: "Elephants feeding peacefully in Udawalawe",
            caption: "Undisturbed wild elephants grazing in golden evening light"
          },
          {
            src: "assets/images/gallery/yala-safari-jeep.jpg",
            alt: "Safari vehicle on grassland track",
            caption: "Deep wilderness exploration with local wildlife trackers"
          }
        ],
        overnight: "Udawalawe (Safari Camp or Eco-Lodge)",
        travelNotes: "Approx. 4 hours drive (180 km) through central foothills with flexible stops.",
        optionalActivities: "Campfire dinner under the stars with Sri Lankan hopper cooking demonstration.",
        practicalNotes: "Dust can be prevalent on dry days; bring a light scarf or buff and sunglasses."
      },
      {
        day: 3,
        title: "Elephant Transit Home & Journey to Yala Realm",
        destination: "Udawalawe to Yala",
        introduction: "Visit the inspiring Elephant Transit Home to watch orphaned elephant calves receive their morning milk before travelling to Yala National Park, the premier leopard kingdom of Asia.",
        activities: [
          {
            title: "Udawalawe Elephant Transit Home (ETH) Experience",
            description: "Watch orphaned baby elephants rush out for their scheduled morning milk feeding. Operated with support from the Department of Wildlife Conservation, the ETH rehabilitates calves until they are mature enough to be reintroduced into the wild.",
            timing: "Morning (09:00 – 10:00 Feeding)",
            photos: [
              {
                src: "assets/images/destinations/udawalawe.jpg",
                alt: "Young elephant calves at the rehabilitation sanctuary",
                caption: "Orphaned elephant calves cared for prior to wild release"
              }
            ]
          },
          {
            title: "Transfer to Yala Wilderness & Tented Lodge Check-In",
            description: "Continue to the arid wilderness bordering Yala National Park. Settle into your luxury safari tent or lodge, listening to the calls of peacocks and distant ocean waves.",
            timing: "Afternoon",
            photos: [
              {
                src: "assets/images/destinations/yala.jpg",
                alt: "Thorn scrub and granite boulders of Yala",
                caption: "The rugged coastal wilderness of Yala National Park"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/udawalawe.jpg",
            alt: "Elephant herd at watering hole",
            caption: "Close encounters with wild herds in southern Sri Lanka"
          },
          {
            src: "assets/images/destinations/yala.jpg",
            alt: "Leopard resting on rock in Yala",
            caption: "The elusive apex predator of Yala National Park"
          }
        ],
        overnight: "Yala / Kirinda (Luxury Safari Camp)",
        travelNotes: "Approx. 2 hours scenic drive (90 km) from Udawalawe to Yala/Tissamaharama.",
        optionalActivities: "Evening nature walk around the salt pans and lakes of Tissamaharama.",
        practicalNotes: "Early bedtime recommended ahead of the pre-dawn safari departure tomorrow."
      },
      {
        day: 4,
        title: "Tracking the Leopard — Dawn & Dusk Safaris in Yala Block 1",
        destination: "Yala National Park",
        introduction: "Experience the magic of Yala at dawn when predators are most active. Track the Sri Lankan leopard across granite rocky outcrops, watch for sloth bears in the palu trees, and return for a golden hour afternoon drive.",
        activities: [
          {
            title: "Dawn Safari Track in Yala Block 1",
            description: "Enter the park gates at opening (06:00) as the mist lifts. Your expert tracker reads fresh pugmarks in the sand, scanning tree limbs and sun-warmed rocky hills for the magnificent leopard (Panthera pardus kotiya).",
            timing: "Early Morning (06:00 – 09:30)",
            photos: [
              {
                src: "assets/images/destinations/yala.jpg",
                alt: "Sri Lankan leopard resting alert on a rocky ledge in Yala",
                caption: "Panthera pardus kotiya, the solitary monarch of Yala"
              }
            ]
          },
          {
            title: "Afternoon Golden Hour Game Drive",
            description: "After relaxing during the heat of midday at your camp, re-enter the park as animals head to waterholes. Spot mugger crocodiles, herds of spotted chital deer, wild boar, and colourful kingfishers.",
            timing: "Afternoon (15:00 – 18:00)",
            photos: [
              {
                src: "assets/images/gallery/yala-safari-jeep.jpg",
                alt: "Safari jeep paused near coastal lagoon in Yala",
                caption: "Searching waterholes for sloth bears and wild elephants at dusk"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/yala.jpg",
            alt: "Leopard perched on granite rock",
            caption: "An unforgettable encounter with the wild Sri Lankan leopard"
          },
          {
            src: "assets/images/gallery/yala-safari-jeep.jpg",
            alt: "Open top safari vehicle in Yala",
            caption: "Navigating deep into the dry-zone thorn scrub of Block 1"
          }
        ],
        overnight: "Yala / Kirinda (Luxury Safari Camp)",
        travelNotes: "Dedicated open-top 4x4 safari jeep with experienced driver-naturalist included.",
        optionalActivities: "Stargazing from the camp deck with no light pollution.",
        practicalNotes: "Bring a warm fleece for the open jeep at dawn; mornings can feel brisk before the sun rises."
      },
      {
        day: 5,
        title: "Bundala Wetland Sanctuary & Coastal Lagoons",
        destination: "Bundala National Park",
        introduction: "Explore Bundala National Park, an internationally recognized Ramsar wetland sanctuary where massive flocks of migratory water birds, greater flamingos, and resident wildlife thrive along coastal brackish lagoons.",
        activities: [
          {
            title: "Bundala Wetland 4x4 Birding Safari",
            description: "Navigate coastal dunes, salt pans, and lagoons that host nearly 200 bird species including spoonbills, painted storks, pelicans, ibis, and terns. Keep an eye out for mugger crocodiles basking on the banks.",
            timing: "Morning (06:30 – 10:00)",
            photos: [
              {
                src: "assets/images/destinations/mirissa.jpg",
                alt: "Coastal lagoon and wetland landscape near Bundala",
                caption: "Vast coastal wetlands and bird sanctuaries of Bundala"
              }
            ]
          },
          {
            title: "Relaxation at Safari Camp & Wildlife Photography Review",
            description: "Spend an unhurried afternoon relaxing by the pool or editing wildlife photos, surrounded by the sights and sounds of the Sri Lankan wilderness.",
            timing: "Afternoon",
            photos: [
              {
                src: "assets/images/gallery/yala-safari-jeep.jpg",
                alt: "Safari jeep returning from morning game drive",
                caption: "Returning to camp after a rewarding morning in the wild"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/yala.jpg",
            alt: "Wildlife landscape in southern Sri Lanka",
            caption: "Untouched wilderness where dry forests meet the Indian Ocean"
          },
          {
            src: "assets/images/destinations/udawalawe.jpg",
            alt: "Elephants near waterhole",
            caption: "Sri Lanka's incredible conservation legacy"
          }
        ],
        overnight: "Yala / Kirinda (Luxury Safari Camp)",
        travelNotes: "Bundala is approximately 40 minutes drive from Yala/Kirinda.",
        optionalActivities: "Visit ancient Kirinda rock temple perched on a sea cliff overlooking the Great Basses reef.",
        practicalNotes: "Binoculars and a telephoto camera lens (300mm–600mm) are highly advantageous for birdwatching."
      },
      {
        day: 6,
        title: "Wilderness Farewell — Return Transfer to Colombo or Southern Beaches",
        destination: "Yala to Colombo / South Coast",
        introduction: "Awaken to the dawn chorus of tropical birds for your final safari breakfast. Your private driver transfers you along the southern expressway to your onward beach stay or Colombo Airport.",
        activities: [
          {
            title: "Morning Farewell & Souvenir Stop",
            description: "Depart the wilderness, stopping at a traditional pottery or curd village to sample rich buffalo curd served in clay pots with sweet wild Kithul treacle.",
            timing: "Morning",
            photos: [
              {
                src: "assets/images/vehicles/private-car.jpg",
                alt: "Private car ready for transfer",
                caption: "Comfortable private vehicle for your return journey"
              }
            ]
          },
          {
            title: "Southern Expressway Transfer to Airport or Beach",
            description: "Smooth transit via the Southern Expressway connecting directly to Colombo International Airport (approx. 4.5 hours) or to southern beach resorts in Mirissa, Galle, or Bentota.",
            timing: "Midday to Afternoon",
            photos: [
              {
                src: "assets/images/destinations/galle.jpg",
                alt: "Southern coastline on route home",
                caption: "Smooth expressway transit to Colombo Airport or beach extensions"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/yala.jpg",
            alt: "Wild leopard in Yala",
            caption: "Memories of the wild kingdom of Yala"
          },
          {
            src: "assets/images/destinations/udawalawe.jpg",
            alt: "Elephants roaming freely",
            caption: "Sri Lanka's untamed natural majesty"
          }
        ],
        overnight: "Departure or Beach Extension",
        travelNotes: "Approx. 4 to 4.5 hours drive to CMB Airport via Mattala & Southern Expressways.",
        optionalActivities: "Combine with our Southern Shores tour for a complete beach and ocean extension.",
        practicalNotes: "Flight check-in is 3 hours prior; we plan departure timings accordingly."
      }
    ],
    inclusions: [
      "Dedicated executive air-conditioned private vehicle for all road travel",
      "Licensed English-speaking chauffeur-guide throughout the trip",
      "Private 4x4 open-top safari jeeps with local park trackers for all scheduled safaris (Minneriya, Udawalawe, Yala, Bundala)",
      "All vehicle fuel, expressway tolls, and driver allowances",
      "Chilled bottled drinking water daily in the vehicle",
      "24/7 dedicated local support team"
    ],
    exclusions: [
      "International flights and ETA visa fees",
      "Hotel accommodations (available upon request at curated safari lodges)",
      "National Park entrance ticket permits (approx. $140 USD total for all 4 parks)",
      "Meals, alcoholic beverages, and personal expenses",
      "Safari jeep driver and guide tips"
    ],
    importantNotes: "Yala National Park Block 1 typically conducts an annual maintenance closure for 4-6 weeks between September and October to allow wildlife respite; during this window, exceptional safaris take place in adjacent Yala Block 5, Lunugamvehera, and Udawalawe."
  },
  {
    slug: "cultural-heritage",
    title: "Cultural Heritage",
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    category: "Culture & History",
    categorySlug: "culture",
    badge: "UNESCO Circuit",
    heroImage: "assets/images/tours/cultural-heritage/hero.jpg",
    destinationsSummary: "Anuradhapura • Polonnaruwa • Sigiriya • Dambulla • Kandy",
    pace: "Enriching & Historical",
    suitableFor: "Archaeology buffs, spiritual seekers, architecture lovers, and curious travellers",
    shortDescription: "Journey through 2,500 years of royal civilisations, sacred relics, giant stone stupas, sky palaces, and rock-hewn Buddha sanctuaries in the Cultural Triangle.",
    overview: "Cultural Heritage is a profound journey through Sri Lanka's ancient capitals and sacred sanctuaries, five of which are inscribed as UNESCO World Heritage sites. Walk among the colossal brick stupas and monastic colleges of Anuradhapura, cycle through the medieval royal palaces and circular shrines of Polonnaruwa, ascend the sheer rock citadel of Sigiriya, contemplate five cavern temples at Dambulla, and experience the living spiritual devotion of Kandy's Temple of the Sacred Tooth Relic.",
    highlights: [
      "Marvel at the colossal white stupa of Ruwanwelisaya and the sacred Sri Maha Bodhi tree in Anuradhapura",
      "Cycle through the medieval palaces and stone-carved Buddha statues of Gal Vihara in Polonnaruwa",
      "Climb the 5th-century royal rock fortress of Sigiriya with its ancient frescoes and Mirror Wall",
      "Explore 2,000 years of Buddhist rock murals across five cavern sanctuaries at Dambulla",
      "Attend the sacred evening Thevava drumming ceremony at the Temple of the Sacred Tooth in Kandy",
      "Discover the ancient hydraulic reservoirs (wewas) that sustained early Asian civilisations"
    ],
    routeOverview: "Colombo Airport → Anuradhapura (1 Night) → Sigiriya & Polonnaruwa (2 Nights) → Dambulla & Kandy (2 Nights) → Colombo Departure",
    days: [
      {
        day: 1,
        title: "The First Ancient Capital — Sacred Anuradhapura",
        destination: "Anuradhapura",
        introduction: "Touch down in Sri Lanka and travel north to Anuradhapura, the island's first grand capital that flourished for over 1,300 years as the heart of Buddhist civilisation in South Asia.",
        activities: [
          {
            title: "Private Airport Reception & Northbound Transit",
            description: "Meet your private chauffeur-guide and travel north through lush coconut groves and rural villages to the UNESCO World Heritage sacred city of Anuradhapura.",
            timing: "Morning to Early Afternoon",
            photos: [
              {
                src: "assets/images/vehicles/private-car.jpg",
                alt: "Private car on northbound highway",
                caption: "Comfortable private travel into Sri Lanka's sacred heritage heartland"
              }
            ]
          },
          {
            title: "Sri Maha Bodhi & Ruwanwelisaya Great Stupa",
            description: "Pay homage at the Jaya Sri Maha Bodhi, a sacred fig tree grown from a cutting of the original Bodhi tree in India under which the Buddha attained enlightenment, planted in 288 BC. Walk to the towering whitewashed dome of Ruwanwelisaya stupa surrounded by 344 sculpted stone elephants.",
            timing: "Late Afternoon (16:00 – 18:30)",
            photos: [
              {
                src: "assets/images/destinations/anuradhapura.jpg",
                alt: "The soaring white dome of Ruwanwelisaya stupa in Anuradhapura",
                caption: "The majestic Great Stupa of Ruwanwelisaya, built in the 2nd century BC"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/anuradhapura.jpg",
            alt: "Ruwanwelisaya stupa in sunset light",
            caption: "Devotees gathering at dusk around the sacred white dome"
          },
          {
            src: "assets/images/destinations/sigiriya.jpg",
            alt: "Ancient landscape of the north-central plains",
            caption: "Ancient reservoir landscape sustaining millennia of civilization"
          }
        ],
        overnight: "Anuradhapura (Heritage Boutique Hotel)",
        travelNotes: "Approx. 3.5 to 4 hours drive (170 km) from Colombo Airport.",
        optionalActivities: "Peaceful bicycle tour around the ancient Tissa Wewa reservoir bund at sunset.",
        practicalNotes: "Modest white or light clothing required. Shoulders and knees covered; shoes removed at stupa terraces."
      },
      {
        day: 2,
        title: "Medieval Splendour — The Royal City of Polonnaruwa",
        destination: "Polonnaruwa & Sigiriya",
        introduction: "Travel southeast to Polonnaruwa, Sri Lanka's medieval capital from the 11th to 13th centuries. Cycle beneath banyan trees among monumental brick palaces, circular relic shrines, and serene rock-hewn Buddha sculptures.",
        activities: [
          {
            title: "The Royal Quadrangle & Circular Vatadage",
            description: "Explore the compact Sacred Quadrangle, featuring the circular Vatadage relic house with its exquisite stone moonstone and guardstones, the Nissanka Latha Mandapaya, and the seven-tiered Satmahal Prasada.",
            timing: "Morning (09:00 – 11:30)",
            photos: [
              {
                src: "assets/images/destinations/polonnaruwa.jpg",
                alt: "The circular stone Vatadage in Polonnaruwa",
                caption: "The magnificent 12th-century circular relic house of Polonnaruwa"
              }
            ]
          },
          {
            title: "Gal Vihara Monumental Rock Sculptures",
            description: "Stand before the four monumental Buddha statues of Gal Vihara, carved with extraordinary delicacy from a single granite cliff face: a seated meditating Buddha, two standing figures, and a colossal 14-metre reclining Buddha entering Parinirvana.",
            timing: "Afternoon (14:00 – 16:00)",
            photos: [
              {
                src: "assets/images/destinations/polonnaruwa.jpg",
                alt: "Carved stone Buddha statues of Gal Vihara",
                caption: "Masterpieces of Sinhalese granite rock carving at Gal Vihara"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/polonnaruwa.jpg",
            alt: "Polonnaruwa ruins in parkland",
            caption: "Shaded archaeological parklands of the medieval royal capital"
          },
          {
            src: "assets/images/destinations/sigiriya.jpg",
            alt: "Sigiriya rock on horizon",
            caption: "Entering the realm of Sigiriya in the late afternoon"
          }
        ],
        overnight: "Sigiriya (Forest Eco-Resort)",
        travelNotes: "Approx. 1.5 hours drive (65 km) from Anuradhapura to Polonnaruwa; 1 hour onward to Sigiriya.",
        optionalActivities: "Bicycle rental to easily glide between the archaeological monuments.",
        practicalNotes: "Granite surfaces can heat up under midday sun; carrying thick walking socks makes shoe-free temple visits comfortable."
      },
      {
        day: 3,
        title: "The Sky Fortress of Sigiriya & Monastic Caves of Pidurangala",
        destination: "Sigiriya",
        introduction: "Dedicate your day to the architectural wonder of Sigiriya Lion Rock citadel and its neighbouring monastic sanctuary of Pidurangala, immersing yourself in 5th-century royal intrigue and engineering genius.",
        activities: [
          {
            title: "Early Morning Sigiriya Lion Rock Ascent",
            description: "Climb past the symmetric water gardens, through the mirrored rock gallery with the ancient Sigiriya Maidens frescoes, and between the monumental carved Lion Paws to the royal palace foundations on the summit.",
            timing: "Early Morning (07:00 – 10:30)",
            photos: [
              {
                src: "assets/images/destinations/sigiriya.jpg",
                alt: "Sigiriya Rock Fortress towering above the jungle canopy",
                caption: "King Kashyapa's 5th-century royal sky fortress"
              }
            ]
          },
          {
            title: "Pidurangala Rock Sunset Vantage",
            description: "In the late afternoon, make the gentle climb up neighbouring Pidurangala Rock, passing an ancient reclining Buddha statue in a natural cave sanctuary, to reach the wide summit plateau with unobstructed views of Sigiriya as the sun dips below the horizon.",
            timing: "Late Afternoon (16:00 – 18:30)",
            photos: [
              {
                src: "assets/images/gallery/pidurangala-sunrise.jpg",
                alt: "Sigiriya view from Pidurangala rock summit",
                caption: "The iconic view of Sigiriya rising above the jungle from Pidurangala"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/sigiriya.jpg",
            alt: "Sigiriya rock water gardens",
            caption: "Hydraulic water gardens designed over 1,500 years ago"
          },
          {
            src: "assets/images/gallery/pidurangala-sunrise.jpg",
            alt: "Sunset glow from Pidurangala summit",
            caption: "Spectacular 360-degree vistas over the Central Province"
          }
        ],
        overnight: "Sigiriya (Forest Eco-Resort)",
        travelNotes: "Local transfers within 10–15 minutes in your private vehicle.",
        optionalActivities: "Traditional Sri Lankan herbal head and foot massage at the resort spa.",
        practicalNotes: "Wear supportive footwear for both ascents. Stay well hydrated."
      },
      {
        day: 4,
        title: "Dambulla Golden Cave Temples & Mountain Passage to Kandy",
        destination: "Dambulla & Kandy",
        introduction: "Climb to the five ancient cavern sanctuaries of Dambulla, filled with 153 gilded Buddha statues and centuries of ceiling murals, before driving through spice-cloaked hills to the sacred city of Kandy.",
        activities: [
          {
            title: "Dambulla Royal Rock Cave Sanctuary",
            description: "Explore the five painted cave temples carved underneath a massive granite cliff overhang. Admire the 14-metre reclining Buddha carved from the living rock in Cave 1, and the intricate ceiling murals depicting the battle of Dutugemunu in Cave 2.",
            timing: "Morning (09:00 – 11:30)",
            photos: [
              {
                src: "assets/images/destinations/dambulla.jpg",
                alt: "Dambulla cave temple golden dagoba and rock sanctuary",
                caption: "Two millennia of Buddhist devotion carved into granite caves at Dambulla"
              }
            ]
          },
          {
            title: "Scenic Ascent to Kandy via Matale Heritage Spice Trail",
            description: "Drive south through the central foothills, pausing at an artisan spice garden in Matale to discover how true Ceylon cinnamon, cardamom, and nutmeg are cultivated, before entering the highland city of Kandy.",
            timing: "Afternoon",
            photos: [
              {
                src: "assets/images/destinations/kandy.jpg",
                alt: "Kandy Lake and sacred city framed by green hills",
                caption: "Entering the royal lake city of Kandy in the central highlands"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/dambulla.jpg",
            alt: "Dambulla rock temple entrance",
            caption: "Ancient whitewashed colonnades beneath the granite mountain"
          },
          {
            src: "assets/images/destinations/kandy.jpg",
            alt: "Kandy lake view",
            caption: "The peaceful waters of Kandy Lake surrounded by forested hills"
          }
        ],
        overnight: "Kandy (Heritage Hillside Hotel)",
        travelNotes: "Approx. 2.5 hours drive (90 km) from Sigiriya to Kandy via Matale.",
        optionalActivities: "Evening stroll around the perimeter of Kandy Lake at twilight.",
        practicalNotes: "Strict temple dress code applies at both Dambulla and Kandy."
      },
      {
        day: 5,
        title: "The Living Faith of Kandy — Sacred Tooth Relic & Cultural Arts",
        destination: "Kandy",
        introduction: "Immerse yourself in Kandy's living cultural traditions. Walk through the sprawling Royal Botanic Gardens of Peradeniya, observe traditional woodcarvers and brass artisans, and attend the evening ceremony at the Temple of the Tooth.",
        activities: [
          {
            title: "Peradeniya Royal Botanic Gardens & Artisan Guilds",
            description: "Wander through the 147-acre Peradeniya gardens, admiring the famous orchid house and giant bamboo stands. Later, visit a traditional Kandyan woodcarving or batik workshop to observe masters practicing age-old artisanal crafts.",
            timing: "Morning to Early Afternoon",
            photos: [
              {
                src: "assets/images/gallery/peradeniya-gardens.jpg",
                alt: "Royal palm avenue at Peradeniya botanic gardens",
                caption: "Stately avenues of royal palms at Peradeniya gardens"
              }
            ]
          },
          {
            title: "Temple of the Sacred Tooth Relic (Sri Dalada Maligawa)",
            description: "Join worshippers at the evening Thevava ritual. As resonant drums and conch shells fill the air, witness the gilded doors of the inner sanctum open to reveal the golden lotus casket safeguarding the tooth relic of the Buddha.",
            timing: "Evening (18:30 – 20:00)",
            photos: [
              {
                src: "assets/images/destinations/kandy.jpg",
                alt: "Temple of the Sacred Tooth Relic illuminated at dusk",
                caption: "The sacred heart of Theravada Buddhism in Sri Lanka"
              },
              {
                src: "assets/images/gallery/kandyan-dance.jpg",
                alt: "Traditional Kandyan dancers with ceremonial headwear",
                caption: "Centuries-old ritual dance and drumming performance"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/kandy.jpg",
            alt: "Temple of the Tooth complex",
            caption: "Historic palace architecture surrounding the sacred shrine"
          },
          {
            src: "assets/images/gallery/kandyan-dance.jpg",
            alt: "Kandyan cultural drummer in ornate brass regalia",
            caption: "Ceremonial drummers preserving ancient ritual traditions"
          }
        ],
        overnight: "Kandy (Heritage Hillside Hotel)",
        travelNotes: "Short city excursions within Kandy in your private vehicle.",
        optionalActivities: "Traditional Kandyan cultural dance and fire-walking showcase prior to the temple ceremony.",
        practicalNotes: "White or light coloured clothing covering knees and shoulders required for the temple."
      },
      {
        day: 6,
        title: "Highland Descent to Colombo — Journey's End",
        destination: "Kandy to Colombo Airport",
        introduction: "Descend from the central highlands through rubber plantations and rice paddies back to the western coast, with time for souvenir shopping or a city orientation in Colombo before your flight.",
        activities: [
          {
            title: "Scenic Kadugannawa Mountain Pass Descent",
            description: "Drive down the dramatic Kadugannawa incline, enjoying panoramic views over the Bible Rock and cascading valleys. Stop at a local tea shop for a fresh cup of mountain-grown Ceylon tea.",
            timing: "Morning",
            photos: [
              {
                src: "assets/images/vehicles/private-car.jpg",
                alt: "Private tour vehicle on scenic mountain road",
                caption: "Executive descent through the Kadugannawa mountain pass"
              }
            ]
          },
          {
            title: "Colombo City Heritage Drive & Airport Transfer",
            description: "Enjoy an introductory drive through Colombo's historic Fort district, Pettah markets, and the colonial Independence Square before a direct transfer to Bandaranaike International Airport.",
            timing: "Afternoon",
            photos: [
              {
                src: "assets/images/destinations/anuradhapura.jpg",
                alt: "Reflecting on 2,500 years of Sri Lankan cultural heritage",
                caption: "Departing with deep appreciation of Sri Lanka's cultural legacy"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/kandy.jpg",
            alt: "Kandy lake morning mist",
            caption: "Morning mist rising from Kandy Lake"
          },
          {
            src: "assets/images/destinations/anuradhapura.jpg",
            alt: "Ancient stupa dome against the sky",
            caption: "Timeless memories of the Cultural Triangle"
          }
        ],
        overnight: "Departure (No hotel stay included)",
        travelNotes: "Approx. 3 to 3.5 hours drive (115 km) from Kandy to Colombo International Airport.",
        optionalActivities: "Visit a government-certified gem museum in Kandy or Colombo for sapphire viewing.",
        practicalNotes: "Arrive at CMB Airport 3 hours prior to international departure."
      }
    ],
    inclusions: [
      "Private executive air-conditioned vehicle throughout the 6-day itinerary",
      "Services of a licensed English-speaking professional chauffeur-guide",
      "All fuel, expressway tolls, and vehicle parking fees",
      "Complimentary chilled mineral water daily in vehicle",
      "Airport meet & greet with fresh king coconut welcome",
      "24/7 dedicated local concierge support"
    ],
    exclusions: [
      "International flights and ETA visa fees",
      "Hotel accommodations (can be packaged upon request)",
      "Entrance fees to cultural sites (approx. $125 USD total per person covering Anuradhapura, Polonnaruwa, Sigiriya, Dambulla, and Kandy)",
      "Personal meals, drinks, and camera permits",
      "Chauffeur-guide gratuity"
    ],
    importantNotes: "Respectful dress code is strictly observed at all sacred Buddhist and Hindu monuments: shoulders and knees must be fully covered, hats removed, and footwear left at the designated counters."
  },
  {
    slug: "honeymoon-island",
    title: "Honeymoon Island",
    duration: "8 Days / 7 Nights",
    durationDays: 8,
    category: "Romance & Honeymoon",
    categorySlug: "honeymoon",
    badge: "Romantic Escape",
    heroImage: "assets/images/tours/honeymoon-island/hero.jpg",
    destinationsSummary: "Kandy • Nuwara Eliya • Ella • Yala Safari • Mirissa Coastal Villas",
    pace: "Intimate & Relaxed",
    suitableFor: "Newlyweds, couples celebrating anniversaries, and romantic travellers",
    shortDescription: "A romantic honeymoon circuit combining private tea bungalow retreats, scenic mountain rail journeys, wilderness luxury, and secluded southern beach villas.",
    overview: "Honeymoon Island is handcrafted for couples seeking an extraordinary blend of romance, natural drama, and private indulgence. From candlelit dinners on historic colonial tea verandahs in Nuwara Eliya to the exhilarating rhythm of the blue train winding through Ella's mist-shrouded peaks, an exclusive private 4x4 safari tracking leopards in Yala, and sun-soaked days at secluded beach villas overlooking the turquoise Indian Ocean, every day is designed for intimacy and ease.",
    highlights: [
      "Stay in boutique heritage tea estate bungalows with private garden dining",
      "Take the iconic blue train through the central highlands hand in hand",
      "Watch the sunrise from Coconut Tree Hill and Little Adam's Peak",
      "Embark on private 4x4 leopard game drives in Yala National Park",
      "Wander the candlelit cobblestone alleys of Galle Fort at twilight",
      "Enjoy private candlelit seafood beach dinners with your feet in the sand"
    ],
    routeOverview: "Colombo Airport → Kandy (1 Night) → Nuwara Eliya Tea Country (2 Nights) → Ella (1 Night) → Yala Safari Lodge (1 Night) → Mirissa / Galle Coast (2 Nights) → Airport Departure",
    days: [
      {
        day: 1,
        title: "Romantic Welcome — The Hill Kingdom of Kandy",
        destination: "Kandy",
        introduction: "Arrive at Colombo Airport where your private chauffeur-guide welcomes you with fragrant frangipani flower garlands and chilled king coconuts. Travel into the forested hills of Kandy to check into your boutique resort overlooking the valley.",
        activities: [
          {
            title: "Private Airport Welcome & Scenic Foothills Drive",
            description: "Relax in your executive vehicle as you leave the coastal lowlands behind, climbing through pineapple plantations and jungle foothills to your romantic hillside retreat.",
            timing: "Afternoon",
            photos: [
              {
                src: "assets/images/vehicles/private-car.jpg",
                alt: "Executive private vehicle ready for romantic journey",
                caption: "Private executive vehicle for your romantic honeymoon journey"
              }
            ]
          },
          {
            title: "Lakeside Sunset & Candlelit Welcome Dinner",
            description: "Take an unhurried sunset walk along the edge of Kandy Lake before enjoying a special candlelit dinner on your hotel verandah overlooking the sparkling lights of the city below.",
            timing: "Evening",
            photos: [
              {
                src: "assets/images/destinations/kandy.jpg",
                alt: "Kandy Lake illuminated at dusk",
                caption: "Romantic twilight views across Kandy Lake"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/kandy.jpg",
            alt: "Kandy hillside view",
            caption: "Forested mountain sanctuary in the royal hill capital"
          },
          {
            src: "assets/images/gallery/peradeniya-gardens.jpg",
            alt: "Tropical flowers in Kandy",
            caption: "Exotic orchids and fragrant blooms welcoming your arrival"
          }
        ],
        overnight: "Kandy (Luxury Hillside Boutique Resort)",
        travelNotes: "Approx. 3 hours drive from Colombo Airport to Kandy.",
        optionalActivities: "Couples relaxing Ayurvedic massage at the resort wellness sanctuary.",
        practicalNotes: "Gentle mountain climate; a light evening layer is pleasant."
      },
      {
        day: 2,
        title: "Peradeniya Orchids & Romantic Tea Country Ascent",
        destination: "Kandy to Nuwara Eliya",
        introduction: "Wander hand-in-hand through the celebrated orchid pavilion at Peradeniya Botanical Gardens before ascending into the cool, mist-kissed tea hills of Nuwara Eliya.",
        activities: [
          {
            title: "Peradeniya Royal Botanical Orchid Walk",
            description: "Stroll through the shaded avenues of royal palms, finding the famous Orchid House where over 300 vibrant tropical varieties create a magnificent natural fragrance and display.",
            timing: "Morning",
            photos: [
              {
                src: "assets/images/gallery/peradeniya-gardens.jpg",
                alt: "Orchid house and palm avenue in Peradeniya gardens",
                caption: "Walking beneath towering royal palms in Peradeniya"
              }
            ]
          },
          {
            title: "Tea Country Scenic Drive & High Tea Service",
            description: "Climb past cascading mountain waterfalls into Nuwara Eliya. Check in to your heritage tea planter's bungalow and enjoy an authentic British high tea service on the manicured lawn with fresh mountain strawberries.",
            timing: "Afternoon",
            photos: [
              {
                src: "assets/images/destinations/nuwara-eliya.jpg",
                alt: "Rolling tea terraces of Nuwara Eliya",
                caption: "Emerald tea terraces surrounding your colonial bungalow"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/nuwara-eliya.jpg",
            alt: "Tea hills in soft afternoon light",
            caption: "Misty afternoon light over high-grown Ceylon tea estates"
          },
          {
            src: "assets/images/gallery/tea-factory.jpg",
            alt: "Tea factory in tea hills",
            caption: "Artisanal tea crafting in the cool highlands"
          }
        ],
        overnight: "Nuwara Eliya (Historic Tea Planter's Bungalow)",
        travelNotes: "Approx. 2.5 hours scenic mountain drive (75 km).",
        optionalActivities: "Log fire dining with fine wine in your bungalow drawing room.",
        practicalNotes: "Evening temperatures drop to 12°C; warm sweaters or jackets are recommended."
      },
      {
        day: 3,
        title: "Private Tea Plucking Experience & Lake Gregory",
        destination: "Nuwara Eliya",
        introduction: "Spend an unhurried day in the tea country. Don traditional tea-plucking baskets for a private walk through the bushes, learn the secrets of Ceylon tea, and take a gentle boat ride on Lake Gregory.",
        activities: [
          {
            title: "Private Tea Estate Walk & Tasting Masterclass",
            description: "Walk together through the manicured tea rows with an expert planter. Learn to pluck 'two leaves and a bud' and sample rare white, silver tip, and single-estate black teas.",
            timing: "Morning",
            photos: [
              {
                src: "assets/images/gallery/tea-factory.jpg",
                alt: "Tea withering and processing",
                caption: "Private tea tasting masterclass at an orthodox estate"
              }
            ]
          },
          {
            title: "Lake Gregory Boat Ride & Town Stroll",
            description: "Enjoy a scenic boat cruise on the calm mountain waters of Lake Gregory, followed by a walk past the charming red-brick 1894 colonial Post Office and Victoria Park.",
            timing: "Afternoon",
            photos: [
              {
                src: "assets/images/destinations/nuwara-eliya.jpg",
                alt: "Colonial town and lake scenery in Nuwara Eliya",
                caption: "Colonial charm and serene mountain lakes in Nuwara Eliya"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/nuwara-eliya.jpg",
            alt: "Tea garden landscape",
            caption: "Vast emerald horizons of the central highlands"
          },
          {
            src: "assets/images/gallery/tea-factory.jpg",
            alt: "Fresh tea leaves",
            caption: "Freshly plucked tea leaves ready for artisan withering"
          }
        ],
        overnight: "Nuwara Eliya (Historic Tea Planter's Bungalow)",
        travelNotes: "Short local excursions in your private executive vehicle.",
        optionalActivities: "Romantic horse-drawn carriage ride through Nuwara Eliya town.",
        practicalNotes: "Wear comfortable walking shoes for the estate trails."
      },
      {
        day: 4,
        title: "The Scenic Blue Train to Ella & Nine Arch Bridge",
        destination: "Nuwara Eliya to Ella",
        introduction: "Board the famous blue train for a romantic mountain rail journey. Lean out of the open doorway as mist swirls over viaducts and tea terraces, arriving in relaxed Ella to view the Nine Arch Bridge.",
        activities: [
          {
            title: "Highland Blue Train Rail Experience",
            description: "Take your reserved seats on the vintage blue train from Nanu Oya to Ella. Watch dramatic valleys, waterfalls, and tea-picker villages unfold while your driver takes your luggage ahead to your hotel.",
            timing: "Morning / Midday",
            photos: [
              {
                src: "assets/images/destinations/scenic-train.jpg",
                alt: "Blue train crossing viaduct in Sri Lanka",
                caption: "The world's most romantic mountain railway journey"
              }
            ]
          },
          {
            title: "Nine Arch Bridge Sunset Stroll",
            description: "Walk together through quiet forest trails to view the iconic Nine Arch Bridge emerging through the jungle greenery. Capture timeless photographs as twilight descends over Demodara gorge.",
            timing: "Late Afternoon",
            photos: [
              {
                src: "assets/images/destinations/ella.jpg",
                alt: "Nine Arch Bridge surrounded by greenery in Ella",
                caption: "The magnificent stone Nine Arch Bridge at golden hour"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/scenic-train.jpg",
            alt: "Train journey through misty hills",
            caption: "Unforgettable vistas from the open train carriage"
          },
          {
            src: "assets/images/destinations/ella.jpg",
            alt: "Nine Arch Bridge in Ella",
            caption: "Colonial stone arches hidden deep in the mountain valley"
          }
        ],
        overnight: "Ella (Chic Cliffside Mountain Resort)",
        travelNotes: "Approx. 3.5 hours train ride; private car meets you at Ella platform.",
        optionalActivities: "Sunset cocktails on a panoramic deck overlooking Ella Gap.",
        practicalNotes: "Pre-arranged reserved train tickets subject to railway availability."
      },
      {
        day: 5,
        title: "Sunrise at Little Adam's Peak & Private Yala Safari",
        destination: "Ella to Yala National Park",
        introduction: "Begin the day with an easy sunrise walk along the crest of Little Adam's Peak before descending to the wild coastal sanctuary of Yala for an afternoon private 4x4 leopard safari.",
        activities: [
          {
            title: "Little Adam's Peak Sunrise Walk",
            description: "Ascend the gentle stepped trail in the early morning to watch the golden sun break over Ella Rock and the deep southern valleys.",
            timing: "Early Morning (06:30 – 08:30)",
            photos: [
              {
                src: "assets/images/gallery/little-adams-peak.jpg",
                alt: "Grassy ridge of Little Adam's Peak at sunrise",
                caption: "Sunrise vistas along the crest of Little Adam's Peak"
              }
            ]
          },
          {
            title: "Private Sunset Safari in Yala Block 1",
            description: "Transfer down to Yala and board your private 4x4 safari jeep with dedicated tracker. Search for wild elephants, spotted deer, and leopards as the sun sets over the coastal dunes.",
            timing: "Afternoon (15:00 – 18:00)",
            photos: [
              {
                src: "assets/images/destinations/yala.jpg",
                alt: "Sri Lankan leopard resting on a warm rock in Yala",
                caption: "A private safari encounter with the wild Sri Lankan leopard"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/gallery/little-adams-peak.jpg",
            alt: "Mountain ridge view in Ella",
            caption: "Morning golden hour overlooking Ella Gap"
          },
          {
            src: "assets/images/destinations/yala.jpg",
            alt: "Leopard in Yala wilderness",
            caption: "Majestic wildlife encounters in Yala's coastal bush"
          }
        ],
        overnight: "Yala (Luxury Tented Safari Camp)",
        travelNotes: "Approx. 2.5 hours scenic drive (95 km) descending from Ella to Yala.",
        optionalActivities: "Private bush dinner under lantern light beside a campfire.",
        practicalNotes: "Wear comfortable walking shoes for Little Adam's Peak; neutral clothes for safari."
      },
      {
        day: 6,
        title: "To the Ocean — Coconut Tree Hill & Secluded Beach Villa",
        destination: "Yala to Mirissa / Southern Coast",
        introduction: "Leave the wilderness and drive along the scenic southern coastline to Mirissa. Climb Coconut Tree Hill at sunset and check in to your private oceanfront villa.",
        activities: [
          {
            title: "Scenic Coastal Drive & Tangalle Lagoon Stop",
            description: "Drive westward along the palm-fringed southern coast, stopping to admire wild coastal bays and turquoise lagoons before reaching Mirissa.",
            timing: "Morning",
            photos: [
              {
                src: "assets/images/destinations/mirissa.jpg",
                alt: "Turquoise ocean waters and palms in Mirissa",
                caption: "Approaching the golden southern beaches of Mirissa"
              }
            ]
          },
          {
            title: "Sunset at Coconut Tree Hill & Villa Check-In",
            description: "Ascend Coconut Tree Hill for an iconic romantic photo together as the sun dips into the Indian Ocean. Settle into your ocean-view villa.",
            timing: "Late Afternoon (17:00 – 18:30)",
            photos: [
              {
                src: "assets/images/destinations/mirissa.jpg",
                alt: "Coconut Tree Hill in Mirissa at sunset",
                caption: "Iconic romantic sunset view from Coconut Tree Hill"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/mirissa.jpg",
            alt: "Mirissa palm grove",
            caption: "Curving coconut palms over the breaking surf"
          },
          {
            src: "assets/images/gallery/mirissa-sunset.jpg",
            alt: "Sunset on Mirissa beach",
            caption: "Warm evening colours over the southern Indian Ocean"
          }
        ],
        overnight: "Mirissa (Oceanfront Luxury Villa)",
        travelNotes: "Approx. 2.5 hours drive (120 km) from Yala to Mirissa.",
        optionalActivities: "Candlelit fresh seafood dinner directly on the sandy beach.",
        practicalNotes: "Unpack and relax for two consecutive nights by the ocean."
      },
      {
        day: 7,
        title: "Whales of the Deep & Sunset Ramparts of Galle Fort",
        destination: "Mirissa & Galle Fort",
        introduction: "Sail into the deep ocean on a morning whale watching cruise, then spend a romantic afternoon strolling the cobblestone alleys and sunset ramparts of Galle Fort.",
        activities: [
          {
            title: "Morning Whale Watching Excursion",
            description: "Venture onto the ocean aboard a comfortable vessel to watch blue whales, sperm whales, and pods of playful spinner dolphins in their natural migratory habitat.",
            timing: "Early Morning (06:30 – 10:30)",
            photos: [
              {
                src: "assets/images/gallery/mirissa-sunset.jpg",
                alt: "Deep blue ocean off Mirissa coast",
                caption: "Witnessing magnificent marine life in the deep waters of Mirissa"
              }
            ]
          },
          {
            title: "Galle Fort Twilight Ramparts Walk",
            description: "Wander hand in hand through the historic streets of Galle Fort, exploring quaint jewellery boutiques and climbing the ramparts to Flag Rock for a breathtaking coastal sunset.",
            timing: "Late Afternoon (16:30 – 18:30)",
            photos: [
              {
                src: "assets/images/destinations/galle.jpg",
                alt: "Galle Fort lighthouse and ocean at sunset",
                caption: "The romantic lighthouse and sea ramparts of Galle Fort"
              },
              {
                src: "assets/images/gallery/galle-street.jpg",
                alt: "Colonial street in Galle Fort with bougainvillea",
                caption: "Quiet cobblestone lanes adorned with tropical flowers"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/galle.jpg",
            alt: "Galle Fort ramparts at twilight",
            caption: "Centuries of maritime history along the ocean bastions"
          },
          {
            src: "assets/images/gallery/galle-street.jpg",
            alt: "Historic boutique in Galle Fort",
            caption: "Charming independent boutiques and candlelit cafés"
          }
        ],
        overnight: "Mirissa / Galle (Oceanfront Luxury Villa)",
        travelNotes: "Short 40-minute drive between Mirissa and Galle Fort in your private car.",
        optionalActivities: "Fine dining dinner inside a restored 18th-century Dutch merchant mansion in Galle.",
        practicalNotes: "Flat sandals or comfortable walking shoes are ideal for the fort ramparts."
      },
      {
        day: 8,
        title: "Southern Coast Farewell & Airport Transfer",
        destination: "Mirissa to Colombo Airport",
        introduction: "Savour your final tropical breakfast watching waves roll onto the golden sand. Your private chauffeur transfers you smoothly via the Southern Expressway to the airport for your journey home.",
        activities: [
          {
            title: "Leisurely Morning by the Ocean",
            description: "Enjoy a final swim, beach walk, or fresh tropical fruit breakfast before packing your bags with Ceylon cinnamon, teas, and sapphires.",
            timing: "Morning",
            photos: [
              {
                src: "assets/images/vehicles/private-car.jpg",
                alt: "Executive vehicle ready for final airport transfer",
                caption: "Comfortable executive transit to Colombo Airport"
              }
            ]
          },
          {
            title: "Southern Expressway Airport Transfer",
            description: "Relax during a seamless 2-hour drive along the Southern Expressway directly to Bandaranaike International Airport for your international departure.",
            timing: "Schedule Dependent",
            photos: [
              {
                src: "assets/images/destinations/mirissa.jpg",
                alt: "Palm trees on southern shore waving farewell",
                caption: "Cherished honeymoon memories of extraordinary Sri Lanka"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/mirissa.jpg",
            alt: "Mirissa beach in morning sun",
            caption: "Gentle tropical waves bidding you farewell"
          },
          {
            src: "assets/images/destinations/galle.jpg",
            alt: "Galle lighthouse in sunlight",
            caption: "A romantic journey to treasure for a lifetime"
          }
        ],
        overnight: "Departure (No hotel stay included)",
        travelNotes: "Approx. 2 to 2.5 hours drive (175 km) from Mirissa to CMB Airport via Southern Expressway.",
        optionalActivities: "Extend your stay with additional days in a private pool villa upon request.",
        practicalNotes: "Arrive at CMB Airport 3 hours prior to international flights."
      }
    ],
    inclusions: [
      "Dedicated private executive air-conditioned vehicle throughout the 8 days",
      "Licensed English-speaking professional chauffeur-guide",
      "Romantic welcome floral garlands and fresh king coconut upon arrival",
      "Coordinated reserved first-class or observation rail tickets on the scenic blue train",
      "Luggage transfer service directly between Nuwara Eliya and Ella during the train ride",
      "Private 4x4 open-top safari jeep in Yala National Park with experienced tracker",
      "All vehicle fuel, expressway tolls, and driver allowances",
      "Chilled bottled drinking water provided daily"
    ],
    exclusions: [
      "International flights and ETA visa fees",
      "Hotel accommodations (can be packaged upon request with preferred romantic honeymoon partners)",
      "Whale watching boat tickets (approx. $50 USD per person)",
      "Monument and safari entry tickets (approx. $80 USD per person)",
      "Meals, beverages, and personal expenses",
      "Driver and guide gratuities"
    ],
    importantNotes: "Honeymoon special touches such as floral bed decorations, honeymoon cakes, or private candlelit dinners can be coordinated in advance with our partner hotels."
  },
  {
    slug: "family-island-escape",
    title: "Family Island Escape",
    duration: "8 Days / 7 Nights",
    durationDays: 8,
    category: "Family & Active",
    categorySlug: "family",
    badge: "Family Friendly",
    heroImage: "assets/images/tours/family-island-escape/hero.jpg",
    destinationsSummary: "Negombo • Pinnawala & Kandy • Tea Country • Udawalawe • Bentota Beach",
    pace: "Gentle & Engaging",
    suitableFor: "Families with children, multi-generational groups, and curious youngsters",
    shortDescription: "A family adventure packed with wild elephant encounters, baby elephant feeding, scenic train rides, village catamaran cruises, and calm beach lagoons.",
    overview: "Family Island Escape is carefully paced to ensure parents, children, and grandparents travel with delight and ease. Distances between stops are kept sensible, with spacious private executive vans (such as the Toyota HiAce KDH), child-friendly hotels with swimming pools, and engaging activities. Kids will love feeding orphaned baby elephants at Udawalawe Transit Home, exploring ancient fortress ruins, spotting turtles, and learning to bodyboard on gentle, calm southern beaches.",
    highlights: [
      "Observe orphaned baby elephants during milk feeding time at Udawalawe Transit Home",
      "Take an open-top 4x4 safari to see wild elephant families and playful calves",
      "Ride the scenic blue highland train over mountain bridges and through tunnels",
      "Explore the gentle, child-friendly walking trails of Peradeniya Botanic Gardens",
      "Discover sea turtles and release hatchlings at a coastal marine sanctuary in Kosgoda",
      "Relax at family-friendly beachfront resorts with calm swimming lagoons in Bentota"
    ],
    routeOverview: "Colombo Airport → Negombo (1 Night) → Kandy (2 Nights) → Nuwara Eliya (1 Night) → Udawalawe (1 Night) → Bentota Beach (2 Nights) → Airport Departure",
    days: [
      {
        day: 1,
        title: "Family Arrival — Coastal Negombo Lagoon",
        destination: "Negombo",
        introduction: "Arrive at Colombo Airport where your friendly family chauffeur-guide welcomes you. Take a quick 20-minute transfer to a beachfront resort in Negombo to unpack, swim in the pool, and recover from your flight.",
        activities: [
          {
            title: "Private Family Welcome & Smooth Airport Transfer",
            description: "Meet your dedicated driver in the arrivals hall. Step into your spacious, air-conditioned family van with ample room for strollers, luggage, and child safety seats.",
            timing: "Upon Arrival",
            photos: [
              {
                src: "assets/images/vehicles/kdh-van.jpg",
                alt: "Spacious family van ready for comfortable touring",
                caption: "Spacious private executive van for comfortable family touring"
              }
            ]
          },
          {
            title: "Beachfront Pool & Sunset Sandcastle Time",
            description: "Spend an unhurried afternoon relaxing by the swimming pool and walking along the sandy beach, watching traditional outrigger boats return across the lagoon.",
            timing: "Afternoon",
            photos: [
              {
                src: "assets/images/gallery/negombo-lagoon.jpg",
                alt: "Negombo beach and lagoon at sunset",
                caption: "Gentle ocean breezes to begin your family vacation"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/gallery/negombo-lagoon.jpg",
            alt: "Fishing boats on the lagoon",
            caption: "Colourful traditional boats resting along Negombo lagoon"
          },
          {
            src: "assets/images/vehicles/kdh-van.jpg",
            alt: "Family van",
            caption: "Spacious air-conditioned travel for the whole family"
          }
        ],
        overnight: "Negombo (Family Beach Resort)",
        travelNotes: "Approx. 20 minutes from Colombo International Airport (CMB).",
        optionalActivities: "Casual beachfront dinner with fresh tropical fruit juices for the kids.",
        practicalNotes: "Pack swimwear and sun hats in your carry-on for immediate poolside relaxation."
      },
      {
        day: 2,
        title: "To Kandy — Pinnawala Elephants & Royal Gardens",
        destination: "Pinnawala & Kandy",
        introduction: "Travel inland toward the royal hill city of Kandy. Stop en route to watch elephants bathing in the river before exploring the giant trees and wide lawns of Peradeniya Royal Botanic Gardens.",
        activities: [
          {
            title: "Pinnawala River Bathing Lookout",
            description: "Pause along the banks of the Maha Oya river to watch elephants frolic in the refreshing mountain waters, splashing each other with their trunks from a safe riverside restaurant deck.",
            timing: "Morning (10:00 – 12:00)",
            photos: [
              {
                src: "assets/images/destinations/udawalawe.jpg",
                alt: "Elephants bathing and playing in the river",
                caption: "Elephants cooling off and playing in the river"
              }
            ]
          },
          {
            title: "Peradeniya Royal Botanic Gardens Family Walk",
            description: "Explore the spacious 147-acre gardens with wide paved avenues safe for children to run. Marvel at giant fruit bats hanging from canopy trees, touch sensitive plants, and visit the colourful orchid house.",
            timing: "Afternoon (14:30 – 17:00)",
            photos: [
              {
                src: "assets/images/gallery/peradeniya-gardens.jpg",
                alt: "Wide palm tree avenue in Peradeniya gardens",
                caption: "Wide paved paths and giant trees for kids to explore"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/gallery/peradeniya-gardens.jpg",
            alt: "Peradeniya botanic gardens lawn",
            caption: "Sprawling green lawns in the historic royal botanic sanctuary"
          },
          {
            src: "assets/images/destinations/kandy.jpg",
            alt: "Kandy lake view",
            caption: "The peaceful city of Kandy nestled around its mountain lake"
          }
        ],
        overnight: "Kandy (Family Resort with Pool)",
        travelNotes: "Approx. 3 hours drive (105 km) with a relaxing 2-hour stop in Pinnawala.",
        optionalActivities: "Watch a high-energy Kandyan cultural drumming and acrobatic dance performance.",
        practicalNotes: "Comfortable sneakers and water bottles for the botanical gardens walk."
      },
      {
        day: 3,
        title: "Sacred Kandy Lake & Traditional Village Crafting",
        destination: "Kandy",
        introduction: "Spend an enriching day in Kandy. Visit the venerated Temple of the Tooth Relic in the morning, and enjoy a hands-on visit to a traditional rural craft workshop in the afternoon.",
        activities: [
          {
            title: "Temple of the Sacred Tooth Relic Family Visit",
            description: "Walk through the historic carved timber chambers of Sri Dalada Maligawa, introducing children to Buddhist culture and the story of how the sacred tooth was protected across centuries.",
            timing: "Morning (09:00 – 11:00)",
            photos: [
              {
                src: "assets/images/destinations/kandy.jpg",
                alt: "Temple of the Tooth complex in Kandy",
                caption: "Discovering ancient palace architecture and sacred heritage"
              }
            ]
          },
          {
            title: "Artisan Woodcarving & Brass Workshop",
            description: "Visit a family-run artisanal workshop where children can see how master craftsmen carve wooden elephants and mask characters from ancient folklore, and try their hand at traditional painting.",
            timing: "Afternoon",
            photos: [
              {
                src: "assets/images/gallery/kandyan-dance.jpg",
                alt: "Traditional cultural crafts and dancers",
                caption: "Learning about local folk legends, masks, and traditional music"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/kandy.jpg",
            alt: "Kandy lakeside promenade",
            caption: "Walking under shady rain trees along Kandy Lake"
          },
          {
            src: "assets/images/gallery/kandyan-dance.jpg",
            alt: "Ceremonial costumes",
            caption: "Vibrant colours and ancient musical heritage"
          }
        ],
        overnight: "Kandy (Family Resort with Pool)",
        travelNotes: "Short local transfers within Kandy in your private vehicle.",
        optionalActivities: "Gelato and pastry stop at an artisanal lakeside café in Kandy.",
        practicalNotes: "Modest attire covering shoulders and knees required inside temple precincts."
      },
      {
        day: 4,
        title: "Mountain Tea Country & The Scenic Highland Train",
        destination: "Kandy to Nuwara Eliya",
        introduction: "Climb into the cool central mountains. Experience the excitement of boarding the vintage blue highland train, winding through mountain tunnels and over cascading waterfalls to Nuwara Eliya.",
        activities: [
          {
            title: "Highland Blue Train Adventure",
            description: "Board the scenic blue train for a memorable family rail journey through the tea-cloaked mountains. Your driver transports all heavy luggage ahead, so your family can simply enjoy the ride.",
            timing: "Morning (Schedule dependent)",
            photos: [
              {
                src: "assets/images/destinations/scenic-train.jpg",
                alt: "Blue passenger train winding through green tea hills",
                caption: "An exciting ride on the iconic mountain blue train"
              }
            ]
          },
          {
            title: "Lake Gregory Family Pedal Boating & Park Play",
            description: "Arrive in cool Nuwara Eliya and head to Lake Gregory, where the whole family can rent pedal swan boats, ride bicycles along the lake path, and enjoy the crisp mountain air.",
            timing: "Afternoon",
            photos: [
              {
                src: "assets/images/destinations/nuwara-eliya.jpg",
                alt: "Lake Gregory and green hills in Nuwara Eliya",
                caption: "Pedal boating and outdoor recreation around Lake Gregory"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/scenic-train.jpg",
            alt: "Train passing through tea hills",
            caption: "Children waving to tea pickers from the open train windows"
          },
          {
            src: "assets/images/destinations/nuwara-eliya.jpg",
            alt: "Tea hills in Nuwara Eliya",
            caption: "Cool mountain air and endless green tea terraces"
          }
        ],
        overnight: "Nuwara Eliya (Family Country Resort)",
        travelNotes: "Train ride approx. 2.5 hours to Nanu Oya; short 15-minute transfer to Nuwara Eliya town.",
        optionalActivities: "Taste fresh local strawberries with cream at a nearby berry farm.",
        practicalNotes: "Warm clothing needed for Nuwara Eliya; evenings are brisk (12°C–14°C)."
      },
      {
        day: 5,
        title: "Baby Elephants at Udawalawe Transit Home & 4x4 Safari",
        destination: "Nuwara Eliya to Udawalawe",
        introduction: "Descend from the mountains into the warm southern plains. Watch baby elephants drink their milk at the Elephant Transit Home, followed by an open-top 4x4 wildlife safari in Udawalawe.",
        activities: [
          {
            title: "Udawalawe Elephant Transit Home Milk Feeding",
            description: "Watch dozens of orphaned elephant calves trot eagerly out of the forest to be bottle-fed milk by dedicated conservationists. An educational, heartwarming highlight for kids of all ages.",
            timing: "Midday (12:00 Feeding)",
            photos: [
              {
                src: "assets/images/destinations/udawalawe.jpg",
                alt: "Orphaned elephant calves at the Udawalawe Transit Home",
                caption: "Watching orphaned baby elephants fed during scheduled feeding hour"
              }
            ]
          },
          {
            title: "Udawalawe 4x4 Open Safari Expedition",
            description: "Climb into an open-top 4x4 jeep to explore the grasslands of Udawalawe National Park. Spot wild elephant herds with newborn calves, wild water buffalo, peacocks, and eagles.",
            timing: "Afternoon (15:00 – 18:00)",
            photos: [
              {
                src: "assets/images/gallery/yala-safari-jeep.jpg",
                alt: "Family safari jeep tracking wildlife in Udawalawe",
                caption: "Exciting 4x4 wildlife safari tracking wild elephant families"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/udawalawe.jpg",
            alt: "Elephants grazing on the savannah",
            caption: "Gentle giants socialising in their protected natural reserve"
          },
          {
            src: "assets/images/gallery/yala-safari-jeep.jpg",
            alt: "Safari vehicle in the wild",
            caption: "Unforgettable outdoor wildlife adventures for the whole family"
          }
        ],
        overnight: "Udawalawe (Safari Lodge with Pool)",
        travelNotes: "Approx. 3.5 hours scenic mountain descent drive (140 km).",
        optionalActivities: "Night campfire with marshmallow toasting at the safari lodge.",
        practicalNotes: "Bring sun hats, sunglasses, and cameras for the safari."
      },
      {
        day: 6,
        title: "Sea Turtles at Kosgoda & Beachfront Arrival in Bentota",
        destination: "Udawalawe to Bentota",
        introduction: "Travel to the sunny southwest coast. Visit a community sea turtle conservation sanctuary in Kosgoda to see newly hatched baby turtles, then check in to your beachfront resort in Bentota.",
        activities: [
          {
            title: "Kosgoda Sea Turtle Hatchery & Conservation Centre",
            description: "Learn how local conservationists protect sea turtle eggs laid on the beach. Children can see baby green, hawksbill, and loggerhead turtles swimming in nursery pools before their night release.",
            timing: "Midday",
            photos: [
              {
                src: "assets/images/gallery/turtle-conservation.jpg",
                alt: "Rescued sea turtle in protective pool in Kosgoda",
                caption: "Learning about sea turtle conservation at Kosgoda sanctuary"
              }
            ]
          },
          {
            title: "Bentota Beachfront Check-In & Ocean Fun",
            description: "Check in to your family beach resort. Spend the late afternoon swimming in the calm resort pool, playing in the gentle surf, and watching the sunset together on the sand.",
            timing: "Late Afternoon",
            photos: [
              {
                src: "assets/images/gallery/mirissa-sunset.jpg",
                alt: "Golden sunset over calm southern beach",
                caption: "Arriving at the golden sandy beaches of Bentota"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/gallery/turtle-conservation.jpg",
            alt: "Baby turtles in nursery",
            caption: "Gentle hands-on conservation experiences for children"
          },
          {
            src: "assets/images/gallery/mirissa-sunset.jpg",
            alt: "Sunset on the beach",
            caption: "Golden twilight over the warm, calm waters of Bentota"
          }
        ],
        overnight: "Bentota (Family Beach Resort)",
        travelNotes: "Approx. 2.5 hours drive (135 km) from Udawalawe to Bentota via southern highways.",
        optionalActivities: "Beach volleyball or beginner bodyboarding lessons on the gentle sand bar.",
        practicalNotes: "Reef-safe sunscreen and rash guards are great for kids in the tropical sun."
      },
      {
        day: 7,
        title: "Madu Ganga Mangrove River Safari & Day of Beach Play",
        destination: "Bentota & Balapitiya",
        introduction: "Embark on an exciting motorboat safari through the mangrove tunnels and islands of the Madu Ganga estuary, followed by a relaxed afternoon of beach play and swimming.",
        activities: [
          {
            title: "Madu Ganga River Boat Expedition",
            description: "Cruise beneath overhanging mangrove tunnels on a safe private motorboat. Visit Cinnamon Island to see local farmers craft cinnamon, and watch water monitor lizards and kingfishers along the riverbanks.",
            timing: "Morning (09:00 – 11:30)",
            photos: [
              {
                src: "assets/images/gallery/madu-ganga-river.jpg",
                alt: "Motorboat in mangrove canal on Madu Ganga",
                caption: "Navigating through natural mangrove tunnels on the Madu Ganga"
              }
            ]
          },
          {
            title: "Afternoon Family Beach & Pool Time",
            description: "Spend an unhurried final afternoon swimming, building sandcastles, and enjoying casual poolside snacks with fresh fruit shakes and coconut ice cream.",
            timing: "Afternoon",
            photos: [
              {
                src: "assets/images/destinations/mirissa.jpg",
                alt: "Palm trees and calm beach waters",
                caption: "Relaxed family afternoons on the golden southern shore"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/gallery/madu-ganga-river.jpg",
            alt: "Madu Ganga river channels",
            caption: "Exploring 64 islands and mangrove waterways on the river safari"
          },
          {
            src: "assets/images/gallery/mirissa-sunset.jpg",
            alt: "Sunset across the beach",
            caption: "The peaceful close of another fun-filled family day"
          }
        ],
        overnight: "Bentota (Family Beach Resort)",
        travelNotes: "Madu Ganga is a short 20-minute drive from Bentota.",
        optionalActivities: "Natural river fish spa experience where harmless doctor fish tickle your feet.",
        practicalNotes: "Life jackets provided in all sizes for children on the boat safari."
      },
      {
        day: 8,
        title: "Family Farewell — Smooth Highway Airport Transfer",
        destination: "Bentota to Colombo Airport",
        introduction: "Enjoy a final relaxed breakfast by the ocean. Your private driver packs your luggage and delivers your family smoothly via the Southern Expressway directly to Colombo Airport.",
        activities: [
          {
            title: "Leisurely Morning & Packing",
            description: "Enjoy a final swim and beach walk, collecting seashells and saying goodbye to your friendly hotel staff before checking out.",
            timing: "Morning",
            photos: [
              {
                src: "assets/images/vehicles/kdh-van.jpg",
                alt: "Family van ready for airport transfer",
                caption: "Spacious private van ready for the airport transfer"
              }
            ]
          },
          {
            title: "Direct Southern Expressway Airport Transfer",
            description: "Enjoy a stress-free 1.5-hour direct highway drive to Bandaranaike International Airport, arriving with ample time for your international departure.",
            timing: "Schedule Dependent",
            photos: [
              {
                src: "assets/images/destinations/galle.jpg",
                alt: "Scenic coastal highway view",
                caption: "Cherished family memories of beautiful Sri Lanka"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/gallery/mirissa-sunset.jpg",
            alt: "Final morning beach view",
            caption: "Warm morning sun over the southern coastline"
          },
          {
            src: "assets/images/destinations/udawalawe.jpg",
            alt: "Elephants in Sri Lanka",
            caption: "Unforgettable wildlife and adventure memories to take home"
          }
        ],
        overnight: "Departure (No hotel stay included)",
        travelNotes: "Approx. 1.5 hours direct expressway drive (105 km) from Bentota to CMB Airport.",
        optionalActivities: "Stop at an air-conditioned souvenir emporium in Colombo for handcrafted toys and tea gifts.",
        practicalNotes: "Arrive at CMB Airport 3 hours prior to international flights."
      }
    ],
    inclusions: [
      "Dedicated spacious executive passenger van (Toyota HiAce KDH or equivalent) throughout",
      "Child-friendly professional English-speaking licensed chauffeur-guide",
      "Child car safety seats provided upon request free of charge",
      "Private 4x4 open-top safari jeep in Udawalawe National Park",
      "Private chartered motorboat tour on the Madu Ganga river safari with life jackets",
      "Reserved seats on the scenic mountain train",
      "All vehicle fuel, expressway tolls, and driver allowances",
      "Complimentary chilled mineral water daily in vehicle"
    ],
    exclusions: [
      "International flights and ETA visa fees",
      "Hotel accommodations (can be packaged upon request with family-suite partner resorts)",
      "Site entry tickets (approx. $65 USD per adult, discounted for children under 12)",
      "Personal meals, drinks, and water sports",
      "Chauffeur-guide gratuities"
    ],
    importantNotes: "This itinerary is specifically designed with sensible driving distances and built-in rest periods. Hotel rooms with connecting doors or extra beds can be arranged with our partner properties."
  },
  {
    slug: "complete-sri-lanka",
    title: "Complete Sri Lanka",
    duration: "12 Days / 11 Nights",
    durationDays: 12,
    category: "Grand Island Odyssey",
    categorySlug: "complete",
    badge: "Ultimate Circuit",
    heroImage: "assets/images/tours/complete-sri-lanka/hero.jpg",
    destinationsSummary: "Anuradhapura • Sigiriya • Polonnaruwa • Dambulla • Kandy • Nuwara Eliya • Ella • Yala • Galle Fort",
    pace: "Comprehensive & Immersive",
    suitableFor: "Travellers seeking the ultimate grand circuit of Sri Lanka with ample time",
    shortDescription: "The definitive grand island expedition connecting 2,500 years of ancient capitals, sacred Buddhist mountains, emerald tea country, wild leopard safaris, and Dutch colonial fortresses.",
    overview: "Complete Sri Lanka is the quintessential journey for those who refuse to compromise. Spanning twelve rich and varied days, this master itinerary encompasses the entirety of the island's legendary landscapes. Walk through the monumental ancient cities of Anuradhapura and Polonnaruwa, scale the sky citadel of Sigiriya, admire two millennia of cave art at Dambulla, witness living devotion in Kandy, ride the scenic train through Nuwara Eliya and Ella, track leopards on safari in Yala, and stroll the cobblestone lanes of UNESCO-listed Galle Fort.",
    highlights: [
      "Explore three ancient capitals: Anuradhapura, Polonnaruwa, and the royal city of Kandy",
      "Ascend the UNESCO World Heritage 5th-century Sigiriya Rock Fortress at dawn",
      "Contemplate 153 Buddha statues across five cavern sanctuaries at Dambulla",
      "Ride the legendary blue train through misty mountain tea estates and over viaducts",
      "Walk the tracks to the colonial Nine Arch Bridge and hike Little Adam's Peak in Ella",
      "Track leopards, wild elephants, and sloth bears on private 4x4 safaris in Yala",
      "Relax along the golden southern beaches and watch the sunset from Galle Fort ramparts"
    ],
    routeOverview: "Colombo Airport → Anuradhapura (1 Night) → Sigiriya & Cultural Triangle (2 Nights) → Kandy (2 Nights) → Nuwara Eliya (1 Night) → Ella (2 Nights) → Yala (1 Night) → Galle Fort & Mirissa (2 Nights) → Airport Departure",
    days: [
      {
        day: 1,
        title: "Arrival & Northward Transit to Sacred Anuradhapura",
        destination: "Anuradhapura",
        introduction: "Arrive at Colombo Airport and begin your grand expedition with a private transfer northward into the ancient cradle of Sinhalese civilisation in Anuradhapura.",
        activities: [
          {
            title: "Private Airport Meet & Highway Transit",
            description: "Personalised reception at the airport and transfer north through rural coconut groves in your executive vehicle to Anuradhapura.",
            timing: "Morning to Midday",
            photos: [
              {
                src: "assets/images/vehicles/private-car.jpg",
                alt: "Executive private vehicle ready for grand journey",
                caption: "Executive private vehicle for your complete island circuit"
              }
            ]
          },
          {
            title: "Jaya Sri Maha Bodhi Sacred Tree & Ruwanwelisaya",
            description: "Visit the sacred Bodhi tree planted in 288 BC, the oldest documented human-planted tree on Earth. Continue to the soaring white dome of Ruwanwelisaya stupa as twilight falls.",
            timing: "Late Afternoon (16:30 – 18:30)",
            photos: [
              {
                src: "assets/images/destinations/anuradhapura.jpg",
                alt: "The great white stupa of Ruwanwelisaya in Anuradhapura",
                caption: "The majestic 2nd-century BC stupa of Ruwanwelisaya"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/anuradhapura.jpg",
            alt: "Ruwanwelisaya stupa in Anuradhapura",
            caption: "Sacred monument standing over 2,000 years in the north-central plains"
          },
          {
            src: "assets/images/destinations/sigiriya.jpg",
            alt: "Landscape of north central province",
            caption: "The ancient dry-zone heartland of early Sinhalese civilisation"
          }
        ],
        overnight: "Anuradhapura (Heritage Boutique Hotel)",
        travelNotes: "Approx. 3.5 to 4 hours drive (170 km) from CMB Airport.",
        optionalActivities: "Evening stroll along the ancient stone bund of Tissa Wewa reservoir.",
        practicalNotes: "Covered shoulders and knees required for temple visits."
      },
      {
        day: 2,
        title: "The Medieval Royal Marvels of Polonnaruwa",
        destination: "Polonnaruwa & Sigiriya",
        introduction: "Journey southeast to Polonnaruwa, the magnificent 12th-century medieval capital. Cycle among stone audience halls, circular relic temples, and the serene granite sculptures of Gal Vihara.",
        activities: [
          {
            title: "Sacred Quadrangle & Vatadage Exploration",
            description: "Walk through the architectural masterpieces of the Dalada Maluwa, including the circular stone Vatadage, moonstones, and the carved royal council chamber.",
            timing: "Morning (09:00 – 11:30)",
            photos: [
              {
                src: "assets/images/destinations/polonnaruwa.jpg",
                alt: "The circular stone Vatadage in Polonnaruwa",
                caption: "The circular stone Vatadage in the heart of Polonnaruwa"
              }
            ]
          },
          {
            title: "Gal Vihara Granite Rock Sculptures",
            description: "Stand in quiet contemplation before the four monumental Buddha statues of Gal Vihara, masterfully sculpted from a single granite cliff face.",
            timing: "Afternoon (14:00 – 16:00)",
            photos: [
              {
                src: "assets/images/destinations/polonnaruwa.jpg",
                alt: "Carved Buddha statues at Gal Vihara in Polonnaruwa",
                caption: "Masterpieces of Sinhalese stone carving at Gal Vihara"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/polonnaruwa.jpg",
            alt: "Polonnaruwa ruins in shaded parkland",
            caption: "Shaded parklands of the medieval royal capital"
          },
          {
            src: "assets/images/destinations/sigiriya.jpg",
            alt: "Sigiriya rock approaching at sunset",
            caption: "Arriving at the forest sanctuary of Sigiriya"
          }
        ],
        overnight: "Sigiriya (Forest Eco-Resort)",
        travelNotes: "Approx. 1.5 hours drive to Polonnaruwa; 1 hour onward to Sigiriya.",
        optionalActivities: "Bicycle rental to easily glide between the archaeological monuments.",
        practicalNotes: "Socks recommended for walking comfortably on sun-warmed stone terraces."
      },
      {
        day: 3,
        title: "The Sky Citadel of Sigiriya & Rural Lake Life",
        destination: "Sigiriya",
        introduction: "Ascend the iconic 5th-century rock fortress of Sigiriya in the cool of early morning. In the afternoon, experience authentic rural Sri Lankan village hospitality by catamaran.",
        activities: [
          {
            title: "Sigiriya Lion Rock Early Morning Ascent",
            description: "Climb through landscaped water gardens, past the Sigiriya Maidens frescoes and Mirror Wall, through the monumental Lion's Paws to the royal summit ruins.",
            timing: "Early Morning (07:00 – 10:30)",
            photos: [
              {
                src: "assets/images/destinations/sigiriya.jpg",
                alt: "Sigiriya Rock Fortress rising dramatically above the forest",
                caption: "King Kashyapa's extraordinary 5th-century sky fortress"
              }
            ]
          },
          {
            title: "Hiriwadunna Village & Lake Catamaran Crossing",
            description: "Travel by bullock cart and traditional twin-hulled catamaran across a lily-padded village lake, followed by a wood-fired clay pot lunch in a rural homestead.",
            timing: "Afternoon",
            photos: [
              {
                src: "assets/images/gallery/pidurangala-sunrise.jpg",
                alt: "Rural lake with distant view of Sigiriya",
                caption: "Rural lake crossing with distant views of Sigiriya"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/sigiriya.jpg",
            alt: "Sigiriya rock water gardens",
            caption: "Ancient water gardens and terraced royal foundations"
          },
          {
            src: "assets/images/gallery/pidurangala-sunrise.jpg",
            alt: "Sunrise from Pidurangala looking at Sigiriya",
            caption: "Golden morning light over the central forest plains"
          }
        ],
        overnight: "Sigiriya (Forest Eco-Resort)",
        travelNotes: "Short local excursions within a 15-minute radius.",
        optionalActivities: "Sunset hike up Pidurangala Rock directly opposite Sigiriya.",
        practicalNotes: "Wear comfortable walking shoes with good tread for the 1,200 steps."
      },
      {
        day: 4,
        title: "Dambulla Painted Cave Temples & Mountain Pass to Kandy",
        destination: "Dambulla & Kandy",
        introduction: "Step inside five awe-inspiring painted cavern sanctuaries at Dambulla before travelling through the aromatic spice hills of Matale to the sacred royal city of Kandy.",
        activities: [
          {
            title: "Dambulla Royal Cave Monasteries",
            description: "Climb the granite rock terrace to explore five caves holding 153 Buddha statues and 2,100 square metres of murals detailing Buddhist history.",
            timing: "Morning (09:00 – 11:30)",
            photos: [
              {
                src: "assets/images/destinations/dambulla.jpg",
                alt: "Dambulla cave temple golden stupa and cliff sanctuary",
                caption: "Two millennia of continuous devotion preserved in Dambulla caves"
              }
            ]
          },
          {
            title: "Matale Spice Garden & Kandy Arrival",
            description: "Discover real Ceylon cinnamon, cardamom, and clove in a hillside spice garden. Continue to Kandy, checking into your hillside hotel overlooking the city.",
            timing: "Afternoon",
            photos: [
              {
                src: "assets/images/destinations/kandy.jpg",
                alt: "Kandy Lake framed by forested mountains",
                caption: "Arriving in the sacred lake city of Kandy"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/dambulla.jpg",
            alt: "Dambulla cave entrance colonnade",
            caption: "Whitewashed entrance beneath the soaring black granite cliff"
          },
          {
            src: "assets/images/destinations/kandy.jpg",
            alt: "Kandy lake promenade",
            caption: "Reflections across Kandy Lake in the late afternoon"
          }
        ],
        overnight: "Kandy (Hillside Boutique Hotel)",
        travelNotes: "Approx. 2.5 hours drive (90 km) from Sigiriya to Kandy via Matale.",
        optionalActivities: "Evening stroll along the perimeter path of Kandy Lake.",
        practicalNotes: "Strict dress code at Dambulla (covered knees and shoulders)."
      },
      {
        day: 5,
        title: "Royal Kandy Heritage — Temple of the Tooth & Peradeniya",
        destination: "Kandy",
        introduction: "Immerse yourself in Kandy's living cultural traditions. Explore the 147-acre Royal Botanic Gardens of Peradeniya and attend the sacred evening ceremony at the Temple of the Tooth.",
        activities: [
          {
            title: "Peradeniya Royal Botanic Gardens Exploration",
            description: "Wander through the famous orchid house, along the stately royal palm avenues, and under the colossal Javanese fig tree on the central lawn.",
            timing: "Morning (09:00 – 11:30)",
            photos: [
              {
                src: "assets/images/gallery/peradeniya-gardens.jpg",
                alt: "Avenue of royal palms in Peradeniya gardens",
                caption: "Historic botanic sanctuary with over 4,000 tropical plant species"
              }
            ]
          },
          {
            title: "Temple of the Sacred Tooth Relic (Sri Dalada Maligawa)",
            description: "Attend the evening Thevava ceremony. Hear ceremonial drums and conch shells as pilgrims present lotus offerings before the golden relic casket.",
            timing: "Evening (18:30 – 20:00)",
            photos: [
              {
                src: "assets/images/destinations/kandy.jpg",
                alt: "Temple of the Tooth illuminated beside Kandy Lake at dusk",
                caption: "The spiritual heart of Sri Lankan Buddhism"
              },
              {
                src: "assets/images/gallery/kandyan-dance.jpg",
                alt: "Traditional Kandyan dancers in ceremonial regalia",
                caption: "Centuries-old rhythmic drumming and acrobatic ritual dance"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/kandy.jpg",
            alt: "Temple of the Tooth complex in Kandy",
            caption: "Historic palace architecture surrounding the sacred shrine"
          },
          {
            src: "assets/images/gallery/kandyan-dance.jpg",
            alt: "Kandyan cultural drummer in ornate regalia",
            caption: "Ceremonial drummers preserving ancient ritual rhythms"
          }
        ],
        overnight: "Kandy (Hillside Boutique Hotel)",
        travelNotes: "Short city excursions within Kandy in your private vehicle.",
        optionalActivities: "Traditional Kandyan cultural dance and fire-walking showcase.",
        practicalNotes: "White or light modest clothing required for the temple visit."
      },
      {
        day: 6,
        title: "Ascent into Tea Country — Nuwara Eliya's Emerald Terraces",
        destination: "Nuwara Eliya",
        introduction: "Climb past cascading mountain rivers into the cool, mist-kissed highlands of Nuwara Eliya. Tour an orthodox working tea estate and taste world-famous Ceylon single-estate tea.",
        activities: [
          {
            title: "Highland Ascent & Ramboda Falls Lookout",
            description: "Drive through steep mountain passes, pausing at Ramboda Falls where mountain waters tumble through a lush granite gorge into the valley below.",
            timing: "Morning",
            photos: [
              {
                src: "assets/images/destinations/nuwara-eliya.jpg",
                alt: "Emerald tea plantations around Nuwara Eliya",
                caption: "Winding mountain roads through emerald tea terraces"
              }
            ]
          },
          {
            title: "Working Tea Estate Tour & Cupping Masterclass",
            description: "Follow the journey of the hand-plucked leaf from withering to rolling, drying, and grading. Enjoy a guided tasting session overlooking the plantation.",
            timing: "Afternoon",
            photos: [
              {
                src: "assets/images/gallery/tea-factory.jpg",
                alt: "Tea withering process in a historic highland factory",
                caption: "Orthodox Ceylon tea production and tasting masterclass"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/nuwara-eliya.jpg",
            alt: "Rolling tea hills of Nuwara Eliya",
            caption: "High-grown Ceylon tea plantations under mountain mist"
          },
          {
            src: "assets/images/gallery/tea-factory.jpg",
            alt: "Freshly plucked tea leaves",
            caption: "Traditional two-leaves-and-a-bud orthodox crafting"
          }
        ],
        overnight: "Nuwara Eliya (Historic Colonial Manor)",
        travelNotes: "Approx. 2.5 hours scenic mountain drive (75 km).",
        optionalActivities: "Colonial high tea service on the lawn of the Grand Hotel.",
        practicalNotes: "Pack warm clothing; evening temperatures can drop to 12°C."
      },
      {
        day: 7,
        title: "The Iconic Blue Train & Arrival in Misty Ella",
        destination: "Nuwara Eliya to Ella",
        introduction: "Board the world-famous blue train from Nanu Oya station to Ella. Relax as the train winds through pine cloud-forests and across mountain viaducts while your luggage travels ahead by private car.",
        activities: [
          {
            title: "Highland Blue Train Rail Experience",
            description: "Travel by vintage train along the Main Line. Gaze out at sweeping panoramas of waterfalls, mountain tunnels, and tea-picker villages.",
            timing: "Morning / Midday (Schedule dependent)",
            photos: [
              {
                src: "assets/images/destinations/scenic-train.jpg",
                alt: "Blue passenger train winding through tea hills",
                caption: "The world's most scenic mountain train journey"
              }
            ]
          },
          {
            title: "Welcome to Ella & Café Stroll",
            description: "Check in to your resort overlooking Ella Gap. Take a relaxed afternoon stroll along the laid-back village strip with its independent mountain cafés and fruit juice bars.",
            timing: "Late Afternoon",
            photos: [
              {
                src: "assets/images/destinations/ella.jpg",
                alt: "Ella Gap mountain vista",
                caption: "Sweeping views across the southern plains from Ella Gap"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/scenic-train.jpg",
            alt: "Train passing through tea hills",
            caption: "Open carriage windows welcoming cool mountain air"
          },
          {
            src: "assets/images/destinations/ella.jpg",
            alt: "Ella mountain landscape",
            caption: "Misty afternoon light settling across the Ella ranges"
          }
        ],
        overnight: "Ella (Valley View Boutique Resort)",
        travelNotes: "Train ride approx. 3.5 hours; private car meets you at Ella platform.",
        optionalActivities: "Sunset drink on a panoramic mountain deck overlooking Ella Gap.",
        practicalNotes: "Train tickets are coordinated in advance (subject to availability)."
      },
      {
        day: 8,
        title: "Nine Arch Bridge, Little Adam's Peak & Ravana Falls",
        destination: "Ella",
        introduction: "Spend an active day discovering Ella's greatest natural and engineering wonders. Walk to the Nine Arch Bridge, hike Little Adam's Peak, and admire thunderous Ravana Falls.",
        activities: [
          {
            title: "Nine Arch Bridge Viaduct Exploration",
            description: "Walk through shaded forest paths to stand beside the colonial stone viaduct. Watch the vintage train cross the 24-metre-high arches framed by bamboo and banana groves.",
            timing: "Morning (08:30 – 10:30)",
            photos: [
              {
                src: "assets/images/destinations/ella.jpg",
                alt: "Demodara Nine Arch Bridge in Ella surrounded by tea hills",
                caption: "The colonial Nine Arch Bridge emerging through green tea hills"
              }
            ]
          },
          {
            title: "Little Adam's Peak Hike & Ravana Falls",
            description: "Hike along the gentle grassy crest of Little Adam's Peak for 360-degree views across Ella Rock. Stop at cascading Ravana Falls on the drive back.",
            timing: "Afternoon (14:30 – 17:00)",
            photos: [
              {
                src: "assets/images/gallery/little-adams-peak.jpg",
                alt: "Grassy ridge of Little Adam's Peak in Ella",
                caption: "Panoramic vistas along the ridge line of Little Adam's Peak"
              },
              {
                src: "assets/images/gallery/ravana-falls.jpg",
                alt: "Cascading waterfall at Ravana Falls near Ella",
                caption: "The majestic multi-tiered drop of Ravana Falls"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/ella.jpg",
            alt: "Nine Arch Bridge landscape view",
            caption: "Timeless stone arches spanning the Demodara gorge"
          },
          {
            src: "assets/images/gallery/ravana-falls.jpg",
            alt: "Ravana Falls rocky gorge",
            caption: "Cascading mountain waters flowing towards the southern plains"
          }
        ],
        overnight: "Ella (Valley View Boutique Resort)",
        travelNotes: "Short local excursions within 15–20 minutes in your private vehicle.",
        optionalActivities: "Flying Ravana mega-zipline over the tea plantations.",
        practicalNotes: "Wear light walking shoes and carry drinking water."
      },
      {
        day: 9,
        title: "Descent to the Wilderness — Yala Leopard Safari",
        destination: "Ella to Yala National Park",
        introduction: "Descend from the mountains into the dry-zone wilderness of Yala National Park. Board an open-top 4x4 safari jeep with your expert tracker in search of leopards, sloth bears, and wild elephants.",
        activities: [
          {
            title: "Scenic Mountain Descent via Ravana Falls",
            description: "Drive down from the highlands through changing biomes, watching tea plantations give way to dry scrub forest and coastal sand dunes.",
            timing: "Morning",
            photos: [
              {
                src: "assets/images/destinations/yala.jpg",
                alt: "Thorn scrub and granite boulders of Yala",
                caption: "The rugged coastal wilderness of Yala National Park"
              }
            ]
          },
          {
            title: "Yala National Park Block 1 Sunset Safari",
            description: "Board a customized 4x4 safari vehicle. Track the Sri Lankan leopard across granite rocky outcrops and coastal lagoons teeming with painted storks and crocodiles.",
            timing: "Afternoon (14:30 – 18:00)",
            photos: [
              {
                src: "assets/images/destinations/yala.jpg",
                alt: "Sri Lankan leopard resting alert on a rocky ledge in Yala",
                caption: "Tracking the elusive Sri Lankan leopard in Yala Block 1"
              },
              {
                src: "assets/images/gallery/yala-safari-jeep.jpg",
                alt: "Safari vehicle navigating wilderness track in Yala",
                caption: "Deep wilderness exploration with local wildlife trackers"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/yala.jpg",
            alt: "Leopard perched on granite rock",
            caption: "An unforgettable encounter with the wild Sri Lankan leopard"
          },
          {
            src: "assets/images/gallery/yala-safari-jeep.jpg",
            alt: "Safari jeep near waterhole",
            caption: "Scanning waterholes for sloth bears and wild elephants at dusk"
          }
        ],
        overnight: "Yala / Kirinda (Safari Camp or Eco-Lodge)",
        travelNotes: "Approx. 2.5 hours drive (95 km) descending from Ella to Yala.",
        optionalActivities: "Campfire dinner under the stars with Sri Lankan hopper cooking.",
        practicalNotes: "Wear neutral earth tones (khaki, olive, brown); avoid bright colours."
      },
      {
        day: 10,
        title: "To the Southern Coast — Coconut Tree Hill in Mirissa",
        destination: "Yala to Mirissa",
        introduction: "Drive west along the tropical southern coastline, stopping at pristine beaches and lagoons before reaching Mirissa to climb Coconut Tree Hill at sunset.",
        activities: [
          {
            title: "Southern Coastline Scenic Drive",
            description: "Follow the coastal road along the Indian Ocean, passing traditional stilt fishermen in Koggala and quiet sandy bays.",
            timing: "Morning to Midday",
            photos: [
              {
                src: "assets/images/destinations/mirissa.jpg",
                alt: "Coastline near Mirissa with turquoise water",
                caption: "Arriving along the warm golden southern coastline"
              }
            ]
          },
          {
            title: "Sunset at Coconut Tree Hill",
            description: "Ascend the red-dirt promontory of Coconut Tree Hill, where tall curved palms lean out over the turquoise water as the sun sinks into the sea.",
            timing: "Late Afternoon (17:00 – 18:30)",
            photos: [
              {
                src: "assets/images/destinations/mirissa.jpg",
                alt: "Coconut Tree Hill in Mirissa overlooking the sea",
                caption: "Coconut Tree Hill looking across the turquoise waves of Mirissa"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/mirissa.jpg",
            alt: "Mirissa palm grove",
            caption: "Swaying coconut palms along the southern headland"
          },
          {
            src: "assets/images/gallery/mirissa-sunset.jpg",
            alt: "Sunset on Mirissa beach",
            caption: "Warm evening glow over the gentle surf in Mirissa bay"
          }
        ],
        overnight: "Mirissa (Oceanfront Boutique Hotel)",
        travelNotes: "Approx. 2.5 hours drive (120 km) from Yala to Mirissa.",
        optionalActivities: "Fresh grilled seafood feast on the beach under lantern light.",
        practicalNotes: "Beachwear and comfortable walking sandals."
      },
      {
        day: 11,
        title: "Whales of the Deep & Living History in Galle Fort",
        destination: "Mirissa & Galle Fort",
        introduction: "Set out onto the Indian Ocean in search of migrating blue whales, then spend the afternoon walking the 400-year-old living ramparts and cobblestone lanes of UNESCO-listed Galle Fort.",
        activities: [
          {
            title: "Morning Whale & Dolphin Watching Cruise",
            description: "Board a certified vessel with marine naturalists to search for blue whales, sperm whales, and spinning dolphins along the deep marine shelf.",
            timing: "Early Morning (06:30 – 10:30)",
            photos: [
              {
                src: "assets/images/gallery/mirissa-sunset.jpg",
                alt: "Deep blue ocean waters off Mirissa coast",
                caption: "Navigating deep marine channels frequented by migrating blue whales"
              }
            ]
          },
          {
            title: "UNESCO Galle Fort Walking Heritage Tour",
            description: "Walk the perimeter ramparts to Flag Rock and the white lighthouse, exploring quaint colonial villas, jewellers, and artisan cafés along Pedlar and Church Streets.",
            timing: "Late Afternoon (16:00 – 18:30)",
            photos: [
              {
                src: "assets/images/destinations/galle.jpg",
                alt: "Galle Fort lighthouse at sunset overlooking the ocean",
                caption: "The iconic white lighthouse of Galle Fort on the sea rampart"
              },
              {
                src: "assets/images/gallery/galle-street.jpg",
                alt: "Historic Church Street with colonial Dutch buildings in Galle",
                caption: "Peaceful cobblestone pedestrian lanes inside Galle Fort"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/galle.jpg",
            alt: "Galle Fort sea ramparts",
            caption: "17th-century Dutch colonial ramparts meeting the Indian Ocean"
          },
          {
            src: "assets/images/gallery/galle-street.jpg",
            alt: "Colonial street in Galle Fort",
            caption: "Four centuries of living history preserved in serene pedestrian lanes"
          }
        ],
        overnight: "Galle Fort (Restored Heritage Residence)",
        travelNotes: "Approx. 40 minutes drive (35 km) from Mirissa to Galle Fort.",
        optionalActivities: "Candlelit dinner in a restored Dutch colonial merchant courtyard in Galle.",
        practicalNotes: "Flat sandals or comfortable walking shoes are best for the historic cobblestones."
      },
      {
        day: 12,
        title: "Coastal Farewell — Southern Expressway to Airport",
        destination: "Galle to Colombo Airport",
        introduction: "Enjoy your final morning coffee and tropical fruits in the serene courtyard of Galle Fort before your private chauffeur transfers you via the Southern Expressway directly to the airport.",
        activities: [
          {
            title: "Final Morning Stroll in Galle Fort",
            description: "Pick up artisanal Ceylon cinnamon, pure sapphires, and handmade textiles, capturing final memories of the living maritime fortress.",
            timing: "Morning",
            photos: [
              {
                src: "assets/images/destinations/galle.jpg",
                alt: "Quiet morning sun on the ramparts of Galle Fort",
                caption: "A peaceful final morning by the Indian Ocean"
              }
            ]
          },
          {
            title: "Direct Southern Expressway Airport Transfer",
            description: "Enjoy a smooth 2-hour drive along the Southern Expressway directly to Bandaranaike International Airport for your international departure.",
            timing: "Schedule Dependent",
            photos: [
              {
                src: "assets/images/vehicles/private-car.jpg",
                alt: "Private car ready for airport transfer",
                caption: "Executive transfer to Colombo Airport marking the end of your grand tour"
              }
            ]
          }
        ],
        dayGallery: [
          {
            src: "assets/images/destinations/galle.jpg",
            alt: "Galle lighthouse in sunlight",
            caption: "The timeless sentinel of Galle Fort waving farewell"
          },
          {
            src: "assets/images/destinations/mirissa.jpg",
            alt: "Palm fringed southern shoreline",
            caption: "Departing with unforgettable memories of the complete island"
          }
        ],
        overnight: "Departure (No hotel stay included)",
        travelNotes: "Approx. 2 hours direct drive (150 km) from Galle to CMB Airport via Southern Expressway.",
        optionalActivities: "En route stop in Colombo city for high tea or boutique shopping if departing late evening.",
        practicalNotes: "Arrive at CMB Airport 3 hours prior to international departure."
      }
    ],
    inclusions: [
      "Dedicated private executive air-conditioned vehicle throughout the entire 12-day journey",
      "Licensed English-speaking professional chauffeur-guide",
      "Private 4x4 open-top safari jeep in Yala National Park with expert tracker",
      "Coordinated reserved tickets for the scenic highland mountain train",
      "Luggage transfer service directly between Nuwara Eliya and Ella during the train ride",
      "Airport meet & greet and direct expressway departure transfers",
      "All vehicle fuel, expressway tolls, and driver allowances",
      "Complimentary chilled bottled drinking water provided daily",
      "24/7 dedicated local concierge support throughout your stay"
    ],
    exclusions: [
      "International flights to and from Sri Lanka",
      "Sri Lanka entry ETA visa fees",
      "Hotel accommodations (available upon request with hand-picked 4★ and 5★ partners)",
      "Site and national park entrance fees (approx. $165 USD total per person across the entire 12 days)",
      "Whale watching boat cruise ticket in Mirissa (approx. $50 USD per person)",
      "Meals and beverages not specified",
      "Personal travel insurance",
      "Chauffeur-guide gratuities"
    ],
    importantNotes: "This grand itinerary represents the definitive Sri Lankan route. Pacing can be customized, additional nights added in any destination, or specific wildlife/cultural interests tailored to your preferences."
  }
];

if (typeof Object.freeze === 'function') {
  Object.freeze(TOURS_DATA);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = TOURS_DATA;
}
