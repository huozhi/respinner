import React from 'react'
import {repeat, uniqId, createCompatibleAnimation} from '../lib'
import InlineSvgStyle from '../lib/embed-style'


const BeatAnimation = createCompatibleAnimation(`Beat${uniqId}` + '{' +
  '0%, 80%, 100% {transform: scale(0);}' +
  '40% {transform: scale(1);}' +
  '}'
)

const BeatLoading = ({duration, count, fill, size, gap, ...rest}) => {
  const viewWidth = (size + gap) * count - gap

  return (
    <svg
      {...rest}
      width={viewWidth}
      height={size}
    >
      <InlineSvgStyle animation={BeatAnimation} />
      {repeat(count).map((_, i) => {
        const style = {
          borderRadius: '50%',
          animation: `Beat${uniqId} infinite both`,
          animationDelay: `${-duration / (count + 1) * (count - i)}s`,
          animationDuration: `${duration}s`,
        }

        const cx = size * (i + 1) + gap * i - size / 2
        const cy = size / 2

        return (
          <circle
            transform-origin={`${cx}px ${cy}px`}
            key={`c-${i}`}
            style={style}
            fill={fill}
            r={size / 2}
            cx={cx}
            cy={cy}
          />
        )
      })}
    </svg>
  )
}

BeatLoading.defaultProps = {
  gap: 6,
  size: 8,
  count: 6,
  duration: 0.8,
}

export default BeatLoading
