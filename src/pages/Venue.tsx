import Layout from "@/components/site/Layout";
import RegisterButton from "@/components/site/RegisterButton";
import { Card } from "@/components/ui/card";
import { MapPin, Trees, Sparkles, Car } from "lucide-react";

const Venue = () => (
  <Layout>
    <section className="bg-gradient-to-b from-secondary/50 to-background pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center gap-2 font-medium text-accent">
          <MapPin className="h-4 w-4" /> Workshop Venue
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold text-primary md:text-5xl">Anahad</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Vikarabad — 50 km from Hyderabad. A serene retreat designed for
          immersive learning, surrounded by nature.
        </p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-8">
      <div className="grid gap-4 md:grid-cols-2">
        <img src={`${import.meta.env.BASE_URL}venue_exterior.png`} alt="Venue Exterior" className="w-full h-80 object-cover rounded-xl shadow-md" />
        <img src={`${import.meta.env.BASE_URL}venue_interior.png`} alt="Venue Interior" className="w-full h-80 object-cover rounded-xl shadow-md" />
      </div>
    </section>

    <section className="container mx-auto px-4 py-16">
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { icon: Trees, title: "Natural Surroundings", desc: "A peaceful, green setting that supports focused learning and reflection." },
          { icon: Sparkles, title: "Purpose-built Space", desc: "Demonstration and hands-on cooking facilities for a small batch." },
          { icon: Car, title: "Easy to Reach", desc: "About 50 km from Hyderabad, accessible by car within ~1.5 hours." },
        ].map((f) => (
          <Card key={f.title} className="p-6">
            <f.icon className="h-7 w-7 text-accent" />
            <h3 className="mt-3 font-serif text-lg font-semibold text-primary">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
          </Card>
        ))}
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)]">
        <iframe
          title="Anahad Vikarabad Map"
          src="https://www.google.com/maps?q=Vikarabad,+Telangana&output=embed"
          width="100%"
          height="400"
          loading="lazy"
          className="block"
        />
      </div>

      <div className="mt-10 text-center">
        <RegisterButton />
      </div>
    </section>
  </Layout>
);

export default Venue;