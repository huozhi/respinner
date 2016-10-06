import React from 'react'
import cx from 'classnames'
import {repeat} from '../helpers'
import './SpinLoader.css'

const SpinLoader = ({size, barWidth, barHeight, className, count, fill, borderRadius, ...rest}) => {
  const radius = size / 2 - barHeight / 2

  return (
    <svg width={size} height={size} className={cx('SpinLoader', className)}>
      {repeat(count).map((_, i) => {
        const angle = 360 / count * i
        const style = {
          transform: `rotate(${90 + angle}deg)`,
          animationDelay: `${i * 0.12}s`,
        }

        /* (barWidth + borderRadius) / 2 is used to fix the excursion caused by thickness */
        const x = Math.cos(Math.PI * angle / 180) * radius + radius + (barWidth + borderRadius) / 2
        const y = Math.sin(Math.PI * angle / 180) * radius + radius
        return (
          <rect
            className="SpinLoader-child"
            style={style}
            x={x}
            y={y}
            key={`r-${i}`}
            fill={fill}
            width={barWidth}
            height={barHeight}
            rx={borderRadius}
            ry={borderRadius}
          />
        )
      })}
    </svg>
  )
}

SpinLoader.defaultProps = {
  size: 40,
  count: 8,
  barWidth: 4,
  barHeight: 10,
  borderRadius: 1,
}

export default SpinLoader
