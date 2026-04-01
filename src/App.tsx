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
  const [uiTheme, setUiTheme] = useState<'dark' | 'light'>('dark')
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
    <div className={`app${uiTheme === 'light' ? ' ui-light' : ''}`}>
      <header className="topbar">
        <span className="topbar-logo">AUGMENT</span>
        <span className="topbar-sep">/</span>
        <span className="topbar-title">Ad Builder</span>
        <button
          className="ui-theme-toggle"
          onClick={() => setUiTheme(t => t === 'dark' ? 'light' : 'dark')}
          title={uiTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          type="button"
        >
          {uiTheme === 'dark' ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4"/>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
            </svg>
          )}
        </button>
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
