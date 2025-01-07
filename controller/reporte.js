import { reporteModel } from '../modelo/reporte.js'

export class reporteController {
  static async devolverPagina(req, res) {
    const { user } = req.session
    const username = user?.username
    res.render('reportes', { username })
  }

  static async devolverReportePagina(req, res) {
    const { user } = req.session
    const username = user?.username

    const reporte = req.params.reporteNombre
    const fechaInicio = req.query?.fechaInicio
    const fechaFin = req.query?.fechaFin

    let datos = []

    if (fechaInicio && fechaFin) {
      datos = await reporteModel.pagosAProveedores(fechaInicio, fechaFin)
      res.render('reporte3', { username, datos })
      return
    }

    switch (reporte) {
      case 'proveedores-y-productos':
        datos = await reporteModel.proveedoresYProductos()
        res.render('reporte1', { username, datos })
        break
      case 'ingresos-a-inventario':
        datos = await reporteModel.ingresosAInventario()
        res.render('reporte2', { username, datos })
        break
      case 'pagos-a-proveedores':
        res.render('reporte3Periodo', { username, datos })
        break
      case 'modelos-y-piezas':
        datos = await reporteModel.modelosYPiezas()
        res.render('reporte4', { username, datos })
        break
      case 'modelos-y-pruebas':
        datos = await reporteModel.modelosYPruebas()
        res.render('reporte5', { username, datos })
        break
      case 'empleados-y-horarios':
        datos = await reporteModel.empleadosYHorarios()
        res.render('reporte6', { username, datos })
        break
      case 'empleados-y-proyectos':
        datos = await reporteModel.empleadosYProyectos()
        res.render('reporte7', { username, datos })
        break
      default:
        res.status(404).send('Reporte no encontrado')
        break
    }
  }

  static async getProveedoresYProductos(req, res) {
    const { user } = req.session
    const username = user?.username

    const fechaInicio = req.params.fechaInicio
    const fechaFin = req.params.fechaFin

    const datos = await reporteModel.pagosAProveedores(fechaInicio, fechaFin)
    res.render('reporte3', { username, datos })
  }
}
