import type { AdConfig } from '../lib/types'
import AugmentLogo from '../components/AugmentLogo'
import './CustomerQuote.css'

interface Props { config: AdConfig }

export default function CustomerQuote({ config }: Props) {
  const { copy, showLogo } = config
  return (
    <div className="tpl-cq">
      {showLogo && <div className="cq-logo"><AugmentLogo /></div>}
      {copy.customerName && (
        <div className="cq-customer-tag">{copy.customerName}</div>
      )}
      <div className="cq-content">
        {copy.quote && (
          <div className="cq-quote">
            <span className="cq-quote-mark">"</span>{copy.quote}
          </div>
        )}
        {copy.customerTitle && (
          <div className="cq-attribution">{copy.customerTitle}</div>
        )}
      </div>
      {copy.cta && (
        <div className="cq-footer">
          <button className="cq-cta">{copy.cta}</button>
        </div>
      )}
    </div>
  )
}
