import { client } from '../db.js'

export class lugarRepository {
  static async devolverEstados() {
    try {
      const result = await client.query('SELECT lugar_codigo, lugar_nombre FROM LUGAR WHERE lugar_tipo = $1', ['estado'])
      return result.rows
    } catch (err) {
      console.log(err.message)
      throw new Error('Internal Server Error')
    }
  }

  static async devolverMunicipios(estadoId) {
    try {
      const result = await client.query('SELECT lugar_codigo, lugar_nombre FROM LUGAR WHERE lugar_tipo = $1 AND lugar_fk_lugar = $2', ['municipio', estadoId])
      return result.rows
    } catch (err) {
      console.log(err.message)
      throw new Error('Internal Server Error')
    }
  }

  static async devolverParroquias(municipioId) {
    try {
      const result = await client.query('SELECT lugar_codigo, lugar_nombre FROM LUGAR WHERE lugar_tipo = $1 AND lugar_fk_lugar = $2', ['parroquia', municipioId])
      return result.rows
    } catch (err) {
      console.log(err.message)
      throw new Error('Internal Server Error')
    }
  }
}
