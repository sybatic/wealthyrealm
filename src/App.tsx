import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  Truck, Shirt, Building2, TrendingUp, Users, Landmark, Store,
  ChevronRight, Star, Quote, ArrowUpRight, Check, Menu, X,
  Package, Globe, Award, Shield, Clock, Phone, Mail, MapPin
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const services = [
    {
      id: 'food',
      title: 'Food Delivery',
      subtitle: 'WealthRim Eats',
      description: 'Fast, fresh, and reliable food delivery connecting local restaurants to homes and offices across the region.',
      image: '/images/food-delivery.jpg',
      color: 'from-emerald-600 to-green-700',
      accent: 'bg-emerald-500',
      stats: { orders: '2.4M+', partners: '850+', cities: '24' },
      features: ['30-min average delivery', 'Real-time tracking', 'B2B catering solutions', 'Government contract meals']
    },
    {
      id: 'fabric',
      title: 'Fabric Delivery',
      subtitle: 'WealthRim Textiles',
      description: 'Premium African fabrics, textiles, and fashion materials delivered to designers, retailers, and manufacturers.',
      image: '/images/fabric.jpg',
      color: 'from-red-600 to-rose-700',
      accent: 'bg-red-500',
      stats: { fabrics: '5K+', designers: '1.2K+', countries: '18' },
      features: ['Authentic Ankara & Kente', 'Bulk B2B supply', 'Custom printing', 'Export to 18 countries']
    },
    {
      id: 'realestate',
      title: 'Real Estate',
      subtitle: 'WealthRim Properties',
      description: 'Developing affordable housing, commercial spaces, and government infrastructure projects across Africa.',
      image: '/images/realestate.jpg',
      color: 'from-lime-500 to-yellow-500',
      accent: 'bg-lime-500',
      stats: { units: '3.5K+', value: '$420M', projects: '47' },
      features: ['Residential developments', 'Commercial leasing', 'PPP government projects', 'Property management']
    }
  ];

  const businessModels = [
    {
      icon: Store,
      title: 'B2C',
      subtitle: 'Business to Customer',
      description: 'Direct services to consumers through our delivery apps and property sales',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200'
    },
    {
      icon: Users,
      title: 'B2B',
      subtitle: 'Business to Business',
      description: 'Enterprise solutions for restaurants, designers, and corporate clients',
      color: 'text-red-600',
      bg: 'bg-red-50',
      border: 'border-red-200'
    },
    {
      icon: Landmark,
      title: 'B2G',
      subtitle: 'Business to Government',
      description: 'Public-private partnerships for housing, catering, and infrastructure',
      color: 'text-lime-600',
      bg: 'bg-lime-50',
      border: 'border-lime-200'
    }
  ];

  const stats = [
    { value: 12, suffix: '+', label: 'Years of Excellence', sublabel: 'Since 2012' },
    { value: 47, suffix: 'K+', label: 'Happy Customers', sublabel: 'Across 3 divisions' },
    { value: 850, suffix: '+', label: 'Business Partners', sublabel: 'Trusted network' },
    { value: 420, suffix: 'M', prefix: '$', label: 'Assets Under Management', sublabel: 'And growing' }
  ];

  const partners = [
    'MTN Group', 'Dangote Industries', 'Shoprite', 'Jumia', 'Standard Bank', 'Ecobank', 'UN Habitat', 'AfDB'
  ];

  const testimonials = [
    {
      name: 'Amara Okafor',
      role: 'CEO, Lagos Fashion House',
      image: '/images/testimonial1.jpg',
      content: 'WealthRim Textiles transformed our supply chain. Their B2B fabric delivery is 3x faster than our previous supplier, and the quality of authentic Ankara is unmatched.',
      rating: 5,
      company: 'B2B Partner'
    },
    {
      name: 'Kwame Mensah',
      role: 'Director, Ministry of Housing Ghana',
      image: '/images/testimonial2.jpg',
      content: 'The PPP project with WealthRim Properties delivered 500 affordable homes 4 months ahead of schedule. Their B2G model sets the standard for public-private collaboration.',
      rating: 5,
      company: 'B2G Partner'
    },
    {
      name: 'Zainab Ibrahim',
      role: 'Restaurant Owner, Abuja',
      image: '/images/testimonial3.jpg',
      content: 'Since joining WealthRim Eats, our delivery orders increased by 340%. Their platform handles everything from B2C customers to our corporate catering contracts.',
      rating: 5,
      company: 'B2B & B2C'
    }
  ];

  // Auto-rotate services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFCF8] text-zinc-900 overflow-x-hidden">
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-600 via-red-600 to-lime-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#FFFCF8]/80 backdrop-blur-xl border-b border-zinc-200/50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-600/20">
                  <span className="text-white font-bold text-lg tracking-tight">W</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-600 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <div className="font-bold text-[22px] leading-none tracking-tight">WealthRim</div>
                <div className="text-[10px] text-zinc-500 font-medium tracking-widest uppercase -mt-0.5">GROUP OF COMPANIES</div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              {['Divisions', 'Models', 'Impact', 'Partners', 'About'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-[14px] font-medium text-zinc-600 hover:text-zinc-900 transition-colors relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden sm:flex items-center gap-2 px-5 h-10 rounded-full bg-zinc-900 text-white text-[14px] font-medium hover:bg-zinc-800 transition-colors">
                Invest
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden absolute top-[72px] left-0 right-0 bg-white border-b border-zinc-200 shadow-xl"
          >
            <div className="px-6 py-4 space-y-3">
              {['Divisions', 'Models', 'Impact', 'Partners', 'About'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block py-2 text-[15px] font-medium">
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
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
                  <button className="group relative px-7 h-[48px] bg-white text-zinc-900 rounded-full font-[550] text-[15px] overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Divisions
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-lime-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                  <button className="px-7 h-[48px] bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-[550] text-[15px] hover:bg-white/15 transition-colors">
                    Partner With Us
                  </button>
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

                {/* Floating stats */}
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

      {/* Three Divisions */}
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
                  <img src={service.image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
                      <div className={`w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:bg-white/20 transition-colors`}>
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
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

      {/* Business Models - B2B B2C B2G */}
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
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-zinc-200 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-green-700 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-[15px] leading-tight">Investment Opportunity</div>
                    <div className="text-[13px] text-zinc-600 mt-0.5">Diversified revenue across 3 models</div>
                  </div>
                </div>
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
                            {idx === 0 && ['Food app orders', 'Fabric retail', 'Property sales'].map(tag => (
                              <span key={tag} className="px-3 py-1.5 rounded-full bg-zinc-50 text-[12px] font-medium text-zinc-700 border border-zinc-200">{tag}</span>
                            ))}
                            {idx === 1 && ['Restaurant partners', 'Fashion houses', 'Corporate leasing'].map(tag => (
                              <span key={tag} className="px-3 py-1.5 rounded-full bg-zinc-50 text-[12px] font-medium text-zinc-700 border border-zinc-200">{tag}</span>
                            ))}
                            {idx === 2 && ['Affordable housing', 'School feeding', 'Infrastructure'].map(tag => (
                              <span key={tag} className="px-3 py-1.5 rounded-full bg-zinc-50 text-[12px] font-medium text-zinc-700 border border-zinc-200">{tag}</span>
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
                  <p className="text-[14px] leading-[1.6] text-zinc-400 max-w-[520px]">Our three-channel model reduces dependency on any single market. When B2C slows, B2B and B2G contracts provide stability. 12 years of consistent growth across economic cycles.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
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
              <p className="text-[17px] leading-[1.65] text-zinc-400">From a single food delivery pilot in Lagos (2012) to a multi-sector group operating in 18 countries. Profitable every year since inception.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-zinc-800 rounded-[28px] overflow-hidden border border-zinc-800">
            {stats.map((stat, idx) => (
              <Counter key={idx} stat={stat} idx={idx} />
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: Package, title: 'Integrated Logistics', desc: 'Shared fleet serves all 3 divisions, 40% cost reduction' },
              { icon: Globe, title: 'Pan-African', desc: 'Operations in 18 countries, 24 major cities' },
              { icon: Award, title: 'Award Winning', desc: 'African Business Awards 2023 - Diversified Group of Year' }
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm">
                <item.icon className="w-5 h-5 text-lime-400 mb-3" />
                <h4 className="font-semibold mb-1.5">{item.title}</h4>
                <p className="text-[14px] text-zinc-500 leading-[1.5]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-20 bg-white border-y border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
            <div>
              <h3 className="text-[22px] font-[650] mb-2">Trusted by leading organizations</h3>
              <p className="text-[14px] text-zinc-600">Partners across B2B and B2G sectors</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-zinc-200"></div>
                ))}
              </div>
              <span className="text-[13px] text-zinc-600"><strong className="text-zinc-900">850+</strong> active partners</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {partners.map((partner) => (
              <div key={partner} className="group h-[72px] flex items-center justify-center px-4 rounded-2xl border border-zinc-200 bg-zinc-50/50 hover:bg-white hover:border-zinc-300 hover:shadow-sm transition-all">
                <span className="text-[13px] font-[550] text-zinc-500 group-hover:text-zinc-900 text-center leading-tight">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-[#FFFCF8]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-[640px] mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-red-600"></div>
              <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-red-700">Testimonials</span>
              <div className="w-8 h-[2px] bg-red-600"></div>
            </div>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-[650] leading-[1.1] tracking-[-0.02em] mb-4">What our partners say</h2>
            <p className="text-[17px] text-zinc-600">Real results from B2B, B2C, and B2G collaborations</p>
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
                  
                  <p className="text-[16px] leading-[1.65] text-zinc-700 mb-8 font-[450]">"{testimonial.content}"</p>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-zinc-100">
                    <img src={testimonial.image} alt="" className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-[15px] leading-tight">{testimonial.name}</div>
                      <div className="text-[13px] text-zinc-600 leading-tight mt-0.5">{testimonial.role}</div>
                    </div>
                    <div className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${idx === 0 ? 'bg-emerald-50 text-emerald-700' : idx === 1 ? 'bg-lime-50 text-lime-700' : 'bg-red-50 text-red-700'}`}>{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(5,150,105,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(220,38,38,0.12),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(132,204,22,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative max-w-[1000px] mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-8">
            <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></div>
            <span className="text-[12px] font-medium tracking-wide">NOW ACCEPTING PARTNERS</span>
          </div>
          
          <h2 className="text-[clamp(36px,6vw,68px)] font-[650] leading-[0.9] tracking-[-0.03em] mb-6">
            Partner with
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-lime-300 to-yellow-300 bg-clip-text text-transparent">WealthRim</span>
          </h2>
          
          <p className="text-[18px] leading-[1.6] text-zinc-400 max-w-[640px] mx-auto mb-12">
            Whether you're a restaurant, fashion designer, property developer, or government agency — we have the infrastructure to scale your operations across Africa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button className="group w-full sm:w-auto px-8 h-[52px] bg-white text-zinc-950 rounded-full font-[600] text-[15px] flex items-center justify-center gap-2 hover:bg-zinc-100 transition-colors">
              Become a Partner
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 h-[52px] bg-white/5 backdrop-blur-md border border-white/15 text-white rounded-full font-[550] text-[15px] hover:bg-white/10 transition-colors">
              Investment Deck
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[720px] mx-auto mt-20 pt-12 border-t border-white/10">
            {[
              { icon: Phone, label: 'Call us', value: '+234 800 WEALTH' },
              { icon: Mail, label: 'Email', value: 'partners@wealthrim.com' },
              { icon: MapPin, label: 'HQ', value: 'Lagos, Nigeria' }
            ].map((contact) => (
              <div key={contact.label} className="text-center">
                <contact.icon className="w-5 h-5 mx-auto mb-3 text-zinc-500" />
                <div className="text-[12px] uppercase tracking-wider text-zinc-500 font-medium mb-1">{contact.label}</div>
                <div className="text-[15px] font-medium">{contact.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <div>
                <div className="font-semibold leading-none">WealthRim Group</div>
                <div className="text-[12px] text-zinc-500">© 2012-2024. All rights reserved.</div>
              </div>
            </div>
            <div className="flex items-center gap-6 text-[13px] text-zinc-600">
              <a href="#" className="hover:text-zinc-900">Privacy</a>
              <a href="#" className="hover:text-zinc-900">Terms</a>
              <a href="#" className="hover:text-zinc-900">Careers</a>
              <div className="flex items-center gap-1.5 pl-6 border-l border-zinc-200">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-zinc-500">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Counter({ stat, idx }: { stat: any; idx: number }) {
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

  return (
    <div ref={ref} className="relative p-10 lg:p-12 bg-zinc-950 hover:bg-zinc-900/50 transition-colors group">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex items-baseline gap-1 mb-3">
        {stat.prefix && <span className="text-[24px] font-[550] text-zinc-600">{stat.prefix}</span>}
        <span className="text-[48px] lg:text-[56px] font-[650] leading-none tracking-[-0.02em] text-white">{count}</span>
        <span className="text-[32px] font-[550] text-lime-400">{stat.suffix}</span>
      </div>
      <div className="text-[15px] font-[550] text-white mb-1">{stat.label}</div>
      <div className="text-[13px] text-zinc-500">{stat.sublabel}</div>
      
      {idx === 0 && <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-emerald-500/30 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div></div>}
      {idx === 1 && <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-red-500/30 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div></div>}
      {idx === 2 && <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-lime-500/30 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-lime-500"></div></div>}
      {idx === 3 && <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-yellow-500/30 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div></div>}
    </div>
  );
}

export default App;