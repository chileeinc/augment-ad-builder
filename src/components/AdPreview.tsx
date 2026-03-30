import { forwardRef } from 'react'
import type { AdConfig } from '../lib/types'
import { getSizeByKey } from '../lib/config'
import { getTemplateComponent } from '../templates/index'
import '../templates/templates.css'
import './AdPreview.css'

interface Props { config: AdConfig }

// DISPLAY_WIDTH: how wide the preview renders on screen
const DISPLAY_WIDTH = 400

const AdPreview = forwardRef<HTMLDivElement, Props>(({ config }, ref) => {
  const { platform, sizeKey, theme, background, template } = config
  const size = getSizeByKey(platform, sizeKey)
  const displayHeight = Math.round((size.height / size.width) * DISPLAY_WIDTH)
  const TemplateComponent = getTemplateComponent(template)

  const bgClass = background === 'none' ? '' : `bg-${background}`

  return (
    <div
      className="ad-preview-wrapper"
      style={{ width: DISPLAY_WIDTH, height: displayHeight }}
    >
      <div
        ref={ref}
        className={`ad-canvas theme-${theme} ${bgClass}`}
        data-theme={theme}
        style={{ width: DISPLAY_WIDTH, height: displayHeight }}
      >
        <TemplateComponent config={config} />
      </div>
    </div>
  )
})

AdPreview.displayName = 'AdPreview'

export default AdPreview
