'use client'

import React from 'react'
import {
  BeatLoading,
  BounceLoading,
  CircularLoading,
  ClockLoading,
  RotateLoading,
  SpinLoading,
  WaveLoading,
  CopperLoading,
  DashLoading,
} from '../../src/index'

const color = '#111111'

const spinners = [
  {
    name: 'Beat',
    code: `<BeatLoading color="${color}" count={4} />`,
    component: <BeatLoading color={color} count={4} />,
    id: 'RSP-01'
  },
  {
    name: 'Circular',
    code: `<CircularLoading color="${color}" size={40} />`,
    component: <CircularLoading color={color} size={40} />,
    id: 'RSP-02'
  },
  {
    name: 'Bounce',
    code: `<BounceLoading color="${color}" gap={5} />`,
    component: <BounceLoading color={color} gap={5} />,
    id: 'RSP-03'
  },
  {
    name: 'Rotate',
    code: `<RotateLoading color="${color}" duration={1} />`,
    component: <RotateLoading color={color} duration={1} />,
    id: 'RSP-04'
  },
  {
    name: 'Spin',
    code: `<SpinLoading color="${color}" count={10} />`,
    component: <SpinLoading color={color} count={10} />,
    id: 'RSP-05'
  },
  {
    name: 'Wave',
    code: `<WaveLoading color="${color}" count={2} />`,
    component: <WaveLoading color={color} count={2} />,
    id: 'RSP-06'
  },
  {
    name: 'Clock',
    code: `<ClockLoading color="${color}" size={40} />`,
    component: <ClockLoading color={color} size={40} />,
    id: 'RSP-07'
  },
  {
    name: 'Dash',
    code: `<DashLoading color="${color}" size={40} />`,
    component: <DashLoading color={color} />,
    id: 'RSP-08'
  },
  {
    name: 'Copper',
    code: `<CopperLoading color="${color}" size={40} />`,
    component: <CopperLoading color={color} size={40} />,
    id: 'RSP-09'
  },
]

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1 className="App-title__main">RESPINNER</h1>
          <p className="App-title__subtitle">
            React SVG Spinners Component Collection
            <br />
            v1.0.0 // MIT License
          </p>
          <div className="App-links">
            <a 
              href="https://github.com/huozhi/respinner" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-button"
            >
              GitHub
            </a>
            <a 
              href="https://www.npmjs.com/package/respinner" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-button"
            >
              NPM
            </a>
          </div>
        </div>
        
        <div className="header-meta">
          <div className="meta-barcode"></div>
          <div className="App-install">
            <div className="install-box">
              <div className="install-label">INSTALLATION</div>
              <div className="install-content">
                <code className="install-code">npm install respinner</code>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="App-container">
        <div className="spinners-grid">
          {spinners.map(({ code, component, name, id }, idx) => (
            <div key={`loader-${idx}`} className="spinner-card">
              <div className="card-header">
                <span className="card-type">COMPONENT</span>
                <span className="card-id">{id}</span>
              </div>
              <div className="spinner-preview">
                <div className="spinner-wrapper">
                  {component}
                </div>
                <h3 className="spinner-name">{name}</h3>
              </div>
              <div className="spinner-code">
                <div className="code-top">
                  <span>SOURCE</span>
                  <span>JSX</span>
                </div>
                <pre className="code-content">
                  <code>{code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
