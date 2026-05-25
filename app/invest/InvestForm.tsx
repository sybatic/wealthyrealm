"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowLeft, CheckCircle2, User, Briefcase,
  TrendingUp, MessageSquare, Loader2, AlertCircle,
  Truck, Shirt, Building2, Layers,
} from "lucide-react";
import { supabase, type InvestorApplication } from "@/lib/supabase";
import Footer from "@/components/Footer";

// ── Types ────────────────────────────────────────────────────────────────────
type FormData = Omit<InvestorApplication, "id" | "created_at" | "status">;

const EMPTY: FormData = {
  full_name: "", email: "", phone: "", country: "", city: "",
  occupation: "", company_name: "", linkedin_url: "",
  investment_division: "all_divisions",
  investment_range: "$50K–$200K",
  investment_type: "equity",
  investment_timeline: "6–12 months",
  prior_investment_experience: "beginner",
  how_did_you_hear: "", message: "",
};

const STEPS = [
  { label: "Personal",     icon: User },
  { label: "Professional", icon: Briefcase },
  { label: "Investment",   icon: TrendingUp },
  { label: "Background",   icon: MessageSquare },
];

// ── Field helpers ────────────────────────────────────────────────────────────
function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-[13px] font-semibold text-zinc-700 mb-1.5">{children}</label>;
}
function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input {...props}
      className="w-full h-11 px-4 rounded-xl border border-zinc-200 bg-white text-[14px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all" />
  );
}
function Select({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select {...props}
      className="w-full h-11 px-4 rounded-xl border border-zinc-200 bg-white text-[14px] text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all appearance-none cursor-pointer">
      {children}
    </select>
  );
}
function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea {...props}
      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-[14px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all resize-none" />
  );
}

