'use client';

import { motion } from 'framer-motion';
import { 
  Users, Building2, Handshake, Award, Star,
  ArrowRight, CheckCircle, Globe, Mail, Phone,
  Briefcase, TrendingUp, Shield, Clock, UserPlus,
  MessageCircle, FileText, Calendar
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const partnerTypes = [
  {
    title: 'Restaurant Partners',
    description: 'Join our food delivery network and reach thousands of hungry customers',
    benefits: ['Zero upfront costs', 'Real-time analytics', 'Marketing support', 'Dedicated account manager'],
    icon: Building2,
    color: 'emerald',
    applyLink: '/invest'
  },
  {
    title: 'Fashion & Fabric Partners',
    description: 'Sell your fabrics and designs to customers across 18 countries',
    benefits: ['Global marketplace access', 'Bulk order management', 'Quality assurance', 'Express shipping'],
    icon: Briefcase,
    color: 'red',
    applyLink: '/invest'
  },
  {
    title: 'Real Estate Partners',
    description: 'Collaborate on development projects and property management',
    benefits: ['Joint venture opportunities', 'Access to prime locations', 'Financing options', 'Project management'],
    icon: Building2,
    color: 'lime',
    applyLink: '/invest'
  },
  {
    title: 'Government Partners',
    description: 'Partner with us on PPP infrastructure and development projects',
    benefits: ['End-to-end execution', 'Transparent bidding', 'Quality compliance', 'Long-term partnerships'],
    icon: Handshake,
    color: 'emerald',
    applyLink: '/invest'
  }
];

const currentPartners = [
  { name: 'MTN Group', sector: 'Telecommunications', type: 'Strategic', logo: '/logos/mtn.png' },
  { name: 'Dangote Industries', sector: 'Manufacturing', type: 'Strategic', logo: '/logos/dangote.png' },
  { name: 'Shoprite', sector: 'Retail', type: 'B2B', logo: '/logos/shoprite.png' },
  { name: 'Jumia', sector: 'E-commerce', type: 'B2B', logo: '/logos/jumia.png' },
  { name: 'Standard Bank', sector: 'Banking', type: 'Financial', logo: '/logos/standard-bank.png' },
  { name: 'Ecobank', sector: 'Banking', type: 'Financial', logo: '/logos/ecobank.png' },
  { name: 'UN Habitat', sector: 'International Organization', type: 'B2G', logo: '/logos/un-habitat.png' },
  { name: 'AfDB', sector: 'Development Bank', type: 'B2G', logo: '/logos/afdb.png' }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Owner, Lagos Bistro',
    content: 'Partnering with WealthRim Eats increased our delivery orders by 340%. Their platform is intuitive and their support team is exceptional.',
    rating: 5,
    type: 'Restaurant Partner',
    image: '/images/partner-testimonial1.jpg'
  },
  {
    name: 'Michael Okafor',
    role: 'CEO, AfroChic Designs',
    content: 'WealthRim Textiles opened up international markets for our fabrics. We now export to 12 countries through their platform.',
    rating: 5,
    type: 'Fabric Partner',
    image: '/images/partner-testimonial2.jpg'
  },
  {
    name: 'Dr. James Mwangi',
    role: 'Ministry of Housing, Kenya',
    content: 'The PPP partnership with WealthRim Properties delivered 500 affordable homes ahead of schedule and under budget.',
    rating: 5,
    type: 'Government Partner',
    image: '/images/partner-testimonial3.jpg'
  }
];

const partnerBenefits = [
  { icon: TrendingUp, title: 'Increased Revenue', description: 'Access to millions of customers across 18 countries', color: 'emerald' },
  { icon: Shield, title: 'Reliable Infrastructure', description: 'Robust logistics and payment systems you can trust', color: 'red' },
  { icon: Clock, title: 'Fast Onboarding', description: 'Get started in as little as 48 hours', color: 'lime' },
  { icon: Users, title: 'Dedicated Support', description: '24/7 partner support and account management', color: 'emerald' }
];

