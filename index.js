import express from 'express'
import { PORT } from './config.js'
import { controllerLugar } from './controller/lugar.js'
import { controllerClienteNatural } from './controller/cliente_natural.js'
import { controllerClienteJuridico } from './controller/cliente_juridico.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { AuthController } from './controller/auth.js'
import { controllerAvion } from './controller/avion.js'
import { reporteController } from './controller/reporte.js'
import { controllerRol } from './controller/rol.js'
import { controllerEmpleado } from './controller/empleado.js'
import { controllerProveedor } from './controller/proveedor.js'
import { controllerPrueba } from './controller/prueba.js'

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

// MODELO AVION
app.get('/avion', controllerAvion.obtenerRuta)
app.post('/avion', controllerAvion.crearAvion) // Create avion
app.get('/avion/:id', controllerAvion.obtenerAvion) // Read avion
app.put('/avion/:id', controllerAvion.actualizarAvion) // Update avion
app.post('/avion/:id/eliminar', controllerAvion.eliminarAvion) // Delete avion

// TIPO PRUEBAS
app.get('/prueba', controllerPrueba.obtenerRuta)
app.post('/prueba', controllerPrueba.crearPrueba) // Create Tipo Prueba
app.post('/prueba/:id', controllerPrueba.obtenerPrueba) // Read Tipo Prueba
app.put('/prueba/:id', controllerPrueba.actualizarPrueba) // Update Tipo Prueba
app.post('/prueba/:id/eliminar', controllerPrueba.eliminarPrueba) // Delete Tipo Prueba

// PROVEEDORES
app.get('/proveedor', controllerProveedor.obtenerRuta)
app.post('/proveedor', controllerProveedor.crearProveedor) // Create Proveedor
app.get('/proveedor/:id', controllerProveedor.obtenerProveedor) // Read Proveedor
app.put('/proveedor/:id', controllerProveedor.actualizarProveedor) // Update Proveedor
app.post('/proveedor/:id/eliminar', controllerProveedor.eliminarProveedor) // Delete Proveedor

// Empleados
app.get('/empleado', controllerEmpleado.obtenerRuta)
app.post('/empleado', controllerEmpleado.crearEmpleado) // Create Empleado
app.get('/empleado/:id', controllerEmpleado.obtenerEmpleado) // Read Empleado
app.put('/empleado/:id', controllerEmpleado.actualizarEmpleado) // Update Empleado
app.post('/empleado/:id/eliminar', controllerEmpleado.eliminarEmpleado) // Delete Empleado

// Roles
app.get('/rol', controllerRol.obtenerRuta)
app.post('/rol', controllerRol.crearRol) // Create Rol
app.get('/rol/:id', controllerRol.obtenerRol) // Read Rol
app.put('/rol/:id', controllerRol.actualizarRol) // Update Rol
app.post('/rol/:id/eliminar', controllerRol.eliminarRol) // Delete Rol

// REPORTES
app.get('/reportes', reporteController.devolverPagina)
app.get('/reportes/:reporteNombre', reporteController.devolverReportePagina)
app.get('/reportes/pagos-a-proveedores/:fechaInicioFin', reporteController.getProveedoresYProductos)

app.listen(3000, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
