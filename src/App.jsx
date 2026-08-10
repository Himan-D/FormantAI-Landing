import { useEffect, useState } from 'react'
import './index.css'

function App() {
  const [typedText, setTypedText] = useState("");
  const terminalText = `> Initializing FormantSOTAEngine...
> Loading WavLM weights... [OK]
> Fusing Late-Fusion Heads... [OK]
> Analyzing: apple_tts_clone.wav
> SYNTHETIC PROBABILITY: 99.8%
> Emotion: NEUTRAL
> Threat Level: CRITICAL`;

  useEffect(() => {
    let currentText = "";
    let i = 0;
    
    const typeWriter = () => {
      if (i < terminalText.length) {
        currentText += terminalText.charAt(i);
        setTypedText(currentText);
        i++;
        setTimeout(typeWriter, Math.random() * 15 + 10);
      }
    };
    
    setTimeout(typeWriter, 500);

    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      const grid = document.querySelector('.grid-bg');
      if(grid) {
        grid.style.transform = `translate(-${x * 20}px, -${y * 20}px)`;
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="grid-bg"></div>
      
      <nav className="navbar">
        <div className="logo">FORMANT_AI<span className="cursor">_</span></div>
        <div className="nav-links">
          <a href="#architecture" className="nav-link">Architecture</a>
          <a href="#models" className="nav-link">Models</a>
          <a href="#enterprise" className="btn-primary">Enterprise Deploy</a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="tagline">[ SOTA DEEPFAKE DETECTION ]</div>
            <h1 className="hero-title">RADICALLY<br/>SECURING<br/>AUDIO.</h1>
            <p className="hero-subtitle">Open-source models are brittle. We built a native WavLM Late-Fusion architecture that maps the physical constraints of the human vocal tract. Formant AI detects what traditional algorithms miss.</p>
            <div className="cta-group">
              <a href="#" className="btn-primary large">Read the Docs</a>
              <a href="#" className="btn-secondary large">View GitHub</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="title">orchestrator@formant: ~</span>
              </div>
              <div className="terminal-body">
                {typedText.split('\n').map((line, idx) => {
                  if (line.includes('99.8%')) {
                    return <div key={idx} className="highlight-red">{line}</div>;
                  }
                  return <div key={idx}>{line}</div>;
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="architecture" className="bento-grid">
          <div className="bento-item wide">
            <h3>01 // THE SOTA ARCHITECTURE</h3>
            <p>We abandoned naive Model-Level Ensembles. Formant AI utilizes a Feature-Level Neural Ensemble driven by a shared WavLM backbone. Lightning fast. Zero single points of failure.</p>
          </div>
          <div className="bento-item">
            <h3>02 // EDGE DEPLOY</h3>
            <p>Distilled to 380MB. Runs natively on your edge infrastructure with complete privacy.</p>
          </div>
          <div className="bento-item">
            <h3>03 // <span className="highlight-green">SUB 2-SEC LATENCY</span></h3>
            <p>Real-time stream analysis optimized for telephony and VoIP protocols.</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-logo">FORMANT_AI</div>
          <div className="footer-copyright">© 2026 Formant AI, Inc. Built for Enterprise.</div>
        </div>
      </footer>
    </>
  )
}

export default App
