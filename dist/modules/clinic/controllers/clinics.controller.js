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
exports.ClinicsController = void 0;
const common_1 = require("@nestjs/common");
const zod_validation_decorator_1 = require("../../../common/decorators/zod-validation.decorator");
const zod_validation_pipe_1 = require("../../../common/pipes/zod-validation.pipe");
const specialtys_service_1 = require("../services/specialtys.service");
const clinics_schema_1 = require("../schemas/clinics.schema");
let ClinicsController = class ClinicsController {
    constructor(clinicsService) {
        this.clinicsService = clinicsService;
    }
    async findAll() {
        return this.clinicsService.findAll();
    }
    async findById(params) {
        return this.clinicsService.findById(params.id);
    }
    async create(createSpecialtyDto) {
        return this.clinicsService.create(createSpecialtyDto);
    }
    async update(params, updateClinicDto) {
        return this.clinicsService.update(params.id, updateClinicDto);
    }
    async delete(params) {
        await this.clinicsService.delete(params.id);
    }
};
exports.ClinicsController = ClinicsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClinicsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, zod_validation_decorator_1.ZodValidate)(clinics_schema_1.idSchema),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClinicsController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, zod_validation_decorator_1.ZodValidate)(clinics_schema_1.createClinicSchema),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClinicsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)(new zod_validation_pipe_1.ZodValidationPipe(clinics_schema_1.idSchema))),
    __param(1, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(clinics_schema_1.updateClinicSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ClinicsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, zod_validation_decorator_1.ZodValidate)(clinics_schema_1.idSchema),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClinicsController.prototype, "delete", null);
exports.ClinicsController = ClinicsController = __decorate([
    (0, common_1.Controller)('clinics'),
    __metadata("design:paramtypes", [specialtys_service_1.ClinicsService])
], ClinicsController);
//# sourceMappingURL=clinics.controller.js.map