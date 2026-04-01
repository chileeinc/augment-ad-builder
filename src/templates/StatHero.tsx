import type { AdConfig } from '../lib/types'
import AugmentLogo from '../components/AugmentLogo'
import './StatHero.css'

interface Props { config: AdConfig }

export default function StatHero({ config }: Props) {
  const { copy, showLogo } = config
  return (
    <div className="tpl-sh">
      {copy.stat && <div className="sh-stat">{copy.stat}</div>}
      {copy.statLabel && <div className="sh-stat-label">{copy.statLabel}</div>}
      {copy.headline && <div className="sh-headline">{copy.headline}</div>}
      <div className="sh-footer">
        {copy.cta && <div className="sh-cta">{copy.cta}</div>}
        {showLogo && <div className="sh-logo"><AugmentLogo /></div>}
      </div>
    </div>
  )
}
