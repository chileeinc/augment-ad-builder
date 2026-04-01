import type { AdConfig } from '../lib/types'
import AugmentLogo from '../components/AugmentLogo'
import './BigTypeBody.css'

interface Props { config: AdConfig }

export default function BigTypeBody({ config }: Props) {
  const { copy, showLogo } = config
  return (
    <div className="tpl-btb">
      <div className="btb-main">
        {copy.companyName && <div className="btb-company">{copy.companyName}</div>}
        {copy.headline && <div className="btb-headline">{copy.headline}</div>}
        {copy.body && <div className="btb-body">{copy.body}</div>}
      </div>
      <div className="btb-footer">
        {copy.cta && <div className="btb-proof">{copy.cta}</div>}
        {showLogo && <div className="btb-logo"><AugmentLogo /></div>}
      </div>
    </div>
  )
}
