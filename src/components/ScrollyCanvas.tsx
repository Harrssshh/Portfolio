"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

const FRAME_COUNT = 120; // 0 to 119

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);

  // We use scrollYProgress of the container to track scrolling
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map the scroll progress (0 to 1) to the frame index (0 to 119)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Pre-create all image elements and start downloading instantly
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${frameNum}_delay-0.066s.webp`;

      img.onload = () => {
        loadedCount++;
        
        // Instantly draw the first frame as soon as it loads to guarantee zero layout shift or wait time
        if (i === 0) {
          setFirstFrameLoaded(true);
        }
      };
      
      loadedImages.push(img);
    }

    setImages(loadedImages);
  }, []);

  const renderFrame = useCallback((index: number, imgArray: HTMLImageElement[] = images) => {
    if (!canvasRef.current || imgArray.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Find the closest loaded frame to avoid drawing blank frames during background loading
    let img = imgArray[index];
    if (!img || !img.complete || img.naturalWidth === 0) {
      let found = false;
      // Search outwards from current index to find nearest complete frame
      for (let offset = 1; offset < FRAME_COUNT; offset++) {
        const leftIndex = index - offset;
        const rightIndex = index + offset;

        if (leftIndex >= 0) {
          const leftImg = imgArray[leftIndex];
          if (leftImg && leftImg.complete && leftImg.naturalWidth > 0) {
            img = leftImg;
            found = true;
            break;
          }
        }
        if (rightIndex < FRAME_COUNT) {
          const rightImg = imgArray[rightIndex];
          if (rightImg && rightImg.complete && rightImg.naturalWidth > 0) {
            img = rightImg;
            found = true;
            break;
          }
        }
      }

      // If no other frame is loaded yet, fall back to first frame if available
      if (!found) {
        const firstImg = imgArray[0];
        if (firstImg && firstImg.complete && firstImg.naturalWidth > 0) {
          img = firstImg;
        } else {
          return; // Absolutely nothing loaded yet
        }
      }
    }

    // Object-fit: cover logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than the image
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      // Canvas is taller than the image
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, [images]);

  useEffect(() => {
    // Update canvas on scroll
    const unsubscribe = frameIndex.on("change", (latest) => {
      renderFrame(Math.round(latest));
    });

    return () => unsubscribe();
  }, [frameIndex, renderFrame]);

  useEffect(() => {
    // Initial draw once first frame loads
    if (firstFrameLoaded) {
      renderFrame(0);
    }
  }, [firstFrameLoaded, renderFrame]);

  useEffect(() => {
    // Handle window resize to adjust canvas resolution
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        renderFrame(Math.round(frameIndex.get()));
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call

    return () => window.removeEventListener("resize", handleResize);
  }, [frameIndex, renderFrame]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0a0f14]">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
        />
        {!firstFrameLoaded && (
          <div className="absolute inset-0 bg-[#0a0f14] flex items-center justify-center z-20">
            {/* Full screen skeleton pulse */}
            <div className="w-full h-full bg-white/5 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}

