'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FaStar, FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '@/components/cart/CartProvider';
import ProtectedImage from '@/components/common/ProtectedImage';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function ProductDetailPage() {
  const gramOptions = [25, 50, 100, 500, 1000];
  const [selectedGrams, setSelectedGrams] = useState(25);

  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();


  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        
        // Try to determine if the slug is actually a MongoDB ID
        const isMongoId = /^[0-9a-fA-F]{24}$/.test(slug);
        
        // Choose the appropriate API endpoint based on the slug format
        const endpoint = isMongoId ? `/api/products/id/${slug}` : `/api/products/${slug}`;
        
        const { data } = await axios.get(endpoint);
        setProduct(data);
        
        // Set default selected variant if available
        if (data.priceVariants && data.priceVariants.length > 0) {
          setSelectedVariant(data.priceVariants[0]);
        }
      } catch (err) {
        console.error('Error fetching product:', err);
        setError(err.response?.data?.message || 'Failed to load product');
        toast.error('Failed to load product details');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  // Fixed pricing tiers
  const calculateEuroPrice = (grams) => {
    // Fixed prices for each gram option
    const pricingTiers = {
      25: 400,
      50: 550,
      100: 700,
      500: 1200,
      1000: 2100,
    };
    
    // Return the price for the selected gram amount
    const price = pricingTiers[grams] || 400;
    return Number(price).toFixed(2);
  };

  const handleAddToCart = () => {
    if (product) {
      // Calculate the euro price for the selected grams
      const euroPrice = parseFloat(calculateEuroPrice(selectedGrams));
      // Build a cart item variant object for grams
      const gramsVariant = {
        grams: selectedGrams,
        price: euroPrice,
      };
      addToCart(
        {
          ...product,
        },
        quantity,
        gramsVariant
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 pt-24 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-950 pt-24">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-white mb-3">Product Not Found</h1>
          <p className="text-gray-500 mb-6 text-sm">{error || 'The product you are looking for does not exist.'}</p>
          <Link href="/products" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm">
            <FaArrowLeft className="text-xs" /> Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-6xl py-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-gray-300">Products</Link>
          <span>/</span>
          <Link href={`/products?category=${product.category}`} className="hover:text-gray-300">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-300 truncate max-w-[200px]">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Images */}
          <div>
            <div className="relative h-80 md:h-[420px] w-full rounded-2xl overflow-hidden mb-3 bg-gray-900/60 border border-gray-700/50">
              {product.images && product.images.length > 0 ? (
                <ProtectedImage
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  No image
                </div>
              )}
            </div>

            {product.images && product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-16 w-16 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                      selectedImage === index ? 'border-teal-500' : 'border-gray-700/50 hover:border-gray-600'
                    }`}
                  >
                    <ProtectedImage src={image} alt={`${product.name} ${index + 1}`} fill sizes="64px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs px-3 py-1 rounded-full font-medium">
                {product.category}
              </span>
              <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                product.countInStock > 0
                  ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                  : 'bg-red-500/10 border border-red-500/20 text-red-400'
              }`}>
                {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <h1 className="text-3xl font-extrabold text-white mb-3 leading-tight">{product.name}</h1>

            {/* Stars */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-700'}`} />
                ))}
              </div>
              <span className="text-gray-500 text-sm">
                {product.numReviews} {product.numReviews === 1 ? 'review' : 'reviews'}
              </span>
            </div>

            {/* Gram selector — pill buttons */}
            <div className="mb-5">
              <p className="text-sm font-medium text-gray-400 mb-2">Select quantity</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {gramOptions.map(g => (
                  <button
                    key={g}
                    onClick={() => setSelectedGrams(g)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
                      selectedGrams === g
                        ? 'bg-teal-600 border-teal-600 text-white shadow-lg shadow-teal-900/30'
                        : 'bg-gray-900/60 border-gray-700/50 text-gray-400 hover:border-gray-600 hover:text-white'
                    }`}
                  >
                    {g}g
                  </button>
                ))}
              </div>
              <div className="text-2xl font-extrabold text-white">
                €{calculateEuroPrice(selectedGrams)}
                <span className="ml-2 text-sm text-gray-500 font-normal">for {selectedGrams}g</span>
              </div>
            </div>

            {/* Qty + Add to cart */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center bg-gray-900/60 border border-gray-700/50 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  disabled={quantity <= 1}
                  className="w-10 h-11 flex items-center justify-center text-white hover:bg-gray-800 disabled:opacity-40 transition-colors"
                >−</button>
                <input
                  type="number" min="1" value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-12 bg-transparent text-white text-center text-sm border-0 focus:outline-none h-11"
                />
                <button
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="w-10 h-11 flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                >+</button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={product.countInStock <= 0}
                className={`flex-1 py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-white font-semibold transition-all ${
                  product.countInStock > 0
                    ? 'bg-teal-600 hover:bg-teal-500 hover:-translate-y-0.5 shadow-lg shadow-teal-900/30'
                    : 'bg-gray-800 border border-gray-700 cursor-not-allowed opacity-60'
                }`}
              >
                <FaShoppingCart className="text-sm" />
                {product.countInStock > 0 ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>

            {/* Description */}
            <div className="bg-gray-900/60 border border-gray-700/50 rounded-2xl p-5">
              <h3 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Description</h3>
              <div className="text-gray-400 text-sm space-y-2 leading-relaxed">
                {product.description.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        {product.reviews && product.reviews.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-bold text-white mb-6">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.reviews.map((review) => (
                <div key={review._id} className="bg-gray-900/60 border border-gray-700/50 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-teal-600/20 border border-teal-600/30 rounded-full flex items-center justify-center text-teal-400 font-bold text-sm">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">{review.name}</p>
                        <p className="text-gray-600 text-xs">
                          {new Date(review.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-700'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
