# Respinner
![npm-download](https://img.shields.io/npm/dm/respinner.svg) ![npm-version](https://img.shields.io/npm/v/respinner.svg) ![license](https://img.shields.io/npm/l/respinner.svg)

> react components for spinners or loaders. Each loader was combined css animation and render dom as svg.
easily controlled by react porps.

You could change the count of spinner's children by props `count`, also the `color` of themselves. All of them built with SVG, so you can easily scale them with `width` and `height`.

### Examples

![demo](https://raw.githubusercontent.com/huozhi/respinner/master/docs/public/demo.gif)

See more details in `demo` directory or visit [website](https://respinner.vercel.app/)

### Usage

```sh
npm install --save respinner
```

Just import it when use with react. Issues go to [issues](https://github.com/huozhi/respinner/issues).

#### Basic

```jsx
import React, {Component} from 'react'
// easily import from entry
import {
  BeatLoading, BounceLoading, CircularLoading,
  ClockLoading, RotateLoading, SpinLoading,
  WaveLoading, DashLoading, CopperLoading
} from 'respinner'

class LoadingComponents extends Component {  
  render() {
    <div className="spinners">
      <SpinLoading fill="#777" borderRadius={4} count={12} /> // use with customized props
      <CircularLoading /> // or just use with default props
    </div>
  }
}
```

#### Use with SVG `use`

```jsx
// pre-define a spinner
<SpinLoading borderRadius={2} count={10} id="spin" />

// reuse them
<svg width="40"><use href="#spin" fill="#fff" /></svg>
<svg width="40"><use href="#spin" fill="#fff" /></svg>
```

### API

#### Common Props

- className
- width
- height
- stroke/fill (stroke for circle ones, fill for rectangle ones)

#### 1. BeatLoading

- gap: default 6
- size: default 8
- count: default 6
- duration: default 0.8

#### 2. CircularLoading

- size: default 40
- strokeWidth: default 4
- linecap: default 'round'

#### 3. BounceLoading

- gap: default 6
- count: default 4
- barWidth: default 4
- barHeight: default 16
- duration: default 0.8

#### 4. RotateLoading

- size: default 40
- opacity: default 0.2
- strokeWidth: default 4

#### 5. SpinLoading

- size: default 40
- count: default 8
- barWidth: default 4
- duration: default 1
- barHeight: default 10
- borderRadius: default 1

#### 6. WaveLoading

- size: default 40
- count: default 3
- duration: default 1.5
- strokeWidth: default 2

### 7. ClockLoading

- size
- duration
- strokeWidth

### 8. DashLoading

- size: default 40
- duration: default 1.8
- stroke

### 9. CopperLoading

- size: default 40
- strokeWidth: default 4

### Development

```sh
npm install
npm start

# see demo in http://localhost:3000
```

### Build

```
npm run build
```
