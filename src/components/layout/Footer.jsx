import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © 2026 Timothé Belcour — Portfolio BUT Informatique
        </p>
        <nav className="flex items-center gap-6">
          <Link to="/about" className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200">
            À propos
          </Link>
          <Link to="/projects" className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200">
            Projets
          </Link>
          <a
            href="https://github.com/timothebelcour"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  )
}
