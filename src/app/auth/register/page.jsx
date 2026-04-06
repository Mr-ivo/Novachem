'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { useAuth } from '@/components/auth/AuthProvider';
import toast from 'react-hot-toast';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { register, isAuthenticated } = useAuth();
  const router = useRouter();

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate passwords match
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    
    // Validate password strength
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      const result = await register({ name, email, password });
      
      if (result.success) {
        toast.success('Registration successful!');
        router.push('/');
      } else {
        toast.error(result.message || 'Registration failed');
      }
    } catch (error) {
      toast.error('An error occurred during registration');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-extrabold text-white mt-3">Create an account</h1>
          <p className="text-gray-500 text-sm mt-1">Join NovaChem for premium research chemicals</p>
        </div>

        <div className="bg-gray-900/70 border border-gray-700/50 rounded-2xl p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-500 text-xs" />
                </div>
                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required
                  className="bg-gray-800/60 border border-gray-700 text-white rounded-xl py-3 px-4 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-600"
                  placeholder="John Doe" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-500 text-xs" />
                </div>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                  className="bg-gray-800/60 border border-gray-700 text-white rounded-xl py-3 px-4 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-600"
                  placeholder="your@email.com" />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-500 text-xs" />
                </div>
                <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
                  className="bg-gray-800/60 border border-gray-700 text-white rounded-xl py-3 px-4 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-600"
                  placeholder="Min. 6 characters" />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-500 text-xs" />
                </div>
                <input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required
                  className="bg-gray-800/60 border border-gray-700 text-white rounded-xl py-3 px-4 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-600"
                  placeholder="••••••••" />
              </div>
            </div>

            <button type="submit" disabled={loading}
              className="w-full bg-teal-600 hover:bg-teal-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5 shadow-lg shadow-teal-900/30 mt-2">
              {loading ? <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white" /> : 'Create Account'}
            </button>
          </form>

          <p className="text-gray-500 text-sm text-center mt-6">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-teal-400 hover:text-teal-300 font-medium">Sign in</Link>
          </p>
        </div>

        <p className="text-center text-xs text-gray-600 mt-6">
          By registering you agree to our{' '}
          <Link href="/terms" className="text-gray-500 hover:text-gray-400">Terms</Link> &amp; <Link href="/privacy" className="text-gray-500 hover:text-gray-400">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
}
