import React from 'react'
import cx from 'classnames'
import {getCSSSecond} from '../helpers'
import './RotateLoader.css'

const RotateLoader = ({size, strokeWidth, duration, opacity, className, ...rest}) => {
  const radius = size / 2 - strokeWidth

  const circleProps = {
    strokeWidth,
    r: radius,
    cx: radius + strokeWidth,
    cy: radius + strokeWidth,
    fill: 'none',
    className: 'RotateLoader-item',
    ...rest,
  }

  const bgStyle = {
    opacity,
  }

  return (
    <svg className={cx('RotateLoader', className)} width={size} height={size}>
      <circle {...circleProps} style={bgStyle} />
      <circle {...circleProps} style={{animationDuration: getCSSSecond(duration)}} />
    </svg>
  )
}

RotateLoader.defaultProps = {
  size: 40,
  opacity: 0.2,
  strokeWidth: 4,
  duration: 1.6,
}

export default RotateLoader
