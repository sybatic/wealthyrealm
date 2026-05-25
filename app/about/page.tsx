'use client';

import { motion } from 'framer-motion';
import { 
  Building2, Users, Globe, Award, Clock, Target, 
  Eye, Heart, Handshake, Lightbulb, TrendingUp, 
  Shield, CheckCircle, ArrowRight, MapPin, Calendar,
  Rocket, Briefcase, GraduationCap, Leaf, RefreshCw
} from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const milestones = [
  {
    year: 2012,
    title: 'Company Founded',
    description: 'WealthRealm Int launches with food delivery pilot in Lagos, Nigeria',
    icon: Rocket,
    color: 'emerald'
  },
  {
    year: 2015,
    title: 'Expansion to Fabric',
    description: 'Launched WealthRealm Int Textiles, entering the fabric supply chain market',
    icon: Briefcase,
    color: 'red'
  },
  {
    year: 2018,
    title: 'Real Estate Division',
    description: 'WealthRealm Int Properties founded, beginning affordable housing projects',
    icon: Building2,
    color: 'lime'
  },
  {
    year: 2020,
    title: 'Pan-African Expansion',
    description: 'Operations expanded to 18 countries across Africa',
    icon: Globe,
    color: 'emerald'
  },
  {
    year: 2022,
    title: 'Government Partnerships',
    description: 'Signed major PPP agreements with 5 African governments',
    icon: Handshake,
    color: 'red'
  },
  {
    year: 2024,
    title: '$420M AUM',
    description: 'Achieved $420 million in assets under management',
    icon: TrendingUp,
    color: 'lime'
  }
];

const values = [
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We operate with transparency and honesty in every transaction',
    color: 'emerald'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Committed to delivering the highest quality in everything we do',
    color: 'red'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Building lasting partnerships with stakeholders across Africa',
    color: 'lime'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Leveraging technology to solve African infrastructure challenges',
    color: 'emerald'
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Creating lasting impact for communities and the environment',
    color: 'red'
  },
  {
    icon: RefreshCw,
    title: 'Resilience',
    description: 'Adapting and growing through economic cycles since 2012',
    color: 'lime'
  }
];

const leadershipTeam = [
  {
    name: 'Adebayo Ogunlesi',
    role: 'Founder & Group CEO',
    bio: 'Former investment banker with 20+ years experience in African markets',
    image: '/images/leader1.jpg',
    color: 'emerald'
  },
  {
    name: 'Ngozi Okonjo',
    role: 'Chief Operating Officer',
    bio: 'Operations expert with background in logistics and supply chain',
    image: '/images/leader2.jpg',
    color: 'red'
  },
  {
    name: 'Kwame Asante',
    role: 'Chief Financial Officer',
    bio: 'Financial strategist specializing in emerging markets',
    image: '/images/leader3.jpg',
    color: 'lime'
  }
];

const impactStats = [
  { value: '12', suffix: '+', label: 'Years of Impact', icon: Calendar },
  { value: '3.5K', suffix: '+', label: 'Homes Built', icon: Building2 },
  { value: '2.4M', suffix: '+', label: 'Meals Delivered', icon: Clock },
  { value: '5K', suffix: '+', label: 'Designers Served', icon: Users },
  { value: '18', suffix: '', label: 'Countries', icon: Globe },
  { value: '47K', suffix: '+', label: 'Happy Customers', icon: Heart }
];

