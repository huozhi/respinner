import React from 'react'
import cx from 'classnames'
import './CircularLoader.css'

const CircularLoader = ({className, stroke, strokeWidth, linecap, size, ...rest}) => {
  const radius = size / 2
  return (
    <svg
      {...rest}
      className={cx('CircularLoader', className)}
      width={size + 2 * strokeWidth}
      height={size + 2 * strokeWidth}
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
  linecap: 'round',
  strokeWidth: 4,
  size: 40,
}

export default CircularLoader
