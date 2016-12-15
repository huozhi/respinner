import React from 'react'
import cx from 'classnames'
import './CircularLoader.css'

/*
 * hard to find the law of google style circular loading
 * set 40 x 40 as basic viewbox size. scale viewbox when use.
 */

const CircularLoader = ({className, duration, stroke, strokeWidth, linecap, size, ...rest}) => {
  const radius = size / 2 - strokeWidth

  return (
    <svg
      {...rest}
      viewBox="0 0 40 40"
      className={cx('CircularLoader', className)}
      width={size}
      height={size}
      style={{animationDuration: `${duration * 2}s`}}
    >
      <circle
        className="CircularLoader-bar"
        style={{animationDuration: `${duration}s`}}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={linecap}
        cx={20}
        cy={20}
        r={20 - strokeWidth}
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
