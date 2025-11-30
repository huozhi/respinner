import React, { useEffect, useRef } from 'react'

const BeatLoading = (
  { duration = 0.8, count = 6, size = 8, gap = 6, color, fill, paused, ...rest }: {
    duration?: number
    count?: number
    size?: number
    gap?: number
    color?: string
    paused?: boolean
  } & React.SVGProps<SVGSVGElement>) => {
  const viewWidth = (size + gap) * count - gap
  const fillColor = color || fill
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
    <svg {...rest} width={viewWidth} height={size} ref={svgRef}>
      {Array.from({ length: count }).map((_, i) => {
        const cx = size * (i + 1) + gap * i - size / 2
        const cy = size / 2

        return (
          // @ts-expect-error transformOrigin is not a valid prop for svg <circle>
          <circle transformOrigin={`${cx}px ${cy}px`} key={`c-${i}`} fill={fillColor} r={size / 2} cx={cx} cy={cy}>
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="scale"
              values="0; 0; 1; 0; 0"
              begin={`${(-duration / (count + 1)) * (count - i)}s`}
              dur={`${duration}s`}
              repeatCount="indefinite"
            />
          </circle>
        )
      })}
    </svg>
  )
}

export default BeatLoading
