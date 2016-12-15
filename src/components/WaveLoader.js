import React from 'react'
import cx from 'classnames'
import {repeat, getCSSSecond} from '../helpers'
import './WaveLoader.css'

const WaveLoader = ({size, className, count, stroke, duration, strokeWidth, ...rest}) => {
  const radius = size / 2 - strokeWidth

  return (
    <svg
      {...rest}
      className={cx('WaveLoader', className)}
      width={size}
      height={size}
    >
      {repeat(count).map((_, i) => {
        const style = {
          animationDelay: `${duration / count * i}s`,
          animationDuration: getCSSSecond(duration)
        }

        return (
          <circle
            className="WaveLoader-item"
            key={`c-${i}`}
            style={style}
            stroke={stroke}
            strokeWidth={strokeWidth}
            fill="none"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
        )
      })}
    </svg>
  )
}

WaveLoader.defaultProps = {
  size: 40,
  count: 3,
  duration: 1.5,
  strokeWidth: 2,
}

export default WaveLoader
