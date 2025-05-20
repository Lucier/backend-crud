import { DoctorsService } from '../services/doctors.service';
import { Doctor } from '../types/doctor.types';
import { CreateDoctorDto, IdParams, UpdateDoctorDto } from '../schemas/doctors.schema';
export declare class DoctorsController {
    private readonly doctorsService;
    constructor(doctorsService: DoctorsService);
    findAll(): Promise<Doctor[]>;
    findById(params: IdParams): Promise<Doctor>;
    create(createDoctorDto: CreateDoctorDto): Promise<Doctor>;
    update(params: IdParams, updateDoctorDto: UpdateDoctorDto): Promise<Doctor>;
    delete(params: IdParams): Promise<void>;
}
