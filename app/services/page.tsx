'use client'

import { motion } from 'motion/react';
import { Map, CheckCircle2, Shield, Activity, Truck, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Services() {
  const services = [
    {
      id: 'water-blasting',
      title: 'WATER BLASTING',
      desc: 'High-visibility thermal and cold-applied markings for highways, local roads, and intersections. We use NZTA-approved materials built to withstand heavy traffic and harsh weather conditions.',
      features: ['Thermoplastic extrusion', 'Cold applied plastic (CAP)', 'Reflective glass beads', 'Temporary road marking'],
      icon: <Map className="w-10 h-10" />,
      img: '/waterblasting.jpg'
    },
    {
      id: 'grinding',
      title: 'GRINDING',
      desc: 'Precision layout and painting for commercial, retail, and residential parking facilities. Maximize your space while ensuring pedestrian safety and clear traffic flow.',
      features: ['Custom bay layouts', 'Disabled & parent parking', 'Directional arrows & lettering', 'Wheel stops & speed bumps'],
      icon: <CheckCircle2 className="w-10 h-10" />,
      img: '/grinding.jpg'
    },
    {
      id: 'wheel-stops',
      title: 'WHEEL STOPS',
      desc: 'Internal safety walkways, forklift zones, and hazard markings to keep your operations compliant and your team safe. We use durable epoxies for high-wear indoor environments.',
      features: ['Pedestrian walkways', 'Forklift exclusion zones', 'Hazard hatching', 'Anti-slip coatings'],
      icon: <Shield className="w-10 h-10" />,
      img: '/wheelStop.jpg'
    },
    {
      id: 'speed-humps',
      title: 'SPEED HUMPS',
      desc: 'Accurate, vibrant line marking for schools, parks, and professional sports facilities. We paint basketball, netball, tennis, and multi-sport courts with high-grip sports coatings.',
      features: ['Multi-sport court layouts', 'High-friction slip resistance', 'Vibrant, UV-stable colors', 'Playground games & markings'],
      icon: <Activity className="w-10 h-10" />,
      img: '/speed-bump.jpg'
    },
    {
      id: 'signs',
      title: 'Signs',
      desc: 'Accurate, vibrant line marking for schools, parks, and professional sports facilities. We paint basketball, netball, tennis, and multi-sport courts with high-grip sports coatings.',
      features: ['Multi-sport court layouts', 'High-friction slip resistance', 'Vibrant, UV-stable colors', 'Playground games & markings'],
      icon: <Activity className="w-10 h-10" />,
      img: '/road-sign2.jpg'
    },
    {
      id: 'traffic-management',
      title: 'TRAFFIC MANAGEMENT',
      desc: 'Full end-to-end traffic management services. We don\'t just paint the lines; we secure the site. Our STMS-qualified crew handles everything from planning to execution.',
      features: ['TMP planning & drafting', 'Council approvals', 'Level 1 & 2 site setups', '24/7 emergency response'],
      icon: <Truck className="w-10 h-10" />,
      img: 'https://picsum.photos/seed/traffic/800/600'
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-charcoal py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 road-stripe" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-8xl text-white font-black mb-6">
              OUR <span className="text-road-yellow">SERVICES.</span>
            </h1>
            <p className="text-2xl text-gray-300 font-display uppercase italic">
              Comprehensive line marking solutions for every surface.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, idx) => (
            <div key={service.id} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl skew-x-[2deg]">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-charcoal/10" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="bg-road-yellow p-3 text-charcoal skew-x-[-12deg] mr-6">
                    <div className="skew-x-[12deg]">
                      {service.icon}
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black">{service.title}</h2>
                </div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start text-charcoal font-display text-lg uppercase font-bold">
                      <div className="w-2 h-2 bg-road-yellow mt-2 mr-3 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-charcoal font-display text-xl font-black uppercase hover:text-road-yellow transition-colors group"
                >
                  GET A QUOTE FOR THIS <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-road-yellow py-20 diagonal-cut-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-7xl text-charcoal font-black mb-8">
            READY TO MARK YOUR TERRITORY?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-charcoal text-white px-10 py-5 font-display text-3xl font-black uppercase skew-x-[-12deg] hover:bg-white hover:text-charcoal transition-all"
          >
            <span className="skew-x-[12deg] block">REQUEST A QUOTE NOW</span>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
