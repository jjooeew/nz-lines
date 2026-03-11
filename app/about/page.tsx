'use client'

import { motion } from 'motion/react';
import { Shield, HardHat, Award, Zap, CheckCircle2 } from 'lucide-react';

export default function About() {
  const equipment = [
    { name: 'LazerGuide 3000', type: 'Precision Striper', img: 'https://picsum.photos/seed/eq1/400/300' },
    { name: 'ThermoMaster Pro', type: 'Thermoplastic Unit', img: 'https://picsum.photos/seed/eq2/400/300' },
    { name: 'Scarab M25', type: 'Road Sweeper', img: 'https://picsum.photos/seed/eq3/400/300' },
    { name: 'Titan 850', type: 'Airless Sprayer', img: 'https://picsum.photos/seed/eq4/400/300' },
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
              PRACTICAL. <span className="text-road-yellow">NO FLUFF.</span>
            </h1>
            <p className="text-2xl text-gray-300 font-display uppercase italic">
              We paint lines. We do it right. We do it fast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black mb-8">HOW WE WORK</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-road-yellow p-4 h-fit skew-x-[-6deg]">
                    <Zap className="w-8 h-8 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-2">RAPID RESPONSE</h3>
                    <p className="text-gray-600 text-lg">
                      Time is money. We mobilize quickly to minimize disruption to your business or traffic flow.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-road-yellow p-4 h-fit skew-x-[-6deg]">
                    <Award className="w-8 h-8 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-2">PREMIUM MATERIALS</h3>
                    <p className="text-gray-600 text-lg">
                      We only use NZTA-spec paints and thermoplastics designed for New Zealand's harsh UV and weather conditions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-road-yellow p-4 h-fit skew-x-[-6deg]">
                    <Shield className="w-8 h-8 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-2">SAFETY FOCUS</h3>
                    <p className="text-gray-600 text-lg">
                      Safety isn't a checkbox; it's our culture. Full STMS compliance on every road job.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/crew/800/1000"
                className="rounded-lg shadow-2xl skew-x-[2deg]"
                alt="Our crew"
              />
              <div className="absolute -top-10 -left-10 bg-charcoal p-12 hidden lg:block">
                <HardHat className="w-16 h-16 text-road-yellow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="bg-charcoal py-24 diagonal-cut-both relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 road-stripe" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl text-white font-black mb-8">OUR SAFETY RECORD</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <div className="p-8 border-2 border-road-yellow/30 bg-white/5">
              <div className="text-road-yellow text-6xl font-black mb-4">0</div>
              <div className="text-white font-display text-2xl uppercase">LTI (Lost Time Injuries)</div>
            </div>
            <div className="p-8 border-2 border-road-yellow/30 bg-white/5">
              <div className="text-road-yellow text-6xl font-black mb-4">100%</div>
              <div className="text-white font-display text-2xl uppercase">NZTA COMPLIANT</div>
            </div>
            <div className="p-8 border-2 border-road-yellow/30 bg-white/5">
              <div className="text-road-yellow text-6xl font-black mb-4">STMS</div>
              <div className="text-white font-display text-2xl uppercase">QUALIFIED CREW</div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black mb-12 text-center">OUR ARSENAL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((item) => (
              <div key={item.name} className="group">
                <div className="relative overflow-hidden aspect-square mb-4">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={item.name}
                  />
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors" />
                </div>
                <h3 className="text-2xl font-black uppercase">{item.name}</h3>
                <p className="text-road-yellow font-display text-lg uppercase italic">{item.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
