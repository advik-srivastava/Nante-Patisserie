import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const FinalCTASection = () => {
  return (
    <section id="contact" className="py-28 md:py-40 relative overflow-hidden">
      {/* Dark luxury background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cocoa via-[hsl(10,20%,16%)] to-cocoa" />
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-caramel/8 blur-[150px]"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-mocha/10 blur-[120px]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease }}
          className="max-w-3xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[10px] uppercase tracking-[0.25em] text-caramel/50 font-medium block mb-8"
          >
            Your Next Celebration
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease, delay: 0.3 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-vanilla/95 leading-[1.05] mb-8"
          >
            Your Celebration Deserves{" "}
            <em className="italic text-butter/80">Extraordinary</em>{" "}
            Desserts
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-vanilla/40 text-base md:text-lg leading-relaxed mb-14 max-w-xl mx-auto"
          >
            We don't just bake; we compose. Every ingredient is selected for its provenance, every curve for its grace.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://zomato.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[12px] bg-vanilla text-cocoa text-xs font-medium uppercase tracking-[0.15em] hover:bg-butter transition-all duration-500 hover:-translate-y-0.5 shadow-cinema"
            >
              View Menu
            </a>
            <a
              href="tel:06381151942"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[12px] border border-caramel/30 text-vanilla/80 text-xs font-medium uppercase tracking-[0.15em] hover:bg-caramel/10 transition-all duration-500 hover:-translate-y-0.5"
            >
              Order Custom Cake
            </a>
            <a
              href="tel:06381151942"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[12px] border border-vanilla/15 text-vanilla/50 text-xs font-medium uppercase tracking-[0.15em] hover:text-vanilla/80 hover:border-vanilla/30 transition-all duration-500 hover:-translate-y-0.5"
            >
              Call Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
