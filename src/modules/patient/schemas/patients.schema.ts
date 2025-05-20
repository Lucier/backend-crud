import { z } from 'zod'

export const createPatientSchema = z.object({
  name: z
    .string()
    .min(1, 'Nome é obrigatório')
    .max(100, 'Nome não pode conter mais que 100 caracteres'),

  cpf: z
    .string()
    .min(1, 'CPF é obrigatório')
    .max(100, 'CPF não pode conter mais que 100 caracteres'),

  gender: z
    .string()
    .min(1, 'Sexo é obrigatório')
    .max(100, 'Sexo não pode conter mais que 100 caracteres'),

  phone: z
    .string()
    .min(1, 'Telefone é obrigatório')
    .max(100, 'Telefone não pode conter mais que 250 caracteres'),

  email: z
    .string()
    .min(1, 'Email é obrigatório')
    .max(100, 'Email não pode conter mais que 250 caracteres'),

  address: z.string(),
})

export const updatePatientSchema = createPatientSchema.partial()

export const idSchema = z.object({
  id: z.string().uuid('Não é um UUID válido'),
})

export type CreatePatientDto = z.infer<typeof createPatientSchema>
export type UpdatePatientDto = z.infer<typeof updatePatientSchema>
export type IdParams = z.infer<typeof idSchema>
