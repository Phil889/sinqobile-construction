/**
 * Sinqobile Construction Business Information
 * Professional construction company based in Bryanston, Johannesburg
 */

export const BUSINESS_INFO = {
  name: "Sinqobile Construction",
  address: {
    street: "47 Bryanston Drive",
    suburb: "Bryanston",
    city: "Johannesburg",
    province: "Gauteng",
    postalCode: "2021",
    country: "South Africa",
  },
  fullAddress: "47 Bryanston Drive, Bryanston, Johannesburg, 2021",
  contact: {
    phone: "+27828688396",
    email: "sinqobileconstruction@gmail.com",
    website: "www.sinqobileconstruction.co.za",
  },
  coordinates: {
    latitude: -26.0667,
    longitude: 28.0167,
  },
  businessHours: {
    weekdays: "Monday - Friday: 7:00 AM - 5:00 PM",
    saturday: "Saturday: 8:00 AM - 1:00 PM",
    sunday: "Sunday: Closed",
  },
  description: "Professional construction and building services in Johannesburg and surrounding areas",
} as const;

export type BusinessInfo = typeof BUSINESS_INFO;