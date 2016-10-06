# Respinner
> react components for spinners or loaders. Each loader was combined css animation and render dom as svg.
easily controlled by react porps.

### Examples

See more details in `demo` directory or visit website: [huozhi.github.io/respinner/](https://huozhi.github.io/respinner/)

### Usage

```sh
npm install --save respinner
```

Yet **6** kinds of loaders supported, just import it when use with react.

```js
import {
  BeatLoader, CircularLoader, RotateLoader, BounceLoader, SpinLoader, WaveLoader
} from 'respinner'

// ...

render() {
  <div className="spinners">
    <BeatLoader fill="#333" count={3} />
    <CircularLoader stroke="#666" />
    <SpinLoader fill="#777" borderRadius={4} />
  </div>
}
```

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
