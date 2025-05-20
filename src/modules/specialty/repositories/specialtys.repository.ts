import { Injectable } from '@nestjs/common'
import {
  CreateSpecialtyDto,
  UpdateSpecialtyDto,
} from '../schemas/especialtys.schema'
import { Specialty } from '../types/specialty.types'
import { IRepository } from 'src/common/interfaces/repository.interface'
import { PrismaService } from 'src/prisma/prisma.service'

type SpecialtyUpdateInput = {
  name?: string
  description?: string
}

@Injectable()
export class SpecialtysRepository implements IRepository<Specialty> {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Specialty[]> {
    return this.prisma.specialty.findMany()
  }

  async findById(id: string): Promise<Specialty | null> {
    return this.prisma.specialty.findUnique({
      where: { id },
    })
  }

  async findByName(name: string): Promise<Specialty | null> {
    return this.prisma.specialty.findFirst({
      where: { name },
    })
  }

  async create(createSpecialtyDto: CreateSpecialtyDto): Promise<Specialty> {
    return this.prisma.specialty.create({
      data: {
        ...createSpecialtyDto,
      },
    })
  }

  async update(
    id: string,
    updateSpecialtyDto: UpdateSpecialtyDto,
  ): Promise<Specialty> {
    const data: SpecialtyUpdateInput = { ...updateSpecialtyDto }

    return this.prisma.specialty.update({
      where: { id },
      data,
    })
  }

  async delete(id: string): Promise<void> {
    await this.prisma.specialty.delete({
      where: { id },
    })
  }
}
