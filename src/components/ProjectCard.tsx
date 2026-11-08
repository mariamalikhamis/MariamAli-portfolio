import type { Locale } from '@/content/i18n';
import { industries, markets, platforms, type Project } from '@/content/projects';
import { PinIcon } from './Icons';

export default function ProjectCard({
  project,
  locale,
  eager,
  ctaLabel,
}: {
  project: Project;
  locale: Locale;
  eager?: boolean;
  ctaLabel?: string;
}) {
  const copy = project.copy[locale];
  const meta = [copy.org, ...project.platforms.map((p) => platforms[p][locale])].join(' · ');
  const internal = project.caseStudy ? `/${locale}/work/${project.slug}` : undefined;
  const link = internal ?? project.href;

  const inner = (
    <>
      <div className="card-media" data-fit={project.fit ?? 'cover'} style={project.bg ? { background: project.bg } : undefined}>
        {project.video ? (
          <video src={project.video.src} poster={project.video.poster} autoPlay muted loop playsInline preload="metadata" aria-label={copy.title} />
        ) : project.cover ? (
          <img src={project.cover} alt={copy.title} loading={eager ? 'eager' : 'lazy'} decoding="async" />
        ) : null}
      </div>
      <div className="card-body">
        <div className="tags">
          {project.markets.map((m) => (
            <span key={m} className="tag tag-market">
              <PinIcon />
              {markets[m][locale]}
            </span>
          ))}
          {project.industries.map((i) => (
            <span key={i} className="tag">
              {industries[i][locale]}
            </span>
          ))}
        </div>
        <h3 className="card-title">{copy.title}</h3>
        <p className="card-q">{copy.question}</p>
        <div className="card-meta-row">
          <span>{meta}</span>
          {internal && ctaLabel ? (
            <span className="card-cta">
              {ctaLabel}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="flip-rtl">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          ) : null}
        </div>
      </div>
    </>
  );

  return (
    <article className={link ? 'card is-link' : 'card'}>
      {link ? (
        <a className="card-link" href={link} {...(internal ? {} : { target: '_blank', rel: 'noopener noreferrer' })}>
          {inner}
        </a>
      ) : (
        inner
      )}
    </article>
  );
}
