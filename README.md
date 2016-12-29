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
import BeatLoader from 'respinner/lib/BeatLoader'
import BounceLoader from 'respinner/lib/BounceLoader'
import CircularLoader from 'respinner/lib/CircularLoader'
import ClockLoader from 'respinner/lib/ClockLoader'
import RotateLoader from 'respinner/lib/RotateLoader'
import SpinLoader from 'respinner/lib/SpinLoader'
import WaveLoader from 'respinner/lib/WaveLoader'

class LoadingComponent extends Component {  
  render() {
    <div className="spinners">
      <BeatLoader fill="#333" count={3} />
      <CircularLoader stroke="#666" />
      <SpinLoader fill="#777" borderRadius={4} />
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

#### 1. BeatLoader

- gap: default 6
- size: default 8
- count: default 6
- duration: default 0.8

#### 2. CircularLoader

- size: default 40
- strokeWidth: default 4
- linecap: default 'round'

#### 3. BounceLoader

- gap: default 6
- count: default 4
- barWidth: default 4
- barHeight: default 16
- duration: default 0.8

#### 4. RotateLoader

- size: default 40
- opacity: default 0.2
- strokeWidth: default 4

#### 5. SpinLoader

- size: default 40
- count: default 8
- barWidth: default 4
- duration: default 1
- barHeight: default 10
- borderRadius: default 1

#### 6. WaveLoader

- size: default 40
- count: default 3
- duration: default 1.5
- strokeWidth: default 2

### 7. ClockLoader

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
