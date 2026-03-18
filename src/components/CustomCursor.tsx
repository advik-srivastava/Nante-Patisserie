import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isButton, setIsButton] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  const trailConfig = { damping: 30, stiffness: 150, mass: 0.8 };
  const trailX = useSpring(cursorX, trailConfig);
  const trailY = useSpring(cursorY, trailConfig);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [role="button"], input, textarea, .cursor-hover');
      const isGallery = target.closest('.gallery-item, .card-cinema');
      if (interactive) { setIsButton(true); setIsHovering(true); }
      else if (isGallery) { setIsHovering(true); setIsButton(false); }
      else { setIsHovering(false); setIsButton(false); }
    };

    const handleDown = () => setIsClicking(true);
    const handleUp = () => setIsClicking(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [cursorX, cursorY]);

  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window);
  }, []);
  if (isTouchDevice) return null;

  return (
    <>
      {/* Trail / glow ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: trailX, y: trailY }}
      >
        <motion.div
          className="rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: isButton ? 56 : isHovering ? 48 : 32,
            height: isButton ? 56 : isHovering ? 48 : 32,
            borderWidth: isHovering || isButton ? 1.5 : 1,
            borderColor: "hsla(30, 48%, 65%, 0.3)",
            backgroundColor: "transparent",
            scale: isClicking ? 0.85 : 1,
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ borderStyle: "solid" }}
        />
      </motion.div>

      {/* Core dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x, y }}
      >
        <motion.div
          className="rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: isButton ? 6 : isClicking ? 4 : 8,
            height: isButton ? 6 : isClicking ? 4 : 8,
            backgroundColor: isButton ? "hsl(30, 48%, 65%)" : "hsl(7, 28%, 19%)",
            scale: isClicking ? 0.6 : 1,
          }}
          transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
