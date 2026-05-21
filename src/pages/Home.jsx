import { Link } from 'react-router-dom'
import { competences } from '../data/competences'

const colorAccent = {
  violet: 'group-hover:text-violet-400',
  blue: 'group-hover:text-blue-400',
  green: 'group-hover:text-green-400',
  orange: 'group-hover:text-orange-400',
  yellow: 'group-hover:text-yellow-400',
  pink: 'group-hover:text-pink-400',
}

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 space-y-28">
      {/* Hero */}
      <section className="space-y-7">
        <div className="inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-900 border border-slate-800 rounded-full px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          BUT Informatique — 2ème année
        </div>

        <div className="space-y-3">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-100 leading-tight tracking-tight">
            Timothé Belcour
          </h1>
          <p className="text-2xl sm:text-3xl font-medium text-violet-400">
            Développeur en formation
          </p>
        </div>

        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
          Étudiant en 2ème année de BUT Informatique, je construis ce portfolio pour
          documenter mes apprentissages, mes projets et les compétences acquises au fil
          de ma formation.
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            Voir mes projets
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-100 text-sm font-medium rounded-lg border border-slate-700 hover:border-slate-600 transition-colors duration-200"
          >
            À propos de moi
          </Link>
        </div>
      </section>

      {/* Compétences */}
      <section className="space-y-8">
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-slate-100">6 Compétences BUT</h2>
            <p className="text-slate-500 text-sm">Le référentiel national du BUT Informatique</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {competences.map((c) => (
            <Link
              key={c.slug}
              to={`/competences/${c.slug}`}
              className="group p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-700 hover:bg-slate-800/60 transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-slate-800 group-hover:text-slate-700 transition-colors font-mono">
                  {String(c.id).padStart(2, '0')}
                </span>
                <div className="space-y-1.5 min-w-0">
                  <h3 className={`font-semibold text-slate-200 transition-colors ${colorAccent[c.color]}`}>
                    {c.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {c.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
