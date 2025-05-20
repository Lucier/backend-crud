"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idSchema = exports.updatePatientSchema = exports.createPatientSchema = void 0;
const zod_1 = require("zod");
exports.createPatientSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(1, 'Nome é obrigatório')
        .max(100, 'Nome não pode conter mais que 100 caracteres'),
    cpf: zod_1.z
        .string()
        .min(1, 'CPF é obrigatório')
        .max(100, 'CPF não pode conter mais que 100 caracteres'),
    gender: zod_1.z
        .string()
        .min(1, 'Sexo é obrigatório')
        .max(100, 'Sexo não pode conter mais que 100 caracteres'),
    phone: zod_1.z
        .string()
        .min(1, 'Telefone é obrigatório')
        .max(100, 'Telefone não pode conter mais que 250 caracteres'),
    email: zod_1.z
        .string()
        .min(1, 'Email é obrigatório')
        .max(100, 'Email não pode conter mais que 250 caracteres'),
    address: zod_1.z.string(),
});
exports.updatePatientSchema = exports.createPatientSchema.partial();
exports.idSchema = zod_1.z.object({
    id: zod_1.z.string().uuid('Não é um UUID válido'),
});
//# sourceMappingURL=patients.schema.js.map