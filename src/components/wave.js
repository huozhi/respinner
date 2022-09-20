import React from 'react'
import {repeat} from '../lib'

const WaveLoading = ({
  size = 40,
  count = 3,
  duration = 1.5,
  strokeWidth = 2,
  stroke,
  ...rest
}) => {
  const radius = size / 2 - strokeWidth

  return (
    <svg
      {...rest}
      width={size}
      height={size}
    >
      {repeat(count).map((_, i) => {
        const pos = size / 2

        return (
          <circle
            key={`c-${i}`}
            stroke={stroke}
            strokeWidth={strokeWidth}
            transform-origin={`${pos}px ${pos}px`}
            fill="none"
            r={radius}
            cx={pos}
            cy={pos}
          >
            <animate
              attributeName='opacity'
              values='1; 0.7; 0'
              keyTimes='0; 0.7; 1'
              dur={`${duration}s`}
              begin={`${duration / count * i}s`}
            />
            <animateTransform
              attributeName='transform'
              attributeType='XML'
              type='scale'
              values='.1; 1; 1'
              keyTimes='0; 0.7; 1'
              dur={`${duration}s`}
              begin={`${duration / count * i}s`}
              repeatCount='indefinite'
            />
          </circle>
        )
      })}
    </svg>
  )
}

export default WaveLoading
