import React from 'react'
import cx from 'classnames'
import SVGEmbeddedStyle from '../shared/SVGEmbeddedStyle'

const RotateLoading = ({size, strokeWidth, duration, opacity, className, ...rest}) => {
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
    <svg className={cx('RotateLoading', className)} width={size} height={size}>
      <SVGEmbeddedStyle>
        {`@keyframes Rotate { 100% { transform: rotate(360deg); } }`}
      </SVGEmbeddedStyle>
      <circle {...circleProps} style={{opacity}} />
      <circle
        {...circleProps}
        style={{
          animation: 'Rotate linear infinite',
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
