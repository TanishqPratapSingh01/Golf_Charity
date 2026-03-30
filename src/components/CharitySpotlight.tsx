import { motion } from "framer-motion";
import { Heart, Search, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import charityImg from "@/assets/charity-spotlight.jpg";

const charities = [
  { name: "Youth Golf Foundation", raised: "₹22,00,000", supporters: 342 },
  { name: "Green Fairways Trust", raised: "₹15,36,000", supporters: 218 },
  { name: "Community Sports Aid", raised: "₹28,92,000", supporters: 501 },
];

const CharitySpotlight = () => {
  return (
    <section id="charities" className="py-16 sm:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-elevated"
            >
              <img src={charityImg} alt="Charity golf event" className="w-full h-64 sm:h-80 lg:h-[420px] object-cover" loading="lazy" width={1280} height={720} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-4 bg-card border border-border rounded-xl p-3 sm:p-4 shadow-elevated"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <Heart size={18} className="text-accent fill-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">₹1.4Cr+ Raised</p>
                  <p className="text-xs text-muted-foreground">Across all charities</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Making a Difference
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Choose Your Cause
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              At signup, select the charity closest to your heart. A minimum of 10% of your subscription goes directly to them — 
              and you can increase it anytime. Plus, make independent donations whenever you want.
            </p>

            <div className="space-y-3 mb-8">
              {charities.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-secondary border border-border cursor-pointer group"
                >
                  <div>
                    <p className="font-semibold text-foreground text-sm flex items-center gap-2">
                      {c.name}
                      <ExternalLink size={12} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </p>
                    <p className="text-xs text-muted-foreground">{c.supporters} supporters</p>
                  </div>
                  <span className="text-sm font-bold text-accent">{c.raised}</span>
                </motion.div>
              ))}
            </div>

            <Button className="bg-hero text-primary-foreground hover:opacity-90 hover:scale-105 transition-transform">
              <Search size={16} className="mr-2" />
              Explore All Charities
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CharitySpotlight;
