import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      lerp: 0.1, // smoothing factor (0.1 is standard for premium smooth scroll)
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync AOS with Lenis if needed
    lenis.on("scroll", () => {
      // You can trigger AOS.refresh() here if scrolling feels desynced
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
