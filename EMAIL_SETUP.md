# Email Configuration Guide

This project includes automated thank-you emails sent to donors after successful donations.

## Development Mode

By default, the application runs in **development mode** where emails are logged to the console instead of being sent. This allows you to test the email functionality without configuring SMTP.

When a donation is completed, you'll see the email content in the server logs.

## Production Mode (Real Email Sending)

To send real emails in production, you need to configure SMTP settings using environment variables.

### Required Environment Variables

Add these to your `.env` file or configure them in the Manus Settings → Secrets panel:

```env
SMTP_HOST=smtp.gmail.com           # Your SMTP server
SMTP_PORT=587                      # SMTP port (usually 587 or 465)
SMTP_SECURE=false                  # true for port 465, false for other ports
SMTP_USER=your-email@gmail.com     # Your email address
SMTP_PASS=your-app-password        # Your email password or app-specific password
SMTP_FROM="Amanda Hines <amanda@chronophageslament.com>"  # Sender name and email
```

### Popular SMTP Providers

#### Gmail
- Host: `smtp.gmail.com`
- Port: `587`
- Secure: `false`
- Note: You'll need to create an [App Password](https://support.google.com/accounts/answer/185833) instead of using your regular password

#### SendGrid
- Host: `smtp.sendgrid.net`
- Port: `587`
- User: `apikey`
- Pass: Your SendGrid API key

#### Mailgun
- Host: `smtp.mailgun.org`
- Port: `587`
- User: Your Mailgun SMTP username
- Pass: Your Mailgun SMTP password

#### AWS SES
- Host: `email-smtp.us-east-1.amazonaws.com` (replace region)
- Port: `587`
- User: Your AWS SES SMTP username
- Pass: Your AWS SES SMTP password

### Email Template

The thank-you email includes:
- Personalized greeting with donor's name
- Donation amount
- Heartfelt message from Amanda Hines
- Beautiful HTML formatting with brand colors
- Cat emojis 🐱💕

### Testing

1. **Development Testing**: Make a test donation and check the server console for the email content
2. **Production Testing**: Configure SMTP settings and make a test donation with a real email address

### Customization

To customize the email template, edit `/server/lib/email.ts`:
- Modify the HTML content in the `emailHtml` variable
- Update the plain text version in the `emailText` variable
- Change the subject line in the `mailOptions` object

### Troubleshooting

If emails aren't sending:
1. Check that all SMTP environment variables are set correctly
2. Verify your SMTP credentials are valid
3. Check the server logs for error messages
4. Ensure your SMTP provider allows sending from your domain
5. Check spam folders if emails aren't arriving

### Security Notes

- Never commit SMTP credentials to version control
- Use app-specific passwords instead of regular passwords when possible
- Consider using a dedicated email service for transactional emails
- Keep your SMTP credentials secure in environment variables
