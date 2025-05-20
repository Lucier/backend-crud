import { IRepository } from 'src/common/interfaces/repository.interface';
import { PrismaService } from 'src/prisma/prisma.service';
import { Patient } from '../types/patient.types';
import { CreatePatientDto, UpdatePatientDto } from '../schemas/patients.schema';
export declare class PatientsRepository implements IRepository<Patient> {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Patient[]>;
    findById(id: string): Promise<Patient | null>;
    findByCpf(cpf: string): Promise<Patient | null>;
    create(createPatientDto: CreatePatientDto): Promise<Patient>;
    update(id: string, updatePatientDto: UpdatePatientDto): Promise<Patient>;
    delete(id: string): Promise<void>;
}
