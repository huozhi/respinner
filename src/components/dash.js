import React from 'react'
import cx from 'classnames'
import SVGEmbeddedStyle from '../shared/SVGEmbeddedStyle'
import {uniqId} from '../lib'

const DashedRotateAnimation = (dash) => `@keyframes DashedRotate${uniqId}` + '{' +
  `0% {stroke-dasharray:${dash} ${dash} 1 ${dash};transform:rotate(0deg);}` +
  `50% {stroke-dasharray:${dash};transform:rotate(360deg);}` +
  `100% {stroke-dasharray:${dash} ${dash} 1 ${dash};transform:rotate(720deg);}` +
'}'

const DashLoading = ({size, stroke, strokeWidth, duration, className, ...rest}) => {
  const radius = size / 2 - strokeWidth
  const dash = Math.PI * radius / 5

  return (
    <svg {...rest} width={size} height={size} className={cx('DashLoading', className)}>
      <SVGEmbeddedStyle animation={DashedRotateAnimation(dash)} />
      <circle
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        style={{
          transformOrigin: 'center',
          animationName: `DashedRotate${uniqId}`,
          animationDuration: `${duration}s`,
          animationIterationCount: 'infinite',
        }}
      />
    </svg>
  )
}

DashLoading.defaultProps = {
  size: 40,
  duration: 1.8,
  strokeWidth: 4,
}

export default DashLoading
