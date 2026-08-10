import { useState, useEffect } from 'react'
import './index.css'

function App() {
  const marqueeText = " // SOTA DEEPFAKE DETECTION // NEURAL ENSEMBLE // ZERO SINGLE POINT OF FAILURE // EDGE OPTIMIZED // SOTA DEEPFAKE DETECTION // NEURAL ENSEMBLE // ZERO SINGLE POINT OF FAILURE // EDGE OPTIMIZED ";

  return (
    <>
      <nav className="nav-header">
        <div style={{ width: '1.5rem' }}></div>
        <div style={{ background: 'var(--color-primary-surface-contrast)' }}></div>
        <div className="nav-logo-container">
          <a href="/" className="nav-logo">Formant_AI</a>
        </div>
        <div style={{ background: 'var(--color-primary-surface-contrast)' }}></div>
        <div className="nav-menu">
          <a href="#architecture" className="nav-link">Architecture</a>
          <a href="#engine" className="nav-link">Engine</a>
          <a href="#deploy" className="btn-primary" style={{ height: '2.5rem', padding: '0 1rem', fontSize: '0.75rem' }}>Deploy</a>
        </div>
      </nav>

      <main>
        <section className="hero-container">
          <div className="hero-left">
            <h1 className="hero-title">
              Building<br/>Truth<br/>in Audio
            </h1>
            <p className="hero-subtitle">
              Open-source models are brittle. We built a native WavLM Late-Fusion architecture that maps the physical constraints of the human vocal tract.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#docs" className="btn-secondary">Read Docs</a>
              <a href="#github" className="btn-secondary" style={{ background: 'var(--color-primary-surface)', color: 'var(--color-primary-surface-contrast)' }}>GitHub</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="typing-list">
              <div>orchestrator@formant: ~</div>
              <div>initializing FormantSOTAEngine...</div>
              <div>loading WavLM weights... [ok]</div>
              <div>fusing late-fusion heads... [ok]</div>
              <div>analyzing: apple_tts_clone.wav</div>
              <div style={{ color: 'var(--color-primary-accent)', fontWeight: 'bold' }}>synthetic probability: 99.8%</div>
              <div>emotion: neutral</div>
              <div>threat level: critical</div>
            </div>
          </div>
        </section>

        <div className="marquee-container">
          <div className="marquee-content">
            {marqueeText}
          </div>
        </div>

        <section id="architecture" className="feature-grid">
          <div className="feature-box">
            <h3 className="feature-title">01 // The Architecture</h3>
            <p className="feature-desc">
              We abandoned naive Model-Level Ensembles. Formant AI utilizes a Feature-Level Neural Ensemble driven by a shared WavLM backbone. Lightning fast.
            </p>
          </div>
          <div className="feature-box">
            <h3 className="feature-title">02 // Edge Deploy</h3>
            <p className="feature-desc">
              Distilled to 380MB. Runs natively on your edge infrastructure with complete privacy. No bloated API calls needed.
            </p>
          </div>
          <div className="feature-box" style={{ borderRight: 'none' }}>
            <h3 className="feature-title">03 // Low Latency</h3>
            <p className="feature-desc">
              Sub 2-second real-time stream analysis optimized for telephony and VoIP protocols.
            </p>
          </div>
        </section>
      </main>

      <footer style={{ padding: '3rem', display: 'flex', justifyContent: 'space-between', borderTop: '0.0625rem solid var(--color-primary-surface-contrast)' }}>
        <div className="nav-logo">FORMANT_AI</div>
        <div style={{ fontSize: '0.875rem', color: 'var(--neutral-dark-grey)' }}>
          © 2026 Formant AI, Inc. Built for Enterprise.
        </div>
      </footer>
    </>
  )
}

export default App
