import React from 'react'
import InlineSvgStyle from '../lib/inline-style'
import { uniqId } from '../lib/styles'

const TransRotate = (
  `@keyframes TransRotate${uniqId}` +
    '{' +
    '0% {transform:rotate(45deg) scale(1);}' +
    '50% {transform:rotate(405deg) scale(.2);}' +
    '100% {transform:rotate(765deg) scale(1);}'
)

const CopperLoading = ({ size = 40, strokeWidth = 4, duration = 2, stroke, fill, ...rest }) => {
  const commonStyle = {
    transformOrigin: 'center',
    animation: `TransRotate${uniqId} ${duration}s infinite`,
  }
  return (
    <svg {...rest} width={size} height={size}>
      <InlineSvgStyle animation={TransRotate} />
      <rect width={size / 3} height={size / 3} x={size / 3} y={size / 3} fill={fill} style={commonStyle} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - strokeWidth}
        fill="transparent"
        stroke={fill}
        strokeWidth={strokeWidth}
        style={{
          ...commonStyle,
          animationDelay: `${duration / 2}s`,
        }}
      />
    </svg>
  )
}

export default CopperLoading
