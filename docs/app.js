import React, {Component} from 'react'
import {render} from 'react-dom'
import {
  BeatLoading,
  BounceLoading,
  CircularLoading,
  ClockLoading,
  RotateLoading,
  SpinLoading,
  WaveLoading,
} from 'respinner'
import hljs from 'highlight.js'
// import CodeMirror from 'react-codemirror'
// import Playground from 'component-playground'
import 'highlight.js/styles/paraiso-dark.css'
import './app.css'

const color = '#4197ff'

const loaders = [
  {
    code: `<BeatLoading fill="${color}" count={4} />`,
    component: <BeatLoading fill={color} count={4} />,
  }, {
    code: `<CircularLoading size={40} duration={1} stroke="${color}" />`,
    component: <CircularLoading size={40} duration={1} stroke={color} />,
  }, {
    code: `<BounceLoading fill="${color}" gap={5} />`,
    component: <BounceLoading fill={color} gap={5} />,
  }, {
    code: `<RotateLoading duration={1} stroke="${color}" opacity={0.4} />`,
    component: <RotateLoading duration={1} stroke={color} opacity={0.4} />,
  }, {
    code: `<SpinLoading fill="${color}" borderRadius={2} count={10} />`,
    component: <SpinLoading fill={color} borderRadius={2} count={10} />,
  }, {
    code: `<WaveLoading stroke="${color}" strokeWidth={3} />`,
    component: <WaveLoading stroke={color} strokeWidth={3} />,
  }, {
    code: `<ClockLoading size={40} stroke="${color}" duration={2} strokeWidth={2} />`,
    component: <ClockLoading size={40} stroke={color} duration={2} strokeWidth={2} />,
  }
]

const user = 'huozhi'
const repo = 'respinner'

const getStartCode =
`import {
  BeatLoading, BounceLoading, CircularLoading,
  ClockLoading, RotateLoading, SpinLoading, WaveLoading
} from 'respinner'

// or import one directly, like the following
import BeatLoading from 'respinner/lib/beat'
import BounceLoading from 'respinner/lib/bounce'
import CircularLoading from 'respinner/lib/circular'
import ClockLoading from 'respinner/lib/clock'
import RotateLoading from 'respinner/lib/rotate'
import SpinLoading from 'respinner/lib/spin'
import WaveLoading from 'respinner/lib/wave'

// Then juse use it with customized or default props, see the examples below

const Spinner = () => <CircularLoading />
`

const Demo = () => (
  <div className="App">
    <div className="App-title">
      <h1>React SVG Spinners</h1>
      <div className="App-github">
        <iframe src={`https://ghbtns.com/github-btn.html?user=${user}&repo=${repo}&type=fork`} frameBorder="0" scrolling="0" width="60px" height="20px" />
        <iframe src={`https://ghbtns.com/github-btn.html?user=${user}&repo=${repo}&type=star`} frameBorder="0" scrolling="0" width="60px" height="20px" />
      </div>
    </div>
    <div className="App-container">
      <div className="App-getStart">
        <pre>
          <code className="lang-js">
            {getStartCode}
          </code>
        </pre>
        {/* <CodeMirror
          options={{
            mode: 'xml',
            theme: 'paraiso-dark',
            readOnly: true,
            lineNumbers: false,
            lineWrapping: true,
            smartIndent: false,
            matchBrackets: true,
          }}
          value={getStartCode}
        /> */}
      </div>
      {loaders.map(({code, component}, idx) => (
        <div key={`loader-${idx}`} className="App-demo">
          <div className="Example">
            <div className="Example-preview">
              {component}
            </div>
            <pre>
              <code className="Example-code lang-xml">{code}</code>
            </pre>
          </div>
        </div>
      ))}
    </div>
  </div>
)

class App extends Component {
  componentDidMount() {
    hljs.initHighlighting()
  }
  render() {
    return <Demo />
  }
}

render(
  <App />,
  document.getElementById('root')
)
