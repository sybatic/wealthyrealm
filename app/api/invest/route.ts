import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { 
      fullName, 
      email, 
      phone, 
      companyName, 
      investmentAmount, 
      investmentType, 
      preferredDivision, 
      message 
    } = body;
    
    // Validate required fields
    if (!fullName || !email || !phone || !investmentAmount || !investmentType || !preferredDivision) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Insert into Supabase
    const { data, error } = await supabase
      .from('investments')
      .insert([
        {
          full_name: fullName,
          email: email,
          phone: phone,
          company_name: companyName || null,
          investment_amount: investmentAmount,
          investment_type: investmentType,
          preferred_division: preferredDivision,
          message: message || null,
          status: 'pending',
          created_at: new Date().toISOString(),
        }
      ])
      .select();
    
    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Database error' },
        { status: 500 }
      );
    }
    
    // Optional: Send email notification (you can integrate with Resend, SendGrid, etc.)
    
    return NextResponse.json(
      { message: 'Investment application submitted successfully', data },
      { status: 201 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}