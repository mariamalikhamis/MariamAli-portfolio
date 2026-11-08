import type { Locale } from '@/content/i18n';
import { mercato, mercatoCover } from '@/content/mercato';
import Reveal from './Reveal';

export default function MercatoStudy({ locale }: { locale: Locale }) {
  const c = mercato[locale];
  const L = c.labels;

  return (
    <main id="main" className="cs-wrap cs-main mc">
      {/* Hero */}
      <section className="cs-hero">
        <div className="tags">
          {c.tags.map((tag, i) => (
            <span key={tag} className={i === 0 ? 'tag tag-market' : 'tag'}>
              {tag}
            </span>
          ))}
        </div>
        <h1 className="cs-title">{c.title}</h1>
        <p className="cs-summary">
          <strong>{c.brand}</strong> {c.summary}
        </p>
        <dl className="cs-details">
          {c.details.map((d) => (
            <div key={d.label}>
              <dt className="eyebrow">{d.label}</dt>
              <dd>{d.value}</dd>
            </div>
          ))}
        </dl>
        <div className="cs-hero-shot mc-hero-shot">
          <img className="cs-shot" src={mercatoCover} alt={c.heroAlt} width={1600} height={1000} />
        </div>
      </section>

      {/* 01 Problem */}
      <section className="section" data-reveal>
        <header className="section-head">
          <span className="eyebrow">{c.problem.eyebrow}</span>
          <h2 className="h2">{c.problem.title}</h2>
          <p className="sub">{c.problem.body}</p>
        </header>
        <div className="cs-grid-3">
          {c.problem.stats.map((s) => (
            <div key={s.value} className="cs-card mc-stat">
              <span className="mc-stat-value" dir="ltr">
                {s.value}
              </span>
              <span className="muted">{s.body}</span>
            </div>
          ))}
        </div>
        <blockquote className="mc-hmw">
          <span className="eyebrow">{c.problem.hmwLabel}</span>
          <p>{c.problem.hmw}</p>
        </blockquote>
      </section>

      {/* 02–04 Chapters */}
      {c.chapters.map((ch) => (
        <section key={ch.eyebrow} className="section mc-chapter">
          <header className="section-head" data-reveal>
            <span className="eyebrow">{ch.eyebrow}</span>
            <h2 className="h2">{ch.title}</h2>
            <p className="sub">{ch.intro}</p>
          </header>

          <div className="mc-compare" data-reveal>
            <figure>
              <figcaption className="mc-label is-before">{L.before}</figcaption>
              <img className="cs-shot" src={ch.before.src} alt={ch.before.alt} width={1600} height={1000} loading="lazy" />
            </figure>
            <figure>
              <figcaption className="mc-label is-after">{L.after}</figcaption>
              <img className="cs-shot" src={ch.after[0].src} alt={ch.after[0].alt} width={1600} height={1000} loading="lazy" />
            </figure>
          </div>

          <ol className={`mc-fixes count-${ch.items.length}`}>
            {ch.items.map((f) => (
              <li key={f.problem} className="mc-fix" data-reveal>
                <div className="mc-fix-pair">
                  <span className="mc-problem">
                    <span className="mc-mini">{L.problem}</span>
                    {f.problem}
                  </span>
                  <span className="mc-to" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M6 13l6 6 6-6" />
                    </svg>
                  </span>
                  <span className="mc-solution">
                    <span className="mc-mini">{L.solution}</span>
                    {f.solution}
                  </span>
                </div>
                <p className="muted mc-fix-body">{f.body}</p>
                <div className={`mc-kpi kind-${f.kpi.kind}`}>
                  <span className="mc-kpi-value">{f.kpi.value}</span>
                  <span className="mc-kpi-label">{f.kpi.label}</span>
                  <span className="mc-kpi-kind">{L.kinds[f.kpi.kind]}</span>
                </div>
              </li>
            ))}
          </ol>

          {ch.after.length > 1 && (
            <div className="mc-more" data-reveal>
              {ch.after.slice(1).map((s) => (
                <figure key={s.src}>
                  <img className="cs-shot" src={s.src} alt={s.alt} width={1600} height={1000} loading="lazy" />
                </figure>
              ))}
            </div>
          )}
        </section>
      ))}

      {/* 05 Impact */}
      <section className="contact cs-outcome" data-reveal>
        <span className="eyebrow cs-outcome-eyebrow">{c.impact.eyebrow}</span>
        <h2>{c.impact.title}</h2>
        <div className="mc-impact">
          {c.impact.items.map((o) => (
            <div key={o.body} className="cs-outcome-item">
              <span className="cs-outcome-value">{o.value}</span>
              <span className="cs-outcome-body">{o.body}</span>
            </div>
          ))}
        </div>
        <div className="mc-revenue">
          {c.impact.revenue.map((o) => (
            <div key={o.body} className="cs-outcome-item">
              <span className="mc-revenue-value">{o.value}</span>
              <span className="cs-outcome-body">{o.body}</span>
            </div>
          ))}
        </div>
        <p className="mc-note">{c.impact.note}</p>
      </section>

      {/* 06 Workflow */}
      <section className="cs-split" data-reveal>
        <div className="section-head">
          <span className="eyebrow">{c.workflow.eyebrow}</span>
          <h2 className="h2">{c.workflow.title}</h2>
          <p className="sub">{c.workflow.body}</p>
        </div>
        <div className="cs-prose">
          <ol className="cs-numbered">
            {c.workflow.steps.map((s, i) => (
              <li key={s}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                {s}
              </li>
            ))}
          </ol>
          <p className="mc-learned">{c.workflow.learned}</p>
        </div>
      </section>

      <a className="cs-next" href={`/${locale}${c.next.href}`}>
        <span>
          <span className="muted" style={{ fontSize: 13, display: 'block' }}>
            {c.next.label}
          </span>
          <span className="cs-next-title">{c.next.title}</span>
        </span>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="flip-rtl">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
      <Reveal />
    </main>
  );
}
