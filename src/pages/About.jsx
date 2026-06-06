import Badge from '../components/ui/Badge'
import Reveal from '../components/ui/Reveal'

const stack = [
  'JavaScript', 'React', 'PHP', 'Python',
  'Flutter', 'SQL', 'Docker', 'Git', 'Linux', 'HTML/CSS',
]

function ProfileCard() {
  return (
    <div className="lg:sticky lg:top-24 self-start">
      {/* Glow ambiant derrière la carte */}
      <div
        className="absolute -inset-4 rounded-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(139,92,246,0.13) 0%, rgba(96,165,250,0.07) 55%, transparent 80%)',
          filter: 'blur(18px)',
        }}
      />

      {/* Carte principale — gradient border */}
      <div className="relative p-px rounded-2xl bg-gradient-to-b from-slate-600/60 via-slate-700/20 to-slate-800/40">
        <div
          className="relative bg-slate-900 rounded-2xl overflow-hidden"
          style={{
            boxShadow:
              '0 0 40px rgba(139,92,246,0.10), 0 0 80px rgba(96,165,250,0.05), inset 0 1px 0 rgba(255,255,255,0.04)',
          }}
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

          {/* Zone photo */}
          <div className="relative px-6 pt-8 pb-6 flex flex-col items-center text-center space-y-4">
            <div className="relative">
              <div
                className="absolute -inset-2 rounded-full"
                style={{
                  background: 'conic-gradient(from 180deg, rgba(139,92,246,0.5), rgba(96,165,250,0.4), rgba(139,92,246,0.5))',
                  filter: 'blur(8px)',
                  opacity: 0.6,
                }}
              />
              <div className="relative p-[2px] rounded-full bg-gradient-to-br from-violet-500 via-blue-400 to-violet-600">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-800">
                  <img
                    src="/images/profile.png"
                    alt="Timothé Belcour"
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
              </div>
              <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-slate-900 shadow-sm" />
            </div>

            <div className="space-y-0.5">
              <h2 className="text-lg font-semibold text-slate-100 tracking-tight">
                Timothé Belcour
              </h2>
              <p className="text-sm text-slate-500">Étudiant BUT Informatique</p>
            </div>

          </div>

          <div className="h-px mx-5 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

          {/* Infos */}
          <div className="px-5 py-4 space-y-2.5">
            <div className="flex items-center gap-2.5 text-sm text-slate-500">
              <svg className="w-4 h-4 shrink-0 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              France
            </div>
            <div className="flex items-center gap-2.5 text-sm text-slate-500">
              <svg className="w-4 h-4 shrink-0 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              BUT Info — 2ème année
            </div>
          </div>

          <div className="h-px mx-5 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

          {/* Liens sociaux */}
          <div className="px-5 py-4 flex items-center justify-center gap-2">
            <a
              href="https://github.com/TimotheBelcour"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-slate-100 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
            <a
              href="mailto:timothebelcour@outlook.fr"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-slate-100 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Mail
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 sm:py-16 space-y-10 sm:space-y-16">

      {/* Header */}
      <Reveal as="section" className="space-y-3">
        <h1 className="text-4xl font-bold text-slate-100">À propos</h1>
        <p className="text-slate-500 text-lg">Mon parcours et mon profil</p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

        {/* Sidebar — fadeOnly pour préserver le comportement sticky */}
        <Reveal as="aside" className="relative" delay={100} fadeOnly>
          <ProfileCard />
        </Reveal>

        {/* Contenu principal */}
        <div className="lg:col-span-2 space-y-10">

          <Reveal delay={150}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-200">Présentation</h3>
              <p className="text-slate-400 leading-relaxed">
                Étudiant en 2ème année de BUT Informatique à l'IUT de Saint-Dié-des-Vosges,
                je m'intéresse particulièrement aux nouvelles technologies — intelligence
                artificielle, développement et jeux vidéo. Ce portfolio documente mes projets
                et mes apprentissages au fil de la formation. Je ne suis pas encore fixé sur
                un domaine précis, mais j'explore progressivement différents domaines du
                numérique afin de construire mon projet professionnel.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Avant le BUT, j'ai suivi un BTS Pilotage des Procédés en alternance chez
                Norske Skog Golbey, site historiquement spécialisé dans le papier journal
                et aujourd'hui engagé dans la production de papier pour carton ondulé. Cette
                expérience industrielle m'a apporté rigueur, autonomie et sens des
                responsabilités — des réflexes que je retrouve aujourd'hui dans mes projets
                informatiques.
              </p>
              <p className="text-slate-400 leading-relaxed">
                En dehors des cours, je pratique le volley-ball en club depuis l'enfance et
                j'ai entraîné une équipe de cadets. Cette activité m'a appris l'esprit
                d'équipe, la régularité ainsi que la prise de responsabilités collectives.
              </p>
            </div>
          </Reveal>

          <Reveal delay={230}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-200">Formation</h3>
              <div className="border border-slate-800 rounded-xl p-5 space-y-1 hover:border-slate-700 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-slate-200">BUT Informatique</p>
                    <p className="text-sm text-slate-500 mt-0.5">IUT — 2ème année en cours</p>
                  </div>
                  <span className="text-xs text-slate-600 shrink-0 font-mono mt-0.5">2024 — 2027</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={310}>
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
          </Reveal>

          <Reveal delay={390}>
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
          </Reveal>

        </div>
      </div>
    </div>
  )
}
