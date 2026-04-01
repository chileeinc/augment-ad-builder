import type { AdConfig, Purpose, TemplateId, Theme, Background } from '../lib/types'
import PurposePicker from './PurposePicker'
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
      <PurposePicker
        value={config.purpose}
        onChange={(purpose: Purpose) => onChange({ purpose })}
      />
      <TemplatePicker
        value={config.template}
        onChange={(template: TemplateId) => onChange({ template })}
      />
      <AppearancePanel
        theme={config.theme}
        background={config.background}
        showLogo={config.showLogo}
        onThemeChange={(theme: Theme) => onChange({ theme })}
        onBackgroundChange={(background: Background) => onChange({ background })}
        onLogoChange={(showLogo: boolean) => onChange({ showLogo })}
      />
      <CopyFields
        purpose={config.purpose}
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
