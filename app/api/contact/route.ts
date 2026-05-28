import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    // Get frontend data
    const body = await req.json();

    console.log("BODY:", body);

    // SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
   const info = await transporter.sendMail({
  from: `"AllPack Pro" <${process.env.EMAIL_USER}>`,
  to: "adminallpack128@gmail.com",
  subject: "📦 New Customer Requirement",

  html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      
      <h1 style="color: #ea580c; margin-bottom: 20px;">
        📦 New Inquiry Received
      </h1>

      <table 
        style="
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        "
      >
        <tr>
          <td style="padding: 10px; font-weight: bold; width: 180px;">
            Customer Name:
          </td>
          <td style="padding: 10px;">
            ${body.firstName} ${body.lastName}
          </td>
        </tr>

        <tr>
          <td style="padding: 10px; font-weight: bold;">
            Email Address:
          </td>
          <td style="padding: 10px;">
            ${body.email}
          </td>
        </tr>

        <tr>
          <td style="padding: 10px; font-weight: bold;">
            Phone Number:
          </td>
          <td style="padding: 10px;">
            ${body.projectDetails
              .match(/Phone:\s(.+)/)?.[1] || "N/A"}
          </td>
        </tr>

        <tr>
          <td style="padding: 10px; font-weight: bold; vertical-align: top;">
            Requirement:
          </td>

          <td style="
            padding: 10px;
            background: #f9f9f9;
            border-radius: 8px;
            line-height: 1.7;
            white-space: pre-wrap;
          ">
            ${
              body.projectDetails
                .split("Requirement Details:\n")[1] || "N/A"
            }
          </td>
        </tr>
      </table>

      <hr style="margin: 25px 0;" />

      <p style="color: #666; font-size: 14px;">
        Submitted At:
        ${new Date(body.submittedAt).toLocaleString()}
      </p>

    </div>
  `,
});

    console.log("EMAIL SENT:", info.messageId);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email",
      },
      { status: 500 }
    );
  }
}