import React from 'react'
// import InlineSvgStyle from '../lib/embed-style'
// import {uniqId, createCompatibleAnimation} from '../lib'

// const DashedRotateAnimation = (dash) => createCompatibleAnimation(`DashedRotate${uniqId}` + '{' +
//   `0% {stroke-dasharray:${dash} ${dash} 1 ${dash};transform:rotate(0deg);}` +
//   `50% {stroke-dasharray:${dash};transform:rotate(360deg);}` +
//   `100% {stroke-dasharray:${dash} ${dash} 1 ${dash};transform:rotate(720deg);}` +
//   '}'
// )

const DashLoading = ({
  size = 40,
  strokeWidth = 4,
  duration = 1.8,
  stroke,
  ...rest
}) => {
  const radius = size / 2 - strokeWidth
  const dash = Math.PI * radius / 5
  const viewBoxCenter = `${size / 2} ${size / 2}`

  return (
    <svg {...rest} width={size} height={size}>
      {/* <InlineSvgStyle animation={DashedRotateAnimation(dash)} /> */}
      <circle
        fill='none'
        stroke={stroke}
        strokeLinecap='round'
        strokeWidth={strokeWidth}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        // style={{
        //   transformOrigin: 'center',
        //   animationName: `DashedRotate${uniqId}`,
        //   animationDuration: `${duration}s`,
        //   animationIterationCount: 'infinite',
        // }}
      >
        <animate
          attributeName='stroke-dasharray'
          values={`${dash} ${dash} 1 ${dash};${dash};${dash} ${dash} 1 ${dash}`}
          keyTimes='0;0.5;1'
          dur={`${duration}s`}
          repeatCount='indefinite'
        />
        <animateTransform
          attributeName='transform'
          attributeType='XML'
          type='rotate'
          values={`0 ${viewBoxCenter}; 360 ${viewBoxCenter}; 720 ${viewBoxCenter}`}
          keyTimes='0;0.5;1'
          dur={`${duration}s`}
          repeatCount='indefinite'
        />
      </circle>
    </svg>
  )
}

export default DashLoading
