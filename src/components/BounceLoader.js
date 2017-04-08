import React from 'react'
import cx from 'classnames'
import {repeat} from '../helpers'
import SVGEmbeddedStyle from './SVGEmbeddedStyle'
// import './BounceLoader.css'

const BounceLoader = ({
  className, duration, count, fill, barWidth, barHeight, gap, ...rest
}) => {
  const viewWidth = (barWidth + gap) * count - gap

  return (
    <svg
      width={viewWidth}
      height={barHeight * 3}
      className={cx('BounceLoader', className)}
      {...rest}
    >
      <SVGEmbeddedStyle>
        {
          `.BounceLoader rect {
            display: 'inline-block';
            border-radius: 50%;
            animation: Bounce ease-in-out infinite;
            transform-origin: center;
          }

          @keyframes Bounce {
            0%, 100% { transform: translateY(0); }
            25% { transform: translateY(8px); }
            75% { transform: translateY(-8px); }
          }
        `}
      </SVGEmbeddedStyle>
      {repeat(count).map((_, i) => {
        const style = {
          animationDelay: `${-duration / (count + 1) * (count - i)}s`,
          animationDuration: `${duration}s`,
        }

        return (
          <rect key={`rect-${i}`}
            style={style}
            fill={fill}
            height={barHeight}
            width={barWidth}
            x={(barWidth + gap) * i}
            y={barHeight}
          />
        )}
      )}
    </svg>
  )
}

BounceLoader.defaultProps = {
  gap: 6,
  count: 4,
  barWidth: 4,
  barHeight: 16,
  duration: 0.8,
}

export default BounceLoader
