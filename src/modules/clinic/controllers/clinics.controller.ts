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
import { ZodValidate } from '../../../common/decorators/zod-validation.decorator'
import { ZodValidationPipe } from '../../../common/pipes/zod-validation.pipe'
import { ClinicsService } from '../services/specialtys.service'
import { Clinic } from '../types/clinic.types'
import {
  createClinicSchema,
  idSchema,
  IdParams,
  CreateClinicDto,
  updateClinicSchema,
  UpdateClinicDto,
} from '../schemas/clinics.schema'

@Controller('clinics')
export class ClinicsController {
  constructor(private readonly clinicsService: ClinicsService) {}

  @Get()
  async findAll(): Promise<Clinic[]> {
    return this.clinicsService.findAll()
  }

  @Get(':id')
  @ZodValidate(idSchema)
  async findById(@Param() params: IdParams): Promise<Clinic> {
    return this.clinicsService.findById(params.id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ZodValidate(createClinicSchema)
  async create(@Body() createSpecialtyDto: CreateClinicDto): Promise<Clinic> {
    return this.clinicsService.create(createSpecialtyDto)
  }

  @Put(':id')
  async update(
    @Param(new ZodValidationPipe(idSchema)) params: IdParams,
    @Body(new ZodValidationPipe(updateClinicSchema))
    updateClinicDto: UpdateClinicDto,
  ): Promise<Clinic> {
    return this.clinicsService.update(params.id, updateClinicDto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ZodValidate(idSchema)
  async delete(@Param() params: IdParams): Promise<void> {
    await this.clinicsService.delete(params.id)
  }
}
