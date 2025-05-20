import { Prisma } from '@prisma/client'

export type Doctor = {
  id: string
  name: string
  crm: string
  phone: string
  email: string
  createdAt: Date
  updatedAt: Date
}
