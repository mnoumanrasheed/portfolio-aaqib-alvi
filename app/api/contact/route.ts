import { NextRequest, NextResponse } from "next/server";

// Rate limiting - simple in-memory store (use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3; // Max 3 requests per window per IP

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

    // Basic validation
    const { name, email, organization, message } = body;
    
    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }
    
    if (!organization || organization.length < 2) {
      return NextResponse.json({ error: "Organization is required" }, { status: 400 });
    }
    
    if (!message || message.length < 10) {
      return NextResponse.json({ error: "Message must be at least 10 characters" }, { status: 400 });
    }

    // Check for required environment variables
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!contactEmail) {
      console.error("Missing CONTACT_EMAIL environment variable");
    }

    // For now, just log the contact submission
    console.log("Contact form submission:", {
      name: escapeHtml(name),
      email: escapeHtml(email),
      organization: escapeHtml(organization),
      message: escapeHtml(message),
      timestamp: new Date().toISOString(),
    });

    // Try to send email if Resend is configured
    try {
      const { Resend } = await import("resend");
      const resendApiKey = process.env.RESEND_API_KEY;
      const fromEmail = process.env.RESEND_FROM_EMAIL;

      if (resendApiKey && contactEmail) {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: fromEmail || "noreply@aaqibalvi.com",
          to: [contactEmail],
          subject: `New Contact: ${name} - ${organization}`,
          replyTo: email,
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <title>New Contact Inquiry</title>
            </head>
            <body style="font-family: sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: #f8f9fa; border-radius: 12px; padding: 32px; margin-bottom: 24px;">
                <h1 style="margin: 0 0 8px 0; font-size: 24px;">New Contact Inquiry</h1>
                <p style="margin: 0; color: #6c757d; font-size: 14px;">Received via aaqibalvi.com</p>
              </div>
              
              <div style="background: #ffffff; border: 1px solid #e9ecef; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                <table style="width: 100%;">
                  <tr>
                    <td style="padding: 12px 0; color: #6c757d;">Name</td>
                    <td style="padding: 12px 0;">${escapeHtml(name)}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #6c757d;">Email</td>
                    <td style="padding: 12px 0;">
                      <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #6c757d;">Organization</td>
                    <td style="padding: 12px 0;">${escapeHtml(organization)}</td>
                  </tr>
                </table>
              </div>
              
              <div style="background: #ffffff; border: 1px solid #e9ecef; border-radius: 12px; padding: 24px;">
                <h2 style="margin: 0 0 16px 0; font-size: 14px; color: #6c757d;">Message</h2>
                <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
              </div>
            </body>
            </html>
          `,
          text: `New Contact from ${name} (${email}) at ${organization}:\n\n${message}`,
        });
      }
    } catch (emailError) {
      // Email sending failed, but we'll still return success
      console.error("Email sending error (non-fatal):", emailError);
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
