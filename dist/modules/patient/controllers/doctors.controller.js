"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientsController = void 0;
const common_1 = require("@nestjs/common");
const patients_service_1 = require("../services/patients.service");
const zod_validation_decorator_1 = require("../../../common/decorators/zod-validation.decorator");
const patients_schema_1 = require("../schemas/patients.schema");
const zod_validation_pipe_1 = require("../../../common/pipes/zod-validation.pipe");
let PatientsController = class PatientsController {
    constructor(patientsService) {
        this.patientsService = patientsService;
    }
    async findAll() {
        return this.patientsService.findAll();
    }
    async findById(params) {
        return this.patientsService.findById(params.id);
    }
    async create(createPatientDto) {
        return this.patientsService.create(createPatientDto);
    }
    async update(params, updatePatientDto) {
        return this.patientsService.update(params.id, updatePatientDto);
    }
    async delete(params) {
        await this.patientsService.delete(params.id);
    }
};
exports.PatientsController = PatientsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, zod_validation_decorator_1.ZodValidate)(patients_schema_1.idSchema),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, zod_validation_decorator_1.ZodValidate)(patients_schema_1.createPatientSchema),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)(new zod_validation_pipe_1.ZodValidationPipe(patients_schema_1.idSchema))),
    __param(1, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(patients_schema_1.updatePatientSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, zod_validation_decorator_1.ZodValidate)(patients_schema_1.idSchema),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "delete", null);
exports.PatientsController = PatientsController = __decorate([
    (0, common_1.Controller)('patients'),
    __metadata("design:paramtypes", [patients_service_1.PatientsService])
], PatientsController);
//# sourceMappingURL=doctors.controller.js.map