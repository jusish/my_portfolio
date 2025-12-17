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

## Avoiding Spam Folder

To improve email deliverability and avoid spam:

1. **Verify your domain in Resend** (Important!)

   - Go to Resend Dashboard → Domains
   - Add your domain (e.g., yourdomain.com)
   - Add the required DNS records (SPF, DKIM, DMARC)
   - This is the most important step to avoid spam

2. **Use a verified "from" email**

   - Update `RESEND_FROM_EMAIL` to use your verified domain
   - Example: `Portfolio <contact@yourdomain.com>`
   - Don't use generic addresses like `onboarding@resend.dev` in production

3. **Email Content Best Practices**

   - The email template is already optimized with proper HTML structure
   - Includes proper text/plain version
   - Uses semantic HTML and inline styles for better compatibility

4. **Monitor Your Sending**
   - Check Resend dashboard for delivery statistics
   - Monitor bounce rates and spam complaints
   - Keep sending volume reasonable (Resend free tier: 3,000 emails/month)

## Current Email Template Features

- Professional, modern design with purple branding
- Responsive layout (works on mobile)
- Clear information hierarchy
- Proper email formatting (inline CSS for better compatibility)
- Reply-to functionality (you can reply directly to the sender)
