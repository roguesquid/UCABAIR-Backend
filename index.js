import express from 'express'
import path from 'path'
import { PORT } from './config.js'
import { userRepository } from './controller/user.js'
import { controllerLugar } from './controller/lugar.js'
import { controllerClienteNatural } from './controller/cliente_natural.js'
import { controllerClienteJuridico } from './controller/cliente_juridico.js'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.get('/inicio', (req, res) => { })

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
    res.status(401).send(err.message)
  }
})

app.get('/register', (req, res) => { })

app.post('/register', (req, res) => { })

app.post('/logout', (req, res) => { })

app.post('/protected', (req, res) => { })

app.get('/lugar/estado', controllerLugar.devolverEstado)

app.get('/lugar/:estadoId/municipio', controllerLugar.devolverMunicipio)

app.get('/lugar/:municipioId/parroquia', controllerLugar.devolverParroquia)

app.get('/registrar-cliente-natural', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public/registro_cliente_natural.html'))
})

app.post('/cliente_natural', controllerClienteNatural.crearClienteNatural)

app.get('/registrar-cliente-juridico', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public/registro_cliente_juridico.html'))
})

app.post('/cliente_juridico', controllerClienteJuridico.crearClienteJuridico)

app.listen(3000, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
