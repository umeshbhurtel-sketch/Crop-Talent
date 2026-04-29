// src/lib/email.ts
import emailjs from "@emailjs/browser";

type Vars = Record<string, any>;

// ✅ Demo setup: hardcode these temporarily for Lovable
// Later you can move them to environment variables
const SERVICE_ID = "service_2fpklgj";         // EmailJS → Services → Service ID
const PUBLIC_KEY = "tOK3WQBZLiayP6wPg";        // EmailJS → Account → API keys
const TEMPLATE_CONTACT = "template_3f45sdd"; // Your EmailJS template ID
const TEMPLATE_HIRE = "template_l8qddrx";       // Your Hire Talent template ID


export async function sendEmail(templateId: string, variables: Vars) {
  if (!SERVICE_ID || !PUBLIC_KEY) {
    console.warn("EmailJS not configured. Skipping email send.");
    return;
  }

  try {
    await emailjs.send(SERVICE_ID, templateId, variables, PUBLIC_KEY);
    console.log(`✅ Email sent using ${templateId}`);
  } catch (err) {
    console.error("❌ EmailJS send failed:", err);
  }
}

// Export template IDs to use easily in other pages
export const EmailTemplates = {
  CONTACT: TEMPLATE_CONTACT,
  HIRE: TEMPLATE_HIRE,
  };
