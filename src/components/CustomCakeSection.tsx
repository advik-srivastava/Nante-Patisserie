import { motion } from "framer-motion";
import customCakeImg from "@/assets/custom-cake.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const occasions = [
  "Birthdays", "Weddings", "Anniversaries", "Baby Showers",
  "Engagements", "Corporate", "Festivals", "Graduations"
];

const CustomCakeSection = () => {
  return (
    <section id="custom" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-vanilla via-butter/30 to-vanilla" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-caramel/6 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images composition */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease }}
            className="relative"
          >
            <div className="relative">
              <motion.img
                src={customCakeImg}
                alt="Custom theme cake by Nante Patisserie"
                className="w-full max-w-md rounded-[28px] shadow-float object-cover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease }}
              />

              <motion.img
                src={gallery4}
                alt="Birthday cake"
                className="absolute -bottom-10 -right-6 w-44 h-44 md:w-52 md:h-52 rounded-[20px] shadow-cinema object-cover border-4 border-vanilla"
                initial={{ opacity: 0, scale: 0.7, rotate: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease, delay: 0.3 }}
              />

              <motion.img
                src={gallery1}
                alt="Wedding cake"
                className="absolute -top-8 -right-4 w-28 h-36 rounded-[16px] shadow-cinema object-cover border-4 border-vanilla hidden lg:block"
                initial={{ opacity: 0, y: 30, rotate: -3 }}
                whileInView={{ opacity: 1, y: 0, rotate: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease, delay: 0.5 }}
              />

              {/* Glow behind main image */}
              <div className="absolute -inset-8 rounded-full bg-caramel/5 blur-[60px] -z-10" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease }}
          >
            <span className="label-text mb-5 block">The Custom Experience</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-cocoa mb-6 leading-[1.1]">
              Your Vision,{" "}
              <em className="italic text-mocha">Our Craft</em>
            </h2>
            <p className="text-mocha/70 text-base md:text-lg leading-relaxed mb-10">
              From sketch to sponge, every customized theme cake is a collaboration between your imagination and our artisans. We create cakes that are centerpieces, conversation starters, and memories in the making.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {occasions.map((o, i) => (
                <motion.span
                  key={o}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: 0.2 + i * 0.05 }}
                  className="px-4 py-2 rounded-full bg-butter/40 text-mocha text-[11px] font-medium uppercase tracking-widest border border-caramel/8 hover:bg-caramel/10 hover:border-caramel/20 transition-all duration-500"
                >
                  {o}
                </motion.span>
              ))}
            </div>

            <a href="tel:06381151942" className="btn-primary">
              Start Your Design
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomCakeSection;
