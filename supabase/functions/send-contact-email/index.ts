import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";

interface ContactBody {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY not configured");

    const body = (await req.json()) as ContactBody;
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const message = (body.message || "").trim();

    if (!name || name.length > 100) throw new Error("Invalid name");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) throw new Error("Invalid email");
    if (!message || message.length > 2000) throw new Error("Invalid message");
    if (phone.length > 30) throw new Error("Invalid phone");

    const html = `
      <h2>New Aahaar Vidhi Inquiry</h2>
      <p><strong>Name:</strong> ${escape(name)}</p>
      <p><strong>Email:</strong> ${escape(email)}</p>
      ${phone ? `<p><strong>Phone:</strong> ${escape(phone)}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${escape(message).replace(/\n/g, "<br/>")}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Aahaar Vidhi Website <onboarding@resend.dev>",
        to: ["info@aahaarvidhi.com"],
        reply_to: email,
        subject: `New inquiry from ${name}`,
        html,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      return new Response(JSON.stringify({ error: data }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
