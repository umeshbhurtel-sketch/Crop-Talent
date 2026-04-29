import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">L</span>
              </div>
              <span className="font-bold text-lg">CorpTalents</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Global talent solutions connecting businesses with top-tier IT professionals worldwide.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/hiring-strategy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Hiring Strategy
                </Link>
              </li>
              <li>
                <Link to="/hiring-plans" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Hiring Plans
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Hiring Plans */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Hiring Plans</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/hiring-plans#eor" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Employer of Record
                </Link>
              </li>
              <li>
                <Link to="/hiring-plans#taas" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Talent-as-a-Service
                </Link>
              </li>
              <li>
                <Link to="/hiring-plans#global-sourcing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Global Talent Sourcing
                </Link>
              </li>
              <li>
                <Link to="/hiring-plans#talent-mgmt" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Talent Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:info@CorpTalents.solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@CorpTalents.solutions
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Global Headquarters<br />New York, USA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom CTAs */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CorpTalents. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" size="sm" asChild>
                <Link to="/hire-talent">Hire Talent</Link>
              </Button>
              <Button variant="hero" size="sm" asChild>
                <Link to="/work-with-us">Work With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
