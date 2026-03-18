import { motion, useScroll, useTransform } from "framer-motion";

const FloatingElements = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {/* Caramel sphere */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-[20vh] right-[8vw] w-6 h-6 rounded-full opacity-20"
        animate={{
          x: [0, 15, -10, 0],
          y: [0, -20, 10, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-caramel to-butter" />
      </motion.div>

      {/* Cocoa dot */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[45vh] left-[5vw] w-3 h-3 rounded-full opacity-15"
        animate={{
          x: [0, -10, 5, 0],
          y: [0, 15, -8, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-mocha to-caramel" />
      </motion.div>

      {/* Butter orb */}
      <motion.div
        style={{ y: y3, rotate: rotate2 }}
        className="absolute top-[70vh] right-[15vw] w-10 h-10 rounded-full opacity-10"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-butter to-caramel/50 blur-[2px]" />
      </motion.div>

      {/* Tiny cream particle */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[30vh] left-[50vw] w-2 h-2 rounded-full bg-caramel/20"
        animate={{
          x: [0, 20, -15, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Caramel glaze streak */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[55vh] right-[30vw] w-1 h-16 rounded-full bg-gradient-to-b from-transparent via-caramel/10 to-transparent rotate-[20deg]"
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default FloatingElements;
