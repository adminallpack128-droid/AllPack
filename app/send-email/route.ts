import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Validate API key
    if (!process.env.RESEND_API_KEY) {
      console.error("[v0] RESEND_API_KEY is not set");
      return NextResponse.json(
        { success: false, message: "Email service not configured" },
        { status: 500 }
      );
    }

    const body = await req.json();

    const {
      firstName,
      email,
      company,
      projectDetails,
      submittedAt,
    } = body;

    console.log("[v0] Sending email to:", process.env.ADMIN_EMAIL);
    
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // ✅ Resend verified sender
      to: 'adminallpack128@gmail.com',
      subject: 'New Quote Request - AllPack Pro',
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Details:</strong></p>
        <pre>${projectDetails}</pre>
        <p><strong>Submitted At:</strong> ${submittedAt}</p>
      `,
    });

    if (error) {
      console.error("[v0] Resend Error:", error);
      return NextResponse.json(
        { success: false, message: "Email sending failed", error },
        { status: 500 }
      );
    }

    console.log("[v0] Email sent successfully:", data);
    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error("[v0] Server Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
