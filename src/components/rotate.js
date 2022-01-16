import React from 'react'
import SVGEmbeddedStyle from '../shared/SVGEmbeddedStyle'
import {uniqId, RotateAnimation} from '../lib';

const RotateLoading = ({size, duration, opacity, strokeWidth, ...rest}) => {
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
    <svg width={size} height={size}>
      <SVGEmbeddedStyle animation={RotateAnimation} />
      <circle {...circleProps} style={{opacity}} />
      <circle
        {...circleProps}
        style={{
          animation: `Rotate${uniqId} linear infinite`,
          strokeDasharray: '20 180',
          transformOrigin: 'center',
          animationDuration: `${duration}s`,
        }}
      />
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
