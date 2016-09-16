(function(win) {
  // Check if already loaded.
  if (win._tappsLoaded) return;
  else win._tappsLoaded = true;

  // Initialise
  let tapps = win.tapps = win.tapps || []
  let react = tapps.react = {}

  // Prerequisites
  react.injectTapEventPlugin = require("react-tap-event-plugin");
  // React
  react.React = require('react');
  react.ReactDOM = require('react-dom');
  // Material
  react.Material = require('src/index');
  react.Styles = require('src/styles/index');
  react.Icons = require('src/svg-icons/index');
})(window);
