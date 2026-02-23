import { HardHat, Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-brand-yellow p-2 rounded-xl">
                <HardHat className="w-6 h-6 text-brand-dark" />
              </div>
              <span className="font-bold text-xl tracking-tight">KiwiLines</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Straight-talking, hard-working line marking for the communities we love. Based in Auckland, serving the whole region with a smile.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-brand-yellow uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-white/60 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="text-white/60 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-white transition-colors text-sm">Contact & Quotes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-brand-yellow uppercase tracking-wider text-xs">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone className="w-4 h-4 text-brand-yellow" />
                0800 KIWI LINES
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail className="w-4 h-4 text-brand-yellow" />
                hello@kiwilines.co.nz
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-brand-yellow" />
                Auckland, New Zealand
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-brand-yellow uppercase tracking-wider text-xs">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-brand-yellow hover:text-brand-dark transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-brand-yellow hover:text-brand-dark transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} KiwiLines Road Marking Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
