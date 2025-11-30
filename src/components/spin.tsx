import React from 'react'

const SpinLoading = ({
  size = 40,
  count = 8,
  barWidth = 4,
  barHeight = 10,
  duration = 1,
  borderRadius = 1,
  color,
  fill,
  ...rest
}: {
  size?: number
  count?: number
  barWidth?: number
  barHeight?: number
  duration?: number
  borderRadius?: number
  color?: string
} & React.SVGProps<SVGSVGElement>) => {
  const radius = size / 2 - barHeight / 2
  const fillColor = color || fill

  return (
    <svg {...rest} width={size} height={size}>
      {Array.from({ length: count }).map((_, i) => {
        const angle = (360 / count) * i
        /* (barWidth + borderRadius) / 2 is used to fix the excursion caused by thickness */
        const x = Math.cos((Math.PI * angle) / 180) * radius + radius + (barWidth + borderRadius) / 2
        const y = Math.sin((Math.PI * angle) / 180) * radius + radius

        return (
          <rect
            x={x}
            y={y}
            fill={fillColor}
            key={`r-${i}`}
            width={barWidth}
            height={barHeight}
            rx={borderRadius}
            ry={borderRadius}
            transform={`rotate(${90 + angle} ${x + barWidth / 2} ${y + barHeight / 2})`}
          >
            <animate
              attributeName="opacity"
              values="0; 0.3; 1"
              begin={`${((duration * 0.8) / count) * i}s`}
              dur={`${duration}s`}
              repeatCount="indefinite"
            />
          </rect>
        )
      })}
    </svg>
  )
}

export default SpinLoading
