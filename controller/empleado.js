import { empleadoRepository } from '../modelo/empleado.js'

export class controllerEmpleado {
  static async obtenerRuta(req, res) {
    const { user } = req.session
    const username = user?.username
    const entidad = await empleadoRepository.devolverEmpleados()
    const nombreEntidad = 'empleado'
    res.render('tabla', { username, entidad, nombreEntidad })
  }

  // CREATE
  static async crearEmpleado(req, res) {
    const { cedula, nombre, sNombre, apellido, sApellido, fechaNac, direccion, rif, experiencia, lugar } = req.body

    console.log(req.body);
    try {
      const respuesta = await empleadoRepository.crearEmpleado(Number(cedula), nombre, sNombre, apellido, sApellido, fechaNac, direccion, rif, experiencia, lugar)
      if (respuesta) {
        res.json({ message: 'Empleado creado' })
      } else {
        res.json({ message: 'No se pudo crear el Empleado' })
      }
    } catch (error) {
      console.error(error)
    }
  }

  // DELETE
  static async eliminarEmpleado(req, res) {
    const { id } = req.params
    const respuesta = await empleadoRepository.eliminarEmpleado(id)
    res.json(respuesta)
  }

  static async obtenerEmpleado(req, res) {
    const { id } = req.params
    const entidad = await empleadoRepository.devolverEmpleado(id)
    res.json(entidad)
  }

  static async actualizarEmpleado(req, res) {
    const { id } = req.params
    const { cedula, nombre, sNombre, apellido, sApellido, fechaNac, direccion, rif, experiencia, parroquia } = req.body
    const respuesta = await empleadoRepository.actualizarEmpleado(id, cedula, nombre, sNombre, apellido, sApellido, fechaNac, direccion, rif, experiencia, parroquia)
    res.json(respuesta)
  }
}
