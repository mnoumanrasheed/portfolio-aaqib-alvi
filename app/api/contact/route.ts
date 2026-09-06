import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// Rate limiting - simple in-memory store (use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3; // Max 3 requests per window per IP

// Validation schema
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long")
    .regex(/^[a-zA-Z\s\-'.]+$/, "Name contains invalid characters"),
  email: z.string().email("Please provide a valid email address"),
  organization: z.string().min(2, "Organization is required").max(200, "Organization name is too long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
  // Honeypot field for spam protection
  honeypot: z.string().max(0, "Invalid submission").optional(),
  // Timestamp for spam protection
  timestamp: z.number().optional(),
});

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIP = request.headers.get("x-real-ip");
  
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  return "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }
  
  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Check rate limit
    const clientIP = getClientIP(request);
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment before trying again." },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    
    // Check honeypot (spam protection)
    if (body.honeypot && body.honeypot.length > 0) {
      // Silently reject spam submissions
      return NextResponse.json({ success: true, message: "Message sent successfully" });
    }

    // Check timestamp (prevent instant submissions from bots)
    if (body.timestamp && Date.now() - body.timestamp < 2000) {
      return NextResponse.json(
        { error: "Submission too fast. Please try again." },
        { status: 400 }
      );
    }

    // Validate input
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      const errors = validationResult.error.issues.map((issue) => issue.message).join(", ");
      return NextResponse.json({ error: errors }, { status: 400 });
    }

    const { name, email, organization, message } = validationResult.data;

    // Check for required environment variables
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json(
        { error: "Service configuration error. Please try again later." },
        { status: 500 }
      );
    }

    if (!contactEmail) {
      console.error("Missing CONTACT_EMAIL environment variable");
      return NextResponse.json(
        { error: "Service configuration error. Please try again later." },
        { status: 500 }
      );
    }

    // Send email using Resend
    const resend = new Resend(resendApiKey);
    const { data, error } = await resend.emails.send({
      from: fromEmail || "noreply@aaqibalvi.com",
      to: [contactEmail],
      subject: `New Contact: ${name} - ${organization}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Inquiry</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 12px; padding: 32px; margin-bottom: 24px;">
            <h1 style="margin: 0 0 8px 0; font-size: 24px; font-weight: 600; color: #07111F;">New Contact Inquiry</h1>
            <p style="margin: 0; color: #6c757d; font-size: 14px;">Received via aaqibalvi.com</p>
          </div>
          
          <div style="background: #ffffff; border: 1px solid #e9ecef; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f3f5; width: 120px; color: #6c757d; font-size: 13px; font-weight: 500;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f3f5; font-size: 15px; font-weight: 500;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f3f5; color: #6c757d; font-size: 13px; font-weight: 500;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f3f5; font-size: 15px;">
                  <a href="mailto:${escapeHtml(email)}" style="color: #89AFC6; text-decoration: none;">${escapeHtml(email)}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #6c757d; font-size: 13px; font-weight: 500;">Organization</td>
                <td style="padding: 12px 0; font-size: 15px;">${escapeHtml(organization)}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: #ffffff; border: 1px solid #e9ecef; border-radius: 12px; padding: 24px;">
            <h2 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #6c757d; text-transform: uppercase; letter-spacing: 0.5px;">Message</h2>
            <p style="margin: 0; font-size: 15px; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
          
          <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e9ecef; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #adb5bd;">This email was sent from the contact form at aaqibalvi.com</p>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Inquiry
===================

From: ${name}
Email: ${email}
Organization: ${organization}

Message:
${message}

---
This email was sent from aaqibalvi.com
      `.trim(),
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully. I'll respond within 24 hours.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
