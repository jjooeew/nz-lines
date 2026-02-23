'use client'

import { ArrowRight, CheckCircle2, Shield, Truck, Clock, Map, ChevronRight, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Home() {
  const stats = [
    { label: '10+ YEARS', sub: 'EXPERIENCE' },
    { label: 'NZ-WIDE', sub: 'SERVICE' },
    { label: '24/7', sub: 'AVAILABLE' },
  ];

  const services = [
    {
      title: 'ROAD MARKING',
      desc: 'High-visibility thermal and cold-applied markings for highways and local roads.',
      icon: <Map className="w-12 h-12" />,
      img: 'https://picsum.photos/seed/road1/800/600'
    },
    {
      title: 'CARPARK PAINTING',
      desc: 'Precision layout and painting for commercial and retail parking facilities.',
      icon: <CheckCircle2 className="w-12 h-12" />,
      img: 'https://picsum.photos/seed/carpark/800/600'
    },
    {
      title: 'WAREHOUSE SAFETY',
      desc: 'Internal safety walkways, forklift zones, and hazard markings.',
      icon: <Shield className="w-12 h-12" />,
      img: 'https://picsum.photos/seed/warehouse/800/600'
    },
  ];

  return (
    <div>
      <Navbar />
<div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/roadwork/1920/1080?grayscale"
            className="w-full h-full object-cover opacity-40"
            alt="Road painting crew"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block bg-road-yellow text-charcoal px-4 py-1 font-display text-xl font-black uppercase mb-6 skew-x-[-12deg]">
              <span className="skew-x-[12deg] block">NZ'S LINE MARKING SPECIALISTS</span>
            </div>
            <h1 className="text-6xl md:text-8xl text-white font-black leading-[0.9] mb-8">
              PRECISION <span className="text-road-yellow">ON THE LINE.</span><br/>
              SAFETY ON THE ROAD.
            </h1>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="bg-road-yellow text-charcoal px-8 py-4 font-display text-2xl font-black uppercase skew-x-[-12deg] hover:bg-white transition-all flex items-center group"
              >
                <span className="skew-x-[12deg] flex items-center">
                  REQUEST QUOTE
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <a
                href="tel:0800-LINEPRO"
                className="border-4 border-white text-white px-8 py-4 font-display text-2xl font-black uppercase skew-x-[-12deg] hover:bg-white hover:text-charcoal transition-all"
              >
                <span className="skew-x-[12deg] block">CALL NOW</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Overlay */}
        <div className="absolute bottom-0 right-0 hidden lg:flex bg-road-yellow skew-x-[-12deg] translate-x-10 p-8 z-20">
          <div className="skew-x-[12deg] flex space-x-12 pr-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-charcoal">
                <div className="text-5xl font-black font-display leading-none">{stat.label}</div>
                <div className="text-sm font-bold uppercase tracking-widest">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black mb-4">OUR SERVICES</h2>
              <div className="h-2 w-32 bg-road-yellow mb-6" />
              <p className="text-xl text-gray-600">
                From high-speed motorways to industrial warehouses, we deliver markings that last.
              </p>
            </div>
            <Link href="#" className="hidden md:flex items-center text-charcoal font-display text-xl font-black uppercase hover:text-road-yellow transition-colors mt-8 md:mt-0">
              VIEW ALL SERVICES <ChevronRight className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden bg-charcoal aspect-[4/5]"
              >
                <img
                  src={service.img}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                  alt={service.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 p-8 w-full">
                  <div className="text-road-yellow mb-4">{service.icon}</div>
                  <h3 className="text-3xl text-white font-black mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.desc}
                  </p>
                  <Link href="#" className="inline-flex items-center text-road-yellow font-display text-lg font-black uppercase">
                    ENQUIRE <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Traffic Management Callout */}
      <section className="bg-charcoal py-20 relative overflow-hidden diagonal-cut-both">
        <div className="absolute inset-0 opacity-10 road-stripe" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <img
                  src="https://picsum.photos/seed/traffic/800/600"
                  className="rounded-lg shadow-2xl skew-x-[-3deg]"
                  alt="Traffic management"
                />
                <div className="absolute -bottom-6 -right-6 bg-road-yellow p-8 hidden md:block">
                  <Truck className="w-12 h-12 text-charcoal" />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-5xl md:text-6xl text-white font-black mb-6">
                WE HANDLE THE <span className="text-road-yellow">TRAFFIC.</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't worry about the cones. We provide full traffic management services for every job, ensuring safety for our crew and the public. STMS qualified and ready.
              </p>
              <ul className="space-y-4 mb-10">
                {['Full STMS Site Setup', 'TMP Planning & Approval', 'Night Work Specialists', 'Safety First Approach'].map((item) => (
                  <li key={item} className="flex items-center text-white font-display text-xl uppercase italic">
                    <CheckCircle2 className="text-road-yellow mr-3" /> {item}
                  </li>
                ))}
              </ul>
              <Link
                href="#"
                className="inline-block bg-white text-charcoal px-8 py-3 font-display text-xl font-black uppercase skew-x-[-12deg] hover:bg-road-yellow transition-all"
              >
                <span className="skew-x-[12deg] block">LEARN ABOUT SAFETY</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section (Simplified Slider) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4">THE RESULTS</h2>
          <p className="text-xl text-gray-600">See the difference professional line marking makes.</p>
        </div>
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img src="https://picsum.photos/seed/before/800/600?grayscale" className="w-full h-full object-cover" alt="Before" />
                <div className="absolute top-4 left-4 bg-charcoal text-white px-3 py-1 font-display uppercase">BEFORE</div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img src="https://picsum.photos/seed/after/800/600" className="w-full h-full object-cover" alt="After" />
                <div className="absolute top-4 left-4 bg-road-yellow text-charcoal px-3 py-1 font-display uppercase font-black">AFTER</div>
              </div>
            </div>
            <div className="flex flex-col justify-center bg-charcoal p-12 text-white skew-x-[-2deg]">
              <div className="skew-x-[2deg]">
                <h3 className="text-4xl font-black text-road-yellow mb-6 italic">"TRANSFORMED OUR FACILITY"</h3>
                <p className="text-xl text-gray-300 mb-8">
                  "The team at LinePro completely overhauled our warehouse layout. The new safety markings have significantly improved our operational flow and safety compliance."
                </p>
                <div className="flex items-center">
                  <div className="flex text-road-yellow mr-4">
                    {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                  </div>
                  <span className="font-display text-xl uppercase">— Operations Manager, Logistics NZ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-road-yellow py-12 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black text-charcoal font-display uppercase mx-8">
              24/7 EMERGENCY REPAIRS • 0800-LINEPRO • FAST RESPONSE • NZ-WIDE • 
            </span>
          ))}
        </motion.div>
      </section>
      <Footer />
    </div>
    </div>
    
  );
}
