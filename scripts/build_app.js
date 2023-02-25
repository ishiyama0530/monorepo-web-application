const rimraf = require('rimraf')
const cpx = require('cpx')
const path = require('path')

const workDir = path.resolve(__dirname, '..')
const outputDir = path.resolve(workDir, './bin/app')

rimraf.sync(outputDir)

cpx.copySync(path.resolve(workDir, './dist/*'), path.resolve(workDir, './bin/app'))
cpx.copySync(
  path.resolve(workDir, './dist/packages/app/**/*'),
  path.resolve(workDir, './bin/app/packages/app')
)
cpx.copySync(
  path.resolve(workDir, './dist/packages/modules/**/*'),
  path.resolve(workDir, './bin/app/packages/modules')
)
cpx.copySync(
  path.resolve(workDir, './dist/packages/specs/**/*'),
  path.resolve(workDir, './bin/app/packages/specs')
)
