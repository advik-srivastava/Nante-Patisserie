import { motion } from "framer-motion";
import pastriesImg from "@/assets/pastries-collection.jpg";
import customCakeImg from "@/assets/custom-cake.jpg";
import confectionsImg from "@/assets/confections.jpg";
import celebrationImg from "@/assets/celebration.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const offerings = [
  { title: "Customized Theme Cakes", desc: "Bespoke cakes sculpted for your vision — birthdays, weddings, and milestones.", img: customCakeImg, accent: "from-caramel/20 to-butter/10" },
  { title: "Artisanal Pastries", desc: "French-inspired croissants, éclairs, and tarts crafted with precision.", img: pastriesImg, accent: "from-butter/30 to-caramel/10" },
  { title: "Handcrafted Confections", desc: "Bonbons, truffles, and pralines tempered with premium chocolate.", img: confectionsImg, accent: "from-mocha/10 to-caramel/10" },
  { title: "Celebration Desserts", desc: "Curated dessert tables for events that deserve to be extraordinary.", img: celebrationImg, accent: "from-caramel/15 to-butter/20" },
];

const SignatureOfferings = () => {
  return (
    <section id="offerings" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-vanilla via-butter/20 to-vanilla" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-caramel/5 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
          className="text-center mb-20 md:mb-28"
        >
          <span className="label-text mb-5 block">Our Craft</span>
          <h2 className="font-display text-4xl md:text-6xl font-light text-cocoa leading-tight">
            Signature Offerings
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {offerings.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, ease, delay: i * 0.12 }}
              className="card-cinema group overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-t-[24px]">
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 md:h-72 object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.8, ease }}
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl font-light text-cocoa mb-3 group-hover:text-mocha transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-mocha/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureOfferings;
