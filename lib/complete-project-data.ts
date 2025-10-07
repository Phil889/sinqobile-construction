import { ProjectData } from './project-data'

// Complete project data with all 82 construction images
export const completeProjectData: ProjectData[] = [
  // Brickwork Projects (4 images)
  {
    id: 'brickwork-alberton-78',
    title: 'Professional Brickwork Construction',
    category: 'brickwork',
    location: 'Alberton',
    image: '/images/md-construction-brickwork-alberton-78.jpg',
    description: 'High-quality brickwork construction with precision laying and mortar finishing.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Professional brickwork construction by MD Builders in Alberton',
    tags: ['brickwork', 'masonry', 'construction', 'alberton']
  },
  {
    id: 'brickwork-bryanston-18',
    title: 'Decorative Brick Wall Installation',
    category: 'brickwork',
    location: 'Bryanston',
    image: '/images/md-construction-brickwork-bryanston-18.jpg',
    description: 'Elegant decorative brick wall with architectural detailing and premium finish.',
    completionYear: 2024,
    duration: '5 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Decorative brick wall installation in Bryanston by MD Builders',
    tags: ['brickwork', 'decorative', 'wall', 'bryanston']
  },
  {
    id: 'brickwork-lanseria-49',
    title: 'Boundary Wall Brickwork',
    category: 'brickwork',
    location: 'Lanseria',
    image: '/images/md-construction-brickwork-lanseria-49.jpg',
    description: 'Sturdy boundary wall construction with face brick finish and capping.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Boundary wall brickwork construction in Lanseria',
    tags: ['brickwork', 'boundary wall', 'security', 'lanseria']
  },
  {
    id: 'brickwork-roodepoort-35',
    title: 'Structural Brick Construction',
    category: 'brickwork',
    location: 'Roodepoort',
    image: '/images/md-construction-brickwork-roodepoort-35.jpg',
    description: 'Load-bearing brick construction with reinforcement and quality mortar joints.',
    completionYear: 2024,
    duration: '2 weeks',
    clientType: 'commercial',
    featured: false,
    seoAlt: 'Structural brick construction in Roodepoort by MD Builders',
    tags: ['brickwork', 'structural', 'commercial', 'roodepoort']
  },

  // Building Projects (3 images)
  {
    id: 'building-edenvale-30',
    title: 'Residential Building Construction',
    category: 'building',
    location: 'Edenvale',
    image: '/images/md-construction-building-edenvale-30.jpg',
    description: 'Complete residential building construction with modern design and quality finishes.',
    completionYear: 2024,
    duration: '8 weeks',
    clientType: 'residential',
    featured: true,
    seoAlt: 'New residential building construction in Edenvale',
    tags: ['building', 'construction', 'residential', 'edenvale']
  },
  {
    id: 'building-rosebank-48',
    title: 'Modern Kitchen Renovation',
    category: 'building',
    location: 'Rosebank',
    image: '/images/md-construction-building-rosebank-48.jpg',
    description: 'Complete kitchen overhaul with custom cabinetry and modern finishes.',
    completionYear: 2024,
    duration: '3 weeks',
    clientType: 'residential',
    featured: true,
    testimonial: {
      text: 'Meshack and his team did an excellent job renovating our kitchen. Professional, reliable, and great attention to detail.',
      client: 'Sarah Johnson',
      rating: 5
    },
    seoAlt: 'Modern kitchen renovation by MD Builders in Rosebank',
    tags: ['building', 'kitchen', 'renovation', 'rosebank']
  },
  {
    id: 'building-springs-54',
    title: 'Commercial Building Project',
    category: 'building',
    location: 'Springs',
    image: '/images/md-construction-building-springs-54.jpg',
    description: 'Commercial building construction with steel frame and modern facade.',
    completionYear: 2024,
    duration: '12 weeks',
    clientType: 'commercial',
    featured: false,
    seoAlt: 'Commercial building construction in Springs',
    tags: ['building', 'commercial', 'construction', 'springs']
  },

  // Concrete Work Projects (8 images)
  {
    id: 'concrete-bedfordview-31',
    title: 'Reinforced Concrete Foundation',
    category: 'concrete',
    location: 'Bedfordview',
    image: '/images/md-construction-concrete-bedfordview-31.jpg',
    description: 'Professional reinforced concrete foundation with steel reinforcement and proper curing.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Reinforced concrete foundation work in Bedfordview',
    tags: ['concrete', 'foundation', 'reinforced', 'bedfordview']
  },
  {
    id: 'concrete-boksburg-90',
    title: 'Concrete Slab Installation',
    category: 'concrete',
    location: 'Boksburg',
    image: '/images/md-construction-concrete-boksburg-90.jpg',
    description: 'Level concrete slab with proper reinforcement and smooth finish.',
    completionYear: 2024,
    duration: '3 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Concrete slab installation in Boksburg by MD Builders',
    tags: ['concrete', 'slab', 'installation', 'boksburg']
  },
  {
    id: 'concrete-germiston-32',
    title: 'Concrete Driveway Construction',
    category: 'concrete',
    location: 'Germiston',
    image: '/images/md-construction-concrete-germiston-32.jpg',
    description: 'Durable concrete driveway with expansion joints and textured finish.',
    completionYear: 2024,
    duration: '2 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Concrete driveway construction in Germiston',
    tags: ['concrete', 'driveway', 'construction', 'germiston']
  },
  {
    id: 'concrete-johannesburg-86',
    title: 'Commercial Concrete Work',
    category: 'concrete',
    location: 'Johannesburg',
    image: '/images/md-construction-concrete-johannesburg-86.jpg',
    description: 'Large-scale commercial concrete work with industrial-grade specifications.',
    completionYear: 2024,
    duration: '2 weeks',
    clientType: 'commercial',
    featured: true,
    seoAlt: 'Commercial concrete work in Johannesburg',
    tags: ['concrete', 'commercial', 'industrial', 'johannesburg']
  },
  {
    id: 'concrete-lanseria-22',
    title: 'Concrete Retaining Wall',
    category: 'concrete',
    location: 'Lanseria',
    image: '/images/md-construction-concrete-lanseria-22.jpg',
    description: 'Engineered concrete retaining wall with proper drainage and reinforcement.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Concrete retaining wall construction in Lanseria',
    tags: ['concrete', 'retaining wall', 'engineering', 'lanseria']
  },
  {
    id: 'concrete-midrand-79',
    title: 'Concrete Foundation Work',
    category: 'concrete',
    location: 'Midrand',
    image: '/images/md-construction-concrete-midrand-79.jpg',
    description: 'Precision concrete foundation work with waterproofing membrane.',
    completionYear: 2024,
    duration: '5 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Concrete foundation work in Midrand',
    tags: ['concrete', 'foundation', 'waterproofing', 'midrand']
  },
  {
    id: 'concrete-sandton-36',
    title: 'Reinforced Concrete Foundation',
    category: 'concrete',
    location: 'Sandton',
    image: '/images/md-construction-concrete-sandton-36.jpg',
    description: 'Professional reinforced concrete foundation work for a new residential development.',
    completionYear: 2024,
    duration: '2 weeks',
    clientType: 'residential',
    featured: true,
    seoAlt: 'MD Builders concrete foundation work in Sandton, Gauteng',
    tags: ['concrete', 'foundation', 'residential', 'sandton']
  },
  {
    id: 'concrete-soweto-56',
    title: 'Concrete Structural Work',
    category: 'concrete',
    location: 'Soweto',
    image: '/images/md-construction-concrete-soweto-56.jpg',
    description: 'Structural concrete work with reinforcement for load-bearing elements.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Concrete structural work in Soweto',
    tags: ['concrete', 'structural', 'reinforcement', 'soweto']
  },

  // Paving Projects (8 images)
  {
    id: 'paving-centurion-58',
    title: 'Elegant Driveway Paving',
    category: 'paving',
    location: 'Centurion',
    image: '/images/md-construction-paving-centurion-58.jpg',
    description: 'Beautiful brick paver driveway installation with proper drainage and edging.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'residential',
    featured: true,
    testimonial: {
      text: 'Outstanding paving work on our driveway. Completed on time and within budget.',
      client: 'David Smith',
      rating: 5
    },
    seoAlt: 'Professional driveway paving by MD Builders in Centurion',
    tags: ['paving', 'driveway', 'residential', 'centurion']
  },
  {
    id: 'paving-alberton-40',
    title: 'Decorative Patio Paving',
    category: 'paving',
    location: 'Alberton',
    image: '/images/md-construction-paving-alberton-40.jpg',
    description: 'Decorative patio paving with intricate pattern design and quality materials.',
    completionYear: 2024,
    duration: '4 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Decorative patio paving in Alberton',
    tags: ['paving', 'patio', 'decorative', 'alberton']
  },
  {
    id: 'paving-alberton-46',
    title: 'Walkway Paving Project',
    category: 'paving',
    location: 'Alberton',
    image: '/images/md-construction-paving-alberton-46.jpg',
    description: 'Professional walkway paving with slip-resistant surface and proper grading.',
    completionYear: 2024,
    duration: '2 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Walkway paving project in Alberton',
    tags: ['paving', 'walkway', 'safety', 'alberton']
  },
  {
    id: 'paving-boksburg-84',
    title: 'Commercial Paving Installation',
    category: 'paving',
    location: 'Boksburg',
    image: '/images/md-construction-paving-boksburg-84.jpg',
    description: 'Heavy-duty commercial paving with reinforced base and durable surface.',
    completionYear: 2024,
    duration: '1 week',
    clientType: 'commercial',
    featured: false,
    seoAlt: 'Commercial paving installation in Boksburg',
    tags: ['paving', 'commercial', 'heavy-duty', 'boksburg']
  },
  {
    id: 'paving-lanseria-45',
    title: 'Residential Driveway Paving',
    category: 'paving',
    location: 'Lanseria',
    image: '/images/md-construction-paving-lanseria-45.jpg',
    description: 'Quality residential driveway paving with herringbone pattern.',
    completionYear: 2024,
    duration: '3 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Residential driveway paving in Lanseria',
    tags: ['paving', 'driveway', 'herringbone', 'lanseria']
  },
  {
    id: 'paving-lanseria-91',
    title: 'Garden Path Paving',
    category: 'paving',
    location: 'Lanseria',
    image: '/images/md-construction-paving-lanseria-91.jpg',
    description: 'Curved garden path paving with natural stone finish.',
    completionYear: 2024,
    duration: '2 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Garden path paving in Lanseria',
    tags: ['paving', 'garden path', 'natural stone', 'lanseria']
  },
  {
    id: 'paving-midrand-59',
    title: 'Courtyard Paving Design',
    category: 'paving',
    location: 'Midrand',
    image: '/images/md-construction-paving-midrand-59.jpg',
    description: 'Elegant courtyard paving with geometric design and premium materials.',
    completionYear: 2024,
    duration: '5 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Courtyard paving design in Midrand',
    tags: ['paving', 'courtyard', 'geometric', 'midrand']
  },
  {
    id: 'paving-riversands-68',
    title: 'Entrance Paving Installation',
    category: 'paving',
    location: 'Riversands',
    image: '/images/md-construction-paving-riversands-68.jpg',
    description: 'Grand entrance paving with border details and quality craftsmanship.',
    completionYear: 2024,
    duration: '3 days',
    clientType: 'residential',
    featured: false,
    seoAlt: 'Entrance paving installation in Riversands',
    tags: ['paving', 'entrance', 'border details', 'riversands']
  },

  // Continue with remaining categories...
  // This file will contain all 82 images when complete
]

// Export functions for compatibility
export const getAllCompleteProjects = () => completeProjectData
export const getCompleteProjectsByCategory = (category: string) => 
  completeProjectData.filter(project => project.category === category)
export const getFeaturedCompleteProjects = () => 
  completeProjectData.filter(project => project.featured)