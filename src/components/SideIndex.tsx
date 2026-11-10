'use client';

import { useEffect, useState } from 'react';

type Item = { label: string; href: string };

/** Desktop sidebar index: numbered, always-visible section list that follows the scroll. */
export default function SideIndex({ items, title, label }: { items: Item[]; title: string; label: string }) {
  const [active, setActive] = useState(items[0]?.href ?? '');

  useEffect(() => {
    const sections = items
      .map((i) => document.querySelector<HTMLElement>(i.href))
      .filter((el): el is HTMLElement => !!el);
    if (!('IntersectionObserver' in window) || !sections.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav className="side-index" aria-label={label}>
      <span className="side-index-title" aria-hidden="true">{title}</span>
      <ol>
        {items.map((n) => (
          <li key={n.href}>
            <a href={n.href} aria-current={active === n.href ? 'true' : undefined} onClick={() => setActive(n.href)}>
              <span className="side-index-label">{n.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
