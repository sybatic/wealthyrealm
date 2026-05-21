'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { Clock, Package, Globe, Award } from 'lucide-react';

const stats = [
  { value: 12, suffix: '+', label: 'Years of Excellence', sublabel: 'Since 2012', prefix: null, color: 'emerald' },
  { value: 47, suffix: 'K+', label: 'Happy Customers', sublabel: 'Across 3 divisions', prefix: null, color: 'red' },
  { value: 850, suffix: '+', label: 'Business Partners', sublabel: 'Trusted network', prefix: null, color: 'lime' },
  { value: 420, suffix: 'M', label: 'Assets Under Management', sublabel: 'And growing', prefix: '$', color: 'yellow' }
];

const features = [
  { icon: Package, title: 'Integrated Logistics', desc: 'Shared fleet serves all 3 divisions, 40% cost reduction' },
  { icon: Globe, title: 'Pan-African', desc: 'Operations in 18 countries, 24 major cities' },
  { icon: Award, title: 'Award Winning', desc: 'African Business Awards 2023 - Diversified Group of Year' }
];

function Counter({ stat, idx }: { stat: typeof stats[0]; idx: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  const getColorStyles = () => {
    switch(stat.color) {
      case 'emerald': return 'border-emerald-500/30 bg-emerald-500';
      case 'red': return 'border-red-500/30 bg-red-500';
      case 'lime': return 'border-lime-500/30 bg-lime-500';
      case 'yellow': return 'border-yellow-500/30 bg-yellow-500';
      default: return 'border-emerald-500/30 bg-emerald-500';
    }
  };

  return (
    <div ref={ref} className="relative p-10 lg:p-12 bg-zinc-950 hover:bg-zinc-900/50 transition-colors group">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex items-baseline gap-1 mb-3">
        {stat.prefix && <span className="text-[24px] font-[550] text-zinc-600">{stat.prefix}</span>}
        <span className="text-[48px] lg:text-[56px] font-[650] leading-none tracking-[-0.02em] text-white">{count}</span>
        <span className="text-[32px] font-[550] text-zinc-500">{stat.suffix}</span>
      </div>
      <div className="text-[15px] font-[550] text-white mb-1">{stat.label}</div>
      <div className="text-[13px] text-zinc-500">{stat.sublabel}</div>
      
      <div className={`absolute bottom-6 right-6 w-8 h-8 rounded-full border ${getColorStyles().split(' ')[0]} flex items-center justify-center`}>
        <div className={`w-1.5 h-1.5 rounded-full ${getColorStyles().split(' ')[1]}`}></div>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="impact" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[160px]"></div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-end mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-6">
              <Clock className="w-4 h-4 text-lime-400" />
              <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-lime-400">12 Years in Operation</span>
            </div>
            <h2 className="text-[clamp(36px,5vw,60px)] font-[650] leading-[0.95] tracking-[-0.02em]">
              Building Africa's
              <br />
              <span className="text-zinc-500">infrastructure, daily.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[17px] leading-[1.65] text-zinc-400">
              From a single food delivery pilot in Lagos (2012) to a multi-sector group operating in 18 countries. Profitable every year since inception.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-zinc-800 rounded-[28px] overflow-hidden border border-zinc-800">
          {stats.map((stat, idx) => (
            <Counter key={idx} stat={stat} idx={idx} />
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {features.map((item, idx) => (
            <div key={item.title} className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-300 group">
              <item.icon className="w-5 h-5 text-lime-400 mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold mb-1.5 group-hover:text-lime-400 transition-colors">{item.title}</h4>
              <p className="text-[14px] text-zinc-500 leading-[1.5]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}