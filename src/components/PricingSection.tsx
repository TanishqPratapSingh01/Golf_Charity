import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Monthly",
    price: "£9.99",
    period: "/month",
    description: "Full access, cancel anytime.",
    featured: false,
    features: [
      "Enter up to 5 Stableford scores",
      "Monthly prize draw entry",
      "Choose your charity",
      "Personal dashboard",
      "Score history & tracking",
    ],
  },
  {
    name: "Yearly",
    price: "£89.99",
    period: "/year",
    description: "Save 25% — best value.",
    featured: true,
    features: [
      "Everything in Monthly",
      "Priority draw entry",
      "Increased charity contribution",
      "Annual impact report",
      "Early access to new features",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            Simple, Transparent Plans
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Every pound funds prizes, supports charities, and keeps you in the game.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-2xl p-8 border transition-shadow ${
                plan.featured
                  ? "bg-primary text-primary-foreground border-primary shadow-elevated"
                  : "bg-card border-border shadow-soft hover:shadow-elevated"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-gold text-emerald-dark text-xs font-bold px-3 py-1 rounded-full">
                  <Star size={12} className="fill-current" />
                  Best Value
                </div>
              )}

              <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-4 ${plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check size={16} className={plan.featured ? "text-gold" : "text-accent"} />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-5 ${
                  plan.featured
                    ? "bg-gold-gradient text-emerald-dark font-semibold shadow-gold hover:opacity-90"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
