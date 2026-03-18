import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Offerings", href: "#offerings" },
    { label: "Custom Cakes", href: "#custom" },
    { label: "Gallery", href: "#gallery" },
    { label: "Visit", href: "#location" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "py-3 bg-vanilla/80 backdrop-blur-2xl border-b border-caramel/10 shadow-cinema"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-display text-3xl font-light text-cocoa tracking-tight">
          Nanté
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="label-text hover:text-cocoa transition-all duration-300 relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-caramel group-hover:w-full transition-all duration-500" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-5">
          <a
            href="tel:06381151942"
            className="flex items-center gap-2 text-mocha text-xs tracking-wide hover:text-cocoa transition-colors"
          >
            <Phone size={12} />
            <span className="font-body">063811 51942</span>
          </a>
          <a href="#contact" className="btn-primary !py-2.5 !px-6 !text-[10px]">
            Order Now
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-cocoa"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-vanilla/95 backdrop-blur-2xl border-t border-caramel/10"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="font-display text-2xl font-light text-cocoa"
                >
                  {l.label}
                </motion.a>
              ))}
              <a href="tel:06381151942" className="btn-primary text-center mt-4">
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
