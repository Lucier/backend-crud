import { Module } from '@nestjs/common'
import { SpecialtysController } from './controllers/specialtys.controller'
import { SpecialtysService } from './services/specialtys.service'
import { SpecialtysRepository } from './repositories/specialtys.repository'

@Module({
  controllers: [SpecialtysController],
  providers: [SpecialtysService, SpecialtysRepository],
  exports: [SpecialtysService],
})
export class SpecialtysModule {}
