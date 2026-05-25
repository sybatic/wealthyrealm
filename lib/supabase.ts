import { createClient } from "@supabase/supabase-js";

const url  = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key  = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;



export const supabase = createClient(url, key);

export type InvestorApplication = {
  id?:         string;
  created_at?: string;
  // Personal
  full_name:   string;
  email:       string;
  phone:       string;
  country:     string;
  city:        string;
  // Professional
  occupation:    string;
  company_name?: string;
  linkedin_url?: string;
  // Investment
  investment_division: "food_delivery" | "fabric_textiles" | "real_estate" | "all_divisions";
  investment_range:    "$10K–$50K" | "$50K–$200K" | "$200K–$1M" | "$1M+";
  investment_type:     "equity" | "debt" | "partnership" | "franchise";
  investment_timeline: "0–6 months" | "6–12 months" | "12–24 months" | "24+ months";
  // Background
  prior_investment_experience: "none" | "beginner" | "intermediate" | "expert";
  how_did_you_hear: string;
  message?: string;
  // Status
  status?: "pending" | "reviewed" | "approved" | "rejected";
};
