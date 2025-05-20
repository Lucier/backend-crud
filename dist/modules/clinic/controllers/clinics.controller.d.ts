import { ClinicsService } from '../services/specialtys.service';
import { Clinic } from '../types/clinic.types';
import { IdParams, CreateClinicDto, UpdateClinicDto } from '../schemas/clinics.schema';
export declare class ClinicsController {
    private readonly clinicsService;
    constructor(clinicsService: ClinicsService);
    findAll(): Promise<Clinic[]>;
    findById(params: IdParams): Promise<Clinic>;
    create(createSpecialtyDto: CreateClinicDto): Promise<Clinic>;
    update(params: IdParams, updateClinicDto: UpdateClinicDto): Promise<Clinic>;
    delete(params: IdParams): Promise<void>;
}
