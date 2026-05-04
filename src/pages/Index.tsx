import { Link } from "react-router-dom";
import Layout from "@/components/site/Layout";
import RegisterButton from "@/components/site/RegisterButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users, Award, Sparkles, ChefHat, Leaf } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import hero from "@/assets/hero-spices.jpg";

const highlights = [
  { icon: Calendar, title: "5 Days", desc: "14 – 18 July 2026" },
  { icon: Clock, title: "Two Sessions / Day", desc: "10AM–1PM & 2PM–4PM" },
  { icon: Users, title: "20–25 Participants", desc: "Small, focused batch" },
  { icon: Award, title: "Certified", desc: "Prakriti-Aware Chef (L1)" },
];

const themes = [
  { day: "Day 1", title: "Introduction to Ayurvedic Food Thinking", desc: "Understanding food beyond taste" },
  { day: "Day 2", title: "Understanding the Individual (Prakriti)", desc: "Why people respond differently to food" },
  { day: "Day 3", title: "Taste & Food Basics (Rasa)", desc: "How taste influences the body" },
  { day: "Day 4", title: "Cooking Awareness & Food Behavior", desc: "What happens when food is cooked" },
  { day: "Day 5", title: "Time, Seasonal Influence & Eating Awareness", desc: "Structuring food in daily life" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
        aria-hidden
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} aria-hidden />
      <div className="container relative mx-auto px-4 pt-0 pb-24 md:pt-0 md:pb-36 text-primary-foreground">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold">
            <Sparkles className="h-4 w-4" /> Foundation Level (Level 1)
          </span>
          <h1 className="mt-6 font-serif text-4xl font-bold leading-tight md:text-6xl">
            Aahaar Vidhi <br />
            <span className="text-gold">Culinary Workshop</span>
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/90 md:text-xl">
            Understanding Ayurvedic Cooking — a 5-day hands-on journey through Agni,
            Prakriti, Rasa and Kala.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <RegisterButton />
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/workshop">Explore Workshop</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Highlights */}
    <section className="container mx-auto -mt-12 px-4">
      <div className="grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:grid-cols-4">
        {highlights.map((h) => (
          <div key={h.title} className="flex items-start gap-3">
            <div className="rounded-lg bg-secondary p-3 text-primary">
              <h.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-primary">{h.title}</p>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Image Carousel Section */}
    <section className="container mx-auto px-4 py-24">
      <h2 className="text-center font-serif text-3xl font-bold text-primary md:text-4xl mb-10">A Glimpse of the Workshop</h2>
      <div className="mx-auto max-w-4xl px-12">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <div className="p-1">
                <img src={`${import.meta.env.BASE_URL}venue_exterior.png`} alt="Venue Exterior" className="rounded-2xl object-cover h-[400px] w-full shadow-[var(--shadow-soft)]" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <img src={`${import.meta.env.BASE_URL}venue_interior.png`} alt="Venue Interior" className="rounded-2xl object-cover h-[400px] w-full shadow-[var(--shadow-soft)]" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <img src={hero} alt="Spices" className="rounded-2xl object-cover h-[400px] w-full shadow-[var(--shadow-soft)]" />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>

    {/* Overview */}
    <section className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl font-bold text-primary md:text-4xl">Program Overview</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A 5-day hands-on workshop on Ayurvedic cooking covering Digestion (Agni),
          Constitution (Prakriti), Taste (Rasa), and Timing (Kala). No prior Ayurveda
          knowledge required.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          { icon: ChefHat, title: "Hands-on Practice", desc: "Concept + demonstration in the morning, practical cooking in the afternoon." },
          { icon: Leaf, title: "Rooted in Tradition", desc: "Learn the timeless principles of Ayurveda applied to everyday cooking." },
          { icon: Award, title: "Recognized Certificate", desc: "Earn the title 'Aahaar Vidhi – Prakriti-Aware Chef (Level 1)'." },
        ].map((c) => (
          <Card key={c.title} className="border-border/70 bg-card p-6 transition-shadow hover:shadow-[var(--shadow-soft)]">
            <c.icon className="h-8 w-8 text-accent" />
            <h3 className="mt-4 font-serif text-xl font-semibold text-primary">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
          </Card>
        ))}
      </div>
    </section>

    {/* Day-wise themes */}
    <section className="bg-secondary/40 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-serif text-3xl font-bold text-primary md:text-4xl">Day-Wise Themes</h2>
        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {themes.map((t, i) => (
            <div
              key={t.day}
              className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5 shadow-sm md:flex-row md:items-center"
            >
              <div
                className={`shrink-0 rounded-lg px-4 py-2 text-center font-semibold text-primary-foreground ${
                  i < 3 ? "bg-primary" : "bg-accent"
                }`}
              >
                {t.day}
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-primary">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-center font-serif text-3xl font-bold text-primary md:text-4xl mb-12">What Our Participants Say</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          { name: "Anita Rao", role: "Home Chef", quote: "The workshop completely changed my perspective on spices. I now understand the 'why' behind every ingredient." },
          { name: "Chef Vikram", role: "Culinary Educator", quote: "Aahaar Vidhi bridges the gap between traditional wisdom and modern culinary practices beautifully." },
          { name: "Meera Nair", role: "Wellness Enthusiast", quote: "A truly immersive experience. The venue was serene and the learning was life-changing." },
        ].map((t) => (
          <Card key={t.name} className="p-8 bg-card border-border/50 shadow-sm italic text-muted-foreground">
            <p>"{t.quote}"</p>
            <div className="mt-6 not-italic font-semibold text-primary">
              <p>{t.name}</p>
              <p className="text-xs text-accent">{t.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="container mx-auto px-4 py-20">
      <div className="overflow-hidden rounded-2xl bg-primary p-10 text-center text-primary-foreground shadow-[var(--shadow-elegant)] md:p-16">
        <MapPin className="mx-auto h-8 w-8 text-gold" />
        <h2 className="mt-4 font-serif text-3xl font-bold md:text-4xl">Reserve Your Seat</h2>
        <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
          Workshop venue: <strong>Anahad</strong>, Vikarabad — 50km from Hyderabad.
          Limited to 25 participants.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <RegisterButton />
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
