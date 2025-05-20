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
exports.DoctorsService = void 0;
const common_1 = require("@nestjs/common");
const doctors_repository_1 = require("../repositories/doctors.repository");
let DoctorsService = class DoctorsService {
    constructor(doctorsRepository) {
        this.doctorsRepository = doctorsRepository;
    }
    async findAll() {
        return this.doctorsRepository.findAll();
    }
    async findById(id) {
        const doctor = await this.doctorsRepository.findById(id);
        if (!doctor) {
            throw new common_1.NotFoundException(`Doctor with ID "${id}" not found`);
        }
        return doctor;
    }
    async create(createDoctorSchema) {
        const existingDoctor = await this.doctorsRepository.findByCrm(createDoctorSchema.crm);
        if (existingDoctor) {
            throw new common_1.ConflictException(`Doctor "${createDoctorSchema.crm}" already exists`);
        }
        return this.doctorsRepository.create(createDoctorSchema);
    }
    async update(id, updateDoctorDto) {
        const existingDoctor = await this.doctorsRepository.findById(id);
        if (!existingDoctor) {
            throw new common_1.NotFoundException(`Doctor with ID "${id}" not found`);
        }
        if (updateDoctorDto.crm && updateDoctorDto.crm !== existingDoctor.crm) {
            const doctorWithCrm = await this.doctorsRepository.findByCrm(updateDoctorDto.crm);
            if (doctorWithCrm) {
                throw new common_1.ConflictException(`Doctor with CRM "${updateDoctorDto.crm}" already exists`);
            }
        }
        try {
            return await this.doctorsRepository.update(id, updateDoctorDto);
        }
        catch (error) {
            throw new common_1.NotFoundException(`Doctor with ID "${id}" not found`);
        }
    }
    async delete(id) {
        await this.findById(id);
        try {
            await this.doctorsRepository.delete(id);
        }
        catch (error) {
            throw new common_1.NotFoundException(`Doctor with ID "${id}" not found`);
        }
    }
};
exports.DoctorsService = DoctorsService;
exports.DoctorsService = DoctorsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [doctors_repository_1.DoctorsRepository])
], DoctorsService);
//# sourceMappingURL=doctors.service.js.map