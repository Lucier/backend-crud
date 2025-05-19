"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idSchema = exports.updateUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(1, 'Nome é obrigatório')
        .max(100, 'Nome não pode conter mais que 100 caracteres'),
    email: zod_1.z
        .string()
        .email('Formato de email inválido')
        .min(1, 'Email é obrigatório'),
    password: zod_1.z
        .string()
        .min(8, 'A senha deve conter no minimo 8 caracteres')
        .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiuscula')
        .regex(/[0-9]/, 'A senha deve conter pelo menos um número'),
});
exports.updateUserSchema = exports.createUserSchema.partial();
exports.idSchema = zod_1.z.object({
    id: zod_1.z.string().uuid('Não é um UUID válido'),
});
//# sourceMappingURL=user.schema.js.map