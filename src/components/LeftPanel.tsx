import type { AdConfig, TemplateId, Theme, Background, CtaStyle, LogoPosition } from '../lib/types'
import TemplatePicker from './TemplatePicker'
import AppearancePanel from './AppearancePanel'
import CopyFields from './CopyFields'
import ImageLibrary from './ImageLibrary'
import './LeftPanel.css'

interface Props {
  config: AdConfig
  onChange: (patch: Partial<AdConfig>) => void
  onReset: () => void
}

export default function LeftPanel({ config, onChange, onReset }: Props) {
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
        ctaStyle={config.ctaStyle}
        logoPosition={config.logoPosition}
        onThemeChange={(theme: Theme) => onChange({ theme })}
        onBackgroundChange={(background: Background) => onChange({ background })}
        onLogoChange={(showLogo: boolean) => onChange({ showLogo })}
        onCtaStyleChange={(ctaStyle: CtaStyle) => onChange({ ctaStyle })}
        onLogoPositionChange={(logoPosition: LogoPosition) => onChange({ logoPosition })}
      />
      <CopyFields
        template={config.template}
        copy={config.copy}
        onChange={(copy) => onChange({ copy })}
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
