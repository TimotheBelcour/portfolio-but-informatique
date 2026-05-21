import Badge from '../components/ui/Badge'

const stack = [
  'JavaScript', 'React', 'PHP', 'Python',
  'Flutter', 'SQL', 'Docker', 'Git', 'Linux', 'HTML/CSS',
]

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* Header */}
      <section className="space-y-3">
        <h1 className="text-4xl font-bold text-slate-100">À propos</h1>
        <p className="text-slate-500 text-lg">Mon parcours et mon profil</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Sidebar profil */}
        <aside className="space-y-6">
          <div className="w-28 h-28 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center">
            <span className="text-3xl font-bold text-slate-600">TB</span>
          </div>

          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-slate-100">Timothé Belcour</h2>
            <p className="text-sm text-slate-500">Étudiant BUT Informatique</p>
          </div>

          <div className="space-y-3 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              France
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              BUT Informatique — 2ème année
            </div>
          </div>
        </aside>

        {/* Contenu principal */}
        <div className="lg:col-span-2 space-y-10">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-200">Présentation</h3>
            <p className="text-slate-400 leading-relaxed">
              Étudiant en 2ème année de BUT Informatique, je me passionne pour le
              développement logiciel et web. Ce portfolio retrace mon parcours académique
              et mes réalisations techniques au fil de ma formation.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Je cherche à approfondir mes compétences en développement full-stack tout
              en découvrant les bases de données, les systèmes, et la gestion de projet
              agile.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-200">Formation</h3>
            <div className="border border-slate-800 rounded-xl p-5 space-y-1 hover:border-slate-700 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-slate-200">BUT Informatique</p>
                  <p className="text-sm text-slate-500 mt-0.5">IUT — 2ème année en cours</p>
                </div>
                <span className="text-xs text-slate-600 shrink-0 font-mono mt-0.5">2023 — 2026</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-200">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <Badge key={tech} color="slate">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-200">Contact</h3>
            <a
              href="mailto:timothebelcour@outlook.fr"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-violet-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              timothebelcour@outlook.fr
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
