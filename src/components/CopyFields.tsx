import type { TemplateId, CopyData, CtaStyle } from '../lib/types'
import { getFieldsForTemplate } from '../lib/config'

const CTA_STYLES: CtaStyle[] = ['filled-arrow', 'mono-wide', 'terminal', 'corner-brackets', 'ticker', 'barcode']

interface Props {
  template: TemplateId
  copy: CopyData
  onChange: (copy: CopyData) => void
  onCtaStyleShuffle?: () => void
}

export default function CopyFields({ template, copy, onChange, onCtaStyleShuffle }: Props) {
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
          {field.key === 'cta' ? (
            <div className="cta-input-row">
              <input
                id={`field-${field.key}`}
                type="text"
                value={copy[field.key] ?? ''}
                placeholder={field.placeholder}
                maxLength={field.maxLength}
                onChange={e => handleChange(field.key, e.target.value)}
              />
              {onCtaStyleShuffle && (
                <button
                  className="cta-wand-btn"
                  onClick={onCtaStyleShuffle}
                  title="Shuffle CTA style"
                  type="button"
                >
                  {/* Magic wand SVG */}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 4V2"/>
                    <path d="M15 16v-2"/>
                    <path d="M8 9h2"/>
                    <path d="M20 9h2"/>
                    <path d="M17.8 11.8 19 13"/>
                    <path d="M15 9h.01"/>
                    <path d="M17.8 6.2 19 5"/>
                    <path d="m3 21 9-9"/>
                    <path d="M12.2 6.2 11 5"/>
                  </svg>
                </button>
              )}
            </div>
          ) : field.type === 'textarea' ? (
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

export { CTA_STYLES }
