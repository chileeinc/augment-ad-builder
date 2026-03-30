import type { Platform } from '../lib/types'

const PLATFORMS: { id: Platform; label: string }[] = [
  { id: 'instagram', label: 'Instagram' },
  { id: 'linkedin', label: 'LinkedIn' },
  { id: 'twitter', label: 'X / Twitter' },
]

interface Props {
  value: Platform
  onChange: (p: Platform) => void
}

export default function PlatformTabs({ value, onChange }: Props) {
  return (
    <nav className="platform-tabs">
      {PLATFORMS.map(p => (
        <button
          key={p.id}
          className={`platform-tab${value === p.id ? ' active' : ''}`}
          onClick={() => onChange(p.id)}
        >
          {p.label}
        </button>
      ))}
    </nav>
  )
}
