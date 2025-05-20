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
exports.PatientsService = void 0;
const common_1 = require("@nestjs/common");
const patients_repository_1 = require("../repositories/patients.repository");
let PatientsService = class PatientsService {
    constructor(patientsRepository) {
        this.patientsRepository = patientsRepository;
    }
    async findAll() {
        return this.patientsRepository.findAll();
    }
    async findById(id) {
        const patient = await this.patientsRepository.findById(id);
        if (!patient) {
            throw new common_1.NotFoundException(`Patient with ID "${id}" not found`);
        }
        return patient;
    }
    async create(createPatientSchema) {
        const existingPatient = await this.patientsRepository.findByCpf(createPatientSchema.cpf);
        if (existingPatient) {
            throw new common_1.ConflictException(`Patient "${createPatientSchema.cpf}" already exists`);
        }
        return this.patientsRepository.create(createPatientSchema);
    }
    async update(id, updatePatientDto) {
        const existingPatient = await this.patientsRepository.findById(id);
        if (!existingPatient) {
            throw new common_1.NotFoundException(`Patient with ID "${id}" not found`);
        }
        if (updatePatientDto.cpf && updatePatientDto.cpf !== existingPatient.cpf) {
            const patientWithCpf = await this.patientsRepository.findByCpf(updatePatientDto.cpf);
            if (patientWithCpf) {
                throw new common_1.ConflictException(`Patient with CPF "${updatePatientDto.cpf}" already exists`);
            }
        }
        try {
            return await this.patientsRepository.update(id, updatePatientDto);
        }
        catch (error) {
            throw new common_1.NotFoundException(`Patient with ID "${id}" not found`);
        }
    }
    async delete(id) {
        await this.findById(id);
        try {
            await this.patientsRepository.delete(id);
        }
        catch (error) {
            throw new common_1.NotFoundException(`Patient with ID "${id}" not found`);
        }
    }
};
exports.PatientsService = PatientsService;
exports.PatientsService = PatientsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [patients_repository_1.PatientsRepository])
], PatientsService);
//# sourceMappingURL=patients.service.js.map