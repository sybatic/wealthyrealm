import { Star, Quote } from "lucide-react";
import Footer from "@/components/Footer";

const partners = ["MTN Group","Dangote Industries","Shoprite","Jumia","Standard Bank","Ecobank","UN Habitat","AfDB"];

const testimonials = [
  {
    name: "Amara Okafor", role: "CEO, Lagos Fashion House", image: "/images/testimonial1.jpg",
    content: "WealthRim Textiles transformed our supply chain. Their B2B fabric delivery is 3× faster than our previous supplier, and the quality of authentic Ankara is unmatched.",
    rating: 5, company: "B2B Partner", badge: "bg-emerald-50 text-emerald-700",
  },
  {
    name: "Kwame Mensah", role: "Director, Ministry of Housing Ghana", image: "/images/testimonial2.jpg",
    content: "The PPP project with WealthRim Properties delivered 500 affordable homes 4 months ahead of schedule. Their B2G model sets the standard for public-private collaboration.",
    rating: 5, company: "B2G Partner", badge: "bg-lime-50 text-lime-700",
  },
  {
    name: "Zainab Ibrahim", role: "Restaurant Owner, Abuja", image: "/images/testimonial3.jpg",
    content: "Since joining WealthRim Eats, our delivery orders increased by 340%. Their platform handles everything from B2C customers to our corporate catering contracts.",
    rating: 5, company: "B2B & B2C", badge: "bg-red-50 text-red-700",
  },
];

export default function Partners() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">

      {/* Logos */}
      <section className="py-20 bg-white border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-8 h-[2px] bg-emerald-600" />
                <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-emerald-700">Our Partners</span>
              </div>
              <h1 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight mb-2">Trusted by leading organisations</h1>
              <p className="text-[15px] text-zinc-500">Partners across B2B and B2G sectors</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-zinc-200" />)}
              </div>
              <span className="text-[13px] text-zinc-600"><strong className="text-zinc-900">850+</strong> active partners</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {partners.map(p => (
              <div key={p} className="group h-[72px] flex items-center justify-center px-4 rounded-2xl border border-zinc-200 bg-zinc-50/50 hover:bg-white hover:border-zinc-300 hover:shadow-sm transition-all">
                <span className="text-[13px] font-semibold text-zinc-500 group-hover:text-zinc-900 text-center leading-tight">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-[640px] mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-red-600" />
              <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-red-700">Testimonials</span>
              <div className="w-8 h-[2px] bg-red-600" />
            </div>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-extrabold leading-[1.1] tracking-tight mb-4">What our partners say</h2>
            <p className="text-[17px] text-zinc-600">Real results from B2B, B2C, and B2G collaborations</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map(t => (
              <div key={t.name} className="group">
                <div className="h-full p-8 rounded-[28px] bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:shadow-zinc-200/60 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-zinc-200 mb-4" />
                  <p className="text-[16px] leading-[1.65] text-zinc-700 mb-8">&ldquo;{t.content}&rdquo;</p>
                  <div className="flex items-center gap-4 pt-6 border-t border-zinc-100">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover bg-zinc-200" />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-[15px] leading-tight">{t.name}</div>
                      <div className="text-[13px] text-zinc-500 leading-tight mt-0.5">{t.role}</div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${t.badge}`}>{t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
