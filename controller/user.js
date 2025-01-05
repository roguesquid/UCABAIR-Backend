import { validateLogin } from '../schemas/login.js'
import { client } from '../db.js'

export class userRepository {
  static async login(username, password) {
    // VERIFICACIONES
    const result = validateLogin({ username, password })
    if (result.error) {
      throw new Error(result.error.message)
    }

    const query = 'SELECT usuario_nombre, usuario_contrasena FROM usuario WHERE usuario_nombre = $1'
    const params = [username]
    const { rows } = await client.query(query, params)

    if (rows.length === 0) {
      throw new Error('Usuario o contraseña incorrectos')
    }
    if (rows[0].usuario_contrasena !== password) {
      throw new Error('Usuario o contraseña incorrectos')
    }

    return rows[0].usuario_nombre
  }
}