export default function AboutPage() {
  const [activeMilestone, setActiveMilestone] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMilestone((prev) => (prev + 1) % milestones.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-[72px] overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-gradient-to-r from-zinc-900 to-zinc-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/about-hero.jpg" 
            alt="About WealthRealm Int" 
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
            <Building2 className="w-12 h-12" />
          </motion.div>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl lg:text-7xl font-bold mb-4"
          >
            About WealthRealm Int
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Building Africa's infrastructure ecosystem since 2012
          </motion.p>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-[2px] bg-emerald-600"></div>
                <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-emerald-700">Our Story</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">From a Single Pilot to a Pan-African Powerhouse</h2>
              <p className="text-zinc-600 mb-6 leading-relaxed text-lg">
                WealthRealm Int started in 2012 with a simple idea: build technology-powered infrastructure 
                that serves all Africans. What began as a food delivery pilot in Lagos has grown into a 
                multi-sector group operating in 18 countries.
              </p>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Today, we power three essential industries - Food Delivery, Fabric Supply, and Real Estate - 
                serving consumers, businesses, and governments through integrated logistics and technology platforms.
              </p>
              <p className="text-zinc-600 mb-8 leading-relaxed">
                Our unique B2C, B2B, and B2G business model diversifies risk while maximizing impact. 
                We've been profitable every year since inception, delivering consistent returns to our 
                stakeholders while creating thousands of jobs across the continent.
              </p>
              <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-xl">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Our Mission</div>
                  <div className="text-sm text-zinc-600">To build sustainable infrastructure that powers African commerce and improves lives</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/office-building.jpg" 
                  alt="WealthRealm Int Headquarters" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-600">African Business Awards</div>
                    <div className="text-lg font-bold text-emerald-600">2023 Winner</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="py-20 bg-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
        </div>
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-red-600"></div>
              <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-red-700">Our Journey</span>
              <div className="w-8 h-[2px] bg-red-600"></div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">12 Years of Growth & Impact</h2>
            <p className="text-lg text-zinc-600">Milestones that shaped our journey across Africa</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 via-red-500 to-lime-500 hidden lg:block"></div>
            
            <div className="space-y-12 lg:space-y-0">
              {milestones.map((milestone, idx) => {
                const Icon = milestone.icon;
                const isEven = idx % 2 === 0;
                const colorMap = {
                  emerald: 'bg-emerald-500 border-emerald-200 text-emerald-600',
                  red: 'bg-red-500 border-red-200 text-red-600',
                  lime: 'bg-lime-500 border-lime-200 text-lime-600'
                };
                
                return (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`relative lg:flex lg:items-center lg:justify-between lg:gap-8 ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div className={`lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'} mb-8 lg:mb-0`}>
                      <div className="bg-white rounded-xl p-6 shadow-lg border border-zinc-200 hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-12 h-12 rounded-full } bg-opacity-10 flex items-center justify-center`}>
                            <Icon className={`w-6 h-6 `} />
                          </div>
                          <div className="text-2xl font-bold text-zinc-900">{milestone.year}</div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-zinc-600">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="hidden lg:flex lg:w-2/12 justify-center">
                      <div className={`w-4 h-4 rounded-full } ring-4 ring-white shadow-lg`}></div>
                    </div>
                    
                    <div className="lg:w-5/12"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-lime-600"></div>
              <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-lime-700">Our Values</span>
              <div className="w-8 h-[2px] bg-lime-600"></div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Drives Us</h2>
            <p className="text-lg text-zinc-600">The principles that guide our decisions and actions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              const colorMap = {
                emerald: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
                red: 'bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white',
                lime: 'bg-lime-50 text-lime-600 group-hover:bg-lime-600 group-hover:text-white'
              };
              
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-6 rounded-xl border border-zinc-200 hover:shadow-lg transition-all hover:-translate-y-1 bg-white"
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300`}>
                    <Icon className={`w-7 h-7 transition-all duration-300`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="py-20 bg-gradient-to-br from-emerald-50 via-white to-lime-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-lg text-zinc-600">Experienced leaders driving our vision forward</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, idx) => {
              const colorMap = {
                emerald: 'border-emerald-200 group-hover:border-emerald-400',
                red: 'border-red-200 group-hover:border-red-400',
                lime: 'border-lime-200 group-hover:border-lime-400'
              };
              
              return (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`group p-6 bg-white rounded-2xl border-2 } shadow-sm hover:shadow-xl transition-all duration-300`}
                >
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-zinc-200 group-hover:border-opacity-100 transition-all">
                    <div className="w-full h-full bg-gradient-to-br from-zinc-300 to-zinc-400 flex items-center justify-center text-white text-4xl font-bold">
                      {leader.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-1">{leader.name}</h3>
                  <div className="text-center text-sm font-semibold text-emerald-600 mb-3">{leader.role}</div>
                  <p className="text-center text-sm text-zinc-600">{leader.bio}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="py-20 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(5,150,105,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Impact By The Numbers</h2>
            <p className="text-lg text-zinc-400">The difference we're making across Africa</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {impactStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center group"
                >
                  <Icon className="w-8 h-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl lg:text-3xl font-bold mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Global Presence */}
      <div className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Pan-African Presence</h2>
              <p className="text-zinc-600 mb-6 leading-relaxed text-lg">
                With operations in 18 countries and growing, WealthRealm Int is building a truly pan-African 
                infrastructure network.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'West Africa: Nigeria, Ghana, Ivory Coast, Senegal',
                  'East Africa: Kenya, Tanzania, Uganda, Rwanda, Ethiopia',
                  'Southern Africa: South Africa, Zambia, Botswana',
                  'North Africa: Egypt, Morocco, Tunisia'
                ].map(region => (
                  <div key={region} className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-zinc-700">{region}</span>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-emerald-50 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-6 h-6 text-emerald-600" />
                  <span className="font-semibold">Headquarters</span>
                </div>
                <p className="text-zinc-600">Lagos, Nigeria | Regional offices in Nairobi, Accra, and Johannesburg</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/africa-map.jpg" 
                  alt="WealthRealm Int Presence in Africa" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Join Us in Building Africa's Future</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're an investor, partner, or team member — there's a place for you at WealthRealm Int
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/invest" className="px-8 py-3 bg-white text-zinc-900 rounded-full font-semibold hover:bg-zinc-100 transition-colors inline-flex items-center gap-2">
                Invest With Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/careers" className="px-8 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold hover:bg-white/30 transition-colors">
                Join Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Quote component for the mission section
function Quote({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 11h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z" />
      <path d="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
    </svg>
  );
}
