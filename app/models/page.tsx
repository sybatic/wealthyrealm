'use client';

import { motion } from 'framer-motion';
import { 
  Store, Users, Landmark, TrendingUp, Shield, 
  ArrowRight, CheckCircle, Building2, Truck, Shirt,
  BarChart, DollarSign, Globe, Target, Zap, Award
} from 'lucide-react';
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
    gradient: 'from-emerald-600 to-green-700',
    tags: ['Food app orders', 'Fabric retail', 'Property sales'],
    stats: { customers: '47K+', growth: '+156%', satisfaction: '98%' }
  },
  {
    icon: Users,
    title: 'B2B',
    subtitle: 'Business to Business',
    description: 'Enterprise solutions for restaurants, designers, and corporate clients',
    color: 'text-red-600',
    bg: 'bg-red-50',
    border: 'border-red-200',
    gradient: 'from-red-600 to-rose-700',
    tags: ['Restaurant partners', 'Fashion houses', 'Corporate leasing'],
    stats: { partners: '850+', growth: '+234%', retention: '94%' }
  },
  {
    icon: Landmark,
    title: 'B2G',
    subtitle: 'Business to Government',
    description: 'Public-private partnerships for housing, catering, and infrastructure',
    color: 'text-lime-600',
    bg: 'bg-lime-50',
    border: 'border-lime-200',
    gradient: 'from-lime-500 to-yellow-500',
    tags: ['Affordable housing', 'School feeding', 'Infrastructure'],
    stats: { contracts: '47+', countries: '12', value: '$180M' }
  }
];

const revenueStreams = [
  {
    model: 'B2C',
    streams: [
      'Commission on food deliveries',
      'Direct fabric sales to consumers',
      'Property sales commissions',
      'Premium subscription features'
    ],
    percentage: 35
  },
  {
    model: 'B2B',
    streams: [
      'Enterprise delivery contracts',
      'Bulk fabric supply to designers',
      'Corporate real estate leasing',
      'White-label solutions'
    ],
    percentage: 42
  },
  {
    model: 'B2G',
    streams: [
      'Government PPP projects',
      'School feeding programs',
      'Public housing developments',
      'Infrastructure contracts'
    ],
    percentage: 23
  }
];

const advantages = [
  {
    icon: Shield,
    title: 'Diversified Risk',
    description: 'Revenue across 3 channels reduces dependency on any single market',
    color: 'emerald'
  },
  {
    icon: TrendingUp,
    title: 'Stable Returns',
    description: '12 years of consistent growth across economic cycles',
    color: 'red'
  },
  {
    icon: Globe,
    title: 'Scalable Infrastructure',
    description: 'Shared logistics and technology across all business models',
    color: 'lime'
  },
  {
    icon: Target,
    title: 'Market Leadership',
    description: 'First-mover advantage in integrated multi-sector model',
    color: 'emerald'
  }
];

