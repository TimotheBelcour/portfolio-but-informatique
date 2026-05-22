import { useParams, Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { projects } from '../data/projects'
import { competences as allCompetences } from '../data/competences'
import Reveal from '../components/ui/Reveal'

/* ── Mapping couleurs par technologie ──────────────────────── */

const techColorMap = {
  PHP:          'violet',
  MySQL:        'blue',
  'HTML/CSS':   'orange',
  HTTPS:        'green',
  Flutter:      'violet',
  Dart:         'blue',
  'API REST':   'green',
  Android:      'green',
  Docker:       'blue',
  Postman:      'orange',
  Linux:        'slate',
  VR:           'pink',
  AR:           'pink',
  Recherche:    'slate',
  Présentation: 'violet',
  Python:       'yellow',
  React:        'blue',
  JavaScript:   'yellow',
}

const dotColor = {
  violet: 'bg-violet-400',
  blue:   'bg-blue-400',
  green:  'bg-green-400',
  orange: 'bg-orange-400',
  yellow: 'bg-yellow-400',
  pink:   'bg-pink-400',
  slate:  'bg-slate-500',
}

const badgeColor = {
  violet: 'bg-violet-500/10 text-violet-300 border-violet-500/25',
  blue:   'bg-blue-500/10   text-blue-300   border-blue-500/25',
  green:  'bg-green-500/10  text-green-300  border-green-500/25',
  orange: 'bg-orange-500/10 text-orange-300 border-orange-500/25',
  yellow: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/25',
  pink:   'bg-pink-500/10   text-pink-300   border-pink-500/25',
  slate:  'bg-slate-800/70  text-slate-300  border-slate-700/60',
}

/* ── Composant badge technologie ───────────────────────────── */

function TechBadge({ name }) {
  const color  = techColorMap[name] ?? 'slate'
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border ${badgeColor[color]}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColor[color]}`} />
      {name}
    </span>
  )
}

/* ── Carte navigation projet ───────────────────────────────── */

function ProjectNavCard({ project: p, direction }) {
  const isPrev = direction === 'prev'
  return (
    <Link
      to={`/projects/${p.slug}`}
      className={`group flex flex-col gap-2 p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-violet-500/30 hover:shadow-[0_4px_24px_rgba(139,92,246,0.1)] hover:-translate-y-0.5 transition-all duration-300 ${!isPrev ? 'items-end text-right' : ''}`}
    >
      <div className={`flex items-center gap-1.5 text-xs text-slate-500 ${!isPrev ? 'flex-row-reverse' : ''}`}>
        {isPrev ? (
          <svg className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        )}
        {isPrev ? 'Projet précédent' : 'Projet suivant'}
      </div>
      <p className="text-sm font-semibold text-slate-200 group-hover:text-violet-300 transition-colors leading-snug">
        {p.title}
      </p>
      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
        {p.description}
      </p>
    </Link>
  )
}

/* ── Page principale ───────────────────────────────────────── */

export default function ProjectDetail() {
  const { slug } = useParams()
  const project   = projects.find((p) => p.slug === slug)
  const [activeImage, setActiveImage] = useState(0)

  if (!project) return <Navigate to="/projects" replace />

  const linkedCompetences = allCompetences.filter((c) =>
    project.competences.includes(c.slug)
  )
  const idx         = projects.findIndex((p) => p.slug === slug)
  const prevProject = projects[idx - 1]
  const nextProject = projects[idx + 1]
  const hasGallery  = project.gallery && project.gallery.length > 1

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-14">

      {/* ════ Hero ══════════════════════════════════════════ */}
      <Reveal as="header" className="relative">

        {/* Glow ambiant */}
        <div
          className="absolute pointer-events-none"
          style={{
            inset: '-80px -60px',
            background: [
              'radial-gradient(ellipse 55% 50% at 10% 50%, rgba(139,92,246,0.14) 0%, transparent 70%)',
              'radial-gradient(ellipse 40% 35% at 80% 20%, rgba(96,165,250,0.07) 0%, transparent 65%)',
            ].join(', '),
          }}
        />

        {/* Breadcrumb */}
        <nav className="relative flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 hover:text-slate-200 transition-colors duration-200 group"
          >
            <svg
              className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Projets
          </Link>
          <svg className="w-3 h-3 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-slate-400 font-medium">{project.title}</span>
        </nav>

        {/* Statut + Titre + Description */}
        <div className="relative space-y-5">
          <span className="inline-flex items-center gap-1.5 text-xs text-green-400 bg-green-400/10 border border-green-400/20 px-3 py-1 rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            {project.status}
          </span>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
            style={{
              background: 'linear-gradient(to right, #ffffff 0%, #e2e8f0 40%, #c4b5fd 75%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {project.title}
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* Badges technologies dans le hero */}
        <div className="relative flex flex-wrap gap-2 mt-6">
          {project.tags.map((tag) => (
            <TechBadge key={tag} name={tag} />
          ))}
        </div>
      </Reveal>

      {/* ════ Image principale + galerie ════════════════════ */}
      <Reveal delay={80}>
        <div className="space-y-3">

          {/* Image principale */}
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-700/40 shadow-[0_20px_60px_rgba(0,0,0,0.6)] bg-slate-900">
            <img
              key={activeImage}
              src={project.gallery[activeImage]}
              alt={`${project.title} — capture ${activeImage + 1}`}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            {/* Overlay dégradé bas */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

            {/* Compteur si galerie */}
            {hasGallery && (
              <div className="absolute bottom-3 right-3 text-xs text-slate-300 bg-slate-950/70 backdrop-blur-sm border border-slate-700/50 px-2.5 py-1 rounded-full font-mono">
                {activeImage + 1} / {project.gallery.length}
              </div>
            )}
          </div>

          {/* Thumbnails galerie */}
          {hasGallery && (
            <div className="flex gap-2.5 overflow-x-auto pb-1">
              {project.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className="relative shrink-0 w-24 h-16 sm:w-28 sm:h-[4.5rem] rounded-lg overflow-hidden transition-all duration-200 focus:outline-none"
                >
                  <img
                    src={img}
                    alt={`Miniature ${i + 1}`}
                    className={`w-full h-full object-cover transition-all duration-200 ${
                      activeImage === i ? 'brightness-100' : 'brightness-50 hover:brightness-75'
                    }`}
                  />
                  {activeImage === i && (
                    <div className="absolute inset-0 border-2 border-violet-500 rounded-lg pointer-events-none shadow-[inset_0_0_0_1px_rgba(139,92,246,0.3)]" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </Reveal>

      {/* ════ Contenu — grille 3 colonnes ═══════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ── Fonctionnalités (col 1-2) ── */}
        <Reveal className="lg:col-span-2">
          <div className="h-full bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-slate-100">
                Fonctionnalités & apprentissages
              </h2>
            </div>

            <ul className="space-y-3.5">
              {project.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-violet-500/10 border border-violet-500/25 flex items-center justify-center">
                    <svg className="w-3 h-3 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-sm text-slate-400 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* ── Sidebar ── */}
        <aside className="space-y-4">

          {/* Technologies */}
          <Reveal delay={100}>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                </div>
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  Technologies
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <TechBadge key={tag} name={tag} />
                ))}
              </div>
            </div>
          </Reveal>

          {/* Compétences BUT */}
          <Reveal delay={180}>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  Compétences BUT
                </h3>
              </div>
              <div className="space-y-2">
                {linkedCompetences.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/competences/${c.slug}`}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-violet-500/30 transition-all duration-200 group"
                  >
                    <span className="text-xs font-mono text-slate-600 group-hover:text-slate-500 w-5 shrink-0">
                      {String(c.id).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-slate-300 group-hover:text-violet-300 font-medium transition-colors flex-1 leading-snug">
                      {c.title}
                    </span>
                    <svg
                      className="w-3.5 h-3.5 text-slate-600 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all duration-200 shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

        </aside>
      </div>

      {/* ════ Navigation entre projets ═══════════════════════ */}
      <Reveal>
        <div className="space-y-5 pt-10 border-t border-slate-800/80">

          {/* Bouton retour */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-100 transition-colors duration-200 group"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux projets
          </Link>

          {/* Cartes prev / next */}
          {(prevProject || nextProject) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevProject
                ? <ProjectNavCard project={prevProject} direction="prev" />
                : <div />
              }
              {nextProject && (
                <ProjectNavCard project={nextProject} direction="next" />
              )}
            </div>
          )}

        </div>
      </Reveal>

    </div>
  )
}
