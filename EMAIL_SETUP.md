# Email Setup Instructions

The contact form is set up to send emails using Resend. Here's how to configure it:

## Option 1: Using Resend (Recommended)

1. Sign up for a free account at [Resend](https://resend.com)
2. Get your API key from the dashboard
3. Verify your domain (or use the test email for development)
4. Add to your `.env.local` file:

```env
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=Portfolio Contact <contact@yourdomain.com>
CONTACT_EMAIL=ishimwejustin67@gmail.com
```

## Option 2: Using Other Services

You can modify `src/app/api/contact/route.ts` to use:

- SendGrid
- Nodemailer with SMTP
- EmailJS
- Any other email service

## Current Setup

The form will work even without RESEND_API_KEY set - it will log the submission to the console. For production, you should set up a proper email service.

## Testing

1. Fill out the contact form
2. Check your email (or console logs if API key not set)
3. You should receive the form submission
