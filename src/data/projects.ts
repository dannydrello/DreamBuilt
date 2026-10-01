import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    slug: 'epe-lagoon-villa',
    title: 'The Epe Lagoon Pavilion',
    subtitle: 'A tropical waterside retreat combining laterite earth plaster, floating iroko boardwalks, and deep cantilevered timber louvres',
    category: 'new-homes',
    categoryLabel: 'Waterside Residence',
    location: 'Epe Waterfront, Lagos, Nigeria',
    year: '2025',
    area: '520 m² GIA',
    status: 'Bespoke Commission Study',
    isConceptStudy: true,
    heroImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1800&q=80',
    heroImageAlt: 'Luxury contemporary waterside villa with tropical palms, reflecting pool and deep overhangs in Lagos Nigeria',
    brief: 'Commissioned as a secluded multi-generational weekend retreat away from the Lagos metropolis. Key priorities were unhindered lagoon views, passive tropical ventilation against equatorial humidity, and integrated shading along the water threshold.',
    context: 'Situated on a tranquil mangrove-fringed peninsula along the Epe coastline. High tropical humidity, seasonal Atlantic monsoon breezes, and intense midday equatorial sun required a climate-responsive tropical brutalist envelope.',
    designResponse: 'We devised an elevated pavilion that hovers above the high-tide datum on cast concrete stilts. Operable full-height iroko brise-soleil panels filter the equatorial glare, while high clerestory ventilation louvres allow hot air to escape naturally through convective stack effect.',
    spatialStory: [
      'Arrival is through an elevated boardwalk winding through wild coconut palms, arriving at a double-height open living galleria facing the lagoon.',
      'A continuous infinity water basin mirrors the vast Nigerian sky and cools incoming sea breezes before they enter the sleeping pavilions.',
      'Flooring is crafted from locally quarried polished granite with hand-troweled warm laterite clay plaster on thermal mass walls.'
    ],
    materials: [
      { name: 'Warm Laterite Earth Plaster', description: 'Locally sourced clay-rich earth plaster providing natural thermal inertia and a velvety terracotta hue.' },
      { name: 'Oiled Nigerian Iroko', description: 'Sustainably harvested hardwood with exceptional rot-resistance in humid coastal conditions.' },
      { name: 'Polished Abeokuta Granite', description: 'Dense igneous stone plinths providing continuous cool foot-feel under tropical heat.' },
      { name: 'Perforated Bronze Brise-Soleil', description: 'Laser-cut geometric metal screens casting shifting kinetic shadows throughout the day.' }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=80',
        alt: 'Tranquil luxury resort pavilion with palms and lagoon reflection pool',
        caption: 'The pavilion at golden hour: tropical palm canopies framing the serene Epe lagoon horizon.',
        type: 'exterior',
        aspectRatio: '16:9'
      },
      {
        url: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80',
        alt: 'Open air living room with bespoke timber joinery opening to tropical garden',
        caption: 'Open-air living salon: floor-to-ceiling sliding timber apertures erase the boundary between room and water.',
        type: 'interior',
        aspectRatio: '4:3'
      },
      {
        url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
        alt: 'Detailed view of laterite textured wall meeting oiled hardwood joinery',
        caption: 'Material intersection: earthy laterite wall finish meeting sharp oiled iroko reveals.',
        type: 'detail',
        aspectRatio: '1:1'
      }
    ],
    drawings: [
      {
        title: 'Lagoon Level 01 — Cross-Ventilation Plan',
        type: 'Ground Floor Plan'
      },
      {
        title: 'Section B-B: Convective Stack Effect through Roof Lantern',
        type: 'Cross Section'
      }
    ]
  },
  {
    slug: 'ikoyi-courtyard-villa',
    title: 'The Ikoyi Courtyard Villa',
    subtitle: 'A private residential oasis in Lagos featuring fluted terracotta brise-soleil, floating basalt steps, and double-height botanical courts',
    category: 'new-homes',
    categoryLabel: 'Urban Sanctuary',
    location: 'Ikoyi, Lagos, Nigeria',
    year: '2024',
    area: '640 m² GIA',
    status: 'Concept Study',
    isConceptStudy: true,
    heroImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=80',
    heroImageAlt: 'Modern luxury architectural residence in tropical Ikoyi with water features and sculptural timber louvres',
    brief: 'The clients desired complete acoustic serenity and privacy within the dense urban fabric of Ikoyi, prioritizing shaded internal gardens, high security without fortress-like opacity, and spaces for art collections.',
    context: 'A prime urban plot bordered by mature mahogany trees. The humid tropical climate and heavy rainfall required generous roof cantilevers and deep perimeter shaded verandas.',
    designResponse: 'We turned the building inward around three cascading micro-climate courtyards. The street facade is a rhythmic wall of fluted terracotta fins that grant privacy and airflow, while internal rooms open to lush monstera and frangipani gardens.',
    spatialStory: [
      'A dramatic 7-metre high entrance portal of charred hardwood pivots open over floating basalt stepping stones set within a tranquil koi basin.',
      'The central gallery features double-height board-formed concrete walls illuminated by narrow ceiling skylights that track equatorial sun angles.',
      'A rooftop terrace with deep timber pergola captures evening breezes from Lagos Lagoon, perfect for sunset gatherings.'
    ],
    materials: [
      { name: 'Fluted Architectural Terracotta', description: 'Custom fired terracotta louvres that deflect urban glare while permitting coastal breeze.' },
      { name: 'Charred Nigerian Mahogany', description: 'Surface-treated timber that repels tropical insects and creates deep, luxurious shadow reveals.' },
      { name: 'Black Basalt Stepping Flags', description: 'Non-slip volcanic stone providing textural contrast against clear running water.' }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
        alt: 'Exterior architectural view of luxury villa with tropical brise-soleil',
        caption: 'Street elevation: sculpted terracotta brise-soleil providing absolute privacy with continuous cooling airflow.',
        type: 'exterior',
        aspectRatio: '16:9'
      },
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
        alt: 'Warm sunlit interior with natural materials and tropical garden views',
        caption: 'Internal living gallery opening directly onto the tranquil shaded courtyard.',
        type: 'interior',
        aspectRatio: '4:3'
      }
    ],
    drawings: [
      {
        title: 'Master Ground Level & Triple Courtyard Sequence',
        type: 'Ground Floor Plan'
      }
    ]
  },
  {
    slug: 'koto-house',
    title: 'The Koto Pavilion',
    subtitle: 'A single-storey limestone & cedar dwelling organized around a contemplative courtyard garden',
    category: 'new-homes',
    categoryLabel: 'New Home',
    location: 'Surrey Hills, England (Proposed Study)',
    year: '2025',
    area: '340 m² GIA',
    status: 'Concept Study',
    isConceptStudy: true,
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=80',
    heroImageAlt: 'Exterior view of the low-slung Koto Pavilion with limestone plinth and floor-to-ceiling glass looking toward the courtyard',
    brief: 'The clients sought a peaceful retreat for daily living and multi-generational family gatherings. Key priorities were continuous single-level accessibility, immediate visual connection to native woodland from every room, and acoustic seclusion between working studies and shared living zones.',
    context: 'Situated on a gently inclined south-facing meadow bordered by ancient beech trees. The site experiences high seasonal winds from the southwest, making a sheltered internal courtyard an essential spatial and microclimatic strategy.',
    designResponse: 'We proposed an L-shaped single-storey pavilion anchored by a monolithic limestone plinth. The building acts as an environmental buffer: a solid, thermally dense stone wall shields the northern and street-facing edge, while continuous triple-glazed sliding timber screens open entirely to a sheltered south courtyard.',
    spatialStory: [
      'Upon passing through a compressed timber entryway, visitors emerge into an expansive living hall with 3.2-metre ceiling heights where morning light washes down an unbroken limewash wall.',
      'A deep cedar soffit extends two metres beyond the glazing line, eliminating summer solar glare while creating a dry, sheltered exterior walkway between the master suite and the living hearth.',
      'The central courtyard features a shallow granite water basin that mirrors shifting cloud patterns and gently cools prevailing summer breezes as they pass into cross-ventilating clerestory windows.'
    ],
    materials: [
      { name: 'Purbeck Limestone', description: 'Hand-split rough-hewn stone for the ground datum and hearth wall, grounding the building in local geology.' },
      { name: 'Western Red Cedar', description: 'Untreated vertical rainscreen battens allowed to weather naturally to a silvery grey.' },
      { name: 'Natural Lime Plaster', description: 'Vapour-permeable interior finish applied with subtle trowel texture that softens direct daylight.' },
      { name: 'Burnished Bronze Hardware', description: 'Custom unlacquered door pulls that develop an organic patina through daily contact.' }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
        alt: 'Twilight perspective of the glazed living pavilion showing warm internal timber lighting',
        caption: 'Twilight view from the southern meadow: the interior hearth glows warmly against the darkening woodland canopy.',
        type: 'exterior',
        aspectRatio: '16:9'
      },
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
        alt: 'Living room interior with morning light across limewash walls and low oak joinery',
        caption: 'Living hall interior: low-profile linen furniture and bespoke oak joinery keep visual focus directed toward the courtyard.',
        type: 'interior',
        aspectRatio: '4:3'
      },
      {
        url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
        alt: 'Close detail of fluted limestone wall meeting patinated bronze threshold',
        caption: 'Material intersection: hand-fluted stone base meeting a recessed bronze shadow gap at floor level.',
        type: 'detail',
        aspectRatio: '1:1'
      }
    ],
    drawings: [
      {
        title: 'Level 01 — Floor Plan Study',
        type: 'Ground Floor Plan'
      },
      {
        title: 'Longitudinal Section A-A through Courtyard & Hearth',
        type: 'Cross Section'
      }
    ],
    collaborators: [
      { role: 'Architectural Concept', name: 'DreamBuilt Design Studio' },
      { role: 'Landscape Consultant', name: 'Meadow & Form Practice' }
    ]
  },
  {
    slug: 'monolith-hill',
    title: 'The Monolith House',
    subtitle: 'A cantilevered concrete and charred timber volume pinned into a steep coastal ravine',
    category: 'new-homes',
    categoryLabel: 'New Home',
    location: 'Cornwall, UK (Conceptual Study)',
    year: '2024',
    area: '280 m² GIA',
    status: 'Concept Study',
    isConceptStudy: true,
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80',
    heroImageAlt: 'Architectural view of the cantilevered Monolith House overlooking coastal trees and rocky hillside',
    brief: 'Designing a home that balances extreme weather resistance with complete spatial transparency toward the Atlantic horizon. The building needed to leave the fragile hillside root systems undisturbed.',
    context: 'A 28-degree granite slope covered in coastal gorse and maritime pine. Heavy salt air, prevailing southwesterly gales, and high seasonal rainfall demanded robust, self-weathering materials.',
    designResponse: 'Rather than extensive terrain terracing, we anchored two concrete pier towers to the bedrock, allowing the main residential volume to hover over the slope. The upper storey is clad in traditional charred larch (Yakisugi), offering natural resistance to fungal decay and maritime rot.',
    spatialStory: [
      'The journey starts at the upper road through a bridge spanning over wild ferns directly into the private sleeping volume.',
      'A sculptural central staircase of cast terrazzo leads down into the open living level, suspended over the drop with unobstructed coastal views.',
      'A recessed storm-terrace allows outdoor living during gale conditions, protected by 1.4-metre solid balustrades that deflect coastal updrafts.'
    ],
    materials: [
      { name: 'Board-Formed Concrete', description: 'Cast with rough Douglas fir timber formwork leaving wood grain texture in the cured matrix.' },
      { name: 'Charred Larch Cladding', description: 'Traditional Japanese Yakisugi flame-treated timber with a tactile, matte black iridescent finish.' }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
        alt: 'Looking up at the cantilevered upper volume from the lower garden path',
        caption: 'The dramatic cantilever floats over the wild gorse slope, minimizing earth disruption.',
        type: 'exterior',
        aspectRatio: '16:9'
      }
    ]
  },
  {
    slug: 'highland-sanctuary',
    title: 'The Glass Barn',
    subtitle: 'A contemporary timber-frame agricultural conversion celebrating natural light and double-height volumes',
    category: 'renovations-extensions',
    categoryLabel: 'Renovation & Extension',
    location: 'Cotswolds, UK (Conceptual Study)',
    year: '2024',
    area: '410 m² GIA',
    status: 'Concept Study',
    isConceptStudy: true,
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=80',
    heroImageAlt: 'Modern timber gable barn with full height glazed gable opening to pasture',
    brief: 'Transforming a derelict agricultural timber-framed threshing barn into a flexible family residence that honors the monumental structural rhythm of its historic trusses without partitioning the volume into dark, disconnected rooms.',
    context: 'Protected pastoral landscape in a conservation area.',
    designResponse: 'We treated the historic timber envelope as a continuous outer skin, inserting independent freestanding timber pods.',
    spatialStory: [
      'The central nave remains an uncompromised 8-metre high communal hall where exposed historic oak king-post trusses cast geometric shadows.'
    ],
    materials: [
      { name: 'Reclaimed English Oak', description: 'Restored historic structural timbers.' },
      { name: 'Oiled Birch Plywood', description: 'Precision CNC-cut modular wall panels.' }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
        alt: 'Glazed gable end illuminating the double-height hall interior',
        caption: 'The glazed gable end floods the 8-metre nave with soft northern light throughout the day.',
        type: 'exterior',
        aspectRatio: '16:9'
      }
    ]
  }
];
