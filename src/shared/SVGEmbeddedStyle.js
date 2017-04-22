import React from 'react'
import {embeddedStyle} from '../lib'

const SVGEmbeddedStyle = ({children}) => (
  <style>
    {embeddedStyle(children)}
  </style>
)

export default SVGEmbeddedStyle
