import { client } from '../db.js'

export class userRepository {
  static async login(username, password) {
    const query = 'SELECT usuario_codigo, usuario_nombre, usuario_contrasena FROM usuario WHERE usuario_nombre = $1'
    const params = [username]
    const { rows } = await client.query(query, params)
    if (rows.length === 0) {
      throw new Error('Usuario o contraseña incorrectos')
    }
    if (rows[0].usuario_contrasena !== password) {
      throw new Error('Usuario o contraseña incorrectos')
    }

    const { usuario_codigo, usuario_nombre } = rows[0]

    const userInfo = {
      usuarioCodigo: usuario_codigo,
      usuarioNombre: usuario_nombre
    }

    return userInfo
  }
}
