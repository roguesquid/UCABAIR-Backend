export class solicitudCompraController {
  static async devolverPagina(req, res) {
    const { user } = req.session
    const username = user?.username
    res.render('solicitud_compra', { username })
  }
}