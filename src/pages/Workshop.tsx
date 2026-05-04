import Layout from "@/components/site/Layout";
import RegisterButton from "@/components/site/RegisterButton";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Users, Award, CheckCircle2 } from "lucide-react";

const audience = [
  "Professional Chefs & Cooks",
  "Culinary Educators",
  "Food Entrepreneurs",
  "Wellness Cuisine Enthusiasts",
  "Serious Home Chefs",
];

const days = [
  { day: "Day 1", title: "Introduction to Ayurvedic Food Thinking", desc: "Understanding food beyond taste — the foundation of Ayurvedic cuisine." },
  { day: "Day 2", title: "Understanding the Individual (Prakriti)", desc: "Why different people respond differently to the same food." },
  { day: "Day 3", title: "Taste & Food Basics (Rasa)", desc: "How the six tastes influence body, mind and digestion." },
  { day: "Day 4", title: "Cooking Awareness & Food Behavior", desc: "What truly happens when food is cooked, combined and consumed." },
  { day: "Day 5", title: "Time, Seasonal Influence & Eating Awareness", desc: "Structuring food and meals according to time and season." },
];

const Workshop = () => (
  <Layout>
    <section className="bg-gradient-to-b from-secondary/50 to-background py-16">
      <div className="container mx-auto px-4 text-center">
        <p className="font-medium text-accent">Foundation Level (Level 1)</p>
        <h1 className="mt-2 font-serif text-4xl font-bold text-primary md:text-5xl">The Workshop</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          A 5-day hands-on immersion in Ayurvedic cooking — Agni, Prakriti, Rasa & Kala.
        </p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Calendar, title: "Duration", desc: "5 Days (Offline)" },
          { icon: Calendar, title: "Dates", desc: "14 – 18 July 2026" },
          { icon: Clock, title: "Sessions", desc: "10AM–1PM & 2PM–4PM" },
          { icon: Users, title: "Batch Size", desc: "20 – 25 Participants" },
        ].map((s) => (
          <Card key={s.title} className="p-6">
            <s.icon className="h-7 w-7 text-accent" />
            <h3 className="mt-3 font-semibold text-primary">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </Card>
        ))}
      </div>
    </section>

    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto grid gap-10 px-4 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl font-bold text-primary">Who Can Attend</h2>
          <p className="mt-3 text-muted-foreground">No prior Ayurveda knowledge required.</p>
          <ul className="mt-6 space-y-3">
            {audience.map((a) => (
              <li key={a} className="flex items-center gap-3 text-foreground">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                {a}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-3xl font-bold text-primary">Certification</h2>
          <Card className="mt-4 p-6">
            <Award className="h-10 w-10 text-gold" />
            <p className="mt-3 text-sm text-muted-foreground">Title Awarded</p>
            <p className="mt-1 font-serif text-xl font-semibold text-primary">
              “Aahaar Vidhi – Prakriti-Aware Chef (Level 1)”
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Apply basic Ayurvedic concepts in cooking at home</li>
              <li>• Assist in Prakriti-aware kitchens</li>
              <li>• Eligible for Advanced Level (Level 2)</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16">
      <h2 className="text-center font-serif text-3xl font-bold text-primary">Day-Wise Curriculum</h2>
      <div className="mx-auto mt-10 max-w-4xl">
        <Tabs defaultValue={days[0].day} className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-secondary/50">
            {days.map((t) => (
              <TabsTrigger key={t.day} value={t.day} className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {t.day}
              </TabsTrigger>
            ))}
          </TabsList>
          {days.map((t, i) => (
            <TabsContent key={t.day} value={t.day}>
              <Card className="mt-4 p-8 border-border bg-card">
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <div className={`shrink-0 rounded-lg px-6 py-4 text-center font-serif text-xl font-bold text-primary-foreground ${i < 3 ? "bg-primary" : "bg-accent"}`}>
                    {t.day}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-primary">{t.title}</h3>
                    <p className="mt-2 text-base text-muted-foreground">{t.desc}</p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <div className="mt-12 text-center">
        <RegisterButton />
      </div>
    </section>
  </Layout>
);

export default Workshop;