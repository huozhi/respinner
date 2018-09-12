import React from 'react'
import {repeat, uniqId} from '../lib'
import SVGEmbeddedStyle from '../shared/SVGEmbeddedStyle'

const WaveAnimation = `@keyframes Wave${uniqId}` + '{' +
  '0% {transform:scale(.1); opacity:1;}' +
  '70% {transform:scale(1); opacity:.7;}' +
  '100% {transform:scale(1); opacity:0;}' +
'}'

const WaveLoading = ({size, count, stroke, duration, strokeWidth, ...rest}) => {
  const radius = size / 2 - strokeWidth

  return (
    <svg
      {...rest}
      width={size}
      height={size}
    >
      <SVGEmbeddedStyle animation={WaveAnimation} />
      {repeat(count).map((_, i) => {
        const style = {
          animation: `Wave${uniqId} infinite both`,
          animationDelay: `${duration / count * i}s`,
          animationDuration: `${duration}s`,
        }

        const pos = size / 2

        return (
          <circle
            key={`c-${i}`}
            style={style}
            stroke={stroke}
            strokeWidth={strokeWidth}
            transform-origin={`${pos}px ${pos}px`}
            fill="none"
            r={radius}
            cx={pos}
            cy={pos}
          />
        )
      })}
    </svg>
  )
}

WaveLoading.defaultProps = {
  size: 40,
  count: 3,
  duration: 1.5,
  strokeWidth: 2,
}

export default WaveLoading
