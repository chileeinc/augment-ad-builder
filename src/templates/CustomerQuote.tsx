import type { AdConfig } from '../lib/types'
import AugmentLogo from '../components/AugmentLogo'
import './CustomerQuote.css'

interface Props { config: AdConfig }

export default function CustomerQuote({ config }: Props) {
  const { copy, showLogo } = config
  return (
    <div className="tpl-cq">
      {showLogo && <div className="cq-logo"><AugmentLogo /></div>}
      <div className="cq-content">
        {copy.quote && (
          <div className="cq-quote">
            <div className="cq-quote-mark">"</div>
            {copy.quote}
          </div>
        )}
      </div>
      {(copy.customerName || copy.customerTitle) && (
        <div className="cq-attribution">
          {copy.customerName && <span className="cq-name-tag">{copy.customerName}</span>}
          {copy.customerTitle && <div className="cq-title">{copy.customerTitle}</div>}
        </div>
      )}
      {copy.cta && (
        <div className="cq-footer">
          <button className="cq-cta">{copy.cta}</button>
        </div>
      )}
    </div>
  )
}
