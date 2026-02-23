"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  School,
  Building2,
  Factory,
  ShieldCheck,
  Clock,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/NavBar2";
import Footer from "@/components/Footer2";

export default function Home() {
  const whoWeHelp = [
    {
      name: "Councils",
      icon: Building2,
      desc: "Public roads, cycleways, and community parking.",
    },
    {
      name: "Schools",
      icon: School,
      desc: "Safe drop-off zones, sports courts, and playgrounds.",
    },
    {
      name: "Commercial",
      icon: Building2,
      desc: "Property managers and retail parking lots.",
    },
    {
      name: "Factories",
      icon: Factory,
      desc: "Safety walkways, loading bays, and hazard zones.",
    },
    {
      name: "Body Corporates",
      icon: Users,
      desc: "Residential complex parking and shared driveways.",
    },
  ];

  const services = [
    {
      title: "Road Marking",
      price: "From $500",
      desc: "Standard road lines, arrows, and symbols using high-durability paint.",
    },
    {
      title: "Carpark Layouts",
      price: "From $350",
      desc: "Maximising space and safety for your business or complex.",
    },
    {
      title: "Safety Walkways",
      price: "From $450",
      desc: "Bright, non-slip markings for industrial and commercial sites.",
    },
    {
      title: "Sports Courts",
      price: "From $800",
      desc: "Precision marking for netball, basketball, and tennis courts.",
    },
  ];

  const recentJobs = [
    {
      title: "Local Primary School",
      location: "Ponsonby",
      img: "https://picsum.photos/seed/school/600/400",
    },
    {
      title: "Industrial Warehouse",
      location: "East Tamaki",
      img: "https://picsum.photos/seed/factory/600/400",
    },
    {
      title: "Retail Carpark",
      location: "Albany",
      img: "https://picsum.photos/seed/retail/600/400",
    },
    {
      title: "Council Cycleway",
      location: "City Centre",
      img: "https://picsum.photos/seed/road/600/400",
    },
  ];

  return (
    <div className="bg-brand-neutral text-brand-dark font-sans">
      <div className="overflow-hidden">
        <Navbar />
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-brand-yellow/10 text-brand-yellow px-4 py-2 rounded-full text-sm font-bold mb-6">
                  <ShieldCheck className="w-4 h-4" />
                  Reliable. Professional. Local.
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                  Straight lines, <br />
                  <span className="text-brand-yellow">honest service.</span>
                </h1>
                <p className="text-lg text-brand-dark/70 mb-10 max-w-lg leading-relaxed">
                  We're your local experts in road marking and line painting.
                  From school playgrounds to busy council roads, we bring a
                  friendly Kiwi attitude and professional precision to every
                  job.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-brand-yellow text-brand-dark px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                  >
                    Request a Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/about"
                    className="bg-white text-brand-dark border border-brand-dark/5 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-neutral transition-all flex items-center justify-center"
                  >
                    Meet the Team
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                  <img
                    src="https://picsum.photos/seed/team/800/600"
                    alt="Our team in PPE smiling"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl max-w-[240px] hidden sm:block">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <img
                          key={i}
                          src={`https://i.pravatar.cc/100?u=${i}`}
                          className="w-8 h-8 rounded-full border-2 border-white"
                          alt="Customer"
                        />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-brand-dark/40">
                      500+ Happy Clients
                    </span>
                  </div>
                  <p className="text-sm font-medium italic">
                    "Best lines in the business, and they actually showed up on
                    time!"
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who We Help */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Who we help</h2>
            <p className="text-brand-dark/60 mb-16 max-w-2xl mx-auto">
              We work with a wide range of local organisations to keep our
              communities safe and organised.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
              {whoWeHelp.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-3xl bg-brand-neutral hover:bg-brand-yellow/10 transition-colors group"
                >
                  <item.icon className="w-10 h-10 text-brand-yellow mb-4 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold mb-2">{item.name}</h3>
                  <p className="text-xs text-brand-dark/50 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services & Pricing */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <div className="max-w-xl">
                <h2 className="text-4xl font-bold mb-4">Our Services</h2>
                <p className="text-brand-dark/60">
                  We use premium NZ-made paints and the latest equipment to
                  ensure your lines stay bright for years, not months.
                </p>
              </div>
              <div className="bg-brand-yellow/20 px-6 py-3 rounded-2xl border border-brand-yellow/30">
                <p className="text-sm font-bold text-brand-dark">
                  All quotes are free & no-obligation
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-brand-dark/5 flex flex-col"
                >
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-brand-yellow font-bold text-lg mb-4">
                    {service.price}
                  </p>
                  <p className="text-sm text-brand-dark/60 mb-8 flex-grow leading-relaxed">
                    {service.desc}
                  </p>
                  <Link
                    href="/contact"
                    className="text-sm font-bold flex items-center gap-2 hover:text-brand-yellow transition-colors"
                  >
                    Get a quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Jobs Grid */}
        <section className="py-24 bg-brand-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Recent local jobs</h2>
              <p className="text-white/60">
                Take a squiz at some of the work we've finished lately around
                the neighbourhood.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentJobs.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="group relative aspect-square rounded-3xl overflow-hidden"
                >
                  <img
                    src={job.img}
                    alt={job.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <h4 className="font-bold text-lg">{job.title}</h4>
                    <p className="text-sm text-white/70">{job.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How Quotes Work */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-yellow rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-8">
                    How our quotes work
                  </h2>
                  <div className="space-y-8">
                    {[
                      {
                        icon: MessageSquare,
                        title: "1. Quick Chat",
                        desc: "Give us a bell or fill out the form. We'll have a quick yarn about what you need.",
                      },
                      {
                        icon: Clock,
                        title: "2. Site Visit",
                        desc: "We'll pop over to your site (usually within 48 hours) to measure up and check the surface.",
                      },
                      {
                        icon: CheckCircle2,
                        title: "3. Fixed Price",
                        desc: "You'll get a clear, fixed-price quote. No hidden nasties, just honest pricing.",
                      },
                    ].map((step) => (
                      <div key={step.title} className="flex gap-6">
                        <div className="bg-white p-3 rounded-2xl h-fit">
                          <step.icon className="w-6 h-6 text-brand-yellow" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">
                            {step.title}
                          </h4>
                          <p className="text-brand-dark/70 text-sm">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-8 rounded-[2rem] border border-white/30">
                  <h3 className="text-2xl font-bold mb-6">
                    Ready to get started?
                  </h3>
                  <p className="mb-8 text-brand-dark/80">
                    Most of our quotes are turned around in less than 24 hours.
                    Let's get your lines sorted.
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-brand-dark text-white py-4 rounded-2xl font-bold hover:bg-brand-dark/90 transition-all"
                  >
                    Get Your Free Quote Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
