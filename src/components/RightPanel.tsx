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
}

export default function RightPanel({ config, previewRef, onSizeChange }: Props) {
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
