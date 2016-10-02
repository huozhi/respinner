import React from 'react'
import {render} from 'react-dom'
import {BeatLoader, CircularLoader, RotateLoader, BounceLoader} from '..'
import './demo.css'

const color = '#4197ff'

const loaders = [
  (<BeatLoader fill={color} />),
  (<CircularLoader stroke={color} />),
  (<BounceLoader fill={color} />),
  (<RotateLoader stroke={color} />),
]

const App = () => (
  <div className="App">
    <div className="App-title">
      <h1>React SVG Spinners</h1>
    </div>
    <div className="App-demo">
      {loaders.map((loader, idx) => (
        <div key={`loader-${idx}`} className="App-loader">
          {loader}
        </div>
      ))}
    </div>
  </div>
)

render(
  <App />,
  document.getElementById('root')
)
