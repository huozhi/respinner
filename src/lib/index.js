export const repeat = (count) => Array.apply(null, Array(count))

const minifyCSS = (css) => css.replace(/\n/g, '').replace(/\s\s+/g, ' ')

export const embeddedStyle = (css) => `/* <![CDATA[ */${(css)}/* ]]> */`
