"use client";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { Clock, Package, Globe, Award } from "lucide-react";
import Footer from "@/components/Footer";

const stats = [
  { value: 12,  suffix: "+",  label: "Years of Excellence",       sublabel: "Since 2012",          dot: "bg-emerald-500" },
  { value: 47,  suffix: "K+", label: "Happy Customers",           sublabel: "Across 3 divisions",  dot: "bg-red-500" },
  { value: 850, suffix: "+",  label: "Business Partners",         sublabel: "Trusted network",      dot: "bg-lime-500" },
  { value: 420, suffix: "M",  prefix: "$", label: "Assets Under Management", sublabel: "And growing", dot: "bg-yellow-500" },
];

function Counter({ stat }: { stat: typeof stats[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let n = 0;
    const inc = stat.value / (2000 / 16);
    const id = setInterval(() => {
      n += inc;
      if (n >= stat.value) { setCount(stat.value); clearInterval(id); }
      else setCount(Math.floor(n));
    }, 16);
    return () => clearInterval(id);
  }, [inView, stat.value]);

  return (
    <div ref={ref} className="relative p-10 lg:p-12 bg-zinc-950 hover:bg-zinc-900/80 transition-colors group">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="flex items-baseline gap-1 mb-3">
        {stat.prefix && <span className="text-[24px] font-semibold text-zinc-600">{stat.prefix}</span>}
        <span className="text-[48px] lg:text-[56px] font-extrabold leading-none tracking-tight text-white">{count}</span>
        <span className={`text-[32px] font-semibold ${stat.dot.replace("bg-","text-")}`}>{stat.suffix}</span>
      </div>
      <div className="text-[15px] font-semibold text-white mb-1">{stat.label}</div>
      <div className="text-[13px] text-zinc-500">{stat.sublabel}</div>
      <div className={`absolute bottom-6 right-6 w-8 h-8 rounded-full border ${stat.dot.replace("bg-","border-")}/30 flex items-center justify-center`}>
        <div className={`w-1.5 h-1.5 rounded-full ${stat.dot}`} />
      </div>
    </div>
  );
}

export default function Impact() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[160px]" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-end mb-20">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-6">
                <Clock className="w-4 h-4 text-lime-400" />
                <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-lime-400">12 Years in Operation</span>
              </div>
              <h1 className="text-[clamp(36px,5vw,60px)] font-extrabold leading-[0.95] tracking-tight">
                Building Africa&apos;s<br />
                <span className="text-zinc-500">infrastructure, daily.</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[17px] leading-[1.65] text-zinc-400">
                From a single food delivery pilot in Lagos (2012) to a multi-sector group operating in 18 countries. Profitable every year since inception.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-zinc-800 rounded-[28px] overflow-hidden border border-zinc-800">
            {stats.map((s, i) => <Counter key={i} stat={s} />)}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: Package, title: "Integrated Logistics",  desc: "Shared fleet serves all 3 divisions — 40% cost reduction vs separate operations." },
              { icon: Globe,   title: "Pan-African",           desc: "Active operations in 18 countries across West, East, and Southern Africa." },
              { icon: Award,   title: "Award Winning",         desc: "African Business Awards 2023 — Diversified Group of the Year." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <Icon className="w-5 h-5 text-lime-400 mb-3" />
                <h3 className="font-semibold mb-1.5">{title}</h3>
                <p className="text-[14px] text-zinc-500 leading-[1.5]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
