export interface ProjectData {
  id: string
  title: string
  category: string
  subcategory?: string
  location: string
  image: string
  description: string
  completionYear?: number
  duration?: string
  clientType: 'residential' | 'commercial'
  featured: boolean
  beforeImage?: string
  afterImage?: string
  testimonial?: {
    text: string
    client: string
    rating: number
  }
  seoAlt: string
  tags: string[]
}

export const allProjectsData: ProjectData[] = [
  // Brickwork Projects (4 images)
  {
    id: 'brickwork-alberton-78',
    title: 'Roof Installation Project',
    category: 'roofing',
    location: 'Alberton',
    image: '/images/sinqobile-construction-roofing-alberton-78.jpg',
    description: 'Professional roof installation with quality materials and expert craftsmanship.',
    completionYear: 2024,
    duration: '2 weeks',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Roof installation project by Sinqobile Construction in Alberton - Professional construction work',
    tags: ['roofing', 'installation', 'residential', 'alberton']
  },
  {
    id: 'brickwork-lanseria-49',
    title: 'Braai Area Construction',
    category: 'building',
    location: 'Lanseria',
    image: '/images/sinqobile-construction-building-lanseria-49.jpg',
    description: 'Custom braai area construction with quality brickwork and outdoor entertainment features.',
    completionYear: 2024,
    duration: '2 weeks',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Braai area construction by Sinqobile Construction in Lanseria - Professional construction work',
    tags: ['building', 'braai', 'outdoor', 'lanseria']
  },
  {
    id: 'brickwork-roodepoort-35',
    title: 'Bathroom Tiling Installation',
    category: 'tiling',
    location: 'Roodepoort',
    image: '/images/sinqobile-construction-tiling-roodepoort-35.jpg',
    description: 'Professional bathroom tiling with waterproofing and premium finishes.',
    completionYear: 2024,
    duration: '5 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Bathroom tiling installation in Roodepoort by Sinqobile Construction - Professional construction work',
    tags: ['tiling', 'bathroom', 'waterproofing', 'roodepoort']
  },

  // Building Projects (3 images)
  {
    id: 'building-edenvale-30',
    title: 'Residential Building Construction',
    category: 'building',
    location: 'Edenvale',
    image: '/images/sinqobile-construction-building-edenvale-30.jpg',
    description: 'Complete residential building construction with modern design and quality finishes.',
    completionYear: 2024,
    duration: '8 weeks',
    clientType: 'residential',
    featured: true,
    seoAlt: 'Sinqobile Construction New residential building construction in Edenvale - Professional construction work',
    tags: ['building', 'construction', 'residential', 'edenvale']
  },
  {
    id: 'building-rosebank-48',
    title: 'Residential House Extension',
    category: 'extensions',
    location: 'Rosebank',
    image: '/images/sinqobile-construction-extensions-rosebank-48.jpg',
    description: 'Quality residential house extension with modern design and seamless integration.',
    completionYear: 2024,
    duration: '6 weeks',
    clientType: 'residential',
    featured: true,
    testimonial: {
      text: 'Meshack and his team did an excellent job with our house extension. Professional, reliable, and great attention to detail.',
      client: 'Sarah Johnson',
      rating: 5
    },
    seoAlt: 'Sinqobile Construction Residential house extension by Sinqobile Construction in Rosebank - Professional construction work',
    tags: ['extensions', 'residential', 'house', 'rosebank']
  },
  {
    id: 'building-springs-54',
    title: 'Bathroom Tiling Service',
    category: 'tiling',
    location: 'Springs',
    image: '/images/sinqobile-construction-tiling-springs-54.jpg',
    description: 'Professional bathroom tiling with quality materials and expert installation.',
    completionYear: 2024,
    duration: '5 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Bathroom tiling service in Springs - Professional construction work',
    tags: ['tiling', 'bathroom', 'installation', 'springs']
  },

  // Concrete Work Projects (8 images)
  {
    id: 'concrete-bedfordview-31',
    title: 'Bathroom Installation Project',
    category: 'tiling',
    location: 'Bedfordview',
    image: '/images/sinqobile-construction-tiling-bedfordview-31.jpg',
    description: 'Complete bathroom installation with tiling, fixtures, and modern finishes.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Bathroom installation project in Bedfordview - Professional construction work',
    tags: ['tiling', 'bathroom', 'installation', 'bedfordview']
  },
  {
    id: 'concrete-boksburg-90',
    title: 'Fence Installation and Concrete Work',
    category: 'fencing',
    location: 'Boksburg',
    image: '/images/sinqobile-construction-fencing-boksburg-90.jpg',
    description: 'Professional fence installation with concrete foundation and quality materials.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Fence installation and concrete work by Sinqobile Construction in Boksburg - Professional construction work',
    tags: ['fencing', 'concrete', 'installation', 'boksburg']
  },
  {
    id: 'concrete-johannesburg-86',
    title: 'Plumbing Installation Project',
    category: 'plumbing',
    location: 'Johannesburg',
    image: '/images/sinqobile-construction-plumbing-johannesburg-86.jpg',
    description: 'Professional plumbing installation with modern fixtures and quality workmanship.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: true,
    seoAlt: 'Sinqobile Construction Plumbing installation project by Sinqobile Construction in Johannesburg - Professional construction work',
    tags: ['plumbing', 'installation', 'fixtures', 'johannesburg']
  },
  {
    id: 'concrete-midrand-79',
    title: 'Roof Tiling Installation',
    category: 'roofing',
    location: 'Midrand',
    image: '/images/sinqobile-construction-roofing-midrand-79.jpg',
    description: 'Professional roof tiling installation with quality materials and expert craftsmanship.',
    completionYear: 2024,
    duration: '2 weeks',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Roof tiling installation by Sinqobile Construction in Midrand - Professional construction work',
    tags: ['roofing', 'tiling', 'installation', 'midrand']
  },
  {
    id: 'concrete-sandton-36',
    title: 'Gate and Concrete Installation',
    category: 'installation',
    location: 'Sandton',
    image: '/images/sinqobile-construction-installation-sandton-36.jpg',
    description: 'Professional gate and concrete installation with quality materials and expert workmanship.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: true,
    seoAlt: 'Sinqobile Construction Gate and concrete installation by Sinqobile Construction in Sandton, Gauteng - Professional construction work',
    tags: ['installation', 'gate', 'concrete', 'sandton']
  },
  {
    id: 'concrete-soweto-56',
    title: 'Kitchen Installation Project',
    category: 'installation',
    location: 'Soweto',
    image: '/images/sinqobile-construction-installation-soweto-56.jpg',
    description: 'Complete kitchen installation with custom cabinetry and modern appliances.',
    completionYear: 2024,
    duration: '2 weeks',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Kitchen installation project in Soweto - Professional construction work',
    tags: ['installation', 'kitchen', 'cabinetry', 'soweto']
  },

  // General Construction Projects (2 images)
  {
    id: 'construction-randburg-2',
    title: 'Paving Installation Project',
    category: 'paving',
    location: 'Randburg',
    image: '/images/sinqobile-construction-paving-randburg-2.jpg',
    description: 'Professional paving installation with quality materials and expert craftsmanship.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Paving installation project by Sinqobile Construction in Randburg - Professional construction work',
    tags: ['paving', 'installation', 'residential', 'randburg']
  },
  {
    id: 'construction-sandton-77',
    title: 'Walkway Paving Project',
    category: 'paving',
    location: 'Sandton',
    image: '/images/sinqobile-construction-paving-sandton-77.jpg',
    description: 'Professional walkway paving with quality materials and modern design.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Walkway paving project by Sinqobile Construction in Sandton - Professional construction work',
    tags: ['paving', 'walkway', 'residential', 'sandton']
  },

  // Electrical Projects (2 images)
  {
    id: 'electrical-edenvale-29',
    title: 'Geyser Installation Project',
    category: 'plumbing',
    location: 'Edenvale',
    image: '/images/sinqobile-construction-plumbing-edenvale-29.jpg',
    description: 'Professional geyser installation with safety compliance and quality workmanship.',
    completionYear: 2024,
    duration: '1 day',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Geyser installation by Sinqobile Construction in Edenvale - Professional construction work',
    tags: ['plumbing', 'geyser', 'installation', 'edenvale']
  },
  
  // Extensions Projects (4 images)
  {
    id: 'extensions-bedfordview-19',
    title: 'Bathroom Installation Project',
    category: 'tiling',
    location: 'Bedfordview',
    image: '/images/sinqobile-construction-tiling-bedfordview-19.jpg',
    description: 'Professional bathroom installation with quality tiling and modern fixtures.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Bathroom installation project by Sinqobile Construction in Bedfordview - Professional construction work',
    tags: ['tiling', 'bathroom', 'installation', 'bedfordview']
  },
  {
    id: 'extensions-sandton-65',
    title: 'Bathroom Tiling Service',
    category: 'tiling',
    location: 'Sandton',
    image: '/images/sinqobile-construction-tiling-sandton-65.jpg',
    description: 'Professional bathroom tiling service with quality materials and expert installation.',
    completionYear: 2024,
    duration: '5 days',
    clientType: 'residential',
    featured: true,
    seoAlt: 'Sinqobile Construction Bathroom tiling service by Sinqobile Construction in Sandton - Professional construction work',
    tags: ['tiling', 'bathroom', 'service', 'sandton']
  },

  // Fencing Projects (5 images)
  {
    id: 'fencing-alexandra-93',
    title: 'Roof Tiling Installation',
    category: 'roofing',
    location: 'Alexandra',
    image: '/images/sinqobile-construction-roofing-alexandra-93.jpg',
    description: 'Professional roof tiling installation with quality materials and expert craftsmanship.',
    completionYear: 2024,
    duration: '2 weeks',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Roof tiling installation by Sinqobile Construction in Alexandra - Professional construction work',
    tags: ['roofing', 'tiling', 'installation', 'alexandra']
  },
  {
    id: 'fencing-krugersdorp-21',
    title: 'Excavation and Foundation Work',
    category: 'concrete',
    location: 'Krugersdorp',
    image: '/images/sinqobile-construction-concrete-krugersdorp-21.jpg',
    description: 'Professional excavation and foundation work with quality concrete and expert construction.',
    completionYear: 2024,
    duration: '2 weeks',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Excavation and foundation work by Sinqobile Construction in Krugersdorp - Professional construction work',
    tags: ['concrete', 'excavation', 'foundation', 'krugersdorp']
  },
  {
    id: 'fencing-linden-28',
    title: 'Roof Installation Project',
    category: 'roofing',
    location: 'Linden',
    image: '/images/sinqobile-construction-roofing-linden-28.jpg',
    description: 'Professional roof installation with quality materials and expert craftsmanship.',
    completionYear: 2024,
    duration: '2 weeks',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Roof installation project by Sinqobile Construction in Linden - Professional construction work',
    tags: ['roofing', 'installation', 'residential', 'linden']
  },
  {
    id: 'fencing-randburg-52',
    title: 'Plumbing Basin Installation',
    category: 'plumbing',
    location: 'Randburg',
    image: '/images/sinqobile-construction-plumbing-randburg-52.jpg',
    description: 'Professional plumbing basin installation with quality fixtures and expert workmanship.',
    completionYear: 2024,
    duration: '1 day',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Plumbing basin installation by Sinqobile Construction in Randburg - Professional construction work',
    tags: ['plumbing', 'basin', 'installation', 'randburg']
  },
  // Flooring Projects (5 images)
  {
    id: 'flooring-alberton-64',
    title: 'Shower Installation Project',
    category: 'plumbing',
    location: 'Alberton',
    image: '/images/sinqobile-construction-plumbing-alberton-64.jpg',
    description: 'Professional shower installation with modern fixtures and quality plumbing work.',
    completionYear: 2024,
    duration: '3 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Shower installation by Sinqobile Construction in Alberton - Professional construction work',
    tags: ['plumbing', 'shower', 'installation', 'alberton']
  },
  {
    id: 'flooring-fourways-43',
    title: 'Hardwood Flooring Installation',
    category: 'flooring',
    location: 'Fourways',
    image: '/images/sinqobile-construction-flooring-fourways-43.jpg',
    description: 'Premium hardwood flooring with expert installation and finishing.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Hardwood flooring installation in Fourways - Professional construction work',
    tags: ['flooring', 'hardwood', 'premium', 'fourways']
  },
  {
    id: 'flooring-germiston-71',
    title: 'Pool Area Tiling and Paving',
    category: 'paving',
    location: 'Germiston',
    image: '/images/sinqobile-construction-paving-germiston-71.jpg',
    description: 'Professional pool area tiling and paving with slip-resistant materials and quality finishes.',
    completionYear: 2024,
    duration: '2 weeks',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Pool area tiling and paving by Sinqobile Construction in Germiston - Professional construction work',
    tags: ['paving', 'tiling', 'pool area', 'germiston']
  },
  {
    id: 'flooring-midrand-55',
    title: 'Flooring Installation Project',
    category: 'flooring',
    location: 'Midrand',
    image: '/images/sinqobile-construction-flooring-midrand-55.jpg',
    description: 'Professional paving installation with quality materials and expert craftsmanship.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Paving installation project by Sinqobile Construction in Midrand - Professional construction work',
    tags: ['paving', 'installation', 'residential', 'midrand']
  },

  // Installation Projects (5 images)
  {
    id: 'installation-johannesburg-24',
    title: 'Concrete Flooring Installation',
    category: 'concrete',
    location: 'Johannesburg',
    image: '/images/sinqobile-construction-installation-johannesburg-24.jpg',
    description: 'Professional concrete flooring installation with quality materials and expert workmanship.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Concrete flooring installation by Sinqobile Construction in Johannesburg - Professional construction work',
    tags: ['concrete', 'flooring', 'installation', 'johannesburg']
  },
  {
    id: 'installation-rosebank-72',
    title: 'Concrete Foundation Work',
    category: 'concrete',
    location: 'Rosebank',
    image: '/images/sinqobile-construction-installation-rosebank-72.jpg',
    description: 'Professional concrete foundation work with quality materials and expert construction.',
    completionYear: 2024,
    duration: '2 weeks',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Concrete foundation work by Sinqobile Construction in Rosebank - Professional construction work',
    tags: ['concrete', 'foundation', 'construction', 'rosebank']
  },
  {
    id: 'installation-rosebank-83',
    title: 'Staircase Construction',
    category: 'building',
    location: 'Rosebank',
    image: '/images/sinqobile-construction-installation-rosebank-83.jpg',
    description: 'Professional staircase construction with quality materials and expert craftsmanship.',
    completionYear: 2024,
    duration: '2 weeks',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Staircase construction project by Sinqobile Construction in Rosebank - Professional construction work',
    tags: ['building', 'staircase', 'construction', 'rosebank']
  },

  // Landscaping Projects (3 images)
  {
    id: 'landscaping-alberton-39',
    title: 'Wall Plastering Service',
    category: 'plastering',
    location: 'Alberton',
    image: '/images/sinqobile-construction-landscaping-alberton-39.jpg',
    description: 'Professional wall plastering service with smooth finish and quality materials.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Wall plastering service by Sinqobile Construction in Alberton - Professional construction work',
    tags: ['plastering', 'walls', 'smooth finish', 'alberton']
  },

  // Maintenance Projects (4 images)
  {
    id: 'maintenance-alberton-73',
    title: 'Property Maintenance Service',
    category: 'maintenance',
    location: 'Alberton',
    image: '/images/sinqobile-construction-maintenance-alberton-73.jpg',
    description: 'Comprehensive property maintenance including repairs and upkeep.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Property maintenance in Alberton - Professional construction work',
    tags: ['maintenance', 'repairs', 'upkeep', 'alberton']
  },
  {
    id: 'maintenance-centurion-70',
    title: 'Maintenance Project',
    category: 'maintenance',
    location: 'Centurion',
    image: '/images/sinqobile-construction-maintenance-centurion-70.jpg',
    description: 'Professional water tank installation with quality materials and expert workmanship.',
    completionYear: 2024,
    duration: '3 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Water tank installation project by Sinqobile Construction in Centurion - Professional construction work',
    tags: ['installation', 'water tank', 'plumbing', 'centurion']
  },
  {
    id: 'maintenance-linden-80',
    title: 'Kitchen Tiling Project',
    category: 'tiling',
    location: 'Linden',
    image: '/images/sinqobile-construction-maintenance-linden-80.jpg',
    description: 'Professional kitchen tiling with quality materials and expert installation.',
    completionYear: 2024,
    duration: '5 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Kitchen tiling project by Sinqobile Construction in Linden - Professional construction work',
    tags: ['tiling', 'kitchen', 'installation', 'linden']
  },
  {
    id: 'maintenance-sandton-17',
    title: 'Plumbing and Drainage Installation',
    category: 'plumbing',
    location: 'Sandton',
    image: '/images/sinqobile-construction-maintenance-sandton-17.jpg',
    description: 'Professional plumbing and drainage installation with quality materials and expert workmanship.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Plumbing and drainage installation by Sinqobile Construction in Sandton - Professional construction work',
    tags: ['plumbing', 'drainage', 'installation', 'sandton']
  },


  // Painting Projects (4 images)
  {
    id: 'painting-alberton-4',
    title: 'Paving Installation Project',
    category: 'paving',
    location: 'Alberton',
    image: '/images/sinqobile-construction-painting-alberton-4.jpg',
    description: 'Professional paving installation with quality materials and expert craftsmanship.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Paving installation project by Sinqobile Construction in Alberton - Professional construction work',
    tags: ['paving', 'installation', 'residential', 'alberton']
  },
  {
    id: 'painting-alberton-53',
    title: 'Paving Construction Project',
    category: 'paving',
    location: 'Alberton',
    image: '/images/sinqobile-construction-painting-alberton-53.jpg',
    description: 'Professional paving construction with quality materials and modern design.',
    completionYear: 2024,
    duration: '2 weeks',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Paving construction project by Sinqobile Construction in Alberton - Professional construction work',
    tags: ['paving', 'construction', 'residential', 'alberton']
  },
  {
    id: 'painting-krugersdorp-76',
    title: 'Shower Wall Tiling',
    category: 'tiling',
    location: 'Krugersdorp',
    image: '/images/sinqobile-construction-painting-krugersdorp-76.jpg',
    description: 'Professional shower wall tiling with quality materials and waterproofing.',
    completionYear: 2024,
    duration: '3 weeks',
    clientType: 'commercial',
    featured: false,
    seoAlt: 'Sinqobile Construction Shower wall tiling in Krugersdorp - Professional construction work',
    tags: ['tiling', 'shower', 'bathroom', 'krugersdorp']
  },
  {
    id: 'painting-soweto-42',
    title: 'Concrete Paving Project',
    category: 'paving',
    location: 'Soweto',
    image: '/images/sinqobile-construction-painting-soweto-42.jpg',
    description: 'Professional concrete paving with quality materials and expert workmanship.',
    completionYear: 2024,
    duration: '2 weeks',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Concrete paving in Soweto - Professional construction work',
    tags: ['paving', 'concrete', 'residential', 'soweto']
  },

  // Paving Projects (8 images)
  {
    id: 'paving-alberton-40',
    title: 'Floor Tiling Project',
    category: 'tiling',
    location: 'Alberton',
    image: '/images/sinqobile-construction-paving-alberton-40.jpg',
    description: 'Professional floor tiling with quality materials and expert installation.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Floor tiling in Alberton - Professional construction work',
    tags: ['tiling', 'floor', 'residential', 'alberton']
  },
  {
    id: 'paving-alberton-46',
    title: 'Modern Kitchen Renovation',
    category: 'renovation',
    location: 'Alberton',
    image: '/images/sinqobile-construction-paving-alberton-46.jpg',
    description: 'Complete modern kitchen renovation with custom cabinetry, tiling, and contemporary design.',
    completionYear: 2024,
    duration: '5 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Modern kitchen renovation in Alberton - Professional construction work',
    tags: ['renovation', 'kitchen', 'modern', 'alberton']
  },
  {
    id: 'paving-boksburg-84',
    title: 'Kitchen Backsplash Tiling',
    category: 'tiling',
    location: 'Boksburg',
    image: '/images/sinqobile-construction-paving-boksburg-84.jpg',
    description: 'Professional kitchen backsplash tiling with decorative patterns and quality materials.',
    completionYear: 2024,
    duration: '4 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Kitchen backsplash tiling in Boksburg - Professional construction work',
    tags: ['tiling', 'kitchen', 'backsplash', 'boksburg']
  },
  {
    id: 'paving-lanseria-45',
    title: 'Geyser Installation Project',
    category: 'plumbing',
    location: 'Lanseria',
    image: '/images/sinqobile-construction-paving-lanseria-45.jpg',
    description: 'Professional geyser installation with safety compliance and quality workmanship.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Geyser installation in Lanseria - Professional construction work',
    tags: ['plumbing', 'geyser', 'installation', 'lanseria']
  },
  {
    id: 'paving-midrand-59',
    title: 'Pool Area Paving',
    category: 'paving',
    location: 'Midrand',
    image: '/images/sinqobile-construction-paving-midrand-59.jpg',
    description: 'Pool area paving with slip-resistant materials and drainage.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Pool area paving in Midrand - Professional construction work',
    tags: ['paving', 'pool', 'slip-resistant', 'midrand']
  },
  // Plastering Projects (4 images)
  {
    id: 'plastering-fourways-50',
    title: 'Brick Wall Construction',
    category: 'brickwork',
    location: 'Fourways',
    image: '/images/sinqobile-construction-plastering-fourways-50.jpg',
    description: 'Professional brick wall construction with quality materials and expert craftsmanship.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Brick wall construction in Fourways - Professional construction work',
    tags: ['brickwork', 'wall', 'construction', 'fourways']
  },
  {
    id: 'plastering-germiston-74',
    title: 'Bathroom Installation Project',
    category: 'installation',
    location: 'Germiston',
    image: '/images/sinqobile-construction-plastering-germiston-74.jpg',
    description: 'Professional bathroom installation with modern fixtures and quality workmanship.',
    completionYear: 2024,
    duration: '2 weeks',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Bathroom installation in Germiston - Professional construction work',
    tags: ['installation', 'bathroom', 'fixtures', 'germiston']
  },
  {
    id: 'plastering-kempton-park-47',
    title: 'Brick Wall and Painting',
    category: 'painting',
    location: 'Kempton Park',
    image: '/images/sinqobile-construction-plastering-kempton-park-47.jpg',
    description: 'Professional brick wall construction with painting and finishing work.',
    completionYear: 2024,
    duration: '5 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Brick wall and painting in Kempton Park - Professional construction work',
    tags: ['painting', 'brickwork', 'wall', 'kempton park']
  },
  {
    id: 'plastering-pretoria-44',
    title: 'Floor Tiling Work',
    category: 'tiling',
    location: 'Pretoria',
    image: '/images/sinqobile-construction-plastering-pretoria-44.jpg',
    description: 'Professional floor tiling with gray and white patterned tiles and quality installation.',
    completionYear: 2024,
    duration: '4 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Floor tiling work by Sinqobile Construction in Pretoria - Professional construction work',
    tags: ['tiling', 'floor', 'patterned', 'pretoria']
  },

  // Plumbing Projects (7 images)
  {
    id: 'plumbing-fourways-27',
    title: 'Bathroom Wall Tiling Installation',
    category: 'tiling',
    location: 'Fourways',
    image: '/images/sinqobile-construction-plumbing-fourways-27.jpg',
    description: 'Professional bathroom wall tiling with mosaic pattern tiles and modern design.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: true,
    seoAlt: 'Sinqobile Construction Bathroom wall tiling by Sinqobile Construction in Fourways - Professional construction work',
    tags: ['tiling', 'bathroom', 'wall tiles', 'mosaic', 'fourways']
  },
  {
    id: 'plumbing-germiston-51',
    title: 'Kitchen Plumbing Service',
    category: 'plumbing',
    location: 'Germiston',
    image: '/images/sinqobile-construction-plumbing-germiston-51.jpg',
    description: 'Kitchen plumbing installation including sink, dishwasher, and water lines.',
    completionYear: 2024,
    duration: '3 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Kitchen plumbing in Germiston - Professional construction work',
    tags: ['plumbing', 'kitchen', 'installation', 'germiston']
  },
  {
    id: 'plumbing-kempton-park-23',
    title: 'Gate Installation Project',
    category: 'installation',
    location: 'Kempton Park',
    image: '/images/sinqobile-construction-plumbing-kempton-park-23.jpg',
    description: 'Professional glass partition and gate installation with modern translucent design.',
    completionYear: 2024,
    duration: '1 day',
    clientType: 'residential',
    featured: true,
    seoAlt: 'Sinqobile Construction Gate and partition installation by Sinqobile Construction in Kempton Park - Professional construction work',
    tags: ['installation', 'gate', 'glass', 'partition', 'kempton park']
  },
  {
    id: 'plumbing-lanseria-75',
    title: 'Floor Tiling Installation',
    category: 'tiling',
    location: 'Lanseria',
    image: '/images/sinqobile-construction-plumbing-lanseria-75.jpg',
    description: 'Professional floor tiling with white marble-look tiles and quality installation.',
    completionYear: 2024,
    duration: '2 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Floor tiling installation by Sinqobile Construction in Lanseria - Professional construction work',
    tags: ['tiling', 'floor', 'marble', 'lanseria']
  },
  {
    id: 'plumbing-melville-10',
    title: 'Drain Installation Project',
    category: 'plumbing',
    location: 'Melville',
    image: '/images/sinqobile-construction-plumbing-melville-10.jpg',
    description: 'Drainage system installation with proper slope and connections.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Drain installation in Melville - Professional construction work',
    tags: ['plumbing', 'drainage', 'installation', 'melville']
  },
  {
    id: 'plumbing-riversands-33',
    title: 'Plumbing Maintenance Service',
    category: 'plumbing',
    location: 'Riversands',
    image: '/images/sinqobile-construction-plumbing-riversands-33.jpg',
    description: 'Comprehensive plumbing maintenance including inspections and repairs.',
    completionYear: 2024,
    duration: '2 days',
    clientType: 'commercial',
    featured: false,
    seoAlt: 'Sinqobile Construction Plumbing maintenance in Riversands - Professional construction work',
    tags: ['plumbing', 'maintenance', 'inspections', 'riversands']
  },

  // Renovation Projects (5 images)
  {
    id: 'renovation-bedfordview-16',
    title: 'Home Renovation Project',
    category: 'renovation',
    location: 'Bedfordview',
    image: '/images/sinqobile-construction-renovation-bedfordview-16.jpg',
    description: 'Complete home renovation with modern upgrades and quality finishes.',
    completionYear: 2024,
    duration: '8 weeks',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Home renovation in Bedfordview - Professional construction work',
    tags: ['renovation', 'home', 'modern', 'bedfordview']
  },
  {
    id: 'renovation-edenvale-66',
    title: 'Property Renovation Service',
    category: 'renovation',
    location: 'Edenvale',
    image: '/images/sinqobile-construction-renovation-edenvale-66.jpg',
    description: 'Full property renovation including structural and cosmetic improvements.',
    completionYear: 2024,
    duration: '10 weeks',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Property renovation in Edenvale - Professional construction work',
    tags: ['renovation', 'property', 'structural', 'edenvale']
  },
  {
    id: 'renovation-johannesburg-26',
    title: 'Kitchen Renovation Project',
    category: 'renovation',
    location: 'Johannesburg',
    image: '/images/sinqobile-construction-renovation-johannesburg-26.jpg',
    description: 'Complete kitchen renovation with modern white cabinetry and contemporary design.',
    completionYear: 2024,
    duration: '6 weeks',
    clientType: 'residential',
    featured: true,
    seoAlt: 'Sinqobile Construction Kitchen renovation by Sinqobile Construction in Johannesburg - Professional construction work',
    tags: ['renovation', 'kitchen', 'cabinetry', 'modern', 'johannesburg']
  },
  {
    id: 'renovation-midrand-37',
    title: 'Plumbing Renovation Project',
    category: 'plumbing',
    location: 'Midrand',
    image: '/images/sinqobile-construction-renovation-midrand-37.jpg',
    description: 'Complete plumbing renovation with exposed pipe work and system upgrades.',
    completionYear: 2024,
    duration: '5 weeks',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Plumbing renovation by Sinqobile Construction in Midrand - Professional construction work',
    tags: ['plumbing', 'renovation', 'pipes', 'midrand']
  },
  {
    id: 'renovation-randburg-7',
    title: 'House Renovation Service',
    category: 'renovation',
    location: 'Randburg',
    image: '/images/sinqobile-construction-renovation-randburg-7.jpg',
    description: 'Comprehensive house renovation including interior and exterior work.',
    completionYear: 2024,
    duration: '12 weeks',
    clientType: 'residential',
    featured: true,
    seoAlt: 'Sinqobile Construction House renovation in Randburg - Professional construction work',
    tags: ['renovation', 'house', 'comprehensive', 'randburg']
  },

  // Repairs Projects (4 images)
  {
    id: 'repairs-fourways-6',
    title: 'Emergency Repair Service',
    category: 'repairs',
    location: 'Fourways',
    image: '/images/sinqobile-construction-repairs-fourways-6.jpg',
    description: 'Fast emergency repair service for urgent construction issues.',
    completionYear: 2024,
    duration: '2 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Emergency repairs in Fourways - Professional construction work',
    tags: ['repairs', 'emergency', 'urgent', 'fourways']
  },
  {
    id: 'repairs-fourways-41',
    title: 'Building Repairs Project',
    category: 'repairs',
    location: 'Fourways',
    image: '/images/sinqobile-construction-repairs-fourways-41.jpg',
    description: 'Building repairs including crack fixing and structural reinforcement.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Building repairs in Fourways - Professional construction work',
    tags: ['repairs', 'building', 'cracks', 'fourways']
  },
  {
    id: 'repairs-linden-13',
    title: 'Home Repairs Service',
    category: 'repairs',
    location: 'Linden',
    image: '/images/sinqobile-construction-repairs-linden-13.jpg',
    description: 'Complete home repairs including plumbing, electrical, and general fixes.',
    completionYear: 2024,
    duration: '3 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Home repairs in Linden - Professional construction work',
    tags: ['repairs', 'home', 'complete', 'linden']
  },
  {
    id: 'repairs-soweto-87',
    title: 'Property Repairs Project',
    category: 'repairs',
    location: 'Soweto',
    image: '/images/sinqobile-construction-repairs-soweto-87.jpg',
    description: 'Property repairs including roof, walls, and foundation work.',
    completionYear: 2024,
    duration: '2 weeks',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Property repairs in Soweto - Professional construction work',
    tags: ['repairs', 'property', 'foundation', 'soweto']
  },

  // Roofing Projects (5 images)
  {
    id: 'roofing-alberton-88',
    title: 'Bathroom Installation Project',
    category: 'installation',
    location: 'Alberton',
    image: '/images/sinqobile-construction-roofing-alberton-88.jpg',
    description: 'Complete bathroom installation with modern fixtures, bathtub, and quality tiling.',
    completionYear: 2024,
    duration: '2 weeks',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Bathroom installation by Sinqobile Construction in Alberton - Professional construction work',
    tags: ['installation', 'bathroom', 'fixtures', 'tiling', 'alberton']
  },
  {
    id: 'roofing-centurion-61',
    title: 'Pool Construction and Paving',
    category: 'paving',
    location: 'Centurion',
    image: '/images/sinqobile-construction-roofing-centurion-61.jpg',
    description: 'Professional pool construction with surrounding paving and landscaping.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Pool construction and paving by Sinqobile Construction in Centurion - Professional construction work',
    tags: ['paving', 'pool', 'construction', 'landscaping', 'centurion']
  },
  {
    id: 'roofing-midrand-89',
    title: 'Brick Wall Construction',
    category: 'brickwork',
    location: 'Midrand',
    image: '/images/sinqobile-construction-roofing-midrand-89.jpg',
    description: 'Professional brick wall construction with quality materials and expert craftsmanship.',
    completionYear: 2024,
    duration: '3 weeks',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Brick wall construction by Sinqobile Construction in Midrand - Professional construction work',
    tags: ['brickwork', 'wall', 'construction', 'midrand']
  },
  {
    id: 'roofing-pretoria-15',
    title: 'Bathroom Wall Tiling Project',
    category: 'tiling',
    location: 'Pretoria',
    image: '/images/sinqobile-construction-roofing-pretoria-15.jpg',
    description: 'Professional bathroom wall tiling with decorative mosaic border and quality materials.',
    completionYear: 2024,
    duration: '4 weeks',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Bathroom wall tiling by Sinqobile Construction in Pretoria - Professional construction work',
    tags: ['tiling', 'bathroom', 'wall tiles', 'mosaic', 'pretoria']
  },
  // Tiling Projects (3 images)
  {
    id: 'tiling-alexandra-12',
    title: 'Wall Plastering Service',
    category: 'plastering',
    location: 'Alexandra',
    image: '/images/sinqobile-construction-tiling-alexandra-12.jpg',
    description: 'Professional wall plastering with smooth finish and quality materials.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Wall plastering by Sinqobile Construction in Alexandra - Professional construction work',
    tags: ['plastering', 'wall', 'smooth finish', 'alexandra']
  },
  {
    id: 'tiling-edenvale-62',
    title: 'Wooden Floor Installation',
    category: 'flooring',
    location: 'Edenvale',
    image: '/images/sinqobile-construction-tiling-edenvale-62.jpg',
    description: 'Premium wooden floor installation with expert craftsmanship and quality finishing.',
    completionYear: 2024,
    duration: '5 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Wooden floor installation by Sinqobile Construction in Edenvale - Professional construction work',
    tags: ['flooring', 'wooden floor', 'hardwood', 'edenvale']
  },
  {
    id: 'tiling-germiston-1',
    title: 'Kitchen Tiling Project',
    category: 'tiling',
    location: 'Germiston',
    image: '/images/sinqobile-construction-tiling-germiston-1.jpg',
    description: 'Kitchen tiling including backsplash and floor with modern design.',
    completionYear: 2024,
    duration: '4 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Kitchen tiling in Germiston - Professional construction work',
    tags: ['tiling', 'kitchen', 'backsplash', 'germiston']
  },

  // Waterproofing Projects (4 images)
  {
    id: 'waterproofing-alberton-60',
    title: 'Bathtub Installation Project',
    category: 'plumbing',
    location: 'Alberton',
    image: '/images/sinqobile-construction-waterproofing-alberton-60.jpg',
    description: 'Professional bathtub installation with modern fixtures and quality plumbing work.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Bathtub installation by Sinqobile Construction in Alberton - Professional construction work',
    tags: ['plumbing', 'bathtub', 'installation', 'fixtures', 'alberton']
  },
  {
    id: 'waterproofing-krugersdorp-85',
    title: 'Floor Tiling Installation',
    category: 'tiling',
    location: 'Krugersdorp',
    image: '/images/sinqobile-construction-waterproofing-krugersdorp-85.jpg',
    description: 'Professional floor tiling with white marble-look tiles and quality installation.',
    completionYear: 2024,
    duration: '3 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Floor tiling installation by Sinqobile Construction in Krugersdorp - Professional construction work',
    tags: ['tiling', 'floor', 'marble', 'krugersdorp']
  },
  {
    id: 'waterproofing-lanseria-3',
    title: 'Geyser Installation Project',
    category: 'plumbing',
    location: 'Lanseria',
    image: '/images/sinqobile-construction-waterproofing-lanseria-3.jpg',
    description: 'Professional geyser installation with safety compliance and quality testing.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Geyser installation by Sinqobile Construction in Lanseria - Professional construction work',
    tags: ['plumbing', 'geyser', 'installation', 'lanseria']
  },
  {
    id: 'waterproofing-midrand-63',
    title: 'Ceiling Beams Installation',
    category: 'building',
    location: 'Midrand',
    image: '/images/sinqobile-construction-waterproofing-midrand-63.jpg',
    description: 'Professional ceiling beams installation with structural support and modern design.',
    completionYear: 2024,
    duration: '2 weeks',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Ceiling beams installation by Sinqobile Construction in Midrand - Professional construction work',
    tags: ['building', 'ceiling', 'beams', 'structural', 'midrand']
  },
  // New Projects - Batch 1 (IDs 94-118)
  {
    id: 'painting-johannesburg-94',
    title: 'Interior Ceiling Installation',
    category: 'installation',
    location: 'Johannesburg',
    image: '/images/sinqobile-construction-installation-johannesburg-94.jpg',
    description: 'Professional interior ceiling installation with quality materials and expert craftsmanship.',
    completionYear: 2024,
    duration: '3 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Professional ceiling installation in Johannesburg - Sinqobile Construction construction work',
    tags: ['installation', 'ceiling', 'interior', 'johannesburg']
  },
  {
    id: 'roofing-sandton-95',
    title: 'Ceiling Truss Installation',
    category: 'roofing',
    location: 'Sandton',
    image: '/images/sinqobile-construction-roofing-sandton-95.jpg',
    description: 'Professional ceiling truss installation with structural support and quality materials.',
    completionYear: 2024,
    duration: '2 weeks',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Ceiling truss installation in Sandton - Professional construction work',
    tags: ['roofing', 'trusses', 'ceiling', 'sandton']
  },
  {
    id: 'waterproofing-johannesburg-96',
    title: 'Pool Waterproofing Service',
    category: 'waterproofing',
    location: 'Johannesburg',
    image: '/images/sinqobile-construction-waterproofing-johannesburg-96.jpg',
    description: 'Professional pool waterproofing with quality sealants and expert application.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Pool waterproofing in Johannesburg - Professional construction work',
    tags: ['waterproofing', 'pool', 'sealant', 'johannesburg']
  },
  {
    id: 'roofing-midrand-97',
    title: 'Roof Truss and Waterproofing',
    category: 'roofing',
    location: 'Midrand',
    image: '/images/sinqobile-construction-roofing-midrand-97.jpg',
    description: 'Professional roof truss installation with waterproofing membrane and quality materials.',
    completionYear: 2024,
    duration: '2 weeks',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Roof truss and waterproofing in Midrand - Professional construction work',
    tags: ['roofing', 'trusses', 'waterproofing', 'midrand']
  },
  {
    id: 'plumbing-randburg-98',
    title: 'Drainage System Installation',
    category: 'plumbing',
    location: 'Randburg',
    image: '/images/sinqobile-construction-plumbing-randburg-98.jpg',
    description: 'Professional drainage system installation with quality pipes and proper connections.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Sinqobile Construction Drainage system installation in Randburg - Professional construction work',
    tags: ['plumbing', 'drainage', 'pipes', 'randburg']
  },
  
]

// Helper functions
export const getAllProjects = () => allProjectsData
export const getProjectsByCategory = (category: string) =>
  allProjectsData.filter(project => project.category === category)
export const getFeaturedProjects = () =>
  allProjectsData.filter(project => project.featured)
export const getProjectsByLocation = (location: string) =>
  allProjectsData.filter(project => project.location.toLowerCase().includes(location.toLowerCase()))
export const getProjectById = (id: string) =>
  allProjectsData.find(project => project.id === id)
export const getAllCategories = () =>
  Array.from(new Set(allProjectsData.map(project => project.category)))
export const getAllLocations = () =>
  Array.from(new Set(allProjectsData.map(project => project.location))).sort()
