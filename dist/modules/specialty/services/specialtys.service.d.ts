import { SpecialtysRepository } from '../repositories/specialtys.repository';
import { CreateSpecialtyDto, UpdateSpecialtyDto } from '../schemas/especialtys.schema';
import type { Specialty } from '../types/specialty.types';
export declare class SpecialtysService {
    private readonly specialtysRepository;
    constructor(specialtysRepository: SpecialtysRepository);
    findAll(): Promise<Specialty[]>;
    findById(id: string): Promise<Specialty>;
    create(createSpecityDto: CreateSpecialtyDto): Promise<Specialty>;
    update(id: string, updateSpecialtyDto: UpdateSpecialtyDto): Promise<Specialty>;
    delete(id: string): Promise<void>;
}