export default function ModelsPage() {
  return (
    <div className="min-h-screen pt-[72px] overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-gradient-to-r from-zinc-900 to-zinc-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(5,150,105,0.2),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(132,204,22,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative text-center text-white z-10 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm"
          >
            <TrendingUp className="w-12 h-12" />
          </motion.div>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl lg:text-7xl font-bold mb-4"
          >
            Our Business Models
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            One platform, three channels — serving B2C, B2B, and B2G markets simultaneously
          </motion.p>
        </div>
      </div>

      {/* Models Overview */}
      <div className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-emerald-600"></div>
              <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-emerald-700">Our Approach</span>
              <div className="w-8 h-[2px] bg-emerald-600"></div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Three Integrated Business Models</h2>
            <p className="text-lg text-zinc-600">
              WealthRim uniquely operates across all market segments, creating a resilient and diversified revenue portfolio
            </p>
          </div>

          <div className="space-y-12">
            {businessModels.map((model, idx) => {
              const Icon = model.icon;
              return (
                <motion.div
                  key={model.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`group relative p-8 lg:p-10 rounded-[32px] border-2 ${model.border} bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
                >
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-1">
                      <div className={`w-20 h-20 rounded-2xl ${model.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className={`w-10 h-10 ${model.color}`} />
                      </div>
                      <h3 className="text-3xl font-bold mb-2">{model.title}</h3>
                      <div className={`text-sm font-semibold ${model.color} mb-4`}>{model.subtitle}</div>
                      <p className="text-zinc-600 leading-relaxed">{model.description}</p>
                    </div>

                    <div className="lg:col-span-1">
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-zinc-900">Key Markets</h4>
                        <div className="flex flex-wrap gap-2">
                          {model.tags.map(tag => (
                            <span key={tag} className="px-3 py-1.5 rounded-full bg-zinc-50 text-[13px] text-zinc-700 border border-zinc-200">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-zinc-900">Performance Metrics</h4>
                        <div className="grid grid-cols-3 gap-4">
                          {Object.entries(model.stats).map(([key, val]) => (
                            <div key={key}>
                              <div className="text-2xl font-bold text-zinc-900">{val}</div>
                              <div className="text-xs text-zinc-500 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-1">
                      <Link 
                        href="/invest" 
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${model.gradient} text-white rounded-full font-semibold hover:opacity-90 transition-opacity`}
                      >
                        Invest in {model.title} <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  <div className={`absolute top-0 right-0 w-32 h-32 ${model.bg} rounded-bl-[100px] rounded-tr-[32px] opacity-[0.03] group-hover:opacity-[0.08] transition-opacity`}></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Revenue Distribution */}
      <div className="py-20 bg-zinc-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Diversified Revenue Portfolio</h2>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Our balanced revenue mix across B2C, B2B, and B2G channels provides stability and 
                growth potential. Each model complements the others, creating a resilient business ecosystem.
              </p>
              <div className="space-y-6">
                {revenueStreams.map((stream, idx) => {
                  const modelColors = {
                    B2C: 'bg-emerald-500',
                    B2B: 'bg-red-500',
                    B2G: 'bg-lime-500'
                  };
                  return (
                    <div key={stream.model}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">{stream.model}</span>
                        <span className="text-zinc-600">{stream.percentage}% of revenue</span>
                      </div>
                      <div className="w-full h-3 bg-zinc-200 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stream.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: idx * 0.2 }}
                          className={`h-full rounded-full`}
                        />
                      </div>
                      <div className="mt-2 text-sm text-zinc-600">
                        {stream.streams.slice(0, 2).join(' • ')}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-zinc-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-6 h-6 text-emerald-600" />
                <h3 className="text-xl font-bold">Revenue by Model (2024)</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>B2B (Enterprise)</span>
                    <span className="font-semibold text-red-600">42%</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-100 rounded-full">
                    <div className="w-[42%] h-full bg-red-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>B2C (Consumer)</span>
                    <span className="font-semibold text-emerald-600">35%</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-100 rounded-full">
                    <div className="w-[35%] h-full bg-emerald-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>B2G (Government)</span>
                    <span className="font-semibold text-lime-600">23%</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-100 rounded-full">
                    <div className="w-[23%] h-full bg-lime-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-zinc-200">
                <div className="flex items-center gap-2 text-sm text-zinc-600">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span>Projected B2G growth: +45% in 2025</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Advantages */}
      <div className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Competitive Advantages</h2>
            <p className="text-lg text-zinc-600">What makes our multi-channel model unique</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, idx) => {
              const Icon = advantage.icon;
              const colorMap = {
                emerald: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600',
                red: 'bg-red-50 text-red-600 group-hover:bg-red-600',
                lime: 'bg-lime-50 text-lime-600 group-hover:bg-lime-600'
              };
              return (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group text-center p-6 rounded-2xl border border-zinc-200 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 rounded-xl  flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110`}>
                    <Icon className={`w-8 h-8 group-hover:text-white transition-colors`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-sm text-zinc-600">{advantage.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Case Study */}
      <div className="py-20 bg-gradient-to-r from-emerald-600 via-red-600 to-lime-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-[1000px] mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Award className="w-12 h-12 mx-auto mb-6 text-white/80" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Proven Model, Exceptional Results</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Our integrated approach has delivered 12 consecutive years of profitability and growth
            </p>
            <div className="flex flex-wrap gap-8 justify-center mb-12">
              <div>
                <div className="text-3xl font-bold">12+</div>
                <div className="text-sm text-white/80">Years Profitable</div>
              </div>
              <div>
                <div className="text-3xl font-bold">3x</div>
                <div className="text-sm text-white/80">Revenue Growth (2020-2024)</div>
              </div>
              <div>
                <div className="text-3xl font-bold">18</div>
                <div className="text-sm text-white/80">Countries Served</div>
              </div>
            </div>
            <Link href="/invest" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-zinc-900 rounded-full font-semibold hover:bg-zinc-100 transition-colors">
              Explore Investment Opportunities <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}