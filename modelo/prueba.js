import { client } from '../db.js'

export class pruebaRepository {
  static async devolverPruebas() {
    try {
      const result = await client.query('SELECT * FROM obtener_tipo_pruebas();')
      return result.rows
    } catch (err) {
      console.log(err.message)
      throw new Error('Internal Server Error')
    }
  }

  // eliminar
  static async eliminarPrueba(id, tipo) {
    try {
      await client.query('SELECT * FROM eliminar_tipo_prueba($1, $2);', [id, tipo])
      return { message: `Prueba ${tipo} id ${id} eliminado exitosamente` }
    } catch (err) {
      console.log(err.message)
      throw new Error('Internal Server Error')
    }
  }

  static async crearPrueba(nombre, duracion, tipo, zona) {
    try {
      const result = await client.query('SELECT * FROM crear_tipo_prueba($1, $2, $3, $4);', [nombre, duracion, tipo, zona])
      return result.rows[0].crear_tipo_prueba
    } catch (err) {
      console.log(err.message)
      throw new Error('Internal Server Error')
    }
  }
}
