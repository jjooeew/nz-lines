import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8 border-t-8 border-road-yellow relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none road-stripe" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="bg-road-yellow p-1 inline-block skew-x-[-12deg]">
              <span className="text-charcoal font-black text-3xl px-2 block skew-x-[12deg]">LINEPRO</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              New Zealand's leading road marking and line painting specialists. Rugged quality, precision marking, 24/7 availability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-road-yellow transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-road-yellow transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-road-yellow transition-colors"><Linkedin /></a>
            </div>
          </div>

          <div>
            <h4 className="text-road-yellow text-xl mb-6">SERVICES</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Road Marking</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Carpark Painting</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Warehouse Safety</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Sports Courts</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Traffic Management</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-road-yellow text-xl mb-6">QUICK LINKS</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Request Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-road-yellow text-xl mb-6">CONTACT</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-road-yellow shrink-0" />
                <span>0800-LINEPRO<br/><span className="text-xs">Available 24/7 for Emergencies</span></span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-road-yellow shrink-0" />
                <span>info@linepro.co.nz</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-road-yellow shrink-0" />
                <span>Auckland, Wellington, Christchurch<br/>Serving NZ-Wide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} LinePro Road Marking Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
