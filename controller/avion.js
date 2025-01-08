import { avionRepository } from '../modelo/avion.js'

export class controllerAvion {
  static async obtenerRuta(req, res) {
    const { user } = req.session
    const username = user?.username
    const entidad = await avionRepository.devolverAviones()
    const nombreEntidad = 'avion'
    res.render('tabla', { username, entidad, nombreEntidad })
  }

  // CREATE
  static async crearAvion(req, res) {
    const { nombre, descripcion } = req.body
    try {
      const respuesta = await avionRepository.crearAvion(nombre, descripcion)
      if (respuesta) {
        res.json({ message: 'Modelo de Avion creado' })
      } else {
        res.json({ message: 'No se pudo crear el Modelo de Avion' })
      }
    } catch (error) {
      console.error(error)
    }
  }

  // MODIFY
  static async obtenerAvion(req, res) {
    const { user } = req.session
    const username = user?.username
    const { id } = req.params
    const entidad = await avionRepository.devolverAvion(id)
    res.render('avion', { username, entidad })
  }

  // DELETE
  static async eliminarAvion(req, res) {
    const { id } = req.params
    const respuesta = await avionRepository.eliminarAvion(id)
    res.json(respuesta)
  }

  // UPDATE

}
