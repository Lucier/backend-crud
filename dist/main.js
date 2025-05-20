"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const http_exception_filter_1 = require("./common/filters/http-exception.filter");
const logging_interceptor_1 = require("./common/interceptors/logging.interceptor");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const logger = new common_1.Logger('Bootstrap');
    try {
        logger.log('Inicialização da aplicação NestJS...');
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        const configService = app.get(config_1.ConfigService);
        const port = configService.get('app.port', 3000);
        const env = configService.get('app.environment', 'development');
        const dbUrl = configService.get('app.database.url', 'file:./dev.db');
        logger.log('Configurações dos filtros e interceptadores globais...');
        app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
        app.useGlobalInterceptors(new logging_interceptor_1.LoggingInterceptor());
        logger.log('Configuração do prefixo global da API...');
        app.setGlobalPrefix('api/v1');
        app.enableCors();
        await app.listen(port);
        console.log('\n----------------------------------------');
        console.log('🚀 API NestJS !');
        console.log('----------------------------------------');
        console.log(`📡 Environnement: ${env}`);
        console.log(`🔌 Port: ${port}`);
        console.log(`🗄️  Data Base: SQLite (${dbUrl})`);
        console.log(`🌐 URL de l'API: http://localhost:${port}/api/v1`);
        console.log('----------------------------------------');
        console.log('Endpoints disponibles:');
        console.log('GET    /api/v1/users');
        console.log('GET    /api/v1/users/:id');
        console.log('POST   /api/v1/users');
        console.log('PUT    /api/v1/users/:id');
        console.log('DELETE /api/v1/users/:id');
        console.log('------------------------------');
        console.log('GET    /api/v1/specialtys');
        console.log('GET    /api/v1/specialtys/:id');
        console.log('POST   /api/v1/specialtys');
        console.log('PUT    /api/v1/specialtys/:id');
        console.log('DELETE /api/v1/specialtys/:id');
        console.log('------------------------------');
        console.log('GET    /api/v1/doctors');
        console.log('GET    /api/v1/doctors/:id');
        console.log('POST   /api/v1/doctors');
        console.log('PUT    /api/v1/doctors/:id');
        console.log('DELETE /api/v1/doctors/:id');
        console.log('------------------------------');
        console.log('GET    /api/v1/clinics');
        console.log('GET    /api/v1/clinics/:id');
        console.log('POST   /api/v1/clinics');
        console.log('PUT    /api/v1/clinics/:id');
        console.log('DELETE /api/v1/clinics/:id');
        console.log('----------------------------------------\n');
        logger.log(`Application started port ${port}`);
    }
    catch (error) {
        const errorMessage = error instanceof Error
            ? error.message
            : 'Une erreur inconnue est survenue';
        logger.error(`Erreur lors du démarrage de l'application: ${errorMessage}`);
        console.error(error);
        process.exit(1);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map