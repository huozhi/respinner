import React from 'react'
import cx from 'classnames'
import './BounceLoader.css'

const BounceLoader = ({className, duration, count, fill, size, gap, ...rest}) => {
  const viewWidth = (size + gap) * count - gap

  return (
    <svg
      width={viewWidth}
      height={size}
      className={cx('BounceLoader', className)}
      {...rest}
    >
      {Array.apply(null, Array(count)).map((_, i) => {
        const style = (i < count - 1) ? {
          animationDelay: `${duration / count * (i + 1)}s`
        } : {}

        return (
          <circle
            key={`b-${i}`}
            style={style}
            fill={fill}
            r={size / 2}
            cx={size / 2 + (size + gap) * (i + 1)}
            cy={size / 2}
            className="BounceLoader-child"
          />
        )
      })}
    </svg>
  )
}

BounceLoader.defaultProps = {
  gap: 6,
  size: 8,
  count: 6,
  duration: 0.8,
}

export default BounceLoader
