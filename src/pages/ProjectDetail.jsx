import { useParams, Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { projects } from '../data/projects'
import { competences as allCompetences } from '../data/competences'
import TechBadge from '../components/ui/TechBadge'
import Reveal from '../components/ui/Reveal'

/* ── Icônes ──────────────────────────────────────────────────────── */
function IconCheck() {
  return (
    <svg className="w-3 h-3 text-violet-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}
function IconWarning() {
  return (
    <svg className="w-3 h-3 text-orange-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  )
}
function IconLightbulb() {
  return (
    <svg className="w-3 h-3 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  )
}
function IconStar() {
  return (
    <svg className="w-3 h-3 text-yellow-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  )
}

/* ── En-tête de section numérotée ────────────────────────────────── */
const sectionColors = {
  violet: 'text-violet-400 bg-violet-500/10 border-violet-500/25',
  blue:   'text-blue-400   bg-blue-500/10   border-blue-500/25',
  orange: 'text-orange-400 bg-orange-500/10 border-orange-500/25',
  yellow: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/25',
  green:  'text-green-400  bg-green-500/10  border-green-500/25',
}

function SectionHeader({ number, title, color = 'violet' }) {
  const cls = sectionColors[color] ?? sectionColors.violet
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className={`w-7 h-7 rounded-lg border text-[11px] font-bold font-mono flex items-center justify-center shrink-0 ${cls}`}>
        {String(number).padStart(2, '0')}
      </span>
      <h2 className="text-sm font-semibold text-slate-200 tracking-wide">{title}</h2>
    </div>
  )
}

/* ── Carte de navigation entre projets ───────────────────────────── */
function ProjectNavCard({ project: p, direction }) {
  const isPrev = direction === 'prev'
  return (
    <Link
      to={`/projects/${p.slug}`}
      className="group flex items-stretch bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-violet-500/30 hover:shadow-[0_4px_24px_rgba(139,92,246,0.1)] hover:-translate-y-0.5 transition-all duration-300"
    >
      {isPrev && (
        <div className="w-20 shrink-0 overflow-hidden">
          <img src={p.image} alt={p.title} className="w-full h-full object-cover brightness-50 group-hover:brightness-75 group-hover:scale-105 transition-all duration-300" />
        </div>
      )}
      <div className={`flex-1 flex flex-col justify-center gap-1 p-4 min-w-0 ${!isPrev ? 'items-end text-right' : ''}`}>
        <div className={`flex items-center gap-1.5 text-xs text-slate-500 ${!isPrev ? 'justify-end' : ''}`}>
          {isPrev && (
            <svg className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          )}
          <span>{isPrev ? 'Projet précédent' : 'Projet suivant'}</span>
          {!isPrev && (
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          )}
        </div>
        <p className="text-sm font-bold text-slate-200 group-hover:text-violet-300 transition-colors leading-snug truncate">{p.title}</p>
        {p.type && (
          <span className="text-[10px] font-mono text-slate-600 uppercase tracking-wider">{p.type} · {p.year}</span>
        )}
      </div>
      {!isPrev && (
        <div className="w-20 shrink-0 overflow-hidden">
          <img src={p.image} alt={p.title} className="w-full h-full object-cover brightness-50 group-hover:brightness-75 group-hover:scale-105 transition-all duration-300" />
        </div>
      )}
    </Link>
  )
}

/* ── Page principale ─────────────────────────────────────────────── */
export default function ProjectDetail() {
  const { slug } = useParams()
  const project  = projects.find((p) => p.slug === slug)
  const [activeImage, setActiveImage]   = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  if (!project) return <Navigate to="/projects" replace />

  const linkedCompetences = allCompetences.filter((c) => project.competences.includes(c.slug))
  const idx         = projects.findIndex((p) => p.slug === slug)
  const prevProject = projects[idx - 1]
  const nextProject = projects[idx + 1]
  const hasGallery  = project.gallery && project.gallery.length > 1

  const metaStats = [
    {
      label: 'Durée',
      value: project.duration ?? '—',
      icon: (
        <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      label: 'Équipe',
      value: project.team ?? 'Solo',
      icon: (
        <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
    },
    {
      label: 'Technologies',
      value: project.tags?.length ? `${project.tags.length} technologies` : '—',
      icon: (
        <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      label: 'Compétences BUT',
      value: project.competences?.length ? `${project.competences.length} compétences BUT` : '—',
      icon: (
        <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

      {/* ── Lightbox ──────────────────────────────────────────── */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/96 backdrop-blur-md p-4 sm:p-10"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
            onClick={() => setLightboxOpen(false)}
            aria-label="Fermer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={project.gallery[activeImage]}
            alt={`${project.title} — capture ${activeImage + 1}`}
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          {/* Navigation lightbox */}
          {hasGallery && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {project.gallery.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setActiveImage(i) }}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${i === activeImage ? 'bg-violet-400 scale-125' : 'bg-slate-600 hover:bg-slate-400'}`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      <div className="space-y-10 sm:space-y-14">

        {/* ════ Hero ════════════════════════════════════════════ */}
        <Reveal as="header" className="relative">
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
            <Link to="/projects" className="inline-flex items-center gap-1.5 hover:text-slate-200 transition-colors duration-200 group">
              <svg className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Projets
            </Link>
            <svg className="w-3 h-3 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-slate-400 font-medium">{project.title}</span>
          </nav>

          {/* Pills */}
          <div className="relative flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 text-xs text-green-400 bg-green-400/10 border border-green-400/20 px-3 py-1 rounded-full font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {project.status}
            </span>
            {project.type && (
              <span className="text-xs font-mono text-slate-500 bg-slate-800/60 border border-slate-700/50 px-2.5 py-1 rounded-full">
                {project.type}
              </span>
            )}
            {project.year && (
              <span className="text-xs font-mono text-slate-600 bg-slate-800/60 border border-slate-700/50 px-2.5 py-1 rounded-full">
                {project.year}
              </span>
            )}
          </div>

          {/* Titre */}
          <h1
            className="relative text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4"
            style={{
              background: 'linear-gradient(to right, #ffffff 0%, #e2e8f0 40%, #c4b5fd 75%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {project.title}
          </h1>

          <p className="relative text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </Reveal>

        {/* ════ Galerie ════════════════════════════════════════ */}
        <Reveal delay={80}>
          <div className="space-y-3">
            {/* Image principale — zoom au hover, lightbox au clic */}
            <div
              className="relative aspect-video rounded-2xl overflow-hidden border border-slate-700/40 shadow-[0_20px_60px_rgba(0,0,0,0.6)] bg-slate-900 cursor-zoom-in group/gallery"
              onClick={() => setLightboxOpen(true)}
            >
              <img
                key={activeImage}
                src={project.gallery[activeImage]}
                alt={`${project.title} — capture ${activeImage + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/gallery:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

              {/* Hint zoom */}
              <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-[10px] text-slate-400 bg-slate-950/70 backdrop-blur-sm border border-slate-700/50 px-2.5 py-1 rounded-full font-mono opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-200">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                </svg>
                Agrandir
              </div>

              {/* Compteur */}
              {hasGallery && (
                <div className="absolute bottom-3 right-3 text-xs text-slate-300 bg-slate-950/70 backdrop-blur-sm border border-slate-700/50 px-2.5 py-1 rounded-full font-mono">
                  {activeImage + 1} / {project.gallery.length}
                </div>
              )}

              {/* Flèches */}
              {hasGallery && activeImage > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setActiveImage(activeImage - 1) }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/70 border border-slate-700/50 backdrop-blur-sm flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              {hasGallery && activeImage < project.gallery.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setActiveImage(activeImage + 1) }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/70 border border-slate-700/50 backdrop-blur-sm flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>

            {/* Thumbnails */}
            {hasGallery && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {project.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-lg overflow-hidden transition-all duration-200 focus:outline-none ring-offset-slate-950 ${
                      activeImage === i
                        ? 'ring-2 ring-violet-500 ring-offset-2 scale-[1.05]'
                        : 'opacity-50 hover:opacity-75 hover:scale-[1.02]'
                    }`}
                  >
                    <img src={img} alt={`Miniature ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </Reveal>

        {/* ════ Barre de stats crédibles ════════════════════════ */}
        <Reveal delay={60}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {metaStats.map(({ label, value, icon }) => (
              <div key={label} className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center">
                  {icon}
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-0.5">{label}</p>
                  <p className="text-sm font-semibold text-slate-200">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ════ Case study — grille principale ═════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

          {/* ── Colonne principale ── */}
          <div className="lg:col-span-2 space-y-5">

            {/* 01 — Contexte */}
            {project.context && (
              <Reveal>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 sm:p-6">
                  <SectionHeader number={1} title="Contexte du projet" color="violet" />
                  <p className="text-sm text-slate-400 leading-relaxed">{project.context}</p>
                </div>
              </Reveal>
            )}

            {/* 02 — Objectifs */}
            {project.objectives?.length > 0 && (
              <Reveal>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 sm:p-6">
                  <SectionHeader number={2} title="Objectifs" color="blue" />
                  <ul className="space-y-2.5">
                    {project.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="shrink-0 w-5 h-5 mt-0.5 rounded-full bg-blue-500/10 border border-blue-500/25 flex items-center justify-center">
                          <span className="text-[9px] font-bold font-mono text-blue-400">{i + 1}</span>
                        </span>
                        <span className="text-sm text-slate-400 leading-relaxed">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}

            {/* 03 — Fonctionnalités principales */}
            <Reveal>
              <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2.5 px-5 py-4 border-b border-slate-800">
                  <span className={`w-7 h-7 rounded-lg border text-[11px] font-bold font-mono flex items-center justify-center shrink-0 ${sectionColors.violet}`}>
                    03
                  </span>
                  <div>
                    <h2 className="text-sm font-semibold text-slate-200 tracking-wide">Fonctionnalités principales</h2>
                    <p className="text-xs text-slate-500 mt-0.5">{project.highlights.length} points clés</p>
                  </div>
                </div>
                <ul className="divide-y divide-slate-800/60">
                  {project.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 px-5 py-3.5 group/item hover:bg-slate-800/30 transition-colors duration-150">
                      <span className="shrink-0 w-5 h-5 mt-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover/item:bg-violet-500/15 transition-colors">
                        <IconCheck />
                      </span>
                      <span className="text-sm text-slate-400 leading-relaxed group-hover/item:text-slate-300 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* 04 & 05 — Difficultés & Solutions */}
            {(project.difficulties?.length > 0 || project.solutions?.length > 0) && (
              <Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.difficulties?.length > 0 && (
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                      <SectionHeader number={4} title="Difficultés" color="orange" />
                      <ul className="space-y-2.5">
                        {project.difficulties.map((d, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="shrink-0 w-5 h-5 mt-0.5 rounded bg-orange-500/10 border border-orange-500/25 flex items-center justify-center">
                              <IconWarning />
                            </span>
                            <span className="text-sm text-slate-400 leading-relaxed">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.solutions?.length > 0 && (
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                      <SectionHeader number={5} title="Solutions apportées" color="blue" />
                      <ul className="space-y-2.5">
                        {project.solutions.map((s, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="shrink-0 w-5 h-5 mt-0.5 rounded bg-blue-500/10 border border-blue-500/25 flex items-center justify-center">
                              <IconLightbulb />
                            </span>
                            <span className="text-sm text-slate-400 leading-relaxed">{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Reveal>
            )}

            {/* 06 — Ce que j'ai appris */}
            {project.learned?.length > 0 && (
              <Reveal>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 sm:p-6">
                  <SectionHeader number={6} title="Ce que j'ai appris" color="yellow" />
                  <ul className="space-y-2.5">
                    {project.learned.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="shrink-0 w-5 h-5 mt-0.5 rounded bg-yellow-500/10 border border-yellow-500/25 flex items-center justify-center">
                          <IconStar />
                        </span>
                        <span className="text-sm text-slate-400 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}

            {/* 07 — Résultat final */}
            {project.result && (
              <Reveal>
                <div className="relative bg-slate-900 border border-slate-800 rounded-xl p-5 sm:p-6 overflow-hidden">
                  {/* Barre d'accent verte à gauche */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400/70 via-green-500/30 to-transparent" />
                  <SectionHeader number={7} title="Résultat final" color="green" />
                  <p className="text-sm text-slate-300 leading-relaxed">{project.result}</p>
                </div>
              </Reveal>
            )}

          </div>

          {/* ── Sidebar ── */}
          <aside className="space-y-4">

            {/* Infos projet */}
            <Reveal fadeOnly>
              <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 sm:px-5 py-3.5 border-b border-slate-800">
                  <div className="w-6 h-6 rounded-md bg-slate-800 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                  </div>
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Infos projet</h3>
                </div>
                <dl className="divide-y divide-slate-800/60">
                  {[
                    { label: 'Type',   value: project.type },
                    { label: 'Année',  value: project.year },
                    { label: 'Durée',  value: project.duration },
                    { label: 'Équipe', value: project.team },
                    { label: 'Statut', value: project.status },
                  ].filter((item) => item.value).map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between px-4 sm:px-5 py-3 gap-2">
                      <dt className="text-xs text-slate-500 shrink-0">{label}</dt>
                      <dd className="text-xs font-medium text-slate-300 text-right">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            {/* Technologies */}
            <Reveal delay={80} fadeOnly>
              <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 sm:px-5 py-3.5 border-b border-slate-800">
                  <div className="w-6 h-6 rounded-md bg-slate-800 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  </div>
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-2 p-4 sm:p-5">
                  {project.tags.map((tag) => <TechBadge key={tag} name={tag} />)}
                </div>
              </div>
            </Reveal>

            {/* Compétences BUT */}
            <Reveal delay={160} fadeOnly>
              <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 sm:px-5 py-3.5 border-b border-slate-800">
                  <div className="w-6 h-6 rounded-md bg-slate-800 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Compétences BUT</h3>
                </div>
                <div className="p-3">
                  {linkedCompetences.map((c) => (
                    <Link
                      key={c.slug}
                      to={`/competences/${c.slug}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/60 border border-transparent hover:border-violet-500/20 transition-all duration-200 group"
                    >
                      <span className="text-xs font-mono text-slate-600 group-hover:text-slate-500 w-5 shrink-0">
                        {String(c.id).padStart(2, '0')}
                      </span>
                      <span className="text-sm text-slate-300 group-hover:text-violet-300 font-medium transition-colors flex-1 leading-snug">
                        {c.title}
                      </span>
                      <svg className="w-3.5 h-3.5 text-slate-700 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all duration-200 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>

          </aside>
        </div>

        {/* ════ Navigation entre projets ════════════════════════ */}
        <Reveal>
          <div className="space-y-5 pt-10 border-t border-slate-800/80">
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-100 transition-colors duration-200 group">
              <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Retour aux projets
            </Link>
            {(prevProject || nextProject) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prevProject ? <ProjectNavCard project={prevProject} direction="prev" /> : <div />}
                {nextProject && <ProjectNavCard project={nextProject} direction="next" />}
              </div>
            )}
          </div>
        </Reveal>

      </div>
    </div>
  )
}
