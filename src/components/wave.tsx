import React, { useEffect, useRef } from 'react'

const WaveLoading = (
  { size = 40, count = 3, duration = 1.5, strokeWidth = 2, color, stroke, paused, ...rest }: {
    size?: number
    count?: number
    duration?: number
    strokeWidth?: number
    color?: string
    paused?: boolean
  } & React.SVGProps<SVGSVGElement>) => {
  const radius = size / 2 - strokeWidth
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
    <svg {...rest} width={size} height={size} ref={svgRef}>
      {Array.from({ length: count }).map((_, i) => {
        const pos = size / 2

        return (
          <circle
            key={`c-${i}`}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            // @ts-expect-error transformOrigin is not a valid prop for svg <circle>
            transformOrigin={`${pos}px ${pos}px`}
            fill="none"
            r={radius}
            cx={pos}
            cy={pos}
          >
            <animate
              attributeName="opacity"
              values="1; 0.7; 0"
              keyTimes="0; 0.7; 1"
              dur={`${duration}s`}
              begin={`${(duration / count) * i}s`}
            />
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="scale"
              values=".1; 1; 1"
              keyTimes="0; 0.7; 1"
              dur={`${duration}s`}
              begin={`${(duration / count) * i}s`}
              repeatCount="indefinite"
            />
          </circle>
        )
      })}
    </svg>
  )
}

export default WaveLoading
