import { userRepository } from '../modelo/user.js'
import { validateLogin } from '../schemas/login.js'
import jwt from 'jsonwebtoken'
import { SECRET_JWT_KEY } from '../config.js'

export class AuthController {
  static async verificarLogin(req, res) {
    const { username, password } = req.body

    const result = validateLogin({ username, password })
    if (result.error) {
      throw new Error(result.error.message)
    }

    try {
      const user = await userRepository.login(username, password)
      const token = jwt.sign(
        { id: user.usuarioCodigo, username: user.usuarioNombre },
        SECRET_JWT_KEY,
        { expiresIn: '1h' }
      )
      res
        .cookie('access-token', token, {
          httpOnly: true, // la cookie solo se puede acceder en el servidor
          sameSite: true, // la cookie solo se puede acceder en el mismo dominio
          maxAge: 1000 * 60 * 60 // la cookie tiene un tiempo de validez de 1 hora
        })
        .send({ user, token })
    } catch (err) {
      res.status(401).send(err.message)
    }
  }

  static async logout(req, res) {
    res.clearCookie('access-token').json('Sesion cerrada')
  }

  static async authMiddleware(req, res, next) {
    const token = req.cookies['access-token']
    let data = null

    req.session = { user: null }

    try {
      data = jwt.verify(token, SECRET_JWT_KEY)
      req.session.user = data
    } catch (error) {
      req.session.user = null
    }

    next() // -> seguir a la siguiente ruta o middleware
  }
}
