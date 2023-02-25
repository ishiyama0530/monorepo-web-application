import { TicketFindManyService } from '@modules/ticket'
import express from 'express'

const app = express()

app.get('/', async (req, res) => {
  const service = new TicketFindManyService()
  const resp = await service.handle()
  res.send(resp)
})

app.listen(3001, () => console.log(`modules.api/ticket start.`))
