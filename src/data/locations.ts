// Kenya Counties and Subcounties Data for SEO and Location-based Services

export interface SubCounty {
  name: string;
  slug: string;
}

export interface County {
  name: string;
  slug: string;
  capital: string;
  population: number;
  area: number; // in km²
  subcounties: SubCounty[];
  description: string;
  mainIndustries: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const kenyaCounties: County[] = [
  // Example subset of counties (normally would include all 47)
  {
    name: "Baringo",
    slug: "baringo",
    capital: "Kabarnet",
    population: 666763,
    area: 11075,
    subcounties: [
      { name: "Baringo Central", slug: "baringo-central" },
      { name: "Baringo North", slug: "baringo-north" },
      { name: "Baringo South", slug: "baringo-south" },
      { name: "Eldama Ravine", slug: "eldama-ravine" },
      { name: "Mogotio", slug: "mogotio" },
      { name: "Tiaty East", slug: "tiaty-east" },
      { name: "Tiaty West", slug: "tiaty-west" }
    ],
    description: "Rift Valley county known for lakes and wildlife.",
    mainIndustries: ["Tourism", "Agriculture", "Livestock"],
    coordinates: { lat: 0.602, lng: 35.751 }
  },
  {
    name: "Bomet",
    slug: "bomet",
    capital: "Bomet",
    population: 875689,
    area: 1997,
    subcounties: [
      { name: "Bomet East", slug: "bomet-east" },
      { name: "Bomet Central", slug: "bomet-central" },
      { name: "Chepalungu", slug: "chepalungu" },
      { name: "Konoin", slug: "konoin" },
      { name: "Sotik", slug: "sotik" }
    ],
    description: "Tea-growing county in the Rift Valley.",
    mainIndustries: ["Tea", "Agriculture", "Livestock"],
    coordinates: { lat: -0.781, lng: 35.345 }
  },
  {
    name: "Bungoma",
    slug: "bungoma",
    capital: "Bungoma",
    population: 1670570,
    area: 3032,
    subcounties: [
      { name: "Bumula", slug: "bumula" },
      { name: "Kabuchai", slug: "kabuchai" },
      { name: "Kanduyi", slug: "kanduyi" },
      { name: "Kimilili", slug: "kimilili" },
      { name: "Mt Elgon", slug: "mt-elgon" },
      { name: "Sirisia", slug: "sirisia" },
      { name: "Tongaren", slug: "tongaren" },
      { name: "Webuye East", slug: "webuye-east" },
      { name: "Webuye West", slug: "webuye-west" }
    ],
    description: "Western Kenya county, sugar and maize farming.",
    mainIndustries: ["Sugar", "Maize", "Agriculture"],
    coordinates: { lat: 0.563, lng: 34.563 }
  },
  {
    name: "Nairobi",
    slug: "nairobi",
    capital: "Nairobi City",
    population: 4397073,
    area: 696,
    subcounties: [
      { name: "Starehe", slug: "starehe" },
      { name: "Kamukunji", slug: "kamukunji" },
      { name: "Mathare", slug: "mathare" },
      { name: "Central", slug: "central" },
      { name: "Makadara", slug: "makadara" },
      { name: "Embakasi East", slug: "embakasi-east" },
      { name: "Embakasi West", slug: "embakasi-west" },
      { name: "Embakasi Central", slug: "embakasi-central" },
      { name: "Embakasi North", slug: "embakasi-north" },
      { name: "Embakasi South", slug: "embakasi-south" },
      { name: "Kasarani", slug: "kasarani" },
      { name: "Roysambu", slug: "roysambu" },
      { name: "Ruaraka", slug: "ruaraka" },
      { name: "Kibra", slug: "kibra" },
      { name: "Lang'ata", slug: "langata" },
      { name: "Dagoretti North", slug: "dagoretti-north" },
      { name: "Dagoretti South", slug: "dagoretti-south" },
      { name: "Westlands", slug: "westlands" }
    ],
    description: "Kenya's capital and largest city, the economic and political hub of East Africa.",
    mainIndustries: ["Finance", "Technology", "Manufacturing", "Services", "Government"],
    coordinates: { lat: -1.286389, lng: 36.817223 }
  },
  {
    name: "Mombasa",
    slug: "mombasa",
    capital: "Mombasa City",
    population: 1208333,
    area: 212,
    subcounties: [
      { name: "Changamwe", slug: "changamwe" },
      { name: "Jomvu", slug: "jomvu" },
      { name: "Kisauni", slug: "kisauni" },
      { name: "Nyali", slug: "nyali" },
      { name: "Likoni", slug: "likoni" },
      { name: "Mvita", slug: "mvita" }
    ],
    description: "Kenya's second largest city and main port, a major tourism and trade hub on the Indian Ocean coast.",
    mainIndustries: ["Port Operations", "Tourism", "Manufacturing", "Oil Refining", "Shipping"],
    coordinates: { lat: -4.043740, lng: 39.668207 }
  },
  {
    name: "Kiambu",
    slug: "kiambu",
    capital: "Kiambu Town",
    population: 2417735,
    area: 2449,
    subcounties: [
      { name: "Thika Town", slug: "thika-town" },
      { name: "Ruiru", slug: "ruiru" },
      { name: "Juja", slug: "juja" },
      { name: "Gatundu South", slug: "gatundu-south" },
      { name: "Gatundu North", slug: "gatundu-north" },
      { name: "Githunguri", slug: "githunguri" },
      { name: "Kiambu Town", slug: "kiambu-town" },
      { name: "Kiambaa", slug: "kiambaa" },
      { name: "Kabete", slug: "kabete" },
      { name: "Kikuyu", slug: "kikuyu" },
      { name: "Limuru", slug: "limuru" },
      { name: "Lari", slug: "lari" }
    ],
    description: "Central Kenya county known for coffee production and proximity to Nairobi.",
    mainIndustries: ["Agriculture", "Coffee", "Manufacturing", "Real Estate", "Technology"],
    coordinates: { lat: -1.171944, lng: 36.835556 }
  },
  {
    name: "Kilifi",
    slug: "kilifi",
    capital: "Kilifi Town",
    population: 1453787,
    area: 12245,
    subcounties: [
      { name: "Kilifi North", slug: "kilifi-north" },
      { name: "Kilifi South", slug: "kilifi-south" },
      { name: "Kaloleni", slug: "kaloleni" },
      { name: "Rabai", slug: "rabai" },
      { name: "Ganze", slug: "ganze" },
      { name: "Malindi", slug: "malindi" },
      { name: "Magarini", slug: "magarini" }
    ],
    description: "Coastal county known for beautiful beaches, tourism, and archaeological sites.",
    mainIndustries: ["Tourism", "Agriculture", "Fishing", "Salt Production", "Coconut Farming"],
    coordinates: { lat: -3.505477, lng: 39.849080 }
  },
  {
    name: "Nakuru",
    slug: "nakuru",
    capital: "Nakuru City",
    population: 2162202,
    area: 7496,
    subcounties: [
      { name: "Nakuru Town East", slug: "nakuru-town-east" },
      { name: "Nakuru Town West", slug: "nakuru-town-west" },
      { name: "Bahati", slug: "bahati" },
      { name: "Njoro", slug: "njoro" },
      { name: "Molo", slug: "molo" },
      { name: "Gilgil", slug: "gilgil" },
      { name: "Naivasha", slug: "naivasha" },
      { name: "Kuresoi South", slug: "kuresoi-south" },
      { name: "Kuresoi North", slug: "kuresoi-north" },
      { name: "Subukia", slug: "subukia" },
      { name: "Rongai", slug: "rongai" }
    ],
    description: "Central Kenya county in the Great Rift Valley, known for agriculture and geothermal energy.",
    mainIndustries: ["Agriculture", "Geothermal Energy", "Tourism", "Floriculture", "Manufacturing"],
    coordinates: { lat: -0.303099, lng: 36.080025 }
  }
];

// Generate all location-based routes
export const generateLocationRoutes = () => {
  const routes: Array<{
    path: string;
    type: 'county' | 'subcounty';
    county: string;
    subcounty?: string;
    title: string;
    description: string;
  }> = [];

  // Add county routes
  kenyaCounties.forEach(county => {
    routes.push({
      path: `/locations/${county.slug}`,
      type: 'county',
      county: county.name,
      title: `Software Development & Digital Marketing Services in ${county.name} County`,
      description: `Professional software development, web design, mobile apps, and digital marketing services in ${county.name} County, Kenya. Custom solutions for businesses in ${county.capital}.`
    });

    // Add subcounty routes
    county.subcounties.forEach(subcounty => {
      routes.push({
        path: `/locations/${county.slug}/${subcounty.slug}`,
        type: 'subcounty',
        county: county.name,
        subcounty: subcounty.name,
        title: `Technology Solutions in ${subcounty.name}, ${county.name} - Mapema Softwares`,
        description: `Expert software development, website design, mobile app development, and digital marketing services in ${subcounty.name}, ${county.name} County. Professional IT solutions for local businesses.`
      });
    });
  });

  return routes;
};

// SEO-optimized service keywords for different locations
export const getLocationKeywords = (county: string, subcounty?: string) => {
  const baseKeywords = [
    "software development",
    "web development",
    "mobile app development",
    "digital marketing",
    "website design",
    "custom software",
    "e-commerce development",
    "ERP systems",
    "CRM systems",
    "POS systems",
    "school management systems",
    "IT services",
    "technology solutions"
  ];

  const location = subcounty ? `${subcounty}, ${county}` : county;
  
  return baseKeywords.map(keyword => `${keyword} ${location}`);
};

export default kenyaCounties;