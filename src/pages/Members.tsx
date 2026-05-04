import Layout from "@/components/site/Layout";
import { Card } from "@/components/ui/card";

const members = [
  {
    name: "Dr. Sandeep Shah",
    role: "Workshop Lead",
    bio: "Guiding participants with conceptual clarity and decades of practical insight into Ayurvedic food principles.",
    image: "sandeep.jpeg",
  },
  {
    name: "Dr. Nidhi Gupta",
    role: "Workshop Lead",
    bio: "Bridges traditional Ayurveda with everyday culinary practice, helping students apply Prakriti-aware cooking with confidence.",
    image: "nidhi.jpeg",
  },
];

const Members = () => (
  <Layout>
    <section className="bg-gradient-to-b from-secondary/50 to-background py-16">
      <div className="container mx-auto px-4 text-center">
        <p className="font-medium text-accent">Program Led By</p>
        <h1 className="mt-2 font-serif text-4xl font-bold text-primary md:text-5xl">Our Members</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Guiding you with conceptual clarity and practical insights — rooted in
          tradition, refined for modern kitchens.
        </p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16">
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        {members.map((f) => (
          <Card key={f.name} className="p-8 text-center">
            <div className="mx-auto overflow-hidden h-32 w-32 rounded-full shadow-[var(--shadow-soft)]">
              <img src={`${import.meta.env.BASE_URL}${f.image}`} alt={f.name} className="w-full h-full object-cover" />
            </div>
            <h2 className="mt-5 font-serif text-2xl font-semibold text-primary">{f.name}</h2>
            <p className="text-sm font-medium text-accent">{f.role}</p>
            <p className="mt-3 text-sm text-muted-foreground">{f.bio}</p>
          </Card>
        ))}
      </div>
    </section>
  </Layout>
);

export default Members;