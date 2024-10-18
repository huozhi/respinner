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

const color = '#4197ff'

const spinners = [
  {
    name: 'Beat',
    code: `<BeatLoading fill="${color}" count={4} />`,
    component: <BeatLoading fill={color} count={4} />,
  },
  {
    name: 'Circular',
    code: `<CircularLoading size={40} duration={1} />`,
    component: <CircularLoading size={40} duration={1} stroke={color} />,
  },
  {
    name: 'Bounce',
    code: `<BounceLoading gap={5} />`,
    component: <BounceLoading fill={color} gap={5} />,
  },
  {
    name: 'Rotate',
    code: `<RotateLoading duration={1} opacity={0.4} />`,
    component: <RotateLoading duration={1} stroke={color} opacity={0.4} />,
  },
  {
    name: 'Spin',
    code: `<SpinLoading borderRadius={2} count={10} />`,
    component: <SpinLoading fill={color} borderRadius={2} count={10} />,
  },
  {
    name: 'Wave',
    code: `<WaveLoading strokeWidth={3} count={2} />`,
    component: <WaveLoading stroke={color} strokeWidth={3} count={2} />,
  },
  {
    name: 'Clock',
    code: `<ClockLoading size={40} strokeWidth={2} />`,
    component: <ClockLoading size={40} stroke={color} duration={2} strokeWidth={2} />,
  },
  {
    name: 'Dash',
    code: `<DashLoading size={40} duration={1.6} />`,
    component: <DashLoading stroke={color} duration={1.6} />,
  },
  {
    name: 'Copper',
    code: `<CopperLoading size={40} strokeWidth={3}" />`,
    component: <CopperLoading size={40} strokeWidth={3} fill={color} />,
  },
]

export default function App() {
  return (
    <div className="App">
      <div className="App-title">
        <h1 style={{ fontWeight: 900 }}>RESPINNER</h1>
        <p className="App-title__subtitle">
          Pretty and customizable SVG spinners for React.js
        </p>
        <div className="App-info">
          <span>
            <a href="https://github.com/huozhi/respinner" target='_blank'>{`github`}</a>
          </span>
          <span>
            <a href="https://www.npmjs.com/package/respinner" target='_blank'>{`npm`}</a>
          </span>

        </div>

        <pre>
          <code className="language-javascript">{`npm install respinner`}</code>
        </pre>
      </div>
      
      <div className="App-container">
        {spinners.map(({ code, component, name }, idx) => (
          <div key={`loader-${idx}`} className="App-demo">
            <div className="Example">
              <div className="Example-preview">
                {component}
                <span className="Example-preview__name">
                  {name}
                </span>
              </div>
              <pre className="Example-code">
                <code className="language-javascript">{code}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

