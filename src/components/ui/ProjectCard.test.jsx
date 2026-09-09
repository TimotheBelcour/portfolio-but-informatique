import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProjectCard from './ProjectCard'

/**
 * ProjectCard doit fonctionner avec ET sans capture d'écran : le projet de
 * stage n'en avait aucune au moment où il a été ajouté, et sans garde la
 * carte affichait une image cassée.
 */

const projetDeBase = {
  id: 99,
  slug: 'projet-test',
  title: 'Projet de test',
  description: 'Une description courte du projet de test.',
  type: 'Web',
  year: '2026',
  status: 'Terminé',
  featured: false,
  category: 'web',
  periode: 'but2',
  tags: ['React', 'Vite'],
  highlights: ['Premier point clé', 'Deuxième point clé'],
  competences: ['realiser'],
}

function afficher(project) {
  return render(
    <MemoryRouter>
      <ProjectCard project={project} />
    </MemoryRouter>
  )
}

describe('ProjectCard', () => {
  it('affiche le titre, la description et les technologies', () => {
    afficher({ ...projetDeBase, image: '/capture.webp' })

    expect(screen.getByText('Projet de test')).toBeInTheDocument()
    expect(screen.getByText(/description courte/i)).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Vite')).toBeInTheDocument()
  })

  it('affiche la capture quand le projet en a une', () => {
    afficher({ ...projetDeBase, image: '/capture.webp' })

    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', '/capture.webp')
    // Les captures sont lourdes : elles ne doivent pas bloquer l'affichage.
    expect(image).toHaveAttribute('loading', 'lazy')
  })

  it("n'affiche aucune image cassée quand le projet n'a pas de capture", () => {
    afficher({ ...projetDeBase, image: undefined })

    expect(screen.queryByRole('img')).not.toBeInTheDocument()
    // Le repli montre l'initiale du projet à la place de la capture.
    expect(screen.getByText('P')).toBeInTheDocument()
  })

  it('renvoie vers la page du projet', () => {
    afficher({ ...projetDeBase, image: '/capture.webp' })

    const lien = screen.getByRole('link', { name: /voir le projet projet de test/i })
    expect(lien).toHaveAttribute('href', '/projects/projet-test')
  })

  it('signale les projets phares', () => {
    afficher({ ...projetDeBase, image: '/capture.webp', featured: true })
    expect(screen.getByText(/phare/i)).toBeInTheDocument()
  })
})
