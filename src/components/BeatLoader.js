import React from 'react'
import cx from 'classnames'
import {repeat} from '../helpers'
import './BeatLoader.css'

const BeatLoader = ({className, duration, count, fill, size, gap, ...rest}) => {
  const viewWidth = (size + gap) * count - gap

  return (
    <svg
      width={viewWidth}
      height={size}
      className={cx('BeatLoader', className)}
      {...rest}
    >
      {repeat(count).map((_, i) => {
        const style = i > 0 ? {
          animationDelay: `${duration / count * (i)}s`
        } : {}

        return (
          <circle
            key={`b-${i}`}
            style={style}
            fill={fill}
            r={size / 2}
            cx={size / 2 + (size + gap) * (i + 1)}
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
