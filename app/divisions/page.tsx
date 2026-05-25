import { Truck, Shirt, Building2, ArrowUpRight, Check } from "lucide-react";
import Footer from "@/components/Footer";

const services = [
  {
    id: "food", title: "Food Delivery", subtitle: "WealthRim Eats",
    description: "Fast, fresh, and reliable food delivery connecting local restaurants to homes and offices across Africa.",
    image: "/images/food-delivery.jpg", color: "from-emerald-600 to-green-700", accent: "bg-emerald-500",
    stats: { orders: "2.4M+", partners: "850+", cities: "24" },
    features: ["30-min average delivery", "Real-time tracking", "B2B catering solutions", "Government contract meals"],
  },
  {
    id: "fabric", title: "Fabric Supply", subtitle: "WealthRim Textiles",
    description: "Premium African fabrics, textiles, and fashion materials delivered to designers, retailers, and manufacturers.",
    image: "/images/fabric.jpg", color: "from-red-600 to-rose-700", accent: "bg-red-500",
    stats: { fabrics: "5K+", designers: "1.2K+", countries: "18" },
    features: ["Authentic Ankara & Kente", "Bulk B2B supply", "Custom printing", "Export to 18 countries"],
  },
  {
    id: "realestate", title: "Real Estate", subtitle: "WealthRim Properties",
    description: "Developing affordable housing, commercial spaces, and government infrastructure across Africa.",
    image: "/images/realestate.jpg", color: "from-lime-500 to-yellow-500", accent: "bg-lime-500",
    stats: { units: "3.5K+", value: "$420M", projects: "47" },
    features: ["Residential developments", "Commercial leasing", "PPP government projects", "Property management"],
  },
];

const icons = [Truck, Shirt, Building2];

export default function Divisions() {
  return (
    <div className="min-h-screen">
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-[720px] mb-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-emerald-600" />
              <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-emerald-700">Our Divisions</span>
            </div>
            <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.05] tracking-tight mb-6">
              Built for scale.<br />Designed for Africa.
            </h1>
            <p className="text-[18px] leading-[1.6] text-zinc-600">
              Three independent businesses, one integrated ecosystem. Each division serves B2C, B2B, and B2G markets with specialized infrastructure.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s, idx) => {
              const Icon = icons[idx];
              return (
                <div key={s.id} className="group relative">
                  <div className="relative h-[560px] rounded-[28px] overflow-hidden bg-zinc-900">
                    <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/20" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${s.color} opacity-60 mix-blend-multiply`} />
                    <div className="absolute inset-0 p-8 lg:p-10 flex flex-col">
                      <div className="flex items-start justify-between mb-auto">
                        <div>
                          <div className={`w-12 h-12 rounded-2xl ${s.accent} flex items-center justify-center mb-4 shadow-lg`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-[13px] font-medium text-white/70 uppercase tracking-wider mb-2">{s.subtitle}</div>
                          <h2 className="text-[32px] font-bold text-white leading-[1.1]">{s.title}</h2>
                        </div>
                        <div className="w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                          <ArrowUpRight className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div>
                        <p className="text-[15px] leading-[1.6] text-zinc-200 mb-6">{s.description}</p>
                        <div className="grid grid-cols-3 gap-4 py-5 border-y border-white/15 mb-5">
                          {Object.entries(s.stats).map(([k, v]) => (
                            <div key={k}>
                              <div className="text-[20px] font-bold text-white leading-none">{v}</div>
                              <div className="text-[11px] text-white/60 capitalize mt-1">{k}</div>
                            </div>
                          ))}
                        </div>
                        <div className="space-y-2">
                          {s.features.map(f => (
                            <div key={f} className="flex items-center gap-2.5">
                              <div className="w-4 h-4 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                                <Check className="w-2.5 h-2.5 text-white" />
                              </div>
                              <span className="text-[13px] text-zinc-300">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
