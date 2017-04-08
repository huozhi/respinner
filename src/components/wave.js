import React from 'react'
import cx from 'classnames'
import {repeat, getCSSSecond} from '../lib'
import SVGEmbeddedStyle from '../shared/SVGEmbeddedStyle'

const WaveLoading = ({size, className, count, stroke, duration, strokeWidth, ...rest}) => {
  const radius = size / 2 - strokeWidth

  return (
    <svg
      {...rest}
      className={cx('WaveLoading', className)}
      width={size}
      height={size}
    >
      <SVGEmbeddedStyle>
        {`
          .WaveLoading circle {
            border-radius: 50%;
            animation: Wave ease-in-out infinite both;
            transform-origin: center;
          }

          @keyframes Wave {
            0% { transform: scale(.1); opacity: 1; }
            70% { transform: scale(1); opacity: .7; }
            100% { transform: scale(1); opacity: 0; }
          }
        `}
      </SVGEmbeddedStyle>
      {repeat(count).map((_, i) => {
        const style = {
          animationDelay: `${duration / count * i}s`,
          animationDuration: getCSSSecond(duration)
        }

        return (
          <circle
            key={`c-${i}`}
            style={style}
            stroke={stroke}
            strokeWidth={strokeWidth}
            fill="none"
            r={radius}
            cx={size / 2}
            cy={size / 2}
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
