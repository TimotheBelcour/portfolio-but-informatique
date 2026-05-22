import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { competences } from '../data/competences'
import Reveal from '../components/ui/Reveal'

/* ── Constantes ────────────────────────────────────────────── */

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

const stats = [
  { value: '4',    label: 'Projets réalisés'  },
  { value: '6',    label: 'Compétences BUT'   },
  { value: '2ème', label: 'année BUT Info'    },
]

const techStack = ['React', 'PHP', 'Docker', 'Flutter', 'Python', 'SQL']

/* ── Carte flottante autour de la photo (desktop only) ─────── */

function FloatingCard({ className, letter, label, letterClass, borderColor, bgColor }) {
  return (
    <div
      className={`
        absolute hidden lg:flex items-center gap-2 px-3 py-2
        bg-slate-950/90 border ${borderColor} rounded-xl
        backdrop-blur-sm shadow-xl shadow-black/30
        ${className}
      `}
    >
      <div className={`w-6 h-6 rounded-md ${bgColor} flex items-center justify-center flex-shrink-0`}>
        <span className={`text-[11px] font-bold ${letterClass}`}>{letter}</span>
      </div>
      <span className="text-xs text-slate-200 font-semibold whitespace-nowrap">{label}</span>
    </div>
  )
}

/* ── Page ───────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 space-y-32">

      {/* ════ Hero ════════════════════════════════════════════ */}
      <section className="relative">

        {/* Glow ambiant dual */}
        <div
          className="absolute pointer-events-none"
          style={{
            inset: '-100px -80px',
            background: [
              'radial-gradient(ellipse 60% 55% at 15% 55%, rgba(139,92,246,0.18) 0%, transparent 70%)',
              'radial-gradient(ellipse 45% 40% at 82% 15%, rgba(96,165,250,0.10) 0%, transparent 65%)',
            ].join(', '),
          }}
        />

        <div className="relative flex flex-col lg:flex-row lg:items-center lg:gap-12">

          {/* ── Colonne texte ─────────────────────────────────── */}
          <div className="flex-1 min-w-0 space-y-7">

            <div className="fade-in inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-900 border border-slate-700/70 rounded-full px-4 py-1.5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              BUT Informatique — 2ème année
            </div>

            <div className="space-y-2 fade-in-up delay-100">
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.06]"
                style={{
                  background: 'linear-gradient(to right, #ffffff 0%, #e2e8f0 35%, #c4b5fd 68%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Timothé<br />Belcour
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-violet-400 tracking-wide">
                Développeur en formation
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg fade-in-up delay-200">
              Étudiant en 2ème année de BUT Informatique, je construis ce portfolio pour
              documenter mes apprentissages, mes projets et les compétences acquises au fil
              de ma formation.
            </p>

            {/* Statistiques rapides */}
            <div className="flex items-center fade-in-up delay-300">
              {stats.map((s, i) => (
                <Fragment key={s.label}>
                  {i > 0 && <div className="self-stretch w-px bg-slate-800 mx-5 sm:mx-7" />}
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-white tabular-nums leading-none">
                      {s.value}
                    </div>
                    <div className="text-xs text-slate-500 mt-1 whitespace-nowrap">{s.label}</div>
                  </div>
                </Fragment>
              ))}
            </div>

            {/* Badges stack technique */}
            <div className="flex flex-wrap gap-2 fade-in-up delay-300">
              <span className="px-2.5 py-1 bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs rounded-lg font-semibold hover:bg-violet-500/15 hover:scale-105 transition-all duration-200 cursor-default">
                BUT Informatique
              </span>
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-slate-900 border border-slate-700/70 text-slate-300 text-xs rounded-lg font-medium hover:border-violet-500/40 hover:text-slate-100 hover:scale-105 transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 fade-in-up delay-400">
              <Link
                to="/projects"
                className="btn-glow inline-flex items-center gap-2.5 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-xl transition-colors duration-200"
              >
                Voir mes projets
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 text-slate-200 text-sm font-medium rounded-xl border border-slate-600/70 hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-200 active:scale-[0.97]"
              >
                À propos de moi
              </Link>
            </div>
          </div>

          {/* ── Colonne photo + cartes flottantes ─────────────── */}
          <div className="fade-in delay-500 flex-shrink-0 flex justify-center lg:justify-end mt-14 lg:mt-0">
            <div className="relative lg:p-10">

              <FloatingCard className="animate-float -top-2 -left-2"   letter="⚛" label="React"   letterClass="text-sky-400"    borderColor="border-sky-500/25"    bgColor="bg-sky-500/10" />
              <FloatingCard className="animate-float-slow -bottom-2 -right-2" letter="🐳" label="Docker"  letterClass="text-cyan-400"   borderColor="border-cyan-500/25"   bgColor="bg-cyan-500/10" />
              <FloatingCard className="animate-float-alt -bottom-2 -left-2"  letter="P"  label="PHP"     letterClass="text-violet-400" borderColor="border-violet-500/25" bgColor="bg-violet-500/10" />
              <FloatingCard className="animate-float-last -top-2 -right-2"   letter="F"  label="Flutter" letterClass="text-indigo-400" borderColor="border-indigo-500/25" bgColor="bg-indigo-500/10" />

              <div className="relative">
                <div
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    inset: '-20px',
                    background: 'conic-gradient(from 180deg at 50% 50%, rgba(139,92,246,0.5) 0deg, rgba(96,165,250,0.32) 120deg, rgba(167,139,250,0.45) 240deg, rgba(139,92,246,0.5) 360deg)',
                    filter: 'blur(26px)',
                    opacity: 0.52,
                  }}
                />
                <div className="relative p-[3px] rounded-full bg-gradient-to-br from-violet-400 via-blue-400 to-violet-600">
                  <div className="w-44 h-44 sm:w-52 sm:h-52 lg:w-56 lg:h-56 rounded-full overflow-hidden bg-slate-800">
                    <img
                      src="/images/profile.png"
                      alt="Timothé Belcour"
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>
                </div>
                <span className="absolute bottom-2.5 right-2.5 w-4 h-4 rounded-full bg-green-400 border-[3px] border-slate-950 shadow-[0_0_10px_rgba(74,222,128,0.7)]" />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ════ Compétences ══════════════════════════════════════ */}
      <section className="space-y-8">

        <Reveal>
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-slate-100">6 Compétences BUT</h2>
            <p className="text-slate-500 text-sm">Le référentiel national du BUT Informatique</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {competences.map((c, i) => (
            <Reveal key={c.slug} delay={i * 75} className="flex flex-col">
              <Link
                to={`/competences/${c.slug}`}
                className={`group flex-1 p-5 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800/50 hover:-translate-y-1 transition-all duration-300 ${cardHover[c.color]}`}
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
            </Reveal>
          ))}
        </div>

      </section>

    </div>
  )
}
