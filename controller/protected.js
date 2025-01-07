export class controllerProtected {
  static async protected(req, res) {
    const { user } = req.session

    if (!user) {
      return res.status(401).send('Acceso no autorizado')
    }

    return res.status(200).send('Acceso autorizado')
  }
}
