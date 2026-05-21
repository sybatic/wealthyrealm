'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Amara Okafor',
    role: 'CEO, Lagos Fashion House',
    image: '/images/testimonial1.jpg',
    content: 'WealthRim Textiles transformed our supply chain. Their B2B fabric delivery is 3x faster than our previous supplier, and the quality of authentic Ankara is unmatched.',
    rating: 5,
    company: 'B2B Partner',
    badgeColor: 'emerald'
  },
  {
    name: 'Kwame Mensah',
    role: 'Director, Ministry of Housing Ghana',
    image: '/images/testimonial2.jpg',
    content: 'The PPP project with WealthRim Properties delivered 500 affordable homes 4 months ahead of schedule. Their B2G model sets the standard for public-private collaboration.',
    rating: 5,
    company: 'B2G Partner',
    badgeColor: 'lime'
  },
  {
    name: 'Zainab Ibrahim',
    role: 'Restaurant Owner, Abuja',
    image: '/images/testimonial3.jpg',
    content: 'Since joining WealthRim Eats, our delivery orders increased by 340%. Their platform handles everything from B2C customers to our corporate catering contracts.',
    rating: 5,
    company: 'B2B & B2C',
    badgeColor: 'red'
  }
];

const getBadgeStyles = (color: string) => {
  switch(color) {
    case 'emerald': return 'bg-emerald-50 text-emerald-700';
    case 'lime': return 'bg-lime-50 text-lime-700';
    case 'red': return 'bg-red-50 text-red-700';
    default: return 'bg-emerald-50 text-emerald-700';
  }
};

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-[#FFFCF8]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="max-w-[640px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-[2px] bg-red-600"></div>
            <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-red-700">Testimonials</span>
            <div className="w-8 h-[2px] bg-red-600"></div>
          </div>
          <h2 className="text-[clamp(32px,4.5vw,48px)] font-[650] leading-[1.1] tracking-[-0.02em] mb-4">
            What our partners say
          </h2>
          <p className="text-[17px] text-zinc-600">
            Real results from B2B, B2C, and B2G collaborations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-[28px] bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:shadow-zinc-200/60 transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-zinc-200 mb-4" />
                
                <p className="text-[16px] leading-[1.65] text-zinc-700 mb-8 font-[450]">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-zinc-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-400 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[15px] leading-tight">{testimonial.name}</div>
                    <div className="text-[13px] text-zinc-600 leading-tight mt-0.5">{testimonial.role}</div>
                  </div>
                  <div className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getBadgeStyles(testimonial.badgeColor)}`}>
                    {testimonial.company}
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