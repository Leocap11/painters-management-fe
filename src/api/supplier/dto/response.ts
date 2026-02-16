import type z from 'zod';
import type { supplierResponseDtoSchema, suppliersResponseDtoSchema } from '../validator/validator';

export type SupplierResponseDTO = z.infer<typeof supplierResponseDtoSchema>;
export type SuppliersResponseDTO = z.infer<typeof suppliersResponseDtoSchema>;
