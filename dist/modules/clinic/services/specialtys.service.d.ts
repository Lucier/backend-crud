import { ClinicsRepository } from '../repositories/clinics.repository';
import { Clinic } from '../types/clinic.types';
import { CreateClinicDto, UpdateClinicDto } from '../schemas/clinics.schema';
export declare class ClinicsService {
    private readonly clinicsRepository;
    constructor(clinicsRepository: ClinicsRepository);
    findAll(): Promise<Clinic[]>;
    findById(id: string): Promise<Clinic>;
    create(createClinicDto: CreateClinicDto): Promise<Clinic>;
    update(id: string, updateClinicDto: UpdateClinicDto): Promise<Clinic>;
    delete(id: string): Promise<void>;
}
