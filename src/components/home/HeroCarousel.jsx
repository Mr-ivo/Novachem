'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaFlask, FaCannabis, FaPills, FaShieldAlt, FaTruck, FaStar } from 'react-icons/fa';
import { HiChevronDown } from 'react-icons/hi';

const highlights = ['Cannabinoids', 'Benzodiazepines', 'Research Chemicals', 'Nitazenes'];

const floatingCards = [
  { icon: FaCannabis, label: 'Cannabinoids', count: '50+ products', color: 'from-teal-900/80 to-teal-800/60', border: 'border-teal-700/40' },
  { icon: FaPills, label: 'Benzos', count: '30+ compounds', color: 'from-cyan-900/80 to-cyan-800/60', border: 'border-cyan-700/40' },
  { icon: FaFlask, label: 'Research Chemicals', count: '100+ items', color: 'from-emerald-900/80 to-emerald-800/60', border: 'border-emerald-700/40' },
];

const stats = [
  { value: '500+', label: 'Products' },
  { value: '10K+', label: 'Researchers' },
  { value: '99.9%', label: 'Purity' },
  { value: '48h', label: 'Dispatch' },
];

export default function HeroCarousel() {
  const [highlightIdx, setHighlightIdx] = useState(0);
  const [gridOffset, setGridOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const t = setInterval(() => setHighlightIdx(i => (i + 1) % highlights.length), 2500);
    return () => clearInterval(t);
  }, []);

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    setGridOffset({
      x: (clientX / width - 0.5) * 20,
      y: (clientY / height - 0.5) * 20,
    });
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-gray-950 pt-24"
      onMouseMove={handleMouseMove}
    >

      {/* Mesh grid background — parallax via CSS transform */}
      <div
        className="absolute inset-[-10%] pointer-events-none transition-transform duration-[1200ms] ease-out"
        style={{
          transform: `translate(${gridOffset.x}px, ${gridOffset.y}px)`,
          backgroundImage: `
            linear-gradient(rgba(13,148,136,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13,148,136,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_50%,rgba(13,148,136,0.12),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_20%_60%,rgba(13,148,136,0.08),transparent)] pointer-events-none" />

      {/* Decorative animated orbs (replaces molecule animation) */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-teal-600/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-cyan-600/8 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/6 w-32 h-32 rounded-full bg-emerald-600/10 blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-80px)]">

          {/* LEFT — Text content */}
          <div className="py-12 lg:py-20">

            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-teal-900/40 border border-teal-700/40 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-teal-300 text-xs font-semibold tracking-wide uppercase">Trusted Research Supplier</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4"
            >
              Premium
              <br />
              <span className="relative inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={highlightIdx}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                    className="text-teal-400"
                  >
                    {highlights[highlightIdx]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              for Research
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-gray-400 text-lg leading-relaxed max-w-md mb-8"
            >
              High-purity compounds rigorously verified for lab-grade research. Worldwide discreet shipping.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link
                href="/products"
                className="group flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-teal-900/50 hover:shadow-teal-700/40 hover:-translate-y-0.5"
              >
                Shop Now
                <FaArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 border border-gray-600 hover:border-teal-600 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 hover:bg-teal-900/20"
              >
                Our Standards
              </Link>
            </motion.div>

            {/* Trust icons row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { icon: FaShieldAlt, text: 'Lab Verified' },
                { icon: FaTruck, text: 'Discreet Shipping' },
                { icon: FaStar, text: '5-Star Rated' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-gray-500 text-sm">
                  <Icon className="text-teal-600 text-xs" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Visual cards */}
          <div className="hidden lg:flex flex-col justify-center gap-4 py-20">

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-4 gap-3 mb-2"
            >
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="bg-gray-900/60 border border-gray-700/40 rounded-xl p-3 text-center backdrop-blur-sm"
                >
                  <p className="text-teal-400 font-bold text-lg leading-tight">{value}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Floating category cards */}
            {floatingCards.map(({ icon: Icon, label, count, color, border }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                whileHover={{ x: -6, transition: { duration: 0.2 } }}
              >
                <Link
                  href={`/products?category=${label.toLowerCase().replace(' ', '%20')}`}
                  className={`flex items-center gap-4 bg-gradient-to-r ${color} border ${border} rounded-2xl px-5 py-4 backdrop-blur-sm hover:border-teal-500/50 transition-all group`}
                >
                  <div className="w-10 h-10 rounded-xl bg-black/30 flex items-center justify-center shrink-0">
                    <Icon className="text-teal-400 text-lg" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm">{label}</p>
                    <p className="text-gray-400 text-xs">{count}</p>
                  </div>
                  <FaArrowRight className="text-gray-600 group-hover:text-teal-400 group-hover:translate-x-1 transition-all text-sm" />
                </Link>
              </motion.div>
            ))}

            {/* Bottom CTA card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.88 }}
              className="bg-gradient-to-r from-teal-700/30 to-teal-600/20 border border-teal-600/30 rounded-2xl px-5 py-4 flex items-center justify-between"
            >
              <p className="text-gray-300 text-sm font-medium">Need help choosing?</p>
              <Link href="/contact" className="text-teal-400 hover:text-teal-300 text-sm font-semibold flex items-center gap-1 transition-colors">
                Contact us <FaArrowRight size={11} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <HiChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
