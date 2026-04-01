import type { AdConfig } from '../lib/types'
import AugmentLogo from '../components/AugmentLogo'
import './QuoteAd.css'

interface Props { config: AdConfig }

function BarcodeRow({ count, className }: { count: number; className: string }) {
  const patterns: Array<'w1' | 'w2' | 'w3'> = ['w2','w1','w1','w2','w1','w3','w1','w2','w1','w1','w2','w1','w3','w1','w1','w2','w1','w2','w3','w1','w1','w2','w1','w3','w1','w2','w1','w1','w2','w1','w1','w3','w1','w2','w1','w1','w2','w3','w1','w2']
  return (
    <div className={`cq-bc-row ${className}`}>
      {patterns.slice(0, count).map((w, i) => <div key={i} className={`cq-bc-bar ${w}`} />)}
    </div>
  )
}

export default function QuoteAd({ config }: Props) {
  const { copy, showLogo, ctaStyle } = config

  function renderCta() {
    if (!copy.cta) return null
    switch (ctaStyle) {
      case 'filled-arrow':
        return <div className="cq-footer"><button className="cq-cta cta-filled-arrow">{copy.cta} →</button></div>
      case 'mono-wide':
        return <div className="cq-footer"><button className="cq-cta cta-mono-wide">{copy.cta}</button></div>
      case 'terminal':
        return <div className="cq-footer"><button className="cq-cta cta-terminal"><span className="cta-prompt">&gt;</span> {copy.cta}</button></div>
      case 'corner-brackets':
        return <div className="cq-footer"><button className="cq-cta cta-corner-brackets"><span>{copy.cta}</span></button></div>
      case 'ticker':
        return (
          <div className="cq-footer cq-footer-bleed">
            <div className="cta-ticker">
              <div className="cta-ticker-row r1">{`${copy.cta} · ${copy.cta} · ${copy.cta} · ${copy.cta} · ${copy.cta} · ${copy.cta} · ${copy.cta} · ${copy.cta} ·`}</div>
              <div className="cta-ticker-row r2">{`${copy.cta} · ${copy.cta} · ${copy.cta} · ${copy.cta} · ${copy.cta} · ${copy.cta} · ${copy.cta} · ${copy.cta} ·`}</div>
            </div>
          </div>
        )
      case 'barcode':
        return (
          <div className="cq-footer">
            <div className="cta-barcode">
              <BarcodeRow count={40} className="top" />
              <div className="cq-bc-mid">
                <BarcodeRow count={20} className="mid" />
                <span className="cq-bc-label">{copy.cta}</span>
              </div>
              <BarcodeRow count={40} className="bottom" />
            </div>
          </div>
        )
      default:
        return null
    }
  }

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
      {renderCta()}
    </div>
  )
}
