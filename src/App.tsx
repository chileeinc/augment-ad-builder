import './App.css'

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
          <p style={{ color: '#333', fontFamily: 'var(--font-mono)', fontSize: 11 }}>Preview will appear here</p>
        </main>
      </div>
    </div>
  )
}
