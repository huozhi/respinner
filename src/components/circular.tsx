import React, { useEffect, useRef } from 'react'

// View box is based on 50x50 size
// from: https://codepen.io/jczimm/pen/vEBpoL
const CIRCLE_RADIUS = 50 / 2

const CircularLoading = (
  { size = 40, strokeWidth = 5, linecap = 'round', duration = 1, color, stroke, paused, ...rest }: {
    size?: number
    strokeWidth?: number
    linecap?: React.SVGAttributes<SVGAElement>['strokeLinecap']
    duration?: number
    color?: string
    stroke?: string
    paused?: boolean
  } & React.SVGProps<SVGSVGElement>) => {
  const center = CIRCLE_RADIUS
  const strokeColor = color || stroke
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
    <svg {...rest} viewBox={`0 0 ${CIRCLE_RADIUS * 2} ${CIRCLE_RADIUS * 2}`} width={size} height={size} ref={svgRef}>
      <circle
        fill="none"
        stroke={strokeColor}
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
