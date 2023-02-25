import express, { json, urlencoded } from 'express'
import httpContext from 'express-http-context'
import * as fs from 'fs'
import helmet from 'helmet'
import path from 'path'
import 'reflect-metadata'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'
import * as GlobalErrorHandleMiddleware from './src/middlewares/GlobalErrorHandleMiddleware'
import * as SessionMiddleware from './src/middlewares/SessionMiddleware'
import { RegisterRoutes } from './src/routes'

const app = express()

app.use(helmet())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(express.static('web'))
app.use('/admin', express.static('web.admin'))

app.use(httpContext.middleware)
app.use(SessionMiddleware.handle)
app.use(GlobalErrorHandleMiddleware.handle)

const specFileYaml = fs.readFileSync(path.join(__dirname, '../specs/api.openapi.yaml'), 'utf8')
const specFileJson = YAML.parse(specFileYaml)

app.use('/api/ui', swaggerUi.serve, swaggerUi.setup(specFileJson))
app.get('/api/openapi.yaml', (_, res) => res.end(specFileYaml))

// /api/xxx
RegisterRoutes(app)

app.get('/admin/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'web.admin', 'index.html'))
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'web', 'index.html'))
})

app.listen(8080, () => console.log(`app start.`))
