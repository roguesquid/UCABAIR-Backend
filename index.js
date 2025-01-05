import express from 'express'
import { PORT } from './config.js'

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.get('/login', (req, res) => { })

app.post('/login', (req, res) => { })

app.get('/register', (req, res) => { })

app.post('/register', (req, res) => { })

app.post('/logout', (req, res) => { })

app.post('/protected', (req, res) => { })



app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`)
})
