"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idSchema = exports.updateDoctorSchema = exports.createDoctorSchema = void 0;
const zod_1 = require("zod");
exports.createDoctorSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(1, 'Nome é obrigatório')
        .max(100, 'Nome não pode conter mais que 100 caracteres'),
    crm: zod_1.z
        .string()
        .min(1, 'CRM é obrigatório')
        .max(100, 'CRM não pode conter mais que 100 caracteres'),
    email: zod_1.z
        .string()
        .min(1, 'Email é obrigatório')
        .max(100, 'Email não pode conter mais que 250 caracteres'),
    phone: zod_1.z
        .string()
        .min(1, 'Telefone é obrigatório')
        .max(100, 'Telefone não pode conter mais que 250 caracteres'),
});
exports.updateDoctorSchema = exports.createDoctorSchema.partial();
exports.idSchema = zod_1.z.object({
    id: zod_1.z.string().uuid('Não é um UUID válido'),
});
//# sourceMappingURL=doctors.schema.js.map