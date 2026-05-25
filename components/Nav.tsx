"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Divisions", href: "/divisions" },
  { label: "Models",    href: "/models" },
  { label: "Impact",    href: "/impact" },
  { label: "Partners",  href: "/partners" },
  { label: "About",     href: "/about" },
];

export default function Nav() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname                = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#FFFCF8]/90 backdrop-blur-xl shadow-sm" : "bg-[#FFFCF8]/80 backdrop-blur-xl"} border-b border-zinc-200/50`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-600/20">
                <span className="text-white font-bold text-lg tracking-tight">W</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-600 rounded-full border-2 border-white" />
            </div>
            <div>
              <div className="font-bold text-[22px] leading-none tracking-tight">WealthRim</div>
              <div className="text-[10px] text-zinc-500 font-medium tracking-widest uppercase -mt-0.5">GROUP OF COMPANIES</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map(({ label, href }) => (
              <Link key={href} href={href}
                className={`text-[14px] font-medium transition-colors relative group ${pathname === href ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-900"}`}>
                {label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-600 transition-all duration-300 ${pathname === href ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link href="/invest"
              className="hidden sm:flex items-center gap-2 px-5 h-10 rounded-full bg-zinc-900 text-white text-[14px] font-medium hover:bg-zinc-800 transition-colors">
              Invest <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <button onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 flex items-center justify-center">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden absolute top-[72px] left-0 right-0 bg-white border-b border-zinc-200 shadow-xl">
          <div className="px-6 py-4 space-y-1">
            {links.map(({ label, href }) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}
                className="block py-3 text-[15px] font-medium text-zinc-700 border-b border-zinc-100 last:border-0">
                {label}
              </Link>
            ))}
            <Link href="/invest" onClick={() => setOpen(false)}
              className="flex items-center gap-2 py-3 text-[15px] font-semibold text-emerald-700">
              Invest <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
