"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion } from "framer-motion";

const TOTAL_FRAMES = 120;

const pad = (num: number, size: number) => {
  let s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
};

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);
  const [currentFrame, setCurrentFrame] = useState(0);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    setCurrentFrame(Math.floor(latest));
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      // Adjust path to match the directory structure
      img.src = `/sequence/frame_${pad(i, 3)}_delay-0.067s.png`;
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

  // Draw image on canvas
  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[currentFrame];
    if (!img) return;

    // Handle canvas sizing and High DPI displays
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

    // Object-fit cover logic
    const cw = canvas.width / dpr;
    const ch = canvas.height / dpr;
    const iw = img.width;
    const ih = img.height;
    const canvasRatio = cw / ch;
    const imgRatio = iw / ih;

    let renderW, renderH, x, y;

    if (imgRatio > canvasRatio) {
      // Image is wider than canvas
      renderH = ch;
      renderW = iw * (ch / ih);
      x = (cw - renderW) / 2;
      y = 0;
    } else {
      // Image is taller than canvas
      renderW = cw;
      renderH = ih * (cw / iw);
      x = 0;
      y = (ch - renderH) / 2;
    }

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, x, y, renderW, renderH);

  }, [currentFrame, imagesLoaded, images]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (!imagesLoaded) return;
      // Trigger a re-render to update canvas size
      setCurrentFrame((prev) => prev); 
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-background z-0">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-background text-foreground/50">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              Loading experience...
            </motion.div>
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
          style={{ display: imagesLoaded ? "block" : "none" }}
        />
        
        {/* We place the overlay inside the sticky container to utilize scrollYProgress from the parent container. */}
      </div>
    </div>
  );
}
