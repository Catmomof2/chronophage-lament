import nodemailer from "nodemailer";

// Create reusable transporter
const createTransporter = () => {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
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
    return nodemailer.createTransport({
      streamTransport: true,
      newline: "unix",
      buffer: true,
    });
  }
};

export interface NewsletterContent {
  month: string;
  year: number;
  heroImage?: string;
  writingUpdate: {
    title: string;
    content: string;
  };
  behindTheScenes: {
    title: string;
    content: string;
    image?: string;
  };
  exclusivePreview: {
    title: string;
    excerpt: string;
  };
  personalNote: string;
  callToAction?: {
    text: string;
    url: string;
  };
}

export interface SendNewsletterParams {
  to: string | string[];
  content: NewsletterContent;
}

export function generateNewsletterHTML(content: NewsletterContent): string {
  const {
    month,
    year,
    heroImage,
    writingUpdate,
    behindTheScenes,
    exclusivePreview,
    personalNote,
    callToAction,
  } = content;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Georgia', serif;
      line-height: 1.8;
      color: #2c3e50;
      margin: 0;
      padding: 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    .container {
      max-width: 680px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 50px 40px;
      text-align: center;
    }
    .header h1 {
      margin: 0 0 10px 0;
      font-size: 36px;
      font-family: 'Playfair Display', serif;
      font-weight: 700;
    }
    .header .subtitle {
      font-size: 18px;
      opacity: 0.95;
      margin: 0;
      font-style: italic;
    }
    .header .date {
      font-size: 14px;
      opacity: 0.85;
      margin-top: 20px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    .hero-image {
      width: 100%;
      height: 300px;
      object-fit: cover;
      display: block;
    }
    .content {
      padding: 50px 40px;
    }
    .section {
      margin-bottom: 50px;
    }
    .section-title {
      font-size: 28px;
      font-family: 'Playfair Display', serif;
      color: #667eea;
      margin: 0 0 20px 0;
      padding-bottom: 15px;
      border-bottom: 3px solid #f0f0f0;
    }
    .section-content {
      font-size: 16px;
      line-height: 1.8;
      color: #444;
    }
    .section-content p {
      margin: 0 0 15px 0;
    }
    .section-image {
      width: 100%;
      max-width: 100%;
      height: auto;
      border-radius: 12px;
      margin: 25px 0;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }
    .preview-box {
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      border-left: 5px solid #667eea;
      padding: 30px;
      border-radius: 8px;
      margin: 25px 0;
      font-style: italic;
      color: #555;
    }
    .preview-box .preview-title {
      font-size: 20px;
      font-weight: 600;
      color: #667eea;
      margin: 0 0 15px 0;
      font-style: normal;
    }
    .personal-note {
      background: #fff9e6;
      border: 2px solid #ffd700;
      border-radius: 12px;
      padding: 35px;
      margin: 40px 0;
      position: relative;
    }
    .personal-note::before {
      content: "✨";
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 40px;
      background: white;
      padding: 0 15px;
    }
    .personal-note p {
      margin: 0 0 15px 0;
      color: #5a4a2a;
      font-size: 16px;
    }
    .signature {
      text-align: right;
      margin-top: 25px;
      font-style: italic;
      color: #667eea;
      font-size: 18px;
    }
    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 18px 45px;
      text-decoration: none;
      border-radius: 50px;
      font-size: 16px;
      font-weight: 600;
      margin: 30px 0;
      text-align: center;
      box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
      transition: transform 0.2s;
    }
    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 28px rgba(102, 126, 234, 0.5);
    }
    .footer {
      background: #f8f9fa;
      padding: 40px;
      text-align: center;
      border-top: 1px solid #e9ecef;
    }
    .footer p {
      margin: 5px 0;
      font-size: 13px;
      color: #6c757d;
    }
    .footer a {
      color: #667eea;
      text-decoration: none;
    }
    .divider {
      height: 2px;
      background: linear-gradient(90deg, transparent, #667eea, transparent);
      margin: 40px 0;
    }
    .cats-divider {
      text-align: center;
      font-size: 32px;
      margin: 30px 0;
      opacity: 0.7;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <h1>The Chronophage's Lament</h1>
      <p class="subtitle">Monthly Newsletter from Amanda Hines</p>
      <p class="date">${month} ${year}</p>
    </div>

    ${heroImage ? `<img src="${heroImage}" alt="Newsletter hero" class="hero-image">` : ''}

    <!-- Main Content -->
    <div class="content">
      <!-- Writing Update Section -->
      <div class="section">
        <h2 class="section-title">${writingUpdate.title}</h2>
        <div class="section-content">
          ${writingUpdate.content.split('\n\n').map(p => `<p>${p}</p>`).join('')}
        </div>
      </div>

      <div class="divider"></div>

      <!-- Behind the Scenes Section -->
      <div class="section">
        <h2 class="section-title">${behindTheScenes.title}</h2>
        ${behindTheScenes.image ? `<img src="${behindTheScenes.image}" alt="Behind the scenes" class="section-image">` : ''}
        <div class="section-content">
          ${behindTheScenes.content.split('\n\n').map(p => `<p>${p}</p>`).join('')}
        </div>
      </div>

      <div class="cats-divider">🐱 ✨ 🐱</div>

      <!-- Exclusive Preview Section -->
      <div class="section">
        <h2 class="section-title">Exclusive Preview</h2>
        <div class="preview-box">
          <div class="preview-title">${exclusivePreview.title}</div>
          ${exclusivePreview.excerpt.split('\n\n').map(p => `<p>${p}</p>`).join('')}
        </div>
      </div>

      <!-- Personal Note -->
      <div class="personal-note">
        ${personalNote.split('\n\n').map(p => `<p>${p}</p>`).join('')}
        <div class="signature">— Amanda</div>
      </div>

      ${callToAction ? `
        <div style="text-align: center;">
          <a href="${callToAction.url}" class="cta-button">${callToAction.text}</a>
        </div>
      ` : ''}
    </div>

    <!-- Footer -->
    <div class="footer">
      <p><strong>Amanda Hines</strong> • Washington State</p>
      <p>Author of <em>The Chronophage's Lament</em></p>
      <p style="margin-top: 20px;">
        You're receiving this newsletter because you support Amanda's work.
      </p>
      <p>
        <a href="#">Read on the website</a> • 
        <a href="#">Support Amanda</a>
      </p>
    </div>
  </div>
</body>
</html>
  `;
}

export function generateNewsletterText(content: NewsletterContent): string {
  const {
    month,
    year,
    writingUpdate,
    behindTheScenes,
    exclusivePreview,
    personalNote,
    callToAction,
  } = content;

  return `
THE CHRONOPHAGE'S LAMENT
Monthly Newsletter from Amanda Hines
${month} ${year}

════════════════════════════════════════════════════════════

${writingUpdate.title.toUpperCase()}

${writingUpdate.content}

────────────────────────────────────────────────────────────

${behindTheScenes.title.toUpperCase()}

${behindTheScenes.content}

🐱 ✨ 🐱

────────────────────────────────────────────────────────────

EXCLUSIVE PREVIEW

${exclusivePreview.title}

${exclusivePreview.excerpt}

────────────────────────────────────────────────────────────

A PERSONAL NOTE

${personalNote}

— Amanda

${callToAction ? `\n${callToAction.text}: ${callToAction.url}\n` : ''}

════════════════════════════════════════════════════════════

Amanda Hines • Washington State
Author of The Chronophage's Lament

You're receiving this newsletter because you support Amanda's work.
  `;
}

export async function sendNewsletter(params: SendNewsletterParams) {
  const { to, content } = params;
  const recipients = Array.isArray(to) ? to : [to];
  
  const transporter = createTransporter();
  
  const emailHtml = generateNewsletterHTML(content);
  const emailText = generateNewsletterText(content);
  
  const mailOptions = {
    from: process.env.SMTP_FROM || '"Amanda Hines" <amanda@chronophageslament.com>',
    to: recipients.join(', '),
    subject: `${content.month} ${content.year} Newsletter: ${content.writingUpdate.title}`,
    text: emailText,
    html: emailHtml,
  };
  
  try {
    const info = await transporter.sendMail(mailOptions);
    
    if (!process.env.SMTP_HOST) {
      console.log("\n=== NEWSLETTER SENT (Development Mode) ===");
      console.log("To:", recipients.join(', '));
      console.log("Subject:", mailOptions.subject);
      console.log("\nNewsletter Preview:");
      console.log(emailText);
      console.log("=========================================\n");
    } else {
      console.log("Newsletter sent:", info.messageId);
    }
    
    return { success: true, messageId: info.messageId, recipientCount: recipients.length };
  } catch (error) {
    console.error("Error sending newsletter:", error);
    return { success: false, error };
  }
}
