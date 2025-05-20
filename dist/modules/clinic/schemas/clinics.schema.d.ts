import { z } from 'zod';
export declare const createClinicSchema: z.ZodObject<{
    name: z.ZodString;
    address: z.ZodString;
    phone: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    phone: string;
    address: string;
}, {
    name: string;
    phone: string;
    address: string;
}>;
export declare const updateClinicSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    phone?: string | undefined;
    address?: string | undefined;
}, {
    name?: string | undefined;
    phone?: string | undefined;
    address?: string | undefined;
}>;
export declare const idSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type CreateClinicDto = z.infer<typeof createClinicSchema>;
export type UpdateClinicDto = z.infer<typeof updateClinicSchema>;
export type IdParams = z.infer<typeof idSchema>;
