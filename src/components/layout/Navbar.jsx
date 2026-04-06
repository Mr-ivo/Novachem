'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/components/auth/AuthProvider';
import { useCart } from '@/components/cart/CartProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart, FaUser, FaSearch, FaFlask, FaCannabis, FaPills, FaTimes } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const shopCategories = [
  { href: '/products?category=cannabinoids', label: 'Cannabinoids', icon: FaCannabis, desc: 'Synthetic & natural compounds' },
  { href: '/products?category=benzos', label: 'Benzos', icon: FaPills, desc: 'Benzodiazepine research' },
  { href: '/products?category=research%20chemicals', label: 'Research Chemicals', icon: FaFlask, desc: 'Specialized compounds' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mounted, setMounted] = useState(false);
  const searchRef = useRef(null);
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const { cart } = useCart();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsMenuOpen(false); setSearchOpen(false); }, [pathname]);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const cartItemsCount = cart ? cart.reduce((c, i) => c + i.quantity, 0) : 0;

  return (
    <>
      {/* Announcement Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-teal-600 text-white text-xs py-1.5 overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex whitespace-nowrap"
        >
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center gap-8 px-4">
              <span>⚗️ Premium Research Chemicals — Worldwide Shipping</span>
              <span>•</span>
              <span>🔬 Lab-Grade Purity Guaranteed</span>
              <span>•</span>
              <span>📦 Discreet &amp; Secure Packaging</span>
              <span>•</span>
              <span>✅ Trusted by Researchers Globally</span>
              <span>•</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Main Navbar */}
      <header className="fixed top-8 left-0 right-0 z-40 px-4 pt-3 transition-all duration-300">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`mx-auto max-w-6xl transition-all duration-500 ${
            isScrolled
              ? 'bg-gray-950/90 backdrop-blur-xl shadow-2xl shadow-black/60 border border-teal-900/40 rounded-2xl px-5 py-3'
              : 'bg-transparent px-2 py-3'
          }`}
        >
          <div className="flex items-center justify-between gap-4">

            {/* Logo */}
            <Link href="/" aria-label="NovaChem home" className="flex items-center gap-2.5 group shrink-0">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal-400 to-teal-700 opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 rounded-xl flex items-center justify-center">
                  <FaFlask className="text-white text-base" />
                </div>
              </div>
              <span className="text-lg font-extrabold tracking-tight text-white">
                Nova<span className="text-teal-400">Chem</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                    pathname === href ? 'text-teal-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {label}
                  {pathname === href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg bg-teal-500/10 border border-teal-500/20"
                    />
                  )}
                </Link>
              ))}

              {/* Shop Mega Dropdown */}
              <div className="relative group">
                <button
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                    pathname.startsWith('/products') ? 'text-teal-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Shop
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50">
                  <div className="bg-gray-900/98 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/60 border border-gray-700/50 p-3 overflow-hidden">
                    <p className="text-xs text-gray-500 uppercase tracking-widest px-3 py-2 font-semibold">Categories</p>
                    {shopCategories.map(({ href, label, icon: Icon, desc }) => (
                      <Link key={href} href={href} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-teal-900/30 group/item transition-all duration-150">
                        <div className="w-9 h-9 rounded-lg bg-teal-900/40 flex items-center justify-center shrink-0 group-hover/item:bg-teal-700/40 transition-colors">
                          <Icon className="text-teal-400 text-sm" />
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium group-hover/item:text-teal-300 transition-colors">{label}</p>
                          <p className="text-gray-500 text-xs">{desc}</p>
                        </div>
                      </Link>
                    ))}
                    <div className="mt-2 pt-2 border-t border-gray-800">
                      <Link href="/products" className="flex items-center justify-center gap-2 py-2 text-xs text-teal-400 hover:text-teal-300 font-medium transition-colors">
                        View all products →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Search Toggle */}
              <AnimatePresence mode="wait">
                {searchOpen ? (
                  <motion.form
                    key="search-form"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={handleSearch}
                    className="hidden md:flex items-center bg-gray-800/80 border border-gray-700 rounded-full overflow-hidden"
                  >
                    <input
                      ref={searchRef}
                      type="search"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent text-white text-sm py-2 px-4 outline-none w-full placeholder-gray-500"
                      aria-label="Search products"
                    />
                    <button type="button" onClick={() => setSearchOpen(false)} className="pr-3 text-gray-500 hover:text-white transition-colors">
                      <FaTimes size={12} />
                    </button>
                  </motion.form>
                ) : (
                  <motion.button
                    key="search-btn"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSearchOpen(true)}
                    className="hidden md:flex w-9 h-9 items-center justify-center rounded-lg text-gray-400 hover:text-teal-400 hover:bg-teal-900/20 transition-all"
                    aria-label="Open search"
                  >
                    <FaSearch size={15} />
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Cart */}
              <Link
                href="/cart"
                className="relative cart-icon w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-teal-400 hover:bg-teal-900/20 transition-all"
                aria-label={`Cart (${cartItemsCount} items)`}
              >
                <FaShoppingCart size={17} />
                {cartItemsCount > 0 && (
                  <motion.span
                    key={cartItemsCount}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-teal-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center"
                  >
                    {cartItemsCount}
                  </motion.span>
                )}
              </Link>

              {/* User */}
              {mounted && (
                user ? (
                  <div className="relative group hidden md:block">
                    <button className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-lg border border-gray-700/50 hover:border-teal-600/50 text-gray-300 hover:text-white transition-all text-sm">
                      <div className="w-6 h-6 rounded-full bg-teal-700 flex items-center justify-center text-white text-xs font-bold">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                      <span>{user.name.split(' ')[0]}</span>
                    </button>
                    <div className="absolute right-0 top-full mt-2 w-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-gray-900/98 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-700/50 py-1.5 z-50">
                      <Link href="/profile" className="block px-4 py-2.5 text-sm text-gray-300 hover:text-teal-400 hover:bg-teal-900/20 transition-colors">Profile</Link>
                      {user.isAdmin && (
                        <Link href="/admin" className="block px-4 py-2.5 text-sm text-gray-300 hover:text-teal-400 hover:bg-teal-900/20 transition-colors">Admin</Link>
                      )}
                      <div className="border-t border-gray-800 my-1" />
                      <button onClick={logout} className="block w-full text-left px-4 py-2.5 text-sm text-gray-400 hover:text-red-400 hover:bg-red-900/10 transition-colors">
                        Sign out
                      </button>
                    </div>
                  </div>
                ) : (
                  <Link
                    href="/auth/login"
                    className="hidden md:flex items-center gap-1.5 pl-3 pr-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold transition-all shadow-lg shadow-teal-900/40"
                  >
                    <FaUser size={12} />
                    Login
                  </Link>
                )
              )}

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-300 hover:text-teal-400 hover:bg-teal-900/20 transition-all"
                aria-label="Open menu"
              >
                <HiMenuAlt3 size={22} />
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Full-Screen Mobile Overlay */}
      {mounted && (
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] md:hidden"
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Slide-in Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="absolute right-0 top-0 bottom-0 w-4/5 max-w-xs bg-gray-950 border-l border-teal-900/30 flex flex-col"
              >
                {/* Panel Header */}
                <div className="flex items-center justify-between px-5 py-5 border-b border-gray-800">
                  <span className="text-white font-bold text-lg">Nova<span className="text-teal-400">Chem</span></span>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all"
                    aria-label="Close menu"
                  >
                    <FaTimes size={18} />
                  </button>
                </div>

                {/* Search */}
                <form onSubmit={handleSearch} className="px-5 pt-4">
                  <div className="flex items-center gap-2 bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-2.5">
                    <FaSearch className="text-gray-500 text-sm shrink-0" />
                    <input
                      type="search"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent text-white text-sm outline-none w-full placeholder-gray-500"
                      aria-label="Search"
                    />
                  </div>
                </form>

                {/* Nav Links */}
                <nav className="flex-1 overflow-y-auto px-5 py-4 space-y-1">
                  {navLinks.map(({ href, label }, i) => (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                    >
                      <Link
                        href={href}
                        className={`flex items-center py-3 px-4 rounded-xl text-base font-medium transition-all ${
                          pathname === href
                            ? 'bg-teal-900/30 text-teal-400 border border-teal-700/30'
                            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                        }`}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold px-4 pt-4 pb-2">Shop</p>
                    {shopCategories.map(({ href, label, icon: Icon }, i) => (
                      <motion.div
                        key={href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 + 0.25 }}
                      >
                        <Link
                          href={href}
                          className="flex items-center gap-3 py-3 px-4 rounded-xl text-gray-300 hover:bg-gray-800 hover:text-white transition-all"
                        >
                          <Icon className="text-teal-500 text-sm" />
                          <span className="text-sm font-medium">{label}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </nav>

                {/* Bottom auth area */}
                <div className="px-5 pb-8 pt-4 border-t border-gray-800 space-y-3">
                  <Link href="/cart" className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-gray-800/60 text-gray-300 hover:text-white transition-all">
                    <span className="flex items-center gap-2 text-sm font-medium"><FaShoppingCart size={15} /> Cart</span>
                    {cartItemsCount > 0 && <span className="bg-teal-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">{cartItemsCount}</span>}
                  </Link>
                  {user ? (
                    <>
                      <Link href="/profile" className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-800/60 text-gray-300 hover:text-white text-sm font-medium transition-all">
                        <FaUser size={14} /> Profile
                      </Link>
                      <button onClick={logout} className="w-full px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-900/20 transition-all text-left">
                        Sign out
                      </button>
                    </>
                  ) : (
                    <Link href="/auth/login" className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold transition-all">
                      <FaUser size={13} /> Login / Register
                    </Link>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
