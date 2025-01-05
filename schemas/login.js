import z from 'zod'

const loginSchema = z.object(
  {
    username: z.string().max(49),
    password: z.string().max(49)
  }
)

export function validateLogin(data) {
  return loginSchema.safeParse(data)
}
