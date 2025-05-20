"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idSchema = exports.updateClinicSchema = exports.createClinicSchema = void 0;
const zod_1 = require("zod");
exports.createClinicSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(1, 'Nome é obrigatório')
        .max(100, 'Nome não pode conter mais que 100 caracteres'),
    address: zod_1.z
        .string()
        .min(1, 'Endereço é obrigatório')
        .max(100, 'Descrição não pode conter mais que 250 caracteres'),
    phone: zod_1.z.string(),
});
exports.updateClinicSchema = exports.createClinicSchema.partial();
exports.idSchema = zod_1.z.object({
    id: zod_1.z.string().uuid('Não é um UUID válido'),
});
//# sourceMappingURL=clinics.schema.js.map