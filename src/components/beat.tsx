import React from 'react'

const BeatLoading = (
  { duration = 0.8, count = 6, size = 8, gap = 6, color, fill, ...rest }: {
    duration?: number
    count?: number
    size?: number
    gap?: number
    color?: string
  } & React.SVGProps<SVGSVGElement>) => {
  const viewWidth = (size + gap) * count - gap
  const fillColor = color || fill

  return (
    <svg {...rest} width={viewWidth} height={size}>
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
