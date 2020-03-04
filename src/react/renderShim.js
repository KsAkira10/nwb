/* global NWB_QUICK_MOUNT_ID */

import React from 'react'
import {render} from 'react-dom'

import App, {element} from './importModule'

let parent = document.getElementById(NWB_QUICK_MOUNT_ID)

// Only render if the entry module exported something we can render
if (element) {
  render(React.createElement(App), parent)
}
