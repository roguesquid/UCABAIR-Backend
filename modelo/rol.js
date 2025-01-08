import { client } from '../db.js'

export class rolRepository {
  static async devolverRoles() {
    try {
      const result = await client.query('SELECT * FROM obtener_roles();')
      return result.rows
    } catch (err) {
      console.log(err.message)
      throw new Error('Internal Server Error')
    }
  }

  // eliminar
  static async eliminarRol(id, tipo) {
    try {
      await client.query('SELECT * FROM eliminar_rol($1);', [id])
      return { message: `Rol id ${id} eliminado exitosamente` }
    } catch (err) {
      console.log(err.message)
      throw new Error('Internal Server Error')
    }
  }

  // crear
  static async crearRol(nombre, descripcion) {
    try {
      await client.query('SELECT * FROM crear_rol($1, $2);', [nombre, descripcion])
      return { message: `Rol ${nombre} creado exitosamente` }
    } catch (err) {
      console.log(err.message)
      throw new Error('Internal Server Error')
    }
  }
}
