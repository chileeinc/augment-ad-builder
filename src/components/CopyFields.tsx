import type { TemplateId, CopyData } from '../lib/types'
import { getFieldsForTemplate } from '../lib/config'

interface Props {
  template: TemplateId
  copy: CopyData
  onChange: (copy: CopyData) => void
}

export default function CopyFields({ template, copy, onChange }: Props) {
  const fields = getFieldsForTemplate(template)

  function handleChange(key: keyof CopyData, value: string) {
    onChange({ ...copy, [key]: value })
  }

  return (
    <div className="panel-section">
      <div className="section-label">Copy</div>
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
        </div>
      ))}
    </div>
  )
}
