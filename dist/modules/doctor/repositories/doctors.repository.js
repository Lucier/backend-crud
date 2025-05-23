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
exports.DoctorsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let DoctorsRepository = class DoctorsRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.doctor.findMany();
    }
    async findById(id) {
        return this.prisma.doctor.findUnique({
            where: { id },
        });
    }
    async findByCrm(crm) {
        return this.prisma.doctor.findUnique({
            where: { crm },
        });
    }
    async create(createDoctorDto) {
        return this.prisma.doctor.create({
            data: {
                ...createDoctorDto,
            },
        });
    }
    async update(id, updateDoctorDto) {
        const data = { ...updateDoctorDto };
        return this.prisma.doctor.update({
            where: { id },
            data,
        });
    }
    async delete(id) {
        await this.prisma.doctor.delete({
            where: { id },
        });
    }
};
exports.DoctorsRepository = DoctorsRepository;
exports.DoctorsRepository = DoctorsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DoctorsRepository);
//# sourceMappingURL=doctors.repository.js.map