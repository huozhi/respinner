import React from 'react'
import cx from 'classnames'
import './CircularLoader.css'

/*
 * hard to find the law of google style circular loading
 * set 50 x 50 as basic viewbox size. scale viewbox when use.
 */

const CIRCLE_RADIUS = 50 / 2

const CircularLoader = ({className, duration, stroke, strokeWidth, linecap, size, ...rest}) => {
  const radius = size / 2 - strokeWidth

  return (
    <svg
      {...rest}
      viewBox={`0 0 ${CIRCLE_RADIUS * 2} ${CIRCLE_RADIUS * 2}`}
      className={cx('CircularLoader', className)}
      width={size}
      height={size}
      style={{animationDuration: `${duration * 4 / 3}s`}}
    >
      <circle
        className="CircularLoader-bar"
        style={{animationDuration: `${duration}s`}}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={linecap}
        cx={CIRCLE_RADIUS}
        cy={CIRCLE_RADIUS}
        r={CIRCLE_RADIUS - strokeWidth}
      />
    </svg>
  )
}

CircularLoader.defaultProps = {
  size: 40,
  strokeWidth: 4,
  linecap: 'round',
  duration: 1,
}

export default CircularLoader
