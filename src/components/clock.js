import React from 'react'
import {RotateAnimation, uniqId} from '../lib'
import SVGEmbeddedStyle from '../shared/SVGEmbeddedStyle'

const ClockLoading = ({size, duration, strokeWidth, ...rest}) => {
  const needleProps = {
    strokeWidth: strokeWidth,
    strokeLinecap: 'round',
    x1: size / 2,
    y1: strokeWidth * 2,
    x2: size / 2,
    y2: size - strokeWidth * 2,
  }

  return (
    <svg {...rest} width={size} height={size}>
      <SVGEmbeddedStyle animation={RotateAnimation} />
      <circle
        fill="none"
        strokeWidth={strokeWidth}
        cx={(size) / 2}
        cy={(size) / 2}
        r={size / 2 - strokeWidth}
      />
      <line
        {...needleProps}
        strokeDasharray={`${size / 3} ${size / 2}`}
        strokeDashoffset={size / 3 + strokeWidth * 2}
        style={{
          transformOrigin: 'center',
          animation: `Rotate${uniqId} linear infinite`,
          animationDuration: `${duration}s`,
        }}
      />
    </svg>
  )
}

export default ClockLoading
