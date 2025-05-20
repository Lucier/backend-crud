import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common'
import { ClinicsRepository } from '../repositories/clinics.repository'
import { Clinic } from '../types/clinic.types'
import { CreateClinicDto, UpdateClinicDto } from '../schemas/clinics.schema'

@Injectable()
export class ClinicsService {
  constructor(private readonly clinicsRepository: ClinicsRepository) {}

  async findAll(): Promise<Clinic[]> {
    return this.clinicsRepository.findAll()
  }

  async findById(id: string): Promise<Clinic> {
    const clinic: Clinic | null = await this.clinicsRepository.findById(id)
    if (!clinic) {
      throw new NotFoundException(`Specialty with ID "${id}" not found`)
    }

    return clinic
  }

  async create(createClinicDto: CreateClinicDto): Promise<Clinic> {
    const existingClinic: Clinic | null =
      await this.clinicsRepository.findByName(createClinicDto.name)
    if (existingClinic) {
      throw new ConflictException(
        `Clinic "${createClinicDto.name}" already exists`,
      )
    }

    return this.clinicsRepository.create(createClinicDto)
  }

  async update(id: string, updateClinicDto: UpdateClinicDto): Promise<Clinic> {
    const existingClinic: Clinic | null =
      await this.clinicsRepository.findById(id)
    if (!existingClinic) {
      throw new NotFoundException(`Clinic with ID "${id}" not found`)
    }

    if (updateClinicDto.name && updateClinicDto.name !== existingClinic.name) {
      const clinicWithName: Clinic | null =
        await this.clinicsRepository.findByName(updateClinicDto.name)
      if (clinicWithName) {
        throw new ConflictException(
          `Clinic with name "${updateClinicDto.name}" already exists`,
        )
      }
    }

    try {
      return await this.clinicsRepository.update(id, updateClinicDto)
    } catch (error) {
      throw new NotFoundException(`Clinic with ID "${id}" not found`)
    }
  }

  async delete(id: string): Promise<void> {
    await this.findById(id)
    try {
      await this.clinicsRepository.delete(id)
    } catch (error) {
      throw new NotFoundException(`Clinic with ID "${id}" not found`)
    }
  }
}
