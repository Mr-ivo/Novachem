'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaTelegram, FaFlask } from 'react-icons/fa';
import { HiOutlineArrowRight as HiArrowRight } from 'react-icons/hi';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const footerLinks = {
  Shop: [
    { href: '/products', label: 'All Products' },
    { href: '/products?category=cannabinoids', label: 'Cannabinoids' },
    { href: '/products?category=opioids', label: 'Opioids' },
    { href: '/products?category=nitazenes', label: 'Nitazenes' },
    { href: '/products?category=etomidate', label: 'Etomidate' },
    { href: '/products?category=research%20chemicals', label: 'Research Chemicals' },
  ],
  Company: [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ' },
    { href: '/shipping', label: 'Shipping Info' },
  ],
  Legal: [
    { href: '/terms', label: 'Terms & Conditions' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/refund', label: 'Refund Policy' },
  ],
};

const socials = [
  { href: '#', icon: FaFacebook, label: 'Facebook' },
  { href: '#', icon: FaTwitter, label: 'Twitter' },
  { href: '#', icon: FaInstagram, label: 'Instagram' },
  { href: '#', icon: FaTelegram, label: 'Telegram' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('done');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 800);
  };

  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main footer grid */}
      <div className="relative container mx-auto px-4 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal-400 to-teal-700 group-hover:from-teal-300 transition-all" />
                <div className="absolute inset-0 rounded-xl flex items-center justify-center">
                  <FaFlask className="text-white" />
                </div>
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                Nova<span className="text-teal-400">Chem</span>
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium research chemicals sourced and verified for scientific excellence. Trusted by labs and researchers worldwide.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {['Lab Verified', 'Discreet Shipping', 'Secure Payment'].map((badge) => (
                <span key={badge} className="text-xs text-teal-400 border border-teal-800/60 bg-teal-950/50 px-3 py-1 rounded-full">
                  {badge}
                </span>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-800/60 hover:bg-teal-700/40 text-gray-400 hover:text-teal-300 border border-gray-700/40 hover:border-teal-600/40 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-2 grid grid-cols-3 gap-6">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">{section}</h4>
                <ul className="space-y-2.5">
                  {links.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-sm text-gray-400 hover:text-teal-400 transition-colors duration-150 hover:translate-x-0.5 inline-block"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter column */}
          <div className="lg:col-span-1 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500">Stay Updated</h4>
            <p className="text-sm text-gray-400">Get the latest products and research updates.</p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <label htmlFor="footer-email" className="sr-only">Email for newsletter</label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-gray-800/70 border border-gray-700/60 focus:border-teal-600/60 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-colors"
                />
              </div>
              <AnimatePresence mode="wait">
                {status === 'done' ? (
                  <motion.p
                    key="done"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-teal-400 text-xs font-medium py-2"
                  >
                    ✓ You're subscribed!
                  </motion.p>
                ) : (
                  <motion.button
                    key="btn"
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 disabled:opacity-60 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
                  >
                    {status === 'loading' ? (
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>Subscribe <HiArrowRight size={14} /></>
                    )}
                  </motion.button>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-gray-800/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} NovaChem. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs italic">
            All products are strictly for research &amp; laboratory use only.
          </p>
        </div>
      </div>
    </footer>
  );
}
