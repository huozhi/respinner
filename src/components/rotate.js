import React from 'react'
import cx from 'classnames'
import {getCSSSecond} from '../lib'
import SVGEmbeddedStyle from '../shared/SVGEmbeddedStyle'

const RotateLoading = ({size, strokeWidth, duration, opacity, className, ...rest}) => {
  const radius = size / 2 - strokeWidth

  const circleProps = {
    strokeWidth,
    r: radius,
    cx: radius + strokeWidth,
    cy: radius + strokeWidth,
    fill: 'none',
    className: 'RotateLoading-item',
    ...rest,
  }

  return (
    <svg className={cx('RotateLoading', className)} width={size} height={size}>
      <SVGEmbeddedStyle>
        {`
          @keyframes Rotate { 100% { transform: rotate(360deg); } }

          .RotateLoading circle:first-child { opacity: .2; }
          .RotateLoading circle:last-child {
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

RotateLoading.defaultProps = {
  size: 40,
  opacity: 0.2,
  strokeWidth: 4,
  duration: 1.6,
}

export default RotateLoading
