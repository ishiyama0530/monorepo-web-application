import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Please enter ticket or user: ', async (answer) => {
  if (answer === 'ticket') {
    const resp = await fetch('http://localhost:3001/')
    const data = await resp.json()
    console.log(JSON.stringify(data, null, 2))
  } else if (answer === 'user') {
    const resp = await fetch('http://localhost:3002/')
    const data = await resp.json()
    console.log(JSON.stringify(data, null, 2))
  } else {
    console.error('Undefined error occurred.')
  }

  rl.close()
})
