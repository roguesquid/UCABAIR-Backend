import { pruebaRepository } from '../modelo/prueba.js'

export class controllerPrueba {
  static async obtenerRuta(req, res) {
    const { user } = req.session
    const username = user?.username
    const pruebas = await pruebaRepository.devolverPruebas()
    const entidad = pruebas.map(prueba => {
      return {
        id: prueba.id,
        nombre: prueba.tipo,
        duracion: `${prueba.duracion.hours} Horas, ${prueba.duracion.minutes ?? 0} Minutos`,
        tipo: prueba.tipo
      }
    })
    const nombreEntidad = 'prueba'
    res.render('tabla', { username, entidad, nombreEntidad })
  }

  // CREATE
  static async crearPrueba(req, res) {
    const { nombre, duracion, tipo, zona } = req.body
    try {
      const respuesta = await pruebaRepository.crearPrueba(nombre, duracion, tipo, zona)
      if (respuesta) {
        res.json({ message: 'Tipo de prueba creada' })
      } else {
        res.json({ message: 'No se pudo crear el Tipo de prueba' })
      }
    } catch (error) {
      console.error(error)
    }
  }

  // DELETE
  static async eliminarPrueba(req, res) {
    const { id } = req.params
    const { tipo } = req.body
    const respuesta = await pruebaRepository.eliminarPrueba(id, tipo)
    res.json(respuesta)
  }
}
