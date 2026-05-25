import Link from "next/link";
import { ArrowUpRight, Globe, Users, Award, TrendingUp } from "lucide-react";
import Footer from "@/components/Footer";

const milestones = [
  { year:"2012", title:"Founded in Lagos",      desc:"Started as a single food delivery operation serving 3 neighbourhoods in Lagos Island." },
  { year:"2015", title:"Textiles Division",     desc:"Launched WealthRim Textiles in response to demand from fashion designers for reliable fabric supply." },
  { year:"2018", title:"Real Estate Arm",       desc:"Entered real estate with first PPP affordable-housing project in Abuja — 200 units delivered on time." },
  { year:"2020", title:"Pan-African Expansion", desc:"Crossed into Ghana, Côte d'Ivoire, and Kenya. Operations now span 12 countries." },
  { year:"2022", title:"$420M Portfolio",       desc:"Assets under management crossed $420M. Recognised at African Business Awards as Emerging Group of the Year." },
  { year:"2024", title:"18 Countries",          desc:"Serving consumers, businesses, and governments across 18 African nations with 47K+ active customers." },
];

const values = [
  { icon: Globe,      title:"Pan-African First",      desc:"Every decision is made with the African market in mind — infrastructure that truly fits the continent." },
  { icon: Users,      title:"Community Impact",       desc:"From school feeding programmes to affordable housing, we measure success in lives improved." },
  { icon: TrendingUp, title:"Profitable Growth",      desc:"Profitable every year since inception. We grow at a pace we can sustain and stand behind." },
  { icon: Award,      title:"Operational Excellence", desc:"Award-winning logistics, textile supply chains, and real estate delivery. We execute, always." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">

      {/* Hero */}
      <section className="py-24 lg:py-32 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(5,150,105,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(220,38,38,0.1),transparent_50%)]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-[780px]">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-lime-400" />
              <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-lime-400">Our Story</span>
            </div>
            <h1 className="text-[clamp(40px,6vw,72px)] font-extrabold leading-[0.9] tracking-tight mb-8">
              12 years of<br />
              <span className="bg-gradient-to-r from-emerald-400 via-lime-300 to-yellow-300 bg-clip-text text-transparent">
                building Africa.
              </span>
            </h1>
            <p className="text-[19px] leading-[1.65] text-zinc-300 max-w-[640px]">
              WealthRim Group began with a simple belief: Africa&apos;s growing middle class deserved reliable, technology-driven services.
              We started with food. Then fabric. Then homes. Today we serve 47,000 customers across 18 countries — and we&apos;re just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-emerald-600" />
              <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-emerald-700">What We Stand For</span>
            </div>
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold tracking-tight">Our core values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-7 rounded-[24px] border border-zinc-200 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50 transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition-colors">
                  <Icon className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="font-bold text-[17px] mb-2">{title}</h3>
                <p className="text-[14px] leading-[1.6] text-zinc-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-red-600" />
              <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-red-700">Timeline</span>
            </div>
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold tracking-tight">Key milestones</h2>
          </div>

          <div className="relative max-w-[800px] mx-auto">
            {/* Line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-zinc-200" />
            <div className="space-y-10">
              {milestones.map((m, idx) => (
                <div key={m.year} className="relative flex items-start gap-8 pl-14">
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center z-10 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-emerald-600 uppercase tracking-widest mb-1">{m.year}</div>
                    <h3 className="text-[18px] font-bold mb-2">{m.title}</h3>
                    <p className="text-[15px] leading-[1.6] text-zinc-500">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(132,204,22,0.1),transparent_50%)]" />
        <div className="relative max-w-[900px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[clamp(32px,5vw,56px)] font-extrabold leading-[0.95] tracking-tight mb-6">
            Ready to invest in<br />
            <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">Africa&apos;s future?</span>
          </h2>
          <p className="text-[17px] text-zinc-400 max-w-[520px] mx-auto mb-10 leading-[1.6]">
            Join our growing network of investors and partners building the infrastructure that powers Africa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/invest"
              className="group flex items-center gap-2 px-8 h-[52px] bg-white text-zinc-950 rounded-full font-semibold text-[15px] hover:bg-zinc-100 transition-colors">
              Apply to Invest <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link href="/partners"
              className="flex items-center justify-center px-8 h-[52px] bg-white/5 border border-white/15 text-white rounded-full font-medium text-[15px] hover:bg-white/10 transition-colors">
              View Partners
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
