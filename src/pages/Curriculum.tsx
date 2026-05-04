import Layout from "@/components/site/Layout";
import RegisterButton from "@/components/site/RegisterButton";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const days = [
  { day: "Day 1", title: "Introduction to Ayurvedic Food Thinking", desc: "Understanding food beyond taste — the foundation of Ayurvedic cuisine." },
  { day: "Day 2", title: "Understanding the Individual (Prakriti)", desc: "Why different people respond differently to the same food." },
  { day: "Day 3", title: "Taste & Food Basics (Rasa)", desc: "How the six tastes influence body, mind and digestion." },
  { day: "Day 4", title: "Cooking Awareness & Food Behavior", desc: "What truly happens when food is cooked, combined and consumed." },
  { day: "Day 5", title: "Time, Seasonal Influence & Eating Awareness", desc: "Structuring food and meals according to time and season." },
];

const Curriculum = () => (
  <Layout>
    <section className="bg-gradient-to-b from-secondary/50 to-background pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 text-center">
        <p className="font-medium text-accent">Detailed Program</p>
        <h1 className="mt-2 font-serif text-4xl font-bold text-primary md:text-5xl">Day-Wise Curriculum</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          A step-by-step 5-day journey into the heart of Ayurvedic culinary wisdom.
        </p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
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

export default Curriculum;
