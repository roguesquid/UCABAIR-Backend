import express from 'express'
import path from 'path'
import { PORT } from './config.js'
import { controllerLugar } from './controller/lugar.js'
import { controllerClienteNatural } from './controller/cliente_natural.js'
import { controllerClienteJuridico } from './controller/cliente_juridico.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { AuthController } from './controller/auth.js'

const app = express()

app.set('view engine', 'ejs')

app.use(cors())

app.use(express.json())

app.use(cookieParser())

// MiddleWare de autenticacion
app.use(AuthController.authMiddleware)

app.use(express.static('public'))

app.get('/', (req, res) => {
  const { user } = req.session
  const username = user?.username
  res.render('inicio', { username })
})

app.get('/login', (req, res) => {
  // res.sendFile(path.join(process.cwd(), 'public/login.html'))
  res.render('login')
})

app.post('/login', AuthController.verificarLogin)

app.post('/logout', AuthController.logout)

app.post('/protected', (req, res) => { })

app.get('/lugar/estado', controllerLugar.devolverEstado)

app.get('/lugar/:estadoId/municipio', controllerLugar.devolverMunicipio)

app.get('/lugar/:municipioId/parroquia', controllerLugar.devolverParroquia)

app.get('/registrar-cliente-natural', (req, res) => {
  // res.sendFile(path.join(process.cwd(), 'public/registro_cliente_natural.html'))
  res.render('registro_cliente_natural')
})

app.post('/cliente_natural', controllerClienteNatural.crearClienteNatural)

app.get('/registrar-cliente-juridico', (req, res) => {
  // res.sendFile(path.join(process.cwd(), 'public/registro_cliente_juridico.html'))
  res.render('registro_cliente_juridico')
})

app.post('/cliente_juridico', controllerClienteJuridico.crearClienteJuridico)

app.listen(3000, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
