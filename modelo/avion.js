import { client } from '../db.js'

export class avionRepository {
  static async devolverAviones() {
    try {
      const result = await client.query('SELECT * FROM obtener_aviones();')
      return result.rows
    } catch (err) {
      console.log(err.message)
      throw new Error('Internal Server Error')
    }
  }

  // eliminar
  static async eliminarAvion(id) {
    try {
      await client.query('SELECT * FROM eliminar_modelo_avion($1);', [id])
      return { message: `Avion id ${id} eliminado exitosamente` }
    } catch (err) {
      console.log(err.message)
      throw new Error('Internal Server Error')
    }
  }

  // modificar
  static async devolverAvion(id) {
    try {
      const result = await client.query('SELECT * FROM obtener_avion($1);', [id])
      return result.rows[0]
    } catch (err) {
      console.log(err.message)
      throw new Error('Internal Server Error')
    }
  }

  static async crearAvion(nombre, descripcion) {
    try {
      await client.query('SELECT * FROM crear_modelo_avion($1, $2);', [nombre, descripcion])
      return { message: `Avion ${nombre} creado exitosamente` }
    } catch (err) {
      console.log(err.message)
      throw new Error('Internal Server Error')
    }
  }

  static async actualizarAvion(id, nombre, descripcion) {
    try {
      console.log(id, nombre, descripcion);
      await client.query('SELECT * FROM actualizar_modelo_avion($1, $2, $3);', [id, nombre, descripcion])
      return { message: `Avion id ${id} actualizado exitosamente` }
    } catch (err) {
      console.log(err.message)
      throw new Error('Internal Server Error')
    }
  }
}
