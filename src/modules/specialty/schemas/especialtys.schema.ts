import { z } from 'zod'

export const createSpecialtySchema = z.object({
  name: z
    .string()
    .min(1, 'Nome é obrigatório')
    .max(100, 'Nome não pode conter mais que 100 caracteres'),

  description: z
    .string()
    .min(1, 'Descrição é obrigatório')
    .max(100, 'Descrição não pode conter mais que 250 caracteres'),
})

export const updateSpecialtySchema = createSpecialtySchema.partial()

export const idSchema = z.object({
  id: z.string().uuid('Não é um UUID válido'),
})

export type CreateSpecialtyDto = z.infer<typeof createSpecialtySchema>
export type UpdateSpecialtyDto = z.infer<typeof updateSpecialtySchema>
export type IdParams = z.infer<typeof idSchema>
