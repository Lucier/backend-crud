import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common'
import { PatientsRepository } from '../repositories/patients.repository'
import { Patient } from '../types/patient.types'
import { CreatePatientDto, UpdatePatientDto } from '../schemas/patients.schema'

@Injectable()
export class PatientsService {
  constructor(private readonly patientsRepository: PatientsRepository) {}

  async findAll(): Promise<Patient[]> {
    return this.patientsRepository.findAll()
  }

  async findById(id: string): Promise<Patient> {
    const patient: Patient | null = await this.patientsRepository.findById(id)
    if (!patient) {
      throw new NotFoundException(`Patient with ID "${id}" not found`)
    }

    return patient
  }

  async create(createPatientSchema: CreatePatientDto): Promise<Patient> {
    const existingPatient: Patient | null =
      await this.patientsRepository.findByCpf(createPatientSchema.cpf)
    if (existingPatient) {
      throw new ConflictException(
        `Patient "${createPatientSchema.cpf}" already exists`,
      )
    }

    return this.patientsRepository.create(createPatientSchema)
  }

  async update(
    id: string,
    updatePatientDto: UpdatePatientDto,
  ): Promise<Patient> {
    const existingPatient: Patient | null =
      await this.patientsRepository.findById(id)
    if (!existingPatient) {
      throw new NotFoundException(`Patient with ID "${id}" not found`)
    }

    if (updatePatientDto.cpf && updatePatientDto.cpf !== existingPatient.cpf) {
      const patientWithCpf: Patient | null =
        await this.patientsRepository.findByCpf(updatePatientDto.cpf)
      if (patientWithCpf) {
        throw new ConflictException(
          `Patient with CPF "${updatePatientDto.cpf}" already exists`,
        )
      }
    }

    try {
      return await this.patientsRepository.update(id, updatePatientDto)
    } catch (error) {
      throw new NotFoundException(`Patient with ID "${id}" not found`)
    }
  }

  async delete(id: string): Promise<void> {
    await this.findById(id)
    try {
      await this.patientsRepository.delete(id)
    } catch (error) {
      throw new NotFoundException(`Patient with ID "${id}" not found`)
    }
  }
}
