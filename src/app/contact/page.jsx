'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaEnvelope, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send form data to our API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      // Display success message
      toast.success(
        <div>
          <p>Message sent successfully! We'll get back to you soon.</p>
        </div>,
        { duration: 5000 }
      );
      
      console.log('Email sent successfully:', data.details);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast.error(error.message || 'Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <span>/</span>
          <span className="text-gray-300">Contact</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5 text-teal-400 text-sm font-medium mb-4">
            <FaEnvelope className="text-xs" />
            Get in Touch
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-3">Contact Us</h1>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Have a question or need assistance? Send us a message and we&apos;ll respond within 24-48 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Info panel */}
          <div className="bg-gray-900/60 border border-gray-700/50 rounded-2xl p-6 flex flex-col gap-6">
            <div>
              <h2 className="text-lg font-bold text-white mb-1">Contact Details</h2>
              <p className="text-gray-500 text-sm">Reach out through any channel below.</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-teal-400 text-xs" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Email</p>
                <a href="mailto:info@novachem.com" className="text-white text-sm font-medium hover:text-teal-400 transition-colors">
                  info@novachem.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                <FaWhatsapp className="text-green-400 text-xs" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">WhatsApp</p>
                <a href="https://wa.me/10000000000" target="_blank" rel="noopener noreferrer"
                  className="text-white text-sm font-medium hover:text-green-400 transition-colors">
                  +1 000 000 0000
                </a>
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-gray-700/50">
              <p className="text-gray-500 text-xs leading-relaxed">
                Response time: <span className="text-gray-300">24–48 business hours</span>
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2 bg-gray-900/60 border border-gray-700/50 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-5">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-1.5">Your Name</label>
                  <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required
                    placeholder="John Doe"
                    className="w-full bg-gray-800/60 border border-gray-700 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-600" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-1.5">Email Address</label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required
                    placeholder="your@email.com"
                    className="w-full bg-gray-800/60 border border-gray-700 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-600" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-gray-400 mb-1.5">Subject</label>
                <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} required
                  placeholder="How can we help?"
                  className="w-full bg-gray-800/60 border border-gray-700 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-600" />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-400 mb-1.5">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} required
                  placeholder="Tell us more about your inquiry..."
                  className="w-full bg-gray-800/60 border border-gray-700 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-600 resize-none" />
              </div>

              <button type="submit" disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-teal-900/30 text-sm">
                {isSubmitting ? (
                  <><div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white" /> Sending...</>
                ) : (
                  <><FaPaperPlane className="text-xs" /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Quick FAQ strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { q: 'What are your shipping times?', a: 'Orders are processed within 1-2 business days. Standard delivery takes 3-5 days; express options available.' },
            { q: 'Do you ship internationally?', a: 'Yes, to most countries worldwide. International delivery typically takes 7-14 business days.' },
            { q: 'What payment methods do you accept?', a: 'We accept bank transfers, cryptocurrency (Bitcoin, Ethereum), and other secure payment options.' },
            { q: 'What is your return policy?', a: 'Returns are accepted only for defective, damaged, or incorrect items within 48 hours of delivery.' },
          ].map((item, i) => (
            <div key={i} className="bg-gray-900/60 border border-gray-700/50 rounded-2xl p-5 hover:border-gray-600/50 transition-colors">
              <h3 className="text-sm font-semibold text-teal-400 mb-2">{item.q}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
