import { lugarRepository } from '../modelo/lugar.js'

export class controllerLugar {
  static async devolverEstado(req, res) {
    try {
      const result = await lugarRepository.devolverEstados()
      res.json(result)
    } catch (err) {
      console.log(err.message)
      res.status(500).send('Internal Server Error')
    }
  }

  static async devolverMunicipio(req, res) {
    const estadoId = req.params.estadoId
    if (typeof estadoId !== 'string') {
      res.status(400).send('El id del estado debe ser un numero')
      return
    }
    try {
      const result = await lugarRepository.devolverMunicipios(estadoId)
      res.json(result)
    } catch (err) {
      console.log(err.message)
      res.status(500).send('Internal Server Error')
    }
  }

  static async devolverParroquia(req, res) {
    const municipioId = req.params.municipioId
    if (typeof municipioId !== 'string') {
      res.status(400).send('El id del municipio debe ser un numero')
      return
    }
    try {
      const result = await lugarRepository.devolverParroquias(municipioId)
      res.json(result)
    } catch (err) {
      console.log(err.message)
      res.status(500).send('Internal Server Error')
    }
  }
}
