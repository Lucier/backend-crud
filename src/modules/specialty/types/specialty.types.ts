import { Prisma } from '@prisma/client'

export type Specialty = {
  id: string
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
}
