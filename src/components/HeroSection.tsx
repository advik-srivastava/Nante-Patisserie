import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import heroCake from "@/assets/hero-cake.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rx = useSpring(useTransform(mouseY, [-400, 400], [8, -8]), { damping: 30, stiffness: 200 });
  const ry = useSpring(useTransform(mouseX, [-400, 400], [-8, 8]), { damping: 30, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const stagger = (i: number) => ({
    initial: { opacity: 0, y: 60, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 1.2, ease, delay: 0.3 + i * 0.15 },
  });

  return (
    <motion.section
      ref={ref}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{ scale: heroScale, opacity: heroOpacity }}
    >
      {/* Cinematic background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-vanilla via-butter/40 to-vanilla" />
        <motion.div
          className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-caramel/8 blur-[150px]"
          animate={{ scale: [1, 1.1, 1], x: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[15%] w-[600px] h-[600px] rounded-full bg-butter/40 blur-[180px]"
          animate={{ scale: [1, 1.15, 1], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-caramel/5 blur-[120px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text column */}
          <motion.div style={{ y: textY }} className="flex flex-col gap-6 lg:gap-8">
            <motion.span {...stagger(0)} className="label-text">
              South Delhi's Premier Pastry Atelier
            </motion.span>

            <motion.h1
              {...stagger(1)}
              className="font-display text-[clamp(2.5rem,7vw,6.5rem)] font-light leading-[0.95] text-cocoa"
            >
              Where Pastry{" "}
              <em className="italic font-light text-mocha">Becomes</em>{" "}
              Art.
            </motion.h1>

            <motion.p
              {...stagger(2)}
              className="text-mocha/80 text-base md:text-lg leading-relaxed max-w-lg"
            >
              Nante Patisserie creates customized theme cakes, pastries, and handcrafted confections that elevate every celebration with elegance, taste, and visual artistry.
            </motion.p>

            <motion.div
              {...stagger(3)}
              className="flex flex-wrap gap-3 mt-2"
            >
              <a href="https://zomato.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
                View Menu
              </a>
              <a href="#custom" className="btn-outline">
                Order Custom Cake
              </a>
              <a href="tel:06381151942" className="btn-ghost">
                Call Now
              </a>
            </motion.div>

            <motion.div
              {...stagger(4)}
              className="flex flex-wrap gap-x-6 gap-y-2 mt-4"
            >
              {["Customized Theme Cakes", "Elegant Confections", "Lajpat Nagar, New Delhi"].map((item) => (
                <span key={item} className="text-[10px] uppercase tracking-[0.15em] text-mocha/40 font-medium">{item}</span>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero image with 3D tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, ease, delay: 0.6 }}
            className="flex justify-center lg:justify-end"
            style={{ y: imageY }}
          >
            <motion.div
              style={{ rotateX: rx, rotateY: ry, perspective: 1200 }}
              className="relative"
            >
              {/* Ambient glow */}
              <div className="absolute -inset-12 rounded-full bg-gradient-to-br from-caramel/15 via-butter/20 to-transparent blur-[80px]" />

              <motion.img
                src={heroCake}
                alt="Luxury chocolate cake with gold leaf by Nante Patisserie"
                className="relative w-[300px] h-[300px] md:w-[460px] md:h-[460px] lg:w-[520px] lg:h-[520px] object-cover rounded-[32px] shadow-float"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease }}
              />

              {/* Floating accent orbs */}
              <motion.div
                animate={{ y: [0, -20, 0], x: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-butter/50 to-caramel/10 backdrop-blur-sm shadow-glow"
              />
              <motion.div
                animate={{ y: [0, 12, 0], x: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-br from-caramel/15 to-butter/20 backdrop-blur-sm"
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute top-1/2 -right-4 w-8 h-8 rounded-full bg-butter/30"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-caramel/30 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-caramel/50"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
