import { client } from '../db.js'

export class clienteJuridicoRepository {
  static async crearCliente({
    rif,
    direccFiscal,
    razonSocial,
    paginaWeb,
    direccFisica,
    parroquiaSeleccionada,
    parroquiaSeleccionada2,
    codigoArea,
    telefono,
    correo,
    usuario,
    contraseña
  }) {
    try {
      const query = 'CALL crear_usuario_cliente_juridico($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)'
      const params = [rif, direccFiscal, razonSocial, paginaWeb, direccFisica, parroquiaSeleccionada, parroquiaSeleccionada2, codigoArea, telefono, correo, usuario, contraseña]
      await client.query(query, params)
      return true
    } catch (err) {
      console.error(err.message)
    }
  }
}
