import { PrismaService } from '../../prisma/prisma.service';
import { IRepository } from '../../common/interfaces/repository.interface';
import { CreateSpecialtyDto, UpdateSpecialtyDto } from '../schemas/especialtys.schema';
import { Specialty } from '../types/specialty.types';
export declare class SpecialtysRepository implements IRepository<Specialty> {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Specialty[]>;
    findById(id: string): Promise<Specialty | null>;
    findByName(name: string): Promise<Specialty | null>;
    create(createSpecialtyDto: CreateSpecialtyDto): Promise<Specialty>;
    update(id: string, updateSpecialtyDto: UpdateSpecialtyDto): Promise<Specialty>;
    delete(id: string): Promise<void>;
}
