import { Link } from 'react-router-dom'
import TechBadge from './TechBadge'
import { competences as allCompetences } from '../../data/competences'

const competenceColorMap = {
  realiser:   'from-violet-500/60',
  optimiser:  'from-blue-500/60',
  administrer:'from-green-500/60',
  gerer:      'from-orange-500/60',
  conduire:   'from-yellow-500/60',
  collaborer: 'from-pink-500/60',
}

export default function ProjectCard({ project }) {
  const linkedCompetences = allCompetences.filter((c) =>
    project.competences.includes(c.slug)
  )
  const accentFrom = competenceColorMap[project.competences[0]] ?? 'from-violet-500/60'

  return (
    <article className="group flex flex-col h-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-violet-500/30 hover:shadow-[0_12px_48px_rgba(139,92,246,0.15)] hover:-translate-y-1 transition-all duration-300">

      {/* Accent line colorée selon la première compétence */}
      <div className={`h-0.5 bg-gradient-to-r ${accentFrom} to-transparent`} />

      {/* Image */}
      <div className="relative aspect-video bg-slate-800 overflow-hidden">
        <img
          src={project.image}
          alt={`Capture d'écran du projet ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          loading="lazy"
        />

        {/* Gradient overlay renforcé bas */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/20 to-transparent" />

        {/* Métadonnées bas gauche */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
          {project.type && (
            <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-300 bg-slate-950/80 backdrop-blur-sm px-2 py-0.5 rounded border border-slate-700/60">
              {project.type}
            </span>
          )}
          {project.year && (
            <span className="text-[10px] font-mono text-slate-500 bg-slate-950/80 backdrop-blur-sm px-2 py-0.5 rounded border border-slate-700/60">
              {project.year}
            </span>
          )}
        </div>

        {/* Badges haut droite : featured + statut */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5">
          {project.featured && (
            <span className="inline-flex items-center gap-1 text-[10px] text-amber-400 bg-slate-950/85 border border-amber-400/25 px-2 py-0.5 rounded-full font-medium backdrop-blur-sm">
              ★ Phare
            </span>
          )}
          <span className="inline-flex items-center gap-1 text-xs text-green-400 bg-slate-950/85 border border-green-400/25 px-2.5 py-0.5 rounded-full font-medium backdrop-blur-sm">
            <span className="w-1 h-1 rounded-full bg-green-400" />
            {project.status}
          </span>
        </div>
      </div>

      {/* Contenu */}
      <div className="flex flex-col flex-1 p-5 gap-3">

        {/* Titre */}
        <h2 className="text-lg font-bold text-slate-100 group-hover:text-violet-300 transition-colors duration-200 leading-snug">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Highlights — 2 max */}
        <ul className="space-y-1.5">
          {project.highlights.slice(0, 2).map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-xs text-slate-500">
              <span className="shrink-0 w-4 h-4 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mt-0.5">
                <svg className="w-2.5 h-2.5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              <span className="leading-relaxed line-clamp-1">{item}</span>
            </li>
          ))}
        </ul>

        {/* Tech badges colorés */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <TechBadge key={tag} name={tag} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-3 border-t border-slate-800 flex items-center justify-between gap-3">

          {/* Compétences liées */}
          <div className="flex flex-wrap gap-x-2 gap-y-0.5 min-w-0">
            {linkedCompetences.map((c) => (
              <Link
                key={c.slug}
                to={`/competences/${c.slug}`}
                className="text-xs text-violet-400/60 hover:text-violet-300 transition-colors duration-150 font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                {c.title}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            to={`/projects/${project.slug}`}
            className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-violet-500/10 text-violet-300 hover:bg-violet-500/20 border border-violet-500/25 hover:border-violet-500/45 rounded-lg transition-all duration-200 group/btn"
          >
            Voir le projet
            <svg
              className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-200"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
