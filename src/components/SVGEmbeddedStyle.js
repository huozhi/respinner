import React from 'react'
import {embeddedStyle} from '../helpers'

const SVGEmbeddedStyle = ({children}) => (
  <style scoped>
    {embeddedStyle(children)}
  </style>
)

export default SVGEmbeddedStyle
