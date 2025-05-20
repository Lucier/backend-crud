import { PatientsRepository } from '../repositories/patients.repository';
import { Patient } from '../types/patient.types';
import { CreatePatientDto, UpdatePatientDto } from '../schemas/patients.schema';
export declare class PatientsService {
    private readonly patientsRepository;
    constructor(patientsRepository: PatientsRepository);
    findAll(): Promise<Patient[]>;
    findById(id: string): Promise<Patient>;
    create(createPatientSchema: CreatePatientDto): Promise<Patient>;
    update(id: string, updatePatientDto: UpdatePatientDto): Promise<Patient>;
    delete(id: string): Promise<void>;
}
