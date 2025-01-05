import express from 'express'
import path from 'path'
import { PORT } from './config.js'
import { userRepository } from './controller/user.js'

const app = express()

app.use(express.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

// app.get('/pepito', async (req, res) => {
//   try {
//     const result = await client.query('SELECT * FROM persona_natural LIMIT 10')
//     res.json(result.rows)
//   } catch (err) {
//     console.log(err.message)
//     res.status(500).send('Internal Server Error')
//   }
// })

app.get('/login', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public/login.html'))
})

app.post('/login', async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await userRepository.login(username, password)
    res.send(`Bienvenido/a ${user}`)
  } catch (err) {
    console.log(err.message)
    res.status(401).send(err.message)
  }
})

app.get('/register', (req, res) => { })

app.post('/register', (req, res) => { })

app.post('/logout', (req, res) => { })

app.post('/protected', (req, res) => { })

app.listen(3000, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
