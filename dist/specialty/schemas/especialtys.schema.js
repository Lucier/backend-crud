"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idSchema = exports.updateSpecialtySchema = exports.createSpecialtySchema = void 0;
const zod_1 = require("zod");
exports.createSpecialtySchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(1, 'Nome é obrigatório')
        .max(100, 'Nome não pode conter mais que 100 caracteres'),
    description: zod_1.z
        .string()
        .min(1, 'Descrição é obrigatório')
        .max(100, 'Descrição não pode conter mais que 250 caracteres'),
});
exports.updateSpecialtySchema = exports.createSpecialtySchema.partial();
exports.idSchema = zod_1.z.object({
    id: zod_1.z.string().uuid('Não é um UUID válido'),
});
//# sourceMappingURL=especialtys.schema.js.map