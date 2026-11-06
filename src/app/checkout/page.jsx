'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/components/auth/AuthProvider';
import { useCart } from '@/components/cart/CartProvider';
import OrderSummary from '@/components/checkout/OrderSummary';
import { FaLock, FaWhatsapp } from 'react-icons/fa';

export default function CheckoutPage() {
  const { loading: authLoading } = useAuth();
  const { cart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState({
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0
  });
  const [buyerInfo, setBuyerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const handleBuyerChange = (e) => {
    setBuyerInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    // Process cart items
    const processCart = async () => {
      try {
        if (cart.length === 0) {
          // Redirect to cart if empty
          router.push('/cart');
          return;
        }
        
        // Calculate order details
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = 50; // Flat shipping fee
        const tax = subtotal * 0.07; // 7% tax
        const total = subtotal + shipping + tax;
        
        setOrderDetails({
          subtotal,
          shipping,
          tax,
          total
        });
      } catch (error) {
        console.error('Error processing checkout:', error);
      } finally {
        setLoading(false);
      }
    };
    
    if (!authLoading) {
      processCart();
    }
  }, [authLoading, router, cart]);

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gray-950 pt-24 flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-teal-500" />
      </div>
    );
  }

  const whatsappNumber = '19852913802';
  const orderLines = cart.map((item) => {
    const variantLabel = item.variant
      ? (item.variant.label || (item.variant.grams ? `${item.variant.grams}g` : item.variant.quantity ? `${item.variant.quantity}g` : ''))
      : '';
    return `• ${item.quantity}× ${item.name}${variantLabel ? ` (${variantLabel})` : ''} — €${(item.price * item.quantity).toFixed(2)}`;
  }).join('\n');
  const whatsappMessage = [
    '*NEW ORDER — NovaChem*',
    'novachemsite.com',
    '',
    '*Customer Details*',
    `Name: ${buyerInfo.name}`,
    `Email: ${buyerInfo.email}`,
    `Phone: ${buyerInfo.phone || '-'}`,
    `Address: ${buyerInfo.address}`,
    `City: ${buyerInfo.city}`,
    `Postal Code: ${buyerInfo.postalCode || '-'}`,
    `Country: ${buyerInfo.country}`,
    '',
    '*Order Items*',
    orderLines,
    '',
    `Subtotal: €${orderDetails.subtotal.toFixed(2)}`,
    `Shipping: €${orderDetails.shipping.toFixed(2)}`,
    `Tax: €${orderDetails.tax.toFixed(2)}`,
    `*Total: €${orderDetails.total.toFixed(2)}*`,
    '',
    'Payment method: Bitcoin (BTC)',
  ].join('\n');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const inputClass = 'bg-gray-800/60 border border-gray-700 text-white rounded-xl py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-600 text-sm';
  const labelClass = 'block text-xs font-medium text-gray-400 mb-1.5';

  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumb + secure badge */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <span>/</span>
            <Link href="/cart" className="hover:text-gray-300">Cart</Link>
            <span>/</span>
            <span className="text-gray-300">Checkout</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-green-400 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
            <FaLock className="text-xs" />
            Secure Checkout
          </div>
        </div>

        <h1 className="text-3xl font-extrabold text-white mb-8">Complete Your Order</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Steps */}
          <div className="lg:col-span-2 space-y-4">
            {/* Buyer details + WhatsApp order */}
            <form onSubmit={handlePlaceOrder} className="bg-gray-900/60 border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-white font-semibold text-sm mb-1">Your Details</h3>
              <p className="text-gray-500 text-xs mb-5">Fill in your information — it will be included in the WhatsApp order message.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className={labelClass}>Full Name</label>
                  <input name="name" type="text" required value={buyerInfo.name} onChange={handleBuyerChange}
                    placeholder="John Doe" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Email Address</label>
                  <input name="email" type="email" required value={buyerInfo.email} onChange={handleBuyerChange}
                    placeholder="john@example.com" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input name="phone" type="tel" value={buyerInfo.phone} onChange={handleBuyerChange}
                    placeholder="+1 234 567 8900" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Country</label>
                  <input name="country" type="text" required value={buyerInfo.country} onChange={handleBuyerChange}
                    placeholder="United States" className={inputClass} />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>Street Address</label>
                  <input name="address" type="text" required value={buyerInfo.address} onChange={handleBuyerChange}
                    placeholder="123 Main Street" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>City</label>
                  <input name="city" type="text" required value={buyerInfo.city} onChange={handleBuyerChange}
                    placeholder="New York" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Postal Code</label>
                  <input name="postalCode" type="text" value={buyerInfo.postalCode} onChange={handleBuyerChange}
                    placeholder="10001" className={inputClass} />
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5 text-center">
                <FaWhatsapp className="text-green-400 text-2xl mx-auto mb-2" />
                <p className="text-gray-400 text-xs mb-4">Your order details will be sent to us automatically on WhatsApp.</p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-8 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-green-900/30 w-full sm:w-auto"
                >
                  <FaWhatsapp className="text-lg" />
                  Place Order on WhatsApp — €{orderDetails.total.toFixed(2)}
                </button>
                <p className="text-gray-600 text-xs mt-3">Payment method: Bitcoin (BTC) only</p>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <OrderSummary cartItems={cart} orderDetails={orderDetails} />

            <div className="bg-gray-900/60 border border-gray-700/50 rounded-2xl p-5">
              <h3 className="text-sm font-semibold text-white mb-3">Need help?</h3>
              <p className="text-gray-500 text-xs mb-4 leading-relaxed">
                Questions about your order or Bitcoin payment? Message us on WhatsApp.
              </p>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-sm font-medium transition-colors">
                <FaWhatsapp /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
