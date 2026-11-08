import { notFound } from 'next/navigation';
import { dictionaries, isLocale, links } from '@/content/i18n';
import { projects } from '@/content/projects';
import ProjectCard from '@/components/ProjectCard';
import ThemeToggle from '@/components/ThemeToggle';
import Reveal from '@/components/Reveal';
import { BehanceIcon, CheckIcon, DownloadIcon, GlobeIcon, LinkedInIcon, WhatsAppIcon } from '@/components/Icons';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = dictionaries[locale];
  const otherLocale = locale === 'ar' ? 'en' : 'ar';

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipLink}
      </a>
      <div className="shell">
        {/* ───────────── Sidebar ───────────── */}
        <aside className="sidebar">
          <div className="id-row">
            <div className="id">
              <div className="avatar">
                <img src="/media/portrait.webp" alt={t.photoAlt} width={60} height={60} />
              </div>
              <div>
                <div className="id-name">{t.name}</div>
                <div className="id-role">{t.role}</div>
              </div>
            </div>
            <div className="icon-row">
              <a className="icon-btn" href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a className="icon-btn" href={links.behance} target="_blank" rel="noopener noreferrer" aria-label="Behance">
                <BehanceIcon />
              </a>
            </div>
          </div>

          <nav className="nav" aria-label={t.navAria}>
            {t.nav.map((n, i) => (
              <a key={n.href} href={n.href} aria-current={i === 0 ? 'true' : undefined}>
                {n.label}
              </a>
            ))}
          </nav>

          <h1 className="headline">
            {t.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="intro">{t.intro}</p>

          <div className="cta-row">
            <a className="btn btn-primary" href={links.whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              {t.ctaWhatsapp}
            </a>
            <a className="btn btn-secondary" href={links.cv} download="Mariam_Ali_Product_Designer_CV.pdf">
              <DownloadIcon />
              {t.ctaCv}
            </a>
          </div>

          <ul className="proof">
            {t.proof.map((p) => (
              <li key={p}>
                <CheckIcon />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="sidebar-foot">
            <a className="pill-btn" href={`/${otherLocale}`} hrefLang={otherLocale} lang={otherLocale} aria-label={t.langAria}>
              <GlobeIcon />
              {t.langSwitch}
            </a>
            <ThemeToggle toDark={t.themeToDark} toLight={t.themeToLight} />
          </div>
        </aside>

        {/* ───────────── Content ───────────── */}
        <main id="main" className="content">
          <div className="content-inner">
            <section id="works" className="section" data-reveal>
              <header className="section-head">
                <span className="eyebrow">{t.worksEyebrow}</span>
                <h2 className="h2">{t.worksTitle}</h2>
                <p className="sub">{t.worksSub}</p>
              </header>
              <div className="works">
                {projects.map((p, i) => (
                  <ProjectCard key={p.slug} project={p} locale={locale} eager={i < 2} ctaLabel={t.viewCase} />
                ))}
              </div>
            </section>

            <section id="about" className="section" data-reveal style={{ gap: 40 }}>
              <header className="section-head">
                <span className="eyebrow">{t.aboutEyebrow}</span>
                <h2 className="h2">{t.aboutTitle}</h2>
              </header>
              <div className="two-col">
                <p>{t.about1}</p>
                <p>{t.about2}</p>
              </div>
              <blockquote className="quote">{t.quote}</blockquote>
              <div className="section-head" style={{ gap: 16 }}>
                <h3 className="h3">{t.expertiseTitle}</h3>
                <div className="tiles">
                  {t.expertise.map((e) => (
                    <div key={e.title} className="tile">
                      <span className="tile-title">{e.title}</span>
                      <span className="tile-body">{e.body}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="process" className="section" data-reveal>
              <header className="section-head">
                <span className="eyebrow">{t.processEyebrow}</span>
                <h2 className="h2">{t.processTitle}</h2>
              </header>
              <ol className="steps">
                {t.process.map((s) => (
                  <li key={s.n} className="step">
                    <span className="step-n">{s.n}</span>
                    <span className="step-title">{s.title}</span>
                    <span className="step-body">{s.body}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section id="experience" className="section" data-reveal>
              <header className="section-head">
                <span className="eyebrow">{t.expEyebrow}</span>
                <h2 className="h2">{t.expTitle}</h2>
              </header>
              <div>
                {t.exp.map((x) => (
                  <div key={x.org} className="exp-row">
                    <span className="exp-when">{x.when}</span>
                    <div className="exp-main">
                      <span className="exp-org">{x.org}</span>
                      <span className="exp-role">{x.role}</span>
                      <span className="exp-body">{x.body}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="contact" className="contact" data-reveal>
              <h2>{t.contactTitle}</h2>
              <div className="cta-row">
                <a className="btn btn-primary" href={links.whatsapp} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                  {t.ctaWhatsapp}
                </a>
                <a className="btn btn-ghost-inverse" href={`mailto:${links.email}`}>
                  {links.email}
                </a>
                <a className="btn btn-ghost-inverse" href={links.cv} download="Mariam_Ali_Product_Designer_CV.pdf">
                  {t.ctaCv}
                </a>
              </div>
            </section>

            <Reveal />
            <footer className="footer">
              <span>{t.footer}</span>
              <a href="#main">{t.backTop}</a>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
}
