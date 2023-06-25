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
} from 'respinner'

const color = '#4197ff'

const spinners = [
  {
    code: `<BeatLoading fill="${color}" count={4} />`,
    component: <BeatLoading fill={color} count={4} />,
  },
  {
    code: `<CircularLoading size={40} duration={1} stroke="${color}" />`,
    component: <CircularLoading size={40} duration={1} stroke={color} />,
  },
  {
    code: `<BounceLoading fill="${color}" gap={5} />`,
    component: <BounceLoading fill={color} gap={5} />,
  },
  {
    code: `<RotateLoading duration={1} stroke="${color}" opacity={0.4} />`,
    component: <RotateLoading duration={1} stroke={color} opacity={0.4} />,
  },
  {
  code: `<SpinLoading fill="${color}" borderRadius={2} count={10} />`,
    component: <SpinLoading fill={color} borderRadius={2} count={10} />,
  },
  {
    code: `<WaveLoading stroke="${color}" strokeWidth={3} count={2} />`,
    component: <WaveLoading stroke={color} strokeWidth={3} count={2} />,
  },
  {
    code: `<ClockLoading size={40} stroke="${color}" duration={2} strokeWidth={2} />`,
    component: <ClockLoading size={40} stroke={color} duration={2} strokeWidth={2} />,
  },
  {
    code: `<DashLoading size={40} stroke="${color}" duration={1.6} />`,
    component: <DashLoading stroke={color} duration={1.6} />,
  },
  {
    code: `<CopperLoading size={40} strokeWidth={3} fill="${color}" />`,
    component: <CopperLoading size={40} strokeWidth={3} fill={color} />,
  },
]

export default function App() {
  return (
    <div className="App">
      <div className="App-title">
        <h1 style={{ fontWeight: 900 }}>Respinner</h1>
        <div className="App-info">
          <span>
            <a href="https://github.com/huozhi/respinner">{`github`}</a>
          </span>
          <span>
            <a href="https://npm.in/respinner">{`npm`}</a>
          </span>
        </div>
      </div>
      <div className="App-container">
        {spinners.map(({ code, component }, idx) => (
          <div key={`loader-${idx}`} className="App-demo">
            <div className="Example">
              <div className="Example-preview">{component}</div>
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

// const root = createRoot(document.getElementById('root'))
// root.render(<App />)
