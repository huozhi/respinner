import React from 'react'
import cx from 'classnames'
import './RotateLoader.css'

const RotateLoader = ({size, strokeWidth, opacity, className, ...rest}) => {
  const radius = size / 2 - strokeWidth

  const circleProps = {
    strokeWidth,
    r: radius,
    cx: radius + strokeWidth,
    cy: radius + strokeWidth,
    fill: 'none',
    ...rest,
  }

  return (
    <svg className={cx('RotateLoader', className)} width={size} height={size}>
      <circle {...circleProps} />
      <circle {...circleProps} />
    </svg>
  )
}

RotateLoader.defaultProps = {
  size: 40,
  strokeWidth: 4,
}

export default RotateLoader
