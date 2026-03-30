#!/usr/bin/env node
/**
 * Submit URLs to IndexNow (Bing, Yandex, Naver) for instant indexing.
 * Run after deploy: node scripts/indexnow-submit.js
 * Or with specific URLs: node scripts/indexnow-submit.js /en/services/building /en/areas/johannesburg
 */

const INDEXNOW_KEY = '971056355487d7c44a6d377f963d4b61';
const HOST = 'www.sinqobileconstruction.co.za';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

// All site URLs (4 languages × page paths)
const languages = ['en', 'af', 'zu', 'st'];
const pages = [
  '', '/about', '/services', '/our-work', '/cost-calculator', '/blog', '/contact', '/faq', '/areas',
  '/services/building', '/services/concrete', '/services/paving', '/services/plumbing',
  '/services/waterproofing', '/services/renovation', '/services/roofing', '/services/painting',
  '/services/plastering', '/services/tiling', '/services/extensions', '/services/fencing',
  '/services/flooring', '/services/installation', '/services/landscaping', '/services/maintenance',
  '/services/repairs', '/services/brickwork', '/services/electrical',
  '/areas/johannesburg', '/areas/sandton', '/areas/pretoria', '/areas/centurion',
  '/areas/midrand', '/areas/randburg', '/areas/fourways', '/areas/roodepoort',
  '/blog/cost-of-building-house-johannesburg-2024',
  '/blog/how-to-choose-construction-contractor-gauteng',
  '/blog/top-10-home-renovation-ideas-south-africa',
  '/blog/understanding-building-regulations-south-africa',
  '/blog/roofing-materials-guide-gauteng-climate',
  '/blog/home-renovation-costs-johannesburg-2026',
];

async function submitToIndexNow(urls) {
  const body = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls.map(u => `https://${HOST}${u}`),
  };

  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  return { status: response.status, statusText: response.statusText };
}

async function main() {
  const args = process.argv.slice(2);

  let urlsToSubmit;
  if (args.length > 0) {
    // Submit specific URLs passed as arguments
    urlsToSubmit = args;
  } else {
    // Submit all URLs across all languages
    urlsToSubmit = languages.flatMap(lang => pages.map(page => `/${lang}${page}`));
  }

  console.log(`Submitting ${urlsToSubmit.length} URLs to IndexNow...`);

  // IndexNow accepts max 10,000 URLs per request, batch in chunks of 500
  for (let i = 0; i < urlsToSubmit.length; i += 500) {
    const batch = urlsToSubmit.slice(i, i + 500);
    const result = await submitToIndexNow(batch);
    console.log(`Batch ${Math.floor(i / 500) + 1}: ${result.status} ${result.statusText} (${batch.length} URLs)`);
  }

  console.log('Done.');
}

main().catch(console.error);
