import { proveedorRepository } from '../modelo/proveedor.js'

export class controllerProveedor {
  static async obtenerRuta(req, res) {
    const { user } = req.session
    const username = user?.username
    const entidad = await proveedorRepository.devolverProveedores()
    const nombreEntidad = 'proveedor'
    res.render('tabla', { username, entidad, nombreEntidad })
  }

  // CREATE
  static async crearProveedor(req, res) {
    const { calificacion, rif, razonSocial, paginaWeb, direccionFisica, lugar } = req.body
    try {
      const respuesta = await proveedorRepository.crearProveedor(calificacion, rif, razonSocial, paginaWeb, direccionFisica, lugar)
      if (respuesta) {
        res.json({ message: 'Proveedor creado' })
      } else {
        res.json({ message: 'No se pudo crear el Proveedor' })
      }
    } catch (error) {
      console.error(error)
    }
  }

  // DELETE
  static async eliminarProveedor(req, res) {
    const { id } = req.params
    const respuesta = await proveedorRepository.eliminarProveedor(id)
    res.json(respuesta)
  }
}
