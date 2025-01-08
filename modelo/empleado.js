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

  // OBTENER EMPLEADO
  static async devolverEmpleado(id) {
    try {
      const result = await client.query('SELECT * FROM obtener_empleado($1);', [id])
      const { cedula, nombre, snombre, apellido, sapellido, fechanac, direccion, rif, experiencia, lugar } = result.rows[0]
      return { cedula, nombre, sNombre: snombre, apellido, sApellido: sapellido, fechaNac: fechanac, direccion, rif, experiencia, lugar }
    } catch (err) {
      console.log(err.message)
      throw new Error('Internal Server Error')
    }
  }

  // ACTUALIZAR EMPLEADO
  static async actualizarEmpleado(id, cedula, nombre, sNombre, apellido, sApellido, fechaNac, direccion, rif, experiencia, lugar) {
    try {
      await client.query('SELECT * FROM actualizar_empleado($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);', [id, cedula, nombre, sNombre, apellido, sApellido, fechaNac, direccion, rif, experiencia, lugar])
      return { message: `Empleado id ${id} actualizado exitosamente` }
    } catch (err) {
      console.log(err.message)
      throw new Error('Internal Server Error')
    }
  }
}
