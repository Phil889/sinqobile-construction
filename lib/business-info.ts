/**
 * Sinqobile Construction Business Information
 * Professional construction company based in Fourways, Sandton
 */

export const BUSINESS_INFO = {
  name: "Sinqobile Construction",
  address: {
    street: "The William 1, Broadacres Drive",
    suburb: "Fourways",
    city: "Sandton",
    province: "Gauteng",
    postalCode: "2191",
    country: "South Africa",
  },
  fullAddress: "The William 1, Broadacres Drive, Fourways, Sandton, 2191",
  contact: {
    phone: "+27828688396",
    email: "sinqobileconstruction@gmail.com",
    website: "www.sinqobileconstruction.co.za",
  },
  coordinates: {
    latitude: -26.0274,
    longitude: 28.0106,
  },
  businessHours: {
    weekdays: "Monday - Friday: 7:00 AM - 5:00 PM",
    saturday: "Saturday: 8:00 AM - 1:00 PM",
    sunday: "Sunday: Closed",
  },
  description: "Professional construction and building services in Johannesburg and surrounding areas",
} as const;

export type BusinessInfo = typeof BUSINESS_INFO;