import React from 'react'
import cx from 'classnames'
import {repeat, uniqId} from '../lib'
import SVGEmbeddedStyle from '../shared/SVGEmbeddedStyle'

const BounceAnimation = `@keyframes Bounce${uniqId}` + '{' +
  '0%, 100% {transform:translateY(0);}' +
  '25% {transform:translateY(8px);}' +
  '75% {transform:translateY(-8px);}' +
'}'


const BounceLoading = ({
  className, duration, count, fill, barWidth, barHeight, gap, ...rest
}) => {
  const viewWidth = (barWidth + gap) * count - gap

  return (
    <svg
      width={viewWidth}
      height={barHeight * 3}
      className={cx('BounceLoading', className)}
      {...rest}
    >
      <SVGEmbeddedStyle animation={BounceAnimation} />
      {repeat(count).map((_, i) => {
        const style = {
          animationDelay: `${-duration / (count + 1) * (count - i)}s`,
          animationDuration: `${duration}s`,
          animationName: `Bounce${uniqId}`,
          animationIterationCount: 'infinite',
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

BounceLoading.defaultProps = {
  gap: 6,
  count: 4,
  barWidth: 4,
  barHeight: 16,
  duration: 0.8,
}

export default BounceLoading
