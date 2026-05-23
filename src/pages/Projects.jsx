import { useState, useMemo } from 'react'
import { projects, featuredProjects, otherProjects } from '../data/projects'
import ProjectCard from '../components/ui/ProjectCard'
import Reveal from '../components/ui/Reveal'

/* ── Labels lisibles pour chaque catégorie ─────────────────────── */
const CATEGORY_LABELS = {
  all:       'Tous',
  web:       'Web',
  mobile:    'Mobile',
  devops:    'DevOps',
  algo:      'Algorithmique',
  systeme:   'Système',
  reseau:    'Réseau',
  recherche: 'Recherche',
}

/* ── Icônes par catégorie (SVG inline) ─────────────────────────── */
const CATEGORY_ICONS = {
  all: (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  ),
  web: (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  mobile: (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" />
    </svg>
  ),
  devops: (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 014.5-4.5h13.5a4.5 4.5 0 014.5 4.5v.75" />
    </svg>
  ),
  algo: (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.745 3A23.933 23.933 0 003 12c0 3.183.62 6.22 1.745 9M19.255 3A23.933 23.933 0 0121 12c0 3.183-.62 6.22-1.745 9M8.25 8.885l1.444-.89a.75.75 0 011.105.402l2.402 7.206a.75.75 0 001.104.401l1.445-.889m-8.25.75l.213.09a1.687 1.687 0 002.062-.617l4.45-6.676a1.688 1.688 0 012.062-.618l.213.09" />
    </svg>
  ),
  systeme: (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  reseau: (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
    </svg>
  ),
  recherche: (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
}

/* ── Ordre des onglets ─────────────────────────────────────────── */
const TAB_ORDER = ['all', 'web', 'mobile', 'devops', 'algo', 'systeme', 'reseau', 'recherche']

/* ── Sous-titre de section ─────────────────────────────────────── */
function SectionDivider({ title, count }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest whitespace-nowrap">
        {title}
      </h2>
      <span className="text-[10px] font-mono text-slate-600 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded shrink-0">
        {count}
      </span>
      <div className="flex-1 h-px bg-slate-800" />
    </div>
  )
}

/* ── Page ──────────────────────────────────────────────────────── */
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')

  /* Projets filtrés selon la catégorie active */
  const filtered = useMemo(() => {
    if (activeCategory === 'all') return projects
    return projects.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const filteredFeatured = filtered.filter((p) => p.featured)
  const filteredOthers   = filtered.filter((p) => !p.featured)
  const showSections     = activeCategory === 'all'

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-10 sm:space-y-14">

      {/* ── Header ─────────────────────────────────────────────── */}
      <Reveal as="header" className="space-y-3">
        <h1 className="text-4xl font-bold text-slate-100">Projets</h1>
        <p className="text-slate-500 text-lg leading-relaxed">
          Réalisations académiques du BUT Informatique — {projects.length} projets
        </p>
      </Reveal>

      {/* ── Filtres par catégorie ───────────────────────────────── */}
      <Reveal delay={60}>
        <div className="flex flex-wrap gap-2">
          {TAB_ORDER.map((cat) => {
            const count  = cat === 'all' ? projects.length : projects.filter((p) => p.category === cat).length
            const active = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 ${
                  active
                    ? 'bg-violet-500/15 text-violet-300 border-violet-500/40 shadow-[0_0_12px_rgba(139,92,246,0.15)]'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-600'
                }`}
              >
                <span className={active ? 'text-violet-400' : 'text-slate-600'}>
                  {CATEGORY_ICONS[cat]}
                </span>
                {CATEGORY_LABELS[cat]}
                <span className={`text-[10px] font-mono ${active ? 'text-violet-400/70' : 'text-slate-600'}`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </Reveal>

      {/* ── Contenu : vue "Tous" avec sections ─────────────────── */}
      {showSections ? (
        <div className="space-y-10 sm:space-y-14">

          {/* Projets phares */}
          <section className="space-y-6">
            <Reveal>
              <SectionDivider title="Projets phares" count={featuredProjects.length} />
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredProjects.map((project, i) => (
                <Reveal key={project.id} delay={i * 80} className="flex flex-col">
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </section>

          {/* Autres projets */}
          <section className="space-y-6">
            <Reveal>
              <SectionDivider title="Autres projets" count={otherProjects.length} />
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project, i) => (
                <Reveal key={project.id} delay={i * 70} className="flex flex-col">
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </section>

        </div>
      ) : (
        /* Vue filtrée : grille unique */
        <div className="space-y-6">
          {filtered.length === 0 ? (
            <Reveal>
              <div className="py-16 text-center text-slate-500 text-sm">
                Aucun projet dans cette catégorie.
              </div>
            </Reveal>
          ) : (
            <>
              {/* Compteur */}
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-600 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md">
                    {filtered.length} projet{filtered.length > 1 ? 's' : ''} — {CATEGORY_LABELS[activeCategory]}
                  </span>
                </div>
              </Reveal>

              {/* Featured en tête si présents dans la catégorie */}
              {filteredFeatured.length > 0 && filteredOthers.length > 0 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredFeatured.map((project, i) => (
                      <Reveal key={project.id} delay={i * 80} className="flex flex-col">
                        <ProjectCard project={project} />
                      </Reveal>
                    ))}
                  </div>
                  <div className="h-px bg-slate-800/60" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredOthers.map((project, i) => (
                      <Reveal key={project.id} delay={i * 70} className="flex flex-col">
                        <ProjectCard project={project} />
                      </Reveal>
                    ))}
                  </div>
                </div>
              )}

              {/* Sinon : grille simple */}
              {(filteredFeatured.length === 0 || filteredOthers.length === 0) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filtered.map((project, i) => (
                    <Reveal key={project.id} delay={i * 70} className="flex flex-col">
                      <ProjectCard project={project} />
                    </Reveal>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}

    </div>
  )
}
