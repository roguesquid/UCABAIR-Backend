import z from 'zod'

const clienteNaturalSchema = z.object(
  {
    rif: z.string().max(20),
    direccFiscal: z.string().max(70),
    cedula: z.number().int(),
    nombre: z.string().max(30),
    segundoNombre: z.string().max(30),
    apellido: z.string().max(30),
    segundoApellido: z.string().max(30),
    fechaNacimiento: z.string().date(),
    parroquia: z.number().int(),
    codigoArea: z.string().max(4),
    telefono: z.string().max(9),
    correo: z.string().email().max(50),
    usuario: z.string().max(50),
    contraseña: z.string().max(50)
  }
)

export function validateClienteNatural(data) {
  return clienteNaturalSchema.safeParse(data)
}
