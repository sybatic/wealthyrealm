'use client';

import { motion } from 'framer-motion';

const partners = [
  'MTN Group', 'Dangote Industries', 'Shoprite', 'Jumia', 
  'Standard Bank', 'Ecobank', 'UN Habitat', 'AfDB'
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-white border-y border-zinc-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
          <div>
            <h3 className="text-[22px] font-[650] mb-2">Trusted by leading organizations</h3>
            <p className="text-[14px] text-zinc-600">Partners across B2B and B2G sectors</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-zinc-300 to-zinc-400"></div>
              ))}
            </div>
            <span className="text-[13px] text-zinc-600"><strong className="text-zinc-900">850+</strong> active partners</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group h-[72px] flex items-center justify-center px-4 rounded-2xl border border-zinc-200 bg-zinc-50/50 hover:bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-300"
            >
              <span className="text-[13px] font-[550] text-zinc-500 group-hover:text-zinc-900 text-center leading-tight transition-colors">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}