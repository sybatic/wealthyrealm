'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Divisions', href: '/' },  // Keep anchor link for homepage
  { name: 'Models', href: '/models' },         // Changed to separate page
  { name: 'Impact', href: '/impact' },         // Changed to separate page
  { name: 'Partners', href: '/partners' },     // Changed to separate page
  { name: 'About', href: '/about' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-600 via-red-600 to-lime-500 origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#FFFCF8]/95 backdrop-blur-xl border-b border-zinc-200/50' : 'bg-[#FFFCF8]/80 backdrop-blur-xl border-b border-zinc-200/50'
      }`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-600/20 group-hover:scale-105 transition-transform">
                  <span className="text-white font-bold text-lg tracking-tight">W</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-600 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <div className="font-bold text-[22px] leading-none tracking-tight">WealthRim</div>
                <div className="text-[10px] text-zinc-500 font-medium tracking-widest uppercase -mt-0.5">GROUP OF COMPANIES</div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="text-[14px] font-medium text-zinc-600 hover:text-zinc-900 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link 
                href="/invest"
                className="hidden sm:flex items-center gap-2 px-5 h-10 rounded-full bg-zinc-900 text-white text-[14px] font-medium hover:bg-zinc-800 transition-colors"
              >
                Invest
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden absolute top-[72px] left-0 right-0 bg-white border-b border-zinc-200 shadow-xl"
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-[15px] font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/invest"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-[15px] font-medium text-emerald-600"
              >
                Invest Now
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
}