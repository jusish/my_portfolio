import { NextRequest, NextResponse } from "next/server";

// Simple HTML escape function to prevent XSS
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    let { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Sanitize input to prevent XSS
    name = escapeHtml(name.trim());
    email = email.trim();
    subject = subject ? escapeHtml(subject.trim()) : "";
    message = escapeHtml(message.trim());

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
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
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                background-color: #f4f4f7;
                padding: 20px;
                line-height: 1.6;
                color: #333;
              }
              .email-container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .header {
                background: linear-gradient(135deg, #9333ea 0%, #7c3aed 100%);
                color: white;
                padding: 40px 30px;
                text-align: center;
              }
              .header h1 {
                font-size: 24px;
                font-weight: 600;
                margin: 0;
                letter-spacing: -0.5px;
              }
              .header p {
                font-size: 14px;
                margin-top: 8px;
                opacity: 0.95;
              }
              .content {
                padding: 40px 30px;
                background-color: #ffffff;
              }
              .info-section {
                background-color: #f9fafb;
                border-left: 4px solid #9333ea;
                padding: 20px;
                margin-bottom: 30px;
                border-radius: 4px;
              }
              .field {
                margin-bottom: 20px;
                padding-bottom: 20px;
                border-bottom: 1px solid #e5e7eb;
              }
              .field:last-child {
                border-bottom: none;
                margin-bottom: 0;
                padding-bottom: 0;
              }
              .label {
                font-size: 12px;
                font-weight: 600;
                color: #6b7280;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 8px;
                display: block;
              }
              .value {
                font-size: 16px;
                color: #111827;
                font-weight: 500;
                word-break: break-word;
              }
              .value a {
                color: #9333ea;
                text-decoration: none;
              }
              .value a:hover {
                text-decoration: underline;
              }
              .message-box {
                background-color: #ffffff;
                border: 2px solid #e5e7eb;
                border-radius: 8px;
                padding: 20px;
                margin-top: 10px;
                white-space: pre-wrap;
                font-size: 15px;
                line-height: 1.8;
                color: #374151;
                min-height: 100px;
              }
              .footer {
                background-color: #f9fafb;
                padding: 30px;
                text-align: center;
                border-top: 1px solid #e5e7eb;
              }
              .footer p {
                font-size: 13px;
                color: #6b7280;
                margin: 0;
              }
              .divider {
                height: 1px;
                background: linear-gradient(to right, transparent, #e5e7eb, transparent);
                margin: 30px 0;
              }
              @media only screen and (max-width: 600px) {
                body {
                  padding: 10px;
                }
                .content {
                  padding: 25px 20px;
                }
                .header {
                  padding: 30px 20px;
                }
                .header h1 {
                  font-size: 20px;
                }
              }
            </style>
          </head>
          <body>
            <div class="email-container">
              <div class="header">
                <h1>📧 New Contact Form Message</h1>
                <p>Someone reached out through your portfolio</p>
              </div>
              
              <div class="content">
                <div class="info-section">
                  <p style="font-size: 14px; color: #6b7280; margin: 0;">
                    You have received a new message from your portfolio contact form. Review the details below and respond as needed.
                  </p>
                </div>

                <div class="field">
                  <span class="label">From Name</span>
                  <div class="value">${name}</div>
                </div>

                <div class="field">
                  <span class="label">Email Address</span>
                  <div class="value">
                    <a href="mailto:${email}">${email}</a>
                  </div>
                </div>

                ${
                  subject
                    ? `<div class="field">
                        <span class="label">Subject</span>
                        <div class="value">${subject}</div>
                       </div>`
                    : ""
                }

                <div class="divider"></div>

                <div class="field">
                  <span class="label">Message</span>
                  <div class="message-box">${message.replace(
                    /\n/g,
                    "<br>"
                  )}</div>
                </div>
              </div>

              <div class="footer">
                <p>
                  This email was sent automatically from your portfolio contact form.<br>
                  Reply directly to this email to respond to ${name}.
                </p>
              </div>
            </div>
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
        // Help avoid spam by adding proper headers
        headers: {
          "X-Entity-Ref-ID": new Date().getTime().toString(),
        },
        tags: [
          {
            name: "category",
            value: "contact-form",
          },
        ],
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
