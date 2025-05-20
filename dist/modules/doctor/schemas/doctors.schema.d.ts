import { z } from 'zod';
export declare const createDoctorSchema: z.ZodObject<{
    name: z.ZodString;
    crm: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    crm: string;
    email: string;
    phone: string;
}, {
    name: string;
    crm: string;
    email: string;
    phone: string;
}>;
export declare const updateDoctorSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    crm: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    crm?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
}, {
    name?: string | undefined;
    crm?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
}>;
export declare const idSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type CreateDoctorDto = z.infer<typeof createDoctorSchema>;
export type UpdateDoctorDto = z.infer<typeof updateDoctorSchema>;
export type IdParams = z.infer<typeof idSchema>;
