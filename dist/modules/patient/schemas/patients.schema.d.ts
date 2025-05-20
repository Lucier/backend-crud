import { z } from 'zod';
export declare const createPatientSchema: z.ZodObject<{
    name: z.ZodString;
    cpf: z.ZodString;
    gender: z.ZodString;
    phone: z.ZodString;
    email: z.ZodString;
    address: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    phone: string;
    cpf: string;
    gender: string;
    address: string;
}, {
    name: string;
    email: string;
    phone: string;
    cpf: string;
    gender: string;
    address: string;
}>;
export declare const updatePatientSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    cpf: z.ZodOptional<z.ZodString>;
    gender: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    cpf?: string | undefined;
    gender?: string | undefined;
    address?: string | undefined;
}, {
    name?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    cpf?: string | undefined;
    gender?: string | undefined;
    address?: string | undefined;
}>;
export declare const idSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type CreatePatientDto = z.infer<typeof createPatientSchema>;
export type UpdatePatientDto = z.infer<typeof updatePatientSchema>;
export type IdParams = z.infer<typeof idSchema>;
