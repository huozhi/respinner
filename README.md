# Respinner
> react components for spinners or loaders. Each loader was combined css animation and render dom as svg.
easily controlled by react porps.

You could change the count of spinner's children by props `count`, also the `color` of themselves. All of them built with SVG, so you can easily scale them with `width` and `height`.

### Examples

![demo](http://huozhi.github.io/img/2016/respinner/demo.gif)

See more details in `demo` directory or visit website: [huozhi.github.io/respinner/](https://huozhi.github.io/respinner/)

### Usage

```sh
npm install --save respinner
```

Yet **7** kinds of loaders supported, just import it when use with react. Any suggestions on [issues](https://github.com/huozhi/respinner/issues).

```js
import React, {Component} from 'react'
// easily import from entry
import {CircularLoading} from 'respinner'
 // or import one directly
import SpinLoading from 'respinner/lib/spin'

class LoadingComponent extends Component {  
  render() {
    <div className="spinners">
      <SpinLoading fill="#777" borderRadius={4} count={12} /> // use with customized props
      <CircularLoading /> // or just use with default props
    </div>
  }
}
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
