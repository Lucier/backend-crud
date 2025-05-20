import { Injectable } from '@nestjs/common'
import { IRepository } from 'src/common/interfaces/repository.interface'
import { PrismaService } from 'src/prisma/prisma.service'
import { Patient } from '../types/patient.types'
import { CreatePatientDto, UpdatePatientDto } from '../schemas/patients.schema'

type PatientUpdateInput = {
  name?: string
  cpf?: string
  gender?: string
  phone?: string
  email?: string
  address?: string
}

@Injectable()
export class PatientsRepository implements IRepository<Patient> {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Patient[]> {
    return this.prisma.patient.findMany()
  }

  async findById(id: string): Promise<Patient | null> {
    return this.prisma.patient.findUnique({
      where: { id },
    })
  }

  async findByCpf(cpf: string): Promise<Patient | null> {
    return this.prisma.patient.findUnique({
      where: { cpf },
    })
  }

  async create(createPatientDto: CreatePatientDto): Promise<Patient> {
    return this.prisma.patient.create({
      data: {
        ...createPatientDto,
      },
    })
  }

  async update(
    id: string,
    updatePatientDto: UpdatePatientDto,
  ): Promise<Patient> {
    const data: PatientUpdateInput = { ...updatePatientDto }

    return this.prisma.patient.update({
      where: { id },
      data,
    })
  }

  async delete(id: string): Promise<void> {
    await this.prisma.patient.delete({
      where: { id },
    })
  }
}
