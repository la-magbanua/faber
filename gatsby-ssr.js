const React = require('react')
const ThemeProvider = require('styled-components').ThemeProvider
const Layout = require('./src/components/layout').default
const theme = require('./src/styles/theme').default
require('typeface-playfair-display')
require('typeface-poppins')

exports.wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

exports.wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
