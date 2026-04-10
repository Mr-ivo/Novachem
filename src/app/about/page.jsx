'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FaFlask, FaShieldAlt, FaTruck, FaHeadset, FaClock, FaCheckCircle, FaMicroscope } from 'react-icons/fa';
import { HiOutlineArrowRight } from 'react-icons/hi';

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

const stats = [
  { value: '500+', label: 'Verified Compounds' },
  { value: '99.9%', label: 'Average Purity' },
  { value: '10K+', label: 'Researchers Served' },
  { value: '48h', label: 'Avg. Dispatch Time' },
];

const values = [
  {
    icon: FaFlask,
    title: 'Analytical Purity Standards',
    desc: 'Every compound in our catalog is independently verified by accredited laboratories. We provide full certificates of analysis so researchers can trust the quality of every order.',
  },
  {
    icon: FaShieldAlt,
    title: 'Discreet & Secure Delivery',
    desc: 'All orders are packaged discreetly with no external labelling. We use industry-standard encryption for all transactions and never share customer data with third parties.',
  },
  {
    icon: FaTruck,
    title: 'Reliable Worldwide Shipping',
    desc: 'We dispatch via Express and Standard courier services to most countries. Tracking information is provided on every shipment so you always know where your order is.',
  },
  {
    icon: FaHeadset,
    title: 'Dedicated Research Support',
    desc: 'Our team is available around the clock to answer product queries, assist with compound selection, and handle any post-order issues promptly and professionally.',
  },
  {
    icon: FaMicroscope,
    title: 'Continuously Expanding Catalog',
    desc: 'We regularly add newly available research-grade compounds and update quantities to meet the evolving demands of the scientific community.',
  },
  {
    icon: FaClock,
    title: 'Fast Dispute Resolution',
    desc: 'In the rare event of an issue with your order, our dedicated resolution team processes claims and refunds within 7 business days — no lengthy disputes.',
  },
];

const commitments = [
  'ISO-compliant storage and handling for all compounds',
  'Batch-specific certificates of analysis on every product',
  'No substitutions — you receive exactly what you order',
  'Secure, end-to-end encrypted checkout',
  'Discreet plain packaging on all shipments',
  'Responsive support with < 24h response time',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950">

      {/* Hero */}
      <div className="relative pt-28 pb-16 border-b border-gray-800/60 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_0%,rgba(13,148,136,0.08),transparent)] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-400">About</span>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-teal-400 mb-3">
              <FaCheckCircle className="text-teal-500 text-[10px]" /> About NovaChem
            </span>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4">
              The Trusted Source for<br />
              <span className="text-teal-400">Research-Grade Compounds</span>
            </h1>
            <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
              NovaChem supplies high-purity research chemicals to scientists, laboratory professionals, and academic researchers worldwide. Every compound we stock is analytically verified and accompanied by a full certificate of analysis.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-b border-gray-800/60 bg-gray-900/40">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ value, label }, i) => (
              <FadeUp key={label} delay={i * 0.07}>
                <div className="text-center">
                  <p className="text-3xl font-extrabold text-teal-400 leading-tight">{value}</p>
                  <p className="text-gray-500 text-sm mt-1">{label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* Mission + Who We Are */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <FadeUp>
            <div className="h-full bg-gray-900/60 border border-gray-700/50 rounded-2xl p-8 hover:border-teal-700/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-teal-900/50 flex items-center justify-center mb-5">
                <FaFlask className="text-teal-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed">
                NovaChem exists to make high-purity research chemicals consistently accessible to the scientific community. We focus on compound integrity, rigorous quality control, and reliable fulfilment — so researchers can focus entirely on their work, not on sourcing.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="h-full bg-gray-900/60 border border-gray-700/50 rounded-2xl p-8 hover:border-teal-700/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-teal-900/50 flex items-center justify-center mb-5">
                <FaMicroscope className="text-teal-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Who We Are</h2>
              <p className="text-gray-400 leading-relaxed">
                We are a team of chemistry professionals and logistics specialists committed to serving the global research community. Our catalog spans synthetic cannabinoids, opioids, nitazenes, etomidate and novel research compounds — all held to strict analytical standards before being offered for sale.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Values grid */}
        <FadeUp>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8 tracking-tight">
            Why Researchers Choose NovaChem
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {values.map(({ icon: Icon, title, desc }, i) => (
            <FadeUp key={title} delay={i * 0.07}>
              <div className="h-full bg-gray-900/60 border border-gray-700/50 rounded-2xl p-6 hover:border-teal-700/40 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-teal-900/50 flex items-center justify-center mb-4 group-hover:bg-teal-800/60 transition-colors">
                  <Icon className="text-teal-400 text-sm" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Commitments + CTA split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeUp>
            <div className="bg-gray-900/60 border border-gray-700/50 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-white mb-5">Our Quality Commitments</h2>
              <ul className="space-y-3">
                {commitments.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-400 text-sm">
                    <FaCheckCircle className="text-teal-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="h-full bg-gradient-to-br from-teal-900/30 to-gray-900 border border-teal-700/30 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Start Your Research with Confidence
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Browse our full catalog of verified research compounds. Each product listing includes compound specifications, purity grade, and availability — updated in real time.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/products"
                  className="group flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-teal-900/40"
                >
                  Browse Products
                  <HiOutlineArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 border border-gray-600 hover:border-teal-600 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}