-- ============================================================
-- WealthRim Group — Run this in Supabase SQL Editor
-- ============================================================

CREATE TABLE IF NOT EXISTS investor_applications (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at  TIMESTAMPTZ DEFAULT NOW() NOT NULL,

  full_name   TEXT NOT NULL,
  email       TEXT NOT NULL,
  phone       TEXT NOT NULL,
  country     TEXT NOT NULL,
  city        TEXT NOT NULL,

  occupation   TEXT NOT NULL,
  company_name TEXT,
  linkedin_url TEXT,

  investment_division TEXT NOT NULL CHECK (investment_division IN (
    'food_delivery','fabric_textiles','real_estate','all_divisions')),
  investment_range TEXT NOT NULL CHECK (investment_range IN (
    '$10K–$50K','$50K–$200K','$200K–$1M','$1M+')),
  investment_type TEXT NOT NULL CHECK (investment_type IN (
    'equity','debt','partnership','franchise')),
  investment_timeline TEXT NOT NULL CHECK (investment_timeline IN (
    '0–6 months','6–12 months','12–24 months','24+ months')),

  prior_investment_experience TEXT NOT NULL CHECK (prior_investment_experience IN (
    'none','beginner','intermediate','expert')),
  how_did_you_hear TEXT NOT NULL,
  message TEXT,

  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN (
    'pending','reviewed','approved','rejected'))
);

CREATE INDEX IF NOT EXISTS idx_inv_email  ON investor_applications (email);
CREATE INDEX IF NOT EXISTS idx_inv_status ON investor_applications (status);

ALTER TABLE investor_applications ENABLE ROW LEVEL SECURITY;

-- Public can submit
CREATE POLICY "public_insert" ON investor_applications
  FOR INSERT TO anon, authenticated WITH CHECK (true);

-- Only authenticated (admin) can read / update
CREATE POLICY "auth_select" ON investor_applications
  FOR SELECT TO authenticated USING (true);
CREATE POLICY "auth_update" ON investor_applications
  FOR UPDATE TO authenticated USING (true);
