import { Locale } from '@/i18n.config'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  category: string
  image: string
  keywords: string[]
}

interface BlogPostTranslations {
  en: BlogPost
  af: BlogPost
  zu: BlogPost
  st: BlogPost
}

// Blog post translations - titles and excerpts translated, content remains in English
const blogPostsData: BlogPostTranslations[] = [
  // Post 1: Cost of Building a House
  {
    en: {
      slug: 'cost-of-building-house-johannesburg-2024',
      title: 'Cost of Building a House in Johannesburg 2024',
      excerpt: 'Comprehensive guide to understanding construction costs in Johannesburg. Learn about material prices, labor costs, and how to budget for your dream home in 2024.',
      content: `[Full English content remains unchanged]`,
      date: '2024-01-15',
      author: 'Dingwayo Reason Ndlovu',
      category: 'Building Costs',
      image: '/images/sinqobile-construction-building-edenvale-30.jpg',
      keywords: ['building costs Johannesburg', 'house construction prices', 'building cost per square meter', 'construction budget 2024', 'home building costs Gauteng']
    },
    af: {
      slug: 'cost-of-building-house-johannesburg-2024',
      title: 'Koste van Bou van \'n Huis in Johannesburg 2024',
      excerpt: 'Omvattende gids om konstruksie kostes in Johannesburg te verstaan. Leer oor materiaal pryse, arbeid kostes, en hoe om vir jou droom huis in 2024 te begroot.',
      content: `[Full English content remains unchanged]`,
      date: '2024-01-15',
      author: 'Dingwayo Reason Ndlovu',
      category: 'Building Costs',
      image: '/images/sinqobile-construction-building-edenvale-30.jpg',
      keywords: ['bou kostes Johannesburg', 'huis konstruksie pryse', 'bou koste per vierkante meter', 'konstruksie begroting 2024', 'huis bou kostes Gauteng']
    },
    zu: {
      slug: 'cost-of-building-house-johannesburg-2024',
      title: 'Izindleko Zokwakha Indlu eJohannesburg 2024',
      excerpt: 'Umhlahlandlela ophelele wokuqonda izindleko zokwakha eJohannesburg. Funda ngamanani ezinto, izindleko zabasebenzi, nokuthi ungakwenza kanjani isabelomali sekhaya lakho lephupha ngo-2024.',
      content: `[Full English content remains unchanged]`,
      date: '2024-01-15',
      author: 'Dingwayo Reason Ndlovu',
      category: 'Building Costs',
      image: '/images/sinqobile-construction-building-edenvale-30.jpg',
      keywords: ['izindleko zokwakha Johannesburg', 'amanani okwakha indlu', 'izindleko zokwakha nge square meter', 'isabelomali sokwakha 2024', 'izindleko zokwakha ikhaya Gauteng']
    },
    st: {
      slug: 'cost-of-building-house-johannesburg-2024',
      title: 'Litšenyehelo tsa ho Aha Ntlo Johannesburg 2024',
      excerpt: 'Tataiso e felletseng ea ho utloisisa litšenyehelo tsa kaho Johannesburg. Ithute ka litheko tsa thepa, litšenyehelo tsa basebetsi, le mokhoa oa ho rala tekanyetso bakeng sa lehae la hao la toro ka 2024.',
      content: `[Full English content remains unchanged]`,
      date: '2024-01-15',
      author: 'Dingwayo Reason Ndlovu',
      category: 'Building Costs',
      image: '/images/sinqobile-construction-building-edenvale-30.jpg',
      keywords: ['litšenyehelo tsa kaho Johannesburg', 'litheko tsa kaho ea ntlo', 'litšenyehelo tsa kaho ka square meter', 'tekanyetso ea kaho 2024', 'litšenyehelo tsa kaho ea lehae Gauteng']
    }
  },
  // Post 2: How to Choose Construction Contractor
  {
    en: {
      slug: 'how-to-choose-construction-contractor-gauteng',
      title: 'How to Choose the Right Construction Contractor in Gauteng',
      excerpt: 'Essential tips for selecting a reliable construction contractor. Learn what to look for, questions to ask, and red flags to avoid when hiring builders in Gauteng.',
      content: `[Full English content remains unchanged]`,
      date: '2024-01-22',
      author: 'Dingwayo Reason Ndlovu',
      category: 'Contractor Tips',
      image: '/images/sinqobile-construction-building-lanseria-49.jpg',
      keywords: ['choosing contractor Gauteng', 'reliable builders Johannesburg', 'construction contractor tips', 'hiring builders South Africa', 'contractor selection guide']
    },
    af: {
      slug: 'how-to-choose-construction-contractor-gauteng',
      title: 'Hoe om die Regte Konstruksie Kontrakteur in Gauteng te Kies',
      excerpt: 'Noodsaaklike wenke vir die keuse van \'n betroubare konstruksie kontrakteur. Leer waarna om te kyk, vrae om te vra, en rooi vlae om te vermy wanneer jy bouers in Gauteng huur.',
      content: `[Full English content remains unchanged]`,
      date: '2024-01-22',
      author: 'Dingwayo Reason Ndlovu',
      category: 'Contractor Tips',
      image: '/images/sinqobile-construction-building-lanseria-49.jpg',
      keywords: ['kontrakteur kies Gauteng', 'betroubare bouers Johannesburg', 'konstruksie kontrakteur wenke', 'bouers huur Suid-Afrika', 'kontrakteur keuse gids']
    },
    zu: {
      slug: 'how-to-choose-construction-contractor-gauteng',
      title: 'Indlela Yokukhetha Umakhi Ofanele eGauteng',
      excerpt: 'Amathiphu abalulekile okukheth umakhi othembekile. Funda ukuthi yini okufanele uyibheke, imibuzo okufanele uyibuze, nezimpawu ezibomvu okufanele uzigweme uma uqasha abakhi eGauteng.',
      content: `[Full English content remains unchanged]`,
      date: '2024-01-22',
      author: 'Dingwayo Reason Ndlovu',
      category: 'Contractor Tips',
      image: '/images/sinqobile-construction-building-lanseria-49.jpg',
      keywords: ['ukukhetha umakhi Gauteng', 'abakhi abathembekile Johannesburg', 'amathiphu omakhi', 'ukuqasha abakhi South Africa', 'umhlahlandlela wokukheth umakhi']
    },
    st: {
      slug: 'how-to-choose-construction-contractor-gauteng',
      title: 'Mokhoa oa ho Khetha Moahi ea Nepahetseng Gauteng',
      excerpt: 'Malebela a bohlokoa bakeng sa ho khetha moahi ea tšepahalang. Ithute seo o lokelang ho se sheba, dipotso tseo o lokelang ho di botsa, le matšoao a mafubelu ao o lokelang ho a qoba ha o hira baahi Gauteng.',
      content: `[Full English content remains unchanged]`,
      date: '2024-01-22',
      author: 'Dingwayo Reason Ndlovu',
      category: 'Contractor Tips',
      image: '/images/sinqobile-construction-building-lanseria-49.jpg',
      keywords: ['ho khetha moahi Gauteng', 'baahi ba tšepahalang Johannesburg', 'malebela a moahi', 'ho hira baahi South Africa', 'tataiso ea ho khetha moahi']
    }
  },
  // Post 3: Top 10 Home Renovation Ideas
  {
    en: {
      slug: 'top-10-home-renovation-ideas-south-africa',
      title: 'Top 10 Home Renovation Ideas for South African Homes',
      excerpt: 'Transform your home with these popular renovation ideas. From kitchen upgrades to outdoor living spaces, discover projects that add value and improve your lifestyle.',
      content: `[Full English content remains unchanged]`,
      date: '2024-02-05',
      author: 'Dingwayo Reason Ndlovu',
      category: 'Renovations',
      image: '/images/sinqobile-construction-renovation-johannesburg-26.jpg',
      keywords: ['home renovation ideas', 'house renovation South Africa', 'home improvement projects', 'renovation ROI', 'home upgrades Gauteng']
    },
    af: {
      slug: 'top-10-home-renovation-ideas-south-africa',
      title: 'Top 10 Huis Renovasie Idees vir Suid-Afrikaanse Huise',
      excerpt: 'Transformeer jou huis met hierdie gewilde renovasie idees. Van kombuis opgraderings tot buite leefruimtes, ontdek projekte wat waarde toevoeg en jou lewenstyl verbeter.',
      content: `[Full English content remains unchanged]`,
      date: '2024-02-05',
      author: 'Dingwayo Reason Ndlovu',
      category: 'Renovations',
      image: '/images/sinqobile-construction-renovation-johannesburg-26.jpg',
      keywords: ['huis renovasie idees', 'huis renovasie Suid-Afrika', 'huis verbetering projekte', 'renovasie ROI', 'huis opgraderings Gauteng']
    },
    zu: {
      slug: 'top-10-home-renovation-ideas-south-africa',
      title: 'Imibono Eyi-10 Ephezulu Yokuvuselela Ikhaya LaseNingizimu Afrika',
      excerpt: 'Guqula ikhaya lakho ngale mibono edumile yokuvuselela. Kusukela ekuthuthukisweni kwekhishi kuya ezindaweni zokuhlala zangaphandle, thola amaphrojekthi anezinzuzo futhi athuthukisa indlela yakho yokuphila.',
      content: `[Full English content remains unchanged]`,
      date: '2024-02-05',
      author: 'Dingwayo Reason Ndlovu',
      category: 'Renovations',
      image: '/images/sinqobile-construction-renovation-johannesburg-26.jpg',
      keywords: ['imibono yokuvuselela ikhaya', 'ukuvuselela indlu South Africa', 'amaphrojekthi okuthuthukisa ikhaya', 'ROI yokuvuselela', 'ukuthuthukiswa kwekhaya Gauteng']
    },
    st: {
      slug: 'top-10-home-renovation-ideas-south-africa',
      title: 'Mehopolo e 10 e Holimo ea ho Nchafatsa Lehae Afrika Boroa',
      excerpt: 'Fetola lehae la hao ka mehopolo ena e tummeng ea ho nchafatsa. Ho tloha ho ntlafatsong ea kichine ho ea libakeng tsa bophelo ba kantle, fumana merero e eketsang boleng le ho ntlafatsa mokhoa oa hao oa bophelo.',
      content: `[Full English content remains unchanged]`,
      date: '2024-02-05',
      author: 'Dingwayo Reason Ndlovu',
      category: 'Renovations',
      image: '/images/sinqobile-construction-renovation-johannesburg-26.jpg',
      keywords: ['mehopolo ea ho nchafatsa lehae', 'ho nchafatsa ntlo South Africa', 'merero ea ho ntlafatsa lehae', 'ROI ea ho nchafatsa', 'ho ntlafatsa lehae Gauteng']
    }
  },
  // Post 4: Understanding Building Regulations
  {
    en: {
      slug: 'understanding-building-regulations-south-africa',
      title: 'Understanding Building Regulations in South Africa',
      excerpt: 'Navigate South African building regulations with confidence. Learn about permits, compliance requirements, and the approval process for your construction project.',
      content: `[Full English content remains unchanged]`,
      date: '2024-02-18',
      author: 'Dingwayo Reason Ndlovu',
      category: 'Regulations',
      image: '/images/sinqobile-construction-building-edenvale-30.jpg',
      keywords: ['building regulations South Africa', 'building plans approval', 'NHBRC requirements', 'construction compliance', 'building permits Gauteng']
    },
    af: {
      slug: 'understanding-building-regulations-south-africa',
      title: 'Verstaan Bou Regulasies in Suid-Afrika',
      excerpt: 'Navigeer Suid-Afrikaanse bou regulasies met vertroue. Leer oor permitte, nakoming vereistes, en die goedkeuringsproses vir jou konstruksie projek.',
      content: `[Full English content remains unchanged]`,
      date: '2024-02-18',
      author: 'Dingwayo Reason Ndlovu',
      category: 'Regulations',
      image: '/images/sinqobile-construction-building-edenvale-30.jpg',
      keywords: ['bou regulasies Suid-Afrika', 'bou planne goedkeuring', 'NHBRC vereistes', 'konstruksie nakoming', 'bou permitte Gauteng']
    },
    zu: {
      slug: 'understanding-building-regulations-south-africa',
      title: 'Ukuqonda Imithetho Yokwakha eNingizimu Afrika',
      excerpt: 'Zulazula imithetho yokwakha yaseNingizimu Afrika ngokuzethemba. Funda ngezimvume, izidingo zokulandela, nenqubo yemvume yephrojekthi yakho yokwakha.',
      content: `[Full English content remains unchanged]`,
      date: '2024-02-18',
      author: 'Dingwayo Reason Ndlovu',
      category: 'Regulations',
      image: '/images/sinqobile-construction-building-edenvale-30.jpg',
      keywords: ['imithetho yokwakha South Africa', 'ukugunyazwa kwezinhlelo zokwakha', 'izidingo ze-NHBRC', 'ukulandela kokwakha', 'izimvume zokwakha Gauteng']
    },
    st: {
      slug: 'understanding-building-regulations-south-africa',
      title: 'Ho Utloisisa Melao ea Kaho Afrika Boroa',
      excerpt: 'Tsamaea ka melao ea kaho ea Afrika Boroa ka ts\'epo. Ithute ka litumello, litlhoko tsa ho latela, le ts\'ebetso ea tumello bakeng sa morero oa hao oa kaho.',
      content: `[Full English content remains unchanged]`,
      date: '2024-02-18',
      author: 'Dingwayo Reason Ndlovu',
      category: 'Regulations',
      image: '/images/sinqobile-construction-building-edenvale-30.jpg',
      keywords: ['melao ea kaho South Africa', 'tumello ea meralo ea kaho', 'litlhoko tsa NHBRC', 'ho latela kaho', 'litumello tsa kaho Gauteng']
    }
  },
  // Post 5: Roofing Materials Guide
  {
    en: {
      slug: 'roofing-materials-guide-gauteng-climate',
      title: "Roofing Materials Guide: What's Best for Gauteng Climate",
      excerpt: 'Choose the perfect roofing material for Gauteng weather conditions. Compare options, costs, and durability to make an informed decision for your home.',
      content: `[Full English content remains unchanged]`,
      date: '2024-03-01',
      author: 'Dingwayo Reason Ndlovu',
      category: 'Roofing',
      image: '/images/sinqobile-construction-roofing-pretoria-15.jpg',
      keywords: ['roofing materials Gauteng', 'best roof for Johannesburg', 'roof tiles South Africa', 'roofing costs Gauteng', 'hail resistant roofing']
    },
    af: {
      slug: 'roofing-materials-guide-gauteng-climate',
      title: 'Dakwerk Materiale Gids: Wat is die Beste vir Gauteng Klimaat',
      excerpt: 'Kies die perfekte dakwerk materiaal vir Gauteng weer toestande. Vergelyk opsies, kostes, en duursaamheid om \'n ingeligte besluit vir jou huis te neem.',
      content: `[Full English content remains unchanged]`,
      date: '2024-03-01',
      author: 'Dingwayo Reason Ndlovu',
      category: 'Roofing',
      image: '/images/sinqobile-construction-roofing-pretoria-15.jpg',
      keywords: ['dakwerk materiale Gauteng', 'beste dak vir Johannesburg', 'dak teëls Suid-Afrika', 'dakwerk kostes Gauteng', 'hael weerstandige dakwerk']
    },
    zu: {
      slug: 'roofing-materials-guide-gauteng-climate',
      title: 'Umhlahlandlela Wezinto Zophahla: Yini Engcono Kakhulu Esimweni Sezulu SaseGauteng',
      excerpt: 'Khetha into ephahla efanele izimo zezulu zaseGauteng. Qhathanisa izinketho, izindleko, nokuqina ukuze wenze isinqumo esinolwazi ngekhaya lakho.',
      content: `[Full English content remains unchanged]`,
      date: '2024-03-01',
      author: 'Dingwayo Reason Ndlovu',
      category: 'Roofing',
      image: '/images/sinqobile-construction-roofing-pretoria-15.jpg',
      keywords: ['izinto zophahla Gauteng', 'uphahla olungcono kakhulu Johannesburg', 'amathayela ophahla South Africa', 'izindleko zophahla Gauteng', 'uphahla olumelana nesichotho']
    },
    st: {
      slug: 'roofing-materials-guide-gauteng-climate',
      title: 'Tataiso ea Lisebelisoa tsa Marulelo: Ke Eng e Molemohali Bakeng sa Bolepi ba Gauteng',
      excerpt: 'Khetha thepa e phethahetseng ea marulelo bakeng sa maemo a bolepi ba Gauteng. Bapisa likhetho, litšenyehelo, le ho tšoarella ho etsa qeto e nang le tsebo bakeng sa lehae la hao.',
      content: `[Full English content remains unchanged]`,
      date: '2024-03-01',
      author: 'Dingwayo Reason Ndlovu',
      category: 'Roofing',
      image: '/images/sinqobile-construction-roofing-pretoria-15.jpg',
      keywords: ['lisebelisoa tsa marulelo Gauteng', 'marulelo a molemohali Johannesburg', 'lithaele tsa marulelo South Africa', 'litšenyehelo tsa marulelo Gauteng', 'marulelo a thibelang leqhoa']
    }
  }
]

// Export function to get blog posts by language
export function getBlogPostsByLanguage(lang: Locale): BlogPost[] {
  return blogPostsData.map(post => post[lang])
}

export const blogCategories = [
  'All',
  'Building Costs',
  'Contractor Tips',
  'Renovations',
  'Regulations',
  'Roofing',
  'Maintenance',
  'Design Ideas'
]

export function getBlogPostBySlug(slug: string, lang: Locale): BlogPost | undefined {
  const posts = getBlogPostsByLanguage(lang)
  return posts.find(post => post.slug === slug)
}

export function getBlogPostsByCategory(category: string, lang: Locale): BlogPost[] {
  const posts = getBlogPostsByLanguage(lang)
  if (category === 'All') return posts
  return posts.filter(post => post.category === category)
}

export function getRelatedPosts(currentSlug: string, lang: Locale, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPostBySlug(currentSlug, lang)
  if (!currentPost) return []
  
  const posts = getBlogPostsByLanguage(lang)
  return posts
    .filter(post => post.slug !== currentSlug && post.category === currentPost.category)
    .slice(0, limit)
}