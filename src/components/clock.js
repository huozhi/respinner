import React from 'react'

const ClockLoading = ({ size, duration, strokeWidth, ...rest }) => {
  const center = size / 2
  const needleProps = {
    strokeWidth: strokeWidth,
    strokeLinecap: 'round',
    x1: center,
    y1: strokeWidth * 2,
    x2: center,
    y2: size - strokeWidth * 2,
  }

  return (
    <svg {...rest} width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle fill="none" strokeWidth={strokeWidth} cx={center} cy={center} r={size / 2 - strokeWidth} />
      <line {...needleProps} strokeDasharray={`${size / 3} ${size / 2}`} strokeDashoffset={size / 3 + strokeWidth * 2}>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from={`0 ${center} ${center}`}
          to={`360 ${center} ${center}`}
          dur={`${duration}s`}
          repeatCount="indefinite"
        />
      </line>
    </svg>
  )
}

export default ClockLoading
