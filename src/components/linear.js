import React from 'react'
import cx from 'classnames'
import {repeat} from '../lib'
import SVGEmbeddedStyle from '../shared/SVGEmbeddedStyle'

const LinearLoading = ({className, count, duration, width, height, bgColor, dotColor}) => {
  const dotSize = height / 2
  return (
    <svg className={cx('LinearLoading', className)} width={width} height={height}>
      <SVGEmbeddedStyle>
        {`
          @keyframes MovingLTR {
            from { x: 0 }
            to { x: ${width} }
          }

          .LinearLoading rect {
            animation: MovingLTR ${duration}s infinite;
          }
        `}
      </SVGEmbeddedStyle>
      <line
        x1={dotSize}
        y1={dotSize}
        x2={width - dotSize}
        y2={dotSize}
        strokeWidth={height}
        stroke={bgColor}
        strokeLinecap="round"
      />
      {repeat(count).map((_, i) => (
        <rect
          key={i}
          stroke="none"
          fill={dotColor}
          width={height}
          height={height}
          style={{animationDelay: `${duration / count * i}s`}}
        />
      ))}
    </svg>
  )
}

LinearLoading.defaultProps = {
  count: 3,
  height: 3,
  width: 100,
  duration: 1.6,
}

export default LinearLoading
