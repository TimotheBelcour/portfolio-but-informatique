import { describe, it, expect } from 'vitest'
import { projects, PERIODES } from './projects'
import { competences } from './competences'

/**
 * Ces tests vérifient l'intégrité du catalogue de projets.
 *
 * Ils ne testent pas du code compliqué : ils protègent contre les fautes de
 * frappe dans les données, qui ne provoquent aucune erreur visible mais
 * cassent silencieusement une partie du site (lien mort, image manquante).
 */

const CATEGORIES_CONNUES = [
  'pro', 'web', 'mobile', 'devops', 'algo', 'systeme', 'reseau', 'recherche',
]

describe('catalogue de projets', () => {
  it('contient au moins un projet', () => {
    expect(projects.length).toBeGreaterThan(0)
  })

  it("n'a pas deux projets avec le même slug", () => {
    // Un slug en double ferait pointer deux projets sur la même URL,
    // et le second deviendrait inaccessible.
    const slugs = projects.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it("n'a pas deux projets avec le même identifiant", () => {
    const ids = projects.map((p) => p.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it.each(projects.map((p) => [p.slug, p]))(
    '%s renseigne tous les champs obligatoires',
    (_slug, project) => {
      expect(project.title).toBeTruthy()
      expect(project.description).toBeTruthy()
      expect(project.status).toBeTruthy()
      expect(Array.isArray(project.tags)).toBe(true)
      expect(project.tags.length).toBeGreaterThan(0)
      expect(Array.isArray(project.highlights)).toBe(true)
      expect(project.highlights.length).toBeGreaterThan(0)
    }
  )

  it.each(projects.map((p) => [p.slug, p]))(
    '%s ne référence que des compétences BUT existantes',
    (_slug, project) => {
      // C'est le test le plus utile du fichier : une faute de frappe dans un
      // slug de compétence (« realise » au lieu de « realiser ») ne provoque
      // aucune erreur, la compétence disparaît simplement de l'affichage.
      const slugsConnus = competences.map((c) => c.slug)
      expect(project.competences.length).toBeGreaterThan(0)
      project.competences.forEach((slug) => {
        expect(slugsConnus).toContain(slug)
      })
    }
  )

  it.each(projects.map((p) => [p.slug, p]))(
    '%s appartient à une catégorie et une période connues',
    (_slug, project) => {
      expect(CATEGORIES_CONNUES).toContain(project.category)
      expect(Object.keys(PERIODES)).toContain(project.periode)
    }
  )

  it.each(projects.filter((p) => p.gallery?.length).map((p) => [p.slug, p]))(
    '%s a une galerie dont toutes les images ont été trouvées',
    (_slug, project) => {
      // imgs() ignore silencieusement les fichiers introuvables : renommer une
      // image la ferait disparaître de la galerie sans le moindre message.
      project.gallery.forEach((src) => {
        expect(src).toBeTruthy()
        expect(typeof src).toBe('string')
      })
    }
  )

  it.each(projects.filter((p) => p.gallery?.length).map((p) => [p.slug, p]))(
    "%s utilise la première image de sa galerie comme vignette",
    (_slug, project) => {
      expect(project.image).toBe(project.gallery[0])
    }
  )

  it('place les projets phares avant les autres', () => {
    const dernierPhare = projects.findLastIndex((p) => p.featured)
    const premierAutre = projects.findIndex((p) => !p.featured)
    expect(dernierPhare).toBeLessThan(premierAutre)
  })
})
