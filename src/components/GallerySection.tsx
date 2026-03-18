import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import heroCake from "@/assets/hero-cake.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import customCake from "@/assets/custom-cake.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const galleryItems = [
  { img: gallery1, title: "The Grand Ivory", desc: "5-Tier Wedding Fondant", tall: true },
  { img: gallery2, title: "Midnight Truffle", desc: "Dark Chocolate Mousse", tall: false },
  { img: gallery3, title: "Pastel Dreams", desc: "French Macaron Tower", tall: true },
  { img: heroCake, title: "The Nante Gold", desc: "Signature Ganache Cake", tall: false },
  { img: gallery4, title: "Enchanted Garden", desc: "Children's Theme Cake", tall: false },
  { img: customCake, title: "Rose Baroque", desc: "3-Tier Celebration Cake", tall: false },
];

const GalleryCard = ({ item, i }: { item: typeof galleryItems[0]; i: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-150, 150], [10, -10]), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-10, 10]), { damping: 20, stiffness: 200 });
  const [hovered, setHovered] = useState(false);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.9, ease, delay: i * 0.08 }}
      className={`gallery-item relative overflow-hidden rounded-[20px] group ${item.tall ? 'row-span-2' : ''}`}
      onMouseMove={handleMouse}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); x.set(0); y.set(0); }}
      style={{ perspective: 800, rotateX, rotateY }}
    >
      <motion.img
        src={item.img}
        alt={`${item.title} - ${item.desc} by Nante Patisserie`}
        className="w-full h-full object-cover"
        animate={{ scale: hovered ? 1.08 : 1 }}
        transition={{ duration: 0.8, ease }}
        loading="lazy"
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-cocoa/80 via-cocoa/20 to-transparent flex items-end p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h3 className="font-display text-xl text-vanilla font-light">{item.title}</h3>
          <p className="text-vanilla/60 text-[10px] uppercase tracking-[0.2em] mt-1">{item.desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-vanilla via-butter/15 to-vanilla" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
          className="text-center mb-20 md:mb-28"
        >
          <span className="label-text mb-5 block">Portfolio</span>
          <h2 className="font-display text-4xl md:text-6xl font-light text-cocoa">
            A Gallery of Indulgence
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[280px] gap-4 md:gap-5">
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.title} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
