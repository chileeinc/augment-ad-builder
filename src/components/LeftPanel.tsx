import type { AdConfig, TemplateId, Theme, Background, LogoPosition } from '../lib/types'
import TemplatePicker from './TemplatePicker'
import AppearancePanel from './AppearancePanel'
import CopyFields, { CTA_STYLES } from './CopyFields'
import ImageLibrary from './ImageLibrary'
import './LeftPanel.css'

interface Props {
  config: AdConfig
  onChange: (patch: Partial<AdConfig>) => void
  onReset: () => void
}

export default function LeftPanel({ config, onChange, onReset }: Props) {
  function shuffleCtaStyle() {
    const others = CTA_STYLES.filter(s => s !== config.ctaStyle)
    const next = others[Math.floor(Math.random() * others.length)]
    onChange({ ctaStyle: next })
  }

  return (
    <aside className="left-panel">
      <TemplatePicker
        value={config.template}
        onChange={(template: TemplateId) => onChange({ template })}
      />
      <AppearancePanel
        template={config.template}
        theme={config.theme}
        background={config.background}
        showLogo={config.showLogo}
        logoPosition={config.logoPosition}
        onThemeChange={(theme: Theme) => onChange({ theme })}
        onBackgroundChange={(background: Background) => onChange({ background })}
        onLogoChange={(showLogo: boolean) => onChange({ showLogo })}
        onLogoPositionChange={(logoPosition: LogoPosition) => onChange({ logoPosition })}
      />
      <CopyFields
        template={config.template}
        copy={config.copy}
        onChange={(copy) => onChange({ copy })}
        onCtaStyleShuffle={shuffleCtaStyle}
      />
      <ImageLibrary
        selectedUrl={config.imageUrl}
        onSelect={(imageUrl) => onChange({ imageUrl })}
      />
      <div className="reset-row">
        <button className="reset-btn" onClick={onReset}>Reset</button>
      </div>
    </aside>
  )
}
