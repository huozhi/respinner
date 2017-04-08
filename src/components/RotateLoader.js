import React from 'react'
import cx from 'classnames'
import {getCSSSecond} from '../helpers'
import SVGEmbeddedStyle from './SVGEmbeddedStyle'
// import './RotateLoader.css'

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

  return (
    <svg className={cx('RotateLoader', className)} width={size} height={size}>
      <SVGEmbeddedStyle>
        {`
          @keyframes Rotate { 100% { transform: rotate(360deg); } }

          .RotateLoader circle:first-child { opacity: .2; }
          .RotateLoader circle:last-child {
            animation: Rotate linear infinite;
            stroke-dasharray: 20 180;
            transform-origin: center;
          }
        `}
      </SVGEmbeddedStyle>
      <circle {...circleProps} style={{opacity}} />
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
