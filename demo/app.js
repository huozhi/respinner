import React from 'react'
import {render} from 'react-dom'
import {
  BeatLoader, CircularLoader, RotateLoader, BounceLoader, SpinLoader, WaveLoader, ClockLoader
} from 'respinner'

import Playground from 'component-playground'
import './app.css'

const color = '#4197ff'

const loaders = [
  {
    code: `<BeatLoader fill="${color}" count={4} />`,
    component: {BeatLoader},
  }, {
    code: `<CircularLoader size={40} duration={1} stroke="${color}" />`,
    component: {CircularLoader},
  }, {
    code: `<BounceLoader fill="${color}" gap={5} />`,
    component: {BounceLoader},
  }, {
    code: `<RotateLoader duration={1} stroke="${color}" opacity={0.4} />`,
    component: {RotateLoader},
  }, {
    code: `<SpinLoader fill="${color}" borderRadius={2} count={12} />`,
    component: {SpinLoader},
  }, {
    code: `<WaveLoader stroke="${color}" strokeWidth={3} />`,
    component: {WaveLoader},
  }, {
    code: `<ClockLoader size={40} stroke="${color}" duration={2} strokeWidth={2} />`,
    component: {ClockLoader},
  }
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
      {loaders.map(({code, component}, idx) => (
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
