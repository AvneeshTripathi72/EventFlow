"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Nav from './Nav';
import Footer from './Footer';
import BottomNav from './BottomNav';

const HIDE_CHROME_ON = ['/checkout', '/confirmed', '/login', '/signup', '/onboarding', '/chat'];

export function AppShellWrapper({ children }) {
  const pathname = usePathname();
  const hideChrome = HIDE_CHROME_ON.some(p => pathname.startsWith(p));

  useEffect(() => {
    const root = document.documentElement;
    let rafId = 0;
    let currentX = 50;
    let currentY = 12;
    let targetX = 50;
    let targetY = 12;

    const tick = () => {
      currentX += (targetX - currentX) * 0.085;
      currentY += (targetY - currentY) * 0.085;
      root.style.setProperty('--mx', `${currentX.toFixed(2)}%`);
      root.style.setProperty('--my', `${currentY.toFixed(2)}%`);
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

  const routeTransitionClass = ['/artists', '/services', '/gallery', '/events', '/pricing', '/book', '/about', '/contact', '/search', '/markets']
    .includes(pathname)
    ? 'route-showcase'
    : 'route-default';

  return (
    <div className="flow-unify-shell">
      <div className="flow-unify-atmos" aria-hidden="true" />
      <div className="ambient-canvas" aria-hidden="true" />
      
      {!hideChrome && <Nav />}

      <div className={`page-enter ${routeTransitionClass}`} style={{ minHeight: '100vh' }}>
        <div className="flow-unify-page-wrap">
          {children}
        </div>
        {!hideChrome && <Footer />}
      </div>

      {!hideChrome && <BottomNav />}
    </div>
  );
}
