'use client'

import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Calculator } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    surfaceType: '',
    lineType: '',
    size: '',
    location: '',
    timeframe: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Quote request sent! Our team will contact you within 2 hours.');
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-charcoal py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 road-stripe" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl text-white font-black mb-8">
              GET A <span className="text-road-yellow">QUOTE.</span>
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              <a href="tel:0800-LINEPRO" className="flex items-center text-road-yellow text-4xl md:text-6xl font-black font-display hover:text-white transition-colors">
                <Phone className="w-10 h-10 md:w-16 md:h-16 mr-4" />
                0800-LINEPRO
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-black mb-6">DIRECT CONTACT</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-charcoal p-3 text-road-yellow">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-display text-xl uppercase font-black">Email Us</div>
                      <div className="text-gray-600 text-lg">quotes@linepro.co.nz</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-charcoal p-3 text-road-yellow">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-display text-xl uppercase font-black">Main Depot</div>
                      <div className="text-gray-600 text-lg">123 Industrial Way, Penrose, Auckland</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal p-8 text-white skew-x-[-2deg]">
                <div className="skew-x-[2deg]">
                  <h3 className="text-3xl font-black text-road-yellow mb-4 flex items-center italic">
                    <Calculator className="mr-3" /> JOB ESTIMATOR
                  </h3>
                  <p className="text-gray-300 mb-6">
                    To give you the most accurate quote, please include the following details in your message:
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-sm font-display uppercase tracking-wider">
                    <li className="flex items-center"><div className="w-2 h-2 bg-road-yellow mr-2" /> Surface Type</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-road-yellow mr-2" /> Total Linear Meters</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-road-yellow mr-2" /> Line Color/Type</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-road-yellow mr-2" /> Site Location</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-100 p-8 md:p-12 rounded-lg border-l-8 border-road-yellow">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-display uppercase font-black text-sm mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 focus:border-road-yellow outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block font-display uppercase font-black text-sm mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 focus:border-road-yellow outline-none transition-colors"
                      placeholder="021 000 0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-display uppercase font-black text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 focus:border-road-yellow outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-display uppercase font-black text-sm mb-2">Surface Type</label>
                    <select className="w-full px-4 py-3 bg-white border-2 border-gray-200 focus:border-road-yellow outline-none transition-colors">
                      <option>Asphalt / Bitumen</option>
                      <option>Concrete</option>
                      <option>Chip Seal</option>
                      <option>Internal Warehouse Floor</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-display uppercase font-black text-sm mb-2">Job Location</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 focus:border-road-yellow outline-none transition-colors"
                      placeholder="City / Suburb"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-display uppercase font-black text-sm mb-2">Job Details</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 focus:border-road-yellow outline-none transition-colors"
                    placeholder="Tell us about the project size, line types, and timeframe..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-charcoal text-road-yellow py-4 font-display text-2xl font-black uppercase skew-x-[-6deg] hover:bg-road-yellow hover:text-charcoal transition-all flex justify-center items-center"
                >
                  <span className="skew-x-[6deg] flex items-center">
                    SEND QUOTE REQUEST <Send className="ml-3 w-6 h-6" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
