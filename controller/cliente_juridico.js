import { clienteJuridicoRepository } from '../modelo/cliente_juridico.js'
import { validateClienteJuridico } from '../schemas/cliente_juridico.js'

export class controllerClienteJuridico {
  static async crearClienteJuridico(req, res) {
    const {
      rif,
      direccFiscal,
      razonSocial,
      paginaWeb,
      direccFisica,
      parroquia,
      parroquia2,
      codigoArea,
      telefono,
      correo,
      usuario,
      contraseña
    } = req.body
    const cliente = {
      rif,
      direccFiscal,
      razonSocial,
      paginaWeb,
      direccFisica,
      parroquia,
      parroquia2,
      codigoArea,
      telefono,
      correo,
      usuario,
      contraseña
    }

    const result = validateClienteJuridico(cliente)

    if (result.error) {
      res.status(400).send(result.error.message)
      return
    }

    // Llamar al modelo
    try {
      const result = await clienteJuridicoRepository.crearCliente(cliente)
      if (result) {
        res.json({ message: 'Cliente Juridico creado' })
      } else {
        res.status(400).send('No se pudo crear el Cliente Juridico')
      }
    } catch (err) {
      console.log(err.message)
      res.status(500).send('Internal Server Error')
    }
  }
}
