# Thank You Email Preview

This document shows what donors will receive after making a donation.

## Email Details

**From:** "Amanda Hines" <amanda@chronophageslament.com>  
**Subject:** Thank You for Your Generous Support! 🐱💕

---

## Email Content (HTML Version)

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│              The Chronophage's Lament                      │
│         A heartfelt thank you from Amanda Hines            │
│                                                            │
└────────────────────────────────────────────────────────────┘

Dear [Donor Name],

Thank you so much for your generous donation of $[Amount]!

Your support means the world to me and helps keep my creative 
journey alive.

                        🐱 💕 🐱

Your contribution helps keep my kitties fed and purring, fuels 
my writing with coffee and quiet time, and supports the tools 
I need to share stories that explore the surreal, the 
philosophical, and the beautifully strange.

Every story begins with a single word, and every journey begins 
with a single step. Thank you for walking this path with me. 
Your kindness inspires me to continue crafting tales that 
challenge perception and celebrate the wonder of existence.

────────────────────────────────────────────────────────────

With deepest gratitude,

Amanda Hines
Author of The Chronophage's Lament
Washington State

────────────────────────────────────────────────────────────

This email was sent because you made a donation to support 
Amanda Hines' writing.

Donation ID: [Transaction ID]
```

---

## Example Email

**Recipient:** jane.doe@example.com  
**Donation Amount:** $25.00  
**Donor Name:** Jane Doe

---

Dear Jane Doe,

Thank you so much for your generous donation of **$25.00**!

Your support means the world to me and helps keep my creative journey alive.

🐱 💕 🐱

Your contribution helps keep my kitties fed and purring, fuels my writing with coffee and quiet time, and supports the tools I need to share stories that explore the surreal, the philosophical, and the beautifully strange.

Every story begins with a single word, and every journey begins with a single step. Thank you for walking this path with me. Your kindness inspires me to continue crafting tales that challenge perception and celebrate the wonder of existence.

With deepest gratitude,

**Amanda Hines**  
*Author of The Chronophage's Lament*  
Washington State

---

## How It Works

1. **Donor completes checkout** on the donation page
2. **Stripe processes payment** and sends webhook to server
3. **Server receives webhook** with donation details
4. **Email is automatically sent** to donor's email address
5. **Donor receives personalized thank-you** within minutes

## Email Features

✅ **Personalized** - Uses donor's name from checkout  
✅ **Professional** - Beautiful HTML formatting with brand colors  
✅ **Heartfelt** - Genuine message from Amanda Hines  
✅ **Branded** - Includes novel title and author information  
✅ **Trackable** - Includes donation ID for reference  
✅ **Mobile-friendly** - Responsive design for all devices  

## Configuration

**Development Mode (Current):**
- Emails are logged to server console
- No SMTP configuration needed
- Perfect for testing

**Production Mode:**
- Configure SMTP settings in environment variables
- Real emails sent to donors
- See EMAIL_SETUP.md for configuration details

## Testing

To test the email system:

1. Make a test donation on the website
2. Check the server console logs
3. You'll see the complete email content printed
4. Verify the personalization and formatting

Once SMTP is configured, real emails will be sent automatically!
