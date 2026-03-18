import { motion } from "framer-motion";
import celebrationImg from "@/assets/celebration.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const GlassFeatureSection = () => {
  return (
    <section className="py-28 md:py-40 relative overflow-hidden">
      {/* Blurred background */}
      <div className="absolute inset-0">
        <img
          src={celebrationImg}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "blur(50px) brightness(1.15) saturate(0.9)" }}
        />
        <div className="absolute inset-0 bg-vanilla/60" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease }}
          className="max-w-2xl mx-auto text-center glass-panel p-10 md:p-16"
        >
          <span className="label-text mb-6 block">The Atelier Experience</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-cocoa mb-6 leading-tight">
            Design Your{" "}
            <em className="italic text-mocha">Dream Cake</em>
          </h2>
          <p className="text-mocha/70 text-base md:text-lg leading-relaxed mb-10">
            Your vision, our craftsmanship. From sketch to sponge, we transform your sweetest ideas into edible masterpieces — every detail considered, every flavor perfected.
          </p>
          <a href="tel:06381151942" className="btn-primary">
            Start Your Design
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GlassFeatureSection;
