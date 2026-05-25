"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, TrendingUp, Building2, ArrowUpRight } from "lucide-react";
import Footer from "@/components/Footer";

const services = [
  { id:"food",       title:"Food Delivery",  subtitle:"WealthRim Eats",       image:"/images/food-delivery.jpg", color:"from-emerald-600 to-green-700",  accent:"bg-emerald-500" },
  { id:"fabric",     title:"Fabric Supply",  subtitle:"WealthRim Textiles",    image:"/images/fabric.jpg",        color:"from-red-600 to-rose-700",       accent:"bg-red-500" },
  { id:"realestate", title:"Real Estate",    subtitle:"WealthRim Properties",  image:"/images/realestate.jpg",    color:"from-lime-500 to-yellow-500",    accent:"bg-lime-500" },
];

export default function Home() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive(p => (p + 1) % services.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src="/images/hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-900/85 to-zinc-900/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(5,150,105,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(220,38,38,0.2),transparent_40%)]" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Copy */}
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                  <div className="flex -space-x-1.5">
                    {["bg-emerald-500","bg-red-500","bg-lime-400"].map(c => (
                      <div key={c} className={`w-5 h-5 rounded-full ${c} border-2 border-white/20`} />
                    ))}
                  </div>
                  <span className="text-[12px] font-medium text-white/90 tracking-wide">12 YEARS BUILDING AFRICA</span>
                </div>

                <h1 className="text-[clamp(44px,7vw,84px)] font-extrabold leading-[0.85] tracking-[-0.03em] text-white mb-6">
                  Three industries.
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 via-lime-300 to-yellow-300 bg-clip-text text-transparent">
                    One vision.
                  </span>
                </h1>

                <p className="text-[18px] md:text-[20px] leading-[1.6] text-zinc-300 max-w-[580px] mb-10">
                  WealthRim Group powers Food Delivery, Fabric Supply, and Real Estate across Africa — serving consumers, businesses, and governments.
                </p>

                <div className="flex flex-wrap gap-3 mb-14">
                  <Link href="/divisions"
                    className="flex items-center gap-2 px-7 h-[48px] bg-white text-zinc-900 rounded-full font-semibold text-[15px] hover:bg-emerald-500 hover:text-white transition-colors">
                    Explore Divisions <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link href="/invest"
                    className="flex items-center gap-2 px-7 h-[48px] bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-[15px] hover:bg-white/15 transition-colors">
                    Partner With Us <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-8 max-w-[460px] pt-8 border-t border-white/10">
                  {[["47K+","Active users"],["24","Cities"],["18","Countries"]].map(([v,l]) => (
                    <div key={l}>
                      <div className="text-[28px] font-bold text-white leading-none mb-1.5">{v}</div>
                      <div className="text-[12px] text-zinc-400 uppercase tracking-wider font-medium">{l}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Card switcher */}
            <div className="lg:col-span-5 hidden lg:block">
              <motion.div initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.8, delay:0.2 }} className="relative">
                <div className="relative bg-white/5 backdrop-blur-2xl rounded-[28px] border border-white/10 p-2 shadow-2xl">
                  <div className="bg-zinc-950 rounded-[20px] overflow-hidden">
                    <div className="h-[440px] relative">
                      {services.map((s, idx) => (
                        <div key={s.id} className={`absolute inset-0 transition-all duration-700 ${active===idx ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                          <img src={s.image} alt="" className="w-full h-full object-cover" />
                          <div className={`absolute inset-0 bg-gradient-to-t ${s.color} mix-blend-multiply opacity-80`} />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-8">
                            <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${s.accent} mb-3`}>
                              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                              <span className="text-[10px] font-bold text-white uppercase tracking-wider">Active</span>
                            </div>
                            <h3 className="text-[26px] font-bold text-white mb-1">{s.title}</h3>
                            <p className="text-[13px] text-zinc-300">{s.subtitle}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-5 bg-zinc-950 border-t border-white/5 flex">
                      {services.map((s, idx) => (
                        <button key={s.id} onClick={() => setActive(idx)}
                          className={`flex-1 py-2.5 text-[12px] font-medium transition-colors relative ${active===idx ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}>
                          {s.title.split(" ")[0]}
                          {active===idx && <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-white rounded-full" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div animate={{ y:[0,-8,0] }} transition={{ duration:4, repeat:Infinity }}
                  className="absolute -left-12 top-20 bg-white rounded-2xl shadow-2xl p-4 border border-zinc-100">
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
                <motion.div animate={{ y:[0,8,0] }} transition={{ duration:4, repeat:Infinity, delay:1 }}
                  className="absolute -right-8 bottom-24 bg-white rounded-2xl shadow-2xl p-4 border border-zinc-100">
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
      <Footer />
    </>
  );
}
