import React, { useEffect, useRef } from 'react'

const ClockLoading = (
  { size = 40, duration = 2, strokeWidth = 2, color, stroke, paused, ...rest }: {
    size?: number
    duration?: number
    strokeWidth?: number
    color?: string
    stroke?: string
    paused?: boolean
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
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return
    if (paused) {
      svgRef.current.pauseAnimations()
    } else {
      svgRef.current.unpauseAnimations()
    }
  }, [paused])

  return (
    <svg {...rest} width={size} height={size} viewBox={`0 0 ${size} ${size}`} ref={svgRef}>
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
