export const uniqId = '__respinner__'

export const repeat = (count) => Array.apply(null, Array(count))

export const createCompatibleAnimation = (animation) => {
  return `@keyframes ${animation};`
}
