import React from 'react'
import {render} from 'react-dom'
import {
  BeatLoader, CircularLoader, RotateLoader, BounceLoader, SpinLoader, WaveLoader
} from '../src'
import './demo.css'

const color = '#4197ff'

const loaders = [
  {
    code: `<BeatLoader fill="${color}" />`,
    node: (<BeatLoader fill={color} />),
  }, {
    code: `<CircularLoader stroke="${color}" />`,
    node: (<CircularLoader stroke={color} />),
  }, {
    code: `<BounceLoader fill="${color}" />`,
    node: (<BounceLoader fill={color} />),
  }, {
    code: `<RotateLoader stroke="${color}" opacity={0.4} />`,
    node: (<RotateLoader stroke={color} opacity={0.4} />),
  }, {
    code: `<SpinLoader fill="${color}" borderRadius={2} />`,
    node: (<SpinLoader fill={color} borderRadius={2} />),
  }, {
    code: `<WaveLoader stroke="${color}" strokeWidth={3} />`,
    node: (<WaveLoader stroke={color} strokeWidth={3} />),
  },
]

const App = () => (
  <div className="App">
    <div className="App-title">
      <h1>React SVG Spinners</h1>
    </div>
    <div className="App-container">
      {loaders.map(({node, code}, idx) => (
        <div key={`loader-${idx}`} className="App-demo">
          <div className="App-loader">{node}</div>
          <code className="App-code">{code}</code>
        </div>
      ))}
    </div>
  </div>
)

render(
  <App />,
  document.getElementById('root')
)
