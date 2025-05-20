import { Module } from '@nestjs/common'
import { ClinicsController } from './controllers/clinics.controller'
import { ClinicsService } from './services/specialtys.service'
import { ClinicsRepository } from './repositories/clinics.repository'

@Module({
  controllers: [ClinicsController],
  providers: [ClinicsService, ClinicsRepository],
  exports: [ClinicsService],
})
export class ClinicsModule {}
