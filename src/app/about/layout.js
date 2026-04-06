export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://novachem.com'),
  title: 'About NovaChem | Premium Research Chemicals Supplier',
  description: 'NovaChem is a trusted supplier of high-purity research chemicals including 5cl-adba, 5cladba, jwh-018, adb-butinaca, Etizolam and more. Lab-verified compounds with certificates of analysis.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About NovaChem | Premium Research Chemicals Supplier',
    description: 'NovaChem supplies high-purity research chemicals to scientists and laboratories worldwide. Verified compounds, discreet shipping, full certificates of analysis.',
    url: '/about',
    type: 'website',
  },
};

export default function AboutLayout({ children }) {
  return children;
}
