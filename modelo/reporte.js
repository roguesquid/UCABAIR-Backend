import { client } from '../db.js'

export class reporteModel {
  static async proveedoresYProductos() {
    const query = `
      SELECT * FROM proveedores_productos()
    `
    const { rows } = await client.query(query)
    return rows
  }

  static async ingresosAInventario() {
    const query = `
      SELECT * FROM ingresos_inventario_por_solicitudes_a_proveedores()
    `
    const { rows } = await client.query(query)
    return rows
  }

  static async pagosAProveedores(fechaInicio, fechaFin) {
    console.log(fechaInicio, fechaFin)
    const query = `
      SELECT * FROM pagos_proveedores_por_periodo_proc($1, $2)
    `
    const values = [fechaInicio, fechaFin]
    const { rows } = await client.query(query, values)
    console.log(rows)
    return rows
  }

  static async modelosYPiezas() {
    const query = `
      SELECT * FROM modelos_avion_piezas()
    `
    const { rows } = await client.query(query)
    return rows
  }

  static async modelosYPruebas() {
    const query = `
      SELECT * FROM modelos_avion_pruebas_cargos()
    `
    const { rows } = await client.query(query)
    return rows
  }

  static async empleadosYHorarios() {
    const query = `
      SELECT * FROM empleados_horario()
    `
    const { rows } = await client.query(query)
    return rows
  }

  static async empleadosYProyectos() {
    const query = `
      SELECT * FROM empleados_proyectos_asignados()
    `
    const { rows } = await client.query(query)
    return rows
  }
}
