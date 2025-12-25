# Monthly Newsletter Guide

Complete guide to creating and sending monthly newsletters to your supporters.

## Overview

The newsletter system allows you to send beautifully designed monthly updates to your supporters, including:

- **Writing Updates**: Progress on new projects and creative reflections
- **Behind the Scenes**: Insights into your creative process and daily routine
- **Exclusive Previews**: Early access to excerpts from upcoming work
- **Personal Notes**: Heartfelt messages to your community

## Newsletter Template

The newsletter template features:

- **Professional Design**: Beautiful HTML email with gradient headers and elegant typography
- **Responsive Layout**: Looks great on desktop, tablet, and mobile devices
- **Brand Consistency**: Uses The Chronophage's Lament color scheme and fonts
- **Visual Appeal**: Includes hero images, section dividers, and decorative elements
- **Personal Touch**: Features cat emojis and warm, conversational tone

## Creating a New Newsletter

### 1. Prepare Your Content

Create a new file in `server/newsletters/` following this structure:

```typescript
import { NewsletterContent } from "../lib/newsletter";

export const [month][year]Newsletter: NewsletterContent = {
  month: "February",
  year: 2026,
  heroImage: "https://example.com/hero-image.jpg", // Optional
  
  writingUpdate: {
    title: "Your Writing Update Title",
    content: `First paragraph of your writing update.

Second paragraph with more details.

Third paragraph wrapping up the section.`,
  },
  
  behindTheScenes: {
    title: "Behind the Scenes Title",
    content: `Share insights into your creative process...`,
    image: "https://example.com/behind-scenes.jpg", // Optional
  },
  
  exclusivePreview: {
    title: "Preview Title",
    excerpt: `An exclusive excerpt from your upcoming work...`,
  },
  
  personalNote: `Your personal message to supporters...

Can span multiple paragraphs.`,
  
  callToAction: {
    text: "Read The Chronophage's Lament",
    url: "https://yourwebsite.com",
  },
};
```

### 2. Content Guidelines

**Writing Update Section:**
- Share progress on current projects
- Discuss creative challenges and breakthroughs
- Mention reader feedback and its impact
- Keep it authentic and personal
- Length: 3-5 paragraphs

**Behind the Scenes Section:**
- Describe your writing routine
- Share workspace photos or creative tools
- Discuss inspiration sources
- Include anecdotes about your cats or daily life
- Length: 4-6 paragraphs

**Exclusive Preview Section:**
- Provide a compelling excerpt (300-500 words)
- Choose a passage that stands alone
- End on an intriguing note
- Make subscribers feel special for early access

**Personal Note:**
- Express genuine gratitude
- Share how donations are helping
- Look forward to future work
- Keep it warm and conversational
- Length: 2-3 paragraphs

### 3. Image Selection

**Hero Image:**
- Wide format (1200x400px recommended)
- High quality, visually striking
- Relates to the month's theme
- Use Unsplash for free high-quality images

**Behind the Scenes Image:**
- Shows your workspace, notebooks, or creative process
- Personal and authentic
- 800x500px recommended

### 4. Sending the Newsletter

**Development Mode (Current Setup):**
```bash
# Build the project
pnpm build

# Send newsletter (logs to console)
node send-newsletter.mjs
```

**Production Mode (With SMTP):**
1. Configure SMTP settings (see EMAIL_SETUP.md)
2. Build and send as above
3. Emails will be sent to all subscribers

## Newsletter Schedule

Recommended schedule:
- **First week of month**: Draft content
- **Second week**: Review and refine
- **Third week**: Finalize and test
- **Last week**: Send to subscribers

## Subscriber Management

Currently, newsletter subscriptions are collected through the `/newsletter` page on your website.

To manage subscribers:
1. Collect email addresses through the subscription form
2. Store in a database or email service provider
3. Use the list when sending newsletters

## Testing Your Newsletter

Before sending to all subscribers:

1. **Preview in Browser**: Open `NEWSLETTER_TEMPLATE.html` to see the design
2. **Test Email**: Send to yourself first using a test email address
3. **Check Rendering**: Test in multiple email clients (Gmail, Outlook, Apple Mail)
4. **Verify Links**: Ensure all links and images load correctly
5. **Proofread**: Check for typos and formatting issues

## Email Service Providers

For production use, consider these services:

### Mailchimp
- Free tier: Up to 500 subscribers
- Beautiful templates and analytics
- Easy subscriber management

### SendGrid
- Free tier: 100 emails/day
- Reliable delivery
- Good API for automation

### ConvertKit
- Designed for creators
- Excellent for newsletters
- Subscriber tagging and segmentation

### Substack
- Free to use
- Built-in payment options
- Growing platform for writers

## Best Practices

### Content
- **Be Consistent**: Send on the same day each month
- **Be Authentic**: Share genuine updates, not marketing copy
- **Be Visual**: Include images to break up text
- **Be Personal**: Write like you're talking to a friend
- **Be Valuable**: Give subscribers exclusive content

### Technical
- **Test Thoroughly**: Always send test emails first
- **Monitor Metrics**: Track open rates and click-through rates
- **Maintain Lists**: Remove bounced emails promptly
- **Respect Privacy**: Include unsubscribe links
- **Mobile First**: Ensure mobile readability

### Engagement
- **Ask Questions**: Invite responses and feedback
- **Share Stories**: Personal anecdotes resonate
- **Show Gratitude**: Thank supporters regularly
- **Create Exclusivity**: Give subscribers special access
- **Build Community**: Foster connection among readers

## Example Newsletter Timeline

**Week 1 (Days 1-7):**
- Review previous month's metrics
- Brainstorm content ideas
- Draft writing update section
- Gather images

**Week 2 (Days 8-14):**
- Write behind-the-scenes section
- Select exclusive preview excerpt
- Draft personal note
- Review and edit all content

**Week 3 (Days 15-21):**
- Finalize all sections
- Prepare images and optimize
- Create newsletter file
- Send test emails

**Week 4 (Days 22-28):**
- Final proofreading
- Schedule send time
- Send to all subscribers
- Monitor delivery and engagement

## Troubleshooting

**Emails Not Sending:**
- Check SMTP configuration
- Verify credentials are correct
- Check server logs for errors
- Test with a simple email first

**Poor Open Rates:**
- Improve subject lines
- Send at optimal times (Tuesday-Thursday, 10 AM)
- Clean your email list
- Make content more valuable

**High Unsubscribe Rate:**
- Review content quality
- Check sending frequency
- Ensure content matches expectations
- Survey unsubscribers for feedback

## Resources

- **Newsletter Template**: `NEWSLETTER_TEMPLATE.html`
- **Example Content**: `server/newsletters/2026-01-example.ts`
- **Email Setup**: `EMAIL_SETUP.md`
- **Newsletter Code**: `server/lib/newsletter.ts`

## Support

For questions or issues with the newsletter system:
1. Review this guide thoroughly
2. Check the example newsletter
3. Test in development mode first
4. Verify SMTP settings if using production mode

---

Remember: Your newsletter is a gift to your supporters. Make it personal, valuable, and beautiful. Your authentic voice is what makes it special.
