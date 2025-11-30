import React, { useId } from 'react'

const DashedRotateAnimation = (uniqId: string, dash: number) =>
  `@keyframes DashedRotate${uniqId}` +
  '{' +
  `0% {stroke-dasharray:${dash} ${dash} 1 ${dash};transform:rotate(0deg);}` +
  `50% {stroke-dasharray:${dash};transform:rotate(360deg);}` +
  `100% {stroke-dasharray:${dash} ${dash} 1 ${dash};transform:rotate(720deg);}` +
  '}'

const DashLoading = (
  { size = 40, strokeWidth = 4, duration = 1.8, color, stroke, paused, ...rest }: {
    size?: number
    strokeWidth?: number
    duration?: number
    color?: string
    stroke?: string
    paused?: boolean
  } & React.SVGProps<SVGSVGElement>) => {
  const radius = size / 2 - strokeWidth
  const dash = (Math.PI * radius) / 5
  const uniqId = useId()
  const strokeColor = color || stroke

  return (
    <svg {...rest} width={size} height={size}>
      <style>{DashedRotateAnimation(uniqId, dash)}</style>
      <circle
        fill="none"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        style={{
          transformOrigin: 'center',
          animationName: `DashedRotate${uniqId}`,
          animationDuration: `${duration}s`,
          animationIterationCount: 'infinite',
          animationPlayState: paused ? 'paused' : 'running',
        }}
      />
    </svg>
  )
}

export default DashLoading
