import React from 'react'
import cx from 'classnames'
import {repeat} from '../helpers'
import './BeatLoader.css'

const BeatLoader = ({className, duration, count, fill, size, gap, ...rest}) => {
  const viewWidth = (size + gap) * count - gap

  return (
    <svg
      {...rest}
      width={viewWidth}
      height={size}
      className={cx('BeatLoader', className)}
    >
      {repeat(count).map((_, i) => {
        const style = {
          animationDelay: `${-duration / (count + 1) * (count - i)}s`
        }

        return (
          <circle
            className="BeatLoader-child"
            key={`c-${i}`}
            style={style}
            fill={fill}
            r={size / 2}
            cx={size * (i + 1) + gap * i - size / 2}
            cy={size / 2}
          />
        )
      })}
    </svg>
  )
}

BeatLoader.defaultProps = {
  gap: 6,
  size: 8,
  count: 6,
  duration: 0.8,
}

export default BeatLoader
