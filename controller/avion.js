import { avionRepository } from '../modelo/avion.js'

export class controllerAvion {
  static async obtenerRuta(req, res) {
    const { user } = req.session
    const username = user?.username
    const aviones = await avionRepository.devolverAviones()
    res.render('aviones', { username, aviones })
  }

  // CREATE
  // static async crearAvion(req, res) {
  //   const { user } = req.session
  //   const username = user?.username
  //   res.render('crear_avion', { username })
  // }

  // MODIFY
  static async obtenerAvion(req, res) {
    const { user } = req.session
    const username = user?.username
    const { id } = req.params
    const avion = await avionRepository.devolverAvion(id)
    res.render('avion', { username, avion })
  }

  // DELETE
  static async eliminarAvion(req, res) {
    const { id } = req.params
    const respuesta = await avionRepository.eliminarAvion(id)
    res.json(respuesta)
  }

  // UPDATE

}
