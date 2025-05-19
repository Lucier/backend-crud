import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common'
import { SpecialtysRepository } from '../repositories/specialtys.repository'
import {
  CreateSpecialtyDto,
  UpdateSpecialtyDto,
} from '../schemas/especialtys.schema'
import type { Specialty } from '../types/specialty.types'

@Injectable()
export class SpecialtysService {
  constructor(private readonly specialtysRepository: SpecialtysRepository) {}

  async findAll(): Promise<Specialty[]> {
    return this.specialtysRepository.findAll()
  }

  async findById(id: string): Promise<Specialty> {
    const specialty: Specialty | null =
      await this.specialtysRepository.findById(id)
    if (!specialty) {
      throw new NotFoundException(`Specialty with ID "${id}" not found`)
    }

    return specialty
  }

  async create(createSpecityDto: CreateSpecialtyDto): Promise<Specialty> {
    const existingSpecialty: Specialty | null =
      await this.specialtysRepository.findByName(createSpecityDto.name)
    if (existingSpecialty) {
      throw new ConflictException(
        `Specialty "${createSpecityDto.name}" already exists`,
      )
    }

    return this.specialtysRepository.create(createSpecityDto)
  }

  async update(
    id: string,
    updateSpecialtyDto: UpdateSpecialtyDto,
  ): Promise<Specialty> {
    const existingSpecialty: Specialty | null =
      await this.specialtysRepository.findById(id)
    if (!existingSpecialty) {
      throw new NotFoundException(`Specialty with ID "${id}" not found`)
    }

    if (
      updateSpecialtyDto.name &&
      updateSpecialtyDto.name !== existingSpecialty.name
    ) {
      const specialtyWithName: Specialty | null =
        await this.specialtysRepository.findByName(updateSpecialtyDto.name)
      if (specialtyWithName) {
        throw new ConflictException(
          `Specialty with name "${updateSpecialtyDto.name}" already exists`,
        )
      }
    }

    try {
      return await this.specialtysRepository.update(id, updateSpecialtyDto)
    } catch (error) {
      throw new NotFoundException(`specialty with ID "${id}" not found`)
    }
  }

  async delete(id: string): Promise<void> {
    await this.findById(id)
    try {
      await this.specialtysRepository.delete(id)
    } catch (error) {
      throw new NotFoundException(`Specialty with ID "${id}" not found`)
    }
  }
}
