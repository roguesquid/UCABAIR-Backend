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

  // Read

  static async devolverProveedor(id) {
    try {
      const result = await client.query('SELECT * FROM obtener_proveedor($1);', [id])
      const { calificacion, rif, nombre, pagina_web, direccion_fiscal, lugar_nom } = result.rows[0]
      return { calificacion, rif, razonSocial: nombre, paginaWeb: pagina_web, direccion: direccion_fiscal, parroquia: lugar_nom }
    } catch (err) {
      console.log(err.message)
      throw new Error('Internal Server Error')
    }
  }

  // Update
  static async actualizarProveedor(id, calificacion, rif, razonSocial, paginaWeb, direccionFisica, lugar) {
    try {
      console.log(id, calificacion, rif, razonSocial, paginaWeb, direccionFisica, lugar);
      await client.query('SELECT * FROM actualizar_proveedor($1, $2, $3, $4, $5, $6, $7);', [id, calificacion, rif, razonSocial, paginaWeb, direccionFisica, lugar])
      return { message: `Proveedor id ${id} actualizado exitosamente` }
    } catch (err) {
      console.log(err.message)
      throw new Error('Internal Server Error')
    }
  }
}
