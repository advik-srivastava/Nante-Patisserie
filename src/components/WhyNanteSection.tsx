import { motion } from "framer-motion";
import { Sparkles, Palette, MapPin, Heart, Award, Cake } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const reasons = [
  { icon: Palette, title: "Bespoke Artistry", desc: "Every creation is designed from scratch — never templated, always personal." },
  { icon: Cake, title: "Theme Cake Experts", desc: "From whimsical children's themes to elegant tiered wedding cakes." },
  { icon: Sparkles, title: "Premium Ingredients", desc: "Finest chocolate, cream, and seasonal produce in every recipe." },
  { icon: Heart, title: "Made with Love", desc: "Handcrafted dedication and culinary passion in each pastry." },
  { icon: Award, title: "South Delhi's Finest", desc: "Trusted by Lajpat Nagar's most discerning dessert connoisseurs." },
  { icon: MapPin, title: "Heart of Delhi", desc: "Dayanand Colony, Lajpat Nagar — your neighborhood pastry atelier." },
];

const WhyNanteSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-vanilla via-butter/25 to-vanilla" />
      <div className="absolute top-1/3 left-0 w-[350px] h-[350px] bg-caramel/6 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
          className="text-center mb-20 md:mb-28"
        >
          <span className="label-text mb-5 block">Why Choose Us</span>
          <h2 className="font-display text-4xl md:text-6xl font-light text-cocoa">
            The Nante Difference
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease, delay: i * 0.08 }}
              className="card-cinema p-8 md:p-10 text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-butter/60 to-caramel/10 flex items-center justify-center mx-auto mb-6 group-hover:from-caramel/20 group-hover:to-butter/40 transition-all duration-700">
                <r.icon size={22} className="text-mocha group-hover:text-cocoa transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-light text-cocoa mb-3">{r.title}</h3>
              <p className="text-mocha/60 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNanteSection;
