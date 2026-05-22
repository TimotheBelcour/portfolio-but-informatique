import { useEffect, useRef, useState } from 'react'

/**
 * Déclenche une animation d'entrée (fade + slide-up) dès que
 * l'élément entre dans le viewport. Joue une seule fois.
 *
 * Props:
 *  delay    – délai en ms avant le début de la transition
 *  as       – tag HTML rendu (div par défaut)
 *  fadeOnly – anime uniquement l'opacité (pas de translateY).
 *             À utiliser quand un ancêtre sticky est présent,
 *             car `transform` brise `position: sticky` en CSS.
 *  className – classes supplémentaires sur le tag rendu
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  fadeOnly = false,
  as: Tag = 'div',
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const stateClass = visible
    ? 'reveal-visible'
    : fadeOnly
    ? 'reveal-hidden-fade'
    : 'reveal-hidden'

  return (
    <Tag
      ref={ref}
      className={`reveal-transition ${stateClass} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
