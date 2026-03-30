import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center">
                <span className="text-emerald-dark font-bold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>G</span>
              </div>
              <span className="font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>GolfGive</span>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Play. Win. Give Back. A subscription platform combining golf, prizes, and charitable giving.
            </p>
          </div>

          {[
            { title: "Platform", links: ["How It Works", "Prize Draws", "Charities", "Pricing"] },
            { title: "Account", links: ["Log In", "Sign Up", "Dashboard", "My Scores"] },
            { title: "Support", links: ["FAQ", "Contact Us", "Terms of Service", "Privacy Policy"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © 2026 GolfGive. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40 flex items-center gap-1">
            Built with <Heart size={10} className="text-gold fill-gold" /> for charity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
