import { SpecialtysService } from '../services/specialtys.service';
import { CreateSpecialtyDto, IdParams, UpdateSpecialtyDto } from '../schemas/especialtys.schema';
import { Specialty } from '../types/specialty.types';
export declare class SpecialtysController {
    private readonly specialtysService;
    constructor(specialtysService: SpecialtysService);
    findAll(): Promise<Specialty[]>;
    findById(params: IdParams): Promise<Specialty>;
    create(createSpecialtyDto: CreateSpecialtyDto): Promise<Specialty>;
    update(params: IdParams, updateSpecialtyDto: UpdateSpecialtyDto): Promise<Specialty>;
    delete(params: IdParams): Promise<void>;
}
