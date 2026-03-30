import type { Purpose } from '../lib/types'

const PURPOSES: { id: Purpose; label: string }[] = [
  { id: 'product-feature', label: 'Product Feature' },
  { id: 'announcement', label: 'Announcement' },
  { id: 'case-study', label: 'Case Study' },
  { id: 'customer-proof', label: 'Customer Proof' },
  { id: 'event', label: 'Event' },
]

interface Props {
  value: Purpose
  onChange: (p: Purpose) => void
}

export default function PurposePicker({ value, onChange }: Props) {
  return (
    <div className="panel-section">
      <div className="section-label">Ad Purpose</div>
      <div className="purpose-grid">
        {PURPOSES.map(p => (
          <button
            key={p.id}
            className={`purpose-pill${value === p.id ? ' active' : ''}`}
            onClick={() => onChange(p.id)}
          >
            {p.label}
          </button>
        ))}
      </div>
    </div>
  )
}
