import { useState } from "react";
import { z } from "zod";
import Layout from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Globe, MapPin, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Message is too short").max(2000),
});

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: parsed.data,
      });
      if (error) throw error;
      toast.success("Message sent! We'll get back to you soon.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Could not send message. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="bg-gradient-to-b from-secondary/50 to-background pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-primary md:text-5xl">Get in Touch</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Questions about the workshop? Send us a message and we'll respond shortly.
          </p>
        </div>
      </section>

      <section className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-5">
        <div className="md:col-span-2 space-y-4">
          {[
            { icon: Mail, title: "Email", value: "info@aahaarvidhi.com", href: "mailto:info@aahaarvidhi.com" },
            { icon: Phone, title: "Phone", value: "+91 95608 39287", href: "tel:+919560839287" },
            { icon: Globe, title: "Website", value: "aahaarvidhi.com", href: "https://aahaarvidhi.com" },
            { icon: MapPin, title: "Venue", value: "Anahad, Vikarabad — 50km from Hyderabad" },
          ].map((c) => (
            <Card key={c.title} className="flex items-start gap-4 p-5">
              <div className="rounded-lg bg-secondary p-3 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">{c.title}</p>
                {c.href ? (
                  <a href={c.href} className="font-semibold text-primary hover:text-accent">{c.value}</a>
                ) : (
                  <p className="font-semibold text-primary">{c.value}</p>
                )}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 md:col-span-3 md:p-8">
          <h2 className="font-serif text-2xl font-semibold text-primary">Send a Message</h2>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required maxLength={100} />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required maxLength={255} />
              </div>
            </div>
            <div>
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={30} />
            </div>
            <div>
              <Label htmlFor="message">Message *</Label>
              <Textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required maxLength={2000} />
            </div>
            <Button type="submit" size="lg" disabled={loading} className="w-full md:w-auto">
              {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…</> : "Send Message"}
            </Button>
            <p className="text-xs text-muted-foreground">
              Your message will be delivered to <strong>info@aahaarvidhi.com</strong>.
            </p>
          </form>
        </Card>
      </section>
    </Layout>
  );
};

export default Contact;