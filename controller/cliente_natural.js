import { clienteNaturalRepository } from '../modelo/cliente_natural.js'
import { validateClienteNatural } from '../schemas/cliente_natural.js'

export class controllerClienteNatural {
  static async crearClienteNatural(req, res) {
    const {
      rif,
      direccFiscal,
      cedula,
      nombre,
      segundoNombre,
      apellido,
      segundoApellido,
      fechaNacimiento,
      parroquia,
      codigoArea,
      telefono,
      correo,
      usuario,
      contraseña
    } = req.body

    const cliente = {
      rif,
      direccFiscal,
      cedula,
      nombre,
      segundoNombre,
      apellido,
      segundoApellido,
      fechaNacimiento,
      parroquia,
      codigoArea,
      telefono,
      correo,
      usuario,
      contraseña
    }

    const result = validateClienteNatural(cliente)

    if (result.error) {
      res.status(400).send(result.error.message)
      return
    }

    // Llamar al modelo
    try {
      const result = await clienteNaturalRepository.crearCliente(cliente)
      if (result) {
        res.json({ message: 'Cliente Natural creado' })
      } else {
        res.status(400).send('No se pudo crear el Cliente Natural')
      }
    } catch (err) {
      console.log(err.message)
      res.status(500).send('Internal Server Error')
    }
  }
}
