import { motion } from "framer-motion";
import { TrendingUp, Calendar, Hash } from "lucide-react";

const sampleScores = [
  { score: 38, date: "28 Mar 2026", trend: "up" },
  { score: 34, date: "21 Mar 2026", trend: "down" },
  { score: 41, date: "14 Mar 2026", trend: "up" },
  { score: 36, date: "07 Mar 2026", trend: "up" },
  { score: 29, date: "28 Feb 2026", trend: "down" },
];

const ScorePreview = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Score Tracking</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Your Latest 5 Scores
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Enter your Stableford scores (1–45) with their dates. We always keep your 5 most recent — 
              new entries automatically replace the oldest. Simple, fast, fair.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Hash size={14} className="text-accent" />
                Stableford format (1–45)
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-accent" />
                Date-stamped entries
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp size={14} className="text-accent" />
                Rolling 5-score window
              </div>
            </div>
          </motion.div>

          {/* Interactive preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-4 sm:p-6 shadow-elevated"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                My Scores
              </h3>
              <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                Demo View
              </span>
            </div>

            <div className="space-y-3">
              {sampleScores.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  whileHover={{ x: 4, backgroundColor: "hsl(var(--secondary))" }}
                  className="flex items-center justify-between p-3 sm:p-4 rounded-xl bg-secondary/70 border border-border/50 cursor-default transition-colors"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary flex items-center justify-center"
                    >
                      <span className="text-base sm:text-lg font-bold text-primary-foreground">{s.score}</span>
                    </motion.div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Round Score</p>
                      <p className="text-xs text-muted-foreground">{s.date}</p>
                    </div>
                  </div>
                  <TrendingUp
                    size={18}
                    className={s.trend === "up" ? "text-emerald-light" : "text-destructive"}
                    style={s.trend === "down" ? { transform: "rotate(180deg)" } : {}}
                  />
                </motion.div>
              ))}
            </div>

            {/* Draw numbers preview */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground mb-3">Your draw numbers this month:</p>
              <div className="flex gap-2">
                {sampleScores.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gold/20 border-2 border-accent flex items-center justify-center cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-accent">{s.score}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScorePreview;
