import { Link } from "react-router-dom";
import { Mail, Phone, Globe, Leaf } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-primary py-6 text-primary-foreground">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
      <div className="flex items-center gap-2 font-serif text-lg font-bold">
        <Leaf className="h-4 w-4 text-gold" />
        Aahaar Vidhi
      </div>
      
      <div className="flex gap-6 text-primary-foreground/75">
        <Link to="/workshop" className="hover:text-gold transition-colors">Workshop</Link>
        <Link to="/members" className="hover:text-gold transition-colors">Members</Link>
        <Link to="/venue" className="hover:text-gold transition-colors">Venue</Link>
        <Link to="/register" className="hover:text-gold transition-colors">Register</Link>
      </div>

      <div className="text-primary-foreground/60 text-xs">
        © {new Date().getFullYear()} Aahaar Vidhi. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;