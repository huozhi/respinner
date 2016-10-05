# Respinner
> react components for spinners or loaders. Each loader was combined css animation and render dom as svg.
easily controlled by react porps.

### Examples

website: [huozhi.github.io/respinner/](https://huozhi.github.io/respinner/)

### Usage

```sh
npm install --save respinner
```

**4** kinds of loaders supported yer, just import it when use with react.

```js
import {
  BeatLoader, CircularLoader, RotateLoader, BounceLoader
} from 'respinner'

// ...

render() {
  <div className="spinners">
    <BeatLoader fill="#333" count={3} />
    <CircularLoader stroke="#666" />
  </div>
}
```

See more details in `demo` directory.

### Setup

```sh
npm install
```

### Development

```sh
npm start

# see demo in http://localhost:3000
```

### Build

```
npm run build
```
