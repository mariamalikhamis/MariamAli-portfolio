import type { Metadata } from 'next';
import { Fragment } from 'react';
import { notFound } from 'next/navigation';
import { dictionaries, isLocale, locales } from '@/content/i18n';
import { caseStudies, getCaseStudy } from '@/content/caseStudies';
import ThemeToggle from '@/components/ThemeToggle';
import Reveal from '@/components/Reveal';
import { GlobeIcon } from '@/components/Icons';

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return locales.flatMap((locale) => caseStudies.map((c) => ({ locale, slug: c.slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const cs = getCaseStudy(slug);
  if (!isLocale(locale) || !cs) return {};
  const c = cs.copy[locale];
  return {
    title: c.metaTitle,
    description: `${c.brand} ${c.summary}`,
    alternates: { canonical: `/${locale}/work/${slug}`, languages: { en: `/en/work/${slug}`, ar: `/ar/work/${slug}` } },
    openGraph: { title: c.metaTitle, description: c.summary, images: [cs.cover] },
  };
}

const ArrowBack = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="flip-rtl">
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);

const UserIcon = ({ tone }: { tone: string }) =>
  tone === 'blue' ? (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 8l-9-5-9 5 9 5 9-5z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </svg>
  ) : tone === 'teal' ? (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-6h6v6" />
    </svg>
  ) : (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 6h13v10H1z" />
      <path d="M14 10h4l3 3v3h-7z" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );

const primary = ['#f5f7fa', '#e9eef5', '#cfdce8', '#a5bed4', '#749cbc', '#5280a5', '#3f668a', '#345370', '#2e465e', '#2b3d4f', '#1e2a38'];
const success = ['#f0fdf9', '#cdfaec', '#9cf3da', '#62e6c5', '#32cfad', '#1abc9c', '#11907a', '#127362', '#135c51', '#154c44', '#052e29'];
const stateTones = ['purple', 'cyan', 'amber', 'green', 'red'];

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const cs = getCaseStudy(slug);
  if (!isLocale(locale) || !cs) notFound();
  const c = cs.copy[locale];
  const t = dictionaries[locale];
  const other = locale === 'ar' ? 'en' : 'ar';

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipLink}
      </a>
      <header className="cs-topbar">
        <div className="cs-wrap cs-topbar-inner">
          <a className="cs-back" href={`/${locale}#works`}>
            <ArrowBack />
            {c.back}
          </a>
          <div className="cs-topbar-actions">
            <a className="pill-btn" href={`/${other}/work/${slug}`} hrefLang={other} lang={other} aria-label={t.langAria}>
              <GlobeIcon />
              {t.langSwitch}
            </a>
            <ThemeToggle toDark={t.themeToDark} toLight={t.themeToLight} />
          </div>
        </div>
      </header>

      <main id="main" className="cs-wrap cs-main">
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
          <div className="cs-hero-shot">
            <img className="cs-shot" src={cs.cover} alt={c.heroAlt} width={1440} height={1024} />
          </div>
        </section>

        {/* 01 Context */}
        <section className="cs-split" data-reveal>
          <div className="section-head">
            <span className="eyebrow">{c.context.eyebrow}</span>
            <h2 className="h2">{c.context.title}</h2>
          </div>
          <div className="cs-prose">
            <p>{c.context.body}</p>
            <p className="muted">{c.context.problem}</p>
          </div>
        </section>

        {/* 02 Users */}
        <section className="section" data-reveal>
          <header className="section-head">
            <span className="eyebrow">{c.users.eyebrow}</span>
            <h2 className="h2">{c.users.title}</h2>
          </header>
          <div className="cs-grid-3">
            {c.users.items.map((u) => (
              <div key={u.name} className="cs-card">
                <span className={`cs-icon tone-${u.tone}`}>
                  <UserIcon tone={u.tone} />
                </span>
                <span className="cs-card-title">{u.name}</span>
                <span className="muted">{u.lead}</span>
                <ul className="cs-bullets">
                  {u.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 03 Flows */}
        <section className="section" data-reveal>
          <header className="section-head">
            <span className="eyebrow">{c.flows.eyebrow}</span>
            <h2 className="h2">{c.flows.title}</h2>
            <p className="sub">{c.flows.intro}</p>
          </header>
          <div className="cs-card cs-flows">
            {c.flows.lanes.map((lane) => (
              <div key={lane.user} className="cs-lane">
                <span className={`cs-lane-user tone-text-${lane.tone}`}>{lane.user}</span>
                <ol className="cs-steps">
                  {lane.steps.map((s, i) => (
                    <Fragment key={s.label}>
                      {i > 0 && (
                        <li className="cs-arrow" aria-hidden="true">
                          →
                        </li>
                      )}
                      <li className={`cs-step tone-${lane.tone}${s.key ? ' is-key' : ''}`}>{s.label}</li>
                    </Fragment>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {/* 04 Decisions */}
        <section className="section cs-decisions">
          <header className="section-head" data-reveal>
            <span className="eyebrow">{c.decisions.eyebrow}</span>
            <h2 className="h2">{c.decisions.title}</h2>
          </header>
          {c.decisions.items.map((d, i) => (
            <div key={d.title} className={`cs-decision${i % 2 ? ' is-flipped' : ''}`} data-reveal>
              <div className="cs-decision-media">
                <img className="cs-shot" src={d.image} alt={d.alt} width={1440} height={1024} loading="lazy" />
              </div>
              <div className="cs-decision-text">
                <span className="cs-tag">{d.tag}</span>
                <h3 className="cs-h3">{d.title}</h3>
                <p className="muted">{d.body}</p>
              </div>
            </div>
          ))}
        </section>

        {/* 05 Driver app */}
        <section className="section" data-reveal>
          <header className="section-head">
            <span className="eyebrow">{c.driver.eyebrow}</span>
            <h2 className="h2">{c.driver.title}</h2>
          </header>
          <div className="cs-driver">
            <img className="cs-phone" src="/work/shipment/driver-home.webp" alt={c.driver.alt} width={428} height={828} loading="lazy" />
            <div className="cs-prose">
              <p className="muted">{c.driver.intro}</p>
              <ol className="cs-numbered">
                {c.driver.steps.map((s, i) => (
                  <li key={s}>
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 06 Edge cases */}
        <section className="section" data-reveal>
          <header className="section-head">
            <span className="eyebrow">{c.edge.eyebrow}</span>
            <h2 className="h2">{c.edge.title}</h2>
          </header>
          <div className="cs-grid-4">
            {c.edge.items.map((e) => (
              <div key={e.title} className="cs-card cs-card-sm">
                <span className="cs-card-title" style={{ fontSize: 16 }}>
                  {e.title}
                </span>
                <span className="muted" style={{ fontSize: 14 }}>
                  {e.body}
                </span>
              </div>
            ))}
          </div>
          <div className="cs-card cs-states">
            <span className="cs-card-title" style={{ fontSize: 14 }}>
              {c.edge.statesLabel}
            </span>
            {c.edge.states.map((s, i) => (
              <span key={s} className={`cs-state state-${stateTones[i]}`}>
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* 07 Design system */}
        <section className="cs-split" data-reveal>
          <div className="section-head">
            <span className="eyebrow">{c.system.eyebrow}</span>
            <h2 className="h2">{c.system.title}</h2>
            <p className="sub">{c.system.body}</p>
          </div>
          <div className="cs-card">
            <div className="cs-type-sample">
              <span lang="ar" dir="rtl">
                وصْل للشحن
              </span>
              <span className="muted" style={{ fontSize: 13 }}>
                IBM Plex Sans Arabic
              </span>
            </div>
            <div className="cs-swatches" dir="ltr">
              {primary.map((h) => (
                <span key={h} style={{ background: h }} />
              ))}
            </div>
            <div className="cs-swatches" dir="ltr">
              {success.map((h) => (
                <span key={h} style={{ background: h }} />
              ))}
            </div>
            <div className="cs-swatch-labels muted">
              <span>{c.system.primary}</span>
              <span>{c.system.success}</span>
            </div>
          </div>
        </section>

        {/* 08 Outcome */}
        <section className="contact cs-outcome" data-reveal>
          <span className="eyebrow cs-outcome-eyebrow">{c.outcome.eyebrow}</span>
          <h2>{c.outcome.title}</h2>
          <div className="cs-grid-3">
            {c.outcome.items.map((o) => (
              <div key={o.value} className="cs-outcome-item">
                <span className="cs-outcome-value">{o.value}</span>
                <span className="cs-outcome-body">{o.body}</span>
              </div>
            ))}
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
    </>
  );
}
