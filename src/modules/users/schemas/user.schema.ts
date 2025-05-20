import { z } from 'zod'

export const createUserSchema = z.object({
  name: z
    .string()
    .min(1, 'Nome é obrigatório')
    .max(100, 'Nome não pode conter mais que 100 caracteres'),

  email: z
    .string()
    .email('Formato de email inválido')
    .min(1, 'Email é obrigatório'),

  password: z
    .string()
    .min(8, 'A senha deve conter no minimo 8 caracteres')
    .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiuscula')
    .regex(/[0-9]/, 'A senha deve conter pelo menos um número'),
})

export const updateUserSchema = createUserSchema.partial()

export const idSchema = z.object({
  id: z.string().uuid('Não é um UUID válido'),
})

export type CreateUserDto = z.infer<typeof createUserSchema>
export type UpdateUserDto = z.infer<typeof updateUserSchema>
export type IdParams = z.infer<typeof idSchema>
