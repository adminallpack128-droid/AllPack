import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      firstName,
      email,
      company,
      projectDetails,
      submittedAt,
    } = body;

    // Validate that we have the required environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { success: false, message: "Email service is not configured" },
        { status: 500 }
      );
    }

    if (!process.env.EMAIL_FROM_ADDRESS) {
      console.error("EMAIL_FROM_ADDRESS is not set");
      return NextResponse.json(
        { success: false, message: "Email sender address is not configured" },
        { status: 500 }
      );
    }

    const recipientEmail = process.env.EMAIL_FROM_ADDRESS;
    const fromEmail = process.env.EMAIL_FROM_ADDRESS;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      subject: "New Quote Request - AllPack Pro",
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
      console.error("Resend Error:", error);
      return NextResponse.json(
        { success: false, message: "Email sending failed", error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
