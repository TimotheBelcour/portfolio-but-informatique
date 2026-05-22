const colorMap = {
  violet: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  blue:   'bg-blue-500/10   text-blue-400   border-blue-500/20',
  green:  'bg-green-500/10  text-green-400  border-green-500/20',
  orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  pink:   'bg-pink-500/10   text-pink-400   border-pink-500/20',
  slate:  'bg-slate-800/70  text-slate-300  border-slate-700/60',
}

export default function Badge({ children, color = 'slate' }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colorMap[color] ?? colorMap.slate}`}
    >
      {children}
    </span>
  )
}
