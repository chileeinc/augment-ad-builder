import { useState, useRef } from 'react'
import type { AdConfig, Platform } from './lib/types'
import { getSizesForPlatform } from './lib/config'
import PlatformTabs from './components/PlatformTabs'
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'
import './App.css'

const DEFAULT_CONFIG: AdConfig = {
  platform: 'instagram',
  template: 'big-headline',
  theme: 'dark',
  background: 'none',
  sizeKey: '1:1',
  showLogo: true,
  ctaStyle: 'filled-arrow',
  logoPosition: 'top-left',
  copy: {},
  imageUrl: null,
}

export default function App() {
  const [config, setConfig] = useState<AdConfig>(DEFAULT_CONFIG)
  const previewRef = useRef<HTMLDivElement>(null)

  function handlePlatformChange(platform: Platform) {
    const sizes = getSizesForPlatform(platform)
    setConfig(c => ({ ...c, platform, sizeKey: sizes[0].key }))
  }

  function updateConfig(patch: Partial<AdConfig>) {
    setConfig(c => ({ ...c, ...patch }))
  }

  function resetConfig() {
    setConfig(DEFAULT_CONFIG)
  }

  return (
    <div className="app">
      <header className="topbar">
        <span className="topbar-logo">AUGMENT</span>
        <span className="topbar-sep">/</span>
        <span className="topbar-title">Ad Builder</span>
      </header>
      <PlatformTabs value={config.platform} onChange={handlePlatformChange} />
      <div className="main">
        <LeftPanel config={config} onChange={updateConfig} onReset={resetConfig} />
        <RightPanel
          config={config}
          previewRef={previewRef}
          onSizeChange={(sizeKey) => updateConfig({ sizeKey })}
        />
      </div>
    </div>
  )
}
