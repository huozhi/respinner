export const repeat = (count) => Array.apply(null, Array(count))

export const embeddedStyle = (css) => `/* <![CDATA[ */${(css)}/* ]]> */`
