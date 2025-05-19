import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common'
import { DoctorsRepository } from '../repositories/doctors.repository'
import { Doctor } from '../types/doctor.types'
import { CreateDoctorDto, UpdateDoctorDto } from '../schemas/doctors.schema'

@Injectable()
export class DoctorsService {
  constructor(private readonly doctorsRepository: DoctorsRepository) {}

  async findAll(): Promise<Doctor[]> {
    return this.doctorsRepository.findAll()
  }

  async findById(id: string): Promise<Doctor> {
    const doctor: Doctor | null = await this.doctorsRepository.findById(id)
    if (!doctor) {
      throw new NotFoundException(`Doctor with ID "${id}" not found`)
    }

    return doctor
  }

  async create(createDoctorSchema: CreateDoctorDto): Promise<Doctor> {
    const existingDoctor: Doctor | null =
      await this.doctorsRepository.findByCrm(createDoctorSchema.crm)
    if (existingDoctor) {
      throw new ConflictException(
        `Doctor "${createDoctorSchema.crm}" already exists`,
      )
    }

    return this.doctorsRepository.create(createDoctorSchema)
  }

  async update(id: string, updateDoctorDto: UpdateDoctorDto): Promise<Doctor> {
    const existingDoctor: Doctor | null =
      await this.doctorsRepository.findById(id)
    if (!existingDoctor) {
      throw new NotFoundException(`Doctor with ID "${id}" not found`)
    }

    if (updateDoctorDto.crm && updateDoctorDto.crm !== existingDoctor.crm) {
      const doctorWithCrm: Doctor | null =
        await this.doctorsRepository.findByCrm(updateDoctorDto.crm)
      if (doctorWithCrm) {
        throw new ConflictException(
          `Doctor with CRM "${updateDoctorDto.crm}" already exists`,
        )
      }
    }

    try {
      return await this.doctorsRepository.update(id, updateDoctorDto)
    } catch (error) {
      throw new NotFoundException(`Doctor with ID "${id}" not found`)
    }
  }

  async delete(id: string): Promise<void> {
    await this.findById(id)
    try {
      await this.doctorsRepository.delete(id)
    } catch (error) {
      throw new NotFoundException(`Doctor with ID "${id}" not found`)
    }
  }
}
