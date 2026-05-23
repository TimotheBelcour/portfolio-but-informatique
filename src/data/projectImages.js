/**
 * Registre automatique des images de projets.
 *
 * Vite's import.meta.glob charge tous les PNG de src/assets/projects/ en mode
 * "eager" (synchrone) lors du build. Chaque image reçoit un hash de contenu
 * dans son nom de fichier — ce qui garantit l'invalidation de cache automatique.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │  Ajouter un projet ou une image ?                                    │
 * │  → Créer src/assets/projects/[slug]/*.png                           │
 * │  → Appeler imgs('slug', 'nom-fichier-sans-extension', ...) dans     │
 * │    projects.js — l'image est automatiquement disponible.            │
 * └──────────────────────────────────────────────────────────────────────┘
 */

const modules = import.meta.glob('../assets/projects/**/*.png', { eager: true })

/**
 * Construit un registre indexé par slug de projet, puis par nom de fichier.
 * Exemple : projectImages['votendo']['votendo-home'] = '/assets/votendo-home.abc123.png'
 */
function buildRegistry() {
  const reg = {}
  for (const [path, mod] of Object.entries(modules)) {
    // '../assets/projects/votendo/votendo-home.png'
    const parts = path.split('/')
    const projectsIdx = parts.lastIndexOf('projects')
    const slug = parts[projectsIdx + 1]                           // 'votendo'
    const file = parts[parts.length - 1].replace(/\.[^.]+$/, '') // 'votendo-home'
    if (!reg[slug]) reg[slug] = {}
    reg[slug][file] = mod.default
  }
  return reg
}

export const projectImages = buildRegistry()

/**
 * Retourne un tableau d'URLs pour les images d'un projet, dans l'ordre donné.
 * Les noms de fichiers introuvables sont ignorés silencieusement.
 *
 * @param {string}    slug  - Slug du projet (= nom du dossier dans assets/projects/)
 * @param {...string} files - Noms de fichiers sans extension, dans l'ordre voulu
 * @returns {string[]}
 *
 * @example
 * imgs('votendo', 'votendo-home', 'votendo-vote', 'votendo-results')
 */
export function imgs(slug, ...files) {
  const bank = projectImages[slug] ?? {}
  return files.map((f) => bank[f]).filter(Boolean)
}
