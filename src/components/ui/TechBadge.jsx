const techColorMap = {
  PHP:          'violet',
  MySQL:        'blue',
  'HTML/CSS':   'orange',
  HTTPS:        'green',
  Flutter:      'violet',
  Dart:         'blue',
  'API REST':   'green',
  Android:      'green',
  Docker:       'blue',
  Postman:      'orange',
  Linux:        'slate',
  VR:           'pink',
  AR:           'pink',
  Recherche:    'slate',
  Présentation: 'violet',
  Python:       'yellow',
  React:        'blue',
  JavaScript:   'yellow',
  SQL:          'orange',
}

const colorStyles = {
  violet: { badge: 'bg-violet-500/10 text-violet-300 border-violet-500/25', dot: 'bg-violet-400' },
  blue:   { badge: 'bg-blue-500/10   text-blue-300   border-blue-500/25',   dot: 'bg-blue-400'   },
  green:  { badge: 'bg-green-500/10  text-green-300  border-green-500/25',  dot: 'bg-green-400'  },
  orange: { badge: 'bg-orange-500/10 text-orange-300 border-orange-500/25', dot: 'bg-orange-400' },
  yellow: { badge: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/25', dot: 'bg-yellow-400' },
  pink:   { badge: 'bg-pink-500/10   text-pink-300   border-pink-500/25',   dot: 'bg-pink-400'   },
  slate:  { badge: 'bg-slate-800/70  text-slate-300  border-slate-700/60',  dot: 'bg-slate-500'  },
}

export default function TechBadge({ name }) {
  const color = techColorMap[name] ?? 'slate'
  const { badge, dot } = colorStyles[color]
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border ${badge}`}>
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dot}`} />
      {name}
    </span>
  )
}
