import nodemailer from "nodemailer";

// Create reusable transporter
const createTransporter = () => {
  // For development/testing, use ethereal.email (fake SMTP)
  // In production, configure with real SMTP credentials via environment variables
  
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    // Production SMTP configuration
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  } else {
    // Development: Log email to console instead of sending
    return nodemailer.createTransport({
      streamTransport: true,
      newline: "unix",
      buffer: true,
    });
  }
};

export interface SendThankYouEmailParams {
  to: string;
  name: string;
  amount: number;
  donationId?: string;
}

export async function sendThankYouEmail(params: SendThankYouEmailParams) {
  const { to, name, amount, donationId } = params;
  
  const transporter = createTransporter();
  
  const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Georgia', serif;
      line-height: 1.6;
      color: #2c3e50;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      text-align: center;
      padding: 30px 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 10px 10px 0 0;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      font-family: 'Playfair Display', serif;
    }
    .content {
      padding: 30px;
      background: #f8f9fa;
      border-radius: 0 0 10px 10px;
    }
    .amount {
      font-size: 36px;
      font-weight: bold;
      color: #667eea;
      text-align: center;
      margin: 20px 0;
    }
    .message {
      font-size: 16px;
      margin: 20px 0;
    }
    .signature {
      font-style: italic;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 2px solid #e0e0e0;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      padding: 20px;
      font-size: 12px;
      color: #7f8c8d;
    }
    .cats {
      text-align: center;
      font-size: 40px;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>The Chronophage's Lament</h1>
    <p>A heartfelt thank you from Amanda Hines</p>
  </div>
  
  <div class="content">
    <p class="message">Dear ${name || "Friend"},</p>
    
    <p class="message">
      Thank you so much for your generous donation of <strong>$${amount.toFixed(2)}</strong>! 
      Your support means the world to me and helps keep my creative journey alive.
    </p>
    
    <div class="cats">🐱 💕 🐱</div>
    
    <p class="message">
      Your contribution helps keep my kitties fed and purring, fuels my writing with coffee and quiet time, 
      and supports the tools I need to share stories that explore the surreal, the philosophical, 
      and the beautifully strange.
    </p>
    
    <p class="message">
      Every story begins with a single word, and every journey begins with a single step. 
      Thank you for walking this path with me. Your kindness inspires me to continue crafting 
      tales that challenge perception and celebrate the wonder of existence.
    </p>
    
    <div class="signature">
      <p class="message">With deepest gratitude,</p>
      <p class="message"><strong>Amanda Hines</strong></p>
      <p class="message" style="font-size: 14px; color: #7f8c8d;">
        Author of <em>The Chronophage's Lament</em><br>
        Washington State
      </p>
    </div>
  </div>
  
  <div class="footer">
    <p>This email was sent because you made a donation to support Amanda Hines' writing.</p>
    ${donationId ? `<p style="font-size: 10px; color: #bdc3c7;">Donation ID: ${donationId}</p>` : ""}
  </div>
</body>
</html>
  `;
  
  const emailText = `
Dear ${name || "Friend"},

Thank you so much for your generous donation of $${amount.toFixed(2)}!

Your support means the world to me and helps keep my creative journey alive. Your contribution helps keep my kitties fed and purring, fuels my writing with coffee and quiet time, and supports the tools I need to share stories that explore the surreal, the philosophical, and the beautifully strange.

Every story begins with a single word, and every journey begins with a single step. Thank you for walking this path with me. Your kindness inspires me to continue crafting tales that challenge perception and celebrate the wonder of existence.

With deepest gratitude,
Amanda Hines
Author of The Chronophage's Lament
Washington State

${donationId ? `Donation ID: ${donationId}` : ""}
  `;
  
  const mailOptions = {
    from: process.env.SMTP_FROM || '"Amanda Hines" <amanda@chronophageslament.com>',
    to,
    subject: "Thank You for Your Generous Support! 🐱💕",
    text: emailText,
    html: emailHtml,
  };
  
  try {
    const info = await transporter.sendMail(mailOptions);
    
    // In development mode, log the email content
    if (!process.env.SMTP_HOST) {
      console.log("\n=== EMAIL SENT (Development Mode) ===");
      console.log("To:", to);
      console.log("Subject:", mailOptions.subject);
      console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
      console.log("\nEmail Content:");
      console.log(emailText);
      console.log("=====================================\n");
    } else {
      console.log("Thank you email sent:", info.messageId);
    }
    
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending thank you email:", error);
    return { success: false, error };
  }
}
