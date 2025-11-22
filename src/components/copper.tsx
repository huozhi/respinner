import React, { useId } from 'react'

const createTransRotate = (uniqId: string) => (
  `@keyframes TransRotate${uniqId}` +
    '{' +
    '0% {transform:rotate(45deg) scale(1);}' +
    '50% {transform:rotate(405deg) scale(.2);}' +
    '100% {transform:rotate(765deg) scale(1);}'
)

const CopperLoading = (
  { size = 40, strokeWidth = 4, duration = 2, color, stroke, fill, ...rest }: {
    size?: number
    strokeWidth?: number
    duration?: number
    color?: string
  } & React.SVGProps<SVGSVGElement>) => {
  const uniqId = useId()
  const fillColor = color || fill
  const strokeColor = color || stroke || fill
  const commonStyle = {
    transformOrigin: 'center',
    animation: `TransRotate${uniqId} ${duration}s infinite`,
  }
  return (
    <svg {...rest} width={size} height={size}>
      <style>{createTransRotate(uniqId)}</style>
      <rect width={size / 3} height={size / 3} x={size / 3} y={size / 3} fill={fillColor} style={commonStyle} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - strokeWidth}
        fill="transparent"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        style={{
          ...commonStyle,
          animationDelay: `${duration / 2}s`,
        }}
      />
    </svg>
  )
}

export default CopperLoading
