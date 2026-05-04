import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const REGISTER_URL = "https://forms.gle/EaR8pg8igj1fskiTA";

interface Props {
  label?: string;
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline" | "secondary";
  className?: string;
}

const RegisterButton = ({ label = "Register Now", size = "lg", variant = "default", className }: Props) => (
  <Button asChild size={size} variant={variant} className={className}>
    <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
      {label}
      <ExternalLink className="ml-2 h-4 w-4" />
    </a>
  </Button>
);

export default RegisterButton;
export { REGISTER_URL };