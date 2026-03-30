import type { AdConfig } from '../lib/types'
import './LogoTypeProductShot.css'

interface Props { config: AdConfig }

export default function LogoTypeProductShot({ config }: Props) {
  const { copy, showLogo, imageUrl } = config
  return (
    <div className="tpl-ltps">
      {showLogo && (
        <div className="ltps-top">
          <div className="ltps-logo">[::] augment code</div>
        </div>
      )}
      {copy.headline && <div className="ltps-headline">{copy.headline}</div>}
      <div className="ltps-image">
        {imageUrl
          ? <img src={imageUrl} alt="" className="ltps-img" />
          : <div className="ltps-image-placeholder">Image from library</div>
        }
      </div>
      <div className="ltps-footer">
        <span className="ltps-cta">{copy.cta}</span>
      </div>
    </div>
  )
}
