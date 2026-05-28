import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    // Validate API key
    if (!process.env.RESEND_API_KEY) {
      console.error('[v0] RESEND_API_KEY is not set');
      return NextResponse.json(
        { success: false, message: 'Email service not configured' },
        { status: 500 }
      );
    }

    const data = await req.json();

    console.log('[v0] Received contact form submission from:', data.email);

    const message = `
      New Contact Inquiry:

      Name: ${data.firstName} ${data.lastName}
      Email: ${data.email}
      Company: ${data.company}

      Project Details:
      ${data.projectDetails}
    `;

    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.ADMIN_EMAIL || 'adminallpack128@gmail.com',
      subject: 'New Contact Form Submission - AllPack',
      text: message,
    });

    if (error) {
      console.error('[v0] Email send error:', error);
      return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
    }

    console.log('[v0] Contact email sent successfully to:', process.env.ADMIN_EMAIL);
    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (err) {
    console.error('[v0] Server error:', err);
    return NextResponse.json({ success: false, message: 'Server error occurred' }, { status: 500 });
  }
}
