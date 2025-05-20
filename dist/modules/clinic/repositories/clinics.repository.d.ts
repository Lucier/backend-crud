import { PrismaService } from '../../../prisma/prisma.service';
import { IRepository } from '../../../common/interfaces/repository.interface';
import { Clinic } from '../types/clinic.types';
import { CreateClinicDto, UpdateClinicDto } from '../schemas/clinics.schema';
export declare class ClinicsRepository implements IRepository<Clinic> {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Clinic[]>;
    findById(id: string): Promise<Clinic | null>;
    findByName(name: string): Promise<Clinic | null>;
    create(CreateClinicDto: CreateClinicDto): Promise<Clinic>;
    update(id: string, updateClinicDto: UpdateClinicDto): Promise<Clinic>;
    delete(id: string): Promise<void>;
}
