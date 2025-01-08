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

    let entidad = []
    const nombreEntidad = reporte.split('-').join(' ')

    switch (reporte) {
      case 'proveedores-y-productos':
        entidad = await reporteModel.proveedoresYProductos()
        res.render('reporte', { username, entidad, nombreEntidad })
        break
      case 'ingresos-a-inventario':
        entidad = await reporteModel.ingresosAInventario()
        res.render('reporte', { username, entidad, nombreEntidad })
        break
      case 'pagos-a-proveedores':
        res.render('reporte3Periodo', { username, entidad, nombreEntidad })
        break
      case 'modelos-y-piezas':
        entidad = await reporteModel.modelosYPiezas()
        res.render('reporte', { username, entidad, nombreEntidad })
        break
      case 'modelos-y-pruebas':
        let entidadCruda = await reporteModel.modelosYPruebas()
        entidad = entidadCruda.map((e) => {
          return {
            Modelo: e.modelo_avion_nombre,
            Prueba: e.tipo_pa_nombre,
            Duracion: `${e.tipo_pa_duracion.hours} Horas, ${e.tipo_pa_duracion.minutes ?? 0} Minutos`,
            Zona: e.zona_nombre
          }
        })
        res.render('reporte', { username, entidad, nombreEntidad })
        break
      case 'empleados-y-horarios':
        entidad = await reporteModel.empleadosYHorarios()
        res.render('reporte', { username, entidad, nombreEntidad })
        break
      case 'empleados-y-proyectos':
        entidad = await reporteModel.empleadosYProyectos()
        res.render('reporte', { username, entidad, nombreEntidad })
        break
      default:
        res.status(404).send('Reporte no encontrado')
        break
    }
  }

  static async getProveedoresYProductos(req, res) {
    const { user } = req.session
    const username = user?.username

    const fechas = req.params.fechaInicioFin.split('&')
    const fechaInicio = fechas[0]
    const fechaFin = fechas[1]
    const reporte = 'pagos-a-proveedores'
    const nombreEntidad = reporte.split('-').join(' ')

    const entidad = await reporteModel.pagosAProveedores(fechaInicio, fechaFin)
    res.render('reporte3', { username, entidad, nombreEntidad })
  }
}
