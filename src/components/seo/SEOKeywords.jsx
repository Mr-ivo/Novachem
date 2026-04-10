/**
 * SEO Keywords Component
 * Contains all primary research chemical keywords for search engine optimization
 * Keywords: 5cl-adba, 5cladba, 5fadb, jwh-018, adb-butinaca, ab-pinaca, 
 * 5F-EDMB-PINACA, ADB-FUBINACA, 4FADB, AMB-FUBINACA, MDMB-4en-PINACA,
 * Etizolam, Flualprazolam, Clonazolam, Flubromazolam, Diclazepam, Bromazolam,
 * Pyrazolam, Phenazepam, AB-FUBINACA, MDMB-CHMINACA, MDMB-FUBINACA,
 * Isotonitazene, Protonitazene, Metonitazene, Alprazolam, 5fmdmb-2201, 4fadb
 */

export const primaryKeywords = [
  '5cl-adba',
  '5cladba',
  '5fadb',
  'jwh-018',
  'adb-butinaca',
  'ab-pinaca',
  '5F-EDMB-PINACA',
  'ADB-FUBINACA',
  '4FADB',
  'AMB-FUBINACA',
  'MDMB-4en-PINACA',
  'Etizolam',
  'Flualprazolam',
  'Clonazolam',
  'Flubromazolam',
  'Diclazepam',
  'Bromazolam',
  'Pyrazolam',
  'Phenazepam',
  'AB-FUBINACA',
  'MDMB-CHMINACA',
  'MDMB-FUBINACA',
  'Isotonitazene',
  'Protonitazene',
  'Metonitazene',
  'Alprazolam',
  '5fmdmb-2201',
  '4fadb'
];

export const secondaryKeywords = [
  'research chemicals',
  'synthetic cannabinoids',
  'laboratory chemicals',
  'premium research chemicals',
  'buy research chemicals online',
  'opioids',
  'nitazenes',
  'etomidate',
  'cannabinoids for research',
  'chemical compounds',
  'laboratory grade chemicals'
];

export const allKeywords = [...primaryKeywords, ...secondaryKeywords];

// Schema.org structured data for better SEO
export const getProductSchema = (product) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  image: product.images?.[0] || '',
  offers: {
    '@type': 'Offer',
    price: product.price,
    priceCurrency: 'USD',
    availability: product.countInStock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
  },
  aggregateRating: product.rating ? {
    '@type': 'AggregateRating',
    ratingValue: product.rating,
    reviewCount: product.numReviews || 0,
  } : undefined,
});

// Get base URL for schemas
const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_BASE_URL || 'https://novachem.com';
};

// Organization schema
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NovaChem',
  description: 'Premium research chemicals supplier — synthetic cannabinoids, opioids, nitazenes, etomidate and laboratory-grade compounds for scientific research.',
  url: getBaseUrl(),
  logo: {
    '@type': 'ImageObject',
    url: `${getBaseUrl()}/images/logo.png`,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'info@novachem.com',
    availableLanguage: 'English',
  },
  sameAs: [],
});

// Website schema with SearchAction for sitelinks search box
export const getWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'NovaChem',
  description: 'Premium research chemicals — synthetic cannabinoids, opioids, nitazenes, etomidate and laboratory compounds.',
  url: getBaseUrl(),
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${getBaseUrl()}/products?search={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
});

export default function SEOKeywords() {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
