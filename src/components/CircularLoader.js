import React from 'react'
import cx from 'classnames'
import './CircularLoader.css'

const CircularLoader = ({className, stroke, strokeWidth, linecap, size, ...rest}) => {
  const radius = size / 2 - strokeWidth
  return (
    <svg
      {...rest}
      className={cx('CircularLoader', className)}
      width={size}
      height={size}
    >
      <circle
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={linecap}
        fill={'none'}
        cx={radius + strokeWidth}
        cy={radius + strokeWidth}
        r={radius}
      />
    </svg>
  )
}

CircularLoader.defaultProps = {
  size: 40,
  strokeWidth: 4,
  linecap: 'round',
}

export default CircularLoader
