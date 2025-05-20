import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../../prisma/prisma.service'
import { IRepository } from '../../../common/interfaces/repository.interface'
import { Clinic } from '../types/clinic.types'
import { CreateClinicDto, UpdateClinicDto } from '../schemas/clinics.schema'

type ClinicUpdateInput = {
  name?: string
  address?: string
  phone?: string
}

@Injectable()
export class ClinicsRepository implements IRepository<Clinic> {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Clinic[]> {
    return this.prisma.clinic.findMany()
  }

  async findById(id: string): Promise<Clinic | null> {
    return this.prisma.clinic.findUnique({
      where: { id },
    })
  }

  async findByName(name: string): Promise<Clinic | null> {
    return this.prisma.clinic.findFirst({
      where: { name },
    })
  }

  async create(CreateClinicDto: CreateClinicDto): Promise<Clinic> {
    return this.prisma.clinic.create({
      data: {
        ...CreateClinicDto,
      },
    })
  }

  async update(id: string, updateClinicDto: UpdateClinicDto): Promise<Clinic> {
    const data: ClinicUpdateInput = { ...updateClinicDto }

    return this.prisma.clinic.update({
      where: { id },
      data,
    })
  }

  async delete(id: string): Promise<void> {
    await this.prisma.clinic.delete({
      where: { id },
    })
  }
}
