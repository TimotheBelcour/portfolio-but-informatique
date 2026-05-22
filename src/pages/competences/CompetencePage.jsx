import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import { competences } from '../../data/competences'
import Badge from '../../components/ui/Badge'
import Reveal from '../../components/ui/Reveal'

const colorMap = {
  violet: {
    accent: 'text-violet-400',
    bg: 'bg-violet-500/5',
    border: 'border-violet-500/20',
    dot: 'bg-violet-400',
    bar: 'bg-violet-500',
    pill: 'bg-violet-500/10 text-violet-300 border-violet-500/25',
    icon: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
    check: 'text-violet-400',
    number: 'bg-violet-400 text-slate-900',
    separator: 'via-violet-500/20',
  },
  blue: {
    accent: 'text-blue-400',
    bg: 'bg-blue-500/5',
    border: 'border-blue-500/20',
    dot: 'bg-blue-400',
    bar: 'bg-blue-500',
    pill: 'bg-blue-500/10 text-blue-300 border-blue-500/25',
    icon: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    check: 'text-blue-400',
    number: 'bg-blue-400 text-slate-900',
    separator: 'via-blue-500/20',
  },
  green: {
    accent: 'text-green-400',
    bg: 'bg-green-500/5',
    border: 'border-green-500/20',
    dot: 'bg-green-400',
    bar: 'bg-green-500',
    pill: 'bg-green-500/10 text-green-300 border-green-500/25',
    icon: 'bg-green-500/10 border-green-500/20 text-green-400',
    check: 'text-green-400',
    number: 'bg-green-400 text-slate-900',
    separator: 'via-green-500/20',
  },
  orange: {
    accent: 'text-orange-400',
    bg: 'bg-orange-500/5',
    border: 'border-orange-500/20',
    dot: 'bg-orange-400',
    bar: 'bg-orange-500',
    pill: 'bg-orange-500/10 text-orange-300 border-orange-500/25',
    icon: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
    check: 'text-orange-400',
    number: 'bg-orange-400 text-slate-900',
    separator: 'via-orange-500/20',
  },
  yellow: {
    accent: 'text-yellow-400',
    bg: 'bg-yellow-500/5',
    border: 'border-yellow-500/20',
    dot: 'bg-yellow-400',
    bar: 'bg-yellow-500',
    pill: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/25',
    icon: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
    check: 'text-yellow-400',
    number: 'bg-yellow-400 text-slate-900',
    separator: 'via-yellow-500/20',
  },
  pink: {
    accent: 'text-pink-400',
    bg: 'bg-pink-500/5',
    border: 'border-pink-500/20',
    dot: 'bg-pink-400',
    bar: 'bg-pink-500',
    pill: 'bg-pink-500/10 text-pink-300 border-pink-500/25',
    icon: 'bg-pink-500/10 border-pink-500/20 text-pink-400',
    check: 'text-pink-400',
    number: 'bg-pink-400 text-slate-900',
    separator: 'via-pink-500/20',
  },
}

const LEVEL_LABELS = ['', 'Débutant', 'Notions', 'Intermédiaire', 'Avancé', 'Expert']

