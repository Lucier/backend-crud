import { z } from 'zod'

export const createDoctorSchema = z.object({
  name: z
    .string()
    .min(1, 'Nome é obrigatório')
    .max(100, 'Nome não pode conter mais que 100 caracteres'),

  crm: z
    .string()
    .min(1, 'CRM é obrigatório')
    .max(100, 'CRM não pode conter mais que 100 caracteres'),

  email: z
    .string()
    .min(1, 'Email é obrigatório')
    .max(100, 'Email não pode conter mais que 250 caracteres'),

  phone: z
    .string()
    .min(1, 'Telefone é obrigatório')
    .max(100, 'Telefone não pode conter mais que 250 caracteres'),
})

export const updateDoctorSchema = createDoctorSchema.partial()

export const idSchema = z.object({
  id: z.string().uuid('Não é um UUID válido'),
})

export type CreateDoctorDto = z.infer<typeof createDoctorSchema>
export type UpdateDoctorDto = z.infer<typeof updateDoctorSchema>
export type IdParams = z.infer<typeof idSchema>
