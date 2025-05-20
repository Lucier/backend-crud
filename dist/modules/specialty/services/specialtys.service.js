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
exports.SpecialtysService = void 0;
const common_1 = require("@nestjs/common");
const specialtys_repository_1 = require("../repositories/specialtys.repository");
let SpecialtysService = class SpecialtysService {
    constructor(specialtysRepository) {
        this.specialtysRepository = specialtysRepository;
    }
    async findAll() {
        return this.specialtysRepository.findAll();
    }
    async findById(id) {
        const specialty = await this.specialtysRepository.findById(id);
        if (!specialty) {
            throw new common_1.NotFoundException(`Specialty with ID "${id}" not found`);
        }
        return specialty;
    }
    async create(createSpecityDto) {
        const existingSpecialty = await this.specialtysRepository.findByName(createSpecityDto.name);
        if (existingSpecialty) {
            throw new common_1.ConflictException(`Specialty "${createSpecityDto.name}" already exists`);
        }
        return this.specialtysRepository.create(createSpecityDto);
    }
    async update(id, updateSpecialtyDto) {
        const existingSpecialty = await this.specialtysRepository.findById(id);
        if (!existingSpecialty) {
            throw new common_1.NotFoundException(`Specialty with ID "${id}" not found`);
        }
        if (updateSpecialtyDto.name &&
            updateSpecialtyDto.name !== existingSpecialty.name) {
            const specialtyWithName = await this.specialtysRepository.findByName(updateSpecialtyDto.name);
            if (specialtyWithName) {
                throw new common_1.ConflictException(`Specialty with name "${updateSpecialtyDto.name}" already exists`);
            }
        }
        try {
            return await this.specialtysRepository.update(id, updateSpecialtyDto);
        }
        catch (error) {
            throw new common_1.NotFoundException(`specialty with ID "${id}" not found`);
        }
    }
    async delete(id) {
        await this.findById(id);
        try {
            await this.specialtysRepository.delete(id);
        }
        catch (error) {
            throw new common_1.NotFoundException(`Specialty with ID "${id}" not found`);
        }
    }
};
exports.SpecialtysService = SpecialtysService;
exports.SpecialtysService = SpecialtysService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [specialtys_repository_1.SpecialtysRepository])
], SpecialtysService);
//# sourceMappingURL=specialtys.service.js.map