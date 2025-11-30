import React from 'react'

const ClockLoading = (
  { size = 40, duration = 2, strokeWidth = 2, color, stroke, ...rest }: {
    size?: number
    duration?: number
    strokeWidth?: number
    color?: string
    stroke?: string
  } & React.SVGProps<SVGSVGElement>) => {
  const center = size / 2
  const strokeColor = color || stroke
  const needleProps = {
    strokeWidth: strokeWidth,
    stroke: strokeColor,
    strokeLinecap: 'round' as const,
    x1: center,
    y1: strokeWidth * 2,
    x2: center,
    y2: size - strokeWidth * 2,
  }

  return (
    <svg {...rest} width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle fill="none" stroke={strokeColor} strokeWidth={strokeWidth} cx={center} cy={center} r={size / 2 - strokeWidth} />
      <line {...needleProps} strokeDasharray={`${size / 3} ${size / 2}`} strokeDashoffset={size / 3 + strokeWidth * 2}>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from={`0 ${center} ${center}`}
          to={`360 ${center} ${center}`}
          dur={`${duration}s`}
          repeatCount="indefinite"
        />
      </line>
    </svg>
  )
}

export default ClockLoading
