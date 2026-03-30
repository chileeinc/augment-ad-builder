import type { Theme, Background } from '../lib/types'

const THEMES: { id: Theme; label: string }[] = [
  { id: 'dark', label: 'Dark' },
  { id: 'light', label: 'Light' },
  { id: 'tonal', label: 'Tonal' },
]
const BACKGROUNDS: { id: Background; label: string }[] = [
  { id: 'none', label: 'None' },
  { id: 'dot-grid', label: 'Dots' },
  { id: 'fine-grid', label: 'Grid' },
]

interface Props {
  theme: Theme
  background: Background
  showLogo: boolean
  onThemeChange: (t: Theme) => void
  onBackgroundChange: (b: Background) => void
  onLogoChange: (v: boolean) => void
}

export default function AppearancePanel({
  theme, background, showLogo,
  onThemeChange, onBackgroundChange, onLogoChange
}: Props) {
  return (
    <div className="panel-section">
      <div className="section-label">Appearance</div>
      <div className="theme-swatches">
        {THEMES.map(t => (
          <button
            key={t.id}
            className={`theme-swatch ${t.id}${theme === t.id ? ' active' : ''}`}
            onClick={() => onThemeChange(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="bg-swatches">
        {BACKGROUNDS.map(b => (
          <button
            key={b.id}
            className={`bg-swatch${background === b.id ? ' active' : ''}`}
            onClick={() => onBackgroundChange(b.id)}
          >
            {b.label}
          </button>
        ))}
      </div>
      <div className="toggle-row">
        <span className="toggle-label">Show Augment logo</span>
        <div className={`toggle${showLogo ? ' on' : ''}`} onClick={() => onLogoChange(!showLogo)}>
          <div className="toggle-knob" />
        </div>
      </div>
    </div>
  )
}
