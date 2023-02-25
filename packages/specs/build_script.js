const cpx = require('cpx')
const path = require('path')

cpx.copy(
  path.resolve(__dirname, 'api.openapi.yaml'),
  path.resolve(__dirname, '../../dist/packages/specs')
)
