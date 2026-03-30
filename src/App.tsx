import AdPreview from './components/AdPreview'
import type { AdConfig } from './lib/types'
import './App.css'

const testConfig: AdConfig = {
  platform: 'instagram',
  purpose: 'product-feature',
  template: 'big-type-body',
  theme: 'dark',
  background: 'dot-grid',
  sizeKey: '1:1',
  showLogo: true,
  copy: {
    headline: 'Code faster with AI that knows your codebase.',
    body: 'Augment indexes your entire repo so suggestions are always in context.',
    stat: '10×',
    statLabel: 'faster context',
    cta: 'Try free →',
  },
  imageUrl: null,
}

export default function App() {
  return (
    <div className="app">
      <header className="topbar">
        <span className="topbar-logo">AUGMENT</span>
        <span className="topbar-sep">/</span>
        <span className="topbar-title">Ad Builder</span>
      </header>
      <nav className="platform-tabs">
        <button className="platform-tab active">Instagram</button>
        <button className="platform-tab">LinkedIn</button>
        <button className="platform-tab">X / Twitter</button>
      </nav>
      <div className="main">
        <aside className="left-panel">
          <div className="panel-section">
            <div className="section-label">Ad Purpose</div>
          </div>
        </aside>
        <main className="right-panel">
          <AdPreview config={testConfig} />
        </main>
      </div>
    </div>
  )
}
