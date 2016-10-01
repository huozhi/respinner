import React from 'react'
import {render} from 'react-dom'
import {BounceLoader, CircularLoader} from '..'
import './demo.css'

const loaders = [
  (<BounceLoader fill={'#0f88eb'} />),
  (<CircularLoader stroke={'#4197ff'} />),
]

const App = () => (
  <div className="App">
    <div className="App-title">
      <h1>React SVG Loading</h1>
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
