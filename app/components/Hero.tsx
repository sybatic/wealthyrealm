'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, TrendingUp, Building2, Truck, Shirt } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 'food',
    title: 'Food Delivery',
    subtitle: 'WealthyRealm Eats',
    image: '/images/food-delivery.jpg',
    color: 'from-emerald-600 to-green-700',
    accent: 'bg-emerald-500',
  },
  {
    id: 'fabric',
    title: 'Fabric Delivery',
    subtitle: 'WealthyRealm Textiles',
    image: '/images/fabric.jpg',
    color: 'from-red-600 to-rose-700',
    accent: 'bg-red-500',
  },
  {
    id: 'realestate',
    title: 'Real Estate',
    subtitle: 'WealthyRealm Properties',
    image: '/images/realestate.jpg',
    color: 'from-lime-500 to-yellow-500',
    accent: 'bg-lime-500',
  }
];

export default function Hero() {
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-[72px] min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/hero.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-900/85 to-zinc-900/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(5,150,105,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(220,38,38,0.2),transparent_40%)]"></div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                <div className="flex -space-x-1.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 border-2 border-white/20"></div>
                  <div className="w-5 h-5 rounded-full bg-red-500 border-2 border-white/20"></div>
                  <div className="w-5 h-5 rounded-full bg-lime-400 border-2 border-white/20"></div>
                </div>
                <span className="text-[12px] font-medium text-white/90 tracking-wide">12 YEARS BUILDING AFRICA</span>
              </div>

              <h1 className="text-[clamp(44px,7vw,84px)] font-[650] leading-[0.85] tracking-[-0.03em] text-white mb-6">
                Three industries.
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-emerald-400 via-lime-300 to-yellow-300 bg-clip-text text-transparent">One vision.</span>
                  <motion.div 
                    className="absolute bottom-2 left-0 right-0 h-[14px] bg-red-600/30 -rotate-1"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </span>
              </h1>

              <p className="text-[18px] md:text-[20px] leading-[1.6] text-zinc-300 max-w-[580px] mb-10 font-[450]">
                WealthRim Group powers Food Delivery, Fabric Supply, and Real Estate across Africa. Serving consumers, businesses, and governments with integrated infrastructure.
              </p>

              <div className="flex flex-wrap gap-3 mb-14">
                <Link href="/#divisions" className="group relative px-7 h-[48px] bg-white text-zinc-900 rounded-full font-[550] text-[15px] overflow-hidden inline-flex items-center">
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Divisions
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-lime-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                <Link href="/invest" className="px-7 h-[48px] bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-[550] text-[15px] hover:bg-white/15 transition-colors inline-flex items-center">
                  Partner With Us
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 max-w-[460px] pt-8 border-t border-white/10">
                {[
                  { label: 'Active users', value: '47K+' },
                  { label: 'Cities', value: '24' },
                  { label: 'Countries', value: '18' }
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-[28px] font-[650] text-white leading-none mb-1.5">{stat.value}</div>
                    <div className="text-[12px] text-zinc-400 uppercase tracking-wider font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-[28px] border border-white/10 p-2 shadow-2xl">
                <div className="bg-zinc-950 rounded-[20px] overflow-hidden">
                  <div className="h-[440px] relative">
                    {services.map((service, idx) => (
                      <motion.div
                        key={service.id}
                        className="absolute inset-0"
                        initial={false}
                        animate={{ 
                          opacity: activeService === idx ? 1 : 0,
                          scale: activeService === idx ? 1 : 0.95
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <img src={service.image} alt="" className="w-full h-full object-cover" />
                        <div className={`absolute inset-0 bg-gradient-to-t ${service.color} mix-blend-multiply opacity-80`}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
                        
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${service.accent} mb-3`}>
                            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                            <span className="text-[10px] font-bold text-white uppercase tracking-wider">Active</span>
                          </div>
                          <h3 className="text-[26px] font-[650] text-white mb-1">{service.title}</h3>
                          <p className="text-[13px] text-zinc-300">{service.subtitle}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="p-5 bg-zinc-950 border-t border-white/5">
                    <div className="flex items-center justify-between">
                      {services.map((s, idx) => (
                        <button
                          key={s.id}
                          onClick={() => setActiveService(idx)}
                          className={`flex-1 py-2.5 text-[12px] font-medium transition-all relative ${activeService === idx ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                        >
                          {s.title.split(' ')[0]}
                          {activeService === idx && (
                            <motion.div layoutId="activeTab" className="absolute bottom-0 left-2 right-2 h-0.5 bg-white rounded-full" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-12 top-20 bg-white rounded-2xl shadow-2xl p-4 border border-zinc-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-[20px] font-bold leading-none">2.4M+</div>
                    <div className="text-[11px] text-zinc-500 mt-0.5">Deliveries</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -right-8 bottom-24 bg-white rounded-2xl shadow-2xl p-4 border border-zinc-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <div className="text-[20px] font-bold leading-none">$420M</div>
                    <div className="text-[11px] text-zinc-500 mt-0.5">Portfolio</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}