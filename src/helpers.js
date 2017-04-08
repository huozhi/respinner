export const repeat = (count) => Array.apply(null, Array(count))

export const getCSSSecond = (duration) => `${duration}s`

const minifyCSS = (css) => css.replace(/\n/g, '').replace(/\s\s+/g, ' ')

export const embeddedStyle = (css) => `/* <![CDATA[ */${minifyCSS(css)}/* ]]> */`
