import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, company, projectDetails } = body;

    // Validate environment variables
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const recipientEmail = process.env.RECIPIENT_EMAIL;



    if (!gmailUser || !gmailPass || !recipientEmail) {
      console.error('Missing email configuration:', {
        hasUser: !!gmailUser,
        hasPass: !!gmailPass,
        hasRecipient: !!recipientEmail,
      });
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email service is not properly configured. Please add GMAIL_USER, GMAIL_APP_PASSWORD, and RECIPIENT_EMAIL to your environment variables.' 
        },
        { status: 500 }
      );
    }

    // Create Nodemailer transporter for Gmail
    console.log('[v0] Creating Gmail transporter...');
    console.log('[v0] User set:', !!gmailUser);
    console.log('[v0] Pass length:', gmailPass?.length);
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    // Compose email
    const mailOptions = {
      from: gmailUser,
      to: recipientEmail,
      subject: `New Inquiry from ${firstName} ${lastName} - AllPack Pro`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Inquiry Received</h2>
          <hr style="border: none; border-top: 2px solid #007bff;" />
          
          <h3 style="color: #555; margin-top: 20px;">Customer Details:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; background-color: #f5f5f5; font-weight: bold; width: 30%;">Name:</td>
              <td style="padding: 8px;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; background-color: #f5f5f5; font-weight: bold;">Email:</td>
              <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; background-color: #f5f5f5; font-weight: bold;">Company:</td>
              <td style="padding: 8px;">${company || 'Not provided'}</td>
            </tr>
          </table>

          <h3 style="color: #555; margin-top: 20px;">Project Details:</h3>
          <div style="background-color: #f9f9f9; padding: 12px; border-left: 4px solid #007bff; margin: 10px 0;">
            <p style="margin: 0; white-space: pre-wrap; color: #333;">${projectDetails}</p>
          </div>

          <hr style="border: none; border-top: 2px solid #ddd; margin-top: 20px;" />
          <p style="font-size: 12px; color: #888; text-align: center;">
            This email was sent from AllPack Pro contact form
          </p>
        </div>
      `,
    };

    // Send email
    console.log('[v0] Attempting to send email with Nodemailer...');
    console.log('[v0] From:', gmailUser, 'To:', recipientEmail);
    
    try {
      const result = await transporter.sendMail(mailOptions);
      console.log('[v0] Email sent successfully:', result);
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Email sent successfully to your Gmail inbox' 
        },
        { status: 200 }
      );
    } catch (nodemailerError) {
      console.error('[v0] Nodemailer error:', nodemailerError);
      throw nodemailerError;
    }

  } catch (error) {
    console.error('[v0] API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('[v0] Error details:', {
      message: errorMessage,
      error: JSON.stringify(error, null, 2)
    });
    
    return NextResponse.json(
      { 
        success: false, 
        message: `Failed to send email: ${errorMessage}` 
      },
      { status: 500 }
    );
  }
}
