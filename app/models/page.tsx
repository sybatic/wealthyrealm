import { Store, Users, Landmark, TrendingUp, Shield } from "lucide-react";
import Footer from "@/components/Footer";

const models = [
  {
    icon: Store, title: "B2C", subtitle: "Business to Customer",
    description: "Direct services to consumers through our delivery apps and property sales.",
    color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200",
    tags: ["Food app orders", "Fabric retail", "Property sales"],
  },
  {
    icon: Users, title: "B2B", subtitle: "Business to Business",
    description: "Enterprise solutions for restaurants, designers, and corporate clients.",
    color: "text-red-600", bg: "bg-red-50", border: "border-red-200",
    tags: ["Restaurant partners", "Fashion houses", "Corporate leasing"],
  },
  {
    icon: Landmark, title: "B2G", subtitle: "Business to Government",
    description: "Public-private partnerships for housing, catering, and infrastructure.",
    color: "text-lime-600", bg: "bg-lime-50", border: "border-lime-200",
    tags: ["Affordable housing", "School feeding", "Infrastructure"],
  },
];

export default function Models() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* bg blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-lime-100/40 to-transparent rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-100/40 to-transparent rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* Sticky left */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-8 h-[2px] bg-red-600" />
                  <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-red-700">Business Models</span>
                </div>
                <h1 className="text-[clamp(36px,4.5vw,52px)] font-extrabold leading-[1.08] tracking-tight mb-6">
                  One platform,<br />three channels
                </h1>
                <p className="text-[17px] leading-[1.65] text-zinc-600 mb-8">
                  WealthRim uniquely operates across all market segments — individual consumers, enterprise clients, and government agencies, all from one integrated infrastructure.
                </p>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-zinc-200 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-green-700 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-[15px] leading-tight">Investment Opportunity</div>
                    <div className="text-[13px] text-zinc-500 mt-0.5">Diversified revenue across 3 models</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="lg:col-span-7 space-y-6">
              {models.map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.title}
                    className={`group relative p-8 lg:p-10 rounded-[28px] bg-white border-2 ${m.border} hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 hover:-translate-y-1`}>
                    <div className="flex items-start gap-6">
                      <div className={`w-14 h-14 rounded-2xl ${m.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className={`w-7 h-7 ${m.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-3 mb-3">
                          <h2 className="text-[28px] font-bold tracking-tight">{m.title}</h2>
                          <span className={`text-[13px] font-medium ${m.color}`}>{m.subtitle}</span>
                        </div>
                        <p className="text-[16px] leading-[1.6] text-zinc-600 mb-5">{m.description}</p>
                        <div className="flex flex-wrap gap-2.5">
                          {m.tags.map(t => (
                            <span key={t} className="px-3 py-1.5 rounded-full bg-zinc-50 text-[12px] font-medium text-zinc-700 border border-zinc-200">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="p-8 rounded-[24px] bg-zinc-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-lime-400/20 to-transparent rounded-full blur-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-lime-400" />
                    <span className="text-[12px] font-semibold uppercase tracking-wider text-lime-400">Investment Grade</span>
                  </div>
                  <h3 className="text-[22px] font-bold mb-2">Diversified Risk, Compounded Returns</h3>
                  <p className="text-[14px] leading-[1.6] text-zinc-400 max-w-[520px]">
                    Our three-channel model reduces dependency on any single market. When B2C slows, B2B and B2G contracts provide stability. 12 years of consistent growth across economic cycles.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
