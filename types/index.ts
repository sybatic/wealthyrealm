export interface InvestmentFormInput {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  investmentAmount: number;
  investmentType: 'equity' | 'debt' | 'partnership';
  preferredDivision: 'food_delivery' | 'fabric_delivery' | 'real_estate' | 'all';
  message?: string;
}