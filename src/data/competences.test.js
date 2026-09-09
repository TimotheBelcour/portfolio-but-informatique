import { describe, it, expect } from 'vitest'
import { competences } from './competences'
import { projects } from './projects'

/**
 * Vérifie que les 6 compétences du référentiel BUT restent complètes et
 * cohérentes avec le reste du site.
 */

// Couleurs pour lesquelles une classe Tailwind est définie dans Home.jsx,
// CompetencePage.jsx et Badge.jsx. Une couleur hors de cette liste
// s'afficherait sans style, sans provoquer d'erreur.
const COULEURS_SUPPORTEES = ['violet', 'blue', 'green', 'orange', 'yellow', 'pink']

describe('compétences BUT', () => {
  it('en compte exactement 6, comme le référentiel national', () => {
    expect(competences).toHaveLength(6)
  })

  it('sont numérotées de 1 à 6 sans doublon', () => {
    const ids = competences.map((c) => c.id).sort((a, b) => a - b)
    expect(ids).toEqual([1, 2, 3, 4, 5, 6])
  })

  it("n'a pas deux compétences avec le même slug", () => {
    const slugs = competences.map((c) => c.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it.each(competences.map((c) => [c.slug, c]))(
    '%s renseigne tous les champs affichés par la page',
    (_slug, competence) => {
      expect(competence.title).toBeTruthy()
      expect(competence.fullTitle).toBeTruthy()
      expect(competence.description).toBeTruthy()
      expect(competence.analyse).toBeTruthy()
      expect(competence.criteres.length).toBeGreaterThan(0)
      expect(competence.apprentissages.length).toBeGreaterThan(0)
    }
  )

  it.each(competences.map((c) => [c.slug, c]))(
    '%s utilise une couleur pour laquelle un style existe',
    (_slug, competence) => {
      expect(COULEURS_SUPPORTEES).toContain(competence.color)
    }
  )

  it.each(competences.map((c) => [c.slug, c]))(
    '%s a un niveau compris entre 1 et 4',
    (_slug, competence) => {
      expect(competence.niveauScore).toBeGreaterThanOrEqual(1)
      expect(competence.niveauScore).toBeLessThanOrEqual(4)
    }
  )

  it.each(competences.map((c) => [c.slug, c]))(
    '%s est illustrée par au moins un projet',
    (_slug, competence) => {
      // Une compétence sans projet associé afficherait une section vide.
      const lies = projects.filter((p) => p.competences.includes(competence.slug))
      expect(lies.length).toBeGreaterThan(0)
    }
  )
})
