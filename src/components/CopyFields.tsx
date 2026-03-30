import type { Purpose, CopyData } from '../lib/types'
import { getFieldsForPurpose } from '../lib/config'

const PURPOSE_LABELS: Record<Purpose, string> = {
  'product-feature': 'Product Feature',
  'announcement': 'Announcement',
  'case-study': 'Case Study',
  'customer-proof': 'Customer Proof',
  'event': 'Event',
}

interface Props {
  purpose: Purpose
  copy: CopyData
  onChange: (copy: CopyData) => void
}

export default function CopyFields({ purpose, copy, onChange }: Props) {
  const fields = getFieldsForPurpose(purpose)

  function handleChange(key: keyof CopyData, value: string) {
    onChange({ ...copy, [key]: value })
  }

  return (
    <div className="panel-section">
      <div className="section-label">Copy</div>
      <div className="copy-purpose-hint">Fields for: {PURPOSE_LABELS[purpose]}</div>
      {fields.map(field => (
        <div key={field.key} className="copy-field">
          <label htmlFor={`field-${field.key}`}>{field.label}</label>
          {field.type === 'textarea' ? (
            <textarea
              id={`field-${field.key}`}
              value={copy[field.key] ?? ''}
              placeholder={field.placeholder}
              maxLength={field.maxLength}
              onChange={e => handleChange(field.key, e.target.value)}
            />
          ) : (
            <input
              id={`field-${field.key}`}
              type="text"
              value={copy[field.key] ?? ''}
              placeholder={field.placeholder}
              maxLength={field.maxLength}
              onChange={e => handleChange(field.key, e.target.value)}
            />
          )}
          <div className="copy-char-count">
            {(copy[field.key] ?? '').length} / {field.maxLength}
          </div>
        </div>
      ))}
    </div>
  )
}
