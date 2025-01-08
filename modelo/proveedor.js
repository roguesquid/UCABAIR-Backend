import { client } from '../db.js'

export class proveedorRepository {
  static async devolverProveedores() {
    try {
      const result = await client.query('SELECT * FROM obtener_proveedores();')
      return result.rows
    } catch (err) {
      console.log(err.message)
      throw new Error('Internal Server Error')
    }
  }

  // eliminar
  static async eliminarProveedor(id, tipo) {
    try {
      await client.query('SELECT * FROM eliminar_proveedor($1);', [id])
      return { message: `Proveedor id ${id} eliminado exitosamente` }
    } catch (err) {
      console.log(err.message)
      throw new Error('Internal Server Error')
    }
  }

  // Crear
  static async crearProveedor(calificacion, rif, razonSocial, paginaWeb, direccionFisica, lugar) {
    try {
      await client.query('SELECT * FROM crear_proveedor($1, $2, $3, $4, $5, $6);', [calificacion, rif, razonSocial, paginaWeb, direccionFisica, lugar])
      return { message: `Proveedor ${razonSocial} creado exitosamente` }
    } catch (err) {
      console.log(err.message)
      throw new Error('Internal Server Error')
    }
  }
}
