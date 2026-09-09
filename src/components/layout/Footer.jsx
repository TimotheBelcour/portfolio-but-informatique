import { Link } from 'react-router-dom'
import { profile } from '../../data/profile'

const linkClass =
  'text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 text-center sm:text-left">
          © {new Date().getFullYear()} {profile.firstName} {profile.lastName} — Portfolio BUT Informatique
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link to="/about" className={linkClass}>
            À propos
          </Link>
          <Link to="/projects" className={linkClass}>
            Projets
          </Link>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            GitHub
          </a>
          <a href={`mailto:${profile.email}`} className={linkClass}>
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}
