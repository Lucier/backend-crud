import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { PrismaModule } from './prisma/prisma.module'
import appConfig from './config/app.config'

import { DoctorsModule } from './modules/doctor/doctors.module'
import { SpecialtysModule } from './modules/specialty/specialtys.module'
import { UsersModule } from './modules/users/users.module'
import { ClinicsModule } from './modules/clinic/clinics.module'
import { PatientsModule } from './modules/patient/patients.module'

type AppConfig = {
  port: number
  environment: string
  database: {
    url: string
  }
}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
    }),
    PrismaModule,
    UsersModule,
    SpecialtysModule,
    DoctorsModule,
    ClinicsModule,
    PatientsModule,
  ],
})
export class AppModule {}
