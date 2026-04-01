import type { AdConfig } from '../lib/types'
import AugmentLogo from '../components/AugmentLogo'
import './BigHeadline.css'

interface Props { config: AdConfig }

export default function BigHeadline({ config }: Props) {
  const { copy, showLogo, ctaStyle, logoPosition } = config
  const logoClass = `btb-logo logo-${logoPosition}`
  const ctaClass = `btb-cta cta-style-${ctaStyle}`
  return (
    <div className="tpl-btb">
      {showLogo && <div className={logoClass}><AugmentLogo /></div>}
      <div className="btb-main">
        {copy.headline && <div className="btb-headline">{copy.headline}</div>}
        {copy.body && <div className="btb-body">{copy.body}</div>}
      </div>
      {copy.cta && (
        <div className="btb-footer">
          <button className={ctaClass}>{copy.cta}</button>
        </div>
      )}
    </div>
  )
}
