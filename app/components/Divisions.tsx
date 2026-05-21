'use client';

import { motion } from 'framer-motion';
import { Truck, Shirt, Building2, Check, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 'food',
    title: 'Food Delivery',
    subtitle: 'WealthyRealm Eats',
    description: 'Fast, fresh, and reliable food delivery connecting local restaurants to homes and offices across the region.',
    image: '/images/food-delivery.jpg',
    color: 'from-emerald-600 to-green-700',
    accent: 'bg-emerald-500',
    stats: { orders: '2.4M+', partners: '850+', cities: '24' },
    features: ['30-min average delivery', 'Real-time tracking', 'B2B catering solutions', 'Government contract meals'],
    link: '/divisions/food-delivery'
  },
  {
    id: 'fabric',
    title: 'Fabric Delivery',
    subtitle: 'WealthyRealm Textiles',
    description: 'Premium African fabrics, textiles, and fashion materials delivered to designers, retailers, and manufacturers.',
    image: '/images/fabric.jpg',
    color: 'from-red-600 to-rose-700',
    accent: 'bg-red-500',
    stats: { fabrics: '5K+', designers: '1.2K+', countries: '18' },
    features: ['Authentic Ankara & Kente', 'Bulk B2B supply', 'Custom printing', 'Export to 18 countries'],
    link: '/divisions/fabric-delivery'
  },
  {
    id: 'realestate',
    title: 'Real Estate',
    subtitle: 'WealthyRealm Properties',
    description: 'Developing affordable housing, commercial spaces, and government infrastructure projects across Africa.',
    image: '/images/realestate.jpg',
    color: 'from-lime-500 to-yellow-500',
    accent: 'bg-lime-500',
    stats: { units: '3.5K+', value: '$420M', projects: '47' },
    features: ['Residential developments', 'Commercial leasing', 'PPP government projects', 'Property management'],
    link: '/divisions/real-estate'
  }
];

export default function Divisions() {
  return (
    <section id="divisions" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="max-w-[720px] mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-[2px] bg-emerald-600"></div>
            <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-emerald-700">Our Divisions</span>
          </div>
          <h2 className="text-[clamp(36px,5vw,56px)] font-[650] leading-[1.05] tracking-[-0.02em] mb-6">
            Built for scale.
            <br />Designed for Africa.
          </h2>
          <p className="text-[18px] leading-[1.6] text-zinc-600">Three independent businesses, one integrated ecosystem. Each division serves B2C, B2B, and B2G markets with specialized infrastructure.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative h-[560px] rounded-[28px] overflow-hidden bg-zinc-900">
                <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className={`absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/20`}></div>
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 mix-blend-multiply`}></div>
                
                <div className="absolute inset-0 p-8 lg:p-10 flex flex-col">
                  <div className="flex items-start justify-between mb-auto">
                    <div>
                      <div className={`w-12 h-12 rounded-2xl ${service.accent} flex items-center justify-center mb-4 shadow-lg`}>
                        {idx === 0 && <Truck className="w-6 h-6 text-white" />}
                        {idx === 1 && <Shirt className="w-6 h-6 text-white" />}
                        {idx === 2 && <Building2 className="w-6 h-6 text-white" />}
                      </div>
                      <div className="text-[13px] font-medium text-white/70 uppercase tracking-wider mb-2">{service.subtitle}</div>
                      <h3 className="text-[32px] font-[650] text-white leading-[1.1] tracking-[-0.01em]">{service.title}</h3>
                    </div>
                    <Link href={service.link} className={`w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:bg-white/20 transition-colors`}>
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </Link>
                  </div>

                  <div>
                    <p className="text-[15px] leading-[1.6] text-zinc-200 mb-6 max-w-[320px]">{service.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 py-5 border-y border-white/15 mb-5">
                      {Object.entries(service.stats).map(([key, val]) => (
                        <div key={key}>
                          <div className="text-[20px] font-[650] text-white leading-none">{val}</div>
                          <div className="text-[11px] text-white/60 capitalize mt-1">{key}</div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                            <Check className="w-2.5 h-2.5 text-white" />
                          </div>
                          <span className="text-[13px] text-zinc-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}