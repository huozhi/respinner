import React from 'react'
import cx from 'classnames'
import SVGEmbeddedStyle from '../shared/SVGEmbeddedStyle'

const SugarcubeLoading = ({size, strokeWidth, fill, className, ...rest}) => {
  const half = size / 2

  return (
    <svg
      {...rest}
      className={cx('SugarcubeLoading', className)}
      width={size}
      height={size}
    >
      <SVGEmbeddedStyle>
        {`
          @keyframes TransRotate {
            0% {
              rx: ${half};
              transform: rotate(0) scale(1);
              stroke-width: ${strokeWidth};
              stroke: ${fill};
              fill: none;
              x: ${strokeWidth};
              y: ${strokeWidth};
            }
            50% {
              rx: 0;
              transform: rotate(360deg) scale(.5);
              fill: ${fill};
              stroke-width: ${half};
              stroke: none;
              x: ${strokeWidth};
              y: ${strokeWidth};
            }
            100% {
              rx: ${half};
              transform: rotate(720deg) scale(1);
              stroke-width: ${strokeWidth};
              stroke: ${fill};
              fill: none;
              x: ${strokeWidth};
              y: ${strokeWidth};
            }
          }

          .SugarcubeLoading rect {
            transform-origin: center;
            animation: TransRotate 2s infinite;
          }
        `}
      </SVGEmbeddedStyle>
      <rect width={size - strokeWidth * 2} height={size - strokeWidth * 2} />
    </svg>
  )
}

SugarcubeLoading.defaultProps = {
  size: 40,
  strokeWidth: 2,
  stroke: 'none',
}

export default SugarcubeLoading
