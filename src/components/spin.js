import React from 'react'
import {repeat, uniqId, createCompatibleAnimation} from '../lib'
import InlineSvgStyle from '../lib/embed-style'

const SpinFadeAnimation = createCompatibleAnimation(`SpinFade${uniqId}` + '{ ' +
  '50% {opacity:.3;}' +
  '100% {opacity:1;}' +
'}'
)

const SpinLoading = ({size, barWidth, barHeight, count, duration, fill, borderRadius, ...rest}) => {
  const radius = size / 2 - barHeight / 2

  return (
    <svg
      {...rest}
      width={size}
      height={size}
    >
      <InlineSvgStyle animation={SpinFadeAnimation} />
      {repeat(count).map((_, i) => {
        const angle = 360 / count * i
        /* (barWidth + borderRadius) / 2 is used to fix the excursion caused by thickness */
        const x = Math.cos(Math.PI * angle / 180) * radius + radius + (barWidth + borderRadius) / 2
        const y = Math.sin(Math.PI * angle / 180) * radius + radius
        const style = {
          animation: `SpinFade${uniqId} linear infinite both`,
          animationDelay: `${duration * .8 / count * i}s`,
          animationDuration: `${duration}s`,
          transform: `rotate(${90 + angle}deg)`,
          transformOrigin: `${x + barWidth / 2}px ${y + barHeight / 2}px`, // safari/firefox compactible
        }

        return (
          <rect
            x={x}
            y={y}
            fill={fill}
            style={style}
            key={`r-${i}`}
            width={barWidth}
            height={barHeight}
            rx={borderRadius}
            ry={borderRadius}
          />
        )
      })}
    </svg>
  )
}

SpinLoading.defaultProps = {
  size: 40,
  count: 8,
  barWidth: 4,
  duration: 1,
  barHeight: 10,
  borderRadius: 1,
}

export default SpinLoading
