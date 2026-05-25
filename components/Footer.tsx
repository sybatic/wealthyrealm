import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-zinc-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <div>
              <div className="font-semibold leading-none">WealthRim Group</div>
              <div className="text-[12px] text-zinc-500">© 2012–2024. All rights reserved.</div>
            </div>
          </Link>
          <div className="flex flex-wrap items-center gap-6 text-[13px] text-zinc-500">
            {["Privacy","Terms","Careers"].map(l => (
              <a key={l} href="#" className="hover:text-zinc-900 transition-colors">{l}</a>
            ))}
            <div className="flex items-center gap-1.5 pl-4 border-l border-zinc-200">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>All systems operational</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[560px] mt-10 pt-8 border-t border-zinc-100">
          {[
            { icon: Phone,  label: "Call us", value: "+234 800 WEALTH" },
            { icon: Mail,   label: "Email",   value: "partners@wealthrim.com" },
            { icon: MapPin, label: "HQ",      value: "Lagos, Nigeria" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="w-4 h-4 text-zinc-400 shrink-0" />
              <div>
                <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium">{label}</div>
                <div className="text-[14px] font-medium text-zinc-800">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