export default function PartnersPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredPartners = currentPartners.filter(partner => 
    activeTab === 'all' ? true : partner.type === activeTab
  );

  return (
    <div className="min-h-screen pt-[72px] overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-gradient-to-r from-zinc-900 to-zinc-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/partners-hero.jpg" 
            alt="Partners" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
        
        <div className="relative text-center text-white z-10 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm"
          >
            <Handshake className="w-12 h-12" />
          </motion.div>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl lg:text-7xl font-bold mb-4"
          >
            Partner With Us
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Join a network of 850+ businesses and organizations transforming Africa
          </motion.p>
        </div>
      </div>

      {/* Partner Types */}
      <div className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-emerald-600"></div>
              <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-emerald-700">Opportunities</span>
              <div className="w-8 h-[2px] bg-emerald-600"></div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Partnership Opportunities</h2>
            <p className="text-lg text-zinc-600">
              Whether you're a business, government agency, or organization — find the right partnership model for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerTypes.map((type, idx) => {
              const Icon = type.icon;
              const colorMap = {
                emerald: 'border-emerald-200 group-hover:border-emerald-400',
                red: 'border-red-200 group-hover:border-red-400',
                lime: 'border-lime-200 group-hover:border-lime-400'
              };
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`group p-6 rounded-2xl border-2 hover:shadow-xl transition-all hover:-translate-y-1 bg-white`}
                >
                  <div className={`w-14 h-14 rounded-xl bg-${type.color}-50 flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 text-${type.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                  <p className="text-zinc-600 text-sm mb-4">{type.description}</p>
                  <div className="space-y-2 mb-6">
                    {type.benefits.map(benefit => (
                      <div key={benefit} className="flex items-center gap-2 text-sm">
                        <CheckCircle className={`w-3.5 h-3.5 text-${type.color}-500 flex-shrink-0`} />
                        <span className="text-zinc-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    href={type.applyLink}
                    className={`inline-flex items-center gap-2 text-sm font-semibold text-${type.color}-600 hover:gap-3 transition-all`}
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Current Partners */}
      <div className="py-20 bg-zinc-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Trusted Partners</h2>
            <p className="text-lg text-zinc-600">Join 850+ leading organizations already partnering with us</p>
          </div>

          {/* Partner Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {['all', 'Strategic', 'B2B', 'Financial', 'B2G'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeTab === tab.toLowerCase()
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filteredPartners.map((partner, idx) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-xl p-6 text-center border border-zinc-200 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-zinc-100 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-zinc-700">{partner.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-zinc-900 mb-1">{partner.name}</h3>
                <p className="text-xs text-zinc-500">{partner.sector}</p>
                <span className={`inline-block mt-2 px-2 py-0.5 rounded-full text-xs font-semibold ${
                  partner.type === 'Strategic' ? 'bg-emerald-100 text-emerald-700' :
                  partner.type === 'B2B' ? 'bg-red-100 text-red-700' :
                  partner.type === 'Financial' ? 'bg-blue-100 text-blue-700' :
                  'bg-lime-100 text-lime-700'
                }`}>
                  {partner.type}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner Benefits */}
      <div className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Partner With WealthRim?</h2>
            <p className="text-lg text-zinc-600">Benefits that help your business grow</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              const colorMap = {
                emerald: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600',
                red: 'bg-red-50 text-red-600 group-hover:bg-red-600',
                lime: 'bg-lime-50 text-lime-600 group-hover:bg-lime-600'
              };
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group text-center p-6 rounded-2xl border border-zinc-200 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 rounded-xl '} flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110`}>
                    <Icon className={`w-8 h-8 group-hover:text-white transition-colors`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-zinc-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-zinc-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Partners Say</h2>
            <p className="text-lg text-zinc-600">Hear from businesses already growing with WealthRim</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-zinc-200 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-zinc-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-400"></div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-zinc-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-emerald-600 via-red-600 to-lime-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-[1000px] mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <UserPlus className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Partner With Us?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join the fastest-growing business network in Africa. Get started today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/invest" className="px-8 py-3 bg-white text-zinc-900 rounded-full font-semibold hover:bg-zinc-100 transition-colors inline-flex items-center gap-2">
                Apply to Partner <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="px-8 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold hover:bg-white/30 transition-colors">
                Contact Partnership Team
              </Link>
            </div>
            <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+234 800 WEALTH</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>partners@wealthrim.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Schedule a call</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}