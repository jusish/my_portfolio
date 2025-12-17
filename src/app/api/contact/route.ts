import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Simple email sending using fetch to a webhook or email service
    // For production, you should use a service like Resend, SendGrid, or Nodemailer
    // For now, we'll use a simple approach that works with most email services

    const emailData = {
      to: process.env.CONTACT_EMAIL || "ishimwejustin67@gmail.com",
      from: email,
      subject: subject || `Portfolio Contact: ${name}`,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${subject ? `Subject: ${subject}` : ""}

Message:
${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #9333ea, #7c3aed); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f5f5f5; padding: 20px; border-radius: 0 0 8px 8px; }
              .field { margin: 15px 0; }
              .label { font-weight: bold; color: #9333ea; }
              .message { background: white; padding: 15px; border-radius: 4px; margin-top: 10px; white-space: pre-wrap; }
            </style>
          </head>
          <body>
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span> ${name}
              </div>
              <div class="field">
                <span class="label">Email:</span> ${email}
              </div>
              ${
                subject
                  ? `<div class="field"><span class="label">Subject:</span> ${subject}</div>`
                  : ""
              }
              <div class="field">
                <span class="label">Message:</span>
                <div class="message">${message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <p style="color: #666; font-size: 12px; margin-top: 20px; text-align: center;">
              This email was sent from your portfolio contact form.
            </p>
          </body>
        </html>
      `,
    };

    // If you have RESEND_API_KEY set, use Resend
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      const { data, error } = await resend.emails.send({
        from:
          process.env.RESEND_FROM_EMAIL ||
          "Portfolio Contact <onboarding@resend.dev>",
        to: [emailData.to],
        replyTo: email,
        subject: emailData.subject,
        html: emailData.html,
        text: emailData.text,
      });

      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json(
          { error: "Failed to send email" },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { message: "Email sent successfully", data },
        { status: 200 }
      );
    }

    // Fallback: Log the email data (you can set up webhook or other service)
    console.log("Contact form submission:", emailData);

    // In production, you might want to use a webhook service or other email provider
    // For now, return success (you can implement your preferred email service)
    return NextResponse.json(
      { message: "Message received. We'll get back to you soon!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
