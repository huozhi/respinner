import React from 'react'
import {embeddedStyle} from '../lib'

const SVGEmbeddedStyle = ({animation}) => (
  <style>
    {embeddedStyle(animation)}
  </style>
)

export default SVGEmbeddedStyle
