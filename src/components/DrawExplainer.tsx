import { motion } from "framer-motion";
import { Zap, Target, RotateCcw } from "lucide-react";

const tiers = [
  {
    match: "5-Number Match",
    share: "40%",
    rollover: true,
    label: "Jackpot",
    color: "bg-gold text-emerald-dark",
  },
  {
    match: "4-Number Match",
    share: "35%",
    rollover: false,
    label: "Major Prize",
    color: "bg-emerald-light text-cream",
  },
  {
    match: "3-Number Match",
    share: "25%",
    rollover: false,
    label: "Prize",
    color: "bg-primary text-primary-foreground",
  },
];

const DrawExplainer = () => {
  return (
    <section id="prizes" className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Monthly Prize Draws</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            Your Scores. Your Winning Numbers.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Every month, we draw 5 numbers. The more your scores match, the bigger your prize.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.match}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8 text-center shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              <div className={`inline-flex px-3 py-1 rounded-full text-xs font-bold mb-4 ${tier.color}`}>
                {tier.label}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {tier.match}
              </h3>
              <motion.p
                className="text-4xl font-bold text-foreground mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.2 + i * 0.1 }}
              >
                {tier.share}
              </motion.p>
              <p className="text-sm text-muted-foreground mb-4">of prize pool</p>
              {tier.rollover && (
                <div className="flex items-center justify-center gap-1.5 text-xs text-accent font-medium">
                  <RotateCcw size={12} className="animate-spin" style={{ animationDuration: "3s" }} />
                  Rolls over if unclaimed
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-accent" />
            Random or algorithm-based draws
          </div>
          <div className="flex items-center gap-2">
            <Target size={16} className="text-accent" />
            Simulation mode before publishing
          </div>
          <div className="flex items-center gap-2">
            <RotateCcw size={16} className="text-accent" />
            Jackpot rolls over monthly
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DrawExplainer;
