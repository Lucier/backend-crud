import { z } from 'zod'

export const createClinicSchema = z.object({
  name: z
    .string()
    .min(1, 'Nome é obrigatório')
    .max(100, 'Nome não pode conter mais que 100 caracteres'),

  address: z
    .string()
    .min(1, 'Endereço é obrigatório')
    .max(100, 'Descrição não pode conter mais que 250 caracteres'),

  phone: z.string(),
})

export const updateClinicSchema = createClinicSchema.partial()

export const idSchema = z.object({
  id: z.string().uuid('Não é um UUID válido'),
})

export type CreateClinicDto = z.infer<typeof createClinicSchema>
export type UpdateClinicDto = z.infer<typeof updateClinicSchema>
export type IdParams = z.infer<typeof idSchema>
