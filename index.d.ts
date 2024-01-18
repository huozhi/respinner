import type { FunctionComponent, SVGAttributes } from 'react'

export const BeatLoading: FunctionComponent<{
  duration?: number, 
  count?: number, 
  fill?: string, 
  size?: number, 
  gap?: number
} & SVGAttributes<SVGAElement>>;
export const BounceLoading: FunctionComponent<{
  duration?: number,
  count?: number,
  barWidth?: number, 
  barHeight?: number, 
  gap?: number
} & SVGAttributes<SVGAElement>>;
export const CircularLoading: FunctionComponent<{
  duration?: number, 
  size?: number,
} & SVGAttributes<SVGAElement>>;
export const ClockLoading: FunctionComponent<{
  size?: number, 
  duration?: number,
} & SVGAttributes<SVGAElement>>;
export const RotateLoading: FunctionComponent<{
  size?: number, 
  duration?: number, 
  opacity?: number,
} & SVGAttributes<SVGAElement>>;
export const SpinLoading: FunctionComponent<{
  size?: number, 
  barWidth?: number, 
  barHeight?: number, 
  count?: number,
  duration?: number, fill, borderRadius
} & SVGAttributes<SVGAElement>>;
export const WaveLoading: FunctionComponent<{
  size?: number, 
  count?: number, 
  duration?: number,
} & SVGAttributes<SVGAElement>>;
export const DashLoading: FunctionComponent<{
  size?: number, 
  duration?: number,
} & SVGAttributes<SVGAElement>>;
export const CopperLoading: FunctionComponent<{
  size?: number,
  duration?: number
} & SVGAttributes<SVGAElement>>;
