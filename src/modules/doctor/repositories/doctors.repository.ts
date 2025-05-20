import { Injectable } from '@nestjs/common'
import { Doctor } from '../types/doctor.types'
import { CreateDoctorDto, UpdateDoctorDto } from '../schemas/doctors.schema'
import { IRepository } from 'src/common/interfaces/repository.interface'
import { PrismaService } from 'src/prisma/prisma.service'

type DoctorUpdateInput = {
  name?: string
  crm?: string
  email?: string
  phone?: string
}

@Injectable()
export class DoctorsRepository implements IRepository<Doctor> {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Doctor[]> {
    return this.prisma.doctor.findMany()
  }

  async findById(id: string): Promise<Doctor | null> {
    return this.prisma.doctor.findUnique({
      where: { id },
    })
  }

  async findByCrm(crm: string): Promise<Doctor | null> {
    return this.prisma.doctor.findUnique({
      where: { crm },
    })
  }

  async create(createDoctorDto: CreateDoctorDto): Promise<Doctor> {
    return this.prisma.doctor.create({
      data: {
        ...createDoctorDto,
      },
    })
  }

  async update(id: string, updateDoctorDto: UpdateDoctorDto): Promise<Doctor> {
    const data: DoctorUpdateInput = { ...updateDoctorDto }

    return this.prisma.doctor.update({
      where: { id },
      data,
    })
  }

  async delete(id: string): Promise<void> {
    await this.prisma.doctor.delete({
      where: { id },
    })
  }
}
