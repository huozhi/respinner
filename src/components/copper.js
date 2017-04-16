import React from 'react'
import cx from 'classnames'
import SVGEmbeddedStyle from '../shared/SVGEmbeddedStyle'

const CopperLoading = ({size, strokeWidth, stroke, fill, className, ...rest}) => {
  const half = size / 2

  return (
    <svg
      {...rest}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={cx('CopperLoading', className)}
      width={size}
      height={size}
    >
      <SVGEmbeddedStyle>
        {`
          @keyframes TransRotate {
            0% { transform: rotate(45deg) scale(1); }
            50% { transform: rotate(405deg) scale(.2); }
            100% { transform: rotate(765deg) scale(1); }
          }

          .CopperLoading rect,
          .CopperLoading circle {
            transform-origin: center;
            animation: TransRotate 2s infinite;
          }

          .CopperLoading circle {
            animation-delay: 1s;
          }
        `}
      </SVGEmbeddedStyle>
      <rect width={size / 3} height={size / 3} x={size / 3} y={size / 3} fill={fill} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - strokeWidth}
        fill="transparent" stroke={fill} strokeWidth={strokeWidth} />
    </svg>
  )
}

CopperLoading.defaultProps = {
  size: 40,
  strokeWidth: 4,
}

export default CopperLoading
