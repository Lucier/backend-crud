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
exports.SpecialtysController = void 0;
const common_1 = require("@nestjs/common");
const specialtys_service_1 = require("../services/specialtys.service");
const especialtys_schema_1 = require("../schemas/especialtys.schema");
const zod_validation_decorator_1 = require("../../../common/decorators/zod-validation.decorator");
const zod_validation_pipe_1 = require("../../../common/pipes/zod-validation.pipe");
let SpecialtysController = class SpecialtysController {
    constructor(specialtysService) {
        this.specialtysService = specialtysService;
    }
    async findAll() {
        return this.specialtysService.findAll();
    }
    async findById(params) {
        return this.specialtysService.findById(params.id);
    }
    async create(createSpecialtyDto) {
        return this.specialtysService.create(createSpecialtyDto);
    }
    async update(params, updateSpecialtyDto) {
        return this.specialtysService.update(params.id, updateSpecialtyDto);
    }
    async delete(params) {
        await this.specialtysService.delete(params.id);
    }
};
exports.SpecialtysController = SpecialtysController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpecialtysController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, zod_validation_decorator_1.ZodValidate)(especialtys_schema_1.idSchema),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SpecialtysController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, zod_validation_decorator_1.ZodValidate)(especialtys_schema_1.createSpecialtySchema),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SpecialtysController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)(new zod_validation_pipe_1.ZodValidationPipe(especialtys_schema_1.idSchema))),
    __param(1, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(especialtys_schema_1.updateSpecialtySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SpecialtysController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, zod_validation_decorator_1.ZodValidate)(especialtys_schema_1.idSchema),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SpecialtysController.prototype, "delete", null);
exports.SpecialtysController = SpecialtysController = __decorate([
    (0, common_1.Controller)('specialtys'),
    __metadata("design:paramtypes", [specialtys_service_1.SpecialtysService])
], SpecialtysController);
//# sourceMappingURL=specialtys.controller.js.map