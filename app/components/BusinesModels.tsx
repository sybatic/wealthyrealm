'use client';

import { motion } from 'framer-motion';
import { Store, Users, Landmark, TrendingUp, Shield } from 'lucide-react';
import Link from 'next/link';

const businessModels = [
  {
    icon: Store,
    title: 'B2C',
    subtitle: 'Business to Customer',
    description: 'Direct services to consumers through our delivery apps and property sales',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    tags: ['Food app orders', 'Fabric retail', 'Property sales']
  },
  {
    icon: Users,
    title: 'B2B',
    subtitle: 'Business to Business',
    description: 'Enterprise solutions for restaurants, designers, and corporate clients',
    color: 'text-red-600',
    bg: 'bg-red-50',
    border: 'border-red-200',
    tags: ['Restaurant partners', 'Fashion houses', 'Corporate leasing']
  },
  {
    icon: Landmark,
    title: 'B2G',
    subtitle: 'Business to Government',
    description: 'Public-private partnerships for housing, catering, and infrastructure',
    color: 'text-lime-600',
    bg: 'bg-lime-50',
    border: 'border-lime-200',
    tags: ['Affordable housing', 'School feeding', 'Infrastructure']
  }
];

export default function BusinessModels() {
  return (
    <section id="models" className="py-24 lg:py-32 bg-[#FFFCF8] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-lime-100/40 to-transparent rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-100/40 to-transparent rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
      
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-[2px] bg-red-600"></div>
                <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-red-700">Business Models</span>
              </div>
              <h2 className="text-[clamp(36px,4.5vw,52px)] font-[650] leading-[1.08] tracking-[-0.02em] mb-6">
                One platform,
                <br />three channels
              </h2>
              <p className="text-[17px] leading-[1.65] text-zinc-600 mb-8">
                WealthRim uniquely operates across all market segments. Our infrastructure serves individual consumers, enterprise clients, and government agencies simultaneously.
              </p>
              <Link href="/invest" className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-green-700 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-[15px] leading-tight group-hover:text-emerald-600 transition-colors">Investment Opportunity</div>
                  <div className="text-[13px] text-zinc-600 mt-0.5">Diversified revenue across 3 models</div>
                </div>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-6">
              {businessModels.map((model, idx) => {
                const Icon = model.icon;
                return (
                  <motion.div
                    key={model.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`group relative p-8 lg:p-10 rounded-[28px] bg-white border-2 ${model.border} hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 hover:-translate-y-1`}
                  >
                    <div className="flex items-start gap-6">
                      <div className={`w-14 h-14 rounded-2xl ${model.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className={`w-7 h-7 ${model.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-3 mb-3">
                          <h3 className="text-[28px] font-[700] tracking-tight">{model.title}</h3>
                          <span className={`text-[13px] font-medium ${model.color}`}>{model.subtitle}</span>
                        </div>
                        <p className="text-[16px] leading-[1.6] text-zinc-600 mb-5">{model.description}</p>
                        
                        <div className="flex flex-wrap gap-2.5">
                          {model.tags.map(tag => (
                            <span key={tag} className="px-3 py-1.5 rounded-full bg-zinc-50 text-[12px] font-medium text-zinc-700 border border-zinc-200">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className={`absolute top-0 right-0 w-32 h-32 ${model.bg} rounded-bl-[100px] rounded-tr-[28px] opacity-[0.03] group-hover:opacity-[0.08] transition-opacity`}></div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-12 p-8 rounded-[24px] bg-zinc-900 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-lime-400/20 to-transparent rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-lime-400" />
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-lime-400">Investment Grade</span>
                </div>
                <h4 className="text-[22px] font-[650] mb-2">Diversified Risk, Compounded Returns</h4>
                <p className="text-[14px] leading-[1.6] text-zinc-400 max-w-[520px]">
                  Our three-channel model reduces dependency on any single market. When B2C slows, B2B and B2G contracts provide stability. 12 years of consistent growth across economic cycles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}