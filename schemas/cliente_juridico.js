import z from 'zod'

const clienteJuridicoSchema = z.object(
  {
    rif: z.string().max(20),
    direccFiscal: z.string().max(200),
    razonSocial: z.string().max(50),
    paginaWeb: z.string().max(50),
    direccFisica: z.string().max(200),
    parroquia: z.number().int().positive(),
    parroquia2: z.number().int().positive(),
    codigoArea: z.string().max(4),
    telefono: z.string().max(9),
    correo: z.string().email().max(50),
    usuario: z.string().max(50),
    contraseña: z.string().max(50)
  }
)

export function validateClienteJuridico(data) {
  return clienteJuridicoSchema.safeParse(data)
}
