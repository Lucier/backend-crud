import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { HttpExceptionFilter } from './common/filters/http-exception.filter'
import { LoggingInterceptor } from './common/interceptors/logging.interceptor'
import { ConfigService } from '@nestjs/config'
import { Logger } from '@nestjs/common'

async function bootstrap(): Promise<void> {
  const logger = new Logger('Bootstrap')

  try {
    logger.log('Inicialização da aplicação NestJS...')
    const app = await NestFactory.create(AppModule)
    const configService = app.get(ConfigService)
    const port: number = configService.get<number>('app.port', 3000)
    const env: string = configService.get<string>(
      'app.environment',
      'development',
    )
    const dbUrl: string = configService.get<string>(
      'app.database.url',
      'file:./dev.db',
    )

    logger.log('Configurações dos filtros e interceptadores globais...')
    app.useGlobalFilters(new HttpExceptionFilter())
    app.useGlobalInterceptors(new LoggingInterceptor())

    logger.log('Configuração do prefixo global da API...')
    app.setGlobalPrefix('api/v1')

    app.enableCors()

    await app.listen(port)

    console.log('\n----------------------------------------')
    console.log('🚀 API NestJS !')
    console.log('----------------------------------------')
    console.log(`📡 Environnement: ${env}`)
    console.log(`🔌 Port: ${port}`)
    console.log(`🗄️  Data Base: SQLite (${dbUrl})`)
    console.log(`🌐 URL de l'API: http://localhost:${port}/api/v1`)
    console.log('----------------------------------------')
    console.log('Endpoints disponibles:')
    console.log('GET    /api/v1/users')
    console.log('GET    /api/v1/users/:id')
    console.log('POST   /api/v1/users')
    console.log('PUT    /api/v1/users/:id')
    console.log('DELETE /api/v1/users/:id')
    console.log('------------------------------')
    console.log('GET    /api/v1/specialtys')
    console.log('GET    /api/v1/specialtys/:id')
    console.log('POST   /api/v1/specialtys')
    console.log('PUT    /api/v1/specialtys/:id')
    console.log('DELETE /api/v1/specialtys/:id')
    console.log('------------------------------')
    console.log('GET    /api/v1/doctors')
    console.log('GET    /api/v1/doctors/:id')
    console.log('POST   /api/v1/doctors')
    console.log('PUT    /api/v1/doctors/:id')
    console.log('DELETE /api/v1/doctors/:id')
    console.log('------------------------------')
    console.log('GET    /api/v1/clinics')
    console.log('GET    /api/v1/clinics/:id')
    console.log('POST   /api/v1/clinics')
    console.log('PUT    /api/v1/clinics/:id')
    console.log('DELETE /api/v1/clinics/:id')
    console.log('------------------------------')
    console.log('GET    /api/v1/patients')
    console.log('GET    /api/v1/patients/:id')
    console.log('POST   /api/v1/patients')
    console.log('PUT    /api/v1/patients/:id')
    console.log('DELETE /api/v1/patients/:id')
    console.log('----------------------------------------\n')

    logger.log(`Application started port ${port}`)
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'Une erreur inconnue est survenue'
    logger.error(`Erreur lors du démarrage de l'application: ${errorMessage}`)
    console.error(error)
    process.exit(1)
  }
}

bootstrap()
