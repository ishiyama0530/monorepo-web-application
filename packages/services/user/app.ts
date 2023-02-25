import { UserFindManyService } from '@modules/user'
import express from 'express'

const app = express()

app.get('/', async (req, res) => {
  const service = new UserFindManyService()
  const resp = await service.handle()
  res.send(resp)
})

app.listen(3002, () => console.log(`modules.api/user start.`))
