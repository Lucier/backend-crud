import { PrismaService } from '../../prisma/prisma.service';
import { IRepository } from '../../common/interfaces/repository.interface';
import { Doctor } from '../types/doctor.types';
import { CreateDoctorDto, UpdateDoctorDto } from '../schemas/doctors.schema';
export declare class DoctorsRepository implements IRepository<Doctor> {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Doctor[]>;
    findById(id: string): Promise<Doctor | null>;
    findByCrm(crm: string): Promise<Doctor | null>;
    create(createDoctorDto: CreateDoctorDto): Promise<Doctor>;
    update(id: string, updateDoctorDto: UpdateDoctorDto): Promise<Doctor>;
    delete(id: string): Promise<void>;
}
