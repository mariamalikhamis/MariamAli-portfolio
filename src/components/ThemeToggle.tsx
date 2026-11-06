'use client';

import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from './Icons';

type Theme = 'light' | 'dark';

export default function ThemeToggle({ toDark, toLight }: { toDark: string; toLight: string }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme((document.documentElement.dataset.theme as Theme) || 'light');
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {}
    setTheme(next);
  };

  const isDark = theme === 'dark';
  return (
    <button type="button" className="icon-btn" onClick={toggle} aria-label={isDark ? toLight : toDark} style={{ color: 'var(--text)' }}>
      {/* Before hydration, render the moon so markup matches the server */}
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
