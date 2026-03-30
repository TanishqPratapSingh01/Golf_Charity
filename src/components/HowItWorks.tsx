import { motion } from "framer-motion";
import { UserPlus, ClipboardList, Trophy, Heart } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Subscribe",
    description: "Choose a monthly or yearly plan. A portion of your subscription automatically goes to your chosen charity.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Enter Scores",
    description: "Submit your last 5 Stableford golf scores. New scores replace the oldest — always stay current.",
  },
  {
    icon: Trophy,
    step: "03",
    title: "Win Prizes",
    description: "Your scores become your draw numbers. Match 3, 4, or all 5 in our monthly draw to win from the prize pool.",
  },
  {
    icon: Heart,
    step: "04",
    title: "Give Back",
    description: "Every subscription funds real charities. Track your impact, explore causes, and increase your contribution anytime.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Simple & Rewarding
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            How It Works
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Four simple steps to play, win, and make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative group"
            >
              <div className="p-8 rounded-2xl bg-card border border-border hover:border-accent/40 transition-all duration-300 shadow-soft hover:shadow-elevated h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <step.icon size={22} className="text-primary-foreground" />
                  </div>
                  <span className="text-3xl font-bold text-accent/30" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t-2 border-dashed border-accent/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
