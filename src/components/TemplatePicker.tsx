import type { TemplateId } from '../lib/types'
import { TEMPLATES } from '../lib/config'

interface Props {
  value: TemplateId
  onChange: (t: TemplateId) => void
}

export default function TemplatePicker({ value, onChange }: Props) {
  return (
    <div className="panel-section">
      <div className="section-label">Template</div>
      <div className="template-grid">
        {TEMPLATES.map(t => (
          <button
            key={t.id}
            className={`template-thumb${value === t.id ? ' active' : ''}`}
            onClick={() => onChange(t.id)}
            title={t.name}
          >
            <span className="template-thumb-name">{t.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
