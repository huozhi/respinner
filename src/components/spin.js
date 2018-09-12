import React from 'react'
import cx from 'classnames'
import {repeat} from '../lib'
import SVGEmbeddedStyle from '../shared/SVGEmbeddedStyle'

const SpinLoading = ({size, barWidth, barHeight, className, count, duration, fill, borderRadius, ...rest}) => {
  const radius = size / 2 - barHeight / 2

  return (
    <svg
      width={size}
      height={size}
      className={cx('SpinLoading', className)}
    >
      <SVGEmbeddedStyle>
        {`
          @keyframes SpinFade {
            50% { opacity: .3; }
            100% { opacity: 1; }
          }
        `}
      </SVGEmbeddedStyle>
      {repeat(count).map((_, i) => {
        const angle = 360 / count * i
        /* (barWidth + borderRadius) / 2 is used to fix the excursion caused by thickness */
        const x = Math.cos(Math.PI * angle / 180) * radius + radius + (barWidth + borderRadius) / 2
        const y = Math.sin(Math.PI * angle / 180) * radius + radius

        const style = {
          transform: `rotate(${90 + angle}deg)`,
          animation: 'SpinFade linear infinite both',
          animationDelay: `${duration * .8 / count * i}s`,
          animationDuration: `${duration}s`,
          transformOrigin: `${x + barWidth / 2}px ${y + barHeight / 2}px`,
        }

        return (
          <rect
            // transform-origin={`${x + barWidth / 2}px ${y + barHeight / 2}px`}
            style={style}
            x={x}
            y={y}
            key={`r-${i}`}
            fill={fill}
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
