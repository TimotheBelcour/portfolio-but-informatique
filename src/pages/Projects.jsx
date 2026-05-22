import { projects } from '../data/projects'
import ProjectCard from '../components/ui/ProjectCard'
import Reveal from '../components/ui/Reveal'

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 sm:py-16 space-y-8 sm:space-y-12">

      {/* Header */}
      <Reveal as="section" className="space-y-3">
        <h1 className="text-4xl font-bold text-slate-100">Projets</h1>
        <p className="text-slate-500 text-lg">
          Réalisations académiques réalisées en BUT Informatique
        </p>
      </Reveal>

      {/* Compteur */}
      <Reveal delay={80}>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-slate-600 border border-slate-800 bg-slate-900 px-2.5 py-1 rounded-md">
            {projects.length} projets
          </span>
        </div>
      </Reveal>

      {/* Grille de cartes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 100} className="flex flex-col">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

    </div>
  )
}
