'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(5,150,105,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(220,38,38,0.12),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(132,204,22,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-[1000px] mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-8">
            <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></div>
            <span className="text-[12px] font-medium tracking-wide">NOW ACCEPTING PARTNERS</span>
          </div>
          
          <h2 className="text-[clamp(36px,6vw,68px)] font-[650] leading-[0.9] tracking-[-0.03em] mb-6">
            Partner with
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-lime-300 to-yellow-300 bg-clip-text text-transparent">
              WealthRim
            </span>
          </h2>
          
          <p className="text-[18px] leading-[1.6] text-zinc-400 max-w-[640px] mx-auto mb-12">
            Whether you're a restaurant, fashion designer, property developer, or government agency — we have the infrastructure to scale your operations across Africa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/invest"
              className="group w-full sm:w-auto px-8 h-[52px] bg-white text-zinc-950 rounded-full font-[600] text-[15px] flex items-center justify-center gap-2 hover:bg-zinc-100 transition-colors"
            >
              Become a Partner
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <button 
              onClick={() => window.open('/investment-deck.pdf', '_blank')}
              className="w-full sm:w-auto px-8 h-[52px] bg-white/5 backdrop-blur-md border border-white/15 text-white rounded-full font-[550] text-[15px] hover:bg-white/10 transition-colors"
            >
              Investment Deck
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[720px] mx-auto mt-20 pt-12 border-t border-white/10">
            {[
              { icon: Phone, label: 'Call us', value: '+234 800 WEALTH' },
              { icon: Mail, label: 'Email', value: 'partners@wealthrim.com' },
              { icon: MapPin, label: 'HQ', value: 'Lagos, Nigeria' }
            ].map((contact, idx) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group cursor-pointer"
              >
                <contact.icon className="w-5 h-5 mx-auto mb-3 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                <div className="text-[12px] uppercase tracking-wider text-zinc-500 font-medium mb-1">{contact.label}</div>
                <div className="text-[15px] font-medium group-hover:text-emerald-400 transition-colors">{contact.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}