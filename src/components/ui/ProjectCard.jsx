import { Link } from 'react-router-dom'
import Badge from './Badge'
import { competences as allCompetences } from '../../data/competences'

export default function ProjectCard({ project }) {
  const linkedCompetences = allCompetences.filter((c) =>
    project.competences.includes(c.slug)
  )

  return (
    <article className="group flex flex-col h-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-violet-500/25 hover:shadow-[0_8px_40px_rgba(139,92,246,0.13)] hover:-translate-y-1 transition-all duration-300">

      {/* Image */}
      <div className="relative aspect-video bg-slate-800 overflow-hidden">
        <img
          src={project.image}
          alt={`Capture d'écran du projet ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />
        {/* Overlay gradient renforcé en bas */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

        {/* Badge statut */}
        <span className="absolute top-3 right-3 text-xs text-green-400 bg-slate-950/85 border border-green-400/25 px-2.5 py-0.5 rounded-full font-medium backdrop-blur-sm">
          {project.status}
        </span>
      </div>

      {/* Contenu */}
      <div className="flex flex-col flex-1 p-5 space-y-4">

        {/* Titre */}
        <h2 className="text-lg font-semibold text-slate-100 group-hover:text-violet-300 transition-colors duration-200 leading-snug">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-1.5">
          {project.highlights.slice(0, 3).map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-slate-500">
              <svg
                className="w-3.5 h-3.5 text-violet-500 shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        {/* Tags technologies */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} color="slate">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Pied de carte */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-800 mt-auto">

          {/* Compétences liées */}
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            {linkedCompetences.map((c) => (
              <Link
                key={c.slug}
                to={`/competences/${c.slug}`}
                className="text-xs text-violet-400/80 hover:text-violet-300 transition-colors duration-150 font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                {c.title}
              </Link>
            ))}
          </div>

          {/* Bouton détail */}
          <Link
            to={`/projects/${project.slug}`}
            className="shrink-0 inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-violet-300 transition-colors duration-200 font-medium group/btn"
          >
            Voir le détail
            <svg
              className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
