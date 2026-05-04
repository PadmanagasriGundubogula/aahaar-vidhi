import Layout from "@/components/site/Layout";
import RegisterButton, { REGISTER_URL } from "@/components/site/RegisterButton";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ExternalLink } from "lucide-react";

const Register = () => (
  <Layout>
    <section className="bg-gradient-to-b from-secondary/50 to-background py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-serif text-4xl font-bold text-primary md:text-5xl">
          Reserve Your Seat
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Limited to 20–25 participants. Fill out the registration form to book
          your spot for the Foundation Level workshop.
        </p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-12">
      <Card className="mx-auto max-w-3xl p-8 md:p-12">
        <h2 className="font-serif text-2xl font-semibold text-primary">What you’ll get</h2>
        <ul className="mt-5 space-y-3">
          {[
            "5 days of hands-on Ayurvedic culinary training",
            "Daily concept + practical demonstration sessions",
            "Certificate: Aahaar Vidhi – Prakriti-Aware Chef (Level 1)",
            "Eligibility for the Advanced Level (Level 2)",
            "Small batch — personalised attention",
          ].map((i) => (
            <li key={i} className="flex items-start gap-3 text-foreground">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              {i}
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-xl border border-border bg-secondary/40 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            Registration is handled through our official Google Form.
          </p>
          <div className="mt-4">
            <RegisterButton label="Open Registration Form" />
          </div>
          <p className="mt-3 break-all text-xs text-muted-foreground">
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline">
              {REGISTER_URL} <ExternalLink className="h-3 w-3" />
            </a>
          </p>
        </div>
      </Card>
    </section>
  </Layout>
);

export default Register;