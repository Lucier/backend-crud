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
import { SpecialtysService } from '../services/specialtys.service'
import {
  createSpecialtySchema,
  idSchema,
  updateSpecialtySchema,
  CreateSpecialtyDto,
  IdParams,
  UpdateSpecialtyDto,
} from '../schemas/especialtys.schema'
import { Specialty } from '../types/specialty.types'
import { ZodValidate } from 'src/common/decorators/zod-validation.decorator'
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe'

@Controller('specialtys')
export class SpecialtysController {
  constructor(private readonly specialtysService: SpecialtysService) {}

  @Get()
  async findAll(): Promise<Specialty[]> {
    return this.specialtysService.findAll()
  }

  @Get(':id')
  @ZodValidate(idSchema)
  async findById(@Param() params: IdParams): Promise<Specialty> {
    return this.specialtysService.findById(params.id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ZodValidate(createSpecialtySchema)
  async create(
    @Body() createSpecialtyDto: CreateSpecialtyDto,
  ): Promise<Specialty> {
    return this.specialtysService.create(createSpecialtyDto)
  }

  @Put(':id')
  async update(
    @Param(new ZodValidationPipe(idSchema)) params: IdParams,
    @Body(new ZodValidationPipe(updateSpecialtySchema))
    updateSpecialtyDto: UpdateSpecialtyDto,
  ): Promise<Specialty> {
    return this.specialtysService.update(params.id, updateSpecialtyDto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ZodValidate(idSchema)
  async delete(@Param() params: IdParams): Promise<void> {
    await this.specialtysService.delete(params.id)
  }
}