function CheckIcon({ className }) {
  return (
    <svg className={`w-4 h-4 shrink-0 mt-0.5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export default function CompetencePage({ competence }) {
  const colors = colorMap[competence.color] ?? colorMap.violet
  const relatedProjects = projects.filter((p) => p.competences.includes(competence.slug))
  const currentIndex = competences.findIndex((c) => c.slug === competence.slug)
  const prevC = competences[currentIndex - 1]
  const nextC = competences[currentIndex + 1]
  const niveauScore = competence.niveauScore ?? 2
  const niveauLabel = LEVEL_LABELS[niveauScore] ?? 'En cours'
  const apprentissages = competence.apprentissages ?? []

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">

      {/* ── Hero ── */}
      <Reveal as="section" className="space-y-5">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-600">
          <span>Compétences</span>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className={colors.accent}>{competence.title}</span>
        </nav>

        {/* Pill */}
        <span className={`inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1 rounded-full border ${colors.pill}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
          Compétence {String(competence.id).padStart(2, '0')}
        </span>

        {/* Title */}
        <h1 className="text-4xl font-bold text-slate-100 leading-tight">
          {competence.fullTitle}
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
          {competence.description}
        </p>

        {/* Stat chips */}
        <div className="flex flex-wrap gap-2 pt-1">
          <span className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-800/60 border border-slate-700/50 px-3 py-1.5 rounded-lg">
            <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
            {competence.criteres.length} critères BUT
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-800/60 border border-slate-700/50 px-3 py-1.5 rounded-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
            {relatedProjects.length} projet{relatedProjects.length > 1 ? 's' : ''} associé{relatedProjects.length > 1 ? 's' : ''}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-800/60 border border-slate-700/50 px-3 py-1.5 rounded-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
            2ème année BUT
          </span>
        </div>
      </Reveal>

      {/* Separator */}
      <div className={`h-px w-full bg-gradient-to-r from-transparent ${colors.separator} to-transparent`} />

      {/* ── Main grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left — main content */}
        <div className="lg:col-span-2 space-y-6">

          {/* Acquis d'apprentissage */}
          {apprentissages.length > 0 && (
            <Reveal delay={80}>
              <div className={`p-6 rounded-xl border ${colors.border} ${colors.bg} space-y-4`}>
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg border shrink-0 ${colors.icon}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-slate-100">Acquis d'apprentissage</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Ce que j'ai concrètement appris</p>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {apprentissages.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckIcon className={colors.check} />
                      <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          {/* Critères d'évaluation BUT */}
          <Reveal delay={160}>
            <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/50 space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg border border-slate-700 bg-slate-800/60 text-slate-400 shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-base font-semibold text-slate-100">Critères d'évaluation BUT</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Référentiel officiel du programme</p>
                </div>
              </div>
              <ol className="space-y-3">
                {competence.criteres.map((critere, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold font-mono mt-0.5 ${colors.number}`}>
                      {i + 1}
                    </span>
                    <span className="text-sm text-slate-400 leading-relaxed">{critere}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          {/* Traces & Preuves */}
          {relatedProjects.length > 0 && (
            <Reveal delay={240}>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg border border-slate-700 bg-slate-800/60 text-slate-400 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-slate-100">Traces & Preuves</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Projets réalisés qui illustrent cette compétence</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {relatedProjects.map((project) => (
                    <Link
                      key={project.id}
                      to={`/projects/${project.slug}`}
                      className="flex items-stretch bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 hover:-translate-y-0.5 transition-all duration-200 group"
                    >
                      <div className="w-28 shrink-0 relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/40" />
                      </div>
                      <div className="flex-1 p-4 space-y-2 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-semibold text-slate-100 text-sm group-hover:text-violet-300 transition-colors truncate">{project.title}</p>
                          <svg className="w-4 h-4 shrink-0 text-slate-600 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{project.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {project.tags.slice(0, 4).map((tag) => (
                            <Badge key={tag} color="slate">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          {/* Analyse réflexive */}
          <Reveal delay={320}>
            <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30 space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg border border-slate-700 bg-slate-800/60 text-slate-400 shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-base font-semibold text-slate-100">Analyse réflexive</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Mon regard critique sur cette compétence</p>
                </div>
              </div>
              <div className={`p-4 rounded-lg border ${colors.border} ${colors.bg}`}>
                <p className="text-sm text-slate-500 italic leading-relaxed">
                  Cette section sera complétée avec une analyse personnelle : points forts identifiés,
                  difficultés rencontrées, axes d'amélioration et objectifs pour la suite de la formation.
                </p>
              </div>
            </div>
          </Reveal>

        </div>

        {/* ── Sidebar ── */}
        <Reveal as="aside" className="space-y-5" delay={100}>

          {/* Auto-évaluation */}
          <div className={`p-5 rounded-xl border ${colors.border} ${colors.bg} space-y-5`}>
            <div>
              <h3 className={`text-xs font-semibold uppercase tracking-widest ${colors.accent}`}>Auto-évaluation</h3>
              <p className="text-xs text-slate-500 mt-1">Niveau estimé en fin de semestre</p>
            </div>

            {/* Level segments */}
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  className={`flex-1 h-2 rounded-full ${n <= niveauScore ? colors.bar : 'bg-slate-800'}`}
                />
              ))}
            </div>

            {/* Label + score */}
            <div className="flex items-end justify-between">
              <div>
                <p className={`text-lg font-bold ${colors.accent}`}>{niveauLabel}</p>
                <p className="text-xs text-slate-600 mt-0.5">Niveau {niveauScore} sur 5</p>
              </div>
              <span className={`text-3xl font-black font-mono ${colors.accent} opacity-20 leading-none`}>
                {niveauScore}/5
              </span>
            </div>

            {/* Per-critère detail */}
            <div className="space-y-2.5 pt-1 border-t border-slate-800/80">
              <p className="text-xs text-slate-600 font-medium">Détail par critère</p>
              {competence.criteres.map((critere, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-[11px] text-slate-500 leading-tight line-clamp-1 flex-1">{critere}</span>
                    <span className={`text-[10px] font-mono shrink-0 ${colors.accent}`}>
                      {i < niveauScore ? '✓' : '…'}
                    </span>
                  </div>
                  <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${colors.bar}`}
                      style={{ width: `${i < niveauScore ? 60 + (i * 12) : 20 + (i * 8)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Informations BUT */}
          <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/50 space-y-3">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Informations</h3>
            <dl className="space-y-2.5">
              <div className="flex items-center justify-between text-sm">
                <dt className="text-slate-500">Référence</dt>
                <dd className={`font-mono font-semibold ${colors.accent}`}>C{String(competence.id).padStart(2, '0')}</dd>
              </div>
              <div className="flex items-center justify-between text-sm">
                <dt className="text-slate-500">Année</dt>
                <dd className="text-slate-300">BUT 2ème année</dd>
              </div>
              <div className="flex items-center justify-between text-sm">
                <dt className="text-slate-500">Statut</dt>
                <dd className="flex items-center gap-1.5 text-yellow-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                  En cours
                </dd>
              </div>
              <div className="flex items-center justify-between text-sm">
                <dt className="text-slate-500">Projets liés</dt>
                <dd className="text-slate-300">{relatedProjects.length}</dd>
              </div>
              <div className="flex items-center justify-between text-sm">
                <dt className="text-slate-500">Acquis</dt>
                <dd className="text-slate-300">{apprentissages.length}</dd>
              </div>
            </dl>
          </div>

          {/* Autres compétences */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Toutes les compétences</h3>
            <div className="space-y-1">
              {competences.map((c) => {
                const isActive = c.slug === competence.slug
                const cColors = colorMap[c.color] ?? colorMap.violet
                return (
                  <Link
                    key={c.slug}
                    to={`/competences/${c.slug}`}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                      isActive
                        ? `${cColors.bg} ${cColors.accent} font-medium`
                        : 'text-slate-500 hover:text-slate-200 hover:bg-slate-800/60'
                    }`}
                  >
                    <span className="text-xs font-mono text-slate-600">{String(c.id).padStart(2, '0')}</span>
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${cColors.dot} ${isActive ? 'opacity-100' : 'opacity-40'}`} />
                    {c.title}
                  </Link>
                )
              })}
            </div>
          </div>

        </Reveal>
      </div>

      {/* ── Navigation prev/next ── */}
      <Reveal className="flex items-center justify-between pt-8 border-t border-slate-800">
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
      </Reveal>

    </div>
  )
}
