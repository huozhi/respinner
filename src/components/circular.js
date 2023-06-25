import React from 'react'

// View box is based on 50x50 size
// from: https://codepen.io/jczimm/pen/vEBpoL
const CIRCLE_RADIUS = 50 / 2

const CircularLoading = ({ size = 40, strokeWidth = 5, linecap = 'round', duration = 1, stroke, ...rest }) => {
  const center = CIRCLE_RADIUS
  return (
    <svg {...rest} viewBox={`0 0 ${CIRCLE_RADIUS * 2} ${CIRCLE_RADIUS * 2}`} width={size} height={size}>
      <circle
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={linecap}
        cx={CIRCLE_RADIUS}
        cy={CIRCLE_RADIUS}
        r={CIRCLE_RADIUS - strokeWidth}
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from={`0 ${center} ${center}`}
          to={`360 ${center} ${center}`}
          dur={`${(duration * 4) / 3}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dasharray"
          values="1,200; 89,200; 89 200;"
          dur={`${duration}s`}
          repeatCount="indefinite"
        />
        <animate attributeName="stroke-dashoffset" values="0;-35;-124;" dur={`${duration}s`} repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

export default CircularLoading
