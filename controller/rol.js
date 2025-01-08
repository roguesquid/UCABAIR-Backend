import { rolRepository } from '../modelo/rol.js'

export class controllerRol {
  static async obtenerRuta(req, res) {
    const { user } = req.session
    const username = user?.username
    const entidad = await rolRepository.devolverRoles()
    const nombreEntidad = 'rol'
    res.render('tabla', { username, entidad, nombreEntidad })
  }

  // CREATE
  static async crearRol(req, res) {
    const { nombre, descripcion } = req.body
    try {
      const respuesta = await rolRepository.crearRol(nombre, descripcion)
      if (respuesta) {
        res.json({ message: 'Rol creado' })
      } else {
        res.json({ message: 'No se pudo crear el Rol' })
      }
    } catch (error) {
      console.error(error)
    }
  }

  // DELETE
  static async eliminarRol(req, res) {
    const { id } = req.params
    const respuesta = await rolRepository.eliminarRol(id)
    res.json(respuesta)
  }
}
