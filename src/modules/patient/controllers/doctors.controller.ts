import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpStatus,
  HttpCode,
} from '@nestjs/common'
import { PatientsService } from '../services/patients.service'
import { Patient } from '../types/patient.types'
import { ZodValidate } from 'src/common/decorators/zod-validation.decorator'
import {
  createPatientSchema,
  idSchema,
  updatePatientSchema,
  CreatePatientDto,
  IdParams,
  UpdatePatientDto,
} from '../schemas/patients.schema'
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe'

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get()
  async findAll(): Promise<Patient[]> {
    return this.patientsService.findAll()
  }

  @Get(':id')
  @ZodValidate(idSchema)
  async findById(@Param() params: IdParams): Promise<Patient> {
    return this.patientsService.findById(params.id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ZodValidate(createPatientSchema)
  async create(@Body() createPatientDto: CreatePatientDto): Promise<Patient> {
    return this.patientsService.create(createPatientDto)
  }

  @Put(':id')
  async update(
    @Param(new ZodValidationPipe(idSchema)) params: IdParams,
    @Body(new ZodValidationPipe(updatePatientSchema))
    updatePatientDto: UpdatePatientDto,
  ): Promise<Patient> {
    return this.patientsService.update(params.id, updatePatientDto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ZodValidate(idSchema)
  async delete(@Param() params: IdParams): Promise<void> {
    await this.patientsService.delete(params.id)
  }
}
