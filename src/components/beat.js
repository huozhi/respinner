import React from 'react'
import { repeat } from '../lib/styles'

const BeatLoading = ({ duration = 0.8, count = 6, size = 8, gap = 6, fill, ...rest }) => {
  const viewWidth = (size + gap) * count - gap

  return (
    <svg {...rest} width={viewWidth} height={size}>
      {repeat(count).map((_, i) => {
        const cx = size * (i + 1) + gap * i - size / 2
        const cy = size / 2

        return (
          <circle transformOrigin={`${cx}px ${cy}px`} key={`c-${i}`} fill={fill} r={size / 2} cx={cx} cy={cy}>
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
