import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FRAMES = 40;
const HOLD = 400; // pause on the last frame before opening the site
const FALLBACK = 5000; // safety: never stay on the splash longer than this
const PLAY = 2800; // frames play once in 2.8s (~14fps), then the site opens
const src = (i) => `${import.meta.env.BASE_URL}intro/f${String(i).padStart(2, "0")}.webp`;

/** Full-screen splash: thumbs-up avatar frames on a yellow circle, then reveals the site. */
function Intro({ children }) {
  const [done, setDone] = useState(false);
  const canvas = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const end = setTimeout(() => setDone(true), FALLBACK);
    let raf, hold, cancelled = false;

    // Decode every frame up front so playback never stalls on loading/decoding.
    Promise.all(
      Array.from({ length: FRAMES }, (_, i) =>
        fetch(src(i)).then((r) => r.blob()).then((b) => createImageBitmap(b)),
      ),
    ).then((frames) => {
      if (cancelled || !canvas.current) return;
      const c = canvas.current;
      const ctx = c.getContext("2d");
      c.width = frames[0].width;
      c.height = frames[0].height;
      const start = performance.now();
      let last = -1;
      const tick = (now) => {
        const i = Math.min(FRAMES - 1, Math.floor(((now - start) / PLAY) * FRAMES));
        if (i !== last) { ctx.clearRect(0, 0, c.width, c.height); ctx.drawImage(frames[i], 0, 0); last = i; }
        if (i < FRAMES - 1) raf = requestAnimationFrame(tick);
        else hold = setTimeout(() => setDone(true), HOLD);
      };
      raf = requestAnimationFrame(tick);
    }).catch(() => {});

    return () => { cancelled = true; cancelAnimationFrame(raf); clearTimeout(end); clearTimeout(hold); document.body.style.overflow = ""; };
  }, []);

  useEffect(() => { if (done) document.body.style.overflow = ""; }, [done]);

  return (
    <>
      {children}
      <AnimatePresence>
        {!done && (
          <motion.div
            key="intro"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-peach px-6"
          >
            <div className="relative flex h-[min(60vw,260px)] w-[min(60vw,260px)] shrink-0 items-center justify-center overflow-hidden rounded-full bg-amber">
              <canvas ref={canvas} className="h-[62%] w-auto select-none" />
            </div>
            <p className="mt-8 text-center font-display text-xl font-semibold tracking-[-0.02em] text-ink md:text-2xl">
              Simplicity conveys clarity
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Intro;
