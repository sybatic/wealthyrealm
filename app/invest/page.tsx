'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Shield, Clock, Award, CheckCircle, 
  ArrowRight, Building2, Truck, Shirt, Loader2 
} from 'lucide-react';
import Link from 'next/link';

const investmentSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  companyName: z.string().optional(),
  investmentAmount: z.number().min(1000, 'Minimum investment is $1,000'),
  investmentType: z.enum(['equity', 'debt', 'partnership']),
  preferredDivision: z.enum(['food_delivery', 'fabric_delivery', 'real_estate', 'all']),
  message: z.string().optional(),
});

type InvestmentFormInput = z.infer<typeof investmentSchema>;

const benefits = [
  { icon: TrendingUp, title: 'High Growth Potential', desc: '18% average YoY growth across divisions' },
  { icon: Shield, title: 'Diversified Risk', desc: 'Revenue from B2C, B2B & B2G channels' },
  { icon: Clock, title: '12 Years Track Record', desc: 'Profitable every year since 2012' },
  { icon: Award, title: 'Pan-African Scale', desc: 'Operations in 18 countries' },
];

export default function InvestPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InvestmentFormInput>({
    resolver: zodResolver(investmentSchema),
    defaultValues: {
      investmentType: 'equity',
      preferredDivision: 'all',
    },
  });

  const onSubmit = async (data: InvestmentFormInput) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch('/api/invest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) throw new Error('Submission failed');
      
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-[72px] flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-lime-50">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md mx-auto px-6"
        >
          <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Application Received!</h2>
          <p className="text-zinc-600 mb-8">
            Thank you for your interest in investing with WealthRim Group. 
            Our investment team will review your application and contact you within 48 hours.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full hover:bg-zinc-800">
            Return Home <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-[72px] bg-gradient-to-br from-emerald-50/30 via-white to-lime-50/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column - Info */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-8 h-[2px] bg-emerald-600"></div>
                  <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-emerald-700">Investment Opportunity</span>
                </div>
                
                <h1 className="text-[clamp(40px,5vw,64px)] font-[650] leading-[1.05] tracking-[-0.02em] mb-6">
                  Invest in Africa's
                  <br />
                  <span className="bg-gradient-to-r from-emerald-600 via-red-600 to-lime-500 bg-clip-text text-transparent">
                    Growth Story
                  </span>
                </h1>
                
                <p className="text-[18px] leading-[1.6] text-zinc-600 mb-8">
                  Join us in building the infrastructure that powers African commerce. 
                  WealthRim Group offers diversified exposure to three high-growth sectors.
                </p>

                <div className="grid gap-4 mb-8">
                  {benefits.map((benefit, idx) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white border border-zinc-200 hover:shadow-md transition-shadow"
                    >
                      <benefit.icon className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-1">{benefit.title}</h3>
                        <p className="text-[14px] text-zinc-600">{benefit.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="w-5 h-5" />
                    <span className="text-[13px] font-semibold uppercase tracking-wider">Current Portfolio</span>
                  </div>
                  <div className="text-[42px] font-bold mb-2">$420M</div>
                  <div className="text-[14px] text-emerald-100">Assets Under Management</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[32px] shadow-xl border border-zinc-200 p-6 lg:p-10"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Start Your Investment Journey</h2>
                <p className="text-zinc-600">Fill out the form below and our investment team will contact you within 48 hours.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[14px] font-medium mb-2">Full Name *</label>
                    <input
                      {...register('fullName')}
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p className="text-red-500 text-[12px] mt-1">{errors.fullName.message}</p>}
                  </div>

                  <div>
                    <label className="block text-[14px] font-medium mb-2">Email Address *</label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-[12px] mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[14px] font-medium mb-2">Phone Number *</label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      placeholder="+234 800 123 4567"
                    />
                    {errors.phone && <p className="text-red-500 text-[12px] mt-1">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label className="block text-[14px] font-medium mb-2">Company Name (Optional)</label>
                    <input
                      {...register('companyName')}
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[14px] font-medium mb-2">Investment Amount (USD) *</label>
                    <input
                      {...register('investmentAmount', { valueAsNumber: true })}
                      type="number"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      placeholder="10,000"
                    />
                    {errors.investmentAmount && <p className="text-red-500 text-[12px] mt-1">{errors.investmentAmount.message}</p>}
                  </div>

                  <div>
                    <label className="block text-[14px] font-medium mb-2">Investment Type *</label>
                    <select
                      {...register('investmentType')}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    >
                      <option value="equity">Equity Investment</option>
                      <option value="debt">Debt Financing</option>
                      <option value="partnership">Strategic Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] font-medium mb-2">Preferred Division *</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'food_delivery', label: 'Food Delivery', icon: Truck },
                      { value: 'fabric_delivery', label: 'Fabric Delivery', icon: Shirt },
                      { value: 'real_estate', label: 'Real Estate', icon: Building2 },
                      { value: 'all', label: 'All Divisions', icon: TrendingUp },
                    ].map((option) => (
                      <label key={option.value} className="cursor-pointer">
                        <input
                          type="radio"
                          value={option.value}
                          {...register('preferredDivision')}
                          className="hidden peer"
                        />
                        <div className="flex items-center gap-3 p-3 rounded-xl border-2 border-zinc-200 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 transition-all">
                          <option.icon className="w-5 h-5 text-zinc-600 peer-checked:text-emerald-600" />
                          <span className="text-[14px] font-medium">{option.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] font-medium mb-2">Additional Message (Optional)</label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
                    placeholder="Tell us more about your investment goals..."
                  />
                </div>

                {submitError && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-[14px]">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Investment Application
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[12px] text-center text-zinc-500">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service. 
                  Our team will contact you within 48 hours.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}