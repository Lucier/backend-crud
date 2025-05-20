import { DoctorsRepository } from '../repositories/doctors.repository';
import { Doctor } from '../types/doctor.types';
import { CreateDoctorDto, UpdateDoctorDto } from '../schemas/doctors.schema';
export declare class DoctorsService {
    private readonly doctorsRepository;
    constructor(doctorsRepository: DoctorsRepository);
    findAll(): Promise<Doctor[]>;
    findById(id: string): Promise<Doctor>;
    create(createDoctorSchema: CreateDoctorDto): Promise<Doctor>;
    update(id: string, updateDoctorDto: UpdateDoctorDto): Promise<Doctor>;
    delete(id: string): Promise<void>;
}
