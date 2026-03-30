import type { AdConfig } from '../lib/types'
import './CustomerQuote.css'

interface Props { config: AdConfig }

export default function CustomerQuote({ config }: Props) {
  const { copy, showLogo } = config
  return (
    <div className="tpl-cq">
      {copy.customerName && (
        <div className="cq-logos">
          <div className="cq-customer-tag">{copy.customerName}</div>
        </div>
      )}
      {copy.quote && (
        <div className="cq-quote">
          <span className="cq-quote-mark">"</span>{copy.quote}
        </div>
      )}
      {copy.customerTitle && (
        <div className="cq-attribution">{copy.customerTitle}</div>
      )}
      <div className="cq-footer">
        {copy.cta && <div className="cq-cta">{copy.cta}</div>}
        {showLogo && <div className="cq-logo">augment code</div>}
      </div>
    </div>
  )
}
