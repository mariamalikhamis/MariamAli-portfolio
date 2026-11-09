'use client';

import { useEffect, useState } from 'react';

type NavItem = { label: string; href: string };

/** Large vertical section nav; the section in view is highlighted. */
export default function SideNav({ items, label }: { items: NavItem[]; label: string }) {
  const [active, setActive] = useState(items[0]?.href ?? '');

  useEffect(() => {
    const sections = items
      .map((i) => document.querySelector<HTMLElement>(i.href))
      .filter((el): el is HTMLElement => !!el);
    if (!('IntersectionObserver' in window) || !sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav className="sidenav" aria-label={label}>
      {items.map((n) => (
        <a key={n.href} href={n.href} aria-current={active === n.href ? 'true' : undefined} onClick={() => setActive(n.href)}>
          {n.label}
        </a>
      ))}
    </nav>
  );
}
