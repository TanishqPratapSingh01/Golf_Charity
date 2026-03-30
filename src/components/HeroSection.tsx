import { motion } from "framer-motion";
import { ArrowRight, Trophy, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Trophy, value: "£50K+", label: "Prizes Awarded" },
  { icon: Heart, value: "£120K+", label: "Raised for Charity" },
  { icon: TrendingUp, value: "5,000+", label: "Active Members" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-emerald-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-dark/40 via-transparent to-emerald-dark/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 text-gold-light text-sm font-medium mb-6 border border-gold/30">
            <Heart size={14} className="fill-current" />
            Play. Win. Give Back.
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-cream leading-tight max-w-4xl mx-auto mb-6"
        >
          Your Golf Scores.{" "}
          <span className="text-gradient-gold">Real Prizes.</span>{" "}
          Real Impact.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto mb-10"
        >
          Subscribe, enter your Stableford scores, and compete in monthly prize draws — 
          while a portion of every subscription goes directly to the charity you choose.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            size="lg"
            className="bg-gold-gradient text-emerald-dark font-semibold px-8 py-6 text-base shadow-gold hover:opacity-90 transition-opacity"
          >
            Start Your Subscription
            <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-cream/30 text-cream hover:bg-cream/10 px-8 py-6 text-base"
          >
            See How It Works
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.15 }}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-cream/5 backdrop-blur-sm border border-cream/10"
            >
              <stat.icon size={20} className="text-gold" />
              <span className="text-2xl font-bold text-cream">{stat.value}</span>
              <span className="text-xs text-cream/50">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
