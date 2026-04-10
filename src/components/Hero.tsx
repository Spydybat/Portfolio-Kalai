"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion } from "framer-motion";

const TOTAL_FRAMES = 120; // Depending on your sequence count
const pad = (num: number, size: number) => {
  let s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Canvas Frame Scrubbing
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);
  const [currentFrame, setCurrentFrame] = useState(0);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    setCurrentFrame(Math.floor(latest));
  });

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/newframes/frame1 (${i + 1}).png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImagesLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = images[currentFrame];
    if (!img) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement?.getBoundingClientRect();
    if (rect) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    } else {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    }

    const cw = canvas.width / dpr;
    const ch = canvas.height / dpr;
    const iw = img.width;
    const ih = img.height;
    const canvasRatio = cw / ch;
    const imgRatio = iw / ih;

    let renderW, renderH, x, y;

    if (imgRatio > canvasRatio) {
      renderH = ch;
      renderW = iw * (ch / ih);
      x = (cw - renderW) / 2;
      y = 0;
    } else {
      renderW = cw;
      renderH = ih * (cw / iw);
      x = 0;
      y = (ch - renderH) / 2;
    }

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, x, y, renderW, renderH);
  }, [currentFrame, imagesLoaded, images]);

  useEffect(() => {
    const handleResize = () => setCurrentFrame((prev) => prev);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Visual effects mapped to scroll
  const canvasScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const canvasBlur = useTransform(scrollYProgress, [0, 1], ["0px", "0px"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.2, 0.4, 0.4, 0.5]);

  // Text Animations (4 Stages)
  // Stage 1: 0% - 20%
  const o1 = useTransform(scrollYProgress, [0, 0.1, 0.15, 0.2], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [50, -50]);
  
  // Stage 2: 25% - 45%
  const o2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.45], [50, -50]);

  // Stage 3: 50% - 70%
  const o3 = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.7], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.7], [50, -50]);

  // Stage 4: 75% - 100%
  const o4 = useTransform(scrollYProgress, [0.7, 0.85, 1], [0, 1, 1]);
  const y4 = useTransform(scrollYProgress, [0.7, 1], [50, 0]);

  return (
    <section id="home" ref={containerRef} className="relative h-[500vh] w-full bg-black z-0">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Loader */}
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black text-white z-50">
            <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              Loading Cinematic Experience...
            </motion.div>
          </div>
        )}

        {/* Canvas Render with Zoom/Blur */}
        <motion.div style={{ scale: canvasScale, filter: canvasBlur }} className="w-full h-full origin-center">
          <canvas ref={canvasRef} className="w-full h-full" style={{ display: imagesLoaded ? "block" : "none" }} />
        </motion.div>

        {/* Dark Overlay for Readability */}
        <motion.div 
          style={{ opacity: overlayOpacity }} 
          className="absolute inset-0 bg-black pointer-events-none"
        />

        {/* Text Container */}
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center items-center text-center px-4">
          
          <motion.div style={{ opacity: o1, y: y1 }} className="absolute w-full px-4">
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase drop-shadow-2xl">
              Hi, I'm <span className="text-blue-500">Kalaiyarasan</span>
            </h1>
          </motion.div>

          <motion.div style={{ opacity: o2, y: y2 }} className="absolute w-full px-4">
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight drop-shadow-2xl">
              Frontend Developer
            </h2>
          </motion.div>

          <motion.div style={{ opacity: o3, y: y3 }} className="absolute w-full px-4">
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight drop-shadow-2xl">
              Creative Programmer
            </h2>
          </motion.div>

          <motion.div style={{ opacity: o4, y: y4 }} className="absolute w-full px-4">
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight drop-shadow-2xl">
              I build <br/><span className="italic font-light text-white/80">modern web experiences.</span>
            </h2>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
