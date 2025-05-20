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
import { DoctorsService } from '../services/doctors.service'
import { Doctor } from '../types/doctor.types'
import {
  createDoctorSchema,
  idSchema,
  updateDoctorSchema,
  CreateDoctorDto,
  IdParams,
  UpdateDoctorDto,
} from '../schemas/doctors.schema'
import { ZodValidate } from 'src/common/decorators/zod-validation.decorator'
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe'

@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Get()
  async findAll(): Promise<Doctor[]> {
    return this.doctorsService.findAll()
  }

  @Get(':id')
  @ZodValidate(idSchema)
  async findById(@Param() params: IdParams): Promise<Doctor> {
    return this.doctorsService.findById(params.id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ZodValidate(createDoctorSchema)
  async create(@Body() createDoctorDto: CreateDoctorDto): Promise<Doctor> {
    return this.doctorsService.create(createDoctorDto)
  }

  @Put(':id')
  async update(
    @Param(new ZodValidationPipe(idSchema)) params: IdParams,
    @Body(new ZodValidationPipe(updateDoctorSchema))
    updateDoctorDto: UpdateDoctorDto,
  ): Promise<Doctor> {
    return this.doctorsService.update(params.id, updateDoctorDto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ZodValidate(idSchema)
  async delete(@Param() params: IdParams): Promise<void> {
    await this.doctorsService.delete(params.id)
  }
}
