import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_PASS);

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

    console.log("API KEY EXISTS:", !!process.env.EMAIL_PASS,process.env.EMAIL_USER);
    const sendEmail =  process.env.EMAIL_USER || "";
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // ✅ use this for testing
      to: sendEmail,    // 👈 put your email here
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