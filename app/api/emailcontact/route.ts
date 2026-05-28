import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("BODY:", body);

    // Check env variables
    console.log("EMAIL USER:", process.env.EMAIL_USER);
    console.log("EMAIL PASS EXISTS:", !!process.env.EMAIL_PASS);

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify SMTP connection
    await transporter.verify();

    console.log("SMTP Connected Successfully");

    // Send mail
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "adminallpack128@gmail.com",
  subject: "📦 New Customer Requirement",

      html: `
          <h1 style="color: #ea580c; margin-bottom: 20px;">
        📦 New Inquiry Received
      </h1>

        <p>
          <strong>Phone Number:</strong>
          ${body.projectDetails}
        </p>
      `,
    });

    console.log("MAIL SENT:", info.messageId);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("FULL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      { status: 500 }
    );
  }
}