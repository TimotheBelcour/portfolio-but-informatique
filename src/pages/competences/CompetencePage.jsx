import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import { competences } from '../../data/competences'
import Badge from '../../components/ui/Badge'

const colorMap = {
  violet: {
    accent: 'text-violet-400',
    bg: 'bg-violet-500/5',
    border: 'border-violet-500/20',
    dot: 'bg-violet-400',
    bar: 'bg-violet-500',
  },
  blue: {
    accent: 'text-blue-400',
    bg: 'bg-blue-500/5',
    border: 'border-blue-500/20',
    dot: 'bg-blue-400',
    bar: 'bg-blue-500',
  },
  green: {
    accent: 'text-green-400',
    bg: 'bg-green-500/5',
    border: 'border-green-500/20',
    dot: 'bg-green-400',
    bar: 'bg-green-500',
  },
  orange: {
    accent: 'text-orange-400',
    bg: 'bg-orange-500/5',
    border: 'border-orange-500/20',
    dot: 'bg-orange-400',
    bar: 'bg-orange-500',
  },
  yellow: {
    accent: 'text-yellow-400',
    bg: 'bg-yellow-500/5',
    border: 'border-yellow-500/20',
    dot: 'bg-yellow-400',
    bar: 'bg-yellow-500',
  },
  pink: {
    accent: 'text-pink-400',
    bg: 'bg-pink-500/5',
    border: 'border-pink-500/20',
    dot: 'bg-pink-400',
    bar: 'bg-pink-500',
  },
}

export default function CompetencePage({ competence }) {
  const colors = colorMap[competence.color] ?? colorMap.violet
  const relatedProjects = projects.filter((p) =>
    p.competences.includes(competence.slug)
  )
  const currentIndex = competences.findIndex((c) => c.slug === competence.slug)
  const prevC = competences[currentIndex - 1]
  const nextC = competences[currentIndex + 1]

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <span className={`text-xs font-mono font-medium ${colors.accent}`}>
          Compétence {String(competence.id).padStart(2, '0')}
        </span>
        <h1 className="text-4xl font-bold text-slate-100 leading-tight">
          {competence.fullTitle}
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
          {competence.description}
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contenu principal */}
        <div className="lg:col-span-2 space-y-8">
          {/* Critères */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-100">Critères d'évaluation</h2>
            <ul className="space-y-3">
              {competence.criteres.map((critere, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${colors.dot}`} />
                  <span className="text-slate-400 text-sm leading-relaxed">{critere}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Traces */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-100">Traces & Réalisations</h2>
            <div className={`p-6 rounded-xl border ${colors.border} ${colors.bg}`}>
              <p className="text-slate-500 text-sm italic">
                Les traces et réalisations pour cette compétence seront ajoutées
                prochainement.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Projets liés */}
          {relatedProjects.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                Projets liés
              </h3>
              {relatedProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 hover:border-slate-700 transition-colors"
                >
                  <p className="font-medium text-slate-200 text-sm">{project.title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} color="slate">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Progression */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              Niveau
            </h3>
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
              <div className="flex justify-between text-xs text-slate-500">
                <span>Progression générale</span>
                <span className={colors.accent}>En cours</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${colors.bar} w-1/2`} />
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Navigation entre compétences */}
      <div className="flex items-center justify-between pt-8 border-t border-slate-800">
        {prevC ? (
          <Link
            to={`/competences/${prevC.slug}`}
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-100 transition-colors group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span>
              <span className="block text-xs text-slate-600">Précédente</span>
              {prevC.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextC ? (
          <Link
            to={`/competences/${nextC.slug}`}
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-100 transition-colors group text-right"
          >
            <span>
              <span className="block text-xs text-slate-600">Suivante</span>
              {nextC.title}
            </span>
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
