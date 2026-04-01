import type { Theme, Background, LogoPosition, TemplateId } from '../lib/types'

const THEMES: { id: Theme; label: string }[] = [
  { id: 'dark', label: 'Dark' },
  { id: 'light', label: 'Light' },
  { id: 'tonal', label: 'Tonal' },
]
const BACKGROUNDS: { id: Background; label: string }[] = [
  { id: 'none', label: 'None' },
  { id: 'dot-grid', label: 'Dots' },
  { id: 'grid', label: 'Grid' },
]
const LOGO_POSITIONS: { id: LogoPosition; label: string }[] = [
  { id: 'top-left', label: '↖' },
  { id: 'top-right', label: '↗' },
  { id: 'bottom-left', label: '↙' },
  { id: 'bottom-right', label: '↘' },
]

interface Props {
  template: TemplateId
  theme: Theme
  background: Background
  showLogo: boolean
  logoPosition: LogoPosition
  onThemeChange: (t: Theme) => void
  onBackgroundChange: (b: Background) => void
  onLogoChange: (v: boolean) => void
  onLogoPositionChange: (p: LogoPosition) => void
}

export default function AppearancePanel({
  template, theme, background, showLogo, logoPosition,
  onThemeChange, onBackgroundChange, onLogoChange, onLogoPositionChange
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
        <button className={`toggle${showLogo ? ' on' : ''}`} onClick={() => onLogoChange(!showLogo)} aria-pressed={showLogo}>
          <div className="toggle-knob" />
        </button>
      </div>

      {showLogo && template === 'big-headline' && (
        <>
          <div className="appearance-row-label">Logo Position</div>
          <div className="logo-position-swatches">
            {LOGO_POSITIONS.map(p => (
              <button
                key={p.id}
                className={`logo-pos-swatch${logoPosition === p.id ? ' active' : ''}`}
                onClick={() => onLogoPositionChange(p.id)}
                title={p.id.replace('-', ' ')}
              >
                {p.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
