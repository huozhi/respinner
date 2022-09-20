import React from 'react'
import {repeat} from '../lib'

const BounceLoading = ({
  count = 4,
  barWidth = 4,
  barHeight = 16,
  duration = 0.8,
  fill,
  ...rest
}) => {
  const viewWidth = (barWidth + gap) * count - gap

  return (
    <svg
      width={viewWidth}
      height={barHeight * 3}
      {...rest}
    >
      {repeat(count).map((_, i) => {
        return (
          <rect key={`rect-${i}`}
            fill={fill}
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
              begin={`${-duration / (count + 1) * (count - i)}s`}
              repeatCount="indefinite"
            />
          </rect>
        )}
      )}
    </svg>
  )
}

export default BounceLoading
