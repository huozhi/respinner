import React from 'react'

const svgStyle = (css) => `/* <![CDATA[ */${(css)}/* ]]> */`

const InlineSvgStyle = ({animation}) => (
  <style>
    {svgStyle(animation)}
  </style>
)

export default InlineSvgStyle
