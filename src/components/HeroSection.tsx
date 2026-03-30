import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Trophy, Heart, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Trophy, value: "₹60L+", label: "Prizes Awarded" },
  { icon: Heart, value: "₹1.4Cr+", label: "Raised for Charity" },
  { icon: TrendingUp, value: "5,000+", label: "Active Members" },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={heroBg} alt="" className="w-full h-full object-cover scale-110" />
        <div className="absolute inset-0 bg-emerald-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-dark/40 via-transparent to-emerald-dark/80" />
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-gold/30"
          style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [-20, 20, -20], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 text-gold-light text-sm font-medium mb-6 border border-gold/30">
            <Sparkles size={14} className="animate-pulse" />
            Play. Win. Give Back.
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-5xl md:text-7xl font-bold text-cream leading-tight max-w-4xl mx-auto mb-6"
        >
          Your Golf Scores.{" "}
          <span className="text-gradient-gold">Real Prizes.</span>{" "}
          Real Impact.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-cream/70 max-w-2xl mx-auto mb-10 px-4"
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
            onClick={() => navigate("/auth")}
            className="bg-gold-gradient text-emerald-dark font-semibold px-8 py-6 text-base shadow-gold hover:scale-105 transition-transform"
          >
            Start Your Subscription
            <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-cream/30 text-cream hover:bg-cream/10 px-8 py-6 text-base hover:scale-105 transition-transform"
            onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
          >
            See How It Works
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.15 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-cream/5 backdrop-blur-sm border border-cream/10 cursor-default"
            >
              <stat.icon size={20} className="text-gold" />
              <span className="text-2xl font-bold text-cream">{stat.value}</span>
              <span className="text-xs text-cream/50">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
