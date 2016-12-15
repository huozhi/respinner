import React from 'react'
import cx from 'classnames'
import './ClockLoader.css'

const ClockLoader = ({size, strokeWidth, duration, className, ...rest}) => {
  const needleProps = {
    strokeWidth: strokeWidth,
    strokeLinecap: 'round',
    x1: size / 2,
    y1: strokeWidth * 2,
    x2: size / 2,
    y2: size - strokeWidth * 2,
  }

  return (
    <svg {...rest} className={cx('ClockLoader', className)} width={size} height={size}>
      <circle
        fill="none"
        strokeWidth={strokeWidth}
        cx={(size) / 2}
        cy={(size) / 2}
        r={size / 2 - strokeWidth}
      />
      <line
        className="ClockLoader-needle"
        {...needleProps}
        strokeDasharray={`${size / 3} ${size / 2}`}
        strokeDashoffset={size / 3 + strokeWidth * 2}
        style={{animationDuration: `${duration}s`}}
      />
    </svg>
  )
}

export default ClockLoader
