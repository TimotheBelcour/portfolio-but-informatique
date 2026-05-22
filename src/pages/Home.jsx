import { Link } from 'react-router-dom'
import { competences } from '../data/competences'

const colorAccent = {
  violet: 'group-hover:text-violet-400',
  blue:   'group-hover:text-blue-400',
  green:  'group-hover:text-green-400',
  orange: 'group-hover:text-orange-400',
  yellow: 'group-hover:text-yellow-400',
  pink:   'group-hover:text-pink-400',
}

const cardHover = {
  violet: 'hover:border-violet-500/30 hover:shadow-[0_4px_28px_rgba(139,92,246,0.12)]',
  blue:   'hover:border-blue-500/30   hover:shadow-[0_4px_28px_rgba(96,165,250,0.12)]',
  green:  'hover:border-green-500/30  hover:shadow-[0_4px_28px_rgba(34,197,94,0.12)]',
  orange: 'hover:border-orange-500/30 hover:shadow-[0_4px_28px_rgba(249,115,22,0.12)]',
  yellow: 'hover:border-yellow-500/30 hover:shadow-[0_4px_28px_rgba(234,179,8,0.12)]',
  pink:   'hover:border-pink-500/30   hover:shadow-[0_4px_28px_rgba(236,72,153,0.12)]',
}

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 space-y-32">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative">
        {/* Glow ambiant derrière le hero */}
        <div
          className="absolute pointer-events-none"
          style={{
            inset: '-80px -60px',
            background:
              'radial-gradient(ellipse 65% 55% at 20% 50%, rgba(139,92,246,0.13) 0%, rgba(96,165,250,0.06) 55%, transparent 80%)',
          }}
        />

        <div className="relative flex flex-col lg:flex-row lg:items-center lg:gap-16">

          {/* Colonne texte */}
          <div className="flex-1 space-y-8">

            {/* Pill statut */}
            <div className="fade-in inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-900 border border-slate-700/70 rounded-full px-4 py-1.5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              BUT Informatique — 2ème année
            </div>

            {/* Titre + sous-titre */}
            <div className="space-y-3 fade-in-up delay-100">
              <h1
                className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight"
                style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 40%, #ddd6fe 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Timothé Belcour
              </h1>
              <p className="text-2xl sm:text-3xl font-medium text-violet-400">
                Développeur en formation
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed fade-in-up delay-200">
              Étudiant en 2ème année de BUT Informatique, je construis ce portfolio pour
              documenter mes apprentissages, mes projets et les compétences acquises au fil
              de ma formation.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 fade-in-up delay-300">
              <Link
                to="/projects"
                className="btn-glow inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-lg"
              >
                Voir mes projets
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-100 text-sm font-medium rounded-lg border border-slate-700 hover:border-slate-600 transition-all duration-200"
              >
                À propos de moi
              </Link>
            </div>
          </div>

          {/* Photo de profil */}
          <div className="fade-in delay-400 flex-shrink-0 flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative">
              {/* Glow conic derrière la photo */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  inset: '-18px',
                  background:
                    'conic-gradient(from 180deg at 50% 50%, rgba(139,92,246,0.45) 0deg, rgba(96,165,250,0.3) 120deg, rgba(167,139,250,0.4) 240deg, rgba(139,92,246,0.45) 360deg)',
                  filter: 'blur(22px)',
                  opacity: 0.55,
                }}
              />
              {/* Anneau gradient */}
              <div className="relative p-[2.5px] rounded-full bg-gradient-to-br from-violet-400 via-blue-400 to-violet-600">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden bg-slate-800">
                  <img
                    src="/images/profile.png"
                    alt="Timothé Belcour"
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
              </div>
              {/* Pastille online */}
              <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-green-400 border-[3px] border-slate-950 shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
            </div>
          </div>

        </div>
      </section>

      {/* ── Compétences ──────────────────────────────────────── */}
      <section className="space-y-8 fade-in-up delay-500">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-slate-100">6 Compétences BUT</h2>
          <p className="text-slate-500 text-sm">Le référentiel national du BUT Informatique</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {competences.map((c) => (
            <Link
              key={c.slug}
              to={`/competences/${c.slug}`}
              className={`group p-5 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800/50 transition-all duration-300 ${cardHover[c.color]}`}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-slate-800 group-hover:text-slate-700 transition-colors duration-300 font-mono leading-none mt-0.5 select-none">
                  {String(c.id).padStart(2, '0')}
                </span>
                <div className="space-y-1.5 min-w-0">
                  <h3 className={`font-semibold text-slate-200 transition-colors duration-200 ${colorAccent[c.color]}`}>
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
