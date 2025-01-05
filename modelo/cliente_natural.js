import { client } from '../db.js'

export class clienteNaturalRepository {
  static async crearCliente({ rif, direccFiscal, cedula, nombre, segundoNombre, apellido, segundoApellido, fechaNacimiento, parroquia, codigoArea, telefono, correo, usuario, contraseña }) {
    try {
      const query = 'CALL crear_usuario_cliente_natural($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)'
      const params = [rif, direccFiscal, cedula, nombre, segundoNombre, apellido, segundoApellido, fechaNacimiento, parroquia, codigoArea, telefono, correo, usuario, contraseña]
      await client.query(query, params)
      return true
    } catch (err) {
      throw new Error(err.message)
    }
  }
}
