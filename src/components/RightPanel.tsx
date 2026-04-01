import type { RefObject } from 'react'
import type { AdConfig } from '../lib/types'
import { getSizesForPlatform, getSizeByKey } from '../lib/config'
import { exportPng, exportSvg, buildFilename } from '../lib/export'
import AdPreview from './AdPreview'
import './RightPanel.css'

interface Props {
  config: AdConfig
  previewRef: RefObject<HTMLDivElement>
  onSizeChange: (sizeKey: string) => void
  uiTheme: 'dark' | 'light'
  onUiThemeToggle: () => void
}

export default function RightPanel({ config, previewRef, onSizeChange, uiTheme, onUiThemeToggle }: Props) {
  const sizes = getSizesForPlatform(config.platform)
  const currentSize = getSizeByKey(config.platform, config.sizeKey)
  const filename = buildFilename(config.platform, config.template, config.sizeKey)
  const canExportSvg = true

  async function handleExportPng() {
    if (!previewRef.current) return
    await exportPng(previewRef.current, filename)
  }

  async function handleExportSvg() {
    if (!previewRef.current) return
    await exportSvg(previewRef.current, filename)
  }

  return (
    <main className="right-panel">
      <div className="right-panel-controls">
        <span className="preview-label">
          {config.platform.charAt(0).toUpperCase() + config.platform.slice(1)} — {currentSize.label}
        </span>
        <div className="right-panel-controls-right">
          <div className="size-tabs">
            {sizes.map(s => (
              <button
                key={s.key}
                className={`size-tab${config.sizeKey === s.key ? ' active' : ''}`}
                onClick={() => onSizeChange(s.key)}
              >
                {s.key}
              </button>
            ))}
          </div>
          <button
            className="ui-theme-toggle"
            onClick={onUiThemeToggle}
            title={uiTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            type="button"
          >
            {uiTheme === 'dark' ? (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
              </svg>
            ) : (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
      <AdPreview ref={previewRef} config={config} />
      <div className="export-row">
        <button className="export-btn primary" onClick={handleExportPng}>
          ↓ Download PNG
        </button>
        {canExportSvg && (
          <button className="export-btn secondary" onClick={handleExportSvg}>
            ↓ Download SVG
          </button>
        )}
      </div>
    </main>
  )
}
