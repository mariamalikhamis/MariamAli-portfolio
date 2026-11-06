import type { Locale } from '@/content/i18n';
import { industries, markets, platforms, type Project } from '@/content/projects';
import { PinIcon } from './Icons';

export default function ProjectCard({ project, locale, eager }: { project: Project; locale: Locale; eager?: boolean }) {
  const copy = project.copy[locale];
  const meta = [copy.org, ...project.platforms.map((p) => platforms[p][locale])].join(' · ');

  const media = (
    <div className="card-media" data-fit={project.fit ?? 'cover'} style={project.bg ? { background: project.bg } : undefined}>
      {project.video ? (
        <video src={project.video.src} poster={project.video.poster} autoPlay muted loop playsInline preload="metadata" aria-label={copy.title} />
      ) : project.cover ? (
        <img src={project.cover} alt={copy.title} loading={eager ? 'eager' : 'lazy'} decoding="async" />
      ) : null}
    </div>
  );

  const body = (
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
      <div className="card-meta">{meta}</div>
    </div>
  );

  return (
    <article className="card reveal">
      {project.href ? (
        <a href={project.href} target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
          {media}
          {body}
        </a>
      ) : (
        <>
          {media}
          {body}
        </>
      )}
    </article>
  );
}
