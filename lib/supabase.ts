import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type InvestmentFormData = {
  id?: string;
  full_name: string;
  email: string;
  phone: string;
  company_name?: string;
  investment_amount: number;
  investment_type: 'equity' | 'debt' | 'partnership';
  preferred_division: 'food_delivery' | 'fabric_delivery' | 'real_estate' | 'all';
  message?: string;
  status: 'pending' | 'reviewed' | 'contacted';
  created_at?: string;
};