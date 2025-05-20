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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicsService = void 0;
const common_1 = require("@nestjs/common");
const clinics_repository_1 = require("../repositories/clinics.repository");
let ClinicsService = class ClinicsService {
    constructor(clinicsRepository) {
        this.clinicsRepository = clinicsRepository;
    }
    async findAll() {
        return this.clinicsRepository.findAll();
    }
    async findById(id) {
        const clinic = await this.clinicsRepository.findById(id);
        if (!clinic) {
            throw new common_1.NotFoundException(`Specialty with ID "${id}" not found`);
        }
        return clinic;
    }
    async create(createClinicDto) {
        const existingClinic = await this.clinicsRepository.findByName(createClinicDto.name);
        if (existingClinic) {
            throw new common_1.ConflictException(`Clinic "${createClinicDto.name}" already exists`);
        }
        return this.clinicsRepository.create(createClinicDto);
    }
    async update(id, updateClinicDto) {
        const existingClinic = await this.clinicsRepository.findById(id);
        if (!existingClinic) {
            throw new common_1.NotFoundException(`Clinic with ID "${id}" not found`);
        }
        if (updateClinicDto.name && updateClinicDto.name !== existingClinic.name) {
            const clinicWithName = await this.clinicsRepository.findByName(updateClinicDto.name);
            if (clinicWithName) {
                throw new common_1.ConflictException(`Clinic with name "${updateClinicDto.name}" already exists`);
            }
        }
        try {
            return await this.clinicsRepository.update(id, updateClinicDto);
        }
        catch (error) {
            throw new common_1.NotFoundException(`Clinic with ID "${id}" not found`);
        }
    }
    async delete(id) {
        await this.findById(id);
        try {
            await this.clinicsRepository.delete(id);
        }
        catch (error) {
            throw new common_1.NotFoundException(`Clinic with ID "${id}" not found`);
        }
    }
};
exports.ClinicsService = ClinicsService;
exports.ClinicsService = ClinicsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [clinics_repository_1.ClinicsRepository])
], ClinicsService);
//# sourceMappingURL=specialtys.service.js.map