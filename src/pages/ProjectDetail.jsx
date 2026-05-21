import { useParams, Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { projects } from '../data/projects'
import { competences as allCompetences } from '../data/competences'
import Badge from '../components/ui/Badge'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  const [activeImage, setActiveImage] = useState(0)

  if (!project) return <Navigate to="/projects" replace />

  const linkedCompetences = allCompetences.filter((c) =>
    project.competences.includes(c.slug)
  )

  const hasGallery = project.gallery && project.gallery.length > 1

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500">
        <Link to="/projects" className="hover:text-slate-300 transition-colors">
          Projets
        </Link>
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-slate-300">{project.title}</span>
      </nav>

      {/* Header */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs text-green-400 bg-green-400/10 border border-green-400/20 px-2.5 py-0.5 rounded-full font-medium">
            {project.status}
          </span>
        </div>
        <h1 className="text-4xl font-bold text-slate-100">{project.title}</h1>
        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
          {project.description}
        </p>
      </section>

      {/* Image principale + galerie */}
      <div className="space-y-3">
        <div className="relative aspect-video bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
          <img
            src={project.gallery[activeImage]}
            alt={`${project.title} — vue ${activeImage + 1}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Thumbnails (si galerie) */}
        {hasGallery && (
          <div className="flex gap-2 overflow-x-auto pb-1">
            {project.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-150 ${
                  activeImage === i
                    ? 'border-violet-500'
                    : 'border-slate-700 hover:border-slate-500 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`Miniature ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Contenu */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Fonctionnalités & apprentissages */}
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-100">
              Fonctionnalités & apprentissages
            </h2>
            <ul className="space-y-3">
              {project.highlights.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800"
                >
                  <span className="shrink-0 w-5 h-5 rounded-full bg-violet-500/15 border border-violet-500/30 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-violet-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-sm text-slate-400 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Technologies */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} color="slate">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Compétences BUT */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              Compétences BUT
            </h3>
            <div className="space-y-2">
              {linkedCompetences.map((c) => (
                <Link
                  key={c.slug}
                  to={`/competences/${c.slug}`}
                  className="flex items-center gap-2 p-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors group"
                >
                  <span className="text-xs font-mono text-slate-600 group-hover:text-slate-500">
                    {String(c.id).padStart(2, '0')}
                  </span>
                  <span className="text-sm text-slate-300 group-hover:text-violet-400 transition-colors font-medium">
                    {c.title}
                  </span>
                  <svg
                    className="w-3.5 h-3.5 text-slate-600 ml-auto group-hover:text-slate-400 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-slate-800">
        <Link
          to="/projects"
          className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-100 transition-colors group"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Retour aux projets
        </Link>

        {/* Projet suivant */}
        {(() => {
          const idx = projects.findIndex((p) => p.slug === slug)
          const next = projects[idx + 1]
          return next ? (
            <Link
              to={`/projects/${next.slug}`}
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-100 transition-colors group text-right"
            >
              <span>
                <span className="block text-xs text-slate-600">Projet suivant</span>
                {next.title}
              </span>
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : null
        })()}
      </div>
    </div>
  )
}
