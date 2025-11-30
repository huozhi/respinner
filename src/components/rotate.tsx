import React from 'react'

const RotateLoading = (
  { size = 40, opacity = 0.2, strokeWidth = 4, duration = 1.6, color, stroke, ...rest }: {
    size?: number
    opacity?: number
    strokeWidth?: number
    duration?: number
    color?: string
    stroke?: string
  } & React.SVGProps<SVGSVGElement>) => {
  const radius = size / 2 - strokeWidth
  const center = radius + strokeWidth
  const strokeColor = color || stroke
  const circleProps = {
    strokeWidth,
    stroke: strokeColor,
    r: radius,
    cx: radius + strokeWidth,
    cy: radius + strokeWidth,
    fill: 'none',
  }

  return (
    <svg {...rest} width={size} height={size}>
      <circle {...circleProps} style={{ opacity }} />
      <circle {...circleProps} strokeDasharray="20 180">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from={`0 ${center} ${center}`}
          to={`360 ${center} ${center}`}
          dur={`${duration}s`}
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  )
}

export default RotateLoading
