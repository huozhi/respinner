import React from 'react'

const BounceLoading = (
  { gap = 6, count = 4, barWidth = 4, barHeight = 16, duration = 0.8, color, fill, ...rest }: {
    gap?: number
    count?: number
    barWidth?: number
    barHeight?: number
    duration?: number
    color?: string
  } & React.SVGProps<SVGSVGElement>) => {
  const viewWidth = (barWidth + gap) * count - gap
  const fillColor = color || fill

  return (
    <svg width={viewWidth} height={barHeight * 3} {...rest}>
      {Array.from({ length: count }).map((_, i) => {
        return (
          <rect
            key={`rect-${i}`}
            fill={fillColor}
            height={barHeight}
            width={barWidth}
            x={(barWidth + gap) * i}
            y={barHeight}
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 8; 0 -8; 0 0"
              keyTimes="0; 0.25; 0.75; 1"
              dur={`${duration}s`}
              begin={`${(-duration / (count + 1)) * (count - i)}s`}
              repeatCount="indefinite"
            />
          </rect>
        )
      })}
    </svg>
  )
}

export default BounceLoading
