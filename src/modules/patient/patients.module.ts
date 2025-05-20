import { Module } from '@nestjs/common'
import { PatientsController } from './controllers/doctors.controller'
import { PatientsService } from './services/patients.service'
import { PatientsRepository } from './repositories/patients.repository'

@Module({
  controllers: [PatientsController],
  providers: [PatientsService, PatientsRepository],
  exports: [PatientsService],
})
export class PatientsModule {}
