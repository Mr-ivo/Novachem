import { Inter } from "next/font/google";

import Script from "next/script";

import "./globals.css";

import { Toaster } from "react-hot-toast";



// Components

import Navbar from "@/components/layout/Navbar";

import Footer from "@/components/layout/Footer";

import ConditionalNavbar from "@/components/layout/ConditionalNavbar";

import VisitorTracker from "@/components/tracking/VisitorTracker";

import WhatsAppButton from "@/components/common/WhatsAppButton";



// Providers

import AuthProvider from "@/components/auth/AuthProvider";

import CartProvider from "@/components/cart/CartProvider";



const inter = Inter({

  subsets: ["latin"],

  weight: ['400', '600', '700'], // Reduced font weights for better performance

  variable: "--font-inter",

  display: 'swap',

  preload: true,

  fallback: ['system-ui', 'arial'],

});



export const metadata = {

  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://novachem.com'),

  title: "NovaChem | Premium Research Chemicals",

  description: "Premium quality research chemicals including 5cl-adba, 5cladba, 5fadb, jwh-018, adb-butinaca, ab-pinaca, 5F-EDMB-PINACA, ADB-FUBINACA, 4FADB, AMB-FUBINACA, MDMB-4en-PINACA, Etizolam, Flualprazolam, Clonazolam, Flubromazolam, Diclazepam, Bromazolam, Pyrazolam. Top-grade cannabinoids, stimulants and benzos for your research needs.",

  other: {

    'theme-color': '#0d9488',

  },

  keywords: [

    "research chemicals",

    "5cl-adba",

    "5cladba", 

    "5fadb",

    "jwh-018",

    "adb-butinaca",

    "ab-pinaca",

    "5F-EDMB-PINACA",

    "ADB-FUBINACA",

    "4FADB",

    "AMB-FUBINACA",

    "MDMB-4en-PINACA",

    "Etizolam",

    "Flualprazolam",

    "Clonazolam",

    "Flubromazolam",

    "Diclazepam",

    "Bromazolam",

    "Pyrazolam",

    "cannabinoids",

    "synthetic cannabinoids",

    "benzos",

    "benzodiazepines",

    "premium quality research chemicals",

    "buy research chemicals online",

    "laboratory chemicals"

  ],

  robots: {

    index: true,

    follow: true,

    googleBot: {

      index: true,

      follow: true,

      'max-video-preview': -1,

      'max-image-preview': 'large',

      'max-snippet': -1,

    },

  },

  openGraph: {

    type: 'website',

    locale: 'en_US',

    url: '/',

    siteName: 'NovaChem',

    title: 'NovaChem | Premium Research Chemicals',

    description: 'Premium quality research chemicals including 5cl-adba, 5cladba, 5fadb, jwh-018, adb-butinaca and more.',

  },

  twitter: {

    card: 'summary_large_image',

    title: 'NovaChem | Premium Research Chemicals',

    description: 'Premium quality research chemicals including 5cl-adba, 5cladba, 5fadb, jwh-018, adb-butinaca and more.',

  },

  verification: {

    // Add your verification codes when ready

    // google: 'your-google-verification-code',

    // yandex: 'your-yandex-verification-code',

    // bing: 'your-bing-verification-code',

  },

};



export const viewport = {

  width: 'device-width',

  initialScale: 1,

  maximumScale: 5,

}



export default function RootLayout({ children }) {

  return (

    <html lang="en" className={inter.variable}>

      <head>

        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      </head>

      <body className="font-sans min-h-screen flex flex-col">

        {/* Skip to main content link for accessibility */}

        <a 

          href="#main-content" 

          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-teal-600 focus:text-white focus:px-4 focus:py-2 focus:rounded"

        >

          Skip to main content

        </a>

        

        <AuthProvider>

          <CartProvider>

            <VisitorTracker />

            <Toaster position="top-center" />

            <WhatsAppButton />

            <ConditionalNavbar>

              <Navbar />

            </ConditionalNavbar>

            <main id="main-content" className="flex-grow">{children}</main>

            <ConditionalNavbar>

              <Footer />

            </ConditionalNavbar>

          </CartProvider>

        </AuthProvider>



        {/* Add your analytics provider here */}

      </body>

    </html>

  );

}

