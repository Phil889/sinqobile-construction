import {
  Wrench,
  Hammer,
  PaintBucket,
  Droplets,
  Square,
  Home,
  HardHat,
  Zap,
  Plus,
  Shield,
  Layers,
  Settings,
  TreePine,
  RefreshCw,
  Wrench as RepairTool,
  Grid
} from 'lucide-react'

export interface ServiceCategory {
  slug: string
  name: string
  description: string
  icon: any
  imageCount: number
  featured: boolean
  seoKeywords: string[]
}

export const enhancedServices: ServiceCategory[] = [
  // Core Featured Services
  {
    slug: 'building',
    name: 'Building',
    description: 'New construction, extensions, and structural work',
    icon: Hammer,
    imageCount: 3,
    featured: true,
    seoKeywords: ['building construction', 'new builds', 'structural work', 'construction services']
  },
  {
    slug: 'concrete',
    name: 'Concrete Work',
    description: 'Foundations, slabs, driveways, and reinforced concrete structures',
    icon: HardHat,
    imageCount: 8,
    featured: true,
    seoKeywords: ['concrete contractors johannesburg', 'concrete slab contractors johannesburg', 'foundation contractors johannesburg', 'concrete driveway johannesburg', 'reinforced concrete johannesburg', 'raft foundation johannesburg', 'concrete work johannesburg', 'concrete floors gauteng']
  },
  {
    slug: 'paving',
    name: 'Paving',
    description: 'Driveways, walkways, and outdoor paving solutions',
    icon: Home,
    imageCount: 8,
    featured: true,
    seoKeywords: ['paving contractors johannesburg', 'driveway paving', 'brick paving', 'interlocking paving', 'patio paving', 'walkway paving', 'paving cost per square meter']
  },
  {
    slug: 'plumbing',
    name: 'Plumbing',
    description: 'Installation, repairs, and maintenance services',
    icon: Wrench,
    imageCount: 7,
    featured: true,
    seoKeywords: ['plumber johannesburg', 'plumbing services johannesburg', 'emergency plumber johannesburg', 'geyser installation johannesburg', 'drain cleaning johannesburg', 'blocked drains johannesburg', '24 hour plumber johannesburg', 'burst pipe repair johannesburg', 'leak detection johannesburg']
  },
  
  // Additional Services
  {
    slug: 'waterproofing',
    name: 'Waterproofing',
    description: 'Basement, roof, and exterior waterproofing solutions',
    icon: Droplets,
    imageCount: 6,
    featured: false,
    seoKeywords: ['waterproofing johannesburg', 'damp proofing johannesburg', 'roof waterproofing johannesburg', 'waterproofing contractors johannesburg', 'basement waterproofing johannesburg', 'rising damp treatment johannesburg', 'bathroom waterproofing johannesburg', 'waterproofing cost per square meter south africa']
  },
  {
    slug: 'extensions',
    name: 'Extensions',
    description: 'Home and commercial property extensions and additions',
    icon: Plus,
    imageCount: 5,
    featured: false,
    seoKeywords: ['home extensions johannesburg', 'house extension cost south africa', 'building extensions johannesburg', 'room additions johannesburg', 'second storey extension johannesburg', 'granny flat builders johannesburg', 'garage conversion johannesburg', 'home extension builders gauteng']
  },
  {
    slug: 'fencing',
    name: 'Fencing',
    description: 'Security fencing, boundary walls, and gate installations',
    icon: Shield,
    imageCount: 5,
    featured: false,
    seoKeywords: ['fencing contractors johannesburg', 'palisade fencing johannesburg', 'security fencing sandton', 'boundary wall fencing fourways', 'electric fence installation gauteng', 'clearview fencing johannesburg']
  },
  {
    slug: 'flooring',
    name: 'Flooring',
    description: 'Floor installation, repairs, and refinishing services',
    icon: Layers,
    imageCount: 5,
    featured: false,
    seoKeywords: ['flooring contractors johannesburg', 'laminate flooring installation fourways', 'vinyl flooring sandton', 'tile installation johannesburg', 'wooden floor installation gauteng']
  },
  {
    slug: 'installation',
    name: 'Installation',
    description: 'Professional installation services for various systems and fixtures',
    icon: Settings,
    imageCount: 5,
    featured: false,
    seoKeywords: ['installation services johannesburg', 'home installations fourways', 'fixture installation sandton', 'door and window installation johannesburg', 'ceiling installation fourways', 'geyser installation sandton']
  },
  {
    slug: 'renovation',
    name: 'Renovation',
    description: 'Complete home and commercial property renovations',
    icon: RefreshCw,
    imageCount: 5,
    featured: false,
    seoKeywords: ['home renovation johannesburg', 'renovation contractors johannesburg', 'kitchen renovation johannesburg', 'bathroom renovation johannesburg', 'house renovation cost south africa', 'renovation companies gauteng', 'home renovation cost johannesburg', 'house remodeling johannesburg']
  },
  {
    slug: 'repairs',
    name: 'Repairs',
    description: 'Emergency and scheduled repair services for all construction needs',
    icon: RepairTool,
    imageCount: 5,
    featured: false,
    seoKeywords: ['home repairs johannesburg', 'emergency repair services sandton', 'structural repairs fourways', 'building repairs johannesburg', 'handyman repairs gauteng']
  },
  {
    slug: 'roofing',
    name: 'Roofing',
    description: 'Roof installation, repairs, maintenance, and waterproofing',
    icon: Home,
    imageCount: 5,
    featured: false,
    seoKeywords: ['roofing contractors johannesburg', 'roof repairs johannesburg', 'roof leak repair johannesburg', 'roof installation johannesburg', 'roof replacement johannesburg', 'roof painting johannesburg', 'IBR roofing johannesburg', 'roofing companies gauteng']
  },
  {
    slug: 'brickwork',
    name: 'Brickwork',
    description: 'Professional bricklaying and masonry services for walls and structures',
    icon: Square,
    imageCount: 4,
    featured: false,
    seoKeywords: ['brickwork contractors johannesburg', 'bricklayer johannesburg', 'masonry contractor sandton', 'face brick construction fourways', 'boundary wall construction johannesburg', 'retaining wall construction sandton']
  },
  {
    slug: 'painting',
    name: 'Painting',
    description: 'Interior and exterior painting services with premium finishes',
    icon: PaintBucket,
    imageCount: 4,
    featured: false,
    seoKeywords: ['painters johannesburg', 'house painting johannesburg', 'painting contractors johannesburg', 'interior painting johannesburg', 'exterior painting johannesburg', 'painting services johannesburg', 'house painters gauteng', 'commercial painting contractors johannesburg', 'residential painters johannesburg']
  },
  {
    slug: 'plastering',
    name: 'Plastering',
    description: 'Interior and exterior plastering services with smooth finishes',
    icon: Square,
    imageCount: 4,
    featured: false,
    seoKeywords: ['plastering services johannesburg', 'plasterers johannesburg', 'plastering contractors johannesburg', 'skimming contractors johannesburg', 'ceiling plastering johannesburg', 'wall plastering johannesburg', 'plastering cost per m2 south africa', 'skim coating johannesburg', 'plaster repair johannesburg', 'rhinolite plastering johannesburg']
  },
  {
    slug: 'maintenance',
    name: 'Maintenance',
    description: 'Regular maintenance and upkeep services for all property types',
    icon: Settings,
    imageCount: 4,
    featured: false,
    seoKeywords: ['property maintenance johannesburg', 'building maintenance sandton', 'home maintenance fourways', 'facility maintenance gauteng', 'commercial property maintenance johannesburg']
  },
  {
    slug: 'landscaping',
    name: 'Landscaping',
    description: 'Garden design, outdoor landscaping, and ground preparation',
    icon: TreePine,
    imageCount: 3,
    featured: false,
    seoKeywords: ['landscaping johannesburg', 'garden design fourways', 'landscaping company sandton', 'irrigation installation johannesburg', 'outdoor living spaces gauteng', 'paving and landscaping johannesburg']
  },
  {
    slug: 'tiling',
    name: 'Tiling',
    description: 'Floor and wall tiling for bathrooms, kitchens, and all spaces',
    icon: Grid,
    imageCount: 3,
    featured: false,
    seoKeywords: ['tiling contractors johannesburg', 'tiler johannesburg', 'floor tiling johannesburg', 'bathroom tiling johannesburg', 'wall tiling johannesburg', 'kitchen tiling johannesburg', 'tile installation johannesburg', 'tiling cost per square meter south africa', 'tiling services gauteng']
  },
  {
    slug: 'electrical',
    name: 'Electrical',
    description: 'Electrical installations, repairs, and safety compliance services',
    icon: Zap,
    imageCount: 2,
    featured: false,
    seoKeywords: ['electrician johannesburg', 'electrical contractors fourways', 'electrical installations sandton', 'electrical compliance certificate johannesburg', 'emergency electrician gauteng', 'COC certificate electrician johannesburg']
  }
]

// Get featured services only
export const getFeaturedServices = () => enhancedServices.filter(service => service.featured)

// Get all services
export const getAllServices = () => enhancedServices

// Get service by slug
export const getServiceBySlug = (slug: string) => enhancedServices.find(service => service.slug === slug)

// Get services by category (featured/non-featured)
export const getServicesByCategory = (featured: boolean) => 
  enhancedServices.filter(service => service.featured === featured)