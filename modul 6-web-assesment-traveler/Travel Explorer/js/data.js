// js/data.js
// Each city has a unique slug (used in URLs and localStorage) and a nested
// list of attractions. Image paths are relative to the HTML files in the root.
// region must match a <option value> in destinations.html,
// category must match a <option value> in city.html.

export const cities = [
  {
    slug: 'paris',
    name: 'Paris',
    region: 'europe',
    featured: true,
    image: 'images/paris/cover.jpg',
    alt: 'Paris rooftops and boulevards seen from above',
    summary: 'Art, café culture and boulevards built for wandering.',
    attractions: [
      {
        name: 'Eiffel Tower',
        category: 'landmark',
        image: 'images/paris/eiffel.jpg',
        alt: 'Eiffel Tower on a clear day',
        description: 'Take the lift to the top for views over the whole city, or picnic on the lawn below.'
      },
      {
        name: 'Louvre Museum',
        category: 'museum',
        image: 'images/paris/louvre.jpg',
        alt: 'Glass pyramid in the Louvre courtyard',
        description: 'The world\'s largest art museum, home to the Mona Lisa. Book a timed ticket.'
      },
      {
        name: 'Arc de Triomphe',
        category: 'landmark',
        image: 'images/paris/triomphe.jpg',
        alt: 'Arc de Triomphe with traffic circling below',
        description: 'Climb the 284 steps for a view straight down the Champs-Élysées.'
      },
      {
        name: 'Sacré-Cœur Basilica',
        category: 'historic',
        image: 'images/paris/sacre.jpg',
        alt: 'White domes of Sacré-Cœur under a blue sky',
        description: 'A white basilica on the Montmartre hill with the best free view in Paris.'
      },
      {
        name: 'Pont Alexandre III',
        category: 'landmark',
        image: 'images/paris/alexandre.jpg',
        alt: 'Pont Alexandre III with its gilded statues',
        description: 'The most ornate bridge in the city, with gilded statues and Art Nouveau lamps.'
      }
    ]
  },
  {
    slug: 'istanbul',
    name: 'Istanbul',
    region: 'europe',
    featured: true,
    image: 'images/istanbul/cover.jpg',
    alt: 'Çamlıca Mosque overlooking the Bosphorus',
    summary: 'Two continents, two thousand years of history and the best breakfast on earth.',
    attractions: [
      {
        name: 'Hagia Sophia',
        category: 'historic',
        image: 'images/istanbul/ayasofya.jpg',
        alt: 'Hagia Sophia with its four minarets',
        description: 'A sixth-century church, later a mosque and a museum — 1,500 years under one dome.'
      },
      {
        name: 'Bosphorus Bridge',
        category: 'landmark',
        image: 'images/istanbul/bridge.jpg',
        alt: 'Bosphorus Bridge lit in red and blue at night',
        description: 'The first bridge to link Europe and Asia; best seen lit up at night from the shore.'
      },
      {
        name: 'Maiden\'s Tower',
        category: 'landmark',
        image: 'images/istanbul/tower.jpg',
        alt: 'Maiden\'s Tower on its islet in the Bosphorus',
        description: 'A tiny islet tower off Üsküdar with a legend for every century.'
      },
      {
        name: 'Emirgan Park',
        category: 'nature',
        image: 'images/istanbul/emirgan.jpg',
        alt: 'Pond surrounded by flowers and trees in Emirgan Park',
        description: 'Tulip beds, Ottoman pavilions and a pond — busiest during the April tulip festival.'
      },
      {
        name: 'Basilica Cistern',
        category: 'historic',
        image: 'images/istanbul/yerebatan.jpg',
        alt: 'Columns and dim lights inside the Basilica Cistern',
        description: 'An underground Byzantine reservoir held up by 336 columns, two of them on Medusa heads.'
      }
    ]
  },
  {
    slug: 'barcelona',
    name: 'Barcelona',
    region: 'europe',
    featured: true,
    image: 'images/barcelona/cover.jpg',
    alt: 'Aerial view of the Eixample street grid in Barcelona',
    summary: 'Gaudí\'s curves, a city beach and long evenings that start at ten.',
    attractions: [
      {
        name: 'Sagrada Família',
        category: 'landmark',
        image: 'images/barcelona/sagra.jpg',
        alt: 'Spires and sculpted facade of the Sagrada Família',
        description: 'Gaudí\'s unfinished basilica, under construction since 1882.'
      },
      {
        name: 'Casa Batlló',
        category: 'museum',
        image: 'images/barcelona/battlo.jpg',
        alt: 'Colourful tiled roof of Casa Batlló',
        description: 'A Gaudí townhouse with a dragon-scale roof; the interior tour is worth the queue.'
      },
      {
        name: 'Park Güell',
        category: 'nature',
        image: 'images/barcelona/guell.jpg',
        alt: 'View over Barcelona from Park Güell',
        description: 'Mosaic terraces and gardens on a hill above the city.'
      },
      {
        name: 'Barceloneta Beach',
        category: 'nature',
        image: 'images/barcelona/barceloneta.jpg',
        alt: 'People on the sand at Barceloneta Beach',
        description: 'The city beach — a ten-minute walk from the Gothic Quarter.'
      },
      {
        name: 'Montjuïc and MNAC',
        category: 'museum',
        image: 'images/barcelona/montjuic.jpg',
        alt: 'MNAC palace with the fountain in front of it',
        description: 'The National Art Museum of Catalonia, sitting on the hill above the Magic Fountain.'
      }
    ]
  },
  {
    slug: 'tokyo',
    name: 'Tokyo',
    region: 'asia',
    featured: false,
    image: 'images/tokyo/cover.jpg',
    alt: 'Shibuya crossing at night',
    summary: 'Neon districts, quiet shrines and the best food city on earth.',
    attractions: [
      {
        name: 'Senso-ji Temple',
        category: 'historic',
        image: 'images/tokyo/sensoji.jpg',
        alt: 'Red lantern at the Kaminarimon gate',
        description: 'Tokyo\'s oldest temple, in the Asakusa district.'
      },
      {
        name: 'teamLab Planets',
        category: 'museum',
        image: 'images/tokyo/teamlab.jpg',
        alt: 'Visitors walking through a mirrored light installation',
        description: 'Immersive digital art you walk through barefoot.'
      },
      {
        name: 'Tsukiji Outer Market',
        category: 'food',
        image: 'images/tokyo/tsukiji.jpg',
        alt: 'Grilled seafood stall at Tsukiji',
        description: 'Street-food stalls, fresh sushi and knife shops.'
      },
      {
        name: 'Shinjuku Gyoen',
        category: 'nature',
        image: 'images/tokyo/gyoen.jpg',
        alt: 'Cherry trees beside a pond in Shinjuku Gyoen',
        description: 'A calm garden minutes from the busiest station in the world.'
      }
    ]
  },
  {
    slug: 'new-york',
    name: 'New York',
    region: 'americas',
    featured: false,
    image: 'images/new-york/cover.jpg',
    alt: 'Manhattan skyline at dusk',
    summary: 'Skyscrapers, world-class museums and a park in the middle of it all.',
    attractions: [
      {
        name: 'Central Park',
        category: 'nature',
        image: 'images/new-york/central.jpg',
        alt: 'Lake and trees in Central Park with buildings behind',
        description: 'Eight hundred acres of lawns, lakes and paths in the middle of Manhattan.'
      },
      {
        name: 'The Metropolitan Museum of Art',
        category: 'museum',
        image: 'images/new-york/met.jpg',
        alt: 'Steps and columns at the entrance of The Met',
        description: 'Five thousand years of art in one building on Fifth Avenue.'
      },
      {
        name: 'Brooklyn Bridge',
        category: 'landmark',
        image: 'images/new-york/brooklyn.jpg',
        alt: 'Brooklyn Bridge walkway with Manhattan behind',
        description: 'Walk the wooden promenade at sunrise for the skyline without the crowds.'
      },
      {
        name: 'Chelsea Market',
        category: 'food',
        image: 'images/new-york/chelsea.jpg',
        alt: 'Crowded food hall inside Chelsea Market',
        description: 'A food hall in an old biscuit factory — tacos, lobster rolls and doughnuts under one roof.'
      }
    ]
    },
  {
    slug: 'cape-town',
    name: 'Cape Town',
    region: 'africa',
    featured: false,
    image: 'images/cape-town/cover.jpg',
    alt: 'Aerial view of Cape Town with Table Mountain behind the city',
    summary: 'A flat-topped mountain, two oceans and penguins on the beach.',
    attractions: [
      {
        name: 'Table Mountain',
        category: 'nature',
        image: 'images/cape-town/table.jpg',
        alt: 'Cable car climbing Table Mountain above a sea of cloud',
        description: 'Ride the rotating cable car or hike Platteklip Gorge; go early, before the cloud rolls in.'
      },
      {
        name: 'Robben Island',
        category: 'historic',
        image: 'images/cape-town/robben.jpg',
        alt: 'Robben Island seen from the air, surrounded by ocean',
        description: 'The island prison where Nelson Mandela spent 18 years; tours are led by former inmates.'
      },
      {
        name: 'Zeitz MOCAA',
        category: 'museum',
        image: 'images/cape-town/zeitz.jpg',
        alt: 'Faceted glass windows of the Zeitz MOCAA building',
        description: 'Contemporary African art inside a converted grain silo at the V&A Waterfront.'
      },
      {
        name: 'Boulders Beach',
        category: 'nature',
        image: 'images/cape-town/boulders.jpg',
        alt: 'African penguins on the sand at Boulders Beach',
        description: 'A sheltered beach shared with a colony of African penguins, 40 minutes south of the city.'
      }
    ]
  }
];