type PillOpt<T extends string> = { value: T; label: string; sub?: string; icon?: React.ReactNode };
function PillSelect<T extends string>({ options, value, onChange }: { options: PillOpt<T>[]; value: T; onChange: (v: T) => void }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {options.map(o => (
        <button key={o.value} type="button" onClick={() => onChange(o.value)}
          className={`relative flex flex-col items-start gap-1 p-4 rounded-2xl border-2 text-left transition-all duration-200 ${
            value === o.value ? "border-emerald-500 bg-emerald-50 shadow-sm" : "border-zinc-200 bg-white hover:border-zinc-300"}`}>
          {o.icon && <div className={`mb-1 ${value === o.value ? "text-emerald-600" : "text-zinc-400"}`}>{o.icon}</div>}
          <span className={`text-[13px] font-semibold leading-tight ${value === o.value ? "text-emerald-700" : "text-zinc-800"}`}>{o.label}</span>
          {o.sub && <span className="text-[11px] text-zinc-400 leading-tight">{o.sub}</span>}
          {value === o.value && (
            <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
              <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
        </button>
      ))}
    </div>
  );
}

// ── Steps ────────────────────────────────────────────────────────────────────
function StepPersonal({ data, onChange }: { data: FormData; onChange: (k: keyof FormData, v: string) => void }) {
  return (
    <div className="space-y-5">
      <div>
        <Label>Full Name *</Label>
        <Input placeholder="Amara Okafor" value={data.full_name} onChange={e => onChange("full_name", e.target.value)} />
      </div>
      <div>
        <Label>Email Address *</Label>
        <Input type="email" placeholder="amara@example.com" value={data.email} onChange={e => onChange("email", e.target.value)} />
      </div>
      <div>
        <Label>Phone Number *</Label>
        <Input type="tel" placeholder="+234 800 000 0000" value={data.phone} onChange={e => onChange("phone", e.target.value)} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Country *</Label>
          <Input placeholder="Nigeria" value={data.country} onChange={e => onChange("country", e.target.value)} />
        </div>
        <div>
          <Label>City *</Label>
          <Input placeholder="Lagos" value={data.city} onChange={e => onChange("city", e.target.value)} />
        </div>
      </div>
    </div>
  );
}

function StepProfessional({ data, onChange }: { data: FormData; onChange: (k: keyof FormData, v: string) => void }) {
  return (
    <div className="space-y-5">
      <div>
        <Label>Occupation / Job Title *</Label>
        <Input placeholder="CEO, Investor, Finance Director…" value={data.occupation} onChange={e => onChange("occupation", e.target.value)} />
      </div>
      <div>
        <Label>Company / Organisation (optional)</Label>
        <Input placeholder="Acme Holdings Ltd" value={data.company_name ?? ""} onChange={e => onChange("company_name", e.target.value)} />
      </div>
      <div>
        <Label>LinkedIn Profile (optional)</Label>
        <Input type="url" placeholder="https://linkedin.com/in/yourname" value={data.linkedin_url ?? ""} onChange={e => onChange("linkedin_url", e.target.value)} />
      </div>
    </div>
  );
}

const divisionOpts: PillOpt<InvestorApplication["investment_division"]>[] = [
  { value:"food_delivery",   label:"Food Delivery",   sub:"WealthRim Eats",       icon:<Truck className="w-4 h-4" /> },
  { value:"fabric_textiles", label:"Fabric Textiles", sub:"WealthRim Textiles",   icon:<Shirt className="w-4 h-4" /> },
  { value:"real_estate",     label:"Real Estate",     sub:"WealthRim Properties", icon:<Building2 className="w-4 h-4" /> },
  { value:"all_divisions",   label:"All Divisions",   sub:"Full portfolio",        icon:<Layers className="w-4 h-4" /> },
];
const rangeOpts: PillOpt<InvestorApplication["investment_range"]>[] = [
  { value:"$10K–$50K",   label:"$10K – $50K",   sub:"Emerging investor" },
  { value:"$50K–$200K",  label:"$50K – $200K",  sub:"Growth investor" },
  { value:"$200K–$1M",   label:"$200K – $1M",   sub:"Strategic investor" },
  { value:"$1M+",        label:"$1M+",           sub:"Institutional" },
];
const typeOpts: PillOpt<InvestorApplication["investment_type"]>[] = [
  { value:"equity",      label:"Equity",      sub:"Ownership stake" },
  { value:"debt",        label:"Debt",        sub:"Fixed returns" },
  { value:"partnership", label:"Partnership", sub:"Joint venture" },
  { value:"franchise",   label:"Franchise",   sub:"Division licence" },
];
const timelineOpts: PillOpt<InvestorApplication["investment_timeline"]>[] = [
  { value:"0–6 months",   label:"0 – 6 months",  sub:"Immediate" },
  { value:"6–12 months",  label:"6 – 12 months", sub:"Near-term" },
  { value:"12–24 months", label:"1 – 2 years",   sub:"Medium-term" },
  { value:"24+ months",   label:"2+ years",       sub:"Long-term" },
];

function StepInvestment({ data, onChange }: { data: FormData; onChange: (k: keyof FormData, v: string) => void }) {
  return (
    <div className="space-y-7">
      <div>
        <Label>Which division interests you? *</Label>
        <PillSelect options={divisionOpts} value={data.investment_division} onChange={v => onChange("investment_division", v)} />
      </div>
      <div>
        <Label>Investment range (USD) *</Label>
        <PillSelect options={rangeOpts} value={data.investment_range} onChange={v => onChange("investment_range", v)} />
      </div>
      <div>
        <Label>Investment type *</Label>
        <PillSelect options={typeOpts} value={data.investment_type} onChange={v => onChange("investment_type", v)} />
      </div>
      <div>
        <Label>Investment timeline *</Label>
        <PillSelect options={timelineOpts} value={data.investment_timeline} onChange={v => onChange("investment_timeline", v)} />
      </div>
    </div>
  );
}

const expOpts: PillOpt<InvestorApplication["prior_investment_experience"]>[] = [
  { value:"none",         label:"None",         sub:"First investment" },
  { value:"beginner",     label:"Beginner",     sub:"1–2 prior investments" },
  { value:"intermediate", label:"Intermediate", sub:"3–10 investments" },
  { value:"expert",       label:"Expert",       sub:"10+ investments" },
];

function StepBackground({ data, onChange }: { data: FormData; onChange: (k: keyof FormData, v: string) => void }) {
  return (
    <div className="space-y-5">
      <div>
        <Label>Prior investment experience *</Label>
        <PillSelect options={expOpts} value={data.prior_investment_experience} onChange={v => onChange("prior_investment_experience", v)} />
      </div>
      <div>
        <Label>How did you hear about us? *</Label>
        <Select value={data.how_did_you_hear} onChange={e => onChange("how_did_you_hear", e.target.value)}>
          <option value="" disabled>Select one…</option>
          {["LinkedIn","Twitter / X","News article","Word of mouth","Investor conference","Google search","Partner referral","Other"].map(o => (
            <option key={o} value={o}>{o}</option>
          ))}
        </Select>
      </div>
      <div>
        <Label>Anything you&apos;d like us to know? (optional)</Label>
        <Textarea rows={5} placeholder="Tell us about your goals or any questions you have…"
          value={data.message ?? ""} onChange={e => onChange("message", e.target.value)} />
      </div>
    </div>
  );
}

// ── Validation ────────────────────────────────────────────────────────────────
function validate(step: number, d: FormData): string | null {
  if (step === 0) {
    if (!d.full_name.trim()) return "Please enter your full name.";
    if (!d.email.trim() || !/^\S+@\S+\.\S+$/.test(d.email)) return "Please enter a valid email address.";
    if (!d.phone.trim()) return "Please enter your phone number.";
    if (!d.country.trim()) return "Please enter your country.";
    if (!d.city.trim()) return "Please enter your city.";
  }
  if (step === 1 && !d.occupation.trim()) return "Please enter your occupation.";
  if (step === 3 && !d.how_did_you_hear) return "Please tell us how you heard about us.";
  return null;
}

// ── Success screen ────────────────────────────────────────────────────────────
function SuccessScreen({ name }: { name: string }) {
  const first = name.split(" ")[0];
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-20">
      <motion.div initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.4 }}
        className="max-w-[520px] w-full text-center">
        <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </div>
        <h2 className="text-[32px] font-extrabold tracking-tight mb-3">Thank you, {first}!</h2>
        <p className="text-[16px] text-zinc-500 leading-[1.65] mb-8">
          Your investor application has been received. Our partnerships team will reach out within{" "}
          <strong className="text-zinc-700">3–5 business days</strong>.
        </p>
        <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm mb-8 text-left space-y-4">
          <h4 className="text-[13px] font-bold text-zinc-700 mb-2">What happens next?</h4>
          {[
            ["Application Review",  "Our team reviews your application against current openings."],
            ["Initial Call",        "A WealthRim partnerships manager schedules a 30-min call."],
            ["Due Diligence",       "We share our investor deck, financials, and structure options."],
            ["Onboarding",          "Sign agreements and join the WealthRim investor network."],
          ].map(([t, d], i) => (
            <div key={t} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i+1}</div>
              <div>
                <div className="text-[13px] font-semibold text-zinc-800">{t}</div>
                <div className="text-[12px] text-zinc-500 leading-[1.5]">{d}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="px-7 h-11 rounded-full bg-zinc-900 text-white text-[14px] font-semibold hover:bg-zinc-800 transition-colors flex items-center justify-center">
            Back to Home
          </Link>
          <Link href="/divisions" className="px-7 h-11 rounded-full border border-zinc-200 text-zinc-700 text-[14px] font-medium hover:bg-zinc-50 transition-colors flex items-center justify-center">
            Explore Divisions
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function InvestForm() {
  const [step, setStep]       = useState(0);
  const [data, setData]       = useState<FormData>(EMPTY);
  const [error, setError]     = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone]       = useState(false);

  const change = (k: keyof FormData, v: string) => { setData(p => ({ ...p, [k]: v })); setError(null); };

  const next = () => {
    const e = validate(step, data);
    if (e) { setError(e); return; }
    setError(null); setStep(s => s + 1);
  };

  const back = () => { setError(null); setStep(s => s - 1); };

  const submit = async () => {
    const e = validate(step, data);
    if (e) { setError(e); return; }
    setLoading(true); setError(null);
    try {
      const { error: err } = await supabase.from("investor_applications").insert([data]);
      if (err) throw err;
      setDone(true);
    } catch (ex: any) {
      setError(ex?.message ?? "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const stepViews = [
    <StepPersonal     key="p" data={data} onChange={change} />,
    <StepProfessional key="pr" data={data} onChange={change} />,
    <StepInvestment   key="i" data={data} onChange={change} />,
    <StepBackground   key="b" data={data} onChange={change} />,
  ];

  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      {/* Header */}
      <div className="bg-zinc-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(5,150,105,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(220,38,38,0.1),transparent_50%)]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-[640px]">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 mb-6">
              <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              <span className="text-[11px] font-medium tracking-wide uppercase">Now Accepting Applications</span>
            </div>
            <h1 className="text-[clamp(36px,5vw,60px)] font-extrabold leading-[0.9] tracking-tight mb-4">
              Invest in<br />
              <span className="bg-gradient-to-r from-emerald-400 via-lime-300 to-yellow-300 bg-clip-text text-transparent">
                WealthRim Group
              </span>
            </h1>
            <p className="text-[17px] text-zinc-400 leading-[1.65]">
              Join investors backing Africa&apos;s most diversified infrastructure group across 18 countries.
            </p>
          </div>
        </div>
      </div>

      {/* Form or success */}
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        {done ? <SuccessScreen name={data.full_name} /> : (
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Sidebar */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-28">
                <div className="space-y-2 mb-10">
                  {STEPS.map((s, i) => {
                    const Icon = s.icon;
                    const done  = i < step;
                    const active = i === step;
                    return (
                      <div key={s.label} className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${active ? "bg-white shadow-md border border-zinc-100" : "opacity-40"}`}>
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${done ? "bg-emerald-500" : active ? "bg-zinc-900" : "bg-zinc-100"}`}>
                          {done
                            ? <CheckCircle2 className="w-4 h-4 text-white" />
                            : <Icon className={`w-4 h-4 ${active ? "text-white" : "text-zinc-400"}`} />}
                        </div>
                        <div>
                          <div className={`text-[13px] font-semibold ${active ? "text-zinc-900" : "text-zinc-500"}`}>Step {i + 1}</div>
                          <div className={`text-[12px] ${active ? "text-zinc-500" : "text-zinc-400"}`}>{s.label} Info</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
                  <h4 className="text-[13px] font-bold text-zinc-800 mb-3">Why invest with us?</h4>
                  <ul className="space-y-2.5">
                    {[
                      "Profitable every year since 2012",
                      "$420M+ assets under management",
                      "18 countries, 47K+ customers",
                      "Diversified B2C · B2B · B2G revenue",
                      "African Business Awards 2023 winner",
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[12px] leading-[1.5] text-zinc-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Form card */}
            <div className="lg:col-span-8">
              {/* Mobile step dots */}
              <div className="flex items-center gap-2 mb-6 lg:hidden">
                {STEPS.map((_, i) => (
                  <div key={i} className={`h-1.5 flex-1 rounded-full transition-all ${i <= step ? "bg-emerald-500" : "bg-zinc-200"}`} />
                ))}
              </div>

              <div className="bg-white rounded-[28px] border border-zinc-200 shadow-sm overflow-hidden">
                {/* Progress bar */}
                <div className="h-1 bg-zinc-100">
                  <motion.div
                    className="h-full bg-gradient-to-r from-emerald-500 to-lime-400"
                    animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>

                <div className="p-8 lg:p-10">
                  <div className="mb-8">
                    <div className="text-[12px] font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                      Step {step + 1} of {STEPS.length}
                    </div>
                    <h2 className="text-[24px] font-extrabold tracking-tight">
                      {["Personal Information","Professional Background","Investment Preferences","Final Details"][step]}
                    </h2>
                    <p className="text-[14px] text-zinc-500 mt-1">
                      {[
                        "Tell us who you are so we can reach you.",
                        "Help us understand your professional context.",
                        "Define how you'd like to invest in WealthRim.",
                        "A few final questions to complete your application.",
                      ][step]}
                    </p>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div key={step}
                      initial={{ opacity:0, x:24 }} animate={{ opacity:1, x:0 }}
                      exit={{ opacity:0, x:-24 }} transition={{ duration:0.25 }}>
                      {stepViews[step]}
                    </motion.div>
                  </AnimatePresence>

                  {error && (
                    <motion.div initial={{ opacity:0, y:-4 }} animate={{ opacity:1, y:0 }}
                      className="mt-5 flex items-center gap-3 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-[13px]">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {error}
                    </motion.div>
                  )}

                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-zinc-100">
                    {step > 0
                      ? <button onClick={back}
                          className="flex items-center gap-2 px-5 h-11 rounded-full border border-zinc-200 text-[14px] font-medium text-zinc-600 hover:bg-zinc-50 transition-colors">
                          <ArrowLeft className="w-4 h-4" /> Back
                        </button>
                      : <div />}

                    {step < STEPS.length - 1
                      ? <button onClick={next}
                          className="flex items-center gap-2 px-7 h-11 rounded-full bg-zinc-900 text-white text-[14px] font-semibold hover:bg-zinc-800 transition-colors">
                          Continue <ArrowRight className="w-4 h-4" />
                        </button>
                      : <button onClick={submit} disabled={loading}
                          className="flex items-center gap-2 px-7 h-11 rounded-full bg-emerald-600 text-white text-[14px] font-semibold hover:bg-emerald-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                          {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</> : <>Submit Application <ArrowRight className="w-4 h-4" /></>}
                        </button>}
                  </div>
                </div>
              </div>

              <p className="text-center text-[12px] text-zinc-400 mt-5">
                Your information is kept strictly confidential and used only to process your investor application.
              </p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
