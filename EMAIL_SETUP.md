# DailyPray Website — Setup Guide

## Contact Form (Gmail SMTP)

The contact form at `/contact` sends emails directly to your Gmail inbox using Nodemailer + Gmail SMTP. Completely free, no third-party services.

### Steps

1. **Enable 2-Step Verification** on dailyprayapp@gmail.com
   - Go to https://myaccount.google.com
   - Navigate to **Security** > **2-Step Verification**
   - Follow the prompts to enable it

2. **Generate an App Password**
   - Go to https://myaccount.google.com/apppasswords
   - Select **Mail** as the app
   - Select your device (or "Other" and type "DailyPray Website")
   - Click **Generate**
   - Copy the 16-character password (e.g. `abcd efgh ijkl mnop`)

3. **Add the App Password to your environment**
   - Open `.env.local` in the project root
   - Replace the placeholder:
     ```
     GMAIL_USER=dailyprayapp@gmail.com
     GMAIL_APP_PASSWORD=abcdefghijklmnop
     ```
   - Remove spaces from the password when pasting

4. **For production** (e.g. Vercel)
   - Add both environment variables in your hosting dashboard:
     - `GMAIL_USER` = `dailyprayapp@gmail.com`
     - `GMAIL_APP_PASSWORD` = your 16-character app password

### How it works

- User submits the form on `/contact`
- The form POSTs to `/api/contact` (Next.js Route Handler)
- The server sends an email via Gmail SMTP to dailyprayapp@gmail.com
- The sender's email is set as Reply-To, so you can reply directly
- No data is stored anywhere — it just sends the email

### Testing

```bash
npm run dev
```

Visit `http://localhost:3000/contact` and submit a test message. Check your Gmail inbox.
