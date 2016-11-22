import React from 'react'
import {render} from 'react-dom'
import {
  BeatLoader, CircularLoader, RotateLoader, BounceLoader, SpinLoader, WaveLoader
} from 'respinner'
import Playground from 'component-playground'
import './app.css'

const color = '#4197ff'

const loaders = [
  {
    code: `<BeatLoader fill="${color}" count={4} />`,
    node: (<BeatLoader fill={color} count={4} />),
    component: {BeatLoader},
  }, {
    code: `<CircularLoader stroke="${color}" />`,
    node: (<CircularLoader stroke={color} />),
    component: {CircularLoader},
  }, {
    code: `<BounceLoader fill="${color}" gap={5} />`,
    node: (<BounceLoader fill={color} gap={5} />),
    component: {BounceLoader},
  }, {
    code: `<RotateLoader stroke="${color}" opacity={0.4} />`,
    node: (<RotateLoader stroke={color} opacity={0.4} />),
    component: {RotateLoader},
  }, {
    code: `<SpinLoader fill="${color}" borderRadius={2} count={12} />`,
    node: (<SpinLoader fill={color} borderRadius={2} count={12} />),
    component: {SpinLoader},
  }, {
    code: `<WaveLoader stroke="${color}" strokeWidth={3} />`,
    node: (<WaveLoader stroke={color} strokeWidth={3} />),
    component: {WaveLoader},
  },
]

const user = 'huozhi'
const repo = 'respinner'

const App = () => (
  <div className="App">
    <div className="App-title">
      <h1>React SVG Spinners</h1>
      <div className="App-github">
        <iframe src={`https://ghbtns.com/github-btn.html?user=${user}&repo=${repo}&type=fork`} frameBorder="0" scrolling="0" width="60px" height="20px" />
        <iframe src={`https://ghbtns.com/github-btn.html?user=${user}&repo=${repo}&type=star`} frameBorder="0" scrolling="0" width="60px" height="20px" />
      </div>
    </div>
    <div className="App-container">
      {loaders.map(({node, code, component}, idx) => (
        <div key={`loader-${idx}`} className="App-demo">
          <Playground
            theme="paraiso-dark"
            codeText={code}
            scope={{
              React,
              ...component,
            }}
          />
        </div>
      ))}
    </div>
  </div>
)

render(
  <App />,
  document.getElementById('root')
)
