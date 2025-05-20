import { Prisma } from '@prisma/client'

export type Clinic = {
  id: string
  name: string
  address: string
  phone: string
  createdAt: Date
  updatedAt: Date
}
