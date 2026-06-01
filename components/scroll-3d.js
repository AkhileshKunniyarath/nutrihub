"use client";

import { useEffect } from "react";

export function Scroll3D() {
  useEffect(() => {
    const handleScroll3D = () => {
      const elements = document.querySelectorAll(".scroll-3d");
      const viewportCenter = window.innerHeight / 2;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        
        // Calculate distance from the vertical center of the screen
        const distanceFromCenter = elementCenter - viewportCenter;
        
        // Maximum distance before the element is completely off-screen
        const maxDistance = window.innerHeight / 2 + rect.height / 2;
        
        // Normalize ratio between -1 and 1
        let ratio = distanceFromCenter / maxDistance;
        ratio = Math.max(-1, Math.min(1, ratio));

        // 3D parameters
        const maxRotationX = 18; // Degrees of rotation at screen edges
        const maxTranslateZ = 40; // Pixels to pop forward in Z-space at center
        const maxScaleOffset = 0.08; // Scaling factor in center

        const rotateX = ratio * -maxRotationX; // Tilts forward/backward
        const translateZ = (1 - Math.abs(ratio)) * maxTranslateZ;
        const scale = 0.94 + (1 - Math.abs(ratio)) * maxScaleOffset;

        // Apply 3D perspective transformations
        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) translateZ(${translateZ}px) scale(${scale})`;
      });
    };

    // Run on initial load and on scroll
    window.addEventListener("scroll", handleScroll3D, { passive: true });
    handleScroll3D(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll3D);
    };
  }, []);

  return null;
}
