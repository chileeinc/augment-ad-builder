import type { AdConfig, Purpose, TemplateId, Theme, Background } from '../lib/types'
import PurposePicker from './PurposePicker'
import TemplatePicker from './TemplatePicker'
import AppearancePanel from './AppearancePanel'
import CopyFields from './CopyFields'
import './LeftPanel.css'

interface Props {
  config: AdConfig
  onChange: (patch: Partial<AdConfig>) => void
}

export default function LeftPanel({ config, onChange }: Props) {
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
      {/* ImageLibrary added in next task */}
    </aside>
  )
}
