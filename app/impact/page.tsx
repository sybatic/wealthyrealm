'use client';

import { motion } from 'framer-motion';
import { 
  TrendingUp, Users, Home, Package, Globe, Award,
  Heart, Leaf, Briefcase, GraduationCap, Building2,
  DollarSign, Clock, CheckCircle, ArrowRight, Zap,
  Battery, Droplet, Recycle, Coffee
} from 'lucide-react';
import Link from 'next/link';

const impactMetrics = [
  {
    category: 'Economic Impact',
    metrics: [
      { value: '47K+', label: 'Jobs Created', icon: Briefcase, color: 'emerald' },
      { value: '$420M', label: 'AUM', icon: DollarSign, color: 'emerald' },
      { value: '850+', label: 'SMEs Supported', icon: Building2, color: 'emerald' },
      { value: '2.4M+', label: 'Deliveries Completed', icon: Package, color: 'emerald' }
    ]
  },
  {
    category: 'Social Impact',
    metrics: [
      { value: '3.5K+', label: 'Homes Built', icon: Home, color: 'red' },
      { value: '1.2M+', label: 'Meals Served', icon: Coffee, color: 'red' },
      { value: '5K+', label: 'Designers Empowered', icon: Users, color: 'red' },
      { value: '98%', label: 'Customer Satisfaction', icon: Heart, color: 'red' }
    ]
  },
  {
    category: 'Environmental Impact',
    metrics: [
      { value: '40%', label: 'Fleet Emission Reduction', icon: Leaf, color: 'lime' },
      { value: '25K+', label: 'Trees Planted', icon: Recycle, color: 'lime' },
      { value: '15%', label: 'Energy Efficiency', icon: Battery, color: 'lime' },
      { value: '1M+', label: 'Plastic Waste Reduced', icon: Droplet, color: 'lime' }
    ]
  }
];

const stories = [
  {
    title: 'Empowering Local Restaurants',
    description: 'Helped 500+ local restaurants increase revenue by an average of 340% through our delivery platform',
    icon: Coffee,
    stat: '340%',
    statLabel: 'Average Revenue Increase',
    color: 'emerald'
  },
  {
    title: 'Supporting African Artisans',
    description: 'Connected 1,200+ fabric designers and artisans to global markets, preserving traditional crafts',
    icon: Award,
    stat: '1.2K+',
    statLabel: 'Artisans Supported',
    color: 'red'
  },
  {
    title: 'Affordable Housing Initiative',
    description: 'Delivered 3,500+ affordable homes to low and middle-income families across 5 countries',
    icon: Home,
    stat: '3.5K+',
    statLabel: 'Homes Delivered',
    color: 'lime'
  }
];

const sdgs = [
  { goal: 'No Poverty', icon: Heart, color: 'emerald' },
  { goal: 'Zero Hunger', icon: Coffee, color: 'emerald' },
  { goal: 'Decent Work', icon: Briefcase, color: 'red' },
  { goal: 'Industry Innovation', icon: Building2, color: 'red' },
  { goal: 'Sustainable Cities', icon: Home, color: 'lime' },
  { goal: 'Climate Action', icon: Leaf, color: 'lime' }
];

export default function ImpactPage() {
  return (
    <div className="min-h-screen pt-[72px] overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-gradient-to-r from-zinc-900 to-zinc-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/impact-hero.jpg" 
            alt="Impact" 
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
            <Globe className="w-12 h-12" />
          </motion.div>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl lg:text-7xl font-bold mb-4"
          >
            Our Impact
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Creating lasting economic, social, and environmental change across Africa
          </motion.p>
        </div>
      </div>

      {/* Impact Metrics by Category */}
      {impactMetrics.map((category, catIdx) => (
        <div key={category.category} className={`py-20 ${catIdx % 2 === 0 ? 'bg-white' : 'bg-zinc-50'}`}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">{category.category}</h2>
              <div className={`w-20 h-1 mx-auto rounded-full ${
                catIdx === 0 ? 'bg-emerald-500' : catIdx === 1 ? 'bg-red-500' : 'bg-lime-500'
              }`}></div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {category.metrics.map((metric, idx) => {
                const Icon = metric.icon;
                const colorMap = {
                  emerald: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600',
                  red: 'bg-red-50 text-red-600 group-hover:bg-red-600',
                  lime: 'bg-lime-50 text-lime-600 group-hover:bg-lime-600'
                };
                return (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group text-center p-6 rounded-2xl border border-zinc-200 bg-white hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div className={`w-16 h-16 rounded-xl  flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110`}>
                      <Icon className={`w-8 h-8  group-hover:text-white transition-colors`} />
                    </div>
                    <div className="text-3xl font-bold text-zinc-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-zinc-600">{metric.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      ))}

      {/* Impact Stories */}
      <div className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-emerald-600"></div>
              <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-emerald-700">Success Stories</span>
              <div className="w-8 h-[2px] bg-emerald-600"></div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Real Impact, Real Stories</h2>
            <p className="text-lg text-zinc-600">How WealthRim Group is transforming lives and communities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story, idx) => {
              const Icon = story.icon;
              const colorMap = {
                emerald: 'bg-emerald-50 text-emerald-600 border-emerald-200',
                red: 'bg-red-50 text-red-600 border-red-200',
                lime: 'bg-lime-50 text-lime-600 border-lime-200'
              };
              return (
                <motion.div
                  key={story.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`group p-8 rounded-2xl border-2  hover:shadow-xl transition-all hover:-translate-y-1 bg-white`}
                >
                  <div className={`w-16 h-16 rounded-xl  flex items-center justify-center mb-4`}>
                    <Icon className={`w-8 h-8 `} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{story.title}</h3>
                  <p className="text-zinc-600 mb-4 leading-relaxed">{story.description}</p>
                  <div className="pt-4 border-t border-zinc-100">
                    <div className="text-2xl font-bold text-zinc-900">{story.stat}</div>
                    <div className="text-xs text-zinc-500">{story.statLabel}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* SDG Alignment */}
      <div className="py-20 bg-gradient-to-r from-emerald-600 via-red-600 to-lime-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Contributing to UN SDGs</h2>
            <p className="text-lg text-white/90">
              Our work directly supports the United Nations Sustainable Development Goals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {sdgs.map((sdg, idx) => {
              const Icon = sdg.icon;
              return (
                <motion.div
                  key={sdg.goal}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-all group-hover:scale-110">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-xs font-semibold">{sdg.goal}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Future Commitments */}
      <div className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Commitment to the Future</h2>
              <p className="text-zinc-600 mb-6 leading-relaxed text-lg">
                We're not just building a business — we're building a better future for Africa. 
                Our 2030 commitments reflect our dedication to sustainable, inclusive growth.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Create 50,000+ jobs across Africa',
                  'Deliver 25,000 affordable homes',
                  'Support 10,000+ local artisans',
                  'Achieve carbon neutrality',
                  'Invest $50M in community development'
                ].map(commitment => (
                  <div key={commitment} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-zinc-700">{commitment}</span>
                  </div>
                ))}
              </div>
              <Link href="/invest" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-800 transition-colors">
                Partner With Us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-lime-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">2030 Vision</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Jobs Created</span>
                      <span>50,000</span>
                    </div>
                    <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
                      <div className="w-[30%] h-full bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Homes Built</span>
                      <span>25,000</span>
                    </div>
                    <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
                      <div className="w-[20%] h-full bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Carbon Reduction</span>
                      <span>50%</span>
                    </div>
                    <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
                      <div className="w-[40%] h-full bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}