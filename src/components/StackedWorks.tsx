'use client';

import { useEffect, useRef } from 'react';

/**
 * Sticky cards overlap effect.
 * Each card sticks near the top of the screen; the next card slides over it,
 * and the covered card scales down and dims slightly to suggest depth.
 */
export default function StackedWorks({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;

    const update = () => {
      frame = 0;
      const cards = Array.from(root.querySelectorAll<HTMLElement>('.stack-card'));
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next || reduce.matches) {
          card.style.removeProperty('--stack-p');
          return;
        }
        const a = card.getBoundingClientRect();
        const b = next.getBoundingClientRect();
        // 0 when the next card is a full card-height below, 1 when it fully covers this one
        const p = Math.min(1, Math.max(0, (a.bottom - b.top) / a.height));
        card.style.setProperty('--stack-p', p.toFixed(3));
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="stack">
      {children}
    </div>
  );
}
