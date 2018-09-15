export const uniqId = Math.random().toString(36).substr(2, 9)

export const repeat = (count) => Array.apply(null, Array(count))
export const embeddedStyle = (css) => `/* <![CDATA[ */${(css)}/* ]]> */`

export const RotateAnimation = `@keyframes Rotate${uniqId}{100%{transform:rotate(360deg);}}`
