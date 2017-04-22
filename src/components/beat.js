import React from 'react'
import cx from 'classnames'
import {repeat} from '../lib'
import SVGEmbeddedStyle from '../shared/SVGEmbeddedStyle'

const BeatLoading = ({className, duration, count, fill, size, gap, ...rest}) => {
  const viewWidth = (size + gap) * count - gap

  return (
    <svg
      {...rest}
      width={viewWidth}
      height={size}
      className={cx('BeatLoading', className)}
    >
      <SVGEmbeddedStyle>
        {`
          @keyframes Beat {
            0%, 80%, 100% {
              transform: scale(0);
            }
            40% {
              transform: scale(1);
            }
          }
        `}
      </SVGEmbeddedStyle>
      {repeat(count).map((_, i) => {
        const style = {
          borderRadius: '50%',
          animation: `Beat infinite both`,
          transformOrigin: 'center',
          animationDelay: `${-duration / (count + 1) * (count - i)}s`,
          animationDuration: `${duration}s`,
        }

        return (
          <circle
            key={`c-${i}`}
            style={style}
            fill={fill}
            r={size / 2}
            cx={size * (i + 1) + gap * i - size / 2}
            cy={size / 2}
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
