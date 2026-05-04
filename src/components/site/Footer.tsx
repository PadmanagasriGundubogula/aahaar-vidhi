import { Link } from "react-router-dom";
import { Mail, Phone, Globe, Leaf } from "lucide-react";

const Footer = () => (
  <footer className="mt-20 border-t border-border bg-primary text-primary-foreground">
    <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-3">
      <div>
        <div className="flex items-center gap-2 font-serif text-xl font-bold">
          <Leaf className="h-5 w-5 text-gold" />
          Aahaar Vidhi
        </div>
        <p className="mt-3 text-sm text-primary-foreground/75">
          A 5-day hands-on culinary workshop on the principles of Ayurvedic cooking.
        </p>
      </div>

      <div>
        <h4 className="mb-3 font-semibold text-gold">Quick Links</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/80">
          <li><Link to="/workshop" className="hover:text-gold">Workshop</Link></li>
          <li><Link to="/members" className="hover:text-gold">Members</Link></li>
          <li><Link to="/venue" className="hover:text-gold">Venue</Link></li>
          <li><Link to="/register" className="hover:text-gold">Register</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="mb-3 font-semibold text-gold">Contact</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/80">
          <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 95608 39287</li>
          <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@aahaarvidhi.com</li>
          <li className="flex items-center gap-2"><Globe className="h-4 w-4" /> aahaarvidhi.com</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-primary-foreground/15 py-4 text-center text-xs text-primary-foreground/60">
      © {new Date().getFullYear()} Aahaar Vidhi. All rights reserved.
    </div>
  </footer>
);

export default Footer;