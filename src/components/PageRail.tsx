'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type Item = { label: string; href: string };

/** Mobile/tablet page index: a round menu button that opens the numbered section list. */
export default function PageRail({
  items,
  labels,
  footer,
}: {
  items: Item[];
  labels: { aria: string; open: string; close: string; title: string };
  footer?: ReactNode;
}) {
  const [active, setActive] = useState(items[0]?.href ?? '');
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Track the section in view
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

  // Close on Escape or click outside
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
    };
  }, [open]);

  const go = (href: string) => {
    setActive(href);
    setOpen(false);
  };

  const menuIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M4 7h16M4 12h12M4 17h8" />
    </svg>
  );

  return (
    <div ref={rootRef} className={open ? 'rail is-open' : 'rail'}>
      <nav className="rail-bar" aria-label={labels.aria} hidden={open}>
        <button ref={toggleRef} type="button" className="rail-toggle" aria-expanded={open} aria-label={labels.open} onClick={() => setOpen(true)}>
          {menuIcon}
        </button>
      </nav>

      <div className="rail-panel" role="dialog" aria-label={labels.title} hidden={!open}>
        <button type="button" className="rail-close" onClick={() => { setOpen(false); toggleRef.current?.focus(); }}>
          {menuIcon}
          <span>{labels.close}</span>
        </button>
        <span className="rail-title">{labels.title}</span>
        <ol className="rail-list">
          {items.map((n, i) => (
            <li key={n.href}>
              <a href={n.href} aria-current={active === n.href ? 'true' : undefined} onClick={() => go(n.href)}>
                <span className="rail-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span>{n.label}</span>
              </a>
            </li>
          ))}
        </ol>
        {footer ? <div className="rail-footer">{footer}</div> : null}
      </div>
    </div>
  );
}
