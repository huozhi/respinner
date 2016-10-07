import React from 'react'
import cx from 'classnames'
import {repeat} from '../helpers'
import './BounceLoader.css'

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
      {repeat(count).map((_, i) => {
        const style = {
          animationDelay: `${(duration - 0.2) / count * i}s`
        }

        return (
          <rect key={`rect-${i}`}
            className="BounceLoader-child"
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
