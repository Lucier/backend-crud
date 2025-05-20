import { PatientsService } from '../services/patients.service';
import { Patient } from '../types/patient.types';
import { CreatePatientDto, IdParams, UpdatePatientDto } from '../schemas/patients.schema';
export declare class PatientsController {
    private readonly patientsService;
    constructor(patientsService: PatientsService);
    findAll(): Promise<Patient[]>;
    findById(params: IdParams): Promise<Patient>;
    create(createPatientDto: CreatePatientDto): Promise<Patient>;
    update(params: IdParams, updatePatientDto: UpdatePatientDto): Promise<Patient>;
    delete(params: IdParams): Promise<void>;
}
