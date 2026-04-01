import type { AdConfig } from '../lib/types'
import AugmentLogo from '../components/AugmentLogo'
import './BigHeadline.css'

interface Props { config: AdConfig }

function BarcodeRow({ count, className }: { count: number; className: string }) {
  const patterns: Array<'w1' | 'w2' | 'w3'> = ['w2','w1','w1','w2','w1','w3','w1','w2','w1','w1','w2','w1','w3','w1','w1','w2','w1','w2','w3','w1','w1','w2','w1','w3','w1','w2','w1','w1','w2','w1','w1','w3','w1','w2','w1','w1','w2','w3','w1','w2']
  return (
    <div className={`btb-bc-row ${className}`}>
      {patterns.slice(0, count).map((w, i) => <div key={i} className={`btb-bc-bar ${w}`} />)}
    </div>
  )
}

export default function BigHeadline({ config }: Props) {
  const { copy, showLogo, ctaStyle, logoPosition } = config
  const logoClass = `btb-logo logo-${logoPosition}`

  function renderCta() {
    if (!copy.cta) return null
    switch (ctaStyle) {
      case 'filled-arrow':
        return <div className="btb-footer"><button className="btb-cta cta-filled-arrow">{copy.cta} →</button></div>
      case 'mono-wide':
        return <div className="btb-footer"><button className="btb-cta cta-mono-wide">{copy.cta}</button></div>
      case 'terminal':
        return <div className="btb-footer"><button className="btb-cta cta-terminal"><span className="cta-prompt">&gt;</span> {copy.cta}</button></div>
      case 'corner-brackets':
        return <div className="btb-footer"><button className="btb-cta cta-corner-brackets"><span>{copy.cta}</span></button></div>
      case 'ticker':
        return (
          <div className="btb-footer btb-footer-bleed">
            <div className="cta-ticker">
              <div className="cta-ticker-row r1">{`${copy.cta} · ${copy.cta} · ${copy.cta} · ${copy.cta} · ${copy.cta} · ${copy.cta} · ${copy.cta} · ${copy.cta} ·`}</div>
              <div className="cta-ticker-row r2">{`${copy.cta} · ${copy.cta} · ${copy.cta} · ${copy.cta} · ${copy.cta} · ${copy.cta} · ${copy.cta} · ${copy.cta} ·`}</div>
            </div>
          </div>
        )
      case 'barcode':
        return (
          <div className="btb-footer">
            <div className="cta-barcode">
              <BarcodeRow count={40} className="top" />
              <div className="btb-bc-mid">
                <BarcodeRow count={20} className="mid" />
                <span className="btb-bc-label">{copy.cta}</span>
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
    <div className="tpl-btb">
      {showLogo && <div className={logoClass}><AugmentLogo /></div>}
      <div className="btb-main">
        {copy.headline && <div className="btb-headline">{copy.headline}</div>}
        {copy.body && <div className="btb-body">{copy.body}</div>}
      </div>
      {renderCta()}
    </div>
  )
}
