"use client";

import { useEffect } from 'react';

/**
 * useMouseGlow Hook
 * 
 * Manages the interactive background glow effect tracking the mouse position.
 * Uses requestAnimationFrame for smooth performance.
 */
export function useMouseGlow() {
  useEffect(() => {
    const root = document.documentElement;
    let rafId = 0;
    let currentX = 50;
    let currentY = 12;
    let targetX = 50;
    let targetY = 12;

    const tick = () => {
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      
      if (Math.abs(dx) > 0.01 || Math.abs(dy) > 0.01) {
        currentX += dx * 0.085;
        currentY += dy * 0.085;
        
        const nextX = currentX.toFixed(2);
        const nextY = currentY.toFixed(2);
        
        root.style.setProperty('--mx', `${nextX}%`);
        root.style.setProperty('--my', `${nextY}%`);
      }
      
      rafId = globalThis.requestAnimationFrame(tick);
    };

    const onPointerMove = event => {
      targetX = (event.clientX / globalThis.innerWidth) * 100;
      targetY = (event.clientY / globalThis.innerHeight) * 100;
    };

    rafId = globalThis.requestAnimationFrame(tick);
    globalThis.addEventListener('pointermove', onPointerMove, { passive: true });

    return () => {
      globalThis.cancelAnimationFrame(rafId);
      globalThis.removeEventListener('pointermove', onPointerMove);
      root.style.removeProperty('--mx');
      root.style.removeProperty('--my');
    };
  }, []);
}
