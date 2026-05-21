import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import Badge from '../components/ui/Badge'

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
      {/* Header */}
      <section className="space-y-3">
        <h1 className="text-4xl font-bold text-slate-100">Projets</h1>
        <p className="text-slate-500 text-lg">Réalisations académiques et personnelles</p>
      </section>

      {/* Grille */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-700 transition-all duration-200 space-y-4"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg font-semibold text-slate-100 group-hover:text-violet-400 transition-colors">
                {project.title}
              </h2>
              <span className="shrink-0 text-xs text-green-400 bg-green-400/10 border border-green-400/20 px-2.5 py-0.5 rounded-full font-medium">
                {project.status}
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge key={tag} color="slate">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-3 border-t border-slate-800">
              <span className="text-xs text-slate-600">Compétences :</span>
              {project.competences.map((slug) => (
                <Link
                  key={slug}
                  to={`/competences/${slug}`}
                  className="text-xs text-violet-400 hover:text-violet-300 transition-colors capitalize font-medium"
                >
                  {slug}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
