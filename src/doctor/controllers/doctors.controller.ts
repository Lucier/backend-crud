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
import { ZodValidate } from '../../common/decorators/zod-validation.decorator'
import { ZodValidationPipe } from '../../common/pipes/zod-validation.pipe'
import { DoctorsService } from '../services/doctors.service'
import { Doctor } from '../types/doctor.types'
import {
  createDoctorSchema,
  idSchema,
  updateDoctorSchema,
  type CreateDoctorDto,
  type IdParams,
  type UpdateDoctorDto,
} from '../schemas/doctors.schema'

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
