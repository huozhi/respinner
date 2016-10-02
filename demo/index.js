import React from 'react'
import {render} from 'react-dom'
import {BeatLoader, CircularLoader, RotateLoader, BounceLoader} from '..'
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
    code: `<RotateLoader stroke="${color}" />`,
    node: (<RotateLoader stroke={color} />),
  }
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
