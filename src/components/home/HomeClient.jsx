'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { FaFlask, FaCannabis, FaPills, FaSyringe, FaVial, FaShoppingCart, FaStar, FaShieldAlt, FaTruck, FaCheckCircle, FaQuoteLeft } from 'react-icons/fa';
import { HiOutlineArrowRight as HiArrowRight } from 'react-icons/hi';
import { motion, useInView } from 'framer-motion';
import { useCart } from '@/components/cart/CartProvider';
import SEOKeywords from '@/components/seo/SEOKeywords';
import HeroCarousel from '@/components/home/HeroCarousel';

export default function HomeClient({ featuredProducts = [] }) {
  return (
    <div className="min-h-screen bg-gray-950">
      <SEOKeywords />
      <HeroCarousel />
      <CategoriesSection />
      <FeaturedProductsSection products={featuredProducts} />
      <TestimonialsSection />
      <CallToAction />
    </div>
  );
}

// Helper: fade-up on scroll
function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

// Section label component
function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-teal-400 mb-3">
      <FaStar className="text-teal-500 text-[10px]" />
      {children}
    </span>
  );
}

// Categories Section
function CategoriesSection() {
  const categories = [
    {
      href: '/products?category=cannabinoids',
      icon: FaCannabis,
      title: 'Cannabinoids',
      desc: 'Synthetic & natural cannabinoid compounds for cutting-edge research.',
      count: '50+ Products',
      span: 'lg:col-span-2',
      featured: true,
    },
    {
      href: '/products?category=opioids',
      icon: FaPills,
      title: 'Opioids',
      desc: 'Opioid research compounds for laboratory analysis.',
      count: '20+ Products',
      span: '',
      featured: false,
    },
    {
      href: '/products?category=nitazenes',
      icon: FaSyringe,
      title: 'Nitazenes',
      desc: 'High-purity nitazene compounds for scientific research.',
      count: '20+ Products',
      span: '',
      featured: false,
    },
    {
      href: '/products?category=etomidate',
      icon: FaVial,
      title: 'Etomidate',
      desc: 'Laboratory-grade etomidate compounds.',
      count: '10+ Products',
      span: '',
      featured: false,
    },
    {
      href: '/products?category=research%20chemicals',
      icon: FaFlask,
      title: 'Research Chemicals',
      desc: 'Specialized compounds for scientific applications.',
      count: '100+ Products',
      span: '',
      featured: false,
    },
  ];

  return (
    <section className="py-20 bg-gray-950 border-t border-gray-800/40">
      <div className="container mx-auto px-6">
        <FadeUp>
          <SectionLabel>Categories</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">
            Shop by Category
          </h2>
          <p className="text-gray-500 mb-10 max-w-lg">Browse our curated product lines, each rigorously tested for purity and consistency.</p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map(({ href, icon: Icon, title, desc, count, span, featured }, i) => (
            <FadeUp key={title} delay={i * 0.08}>
              <Link
                href={href}
                className={`group relative flex flex-col justify-between h-full min-h-[200px] rounded-2xl border p-6 overflow-hidden transition-all duration-300 ${
                  featured
                    ? 'bg-gradient-to-br from-teal-900/50 to-gray-900 border-teal-700/40 hover:border-teal-500/60 hover:shadow-xl hover:shadow-teal-900/40 md:col-span-2 lg:col-span-2'
                    : 'bg-gray-900/60 border-gray-700/40 hover:border-teal-700/50 hover:bg-gray-900/80'
                }`}
              >
                {/* Ambient glow for featured */}
                {featured && (
                  <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
                )}

                <div>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    featured ? 'bg-teal-600/30 group-hover:bg-teal-600/50' : 'bg-gray-800 group-hover:bg-teal-900/40'
                  }`}>
                    <Icon className={`text-xl ${featured ? 'text-teal-300' : 'text-teal-500'}`} />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>

                <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-700/40">
                  <span className="text-xs text-gray-500 font-medium">{count}</span>
                  <span className="flex items-center gap-1 text-teal-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    Explore <HiArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}

          {/* View All card */}
          <FadeUp delay={0.28}>
            <Link
              href="/products"
              className="group flex flex-col items-center justify-center h-full min-h-[200px] rounded-2xl border border-dashed border-gray-700/60 hover:border-teal-600/50 bg-transparent hover:bg-teal-950/20 transition-all duration-300 p-6 text-center"
            >
              <div className="w-11 h-11 rounded-xl bg-gray-800/60 flex items-center justify-center mb-3 group-hover:bg-teal-900/40 transition-colors">
                <HiArrowRight className="text-gray-400 group-hover:text-teal-400 transition-colors text-xl" />
              </div>
              <p className="text-gray-400 group-hover:text-white font-semibold text-sm transition-colors">View All</p>
              <p className="text-gray-600 text-xs mt-1">500+ products</p>
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// Featured Products Section
function FeaturedProductsSection({ products = [] }) {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState(null);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setAddedId(product._id);
    setTimeout(() => setAddedId(null), 1800);

    const button = e.currentTarget;
    const buttonRect = button.getBoundingClientRect();
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
      const cartRect = cartIcon.getBoundingClientRect();
      const dot = document.createElement('div');
      dot.style.cssText = `position:fixed;z-index:9999;width:12px;height:12px;border-radius:50%;background:#14b8a6;pointer-events:none;transition:transform 0.65s cubic-bezier(0.4,0,1,1),opacity 0.65s ease;top:${buttonRect.top + buttonRect.height / 2}px;left:${buttonRect.left + buttonRect.width / 2}px;`;
      document.body.appendChild(dot);
      requestAnimationFrame(() => {
        dot.style.transform = `translate(${cartRect.left - buttonRect.left}px, ${cartRect.top - buttonRect.top}px) scale(0.3)`;
        dot.style.opacity = '0';
      });
      setTimeout(() => {
        dot.remove();
        cartIcon.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.35)' }, { transform: 'scale(1)' }], { duration: 300, easing: 'ease-in-out' });
      }, 680);
    }
  };

  const StarRow = ({ rating = 0, reviews = 0 }) => (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((n) => (
          <FaStar key={n} className={`text-xs ${n <= Math.round(rating) ? 'text-yellow-400' : 'text-gray-700'}`} />
        ))}
      </div>
      <span className="text-gray-600 text-xs">({reviews})</span>
    </div>
  );

  return (
    <section className="py-20 bg-black/40 border-t border-gray-800/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <FadeUp>
            <SectionLabel>Products</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Featured Products
            </h2>
            <p className="text-gray-500 mt-2 max-w-md">Hand-picked high-purity compounds trusted by researchers worldwide.</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Link
              href="/products"
              className="flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm font-semibold transition-colors"
            >
              View all products <HiArrowRight size={14} />
            </Link>
          </FadeUp>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product, i) => (
              <FadeUp key={product._id} delay={i * 0.07}>
                <motion.div
                  className="group relative bg-gray-900/70 border border-gray-800/60 rounded-2xl overflow-hidden flex flex-col h-full hover:border-teal-700/50 hover:shadow-2xl hover:shadow-teal-950/40 transition-all duration-300"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Out of stock overlay badge */}
                  {product.countInStock <= 0 && (
                    <div className="absolute top-3 right-3 z-10 bg-red-500/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                      Out of Stock
                    </div>
                  )}

                  {/* Image */}
                  <Link href={`/products/${product.slug}`} className="relative block h-44 bg-gray-800/60 overflow-hidden">
                    {product.images?.[0] ? (
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <FaFlask className="text-gray-600 text-3xl" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <span className="text-white text-xs font-semibold bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">View Details</span>
                    </div>
                  </Link>

                  {/* Info */}
                  <div className="p-4 flex flex-col flex-1">
                    <span className="text-teal-500 text-[11px] font-bold uppercase tracking-widest mb-1">{product.category}</span>
                    <Link href={`/products/${product.slug}`} className="block mb-2">
                      <h3 className="text-white font-semibold text-base leading-snug hover:text-teal-400 transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                    </Link>
                    <StarRow rating={product.rating} reviews={product.numReviews} />
                    <p className="text-gray-500 text-xs mt-2 mb-4 line-clamp-2 leading-relaxed">{product.description}</p>

                    <div className="mt-auto flex items-center justify-between gap-3">
                      <div>
                        <p className="text-white font-bold text-lg leading-none">
                          €{typeof product.price === 'number' ? product.price.toFixed(2) : '0.00'}
                        </p>
                        <p className={`text-xs mt-0.5 ${product.countInStock > 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                          {product.countInStock > 0 ? `In stock` : 'Out of stock'}
                        </p>
                      </div>
                      {product.countInStock > 0 ? (
                        <motion.button
                          onClick={(e) => handleAddToCart(e, product)}
                          whileTap={{ scale: 0.95 }}
                          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                            addedId === product._id
                              ? 'bg-emerald-600 text-white'
                              : 'bg-teal-600 hover:bg-teal-500 text-white'
                          }`}
                        >
                          {addedId === product._id ? (
                            <><FaCheckCircle size={13} /> Added</>
                          ) : (
                            <><FaShoppingCart size={13} /> Add</>
                          )}
                        </motion.button>
                      ) : (
                        <button disabled className="px-4 py-2 rounded-xl text-sm font-semibold bg-gray-800 text-gray-600 cursor-not-allowed">
                          Sold Out
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-600">
            <FaFlask className="text-4xl mx-auto mb-3 opacity-30" />
            <p>No featured products available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}

// Testimonials Section — infinite scrolling marquee
const testimonials = [
  { text: "NovaChem's quality is unmatched. Their cannabinoids have been instrumental in our research.", author: "Dr. J. Smith", role: "Research Scientist" },
  { text: "Fast shipping, excellent service. Purity consistently exceeds our expectations every time.", author: "L. Johnson", role: "Laboratory Director" },
  { text: "We rely on NovaChem for all research chemical needs. Their quality control is impressive.", author: "M. Williams", role: "Chemical Analyst" },
  { text: "Their compounds significantly accelerated our development process. Consistently high quality.", author: "Dr. A. Rodriguez", role: "Pharmaceutical Researcher" },
  { text: "Exceptional results every order. NovaChem is our trusted supplier for all laboratory needs.", author: "K. Chen", role: "Lab Manager" },
  { text: "The opioid research compounds are top-tier. Certificate of analysis always provided — very professional.", author: "T. Okafor", role: "Independent Researcher" },
];

function TestimonialCard({ text, author, role }) {
  return (
    <div className="flex-shrink-0 w-80 bg-gray-900/70 border border-gray-700/50 rounded-2xl p-5 mx-3">
      <div className="flex gap-0.5 mb-3">
        {[1,2,3,4,5].map(n => <FaStar key={n} className="text-yellow-400 text-xs" />)}
      </div>
      <FaQuoteLeft className="text-teal-800 text-xl mb-2" />
      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">{text}</p>
      <div className="flex items-center gap-2.5 pt-3 border-t border-gray-800">
        <div className="w-8 h-8 rounded-full bg-teal-700/50 flex items-center justify-center text-teal-300 font-bold text-sm shrink-0">
          {author.charAt(0)}
        </div>
        <div>
          <p className="text-white text-sm font-semibold leading-tight">{author}</p>
          <p className="text-teal-500 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-950 border-t border-gray-800/40 overflow-hidden">
      <div className="container mx-auto px-6 mb-10">
        <FadeUp>
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            What Researchers Say
          </h2>
          <p className="text-gray-500 mt-2">Trusted by scientists, labs and researchers worldwide.</p>
        </FadeUp>
      </div>

      {/* Marquee track 1 */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </motion.div>
      </div>

      {/* Marquee track 2 — reversed */}
      <div className="relative mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Call to Action Section — split layout
function CallToAction() {
  const features = [
    { icon: FaShieldAlt, text: 'Lab-verified purity certificates' },
    { icon: FaTruck, text: 'Discreet worldwide shipping' },
    { icon: FaCheckCircle, text: 'Secure & encrypted checkout' },
    { icon: FaStar, text: '10,000+ satisfied researchers' },
  ];

  return (
    <section className="py-20 bg-black/50 border-t border-gray-800/40 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_80%_50%,rgba(13,148,136,0.08),transparent)] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <FadeUp>
            <SectionLabel>Get Started</SectionLabel>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
              Ready to Elevate<br />
              <span className="text-teal-400">Your Research?</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
              Join thousands of scientists and labs who trust NovaChem for premium-grade compounds — reliably sourced and discreetly delivered.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/products"
                className="group flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-teal-900/40 hover:-translate-y-0.5"
              >
                Browse Products
                <HiArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 border border-gray-700 hover:border-teal-600 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 hover:bg-teal-950/30"
              >
                Contact Us
              </Link>
            </div>
          </FadeUp>

          {/* Right — feature list */}
          <FadeUp delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 bg-gray-900/60 border border-gray-700/50 rounded-2xl p-4 hover:border-teal-700/40 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-teal-900/50 flex items-center justify-center shrink-0">
                    <Icon className="text-teal-400 text-sm" />
                  </div>
                  <p className="text-gray-300 text-sm font-medium leading-snug mt-1">{text}</p>
                </motion.div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
