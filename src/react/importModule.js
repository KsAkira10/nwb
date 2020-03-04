// This module acts as a shim for the entry module because in addition to the
// primary use-case of exporting a React component, we also support the entry
// module exporting a React element or rendering the app itself. Since this
// module always exports a default component, react-hot-loader-loader can be
// configured to apply react-hot-loader to handle Hot Module Replacement.

import React from 'react'

// Use a CJS require because the entry module might not have exported anything
let exported = require('nwb-quick-entry')

let element = null

if (exported.default) {
  exported = exported.default
}
// Assumptions: the entry module either exports a React component (which is
// either a function or class) or element (which has type and props properties),
// or renders the app itself.
if (Object.prototype.toString.call(exported) === '[object Function]') {
  element = React.createElement(exported)
}
else if (exported.type && exported.props) {
  element = exported
}
else {
  // Assumption: the entry module rendered the app
}

let App = function() {
  return element
}

// Let ./renderShim.js know if we have anything to render
export {element}

export default App
