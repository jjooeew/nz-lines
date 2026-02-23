"use client"; // Required for useState and animations

import React from 'react';
import Link from 'next/link'; // Changed from react-router-dom
import { usePathname } from 'next/navigation'; // Changed from react-router-dom
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils'; // Updated alias to match your new structure

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname(); // Replaces useLocation().pathname

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-charcoal/95 border-b-4 border-road-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo - Changed 'to' to 'href' */}
          <Link href="/design-b" className="flex items-center space-x-2">
            <div className="bg-road-yellow p-1 skew-x-[-12deg]">
              <span className="text-charcoal font-black text-2xl px-2 block skew-x-[12deg]">LINEPRO</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path} // Changed 'to' to 'href'
                className={cn(
                  "text-white font-display text-xl uppercase tracking-wider hover:text-road-yellow transition-colors",
                  pathname === link.path && "text-road-yellow border-b-2 border-road-yellow"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:0800-LINEPRO"
              className="bg-road-yellow text-charcoal px-6 py-2 font-display text-xl font-black uppercase skew-x-[-12deg] hover:bg-white transition-colors flex items-center"
            >
              <span className="skew-x-[12deg] flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                0800-LINEPRO
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-charcoal border-b-4 border-road-yellow"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path} // Changed 'to' to 'href'
                  onClick={() => setIsOpen(false)}
                  className="block text-white font-display text-2xl uppercase py-2"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:0800-LINEPRO"
                className="block bg-road-yellow text-charcoal px-6 py-3 font-display text-2xl font-black uppercase text-center"
              >
                CALL 0800-LINEPRO
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}