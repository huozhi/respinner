export const uniqId = '__respinner__'

export const repeat = (count) => Array.apply(null, Array(count))

const baseRotateAnimation = `Rotate${uniqId}{100%{transform:rotate(360deg)}}`
export const keyFrame = '@keyframes'
export const webkitKeyFrame = '@-webkit-keyframes'

export const createCompatibleAnimation = (animation) => {
  return `${webkitKeyFrame} ${animation.replace(/transform:/g, '-webkit-transform:')}; ${keyFrame} ${animation};`
}

export const RotateAnimation = createCompatibleAnimation(baseRotateAnimation)
