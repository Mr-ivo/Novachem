export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://novachemsite.com'),
  title: 'Contact Us | NovaChem - Get in Touch',
  description: 'Contact NovaChem for inquiries about research chemicals, orders, shipping, or support. We are here to help with all your questions.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | NovaChem',
    description: 'Contact NovaChem for inquiries about research chemicals and orders.',
    url: '/contact',
    type: 'website',
  },
};

export default function ContactLayout({ children }) {
  return children;
}
