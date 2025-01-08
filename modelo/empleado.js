import { client } from '../db.js'

export class empleadoRepository {
  static async devolverEmpleados() {
    try {
      const result = await client.query('SELECT * FROM obtener_empleados();')
      return result.rows
    } catch (err) {
      console.log(err.message)
      throw new Error('Internal Server Error')
    }
  }

  // eliminar
  static async eliminarEmpleado(id, tipo) {
    try {
      await client.query('SELECT * FROM eliminar_empleado($1);', [id])
      return { message: `Empleado id ${id} eliminado exitosamente` }
    } catch (err) {
      console.log(err.message)
      throw new Error('Internal Server Error')
    }
  }

  // CREAR EMPLEADO
  static async crearEmpleado(cedula, nombre, sNombre, apellido, sApellido, fechaNac, direccion, rif, experiencia, lugar) {
    try {
      await client.query('SELECT * FROM crear_empleado($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);', [cedula, nombre, sNombre, apellido, sApellido, fechaNac, direccion, rif, experiencia, lugar])
      return { message: `Empleado ${nombre} ${apellido} creado exitosamente` }
    } catch (err) {
      console.log(err.message)
      throw new Error('Internal Server Error')
    }
  }
}
